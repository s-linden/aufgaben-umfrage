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
      teile.addEventListener('change', () => { keineAbwaehlen(); update(); });
      check.addEventListener('change', () => { if (check.checked) { keineAbwaehlen(); update(); } });
      box.appendChild(card);
    }

    // Letzte Option „Keine“: schließt alle anderen aus.
    const keine = document.createElement('div');
    keine.className = 'aufgabe keine-card';
    keine.innerHTML = `
      <label class="aufgabe-head">
        <input type="checkbox" id="keine-check" value="${KEINE}">
        <span><strong>Keine</strong><span class="aufgabe-text">Keine Aufgabe muss besprochen werden.</span></span>
      </label>`;
    $('aufgaben').appendChild(keine);
    $('keine-check').onchange = () => {
      if ($('keine-check').checked) setzeAuswahl([KEINE]);
      else update();
    };
    formularFuer = umfrage.kapitel;
  }

  function keineAbwaehlen() {
    $('keine-check').checked = false;
    document.querySelector('.keine-card').classList.remove('selected');
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
    if ($('keine-check').checked) return [KEINE];
    const out = [];
    document.querySelectorAll('.aufgabe:not(.keine-card)').forEach((card) => {
      const check = card.querySelector('.aufgabe-check');
      if (!check.checked) return;
      const teile = [...card.querySelectorAll('.teil-check:checked')].map((c) => c.value);
      out.push(...(teile.length ? teile : [check.value]));
    });
    return out;
  }

  function setzeAuswahl(liste) {
    $('keine-check').checked = liste.includes(KEINE);
    document.querySelector('.keine-card').classList.toggle('selected', $('keine-check').checked);
    document.querySelectorAll('.aufgabe:not(.keine-card)').forEach((card) => {
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
    if (liste.includes(KEINE)) return 'Keine';
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
    $('btn-submit').textContent = 'Wird gespeichert …';
    $('submit-error').hidden = true;
    try {
      await Backend.abstimmen(code, liste);
      gesendet = liste;
      bearbeiten = false;
      render();
      window.scrollTo(0, 0);
    } catch (e) {
      if (umfrage && umfrage.status !== 'open') {
        message('Umfrage beendet', 'Ihre Auswahl konnte leider nicht mehr gespeichert werden.');
      } else {
        // Auswahl bleibt erhalten; die Ursache wird angezeigt, damit man sie melden kann.
        $('submit-error').textContent = `Speichern hat nicht geklappt. Bitte noch einmal versuchen. (Fehler: ${e.code || 'unbekannt'} – ${e.message})`;
        $('submit-error').hidden = false;
      }
    }
    $('btn-submit').textContent = 'Auswahl absenden';
    update();
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
