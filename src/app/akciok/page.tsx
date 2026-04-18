import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gift, Bell, Tag } from "lucide-react";

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
  );
}

export const metadata = {
  title: "Akcióink | Stefri — Minőségi húskészítmények Ausztriából",
  description: "Heti akciók, kedvezmények, nyereményjátékok — kövessen bennünket Facebook-on, hogy ne maradjon le egyikről sem!",
};

export default function AkciokPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <section className="relative py-20 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 butcher-stripe opacity-20" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red/30 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 border border-red/40 text-xs font-bold uppercase tracking-widest mb-6">
              <Tag className="w-3.5 h-3.5" />
              Akciók
            </div>
            <h1 className="display text-6xl md:text-7xl leading-tight">
              Heti <span className="brand-text-gradient">akciók</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-200 max-w-2xl mx-auto">
              Minden héten friss kedvezményekkel, akciókkal és
              nyereményjátékokkal várjuk — kövessen minket, hogy ne maradjon le!
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Tag, title: "Heti akciók", desc: "Minden héten új, csökkentett árú termékek" },
                { icon: Gift, title: "Nyereményjátékok", desc: "Rendszeres nyeremények hűséges vásárlóinknak" },
                { icon: Bell, title: "Friss hírek", desc: "Új termékek és szezonális ajánlatok" },
              ].map((i) => (
                <div key={i.title} className="p-8 rounded-2xl bg-paper border border-zinc-100 text-center">
                  <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center mx-auto mb-5 shadow-lg shadow-red/30">
                    <i.icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                  </div>
                  <h3 className="display text-2xl text-charcoal tracking-wide">{i.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{i.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl brand-gradient p-10 md:p-14 text-center text-white shadow-2xl shadow-red/40">
              <Facebook className="w-16 h-16 mx-auto mb-4" />
              <h2 className="display text-4xl md:text-5xl tracking-wide">
                Kövessen minket Facebookon!
              </h2>
              <p className="mt-6 text-lg max-w-xl mx-auto opacity-95">
                Heti ajánlatokért, akciókért, kedvezményekért és
                nyereményjátékokért kövesse Facebook oldalunkat.
              </p>
              <a
                href="https://www.facebook.com/felvagott"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-white text-red-dark px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl hover:scale-105 transition-all"
              >
                <Facebook className="w-5 h-5" />
                @felvagott
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
