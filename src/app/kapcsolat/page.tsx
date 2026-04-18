import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Kapcsolat | Stefri — Minőségi húskészítmények Ausztriából",
  description: "Vegye fel velünk a kapcsolatot: +36 20 450 9387, minosegifelvagottak@gmail.com, Facebook @felvagott",
};

export default function KapcsolatPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <section className="relative py-20 bg-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 butcher-stripe opacity-20" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-red/30 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/20 border border-red/40 text-xs font-bold uppercase tracking-widest mb-6">
              Elérhetőség
            </div>
            <h1 className="display text-6xl md:text-7xl leading-tight">
              <span className="brand-text-gradient">Kapcsolat</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-200 max-w-2xl mx-auto">
              Kérdése van, rendelni szeretne, vagy érdekli, mikor érkezünk
              az Ön településére? Keressen bennünket bátran!
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
