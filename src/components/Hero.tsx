import { Calculator, Phone, ShieldCheck, Clock, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-50 min-h-screen flex items-center">
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber/15 text-amber-dark text-xs font-semibold uppercase tracking-wide mb-6">
              <Award className="w-3.5 h-3.5" />
              15+ év szakmai tapasztalat
            </div>

            <h1 className="display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
              Kerítés és kapu,
              <span className="block mt-1">
                amire <span className="text-amber-dark">évtizedekig</span>
              </span>
              <span className="block mt-1">számíthat.</span>
            </h1>

            <p className="mt-6 text-lg text-steel max-w-xl leading-relaxed">
              Táblás, drótfonatos és kovácsoltvas kerítések, csúszó- és
              nyílókapuk profi kivitelezésben. Pontos munka, korrekt ár,
              határidőre — kulcsrakész megoldással.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kalkulator"
                className="inline-flex items-center gap-2 amber-gradient text-ink px-7 py-4 rounded-lg text-base font-semibold shadow-lg shadow-amber/30 hover:scale-[1.02] transition-transform"
              >
                <Calculator className="w-5 h-5" />
                Árkalkuláció indítása
              </a>
              <a
                href="tel:+36300000000"
                className="inline-flex items-center gap-2 bg-white border border-line text-ink px-7 py-4 rounded-lg text-base font-semibold hover:border-ink transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hívjon most
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-steel">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-dark" />
                Garanciával
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-dark" />
                Pontos határidő
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-dark" />
                Ingyenes felmérés
              </div>
            </div>
          </div>

          <div className="relative fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1200&auto=format&fit=crop"
                alt="Modern kerítés és kapu kivitelezés"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl border border-line px-5 py-4">
              <div className="display text-3xl text-ink">500+</div>
              <div className="text-xs text-steel font-medium mt-0.5">
                Elkészült projekt
              </div>
            </div>
            <div className="absolute -top-5 -right-5 amber-gradient rounded-xl shadow-xl px-5 py-4">
              <div className="display text-3xl text-ink">5 év</div>
              <div className="text-xs text-ink/80 font-medium mt-0.5">
                Garancia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
