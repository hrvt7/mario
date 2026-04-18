import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

export const metadata = {
  title: "Termékek | Stefri — Minőségi húskészítmények Ausztriából",
  description: "Több mint 80 prémium osztrák húskészítmény: felvágottak, virslik, kolbászok, szalámik, sajtok és gyorsfagyasztott termékek.",
};

const categories = [
  {
    title: "Felvágottak",
    icon: "/icons/felvagott.png",
    items: [
      "Berner virsli", "Bécsi virsli", "Csemege kolbász",
      "Debreceni 5 pár", "Debreceni HU 4 db", "Debreceni sajtos HU",
      "Főző kolbász", "Grillkolbász sajtos", "Sütőkolbász – bajor",
      "Szafaládé", "Mini sajtos kolbász", "Mini frankfurti virsli",
      "Mini debreceni", "Párizsi", "Párizsi szeletelt",
      "Turista mini", "Turista", "Bécsi darabolt",
      "Bécsi felvágott", "Sajtos felvágott", "Szalonnás felvágott",
      "Lengyel felvágott", "Favágó", "Pizzaszalámi",
      "Pinkataller szeletelt", "Disznósajt",
    ],
  },
  {
    title: "Füstölt termékek",
    icon: "/icons/pig.png",
    items: [
      "Füstölt csülök", "Füstölt tarja", "Füstölt-főtt tarja",
      "Füstölt-főtt frikandó", "Füstölt szalonna", "Szalonnavég",
      "Bacon szeletelt", "Prágai sonka", "Pizzasonka",
      "Prágai — mandulás", "Prágai — paradicsomos", "Prágai — tökmagos",
      "Szauna sonka",
    ],
  },
  {
    title: "Húskenyerek & krémek",
    icon: "/icons/cow.png",
    items: [
      "Húskenyér", "Húskenyér — sajtos", "Húskenyér — pikáns",
      "Májkrém (tökmagos)", "Májkrém (almás)", "Májkrém (tormás)",
    ],
  },
  {
    title: "Sajtok",
    icon: "/icons/cheese.png",
    items: [
      "Szeletelt Gouda", "Szeletelt Edami", "Darabolt Edami",
      "Panírozott ementáli",
    ],
  },
  {
    title: "Gyorsfagyasztott zöldségek",
    icon: "/icons/felvagott.png",
    items: [
      "Karfiol", "Gomba", "Hagymakarika", "Brokkoli", "Cukkíni",
      "Fasírtpogácsa", "Fűszervaj",
    ],
  },
  {
    title: "Panírozott termékek",
    icon: "/icons/virsli.png",
    items: [
      "Csirkemellfilé", "Csirkecsíkok — tökmagos", "Csirkecsíkok — szezámos",
      "Csirkecsíkok — mediterrán", "Csirkecsíkok — corn flakes",
      "Pulyka Cordon", "Sertés Cordon", "Sertés szelet (120g)",
      "Pulyka szelet (120g)", "Alaszkai tőkehal panírozott",
    ],
  },
  {
    title: "Édesség & egyéb",
    icon: "/icons/grill.png",
    items: [
      "Tepertős gombóc", "Szilvás gombóc", "Nugátos gombóc",
    ],
  },
];

export default function TermekekPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <section className="relative py-20 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 butcher-stripe opacity-20" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-red/30 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 border border-red/40 text-xs font-bold uppercase tracking-widest mb-6">
              Termékek
            </div>
            <h1 className="display text-6xl md:text-7xl leading-tight">
              80+ <span className="brand-text-gradient">prémium</span> termék
            </h1>
            <p className="mt-6 text-xl text-zinc-200 max-w-2xl mx-auto">
              Felvágottak, virslik, kolbászok, szalámik, sajtok és
              gyorsfagyasztott termékek — mindent egy helyről, osztrák minőségben.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl brand-gradient flex items-center justify-center shadow-lg shadow-red/30 p-3">
                    <img
                      src={cat.icon}
                      alt={cat.title}
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h2 className="display text-4xl md:text-5xl text-charcoal tracking-wide">
                      {cat.title}
                    </h2>
                    <div className="text-sm text-zinc-500 mt-1">
                      {cat.items.length} termék
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="px-5 py-4 rounded-xl bg-paper border border-zinc-100 hover:border-red/30 hover:bg-white hover:shadow-md transition-all font-medium text-charcoal"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-dark to-charcoal text-white text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="display text-4xl md:text-5xl">
              Érdekli egy termék? <span className="brand-text-gradient">Rendelhet!</span>
            </h2>
            <p className="mt-6 text-xl text-zinc-200">
              Hívjon bennünket, és egyeztessünk a rendeléséről.
            </p>
            <a
              href="tel:+36204509387"
              className="mt-8 inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              +36 20 450 9387
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
