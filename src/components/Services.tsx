import { Fence, DoorOpen, Cpu, Hammer, Grid3x3, Ruler } from "lucide-react";

const services = [
  {
    icon: Grid3x3,
    title: "Táblás kerítés",
    desc: "Modern, igényes 3D-s táblás kerítésrendszer. Tartós, alacsony karbantartású, esztétikus megoldás családi házakhoz és telephelyekhez.",
  },
  {
    icon: Fence,
    title: "Drótfonatos kerítés",
    desc: "Költséghatékony, gyors kivitelezésű drótfonatos kerítés telekhatárok lezárására, kertek és nagyobb területek bekerítésére.",
  },
  {
    icon: Hammer,
    title: "Kovácsoltvas kerítés",
    desc: "Egyedi tervezésű, kézzel készített kovácsoltvas kerítések és kapuk — időtálló elegancia, amely megemeli az ingatlan értékét.",
  },
  {
    icon: DoorOpen,
    title: "Csúszókapu",
    desc: "Helytakarékos, sínen futó vagy önhordó csúszókapuk. Tökéletes választás szűkös beállóknál és lejtős terepen is.",
  },
  {
    icon: Ruler,
    title: "Nyílókapu",
    desc: "Egy- és kétszárnyú nyílókapuk minden méretben. Stabil szerkezet, precíz illesztés, hosszú élettartam.",
  },
  {
    icon: Cpu,
    title: "Kapuautomatika",
    desc: "Motorizált kapunyitás távirányítóval, kódzárral vagy okostelefonról. Kényelmes és biztonságos megoldás meglévő kapukhoz is.",
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 text-steel text-xs font-semibold uppercase tracking-wide mb-4">
            Szolgáltatások
          </div>
          <h2 className="display text-4xl md:text-5xl text-ink leading-tight">
            Minden, ami kerítés és kapu — egy kézből
          </h2>
          <p className="mt-4 text-lg text-steel">
            Az anyagbeszerzéstől a kulcsrakész átadásig. Felmérjük a terepet,
            megtervezzük a megoldást, és precízen kivitelezzük.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white p-8 hover:bg-stone-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-stone-100 group-hover:amber-gradient flex items-center justify-center mb-5 transition-colors">
                <s.icon className="w-6 h-6 text-ink" strokeWidth={1.8} />
              </div>
              <h3 className="display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 p-6 rounded-2xl bg-stone-900 text-white">
          <div>
            <div className="display text-xl">Nem találja, amit keres?</div>
            <div className="text-sm text-stone-400 mt-1">
              Egyedi igényekre is vállalunk kivitelezést — kérjen ajánlatot.
            </div>
          </div>
          <a
            href="#kalkulator"
            className="inline-flex items-center gap-2 amber-gradient text-ink px-6 py-3 rounded-lg text-sm font-semibold whitespace-nowrap"
          >
            Árkalkuláció
          </a>
        </div>
      </div>
    </section>
  );
}
