// Gemeinsamer Live-Zustand zwischen Beamer und Handys.
// Firebase (Firestore + anonyme Anmeldung) oder, ohne Konfiguration, ein Demo-Modus
// über localStorage, der nur zwischen Tabs desselben Browsers funktioniert.
const Backend = (() => {
  const SDK = 'https://www.gstatic.com/firebasejs/10.14.1/';
  const demo = !window.FIREBASE_CONFIG || new URLSearchParams(location.search).has('demo');

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Skript konnte nicht geladen werden: ' + src));
      document.head.appendChild(s);
    });
  }

  // ---------- Firebase ----------
  function firebaseBackend() {
    let db, uid;
    const ref = (code) => db.collection('umfragen').doc(code);

    return {
      async init() {
        for (const f of ['firebase-app-compat.js', 'firebase-auth-compat.js', 'firebase-firestore-compat.js']) {
          await loadScript(SDK + f);
        }
        firebase.initializeApp(window.FIREBASE_CONFIG);
        const auth = firebase.auth();
        const existing = await new Promise((res) => {
          const off = auth.onAuthStateChanged((u) => { off(); res(u); });
        });
        uid = (existing || (await auth.signInAnonymously()).user).uid;
        db = firebase.firestore();
      },
      uid: () => uid,
      createUmfrage(code, kapitel) {
        return ref(code).set({
          owner: uid,
          kapitel,
          status: 'open',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      },
      async getUmfrage(code) {
        const snap = await ref(code).get();
        return snap.exists ? snap.data() : null;
      },
      watchUmfrage(code, cb) {
        return ref(code).onSnapshot((snap) => cb(snap.exists ? snap.data() : null));
      },
      updateUmfrage(code, patch) {
        return ref(code).update(patch);
      },
      // Nur für die Lehrperson: alle abgegebenen Stimmen.
      watchStimmen(code, cb) {
        return ref(code).collection('stimmen').onSnapshot((snap) => cb(snap.docs.map((d) => d.data().auswahl)));
      },
      async getMeineStimme(code) {
        const snap = await ref(code).collection('stimmen').doc(uid).get();
        return snap.exists ? snap.data().auswahl : null;
      },
      // Jedes Gerät schreibt nur sein eigenes Dokument; erneutes Abstimmen überschreibt es.
      async abstimmen(code, auswahl) {
        try {
          await ref(code).collection('stimmen').doc(uid).set({
            auswahl,
            at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        } catch (e) {
          throw new Error(e.code === 'permission-denied' ? 'closed' : e.message);
        }
      },
    };
  }

  // ---------- Demo ----------
  function demoBackend() {
    const channel = 'BroadcastChannel' in window ? new BroadcastChannel('au-demo') : null;
    const listeners = new Set();
    const key = (code) => 'au-demo-' + code;
    const read = (code) => {
      try { return JSON.parse(localStorage.getItem(key(code))); } catch { return null; }
    };
    const notify = (code) => listeners.forEach((fn) => fn(code));
    const write = (code, state) => {
      localStorage.setItem(key(code), JSON.stringify(state));
      channel && channel.postMessage(code);
      notify(code);
    };
    channel && (channel.onmessage = (e) => notify(e.data));
    window.addEventListener('storage', (e) => e.key && e.key.startsWith('au-demo-') && notify(e.key.slice(8)));

    // Jeder Tab ist ein eigenes „Gerät“.
    let uid = sessionStorage.getItem('au-demo-uid');
    if (!uid) {
      uid = 'demo-' + Math.random().toString(36).slice(2, 10);
      sessionStorage.setItem('au-demo-uid', uid);
    }

    function watch(code, cb) {
      const fn = (c) => c === code && cb(read(code));
      listeners.add(fn);
      setTimeout(() => cb(read(code)), 0);
      return () => listeners.delete(fn);
    }

    function vote(code, id, auswahl) {
      const st = read(code);
      if (!st || st.status !== 'open') throw new Error('closed');
      st.stimmen[id] = auswahl;
      write(code, st);
    }

    return {
      demo: true,
      async init() {},
      uid: () => uid,
      async createUmfrage(code, kapitel) {
        write(code, { owner: uid, kapitel, status: 'open', stimmen: {} });
      },
      async getUmfrage(code) {
        return read(code);
      },
      watchUmfrage: watch,
      async updateUmfrage(code, patch) {
        write(code, Object.assign(read(code), patch));
      },
      watchStimmen: (code, cb) => watch(code, (st) => cb(st ? Object.values(st.stimmen) : [])),
      async getMeineStimme(code) {
        const st = read(code);
        return (st && st.stimmen[uid]) || null;
      },
      async abstimmen(code, auswahl) {
        vote(code, uid, auswahl);
      },
      // Zufällige Test-Stimmen für das Kapitel der Umfrage.
      addFake(code, k) {
        const kap = KAPITEL[read(code).kapitel];
        for (let i = 0; i < k; i++) {
          const auswahl = [];
          for (const a of kap.aufgaben) {
            if (Math.random() < 0.6) continue;
            const teile = a.teile.filter(() => Math.random() < 0.4).map(([t]) => a.nr + t);
            auswahl.push(...(teile.length ? teile : [a.nr]));
          }
          if (auswahl.length) vote(code, 'fake-' + Math.random().toString(36).slice(2, 10), auswahl);
        }
      },
    };
  }

  return demo ? demoBackend() : firebaseBackend();
})();
