"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";

const nav = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#kalkulator", label: "Árkalkulátor" },
  { href: "#referenciak", label: "Referenciák" },
  { href: "#miert", label: "Miért minket" },
  { href: "#kapcsolat", label: "Kapcsolat" },
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
          ? "bg-white/95 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 amber-gradient rounded-lg flex items-center justify-center shadow-sm">
              <span className="display text-xl text-ink leading-none">M</span>
            </div>
            <div className="leading-none">
              <div className="display text-2xl text-ink tracking-tight">MÁRIÓ</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-steel font-medium mt-0.5">
                Kerítés &amp; Kapu
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-steel hover:text-ink transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+36300000000"
              className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-amber hover:text-ink transition-colors"
            >
              <Phone className="w-4 h-4" />
              +36 30 000 0000
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink"
            aria-label="Menü"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-line">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-steel hover:bg-stone-100 rounded-lg"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+36300000000"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-white px-5 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                +36 30 000 0000
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
