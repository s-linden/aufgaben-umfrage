// Übungsaufgaben je Kapitel (aus dem Skript „Mathematik 1 – Grundlagen“, Übungen zum Selbststudium).
// Automatisch erzeugt aus den Dateien chapterXX/chapterXX_sec07.md; Hinweise und Lösungen sind weggelassen.
// Texte enthalten Formeln in LaTeX zwischen $…$ (im Text) bzw. $$…$$ (abgesetzt).
// Aufgaben ohne Teilaufgaben haben eine leere Liste „teile“.
const KAPITEL = {
  '1': {
    titel: 'Kapitel 1: Elementare Grundlagen',
    aufgaben: [
      {
        nr: '1.1',
        text: String.raw`Vereinfachen Sie die folgenden Ausdrücke.`,
        teile: [
          ['a', String.raw`$ 7a-\left( 2-5(3b-4a)-(2a-3)(-b+4) \right)$`],
          ['b', String.raw`$ \frac{a+2b}{3{a}^{2}-3ab}-\frac{1}{2b}-\frac{3b-a}{2ab-2{b}^{2}}$`],
          ['c', String.raw`$ \frac{{(6a+3b)}^{2}{(12a-6b)}^{2}}{{(24{a}^{2}-6{b}^{2})}^{2}}$`],
        ],
      },
      {
        nr: '1.2',
        text: String.raw`Vereinfachen Sie die folgenden Ausdrücke.`,
        teile: [
          ['a', String.raw`$ {\left( \frac{3}{4} \right)}^{-2}{\left( \frac{4}{3} \right)}^{-3}$`],
          ['b', String.raw`$ \frac{{(9x{y}^{3})}^{3}}{{(12{x}^{2}y)}^{4}}\frac{{(8{x}^{4}y)}^{5}}{{(6{x}^{5}{y}^{3})}^{3}}$`],
          ['c', String.raw`$ {a}^{m-n+1}{a}^{m+n-8}$`],
          ['d', String.raw`$ \frac{{x}^{2n+1}\,\cdot{y}^{2n-1}}{{x}^{n-1}\,\cdot{y}^{n-2}}$`],
          ['e', String.raw`$ \sqrt[4]{{a}^{2}\sqrt[3]{{a}^{2}}}$`],
        ],
      },
      {
        nr: '1.3',
        text: String.raw`Bestimmen Sie die Zahlen $A, B, C$.`,
        teile: [
          ['a', String.raw`$ \frac{1}{{x}^{2}+10x+16}=\frac{A}{x+2}+\frac{B}{x+8}$`],
          ['b', String.raw`$ \frac{1}{{x}^{3}+15{x}^{2}+71x+105}=\frac{A}{x+3}+\frac{B}{x+5}+\frac{C}{x+7}$`],
        ],
      },
      {
        nr: '1.4',
        text: String.raw`Zerlegen Sie folgende Terme mit den Logarithmengesetzen.`,
        teile: [
          ['a', String.raw`$ \ln \frac{ax}{b}$`],
          ['b', String.raw`$ \ln \frac{\sqrt{a}}{b{x}^{2}}$`],
          ['c', String.raw`$ \ln \sqrt{2a\frac{{x}^{2}}{\sqrt{z}}}$`],
          ['d', String.raw`$ \ln \sqrt{{a}^{3}\frac{{b}^{2}}{\sqrt[4]{8{z}^{3}}}}$`],
        ],
      },
      {
        nr: '1.5',
        text: String.raw`Fassen Sie folgende Terme in einen einzigen Logarithmus zusammen.`,
        teile: [
          ['a', String.raw`$ \ln 3+2\ln x-2\ln a$`],
          ['b', String.raw`$ \frac{1}{2}\ln a+\ln b-2\ln a$`],
          ['c', String.raw`$ \ln a+x\ln x-\frac{1}{a}\ln b$`],
          ['d', String.raw`$ \frac{1}{2}(\ln (a+b)-\ln ab)$`],
        ],
      },
      {
        nr: '1.6',
        text: String.raw`Lösen Sie die folgenden Gleichungen.`,
        teile: [
          ['a', String.raw`$ 3x-5=12x+4$`],
          ['b', String.raw`$ \begin{array}{l} x-3y=2 \\ x+2y=1 \end{array}$`],
          ['c', String.raw`$ 3-\sqrt{{x}^{2}+1}=2x$`],
        ],
      },
    ],
  },
  '2': {
    titel: 'Kapitel 2: Funktionen',
    aufgaben: [
      {
        nr: '2.1',
        text: String.raw`Bestimmen Sie die Umkehrfunktionen folgender Funktionen. Geben Sie auch die Definitionsbereiche der Umkehrfunktionen an!`,
        teile: [
          ['a', String.raw`$ f(x)={x}^{2}-1\qquad x\geq0,\ x\in\mathbb{R}$`],
          ['b', String.raw`$ f(x)={(x+1)}^{2}\qquad x\geq-1,\ x\in\mathbb{R}$`],
          ['c', String.raw`$ f(x)={x}^{3}+1\qquad x\in\mathbb{R}$`],
          ['d', String.raw`$ f(x)={e}^{-x}\qquad x\in\mathbb{R}$`],
        ],
      },
      {
        nr: '2.2',
        text: String.raw`Zeigen Sie:`,
        teile: [
          ['a', String.raw`$ {\sin }^{2}x=\frac{1}{2}(1-\cos (2x))$`],
          ['b', String.raw`$ {\cos }^{2}x=\frac{1}{2}(1+\cos (2x))$`],
          ['c', String.raw`$ {\sin }^{4}x=\frac{1}{8}(3-4\cos (2x)+\cos (4x))$`],
        ],
      },
      {
        nr: '2.3',
        text: String.raw`Vereinfachen Sie die folgenden Terme.`,
        teile: [
          ['a', String.raw`$ 2{\sin }^{2}(x)\cos (\frac{x}{2})+\cos (2x)\sin (\frac{x}{2}+\frac{\pi}{2})$`],
          ['b', String.raw`$ \sin (2x)\cos (x)-{\cos }^{2}(x)\sin (x)+{\sin }^{3}(x)$`],
          ['c', String.raw`$ {\cos }^{3}(x)-3{\sin }^{2}(x)\cos (x)$`],
          ['d', String.raw`$ 2\sin (2x)\left( 1-2{\sin }^{2}(x) \right)$`],
        ],
      },
    ],
  },
  '3': {
    titel: 'Kapitel 3: Vektorräume',
    aufgaben: [
      {
        nr: '3.1',
        text: String.raw`Gegeben sind die Vektoren

$$\vec{a}=\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix},\quad \vec{b}=\begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix},\quad \vec{c}=\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$

Berechnen Sie:`,
        teile: [
          ['a', String.raw`$\vec{a}+\vec{b}$`],
          ['b', String.raw`$\vec{a}+\frac{1}{2}\vec{b}+2\vec{c}$`],
          ['c', String.raw`$\vec{b}-2\vec{a}$`],
          ['d', String.raw`$\left|\vec{a}\right|$`],
          ['e', String.raw`$\left|\vec{b}\right|$`],
          ['f', String.raw`$\left|\vec{a}-\vec{b}\right|$`],
          ['g', String.raw`Einheitsvektor in Richtung $\vec{a}$`],
          ['h', String.raw`Einheitsvektor in Richtung $\vec{b}$`],
        ],
      },
      {
        nr: '3.2',
        text: String.raw`Auf ein Teilchen wirken folgende Kräfte in Newton:

$$\vec{F}_{1}=\begin{pmatrix} 3 \\ -2 \\ 5 \end{pmatrix},\quad \vec{F}_{2}=\begin{pmatrix} -1 \\ 7 \\ -3 \end{pmatrix},\quad \vec{F}_{3}=\begin{pmatrix} 5 \\ -1 \\ 4 \end{pmatrix},\quad \vec{F}_{4}=\begin{pmatrix} 0 \\ -2 \\ 3 \end{pmatrix}$$

Bestimmen Sie die Größe und die Richtung der resultierenden Kraft.`,
        teile: [],
      },
      {
        nr: '3.3',
        text: String.raw`Gegeben sind:

$$\vec{a}=\begin{pmatrix} 3 \\ -2 \\ 1 \end{pmatrix},\quad \vec{b}=\begin{pmatrix} -2 \\ 5 \\ 4 \end{pmatrix},\quad \vec{c}=\begin{pmatrix} -4 \\ 1 \\ -2 \end{pmatrix},\quad \vec{d}=\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}$$

Bestimmen Sie $\alpha$, $\beta$ und $\gamma$ so, dass

$$\vec{d}=\alpha\cdot\vec{a}+\beta\cdot\vec{b}+\gamma\cdot\vec{c}$$`,
        teile: [],
      },
      {
        nr: '3.4',
        text: String.raw`Gegeben seien die Punkte $P=(1,-3,4)$, $Q=(2,2,1)$ und $R=(3,7,-2)$. Bestimmen Sie $\overrightarrow{PQ}$ und $\overrightarrow{QR}$. Zeigen Sie, dass die Punkte $P$, $Q$ und $R$ auf einer Linie liegen und bestimmen Sie das Verhältnis $\left|\overrightarrow{PQ}\right|:\left|\overrightarrow{QR}\right|$.`,
        teile: [],
      },
      {
        nr: '3.5',
        text: String.raw`Berechnen Sie den Abstand folgender Punkte und den Mittelpunkt der Strecke $\overline{AB}$.`,
        teile: [
          ['a', String.raw`$A=(7,11),\ B=(5,15)$`],
          ['b', String.raw`$A=(-8,-3),\ B=(4,1)$`],
          ['c', String.raw`$A=(1,2,3),\ B=(3,4,5)$`],
          ['d', String.raw`$A=(-1,-2,3),\ B=(3,-4,-5)$`],
        ],
      },
    ],
  },
  '4': {
    titel: 'Kapitel 4: Vektorrechnung',
    aufgaben: [
      {
        nr: '4.1',
        text: String.raw`Gegeben seien die Vektoren

$$\vec{u}=\begin{pmatrix} 4 \\ 0 \\ -2 \end{pmatrix},\quad \vec{v}=\begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix},\quad \vec{w}=\begin{pmatrix} 2 \\ 1 \\ 6 \end{pmatrix},\quad \vec{s}=\begin{pmatrix} 1 \\ 4 \\ 1 \end{pmatrix}$$

Berechnen Sie die folgenden Ausdrücke. Ist das Ergebnis eine Zahl oder ein Vektor?`,
        teile: [
          ['a', String.raw`$\vec{u}\cdot\vec{v}$`],
          ['b', String.raw`$\vec{v}\cdot\vec{s}$`],
          ['c', String.raw`$\vec{e}_{w}$`],
          ['d', String.raw`$(\vec{v}\cdot\vec{s})\cdot\vec{e}_{u}$`],
          ['e', String.raw`$(\vec{u}\cdot\vec{w})\cdot(\vec{v}\cdot\vec{s})$`],
          ['f', String.raw`$(\vec{u}\cdot\vec{e}_{1})\cdot\vec{v}+(\vec{w}\cdot\vec{s})\cdot\vec{e}_{3}$`],
        ],
      },
      {
        nr: '4.2',
        text: String.raw`Gegeben seien $\vec{u}$, $\vec{v}$, $\vec{w}$ und $\vec{s}$ wie in Aufgabe 4.1. Berechnen Sie`,
        teile: [
          ['a', String.raw`den Winkel zwischen $\vec{u}$ und $\vec{w}$,`],
          ['b', String.raw`den Winkel zwischen $\vec{v}$ und $\vec{s}$,`],
          ['c', String.raw`den Wert $\lambda$, für den $\vec{u}+\lambda\vec{e}_{3}$ und $\vec{v}-\lambda\vec{e}_{1}$ senkrecht aufeinander stehen,`],
          ['d', String.raw`den Wert $\mu$, für den $\vec{w}+\mu\vec{e}_{1}$ und $\vec{s}-\mu\vec{e}_{1}$ senkrecht aufeinander stehen.`],
        ],
      },
      {
        nr: '4.3',
        text: String.raw`Gegeben sei die Richtung $\vec{a}=(3,\,2,\,1)$.`,
        teile: [
          ['a', String.raw`Berechnen Sie $\vec{e}_{a}$.`],
          ['b', String.raw`Welche Komponenten hat der Vektor $\vec{b}$ in Richtung von $\vec{e}_{a}$, der die Länge 5 hat?`],
          ['c', String.raw`Berechnen Sie den Vektor, der durch die Projektion von $\vec{b}$ in Richtung von $\vec{c}=(2,\,-3,\,1)$ entsteht.`],
        ],
      },
      {
        nr: '4.4',
        text: String.raw`Bestimmen Sie den Wert von $t$, der den Winkel zwischen den Vektoren $\vec{a}=(3,\,1,\,0)$ und $\vec{b}=(t,\,0,\,1)$ zu $45^\circ$ macht.`,
        teile: [],
      },
      {
        nr: '4.5',
        text: String.raw`Zeigen Sie, dass die beiden Linien durch die Punkte $(2,3,4)$ und $(1,2,3)$ bzw. $(1,0,2)$ und $(2,3,-2)$ senkrecht zueinander stehen.`,
        teile: [],
      },
      {
        nr: '4.6',
        text: String.raw`Gegeben seien $\vec{p}=(1,\,1,\,1)$, $\vec{q}=(0,\,-1,\,2)$ und $\vec{r}=(2,\,2,\,1)$. Berechnen Sie die folgenden Ausdrücke. Ist das Ergebnis eine Zahl oder ein Vektor?`,
        teile: [
          ['a', String.raw`$\vec{p}\times\vec{q}$`],
          ['b', String.raw`$\vec{p}\times\vec{r}$`],
          ['c', String.raw`$\vec{r}\times\vec{q}$`],
          ['d', String.raw`$(\vec{p}\times\vec{r})\cdot\vec{q}$`],
          ['e', String.raw`$\vec{q}\cdot(\vec{r}\times\vec{p})$`],
          ['f', String.raw`$(\vec{p}\times\vec{r})\times\vec{q}$`],
        ],
      },
      {
        nr: '4.7',
        text: String.raw`Zeigen Sie, dass $(\vec{a}-\vec{b})\times(\vec{a}+\vec{b})=2(\vec{a}\times\vec{b})$.`,
        teile: [],
      },
      {
        nr: '4.8',
        text: String.raw`Seien $\vec{a}$, $\vec{b}$ und $\vec{c}$ drei Vektoren, für die gilt $\vec{a}+\vec{b}+\vec{c}=0$. Zeigen Sie, dass dann gilt $\vec{a}\times\vec{b}=\vec{b}\times\vec{c}=\vec{c}\times\vec{a}$. Interpretieren Sie das Ergebnis geometrisch.`,
        teile: [],
      },
    ],
  },
  '5': {
    titel: 'Kapitel 5: Punkte, Geraden und Ebenen',
    aufgaben: [
      {
        nr: '5.1',
        text: String.raw`Bestimmen Sie die Geradengleichung für die Gerade durch die Punkte $A=(1,2,3)$ und $B=(4,5,6)$.`,
        teile: [],
      },
      {
        nr: '5.2',
        text: String.raw`Bestimmen Sie die Normalengleichung für die Ebene durch die Punkte $A=(1,2,3)$, $B=(2,4,5)$ und $C=(4,5,6)$.`,
        teile: [],
      },
      {
        nr: '5.3',
        text: String.raw`Gegeben sei eine Gerade $\vec{a}+s\cdot\vec{b}$ und der Ortsvektor $\vec{c}$ eines Punktes. Bestimmen Sie die Parametergleichung für die Ebene durch die Gerade und den Punkt.`,
        teile: [],
      },
      {
        nr: '5.4',
        text: String.raw`Zeigen Sie, dass sich die Geraden $\vec{x}(s)=(1,\,2,\,-1)+s(2,\,2,\,1)$ und $\vec{x}(t)=(-1,\,-2,\,3)+t(4,\,6,\,-3)$ schneiden. Bestimmen Sie den Schnittpunkt $S$ und den Winkel $\varphi$ zwischen den Geraden.`,
        teile: [],
      },
      {
        nr: '5.5',
        text: String.raw`Eine Gerade $L$ verläuft durch die Punkte $A=(5,1,7)$ und $B=(6,0,8)$ und eine Gerade $M$ verläuft durch die Punkte $C=(3,1,3)$ und $D=(-1,3,3)$. Bestimmen Sie den Abstand der Geraden.`,
        teile: [],
      },
      {
        nr: '5.6',
        text: String.raw`Berechnen Sie die Fläche des Dreiecks mit den Eckpunkten $(1,1,0)$, $(1,0,1)$ und $(0,1,1)$.`,
        teile: [],
      },
      {
        nr: '5.7',
        text: String.raw`Gegeben seien die Punkte $P=(3,1,2)$ und $Q=(1,-2,-4)$.`,
        teile: [
          ['a', String.raw`Bestimmen Sie die Normalengleichung der Ebene, die durch $Q$ verläuft und die senkrecht auf dem Vektor $\overrightarrow{PQ}$ steht.`],
          ['b', String.raw`Bestimmen Sie den Abstand $ {d}_{R}$ des Punktes $R=(-1,1,1)$ zu dieser Ebene.`],
        ],
      },
      {
        nr: '5.8',
        text: String.raw`Bestimmen Sie die Schnittlinie der Ebenen $x+y+z=5$ und $4x+y+2z=15$.`,
        teile: [],
      },
      {
        nr: '5.9',
        text: String.raw`Bestimmen Sie den Winkel zwischen den Ebenen $2x+y-2z=5$ und $3x-6y-2z=7$.`,
        teile: [],
      },
    ],
  },
  '6': {
    titel: 'Kapitel 6: Matrizenrechnung',
    aufgaben: [
      {
        nr: '6.1',
        text: String.raw`Gegeben seien die Matrizen

$$\mathbf{A}=\begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 2 \end{pmatrix}\qquad \mathbf{B}=\begin{pmatrix} 0 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}\qquad \mathbf{C}=\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$$

Berechnen Sie die folgenden Matrizen, wenn möglich:

$$\mathbf{A}\cdot\mathbf{B},\quad \mathbf{B}\cdot\mathbf{A},\quad \mathbf{B}\cdot\mathbf{C},\quad \mathbf{C}\cdot\mathbf{B},\quad \mathbf{C}\cdot\mathbf{A},\quad \mathbf{A}\cdot\mathbf{C}.$$`,
        teile: [],
      },
      {
        nr: '6.2',
        text: String.raw`Gegeben seien die Matrizen

$$\mathbf{A}=\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\qquad \mathbf{B}=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$`,
        teile: [
          ['a', String.raw`Berechnen Sie $(\mathbf{A}+\mathbf{B})^{2}$ und $\mathbf{A}^{2}+2\mathbf{A}\cdot\mathbf{B}+\mathbf{B}^{2}$.`],
          ['b', String.raw`Berechnen Sie $(\mathbf{A}+\mathbf{B})\cdot(\mathbf{A}-\mathbf{B})$ und $\mathbf{A}^{2}-\mathbf{B}^{2}$.`],
        ],
      },
      {
        nr: '6.3',
        text: String.raw`Wiederholen Sie Aufgabe 6.2 nun mit diesen Matrizen:

$$\mathbf{A}=\begin{pmatrix} 1 & 2 \\ 5 & 2 \end{pmatrix}\qquad \mathbf{B}=\begin{pmatrix} 2 & -2 \\ -5 & 1 \end{pmatrix}$$

Können Sie die Unterschiede erklären?`,
        teile: [],
      },
      {
        nr: '6.4',
        text: String.raw`Sei $\mathbf{A}$ eine quadratische Matrix.`,
        teile: [
          ['a', String.raw`Ist $\mathbf{A}\cdot{\mathbf{A}}^{T}$ eine symmetrische Matrix? Wenn ja, warum?`],
          ['b', String.raw`Ist $ {\mathbf{A}}^{T}\cdot\mathbf{A}$ eine symmetrische Matrix?`],
          ['c', String.raw`Gilt $\mathbf{A}\cdot{\mathbf{A}}^{T}={\mathbf{A}}^{T}\cdot\mathbf{A}$?`],
          ['d', String.raw`Testen Sie Ihre Antworten mit $\mathbf{A}=\begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix}$.`],
        ],
      },
      {
        nr: '6.5',
        text: String.raw`Zerlegen Sie die Matrix

$$\mathbf{A}=\begin{pmatrix} 1 & 3 & 2 \\ 2 & -1 & 0 \\ 1 & 4 & 1 \end{pmatrix}$$

in ihren symmetrischen und antisymmetrischen Anteil.`,
        teile: [],
      },
      {
        nr: '6.6',
        text: String.raw`Gegeben seien Matrizen mit folgender Struktur:

$$\mathbf{A}=h\begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}\qquad \mathbf{B}=\begin{pmatrix} k & -l & -l \\ -l & m & m \\ -l & m & m \end{pmatrix}$$

Bestimmen Sie die Werte der Parameter $h$, $k$, $l$ und $m$ so, dass gilt

$$\mathbf{A}\neq\mathbf{0},\quad \mathbf{B}\neq\mathbf{0},\quad \mathbf{A}^{2}=\mathbf{A},\quad \mathbf{B}^{2}=\mathbf{B},\quad \mathbf{A}\cdot\mathbf{B}=\mathbf{0}.$$`,
        teile: [],
      },
    ],
  },
  '7': {
    titel: 'Kapitel 7: Anwendungen von Matrizen',
    aufgaben: [
      {
        nr: '7.1',
        text: String.raw`Berechnen Sie, wenn möglich, die inverse Matrix zu folgenden Matrizen:`,
        teile: [
          ['a', String.raw`$\mathbf{A}=\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$`],
          ['b', String.raw`$\mathbf{B}=\begin{pmatrix} 2 & 3 \\ -1 & -2 \end{pmatrix}$`],
          ['c', String.raw`$\mathbf{C}=\begin{pmatrix} 3 & 3 \\ -1 & -1 \end{pmatrix}$`],
        ],
      },
      {
        nr: '7.2',
        text: String.raw`Berechnen Sie die Determinante der Matrix

$$\mathbf{A}=\begin{pmatrix} 4 & 2 & 1 \\ -2 & 1 & 0 \\ 1 & 0 & 5 \end{pmatrix}$$`,
        teile: [],
      },
      {
        nr: '7.3',
        text: String.raw`Berechnen Sie die Determinanten der folgenden Matrizen:`,
        teile: [
          ['a', String.raw`$ \begin{pmatrix} -1 & 3 & 1 \\ 1 & 1 & 1 \\ -2 & 18 & 8 \end{pmatrix}$`],
          ['b', String.raw`$ \begin{pmatrix} 2 & 5 & 18 & -1 \\ 4 & -3 & 5 & 6 \\ -6 & 3 & -9 & 3 \\ 0 & 2 & 5 & 0 \end{pmatrix}$`],
          ['c', String.raw`$ \begin{pmatrix} 0 & 1 & 0 & 0 & 0 \\ 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{pmatrix}$`],
        ],
      },
      {
        nr: '7.4',
        text: String.raw`Berechnen Sie die inverse Matrix für die folgende $(3\times3)$-Matrix:

$$\mathbf{A}=\begin{pmatrix} -1 & 2 & 1 \\ 0 & 1 & -2 \\ 1 & 4 & -1 \end{pmatrix}$$`,
        teile: [],
      },
      {
        nr: '7.5',
        text: String.raw`Bestimmen Sie die Eigenwerte und Eigenvektoren für folgende Matrizen:`,
        teile: [
          ['a', String.raw`$\mathbf{A}=\begin{pmatrix} 1 & 2 \\ 2 & -2 \end{pmatrix}$`],
          ['b', String.raw`$\mathbf{B}=\begin{pmatrix} -3 & -3 & -3 \\ -3 & 1 & -1 \\ -3 & -1 & 1 \end{pmatrix}$`],
        ],
      },
    ],
  },
  '8': {
    titel: 'Kapitel 8: Komplexe Zahlen',
    aufgaben: [
      {
        nr: '8.1',
        text: String.raw`Gegeben seien die komplexen Zahlen $z_1=2-2\mathrm{i}$ und $z_2=1+\sqrt{3}\,\mathrm{i}$. Berechnen Sie`,
        teile: [
          ['a', String.raw`$z_1+z_2$`],
          ['b', String.raw`$z_1-z_2$`],
          ['c', String.raw`$z_1\cdot z_2$`],
          ['d', String.raw`$z_1+\overline{z}_1$`],
          ['e', String.raw`$|z_1|$, $|z_2|$`],
          ['f', String.raw`$|z_1\cdot z_2|$`],
          ['g', String.raw`$\dfrac{z_1}{z_2}$`],
          ['h', String.raw`$\overline{z}_1$, $\overline{z}_2$`],
          ['i', String.raw`$z_1\cdot\overline{z}_1$`],
          ['j', String.raw`$\left|\dfrac{z_1}{z_2}\right|$`],
          ['k', String.raw`$\arg(z_1)$, $\arg(z_2)$`],
        ],
      },
      {
        nr: '8.2',
        text: String.raw`Führen Sie die Division aus. (Das Ergebnis soll Normalform haben.)`,
        teile: [
          ['a', String.raw`$ z=\frac{1+\frac{1}{\mathrm{i}}}{1-\frac{1}{\mathrm{i}}}$`],
          ['b', String.raw`$ z=\frac{\frac{1}{2}(5+\mathrm{i})}{2+\frac{1}{1-\mathrm{i}}}$`],
          ['c', String.raw`$ z=\frac{(1+2\mathrm{i})(2-\mathrm{i})+1}{{(2-\mathrm{i})}^{2}-2+\mathrm{i}}$`],
        ],
      },
      {
        nr: '8.3',
        text: String.raw`Berechnen Sie die Beträge dieser komplexen Zahlen.`,
        teile: [
          ['a', String.raw`$ z=\frac{2+3\mathrm{i}}{1+\mathrm{i}}$`],
          ['b', String.raw`$ z=\frac{\mathrm{i}}{(1+2\mathrm{i})3{\mathrm{e}}^{-\mathrm{i}}}$`],
          ['c', String.raw`$ z=\frac{1-\mathrm{i}}{2{\mathrm{e}}^{\mathrm{i}\pi/3}}$`],
          ['d', String.raw`$ z=\frac{1+3\mathrm{i}}{(1+\mathrm{i})(1-\mathrm{i})}$`],
        ],
      },
      {
        nr: '8.4',
        text: String.raw`Berechnen Sie`,
        teile: [
          ['a', String.raw`$ {(\sqrt{3}+\mathrm{i})}^{9}$`],
          ['b', String.raw`$ {\left( \frac{1}{2}-\mathrm{i}\sqrt{\frac{3}{4}} \right)}^{12}$`],
        ],
      },
      {
        nr: '8.5',
        text: String.raw`Berechnen Sie die Lösungen der Gleichung $z^3=-2\mathrm{i}$.`,
        teile: [],
      },
    ],
  },
  '9': {
    titel: 'Kapitel 9: Folgen, Grenzwerte und Stetigkeit',
    aufgaben: [
      {
        nr: '9.1',
        text: String.raw`Berechnen oder begründen Sie das Ergebnis. Es ist $n\in\mathbb{N}$.`,
        teile: [
          ['a', String.raw`$ \lim_{n\to\infty}\frac{1}{n}$`],
          ['b', String.raw`$ \lim_{n\to\infty}\frac{n-2}{n}$`],
          ['c', String.raw`$ \lim_{n\to\infty}\frac{n+1}{{n}^{2}}$`],
          ['d', String.raw`$ \lim_{n\to\infty}\frac{{n}^{2}+2n+1}{{n}^{2}-1},\quad n>1$`],
          ['e', String.raw`$ \lim_{n\to\infty}\frac{2n+1}{3n-1}$`],
          ['f', String.raw`$ \lim_{n\to\infty}\frac{2-4n}{3n+9}$`],
          ['g', String.raw`$ \lim_{n\to\infty}\frac{4{n}^{2}-6n+10}{2{n}^{2}+100}$`],
          ['h', String.raw`$ \lim_{n\to\infty}\frac{{n}^{4}+3{n}^{2}}{{n}^{2}+10n}$`],
          ['i', String.raw`$ \lim_{n\to\infty}\frac{1+\sqrt{n}}{3+\sqrt{n}}$`],
          ['j', String.raw`$ \lim_{n\to\infty}\frac{3n-\sqrt{n}}{2\sqrt{n}+5n}$`],
          ['k', String.raw`$ \lim_{n\to\infty}\frac{2{n}^{2}(n-3+4{n}^{2})}{5{(n-1)}^{3}(3n+4)}$`],
          ['l', String.raw`$ \lim_{n\to\infty}\frac{\sqrt{32n}+7}{13-\sqrt{2n}}$`],
        ],
      },
      {
        nr: '9.2',
        text: String.raw`Berechnen oder begründen Sie das Ergebnis. Es ist $x\in\mathbb{R}$.`,
        teile: [
          ['a', String.raw`$ \lim_{x\to\infty}\left(x-\frac{{x}^{2}}{x-3}\right)$`],
          ['b', String.raw`$ \lim_{x\to\pm\infty}-\frac{x}{\left| x \right|}$ (Einmal Limes gegen $+\infty$ und einmal gegen $-\infty$)`],
          ['c', String.raw`$ \lim_{x\to\infty}\frac{x+1}{{x}^{2}-1}$`],
        ],
      },
      {
        nr: '9.3',
        text: String.raw`Berechnen Sie. Es ist $x\in\mathbb{R}$.`,
        teile: [
          ['a', String.raw`$ \lim_{x\to{x}_{0}}\frac{{x}^{2}-1}{x+1}$ bei $ {x}_{0}=-1$.`],
          ['b', String.raw`$ \lim_{x\to{x}_{0}}\frac{{x}^{2}-x-6}{x+2}$ bei $ {x}_{0}=-2$ und $ {x}_{0}=3$.`],
          ['c', String.raw`$ \lim_{x\to{x}_{0}}x\left|x-1\right|$ bei $ {x}_{0}=1$.`],
        ],
      },
    ],
  },
  '10': {
    titel: 'Kapitel 10: Differentialrechnung',
    aufgaben: [
      {
        nr: '10.1',
        text: String.raw`Berechnen Sie die Ableitung $f'(x)$ mit der Produktregel.`,
        teile: [
          ['a', String.raw`$ f(x)={x}^{2}(1-3{x}^{2})$`],
          ['b', String.raw`$ f(x)=({x}^{5}-{x}^{2})({x}^{2}-{x}^{4})$`],
          ['c', String.raw`$ f(x)=({x}^{2}-1)\sqrt{x}$`],
          ['d', String.raw`$ f(x)=({x}^{4}-3{x}^{3})\sqrt{x}$`],
          ['e', String.raw`$ f(x)=\frac{1}{{x}^{2}}\left( =\frac{1}{x}\frac{1}{x} \right)$`],
          ['f', String.raw`$ f(x)=\frac{1}{{x}^{3}}$`],
          ['g', String.raw`$ f(x)=\sin x\cdot\cos x$`],
          ['h', String.raw`$ f(x)={(\sin x)}^{2}$`],
          ['i', String.raw`$ f(x)={(\cos x)}^{2}$`],
          ['j', String.raw`$ f(x)={(\sin x)}^{3}$`],
          ['k', String.raw`$ f(x)={(\cos x)}^{3}$`],
          ['l', String.raw`$ f(x)=({x}^{5}-1)\sin x$`],
        ],
      },
      {
        nr: '10.2',
        text: String.raw`Geben Sie die Ableitung von $ f(x)=u(x)\cdot v(x)\cdot w(x)$ an.`,
        teile: [],
      },
      {
        nr: '10.3',
        text: String.raw`Berechnen Sie die Ableitung $f'(x)$ mit der Quotientenregel.`,
        teile: [
          ['a', String.raw`$ f(x)=\frac{x-1}{x+1}$`],
          ['b', String.raw`$ f(x)=\frac{{x}^{2}}{x+1}$`],
          ['c', String.raw`$ f(x)=\frac{3}{{x}^{2}+1}$`],
          ['d', String.raw`$ f(x)=\frac{{x}^{2}-4}{1-x}$`],
          ['e', String.raw`$ f(x)=\frac{1}{1+2{x}^{2}}$`],
          ['f', String.raw`$ f(x)=\frac{{x}^{3}}{1+{x}^{2}}$`],
          ['g', String.raw`$ f(x)=\frac{{x}^{2}-2x}{{x}^{2}-4}$`],
          ['h', String.raw`$ f(x)=\frac{{x}^{2}-9}{{x}^{3}-64}$`],
          ['i', String.raw`$ f(x)=\frac{{x}^{2}-x-6}{{x}^{2}+x-6}$`],
          ['j', String.raw`$ f(x)=\frac{\sqrt{x}}{1-x}$`],
          ['k', String.raw`$ f(x)=\frac{2\sqrt{x}}{1-\sqrt{x}}$`],
          ['l', String.raw`$ f(x)=\frac{{x}^{2}}{\cos x}$`],
          ['m', String.raw`$ f(x)=\frac{\cos x+1}{\cos x-1}$`],
          ['n', String.raw`$ f(x)=\frac{\sin x-\cos x}{\sin x+\cos x}$`],
        ],
      },
      {
        nr: '10.4',
        text: String.raw`Berechnen Sie die Ableitung $f'(x)$ von $f$ mit der Kettenregel.`,
        teile: [
          ['a', String.raw`$ f(x)={({x}^{2}-4x)}^{5}$`],
          ['b', String.raw`$ f(x)={({x}^{3}-5{x}^{6})}^{8}$`],
          ['c', String.raw`$ f(x)=\frac{1}{{({x}^{2}-2)}^{3}}$`],
          ['d', String.raw`$ f(x)=\sqrt{1-{x}^{2}}$`],
          ['e', String.raw`$ f(x)=\sqrt{\frac{1}{x}}$`],
          ['f', String.raw`$ f(x)=\frac{1}{\sqrt{x-{x}^{3}}}$`],
          ['g', String.raw`$ f(x)={(\sin (x))}^{6}$`],
          ['h', String.raw`$ f(x)=\sin ({x}^{2})$`],
          ['i', String.raw`$ f(x)=\frac{1}{{(\cos x)}^{2}}$`],
          ['j', String.raw`$ f(x)=\sqrt{\sin (3x)}$`],
          ['k', String.raw`$ f(x)=\tan (1-3x)$`],
          ['l', String.raw`$ f(x)=\frac{1}{\sqrt{\cos ({x}^{2})}}$`],
          ['m', String.raw`$ f(x)={\mathrm{e}}^{-{x}^{2}}$`],
          ['n', String.raw`$ f(t)=\cos (A\pi t)$`],
        ],
      },
      {
        nr: '10.5',
        text: String.raw`Berechnen Sie die Ableitung $f'(x)$.`,
        teile: [
          ['a', String.raw`$ f(x)=\frac{1}{{x}^{2}}$`],
          ['b', String.raw`$ f(x)=\frac{3}{{x}^{5}}$`],
          ['c', String.raw`$ f(x)=2{x}^{2}+\frac{10}{{x}^{4}}$`],
          ['d', String.raw`$ f(x)=\frac{\sin (x)}{{x}^{2}}$`],
          ['e', String.raw`$ f(x)=\frac{\cot(x)}{3{x}^{3}}$`],
          ['f', String.raw`$ f(x)=\frac{4}{5{x}^{5}}+2\cos (x)$`],
        ],
      },
      {
        nr: '10.6',
        text: String.raw`Berechnen Sie die ersten beiden Ableitungen $f'(x)$ und $f''(x)$.`,
        teile: [
          ['a', String.raw`$ f(x)={x}^{2}-x+2$`],
          ['b', String.raw`$ f(x)=\frac{{x}^{2}-x+2}{{x}^{2}+x+2}$`],
          ['c', String.raw`$ f(x)=\sin x\cdot\cos x$`],
          ['d', String.raw`$ f(x)={(\sin x)}^{2}+{(\cos x)}^{2}$`],
        ],
      },
    ],
  },
  '11': {
    titel: 'Kapitel 11: Anwendung Differentialrechnung',
    aufgaben: [
      {
        nr: '11.1',
        text: String.raw`Bestimmen Sie die lokalen Extrema. M.a.W., an welchen Stellen haben die Funktionen lokale Extrema, und handelt es sich um ein Minimum oder Maximum?`,
        teile: [
          ['a', String.raw`$ f(x)=x^2-5x$`],
          ['b', String.raw`$ f(x)=(1-x)^2$`],
          ['c', String.raw`$ f(x)=1-x^2$`],
          ['d', String.raw`$ f(x)=(x-1)^2$`],
          ['e', String.raw`$ f(x)=x^3-75x$`],
          ['f', String.raw`$ f(x)=\frac{1}{1+x^2}$`],
          ['g', String.raw`$ f(x)=\frac{x}{1+x^2}$`],
          ['h', String.raw`$ f(x)=\frac{x^2}{1+x^2}$`],
        ],
      },
      {
        nr: '11.2',
        text: String.raw`Welche Bedingung müssen die Koeffizienten $a$, $b$, $c$ und $d$ erfüllen, damit $f(x)=ax^3+bx^2+cx+d$ zwei lokale Extrema hat?`,
        teile: [],
      },
      {
        nr: '11.3',
        text: String.raw`Zerlegen Sie die Zahl 60 so in zwei Summanden, dass das Produkt dieser Zahlen ein Maximum annimmt.`,
        teile: [],
      },
      {
        nr: '11.4',
        text: String.raw`Zerlegen Sie die Zahl 24 so in zwei Summanden, dass die Summe der Quadrate dieser Zahlen möglichst klein wird.`,
        teile: [],
      },
      {
        nr: '11.5',
        text: String.raw`Berechnen Sie die folgenden Grenzwerte.`,
        teile: [
          ['a', String.raw`$ \lim_{x\to0}\frac{\sin x}{e^x-1}$`],
          ['b', String.raw`$ \lim_{x\to1}\frac{\ln x}{x^2-1}$`],
          ['c', String.raw`$ \lim_{x\to0}\frac{1-\cos x}{x^2}$`],
          ['d', String.raw`$ \lim_{x\to0}x^b\ln x$ für $x>0$, $b>0$`],
        ],
      },
      {
        nr: '11.6',
        text: String.raw`Ermitteln Sie die Gleichung der Tangente.`,
        teile: [
          ['a', String.raw`$ f(x)=\frac{x^2}{2}$ bei $x_0=1$`],
          ['b', String.raw`$ f(x)=\frac{x^2}{4}\sqrt{8-x}$ bei $x_0=-1$`],
          ['c', String.raw`$ f(x)=\frac{1}{x+4}$ bei $x_0=3$`],
          ['d', String.raw`$ f(x)=\frac{x^2-4}{x+4}$ bei $x_0=3$`],
        ],
      },
      {
        nr: '11.7',
        text: String.raw`Bei einem Pendel der Länge $L$ berechnet sich die Schwingungsdauer $T$ einer Schwingung nach der Formel $T=2\pi\sqrt{\dfrac{L}{g}}$, wobei $g$ die Erdbeschleunigung ist ($g\approx10\ \mathrm{m/s^2}$).`,
        teile: [
          ['a', String.raw`Auf wie viel Prozent genau kann man die Schwingungsdauer $T$ angeben, wenn man die Pendellänge auf 1 % genau bestimmt?`],
          ['b', String.raw`Nach wie viel Sekunden geht ein „Sekundenpendel“ ($T=2\,\mathrm{s}$) um 1 Sekunde vor, wenn man die Pendellänge um 0,1 % zu kurz macht?`],
        ],
      },
      {
        nr: '11.8',
        text: String.raw`Bestimmen Sie die ersten 3 nichtverschwindenden Terme der Taylor-Reihen.`,
        teile: [
          ['a', String.raw`$ f(x)=\ln x$ bei $x_0=1$`],
          ['b', String.raw`$ f(x)=\frac{1}{\sqrt{x}}$ bei $x_0=1$`],
          ['c', String.raw`$ f(x)=(x+1)^2(x-1)^2$ bei $x_0=-1$`],
        ],
      },
    ],
  },
  '12': {
    titel: 'Kapitel 12: Integralrechnung',
    aufgaben: [
      {
        nr: '12.1',
        text: String.raw`Bestimmen Sie die folgenden bestimmten Integrale.`,
        teile: [
          ['a', String.raw`$ \int_{-2}^{3}(x+2)(x-3)\,dx$`],
          ['b', String.raw`$ \int_{a}^{b}\left(a_0+a_1x+a_2x^2\right)dx$`],
        ],
      },
      {
        nr: '12.2',
        text: String.raw`Integrieren Sie.`,
        teile: [
          ['a', String.raw`$ \int\left(x^4+x\right)dx$`],
          ['b', String.raw`$ \int\left(2x^3-3x^2+6\right)dx$`],
          ['c', String.raw`$ \int\frac{2}{3}\left(3x-5x^3+2x^6\right)dx$`],
          ['d', String.raw`$ \int\cos x\,dx$`],
          ['e', String.raw`$ \int\left(3\cos x+\sin x\right)dx$`],
          ['f', String.raw`$ \int\frac{1}{\cos^2x}\,dx$`],
          ['g', String.raw`$ \int x\left(3x^2+4x\right)dx$`],
          ['h', String.raw`$ \int(x-1)(x^2-4)\,dx$`],
          ['i', String.raw`$ \int e^x\,dx$`],
          ['j', String.raw`$ \int e^{-2x}\,dx$`],
          ['k', String.raw`$ \int a^x\,dx$ mit $a\in\mathbb{R}^{+}\setminus\{1\}$`],
        ],
      },
      {
        nr: '12.3',
        text: String.raw`Integrieren Sie mit der Substitutionsregel.`,
        teile: [
          ['a', String.raw`$ \int(ax+b)\,dx$ (setze $z=ax+b$)`],
          ['b', String.raw`$ \int 2\cos(2x)\,dx$`],
          ['c', String.raw`$ \int\sin(4x+2)\,dx$`],
          ['d', String.raw`$ \int\sin\!\left(\frac{ax+b}{c}\right)dx$`],
          ['e', String.raw`$ \int\frac{3}{(x+7)^2}\,dx$`],
          ['f', String.raw`$ \int\frac{1}{2(5-3x)^2}\,dx$`],
          ['g', String.raw`$ \int\sqrt{1+x}\,dx$`],
          ['h', String.raw`$ \int\frac{x}{\sqrt{x^2+1}}\,dx$`],
          ['i', String.raw`$ \int e^x\sqrt{1+e^x}\,dx$`],
          ['j', String.raw`$ \int a^x\sqrt{1+a^x}\,dx$ mit $a\in\mathbb{R}^{+}\setminus\{1\}$`],
        ],
      },
      {
        nr: '12.4',
        text: String.raw`Integrieren Sie mittels partieller Integration.`,
        teile: [
          ['a', String.raw`$ \int x\sin x\,dx$`],
          ['b', String.raw`$ \int x\cos 3x\,dx$`],
          ['c', String.raw`$ \int x^2\sin x\,dx$`],
          ['d', String.raw`$ \int\cos^2x\,dx$`],
        ],
      },
      {
        nr: '12.5',
        text: String.raw`Sei die Funktion $f(x)$ auf dem Intervall $[-a,a]$ integrierbar. Zeigen Sie:

$$\int_{-a}^{a}f(x)\,dx=\begin{cases}0 & \text{falls } f \text{ ungerade ist,}\\ 2\int_{0}^{a}f(x)\,dx & \text{falls } f \text{ gerade ist.}\end{cases}$$`,
        teile: [],
      },
    ],
  },
};
