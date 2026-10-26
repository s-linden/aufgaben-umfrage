# Erzeugt js/aufgaben.js aus den Übungen zum Selbststudium (chapterXX_sec07.md) des Skripts.
import re, sys, pathlib

skript, ziel = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
TEIL = re.compile(r"^([a-z])\)\s+(.*)$", re.S)

def clean(s):
    s = s.replace("\\displaystyle", "")
    s = re.sub(r"[ \t]+", " ", s)
    return s.strip()

def raw(s):
    assert "`" not in s, s
    s = s.replace("${", "$ {")             # sonst Platzhalter in der JS-Vorlage
    return "String.raw`" + s + "`"

kapitel = []
for k in range(1, 13):
    d = skript / f"chapter{k:02d}"
    titel = (d / f"chapter{k:02d}_sec00.md").read_text().splitlines()[0].lstrip("# ").strip()
    nr, name = titel.split(". ", 1)
    src = (d / f"chapter{k:02d}_sec07.md").read_text()
    aufgaben = []
    for m in re.finditer(r"^(`{3,})\{admonition\} Übung (\d+\.\d+)[^\n]*\n(.*?)^\1\s*$", src, re.S | re.M):
        body = re.sub(r"^:class:.*\n", "", m.group(3), flags=re.M).strip()
        paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
        text, teile, nach_teilen = [], [], False
        for p in paras:
            t = TEIL.match(p)
            if t:
                teile.append((t.group(1), clean(t.group(2))))
                nach_teilen = True
            elif re.match(r"^(Hinweis|Tipp)", p) or re.match(r"^\(.*\)$", p):
                continue                      # Hinweise/Tipps weglassen
            elif not nach_teilen:
                text.append(clean(p))
        aufgaben.append((m.group(2), "\n\n".join(text), teile))
    kapitel.append((nr, f"Kapitel {nr}: {name}", aufgaben))

zeilen = [
    "// Übungsaufgaben je Kapitel (aus dem Skript „Mathematik 1 – Grundlagen“, Übungen zum Selbststudium).",
    "// Automatisch erzeugt aus den Dateien chapterXX/chapterXX_sec07.md; Hinweise und Lösungen sind weggelassen.",
    "// Texte enthalten Formeln in LaTeX zwischen $…$ (im Text) bzw. $$…$$ (abgesetzt).",
    "// Aufgaben ohne Teilaufgaben haben eine leere Liste „teile“.",
    "const KAPITEL = {",
]
for nr, titel, aufgaben in kapitel:
    zeilen.append(f"  '{nr}': {{")
    zeilen.append(f"    titel: '{titel}',")
    zeilen.append("    aufgaben: [")
    for a, text, teile in aufgaben:
        zeilen.append("      {")
        zeilen.append(f"        nr: '{a}',")
        zeilen.append(f"        text: {raw(text)},")
        if teile:
            zeilen.append("        teile: [")
            for t, inhalt in teile:
                zeilen.append(f"          ['{t}', {raw(inhalt)}],")
            zeilen.append("        ],")
        else:
            zeilen.append("        teile: [],")
        zeilen.append("      },")
    zeilen.append("    ],")
    zeilen.append("  },")
zeilen.append("};")
ziel.write_text("\n".join(zeilen) + "\n")
gesamt = sum(len(a) for _, _, a in kapitel)
print(f"{gesamt} Übungen, max. Teile je Kapitel:", {n: sum(max(len(t),1) for _, _, t in a) for n, _, a in kapitel})
