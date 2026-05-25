"use client";

import { useState, useMemo, useEffect } from "react";

type ProductKey = "tablas" | "drotfonatos" | "kovacsoltvas" | "csuszokapu" | "nyilokapu";

const V2_PRODUCTS = [
  { key: "tablas"       as ProductKey, label: "Táblás kerítés",  unit: "fm", basePrice: 14000, kind: "fence" },
  { key: "drotfonatos"  as ProductKey, label: "Drótfonatos",     unit: "fm", basePrice:  6500, kind: "fence" },
  { key: "kovacsoltvas" as ProductKey, label: "Kovácsoltvas",    unit: "fm", basePrice: 38000, kind: "fence" },
  { key: "csuszokapu"   as ProductKey, label: "Csúszókapu",      unit: "m",  basePrice: 95000, kind: "gate"  },
  { key: "nyilokapu"    as ProductKey, label: "Nyílókapu",       unit: "m",  basePrice: 75000, kind: "gate"  },
];

const V2_HEIGHTS = [
  { label: "1,0 m", mult: 0.80 },
  { label: "1,2 m", mult: 0.90 },
  { label: "1,5 m", mult: 1.00 },
  { label: "1,8 m", mult: 1.18 },
  { label: "2,0 m", mult: 1.32 },
];

const fmtHUF = (n: number) =>
  new Intl.NumberFormat("hu-HU").format(Math.round(n / 1000) * 1000);

export default function Calculator() {
  // Reveal animation observer
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".v2-calc .reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [productKey, setProductKey] = useState<ProductKey>("tablas");
  const [size, setSize]             = useState(15);
  const [heightIdx, setHeightIdx]   = useState(2);
  const [foundation, setFoundation] = useState(false);
  const [automation, setAutomation] = useState(false);
  const [demolition, setDemolition] = useState(false);

  const product = V2_PRODUCTS.find(p => p.key === productKey)!;
  const isFence = product.kind === "fence";
  const minSize = isFence ? 2  : 3;
  const maxSize = isFence ? 100 : 8;
  const step    = isFence ? 1  : 0.5;

  // Keep size within bounds when product changes
  useEffect(() => {
    if (size < minSize) setSize(minSize);
    if (size > maxSize) setSize(maxSize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productKey]);

  const estimate = useMemo(() => {
    let total = product.basePrice * size;
    if (isFence) {
      total *= V2_HEIGHTS[heightIdx].mult;
      if (foundation) total += 5500 * size;
      if (demolition) total += 2000 * size;
    } else if (automation) {
      total += 185000;
    }
    return total;
  }, [product, size, isFence, heightIdx, foundation, demolition, automation]);

  const low  = estimate * 0.90;
  const high = estimate * 1.12;
  const fillPct = ((size - minSize) / (maxSize - minSize)) * 100;

  return (
    <section id="kalkulator" className="v2-calc">
      <div className="mk-container">
        <div className="v2-calc-header reveal">
          <span className="v2-eyebrow">
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--color-amber)", display: "inline-block" }} />
            Online árkalkulátor
          </span>
          <h2 className="v2-h2">
            Számolja ki <span className="accent">néhány kattintással</span> a várható árat.
          </h2>
        </div>

        <div className="v2-calc-grid">
          {/* Left panel */}
          <div className="v2-calc-panel reveal reveal-delay-1">

            {/* Step 1: product */}
            <div className="v2-calc-step-row">
              <div className="v2-calc-step-num">1</div>
              <div className="v2-calc-step-label">Terméktípus</div>
            </div>
            <div className="v2-chip-row">
              {V2_PRODUCTS.map(p => (
                <button
                  key={p.key}
                  onClick={() => setProductKey(p.key)}
                  className={`v2-chip${productKey === p.key ? " is-active" : ""}`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Step 2: size */}
            <div className="v2-calc-step-row">
              <div className="v2-calc-step-num">2</div>
              <div className="v2-calc-step-label">{isFence ? "Kerítés hossza" : "Kapu szélessége"}</div>
              <div className="v2-calc-step-value">{size} {product.unit === "fm" ? "folyóméter" : "méter"}</div>
            </div>
            <div className="v2-range-wrap">
              <div className="v2-fence-rail v2-fence-rail--top" />
              <div className="v2-fence-pickets-bg" />
              <div className="v2-fence-pickets-fill" style={{ width: `${fillPct}%` }} />
              <div className="v2-fence-rail v2-fence-rail--bot" />
              <input
                type="range"
                className="v2-range"
                min={minSize}
                max={maxSize}
                step={step}
                value={size}
                onChange={e => setSize(Number(e.target.value))}
                aria-label={isFence ? "Kerítés hossza" : "Kapu szélessége"}
              />
            </div>
            <div className="v2-range-bounds">
              <span>{minSize} {product.unit}</span>
              <span>{maxSize} {product.unit}</span>
            </div>

            {/* Step 3: height (fence only) */}
            {isFence && (
              <>
                <div className="v2-calc-step-row">
                  <div className="v2-calc-step-num">3</div>
                  <div className="v2-calc-step-label">Magasság</div>
                  <div className="v2-calc-step-value">{V2_HEIGHTS[heightIdx].label}</div>
                </div>
                <div className="v2-chip-row">
                  {V2_HEIGHTS.map((h, i) => (
                    <button
                      key={h.label}
                      onClick={() => setHeightIdx(i)}
                      className={`v2-chip${heightIdx === i ? " is-active" : ""}`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step N: extras */}
            <div className="v2-calc-step-row">
              <div className="v2-calc-step-num">{isFence ? 4 : 3}</div>
              <div className="v2-calc-step-label">Kiegészítők</div>
            </div>
            <div className="v2-extras">
              {isFence ? (
                <>
                  <V2Extra checked={foundation} onChange={setFoundation} label="Betonlábazat" note="+5 500 Ft/fm" />
                  <V2Extra checked={demolition} onChange={setDemolition} label="Régi kerítés bontása és elszállítása" note="+2 000 Ft/fm" />
                </>
              ) : (
                <V2Extra checked={automation} onChange={setAutomation} label="Kapuautomatika (motor + távirányító)" note="+185 000 Ft" />
              )}
            </div>
          </div>

          {/* Right: result card */}
          <div className="v2-calc-result-wrap reveal reveal-delay-2">
            <div className="v2-calc-result">
              <div className="v2-calc-result-grid" />
              <div className="v2-calc-result-inner">
                <div className="v2-calc-result-eyebrow">
                  <span className="dot" />
                  Becsült ár
                </div>
                <div className="v2-calc-result-display">
                  {fmtHUF(low)}<span className="ft">Ft</span>
                </div>
                <div className="v2-calc-result-range">— {fmtHUF(high)} Ft közötti tartomány</div>

                <div className="v2-divider" />

                <div className="v2-calc-rows">
                  <V2Row label="Terméktípus" value={product.label} />
                  <V2Row label={isFence ? "Hossz" : "Szélesség"} value={`${size} ${product.unit}`} />
                  {isFence && <V2Row label="Magasság" value={V2_HEIGHTS[heightIdx].label} />}
                  {isFence && foundation && <V2Row label="Betonlábazat" value="Igen" />}
                  {isFence && demolition && <V2Row label="Bontás" value="Igen" />}
                  {!isFence && automation && <V2Row label="Automatika" value="Igen" />}
                </div>

                <div className="v2-disclaimer">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span>A kalkuláció tájékoztató jellegű. A végleges árat ingyenes helyszíni felmérés után, írásos ajánlatban rögzítjük.</span>
                </div>

                <a href="#kapcsolat" className="v2-calc-cta">
                  Pontos ajánlatot kérek
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function V2Extra({
  checked,
  onChange,
  label,
  note,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  note: string;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`v2-extra${checked ? " is-active" : ""}`}
    >
      <span className="v2-extra-left">
        <span className="v2-extra-tick">
          {checked && (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </span>
        <span className="v2-extra-label">{label}</span>
      </span>
      <span className="v2-extra-note">{note}</span>
    </button>
  );
}

function V2Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="v2-calc-row">
      <span className="v2-calc-row-label">{label}</span>
      <span className="v2-calc-row-value">{value}</span>
    </div>
  );
}
