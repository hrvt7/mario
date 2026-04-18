import { Award, Truck, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Prémium minőség",
    desc: "2014 óta közvetlenül a gyártótól szerezzük be termékeinket magas minőségű sertés- és marhahús alapanyagokból.",
  },
  {
    icon: Truck,
    title: "Mozgó bolt",
    desc: "Hűtött szállítójárműveink közel 100 településre rendszeresen visznek friss árut az Ön otthonához.",
  },
  {
    icon: Clock,
    title: "Heti 2x friss",
    desc: "Minden héten két szállítást kapunk Ausztriából, így mindig friss, minőségi terméket vihet haza.",
  },
  {
    icon: Heart,
    title: "Hűséges vásárlók",
    desc: "Több mint 10 éve szolgáljuk ki ügyfeleinket — a visszajelzéseik alapján megérte.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 text-red-dark text-xs font-bold uppercase tracking-widest mb-4">
              Rólunk
            </div>
            <h2 className="display text-5xl md:text-6xl text-charcoal leading-tight">
              10+ év{" "}
              <span className="brand-text-gradient">töretlen</span> működés
            </h2>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              Cégünk 2014 óta szállítja a magyar vásárlóknak a legjobb osztrák
              húskészítményeket. Heti két alkalommal közvetlenül a gyártótól
              érkezik a friss áru, amit hűtött mozgó boltjainkkal közel 100
              településre juttatunk el.
            </p>
            <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
              A Stefri márka a minőséget, megbízhatóságot és a hagyományos
              ízeket jelenti — mindezt megfizethető áron, egyenesen az Ön
              otthonához.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/rolunk"
                className="inline-flex items-center gap-2 brand-gradient text-white px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-red/30 hover:scale-105 transition-all"
              >
                Bővebben rólunk
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-red/20 transition-all ${
                  i % 2 === 1 ? "sm:mt-8" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-4 shadow-lg shadow-red/30">
                  <f.icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="display text-xl text-charcoal tracking-wide">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
