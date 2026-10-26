// Übungsaufgaben je Kapitel (aus dem Skript „Mathematik 1 – Grundlagen“, Übungen zum Selbststudium).
// Neues Kapitel: einfach einen weiteren Eintrag nach demselben Muster ergänzen.
// Formeln in LaTeX; String.raw sorgt dafür, dass Backslashes unverändert bleiben.
const KAPITEL = {
  '1': {
    titel: 'Kapitel 1: Elementare Grundlagen',
    aufgaben: [
      {
        nr: '1.1',
        text: 'Vereinfachen Sie die folgenden Ausdrücke.',
        teile: [
          ['a', String.raw`7a-\left( 2-5(3b-4a)-(2a-3)(-b+4) \right)`],
          ['b', String.raw`\frac{a+2b}{3a^2-3ab}-\frac{1}{2b}-\frac{3b-a}{2ab-2b^2}`],
          ['c', String.raw`\frac{(6a+3b)^2(12a-6b)^2}{(24a^2-6b^2)^2}`],
        ],
      },
      {
        nr: '1.2',
        text: 'Vereinfachen Sie die folgenden Ausdrücke.',
        teile: [
          ['a', String.raw`\left( \frac{3}{4} \right)^{-2}\left( \frac{4}{3} \right)^{-3}`],
          ['b', String.raw`\frac{(9xy^3)^3}{(12x^2y)^4}\cdot\frac{(8x^4y)^5}{(6x^5y^3)^3}`],
          ['c', String.raw`a^{m-n+1}\,a^{m+n-8}`],
          ['d', String.raw`\frac{x^{2n+1}\cdot y^{2n-1}}{x^{n-1}\cdot y^{n-2}}`],
          ['e', String.raw`\sqrt[4]{a^2\sqrt[3]{a^2}}`],
        ],
      },
      {
        nr: '1.3',
        text: 'Bestimmen Sie die Zahlen A, B, C.',
        teile: [
          ['a', String.raw`\frac{1}{x^2+10x+16}=\frac{A}{x+2}+\frac{B}{x+8}`],
          ['b', String.raw`\frac{1}{x^3+15x^2+71x+105}=\frac{A}{x+3}+\frac{B}{x+5}+\frac{C}{x+7}`],
        ],
      },
      {
        nr: '1.4',
        text: 'Zerlegen Sie folgende Terme mit den Logarithmengesetzen.',
        teile: [
          ['a', String.raw`\ln \frac{ax}{b}`],
          ['b', String.raw`\ln \frac{\sqrt{a}}{bx^2}`],
          ['c', String.raw`\ln \sqrt{2a\frac{x^2}{\sqrt{z}}}`],
          ['d', String.raw`\ln \sqrt{a^3\frac{b^2}{\sqrt[4]{8z^3}}}`],
        ],
      },
      {
        nr: '1.5',
        text: 'Fassen Sie folgende Terme in einen einzigen Logarithmus zusammen.',
        teile: [
          ['a', String.raw`\ln 3+2\ln x-2\ln a`],
          ['b', String.raw`\tfrac{1}{2}\ln a+\ln b-2\ln a`],
          ['c', String.raw`\ln a+x\ln x-\tfrac{1}{a}\ln b`],
          ['d', String.raw`\tfrac{1}{2}\left(\ln (a+b)-\ln ab\right)`],
        ],
      },
      {
        nr: '1.6',
        text: 'Lösen Sie die folgenden Gleichungen.',
        teile: [
          ['a', String.raw`3x-5=12x+4`],
          ['b', String.raw`\begin{array}{l} x-3y=2 \\ x+2y=1 \end{array}`],
          ['c', String.raw`3-\sqrt{x^2+1}=2x`],
        ],
      },
    ],
  },
};
