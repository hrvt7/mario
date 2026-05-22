import { ShieldCheck, Clock, Wallet, Users, Ruler, ThumbsUp } from "lucide-react";

const points = [
  {
    icon: Ruler,
    title: "Ingyenes helyszíni felmérés",
    desc: "Kiszállunk, pontosan felmérjük a terepet, és írásos ajánlatot adunk — mindezt díjmentesen.",
  },
  {
    icon: Clock,
    title: "Tartott határidő",
    desc: "Amit vállalunk, azt be is tartjuk. A munkakezdés és átadás időpontját előre rögzítjük.",
  },
  {
    icon: Wallet,
    title: "Korrekt, átlátható ár",
    desc: "Nincsenek rejtett költségek. Az ajánlatban minden tétel tételesen szerepel.",
  },
  {
    icon: ShieldCheck,
    title: "5 év garancia",
    desc: "A kivitelezésre és a beépített anyagokra teljes körű garanciát vállalunk.",
  },
  {
    icon: Users,
    title: "Saját, gyakorlott csapat",
    desc: "Nem alvállalkozóval dolgozunk — saját, betanult szakembereink végzik a munkát.",
  },
  {
    icon: ThumbsUp,
    title: "500+ elégedett ügyfél",
    desc: "15 év alatt több száz kerítést és kaput adtunk át országszerte.",
  },
];

export default function WhyUs() {
  return (
    <section id="miert" className="relative py-24 bg-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-stone-300 text-xs font-semibold uppercase tracking-wide mb-4">
            Miért minket
          </div>
          <h2 className="display text-4xl md:text-5xl leading-tight">
            Megbízhatóság, amit a szomszéd is megirigyel
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            A jó kerítés évtizedekre szól. Nálunk a precíz munka, a korrekt
            ár és a tartott határidő nem ígéret, hanem alap.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg amber-gradient flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-ink" strokeWidth={1.8} />
              </div>
              <h3 className="display text-xl text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
