"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const fenceLeftRef = useRef<HTMLDivElement>(null);
  const fenceRightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", x + "%");
      el.style.setProperty("--my", y + "%");
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // Fence-pull scroll effect
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = sectionRef.current;
        if (!el) return;
        const h = el.offsetHeight || window.innerHeight;
        const y = window.scrollY || 0;
        const p = Math.max(0, Math.min(1, y / h));

        if (fenceLeftRef.current) {
          fenceLeftRef.current.style.transform = `translateX(${-p * 110}%)`;
          fenceLeftRef.current.style.opacity = String(1 - p * 0.6);
        }
        if (fenceRightRef.current) {
          fenceRightRef.current.style.transform = `translateX(${p * 110}%)`;
          fenceRightRef.current.style.opacity = String(1 - p * 0.6);
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${-p * 40}px)`;
          contentRef.current.style.opacity = String(1 - p * 0.35);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="v2-hero" ref={sectionRef}>
      <div className="v2-hero-spot" />

      {/* Fence panels — slide apart on scroll */}
      <div className="v2-hero-fence v2-hero-fence--left" ref={fenceLeftRef} aria-hidden="true">
        <FencePanel />
      </div>
      <div className="v2-hero-fence v2-hero-fence--right" ref={fenceRightRef} aria-hidden="true">
        <FencePanel flipped />
      </div>

      <div className="mk-container v2-hero-inner" ref={contentRef}>
        <h1 className="v2-hero-h1">
          Kerítés <span className="accent">és</span> kapu,
          <br />
          amire <span className="accent">évtizedekig</span>
          <br />
          <span className="stroke">számíthat.</span>
        </h1>

        <div className="v2-hero-bottom">
          <div>
            <p className="v2-hero-lead">
              <strong>Táblás, drótfonatos és kovácsoltvas</strong> kerítések,
              <strong> csúszó- és nyílókapuk</strong> profi kivitelezésben.
              Pontos munka, korrekt ár, határidőre — kulcsrakész megoldással.
            </p>
            <div className="v2-hero-ctas">
              <a href="#kalkulator" className="v2-btn v2-btn-primary">
                Árkalkuláció indítása
                <svg className="arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="tel:+36300000000" className="v2-btn v2-btn-ghost">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                +36 30 000 0000
              </a>
            </div>
          </div>

          <div className="v2-hero-stats">
            <Stat value="15"  suffix="+"   label="Év tapasztalat" />
            <Stat value="500" suffix="+"   label="Elkészült projekt" />
            <Stat value="5"   suffix=" év" label="Garancia" />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="v2-marquee">
        <div className="v2-marquee-track">
          <span>
            Táblás kerítés <em className="v2-marquee-dot">●</em>
            Drótfonatos kerítés <em className="v2-marquee-dot">●</em>
            Kovácsoltvas kerítés <em className="v2-marquee-dot">●</em>
            Csúszókapu <em className="v2-marquee-dot">●</em>
            Nyílókapu <em className="v2-marquee-dot">●</em>
            Kapuautomatika <em className="v2-marquee-dot">●</em>
          </span>
          <span aria-hidden="true">
            Táblás kerítés <em className="v2-marquee-dot">●</em>
            Drótfonatos kerítés <em className="v2-marquee-dot">●</em>
            Kovácsoltvas kerítés <em className="v2-marquee-dot">●</em>
            Csúszókapu <em className="v2-marquee-dot">●</em>
            Nyílókapu <em className="v2-marquee-dot">●</em>
            Kapuautomatika <em className="v2-marquee-dot">●</em>
          </span>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  return (
    <div className="v2-stat">
      <div className="v2-stat-num">{value}<span className="v2-stat-suffix">{suffix}</span></div>
      <div className="v2-stat-lbl">{label}</div>
    </div>
  );
}

function FencePanel({ flipped }: { flipped?: boolean }) {
  const bars = [];
  for (let i = 0; i < 16; i++) {
    bars.push(<rect key={i} x={i * 80 + 36} y={20} width={12} height={760} rx={3} />);
  }
  return (
    <svg
      viewBox="0 0 1280 800"
      preserveAspectRatio="xMidYMax slice"
      className={`v2-fence-svg${flipped ? " is-flipped" : ""}`}
      role="presentation"
    >
      {/* Top rail — amber tint */}
      <rect x={0} y={60} width={1280} height={10} rx={2} fill="rgba(232,147,12,0.28)" />
      {/* Vertical bars — inherit CSS fill */}
      {bars}
      {/* Bottom rail — amber tint */}
      <rect x={0} y={730} width={1280} height={14} rx={2} fill="rgba(232,147,12,0.28)" />
    </svg>
  );
}
