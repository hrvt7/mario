"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";

const nav = [
  { href: "/", label: "Kezdőlap" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/termekek", label: "Termékek" },
  { href: "/katalogus", label: "Katalógus" },
  { href: "/akciok", label: "Akcióink" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center shadow-lg shadow-red/30">
              <span className="text-white font-display text-2xl leading-none">S</span>
            </div>
            <div className="leading-tight">
              <div className="display text-3xl tracking-wider text-charcoal">
                STEFRI
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-red font-semibold hidden sm:block">
                Ausztriából · 2014
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-charcoal hover:text-red transition-colors uppercase tracking-wide"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+36204509387"
              className="inline-flex items-center gap-2 brand-gradient text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red/30 hover:shadow-red/50 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              +36 20 450 9387
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Menü"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-zinc-100">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-charcoal hover:bg-cream rounded-lg uppercase tracking-wide"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+36204509387"
                className="mt-2 inline-flex items-center justify-center gap-2 brand-gradient text-white px-5 py-3 rounded-full text-sm font-bold"
              >
                <Phone className="w-4 h-4" />
                +36 20 450 9387
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
