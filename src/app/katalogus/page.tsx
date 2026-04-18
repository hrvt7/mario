import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, BookOpen } from "lucide-react";

export const metadata = {
  title: "Katalógus | Stefri — Minőségi húskészítmények Ausztriából",
  description: "Tekintse meg online termékkatalógusunkat: minden termékünk képekkel, leírásokkal.",
};

export default function KatalogusPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <section className="relative py-20 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 butcher-stripe opacity-20" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red/30 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 border border-red/40 text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              Katalógus
            </div>
            <h1 className="display text-6xl md:text-7xl leading-tight">
              Online <span className="brand-text-gradient">katalógus</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-200 max-w-2xl mx-auto">
              Böngésszen termékeink teljes katalógusában, képekkel és
              leírásokkal — egy kattintásra az Ön rendelkezésére áll.
            </p>
            <a
              href="https://online.pubhtml5.com/oayu/txff/#p=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 brand-gradient text-white px-8 py-4 rounded-full text-base font-bold uppercase tracking-wide shadow-xl shadow-red/50 hover:scale-105 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Katalógus megtekintése
            </a>
          </div>
        </section>

        <section className="py-12 bg-paper">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <iframe
                src="https://online.pubhtml5.com/oayu/txff/"
                className="w-full h-[80vh] border-0"
                title="Stefri termékkatalógus"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
