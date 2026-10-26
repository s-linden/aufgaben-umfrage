# Aufgaben-Umfrage

Die Studierenden stimmen im Hörsaal per QR-Code ab, welche Übungsaufgaben in der Übung besprochen werden sollen.

1. **Beamer:** `index.html` zeigt einen QR-Code und zählt live mit, wie viele Stimmen abgegeben wurden.
2. **Handy:** `vote.html` listet die Übungen des Kapitels. Wer eine Übung ankreuzt, kann optional einzelne Teilaufgaben wählen (mit Formeln). Ohne Auswahl einer Teilaufgabe gilt die ganze Aufgabe.
   Bis zum Ende der Umfrage lässt sich die Auswahl ändern. Pro Gerät zählt eine Stimme.
3. **Auswertung:** Der Knopf **Auswertung** zeigt alle Übungen sortiert nach Anzahl der Stimmen, jeweils mit Balken für die Teilaufgaben.
   Wer „ganze Aufgabe“ gewählt hat, zählt bei allen Teilaufgaben mit. Die Auswertung aktualisiert sich live.

Weitere Knöpfe: **Umfrage beenden / wieder öffnen**, **Neue Umfrage** (neuer QR-Code), Kapitelauswahl, **Vollbild**.

## Aufgaben ändern oder neues Kapitel ergänzen

Alle Aufgaben der Kapitel 1–12 stehen in [`js/aufgaben.js`](js/aufgaben.js), Formeln in LaTeX zwischen `$…$`.
Die Datei wird aus den „Übungen zum Selbststudium“ des Skripts (`chapterXX/chapterXX_sec07.md`) erzeugt. Hinweise, Tipps und Lösungen werden dabei weggelassen.
Ändern sich die Übungen im Skript, lässt sich die Datei neu erzeugen:

```bash
python3 werkzeuge/aufgaben-aus-skript.py "../../04 WS26:27/99 Skript/mathematik-1-grundlagen" js/aufgaben.js
```

Einzelne Aufgaben kann man auch direkt in `js/aufgaben.js` anpassen. Das wird beim nächsten Neuerzeugen aber überschrieben.
Übungen ohne Teilaufgaben (`teile: []`) lassen sich nur als Ganzes wählen.

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

> Eingerichtet ist das eigene Firebase-Projekt `aufgaben-umfrage`: Firestore in `europe-west3`, anonyme Anmeldung aktiv, `s-linden.github.io` als Domain freigegeben, Gemini und Analytics aus.
> Wer die Regeln in `firestore.rules` ändert, muss sie in der Konsole erneut einfügen und veröffentlichen.

### API-Schlüssel

Der `apiKey` in `js/config.js` ist absichtlich öffentlich, wie bei jeder Firebase-Web-App. GitHub meldet ihn eventuell trotzdem als „Secret“. Diese Warnung kann mit „Won't fix“ geschlossen werden.
Damit er nicht anderswo missbraucht werden kann, ist er in der [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=aufgaben-umfrage) („Browser key (auto created by Firebase)“) eingeschränkt.

- **Websites:** `https://s-linden.github.io/*`, `http://localhost:8766/*`, `https://aufgaben-umfrage.firebaseapp.com/*`
- **Dienste:** die 25 Firebase-Dienste, die Firebase voreingestellt hat (u. a. Identity Toolkit, Token Service, Cloud Firestore)

Läuft das Tool künftig unter einer anderen Adresse oder einem anderen lokalen Port, muss diese dort unter „Website-Einschränkungen“ ergänzt werden. Bis Änderungen greifen, kann es bis zu 5 Minuten dauern.

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
