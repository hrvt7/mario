import { ImageIcon } from "lucide-react";

// DEMÓ KÉPEK — később cserélhetők Márió saját referencia fotóira.
// Egyszerűen írd át a `src` mezőket a public/references/ mappába feltöltött képekre.
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=900&auto=format&fit=crop",
    title: "Táblás kerítés — családi ház",
  },
  {
    src: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=900&auto=format&fit=crop",
    title: "Csúszókapu automatikával",
  },
  {
    src: "https://images.unsplash.com/photo-1572297870735-3a4a3a6f0f3a?q=80&w=900&auto=format&fit=crop",
    title: "Kovácsoltvas kerítés",
  },
  {
    src: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=900&auto=format&fit=crop",
    title: "Drótfonatos kerítés — telephely",
  },
  {
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=900&auto=format&fit=crop",
    title: "Kétszárnyú nyílókapu",
  },
  {
    src: "https://images.unsplash.com/photo-1632153839326-49c5a3f5b0a6?q=80&w=900&auto=format&fit=crop",
    title: "Modern lamellás kerítés",
  },
];

export default function References() {
  return (
    <section id="referenciak" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 text-steel text-xs font-semibold uppercase tracking-wide mb-4">
              <ImageIcon className="w-3.5 h-3.5" />
              Referenciák
            </div>
            <h2 className="display text-4xl md:text-5xl text-ink leading-tight">
              Munkáink, amik magukért beszélnek
            </h2>
            <p className="mt-4 text-lg text-steel">
              Néhány elkészült kerítés és kapu a portfóliónkból. A galéria
              folyamatosan bővül a legfrissebb projektekkel.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((g) => (
            <figure
              key={g.title}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100"
            >
              <img
                src={g.src}
                alt={g.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium">
                {g.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-steel flex items-center gap-2">
          <ImageIcon className="w-3.5 h-3.5" />
          A fenti képek demó tartalom — a végleges oldalon Márió saját
          referencia fotói jelennek meg.
        </p>
      </div>
    </section>
  );
}
