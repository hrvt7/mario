import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Felvágottak",
    desc: "Párizsi, debreceni, prágai sonka, bacon, szalámik és még 40+ választék",
    icon: "/icons/felvagott.png",
    count: "40+ termék",
  },
  {
    title: "Virslik",
    desc: "Berner, bécsi, frankfurti, sajtos és mini virslik friss osztrák minőségben",
    icon: "/icons/virsli.png",
    count: "8+ fajta",
  },
  {
    title: "Grillkolbászok",
    desc: "Sütőkolbász, bajor, sajtos grillkolbász, főzőkolbász — tökéletes a rostra",
    icon: "/icons/grill.png",
    count: "6+ fajta",
  },
  {
    title: "Sertés alapanyag",
    desc: "Füstölt csülök, tarja, frikandó, szalonna, disznósajt — a hagyományok ízei",
    icon: "/icons/pig.png",
    count: "12+ termék",
  },
  {
    title: "Marhahús",
    desc: "Bécsi felvágott, húskenyér, favágó — karakteres, prémium marhahús termékek",
    icon: "/icons/cow.png",
    count: "8+ termék",
  },
  {
    title: "Sajtok",
    desc: "Gouda, Edami szeletelve és darabolva, panírozott ementáli — prémium minőség",
    icon: "/icons/cheese.png",
    count: "5+ fajta",
  },
];

export default function Menu() {
  return (
    <section id="termekek" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 text-red-dark text-xs font-bold uppercase tracking-widest mb-4">
            Termékeink
          </div>
          <h2 className="display text-5xl md:text-6xl text-charcoal leading-tight">
            Amit <span className="brand-text-gradient">kínálunk</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Több mint 80 termék, 6 kategóriában. Mindent, amire egy háztartásnak
            szüksége lehet — prémium osztrák minőségben.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="/termekek"
              className="group relative p-8 rounded-3xl bg-paper hover:bg-white border-2 border-transparent hover:border-red/30 hover:shadow-2xl hover:shadow-red/10 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red/5 rounded-full blur-3xl group-hover:bg-red/15 transition-colors" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl brand-gradient p-4 mb-5 shadow-lg shadow-red/30 flex items-center justify-center">
                  <img
                    src={cat.icon}
                    alt={cat.title}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red mb-2">
                  {cat.count}
                </div>
                <h3 className="display text-3xl text-charcoal tracking-wide mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-red font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Részletek
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/termekek"
            className="inline-flex items-center gap-2 brand-gradient text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl shadow-red/40 hover:shadow-red/60 hover:scale-105 transition-all"
          >
            Teljes termékkínálat
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
