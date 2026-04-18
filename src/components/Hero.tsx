import { Phone, Truck, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal min-h-screen flex items-center">
      <div className="absolute inset-0 -z-0">
        <img
          src="/images/van-hero.jpg"
          alt="Stefri mozgó bolt"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/90 to-red-dark/60" />
        <div className="absolute inset-0 butcher-stripe opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest mb-6 border border-red/40">
              <Sparkles className="w-3.5 h-3.5" />
              2014 óta · Közvetlen a gyártótól
            </div>

            <h1 className="display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-white">
              <span className="block">MINŐSÉGI</span>
              <span className="block brand-text-gradient">HÚSKÉSZÍTMÉNYEK</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2 text-cream">
                Ausztriából
              </span>
            </h1>

            <p className="mt-8 text-lg text-zinc-200 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Házhoz visszük a legjobb felvágottakat. Prémium osztrák felvágottak,
              virslik, szalámik és sajtok — heti két szállítás, közel{" "}
              <span className="font-bold text-white">100 településen</span>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/termekek"
                className="inline-flex items-center gap-2 brand-gradient text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl shadow-red/40 hover:shadow-red/60 hover:scale-105 transition-all"
              >
                Termékeink
              </a>
              <a
                href="tel:+36204509387"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Rendelés
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-zinc-200 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-red-light" />
                Házhozszállítás
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-light" />
                ~100 település
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-light" />
                Heti 2x friss
              </div>
            </div>
          </div>

          <div className="relative fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[9/16] max-w-sm mx-auto">
              <div className="absolute inset-0 brand-gradient rounded-[3rem] rotate-3 opacity-40 blur-2xl" />
              <div className="relative bg-white rounded-[3rem] shadow-2xl shadow-red/30 overflow-hidden border-4 border-white/80">
                <div className="relative aspect-[9/16]">
                  <img
                    src="/images/van-hero.jpg"
                    alt="Stefri mozgó bolt - Minőségi termékek Ausztriából"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center px-6 py-6">
                  <div className="display text-4xl tracking-wider text-white drop-shadow-lg">
                    STEFRI
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/90 mt-2 font-semibold">
                    Mozgó Bolt
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 brand-gradient text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider rotate-12 shadow-xl">
                Prémium
              </div>
              <div className="absolute -bottom-3 -left-3 bg-cream text-charcoal px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider -rotate-6 shadow-xl border-2 border-red">
                2014 óta
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
