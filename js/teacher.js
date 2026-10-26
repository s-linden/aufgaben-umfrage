// Beamer-Ansicht: QR-Code, Zähler, Auswertung.
(async () => {
  const $ = (id) => document.getElementById(id);
  const SESSION_KEY = 'au-teacher-umfrage';
  const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // ohne verwechselbare Zeichen

  let code = null;
  let umfrage = null;
  let stimmen = [];
  let showResults = false;
  let unsubscribe = [];

  for (const [id, k] of Object.entries(KAPITEL)) {
    $('kapitel').add(new Option(k.titel, id));
  }

  function show(view) {
    for (const v of ['loading', 'error', 'qr', 'results']) $('view-' + v).hidden = v !== view;
  }

  function fail(text) {
    $('error-text').textContent = text;
    show('error');
  }

  function randomCode() {
    const a = new Uint32Array(5);
    crypto.getRandomValues(a);
    return Array.from(a, (x) => ALPHABET[x % ALPHABET.length]).join('');
  }

  function voteUrl() {
    const url = new URL('vote.html', location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('s', code);
    if (Backend.demo && window.FIREBASE_CONFIG) url.searchParams.set('demo', '');
    return url.toString();
  }

  function renderQr() {
    const url = voteUrl();
    const qr = qrcode(0, 'M');
    qr.addData(url);
    qr.make();
    $('qr').innerHTML = qr.createSvgTag({ cellSize: 8, margin: 2, scalable: true });
    $('join-url').textContent = url.replace(/^https?:\/\//, '');
    $('join-code').textContent = code;
    $('demo-phone').href = url;
  }

  function renderResults(kap) {
    const n = stimmen.length;
    const ergebnis = Auswertung.zaehlen(kap, stimmen);
    const max = ergebnis.length ? ergebnis[0].gesamt : 0;
    const pct = (x) => (n ? Math.round((100 * x) / n) : 0);
    $('results-summary').textContent =
      `${kap.titel} · ${n} ${n === 1 ? 'Stimme' : 'Stimmen'}` + (umfrage.status === 'closed' ? ' · beendet' : '');
    $('results').innerHTML = '';
    for (const r of ergebnis) {
      const row = document.createElement('div');
      row.className = 'result' + (r.gesamt > 0 && r.gesamt === max ? ' top' : '') + (r.gesamt === 0 ? ' none' : '');
      row.innerHTML = `
        <div class="result-head">
          <span class="result-nr">${r.nr}</span>
          <span class="bar-track"><span class="bar-fill" style="width:${pct(r.gesamt)}%"></span></span>
          <span class="result-count">${r.gesamt}</span>
        </div>
        <div class="result-teile"></div>`;
      const teile = row.querySelector('.result-teile');
      for (const [t, c] of Object.entries(r.teile)) {
        const el = document.createElement('span');
        el.className = 'teil';
        el.innerHTML = `<b>${t})</b><span class="mini-track"><span class="mini-fill" style="width:${pct(c)}%"></span></span><span>${c}</span>`;
        teile.appendChild(el);
      }
      $('results').appendChild(row);
    }

    // „Keine“ immer als letzte Zeile, ohne Teilaufgaben.
    const k = Auswertung.keine(stimmen);
    const row = document.createElement('div');
    row.className = 'result keine' + (k === 0 ? ' none' : '');
    row.innerHTML = `
      <div class="result-head">
        <span class="result-nr">Keine</span>
        <span class="bar-track"><span class="bar-fill" style="width:${pct(k)}%"></span></span>
        <span class="result-count">${k}</span>
      </div>`;
    $('results').appendChild(row);
  }

  function render() {
    if (!umfrage) return;
    const kap = KAPITEL[umfrage.kapitel];
    $('kapitel').value = umfrage.kapitel;
    $('btn-toggle').textContent = showResults ? 'QR-Code' : 'Auswertung';
    $('btn-close').textContent = umfrage.status === 'open' ? 'Umfrage beenden' : 'Umfrage wieder öffnen';
    if (showResults) {
      show('results');
      renderResults(kap);
    } else {
      show('qr');
      const n = stimmen.length;
      $('kapitel-titel').textContent = kap.titel;
      $('count').textContent = n;
      $('count-label').textContent = n === 1 ? 'Stimme abgegeben' : 'Stimmen abgegeben';
      $('status-text').textContent = umfrage.status === 'open' ? 'Abstimmung läuft' : 'Abstimmung beendet';
    }
  }

  function watch() {
    unsubscribe.forEach((off) => off());
    unsubscribe = [
      Backend.watchUmfrage(code, (u) => { umfrage = u; render(); }),
      Backend.watchStimmen(code, (list) => { stimmen = list; render(); }),
    ];
    renderQr();
  }

  async function newUmfrage(kapitel) {
    code = randomCode();
    await Backend.createUmfrage(code, kapitel);
    localStorage.setItem(SESSION_KEY, code);
    umfrage = null;
    stimmen = [];
    showResults = false;
    watch();
  }

  // ---------- Bedienung ----------
  const toggle = () => { showResults = !showResults; render(); };
  $('btn-toggle').onclick = toggle;
  $('btn-results').onclick = toggle;
  $('btn-close').onclick = () =>
    Backend.updateUmfrage(code, { status: umfrage.status === 'open' ? 'closed' : 'open' });
  $('btn-new').onclick = () => {
    if (confirm('Neue Umfrage starten? Es wird ein neuer QR-Code erzeugt, die bisherigen Stimmen bleiben bei der alten Umfrage.')) {
      newUmfrage($('kapitel').value).catch((e) => fail('Neue Umfrage fehlgeschlagen: ' + e.message));
    }
  };
  $('kapitel').onchange = () => {
    if (confirm('Für das gewählte Kapitel eine neue Umfrage starten?')) {
      newUmfrage($('kapitel').value).catch((e) => fail('Neue Umfrage fehlgeschlagen: ' + e.message));
    } else if (umfrage) {
      $('kapitel').value = umfrage.kapitel;
    }
  };
  $('btn-fullscreen').onclick = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  };

  if (Backend.demo) {
    $('demo-banner').hidden = false;
    $('btn-fake').onclick = () => {
      try { Backend.addFake(code, 5); } catch { alert('Die Umfrage ist beendet.'); }
    };
  }

  // ---------- Start ----------
  try {
    await Backend.init();
  } catch (e) {
    return fail('Verbindung zu Firebase fehlgeschlagen. ' + e.message);
  }
  try {
    const saved = localStorage.getItem(SESSION_KEY);
    const existing = saved && (await Backend.getUmfrage(saved));
    if (existing && existing.owner === Backend.uid() && KAPITEL[existing.kapitel]) {
      code = saved;
      watch();
    } else {
      await newUmfrage($('kapitel').value);
    }
  } catch (e) {
    fail('Umfrage konnte nicht gestartet werden. ' + e.message);
  }
})();
