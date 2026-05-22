"use client";

import { useRef } from "react";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

// DEMÓ KÉPEK — később cserélhetők Márió saját referencia fotóira.
// Egyszerűen írd át a `src` mezőket a public/references/ mappába feltöltött képekre.
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=900&auto=format&fit=crop",
    title: "Táblás kerítés",
    sub: "Családi ház, Budapest",
  },
  {
    src: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=900&auto=format&fit=crop",
    title: "Csúszókapu",
    sub: "Automatikával, Győr",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop",
    title: "Kovácsoltvas kerítés",
    sub: "Villaövezet, Pécs",
  },
  {
    src: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=900&auto=format&fit=crop",
    title: "Drótfonatos kerítés",
    sub: "Telephely, Debrecen",
  },
  {
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=900&auto=format&fit=crop",
    title: "Kétszárnyú nyílókapu",
    sub: "Társasház, Miskolc",
  },
  {
    src: "https://images.unsplash.com/photo-1632153839326-49c5a3f5b0a6?q=80&w=900&auto=format&fit=crop",
    title: "Modern lamellás kerítés",
    sub: "Üzleti épület, Székesfehérvár",
  },
];

export default function References() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  };

  return (
    <section id="referenciak" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 text-steel text-xs font-semibold uppercase tracking-wide mb-4">
              <ImageIcon className="w-3.5 h-3.5" />
              Referenciák
            </div>
            <h2 className="display text-4xl md:text-5xl text-ink leading-tight">
              Munkáink, amik magukért beszélnek
            </h2>
            <p className="mt-4 text-lg text-steel">
              Néhány elkészült kerítés és kapu a portfóliónkból. A galéria
              folyamatosan bővül.
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink hover:bg-stone-100 transition-colors"
              aria-label="Előző"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink hover:bg-stone-100 transition-colors"
              aria-label="Következő"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {gallery.map((g) => (
            <figure
              key={g.title + g.sub}
              className="snap-start flex-none w-[300px] sm:w-[360px] lg:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 relative group"
            >
              <img
                src={g.src}
                alt={g.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-white font-semibold text-base leading-tight">
                  {g.title}
                </div>
                <div className="text-stone-300 text-xs mt-0.5">{g.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex gap-1.5 mt-5 justify-center">
          {gallery.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-stone-300" />
          ))}
        </div>

        <p className="mt-6 text-xs text-steel flex items-center gap-2">
          <ImageIcon className="w-3.5 h-3.5" />
          A fenti képek demó tartalom — a végleges oldalon Márió saját
          referencia fotói jelennek meg.
        </p>
      </div>
    </section>
  );
}
