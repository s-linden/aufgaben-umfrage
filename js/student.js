// Handy-Ansicht: Aufgaben und Teilaufgaben auswählen und absenden.
(async () => {
  const $ = (id) => document.getElementById(id);
  const code = new URLSearchParams(location.search).get('s');
  let umfrage = null;
  let gesendet = null; // zuletzt abgeschickte Auswahl
  let bearbeiten = false;
  let formularFuer = null; // Kapitel, für das das Formular aufgebaut ist

  function show(view) {
    for (const v of ['loading', 'message', 'form', 'done']) $('view-' + v).hidden = v !== view;
  }

  function message(title, text) {
    $('msg-title').textContent = title;
    $('msg-text').textContent = text;
    show('message');
  }

  function formel(tex) {
    const el = document.createElement('span');
    el.className = 'formel';
    if (window.katex) katex.render(tex, el, { throwOnError: false, displayMode: false });
    else el.textContent = tex;
    return el;
  }

  function baueFormular(kap) {
    const box = $('aufgaben');
    box.innerHTML = '';
    for (const a of kap.aufgaben) {
      const card = document.createElement('div');
      card.className = 'aufgabe';
      card.innerHTML = `
        <label class="aufgabe-head">
          <input type="checkbox" class="aufgabe-check" value="${a.nr}">
          <span><strong>Übung ${a.nr}</strong><span class="aufgabe-text">${a.text}</span></span>
        </label>
        <div class="teile" hidden>
          <p class="muted teile-hint">Welche Teilaufgaben? Ohne Auswahl: ganze Aufgabe.</p>
        </div>`;
      const teile = card.querySelector('.teile');
      for (const [t, tex] of a.teile) {
        const lab = document.createElement('label');
        lab.className = 'teil-option';
        lab.innerHTML = `<input type="checkbox" class="teil-check" value="${a.nr}${t}"><b>${t})</b>`;
        lab.appendChild(formel(tex));
        teile.appendChild(lab);
      }
      const check = card.querySelector('.aufgabe-check');
      check.onchange = () => {
        teile.hidden = !check.checked;
        card.classList.toggle('selected', check.checked);
        if (!check.checked) teile.querySelectorAll('.teil-check').forEach((c) => (c.checked = false));
        formelnEinpassen();
        update();
      };
      teile.addEventListener('change', update);
      box.appendChild(card);
    }
    formularFuer = umfrage.kapitel;
  }

  // Zu breite Formeln so weit verkleinern, dass sie ganz sichtbar sind (höchstens auf 60 %).
  function formelnEinpassen() {
    document.querySelectorAll('.teile:not([hidden]) .formel').forEach((el) => {
      el.style.fontSize = '';
      const faktor = el.clientWidth / el.scrollWidth;
      if (faktor < 1) el.style.fontSize = Math.max(0.6, faktor * 0.98) + 'rem';
    });
  }
  window.addEventListener('resize', formelnEinpassen);

  function auswahl() {
    const out = [];
    document.querySelectorAll('.aufgabe').forEach((card) => {
      const check = card.querySelector('.aufgabe-check');
      if (!check.checked) return;
      const teile = [...card.querySelectorAll('.teil-check:checked')].map((c) => c.value);
      out.push(...(teile.length ? teile : [check.value]));
    });
    return out;
  }

  function setzeAuswahl(liste) {
    document.querySelectorAll('.aufgabe').forEach((card) => {
      const check = card.querySelector('.aufgabe-check');
      const teile = card.querySelectorAll('.teil-check');
      teile.forEach((c) => (c.checked = liste.includes(c.value)));
      check.checked = liste.includes(check.value) || [...teile].some((c) => c.checked);
      card.querySelector('.teile').hidden = !check.checked;
      card.classList.toggle('selected', check.checked);
    });
    formelnEinpassen();
    update();
  }

  function update() {
    $('btn-submit').disabled = auswahl().length === 0;
  }

  // z. B. "1.1 (ganz), 1.3 b, c"
  function beschreibe(liste) {
    const kap = KAPITEL[umfrage.kapitel];
    return kap.aufgaben
      .map((a) => {
        if (liste.includes(a.nr)) return `${a.nr} (ganz)`;
        const t = a.teile.filter(([x]) => liste.includes(a.nr + x)).map(([x]) => x);
        return t.length ? `${a.nr} ${t.join(', ')}` : null;
      })
      .filter(Boolean)
      .join(' · ');
  }

  function render() {
    if (!umfrage) return message('Umfrage nicht gefunden', 'Bitte scannen Sie den aktuellen QR-Code erneut.');
    const kap = KAPITEL[umfrage.kapitel];
    if (!kap) return message('Unbekanntes Kapitel', 'Bitte laden Sie die Seite neu.');
    if (umfrage.status !== 'open') {
      return message('Umfrage beendet', gesendet
        ? 'Danke für Ihre Stimme! Ihre Auswahl: ' + beschreibe(gesendet)
        : 'Die Abstimmung ist bereits beendet.');
    }
    if (formularFuer !== umfrage.kapitel) {
      baueFormular(kap);
      if (gesendet) setzeAuswahl(gesendet);
    }
    $('vote-kapitel').textContent = kap.titel;
    if (gesendet && !bearbeiten) {
      $('done-summary').textContent = beschreibe(gesendet);
      show('done');
    } else {
      show('form');
    }
  }

  $('btn-submit').onclick = async () => {
    const liste = auswahl();
    $('btn-submit').disabled = true;
    try {
      await Backend.abstimmen(code, liste);
      gesendet = liste;
      bearbeiten = false;
      render();
      window.scrollTo(0, 0);
    } catch (e) {
      if (e.message === 'closed') message('Umfrage beendet', 'Ihre Auswahl konnte leider nicht mehr gespeichert werden.');
      else message('Speichern fehlgeschlagen', 'Bitte versuchen Sie es noch einmal. (' + e.message + ')');
    }
  };
  $('btn-edit').onclick = () => {
    bearbeiten = true;
    setzeAuswahl(gesendet);
    render();
  };

  if (!code) return message('Kein Umfrage-Code', 'Bitte scannen Sie den QR-Code am Beamer.');
  try {
    await Backend.init();
    gesendet = await Backend.getMeineStimme(code);
  } catch (e) {
    return message('Keine Verbindung', 'Bitte prüfen Sie Ihre Internetverbindung und laden Sie die Seite neu.');
  }
  Backend.watchUmfrage(code, (u) => { umfrage = u; render(); });
})();
