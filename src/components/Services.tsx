import { Fence, DoorOpen, Cpu, Hammer, Grid3x3, Ruler } from "lucide-react";

const services = [
  {
    icon: Grid3x3,
    title: "Táblás kerítés",
    desc: "Modern, igényes 3D-s táblás kerítésrendszer. Tartós, alacsony karbantartású, esztétikus megoldás — otthonhoz és telephelyhez egyaránt.",
    tags: ["Horganyzott", "3D panel", "Festett bevonat"],
    num: "01",
    dark: true,
  },
  {
    icon: Fence,
    title: "Drótfonatos kerítés",
    desc: "Költséghatékony, gyors kivitelezésű drótfonatos kerítés. Telekhatárok lezárására, kertek és nagyobb területek bekerítésére.",
    tags: ["Gyors kivitel", "Gazdaságos", "Nagy területre"],
    num: "02",
    dark: false,
  },
  {
    icon: Hammer,
    title: "Kovácsoltvas kerítés",
    desc: "Egyedi tervezésű, kézzel készített kovácsoltvas kerítések és kapuk — időtálló elegancia, amely megemeli az ingatlan értékét.",
    tags: ["Egyedi terv", "Kézzel készült", "Prémium"],
    num: "03",
    dark: true,
  },
  {
    icon: DoorOpen,
    title: "Csúszókapu",
    desc: "Helytakarékos, sínen futó vagy önhordó csúszókapuk. Tökéletes választás szűkös beállóknál és lejtős terepen is.",
    tags: ["Sínes", "Önhordó", "Automata opció"],
    num: "04",
    dark: false,
  },
  {
    icon: Ruler,
    title: "Nyílókapu",
    desc: "Egy- és kétszárnyú nyílókapuk minden méretben. Stabil szerkezet, precíz illesztés, hosszú élettartam garantálva.",
    tags: ["1 szárnyú", "2 szárnyú", "Egyedi méret"],
    num: "05",
    dark: true,
  },
  {
    icon: Cpu,
    title: "Kapuautomatika",
    desc: "Motorizált kapunyitás távirányítóval, kódzárral vagy okostelefonról. Kényelmes és biztonságos megoldás meglévő kapukhoz is.",
    tags: ["Távirányító", "Okostelefon", "Meglévő kapuhoz"],
    num: "06",
    dark: false,
  },
];

const CARD_OFFSET = 22; // px per card
const STICKY_TOP = 72;  // header height

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative bg-stone-50">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200 text-steel text-xs font-semibold uppercase tracking-wide mb-4">
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
      </div>

      {/* Stacking cards */}
      <div className="pb-40">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="sticky mx-3 sm:mx-5 lg:mx-8 mb-3 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl"
            style={{ top: `${STICKY_TOP + i * CARD_OFFSET}px`, zIndex: 10 + i }}
          >
            <div
              className={`relative flex flex-col lg:flex-row min-h-[340px] lg:min-h-[300px] ${
                s.dark
                  ? "bg-stone-900 text-white"
                  : "bg-white text-ink border border-line"
              }`}
            >
              {/* Big number watermark */}
              <div
                className={`absolute top-4 right-6 display text-7xl lg:text-8xl font-bold leading-none select-none pointer-events-none ${
                  s.dark ? "text-white/[0.06]" : "text-ink/[0.05]"
                }`}
              >
                {s.num}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between p-7 lg:p-12 lg:w-3/5">
                <div>
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-5 ${
                      s.dark ? "bg-white/10" : "amber-gradient"
                    }`}
                    style={{ width: 52, height: 52 }}
                  >
                    <s.icon
                      className={`w-6 h-6 ${s.dark ? "text-amber" : "text-ink"}`}
                      strokeWidth={1.7}
                    />
                  </div>
                  <h3 className="display text-2xl lg:text-3xl leading-tight">
                    {s.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm lg:text-base leading-relaxed max-w-lg ${
                      s.dark ? "text-stone-400" : "text-steel"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full tracking-wide ${
                        s.dark
                          ? "bg-white/10 text-stone-300"
                          : "bg-stone-100 text-steel"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right accent panel */}
              <div
                className={`hidden lg:flex lg:w-2/5 items-center justify-center ${
                  s.dark ? "bg-white/[0.03]" : "bg-stone-50"
                }`}
              >
                <div
                  className={`w-36 h-36 rounded-3xl flex items-center justify-center ${
                    s.dark ? "amber-gradient" : "bg-stone-900"
                  }`}
                >
                  <s.icon
                    className={`w-16 h-16 ${s.dark ? "text-ink" : "text-amber"}`}
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mx-3 sm:mx-5 lg:mx-8 -mt-24 relative z-50 mb-0">
        <div className="flex items-center justify-between flex-wrap gap-4 p-6 lg:p-8 rounded-2xl bg-stone-900 text-white shadow-2xl">
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
