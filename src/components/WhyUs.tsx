"use client";

import { useRef } from "react";
import { ShieldCheck, Clock, Wallet, Users, Ruler, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";

const points = [
  {
    icon: Ruler,
    title: "Ingyenes helyszíni felmérés",
    desc: "Kiszállunk, pontosan felmérjük a terepet, és írásos ajánlatot adunk — mindezt díjmentesen.",
    num: "01",
  },
  {
    icon: Clock,
    title: "Tartott határidő",
    desc: "Amit vállalunk, azt be is tartjuk. A munkakezdés és átadás időpontját előre rögzítjük.",
    num: "02",
  },
  {
    icon: Wallet,
    title: "Korrekt, átlátható ár",
    desc: "Nincsenek rejtett költségek. Az ajánlatban minden tétel tételesen szerepel.",
    num: "03",
  },
  {
    icon: ShieldCheck,
    title: "5 év garancia",
    desc: "A kivitelezésre és a beépített anyagokra teljes körű garanciát vállalunk.",
    num: "04",
  },
  {
    icon: Users,
    title: "Saját, gyakorlott csapat",
    desc: "Nem alvállalkozóval dolgozunk — saját, betanult szakembereink végzik a munkát.",
    num: "05",
  },
  {
    icon: ThumbsUp,
    title: "500+ elégedett ügyfél",
    desc: "15 év alatt több száz kerítést és kaput adtunk át országszerte.",
    num: "06",
  },
];

export default function WhyUs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section id="miert" className="relative py-24 bg-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-stone-300 text-xs font-semibold uppercase tracking-wide mb-4">
              Miért minket
            </div>
            <h2 className="display text-4xl md:text-5xl leading-tight">
              Megbízhatóság, amit a szomszéd is megirigyel
            </h2>
            <p className="mt-4 text-lg text-stone-400">
              A jó kerítés évtizedekre szól — nálunk a precíz munka, korrekt ár
              és tartott határidő nem ígéret, hanem alap.
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Előző"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Következő"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {points.map((p) => (
            <div
              key={p.title}
              className="snap-start flex-none w-[280px] sm:w-[320px] rounded-2xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07] transition-colors relative overflow-hidden"
            >
              {/* Watermark number */}
              <div className="absolute top-3 right-5 display text-6xl font-bold text-white/[0.05] leading-none select-none">
                {p.num}
              </div>

              <div className="w-12 h-12 rounded-xl amber-gradient flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-ink" strokeWidth={1.8} />
              </div>
              <h3 className="display text-xl text-white leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll hint dots */}
        <div className="flex gap-1.5 mt-5 justify-center">
          {points.map((p, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
