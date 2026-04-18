import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Truck, Clock, Heart, Users, MapPin } from "lucide-react";

export const metadata = {
  title: "Rólunk | Stefri — Minőségi húskészítmények Ausztriából",
  description: "2014 óta szállítjuk a magyar vásárlóknak a legjobb osztrák húskészítményeket. Ismerje meg történetünket és értékeinket.",
};

export default function RolunkPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <section className="relative py-20 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 butcher-stripe opacity-20" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red/30 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 border border-red/40 text-xs font-bold uppercase tracking-widest mb-6">
              Rólunk
            </div>
            <h1 className="display text-6xl md:text-7xl leading-tight">
              10+ év <span className="brand-text-gradient">minőség</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-200 max-w-2xl mx-auto">
              Cégünk 2014 óta töretlenül működik — heti két alkalommal
              közvetlenül a gyártótól hozzuk a legjobb osztrák húskészítményeket.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h2 className="display text-4xl md:text-5xl text-charcoal">A Stefri történet</h2>
            <p className="text-lg text-zinc-700 leading-relaxed mt-6">
              Cégünk <strong>2014 óta töretlenül működik</strong>, és évről
              évre egyre több magyar háztartáshoz jutunk el. Küldetésünk, hogy
              megfizethető áron, prémium minőségű osztrák húskészítményeket
              kínáljunk ügyfeleinknek.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mt-4">
              Heti két alkalommal szerezzük be termékeinket közvetlenül a
              gyártótól, magas minőségű sertés- és marhahús alapanyagokból.
              Így tudjuk garantálni, hogy amit Ön megvásárol, az mindig friss,
              és mindig ugyanolyan kiváló.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mt-4">
              Hűtött szállítójárműveinkkel — a <strong>Stefri mozgó bolttal</strong> —
              közel 100 településre járunk rendszeresen. Célunk, hogy a minőségi
              osztrák húskészítmények ne csak a nagyvárosokban legyenek
              elérhetőek, hanem mindenki számára, aki igényli.
            </p>
          </div>
        </section>

        <section className="py-20 bg-paper">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="display text-4xl md:text-5xl text-charcoal text-center mb-16">
              Amiben <span className="brand-text-gradient">hiszünk</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Award, title: "Minőség", desc: "Csak prémium osztrák beszállítóval dolgozunk" },
                { icon: Clock, title: "Frissesség", desc: "Heti 2 szállítás, hűtött flotta" },
                { icon: Heart, title: "Hagyomány", desc: "Klasszikus ízek, modern eljárásokkal" },
                { icon: Users, title: "Ügyfélközpont", desc: "10+ év tapasztalat, hűséges vevőkör" },
                { icon: Truck, title: "Mozgó bolt", desc: "Házhozszállítás közel 100 településre" },
                { icon: MapPin, title: "Elérhetőség", desc: "Egy telefon, és máris kiszolgálunk" },
              ].map((v) => (
                <div key={v.title} className="p-8 rounded-2xl bg-white border border-zinc-100 hover:border-red/20 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mb-5 shadow-lg shadow-red/30">
                    <v.icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="display text-2xl text-charcoal tracking-wide">{v.title}</h3>
                  <p className="mt-2 text-zinc-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal text-white text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="display text-4xl md:text-5xl">
              Csatlakozzon a <span className="brand-text-gradient">Stefri családhoz</span>
            </h2>
            <p className="mt-6 text-xl text-zinc-300">
              Hívjon minket, és tapasztalja meg Ön is, miért választanak
              bennünket tízezrek szerte az országban.
            </p>
            <a
              href="tel:+36204509387"
              className="mt-8 inline-flex items-center gap-2 brand-gradient text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl shadow-red/50 hover:scale-105 transition-all"
            >
              +36 20 450 9387
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
