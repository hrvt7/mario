import { Truck, MapPin, Phone, Calendar } from "lucide-react";

export default function Hours() {
  return (
    <section id="szallitas" className="relative py-24 bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 butcher-stripe opacity-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-dark/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 border border-red/30 text-white text-xs font-bold uppercase tracking-widest mb-4">
              <Truck className="w-3.5 h-3.5" />
              Mozgó Bolt
            </div>
            <h2 className="display text-5xl md:text-6xl leading-tight">
              Házhoz visszük
              <span className="block brand-text-gradient">a legjobbat</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              Hűtött szállítójárműveink közel 100 településre rendszeresen
              visznek friss árut. Keressen bennünket telefonon, hogy megtudja,
              mikor érkezünk az Ön településére.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+36204509387"
                className="inline-flex items-center gap-2 brand-gradient text-white px-7 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl shadow-red/50 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                +36 20 450 9387
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red/40 transition-colors">
              <Calendar className="w-8 h-8 text-red-light mb-4" />
              <div className="display text-2xl tracking-wide">Heti 2x</div>
              <div className="text-sm text-zinc-400 mt-1">Friss szállítás Ausztriából</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red/40 transition-colors sm:mt-8">
              <MapPin className="w-8 h-8 text-red-light mb-4" />
              <div className="display text-2xl tracking-wide">~100 település</div>
              <div className="text-sm text-zinc-400 mt-1">Állandó szállítási terület</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red/40 transition-colors">
              <Truck className="w-8 h-8 text-red-light mb-4" />
              <div className="display text-2xl tracking-wide">Hűtött flotta</div>
              <div className="text-sm text-zinc-400 mt-1">Minden termék végig friss</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red/40 transition-colors sm:mt-8">
              <Phone className="w-8 h-8 text-red-light mb-4" />
              <div className="display text-2xl tracking-wide">Telefonos</div>
              <div className="text-sm text-zinc-400 mt-1">Rendelés & egyeztetés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
