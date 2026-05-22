import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Táblás kerítés",
  "Drótfonatos kerítés",
  "Kovácsoltvas kerítés",
  "Csúszókapu",
  "Nyílókapu",
  "Kapuautomatika",
];

const nav = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#kalkulator", label: "Árkalkulátor" },
  { href: "#referenciak", label: "Referenciák" },
  { href: "#miert", label: "Miért minket" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 amber-gradient rounded-lg flex items-center justify-center">
                <span className="display text-xl text-ink leading-none">M</span>
              </div>
              <div className="leading-none">
                <div className="display text-2xl tracking-tight">MÁRIÓ</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium mt-0.5">
                  Kerítés &amp; Kapu
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Kerítésépítés és kapukivitelezés profi módon, 15 év
              tapasztalattal. Ingyenes felmérés, korrekt ár, tartott
              határidő — kulcsrakész megoldással.
            </p>
          </div>

          <div>
            <h4 className="font-semibold uppercase text-xs tracking-widest text-stone-500 mb-4">
              Szolgáltatások
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#szolgaltatasok" className="text-stone-400 hover:text-amber transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase text-xs tracking-widest text-stone-500 mb-4">
              Kapcsolat
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+36300000000" className="flex items-center gap-3 text-stone-400 hover:text-amber transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +36 30 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@mario-kerites.hu" className="flex items-center gap-3 text-stone-400 hover:text-amber transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  info@mario-kerites.hu
                </a>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <MapPin className="w-4 h-4 shrink-0" />
                Magyarország
              </li>
            </ul>
            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-xs text-stone-500 hover:text-amber transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <div>© {new Date().getFullYear()} MÁRIÓ Kerítésépítés. Minden jog fenntartva.</div>
          <div>Demó weboldal — bemutató céllal készült.</div>
        </div>
      </div>
    </footer>
  );
}
