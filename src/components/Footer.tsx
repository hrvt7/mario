import { Phone, Mail } from "lucide-react";

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center shadow-lg shadow-red/30">
                <span className="text-white display text-2xl leading-none">S</span>
              </div>
              <div>
                <div className="display text-3xl tracking-wider">STEFRI</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-red-light font-semibold">
                  Ausztriából · 2014
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
              Minőségi húskészítmények Ausztriából. Házhoz visszük a legjobb
              felvágottakat — mozgó boltunk közel 100 településre rendszeresen
              szállít friss, prémium árut.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/felvagott"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/10 hover:brand-gradient hover:scale-110 transition-all flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-red-light mb-4">
              Weboldal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-zinc-300 hover:text-white transition-colors">Kezdőlap</a></li>
              <li><a href="/rolunk" className="text-zinc-300 hover:text-white transition-colors">Rólunk</a></li>
              <li><a href="/termekek" className="text-zinc-300 hover:text-white transition-colors">Termékek</a></li>
              <li><a href="/akciok" className="text-zinc-300 hover:text-white transition-colors">Akcióink</a></li>
              <li><a href="https://online.pubhtml5.com/oayu/txff/#p=1" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">Katalógus</a></li>
              <li><a href="/kapcsolat" className="text-zinc-300 hover:text-white transition-colors">Kapcsolat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest text-red-light mb-4">
              Kapcsolat
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+36204509387" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-red-light shrink-0" />
                  +36 20 450 9387
                </a>
              </li>
              <li>
                <a href="mailto:minosegifelvagottak@gmail.com" className="flex items-start gap-3 text-zinc-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-red-light shrink-0 mt-0.5" />
                  <span className="break-all">minosegifelvagottak@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Stefri — Minőségi húskészítmények Ausztriából. Minden jog fenntartva.</div>
          <div className="flex gap-6">
            <a href="/rolunk" className="hover:text-white transition-colors">Rólunk</a>
            <a href="/kapcsolat" className="hover:text-white transition-colors">Kapcsolat</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
