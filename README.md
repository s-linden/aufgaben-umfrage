# Aufgaben-Umfrage

Die Studierenden stimmen im Hörsaal per QR-Code ab, welche Übungsaufgaben in der Übung besprochen werden sollen.

1. **Beamer:** `index.html` zeigt einen QR-Code und zählt live mit, wie viele Stimmen abgegeben wurden.
2. **Handy:** `vote.html` listet die Übungen des Kapitels. Wer eine Übung ankreuzt, kann optional einzelne Teilaufgaben wählen (mit Formeln). Ohne Auswahl einer Teilaufgabe gilt die ganze Aufgabe.
   Bis zum Ende der Umfrage lässt sich die Auswahl ändern. Pro Gerät zählt eine Stimme.
3. **Auswertung:** Der Knopf **Auswertung** zeigt alle Übungen sortiert nach Anzahl der Stimmen, jeweils mit Balken für die Teilaufgaben.
   Wer „ganze Aufgabe“ gewählt hat, zählt bei allen Teilaufgaben mit. Die Auswertung aktualisiert sich live.

Weitere Knöpfe: **Umfrage beenden / wieder öffnen**, **Neue Umfrage** (neuer QR-Code), Kapitelauswahl, **Vollbild**.

## Aufgaben ändern oder neues Kapitel ergänzen

Alle Aufgaben stehen in [`js/aufgaben.js`](js/aufgaben.js), Formeln in LaTeX. Ein neues Kapitel ist ein weiterer Eintrag nach demselben Muster.
Es erscheint dann automatisch in der Kapitelauswahl am Beamer.

## Ausprobieren ohne Einrichtung (Demo-Modus)

Doppelklick auf **`Lokal starten.command`**. Der Browser öffnet die Beamer-Ansicht unter `http://localhost:8766/`.
Solange in `js/config.js` keine Firebase-Daten stehen, läuft alles im Demo-Modus, und zwar nur in diesem einen Browser:
- „Handy-Ansicht in neuem Tab öffnen“ simuliert ein Handy. Jeder neue Tab ist ein weiteres Gerät.
- „+5 Test-Stimmen“ erzeugt zufällige Stimmen.

## Live-Betrieb mit Firebase

Wie beim Zufallsgruppen-Generator: ein kostenloses Firebase-Projekt (Spark-Tarif) mit
- anonymer Anmeldung (Authentication → Anmeldemethode → Anonym),
- `s-linden.github.io` als autorisierter Domain,
- Firestore in `europe-west3 (Frankfurt)` mit den Regeln aus [`firestore.rules`](firestore.rules),
- den Werten der Web-App in `js/config.js`.

**Datenschutz:** Gespeichert werden nur zufällige Geräte-IDs und die gewählten Aufgabennummern, keine Namen.
Die einzelnen Stimmen kann nur die Lehrperson lesen, die die Umfrage gestartet hat.

## Aufbau

| Datei | Inhalt |
| --- | --- |
| `index.html`, `js/teacher.js` | Beamer-Ansicht mit QR-Code und Auswertung |
| `vote.html`, `js/student.js` | Handy-Ansicht |
| `js/aufgaben.js` | Übungsaufgaben je Kapitel |
| `js/auswertung.js` | Auszählen der Stimmen |
| `js/backend.js` | Live-Abgleich über Firebase bzw. Demo-Modus |
| `js/config.js` | Firebase-Zugangsdaten |
| `firestore.rules` | Zugriffsregeln für die Datenbank |
| `css/style.css` | Gestaltung (große Schrift für den Beamer) |
