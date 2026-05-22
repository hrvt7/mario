"use client";

import { useState, useMemo } from "react";
import { Calculator as CalcIcon, Phone, Info } from "lucide-react";

type ProductKey = "tablas" | "drotfonatos" | "kovacsoltvas" | "csuszokapu" | "nyilokapu";

const products: {
  key: ProductKey;
  label: string;
  unit: "fm" | "m";
  basePrice: number;
  kind: "fence" | "gate";
}[] = [
  { key: "tablas", label: "Táblás kerítés", unit: "fm", basePrice: 14000, kind: "fence" },
  { key: "drotfonatos", label: "Drótfonatos kerítés", unit: "fm", basePrice: 6500, kind: "fence" },
  { key: "kovacsoltvas", label: "Kovácsoltvas kerítés", unit: "fm", basePrice: 38000, kind: "fence" },
  { key: "csuszokapu", label: "Csúszókapu", unit: "m", basePrice: 95000, kind: "gate" },
  { key: "nyilokapu", label: "Nyílókapu", unit: "m", basePrice: 75000, kind: "gate" },
];

const heights = [
  { label: "1,0 m", mult: 0.8 },
  { label: "1,2 m", mult: 0.9 },
  { label: "1,5 m", mult: 1.0 },
  { label: "1,8 m", mult: 1.18 },
  { label: "2,0 m", mult: 1.32 },
];

function formatHUF(n: number) {
  return new Intl.NumberFormat("hu-HU").format(Math.round(n / 1000) * 1000) + " Ft";
}

export default function Calculator() {
  const [productKey, setProductKey] = useState<ProductKey>("tablas");
  const [size, setSize] = useState(15);
  const [heightIdx, setHeightIdx] = useState(2);
  const [foundation, setFoundation] = useState(false);
  const [automation, setAutomation] = useState(false);
  const [demolition, setDemolition] = useState(false);

  const product = products.find((p) => p.key === productKey)!;
  const isFence = product.kind === "fence";

  const estimate = useMemo(() => {
    let total = product.basePrice * size;
    if (isFence) {
      total *= heights[heightIdx].mult;
      if (foundation) total += 5500 * size;
      if (demolition) total += 2000 * size;
    } else {
      if (automation) total += 185000;
    }
    return total;
  }, [product, size, isFence, heightIdx, foundation, demolition, automation]);

  const low = estimate * 0.9;
  const high = estimate * 1.12;

  return (
    <section id="kalkulator" className="relative py-24 bg-stone-50 border-y border-line">
      <div className="absolute inset-0 grid-texture opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber/15 text-amber-dark text-xs font-semibold uppercase tracking-wide mb-4">
            <CalcIcon className="w-3.5 h-3.5" />
            Online árkalkulátor
          </div>
          <h2 className="display text-4xl md:text-5xl text-ink leading-tight">
            Számolja ki a várható árat
          </h2>
          <p className="mt-4 text-lg text-steel">
            Állítsa be a paramétereket, és azonnal megkapja a becsült árat.
            A pontos ajánlatért egy ingyenes helyszíni felmérést követően
            keressük meg.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Controls */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-line p-6 sm:p-8">
            <label className="block text-sm font-semibold text-ink mb-3">
              1. Válasszon terméktípust
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
              {products.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setProductKey(p.key)}
                  className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                    productKey === p.key
                      ? "border-amber bg-amber/10 text-ink"
                      : "border-line bg-white text-steel hover:border-stone-300"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <label className="block text-sm font-semibold text-ink mb-3">
              2. {isFence ? "Kerítés hossza" : "Kapu szélessége"}:{" "}
              <span className="text-amber-dark">
                {size} {product.unit === "fm" ? "folyóméter" : "méter"}
              </span>
            </label>
            <input
              type="range"
              min={isFence ? 2 : 3}
              max={isFence ? 100 : 8}
              step={isFence ? 1 : 0.5}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-amber mb-2"
            />
            <div className="flex justify-between text-xs text-steel mb-8">
              <span>{isFence ? "2" : "3"} {product.unit}</span>
              <span>{isFence ? "100" : "8"} {product.unit}</span>
            </div>

            {isFence && (
              <>
                <label className="block text-sm font-semibold text-ink mb-3">
                  3. Kerítés magassága
                </label>
                <div className="flex flex-wrap gap-2 mb-8">
                  {heights.map((h, i) => (
                    <button
                      key={h.label}
                      onClick={() => setHeightIdx(i)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        heightIdx === i
                          ? "border-amber bg-amber/10 text-ink"
                          : "border-line bg-white text-steel hover:border-stone-300"
                      }`}
                    >
                      {h.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            <label className="block text-sm font-semibold text-ink mb-3">
              {isFence ? "4." : "3."} Kiegészítők
            </label>
            <div className="space-y-2">
              {isFence ? (
                <>
                  <ExtraToggle
                    checked={foundation}
                    onChange={setFoundation}
                    label="Betonlábazat"
                    note="+5 500 Ft/fm"
                  />
                  <ExtraToggle
                    checked={demolition}
                    onChange={setDemolition}
                    label="Régi kerítés bontása és elszállítása"
                    note="+2 000 Ft/fm"
                  />
                </>
              ) : (
                <ExtraToggle
                  checked={automation}
                  onChange={setAutomation}
                  label="Kapuautomatika (motor + távirányító)"
                  note="+185 000 Ft"
                />
              )}
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 bg-stone-900 text-white rounded-2xl p-6 sm:p-8">
              <div className="text-sm text-stone-400 font-medium">
                Becsült ár
              </div>
              <div className="display text-4xl mt-1 text-amber">
                {formatHUF(low)}
              </div>
              <div className="text-stone-400 text-sm mt-1">
                — {formatHUF(high)} közötti tartomány
              </div>

              <div className="my-6 h-px bg-white/10" />

              <div className="space-y-2 text-sm">
                <Row label="Terméktípus" value={product.label} />
                <Row
                  label={isFence ? "Hossz" : "Szélesség"}
                  value={`${size} ${product.unit}`}
                />
                {isFence && (
                  <Row label="Magasság" value={heights[heightIdx].label} />
                )}
                {isFence && foundation && <Row label="Betonlábazat" value="Igen" />}
                {isFence && demolition && <Row label="Bontás" value="Igen" />}
                {!isFence && automation && (
                  <Row label="Automatika" value="Igen" />
                )}
              </div>

              <div className="mt-6 flex items-start gap-2 text-xs text-stone-400 bg-white/5 rounded-lg p-3">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  A kalkuláció tájékoztató jellegű. A végleges árat ingyenes
                  helyszíni felmérés után, írásos ajánlatban rögzítjük.
                </span>
              </div>

              <a
                href="#kapcsolat"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 amber-gradient text-ink px-6 py-3.5 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                Pontos ajánlatot kérek
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtraToggle({
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
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-left transition-all ${
        checked ? "border-amber bg-amber/10" : "border-line bg-white hover:border-stone-300"
      }`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`w-5 h-5 rounded border flex items-center justify-center text-xs ${
            checked ? "amber-gradient border-amber text-ink" : "border-stone-300"
          }`}
        >
          {checked ? "✓" : ""}
        </span>
        <span className="text-sm font-medium text-ink">{label}</span>
      </span>
      <span className="text-xs text-steel">{note}</span>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-stone-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
