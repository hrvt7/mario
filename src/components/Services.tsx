import React from "react";

// SVG art components — unique illustration per service

function PanelArt() {
  const railLeft = 50, railWidth = 500;
  const barW = 12, numBars = 17, gap = 18;
  const span = numBars * barW + (numBars - 1) * gap;
  const edgePad = (railWidth - span) / 2;
  const bars = Array.from({ length: numBars }, (_, i) => {
    const x = railLeft + edgePad + i * (barW + gap);
    return <rect key={i} x={x} y={102} width={barW} height={276} rx={3} />;
  });
  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMaxYMid slice" className="mk-svc-art-svg" aria-hidden="true">
      <rect x={railLeft} y={84}  width={railWidth} height={14} rx={3} />
      {bars}
      <rect x={railLeft} y={386} width={railWidth} height={18} rx={3} />
    </svg>
  );
}

function MeshArt() {
  const meshLeft = 38, meshRight = 562;
  const meshTop  = 44, meshBot   = 424;
  const dx = 28, dy = 14, half = 14;

  const dots: React.ReactNode[] = [];
  for (let r = 0; meshTop + r * dy + 28 <= meshBot; r++) {
    const y = meshTop + r * dy;
    const offset = (r % 2) * half;
    for (let c = 0; ; c++) {
      const x = meshLeft + c * dx + offset + half;
      if (x + half > meshRight) break;
      if (x - half < meshLeft)  continue;
      dots.push(
        <path key={`${r}-${c}`} d={`M${x},${y} l14,14 l-14,14 l-14,-14 z`} fill="none" strokeWidth="1.6" />
      );
    }
  }

  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMaxYMid slice" className="mk-svc-art-svg" aria-hidden="true">
      <rect x={20}  y={32}  width={560} height={6} />
      <rect x={20}  y={436} width={560} height={6} />
      <rect x={20}  y={20} width={12} height={430} />
      <rect x={568} y={20} width={12} height={430} />
      {dots}
    </svg>
  );
}

function IronArt() {
  const bars: React.ReactNode[] = [];
  for (let i = 0; i < 11; i++) {
    const x = 70 + i * 46;
    bars.push(
      <g key={i}>
        <path d={`M${x},50 l-9,18 l18,0 z`} />
        <rect x={x - 3} y={64} width="6" height="320" rx="1" />
        <circle cx={x} cy={220} r="9" fill="none" strokeWidth="2.2" />
      </g>
    );
  }
  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMaxYMid slice" className="mk-svc-art-svg" aria-hidden="true">
      <rect x="20" y="120" width="560" height="6" />
      <rect x="20" y="380" width="560" height="10" rx="2" />
      {bars}
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={`c${i}`}
          d={`M${90 + i * 46},126 q12,18 0,32 q-12,14 0,28`}
          fill="none"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

function SlidingGateArt() {
  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMaxYMid slice" className="mk-svc-art-svg" aria-hidden="true">
      <rect x="0" y="80" width="600" height="6" />
      <rect x="0" y="400" width="600" height="6" />
      <rect x="170" y="110" width="380" height="270" rx="4" fill="none" strokeWidth="3" />
      {Array.from({ length: 18 }).map((_, i) => (
        <rect key={i} x={180 + i * 21} y="118" width="10" height="254" rx="2" />
      ))}
      <circle cx="220" cy="400" r="14" />
      <circle cx="500" cy="400" r="14" />
      <path d="M70,250 l50,-20 l0,12 l60,0 l0,16 l-60,0 l0,12 z" />
    </svg>
  );
}

function SwingGateArt() {
  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMaxYMid slice" className="mk-svc-art-svg" aria-hidden="true">
      <rect x="40" y="80" width="20" height="340" rx="3" />
      <rect x="540" y="80" width="20" height="340" rx="3" />
      <path d="M40,80 l10,-20 l10,20 z" />
      <path d="M540,80 l10,-20 l10,20 z" />
      <g transform="rotate(-12 60 250)">
        <rect x="60" y="120" width="240" height="260" rx="3" fill="none" strokeWidth="3" />
        {Array.from({ length: 11 }).map((_, i) => (
          <rect key={`l${i}`} x={70 + i * 22} y="128" width="10" height="244" rx="2" />
        ))}
      </g>
      <g transform="rotate(12 540 250)">
        <rect x="300" y="120" width="240" height="260" rx="3" fill="none" strokeWidth="3" />
        {Array.from({ length: 11 }).map((_, i) => (
          <rect key={`r${i}`} x={310 + i * 22} y="128" width="10" height="244" rx="2" />
        ))}
      </g>
      <line x1="20" y1="420" x2="580" y2="420" strokeOpacity="0.4" />
    </svg>
  );
}

function AutomationArt() {
  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMaxYMid slice" className="mk-svc-art-svg" aria-hidden="true">
      <rect x="180" y="120" width="320" height="260" rx="4" fill="none" strokeWidth="3" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={190 + i * 22} y="128" width="10" height="244" rx="2" />
      ))}
      <rect x="60" y="270" width="100" height="110" rx="6" fill="none" strokeWidth="3" />
      <rect x="80" y="295" width="60" height="14" rx="2" />
      <circle cx="110" cy="345" r="14" fill="none" strokeWidth="2" />
      <path d="M160,330 q40,-20 70,0" fill="none" strokeWidth="2" />
      <line x1="40" y1="400" x2="560" y2="400" strokeOpacity="0.4" />
      <path d="M500,90 q12,-12 24,0" fill="none" strokeWidth="2.4" />
      <path d="M488,82 q24,-24 48,0" fill="none" strokeWidth="2.4" />
      <path d="M476,74 q36,-36 72,0" fill="none" strokeWidth="2.4" />
      <rect x="500" y="120" width="40" height="60" rx="6" fill="none" strokeWidth="2.4" />
      <circle cx="520" cy="160" r="4" />
    </svg>
  );
}

const MK_SERVICES = [
  {
    title: "Táblás kerítés",
    desc:  "Modern, igényes 3D-s táblás kerítésrendszer. Tartós, alacsony karbantartású, esztétikus megoldás — otthonhoz és telephelyhez egyaránt.",
    tags:  ["Horganyzott", "3D panel", "Festett bevonat"],
    Art:   PanelArt,
    accent: "#E8930C",
  },
  {
    title: "Drótfonatos kerítés",
    desc:  "Költséghatékony, gyors kivitelezésű drótfonatos kerítés. Telekhatárok lezárására, kertek és nagyobb területek bekerítésére.",
    tags:  ["Gyors kivitel", "Gazdaságos", "Nagy területre"],
    Art:   MeshArt,
    accent: "#F5A623",
  },
  {
    title: "Kovácsoltvas kerítés",
    desc:  "Egyedi tervezésű, kézzel készített kovácsoltvas kerítések és kapuk — időtálló elegancia, amely megemeli az ingatlan értékét.",
    tags:  ["Egyedi terv", "Kézzel készült", "Prémium"],
    Art:   IronArt,
    accent: "#E8930C",
  },
  {
    title: "Csúszókapu",
    desc:  "Helytakarékos, sínen futó vagy önhordó csúszókapuk. Tökéletes választás szűkös beállóknál és lejtős terepen is.",
    tags:  ["Sínes", "Önhordó", "Automata opció"],
    Art:   SlidingGateArt,
    accent: "#F5A623",
  },
  {
    title: "Nyílókapu",
    desc:  "Egy- és kétszárnyú nyílókapuk minden méretben. Stabil szerkezet, precíz illesztés, hosszú élettartam garantálva.",
    tags:  ["1 szárnyú", "2 szárnyú", "Egyedi méret"],
    Art:   SwingGateArt,
    accent: "#E8930C",
  },
  {
    title: "Kapuautomatika",
    desc:  "Motorizált kapunyitás távirányítóval, kódzárral vagy okostelefonról. Kényelmes és biztonságos megoldás meglévő kapukhoz is.",
    tags:  ["Távirányító", "Okostelefon", "Meglévő kapuhoz"],
    Art:   AutomationArt,
    accent: "#F5A623",
  },
];

const MK_CARD_OFFSET = 22;
const MK_STICKY_TOP  = 88;

export default function Services() {
  return (
    <section id="szolgaltatasok" className="mk-services">
      <div className="mk-container mk-services-header">
        <span className="eyebrow eyebrow--stone">Szolgáltatások</span>
        <h2 className="display mk-h2">Minden, ami kerítés és kapu — egy kézből</h2>
        <p className="lead">
          Az anyagbeszerzéstől a kulcsrakész átadásig. Felmérjük a terepet, megtervezzük a megoldást,
          és precízen kivitelezzük.
        </p>
      </div>

      <div className="mk-container">
        <div className="mk-services-stack">
          {MK_SERVICES.map((s, i) => {
            const Art = s.Art;
            return (
              <div
                key={s.title}
                className="mk-svc-card"
                style={{
                  top: `${MK_STICKY_TOP + i * MK_CARD_OFFSET}px`,
                  zIndex: 10 + i,
                  ["--card-accent" as string]: s.accent,
                }}
              >
                <div className="mk-svc-art">
                  <Art />
                </div>
                <div className="mk-svc-content">
                  <h3 className="mk-svc-title">{s.title}</h3>
                  <p className="mk-svc-desc">{s.desc}</p>
                  <div className="mk-svc-tags">
                    {s.tags.map(t => <span key={t} className="mk-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
