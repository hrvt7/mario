import { Mail, Phone, MessageCircle } from "lucide-react";

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="kapcsolat" className="relative py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 text-red-dark text-xs font-bold uppercase tracking-widest mb-4">
            Kapcsolat
          </div>
          <h2 className="display text-5xl md:text-6xl text-charcoal leading-tight">
            Vegye fel velünk a{" "}
            <span className="brand-text-gradient">kapcsolatot</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Kérdése van, rendelni szeretne, vagy érdekli, mikor érkezünk az Ön
            településére? Keressen bennünket bátran!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="tel:+36204509387"
            className="group p-8 rounded-3xl bg-white border-2 border-transparent hover:border-red/30 hover:shadow-2xl hover:shadow-red/10 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mb-5 shadow-lg shadow-red/30 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red mb-2">
              Telefon
            </div>
            <div className="display text-3xl text-charcoal tracking-wide">
              +36 20 450 9387
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Hívjon bennünket rendeléssel kapcsolatban
            </p>
          </a>

          <a
            href="mailto:minosegifelvagottak@gmail.com"
            className="group p-8 rounded-3xl bg-white border-2 border-transparent hover:border-red/30 hover:shadow-2xl hover:shadow-red/10 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mb-5 shadow-lg shadow-red/30 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red mb-2">
              Email
            </div>
            <div className="display text-xl text-charcoal tracking-wide break-all">
              minosegifelvagottak<br />@gmail.com
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Írjon, hogy válaszolhassunk
            </p>
          </a>

          <a
            href="https://www.facebook.com/felvagott"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-white border-2 border-transparent hover:border-red/30 hover:shadow-2xl hover:shadow-red/10 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mb-5 shadow-lg shadow-red/30 group-hover:scale-110 transition-transform">
              <Facebook className="w-7 h-7 text-white" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red mb-2">
              Facebook
            </div>
            <div className="display text-3xl text-charcoal tracking-wide">
              @felvagott
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Heti akciók, újdonságok, nyereményjátékok
            </p>
          </a>
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-br from-charcoal to-red-dark p-10 md:p-14 text-center text-white relative">
          <div className="absolute inset-0 butcher-stripe opacity-20" />
          <div className="relative">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-red-light" />
            <h3 className="display text-3xl md:text-4xl tracking-wide">
              Nem biztos, hogy szállítunk az Ön településére?
            </h3>
            <p className="mt-4 text-zinc-200 max-w-2xl mx-auto">
              Hívjon bennünket, és megnézzük — közel 100 településre visszük
              ki rendszeresen a friss árut.
            </p>
            <a
              href="tel:+36204509387"
              className="mt-8 inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Hívjon most
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
