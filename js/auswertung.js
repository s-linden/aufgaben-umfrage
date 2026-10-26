// Stimmen auszählen.
// Eine Stimme ist eine Liste wie ["1.1", "1.3b", "1.3c"]:
// "1.1" = ganze Aufgabe 1.1, "1.3b" = Teilaufgabe b von 1.3.
const Auswertung = (() => {
  function zaehlen(kapitel, stimmen) {
    const ergebnis = kapitel.aufgaben.map((a) => {
      let gesamt = 0;
      let ganz = 0;
      const teile = Object.fromEntries(a.teile.map(([t]) => [t, 0]));
      for (const auswahl of stimmen) {
        const ganzeAufgabe = auswahl.includes(a.nr);
        const gewaehlt = a.teile.filter(([t]) => auswahl.includes(a.nr + t)).map(([t]) => t);
        if (ganzeAufgabe || gewaehlt.length) gesamt++;
        if (ganzeAufgabe) ganz++;
        // „Ganze Aufgabe“ zählt für jede Teilaufgabe mit.
        for (const [t] of a.teile) {
          if (ganzeAufgabe || gewaehlt.includes(t)) teile[t]++;
        }
      }
      return { nr: a.nr, gesamt, ganz, teile };
    });
    return ergebnis.sort((x, y) => y.gesamt - x.gesamt || x.nr.localeCompare(y.nr, 'de', { numeric: true }));
  }

  return { zaehlen };
})();
