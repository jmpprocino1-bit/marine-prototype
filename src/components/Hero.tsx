"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Custom Painting",
  "Engine Performance",
  "Fiberglass Repair",
  "Marine Graphics",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in-up">
          25+ Years of Marine Excellence
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up-delay-1">
          World-Class{" "}
          <span
            className={`text-[var(--accent)] inline-block transition-all duration-300 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {phrases[phraseIndex]}
          </span>
          <br />
          for High Performance Boats
        </h1>

        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2">
          From custom paint and graphics to complete engine rebuilds. Trusted by
          boat owners across the mid-Atlantic — from Florida to Maine.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover:shadow-xl hover:shadow-[var(--accent)]/25 hover:-translate-y-0.5"
          >
            Get a Free Estimate
          </a>
          <a
            href="#services"
            className="border border-[var(--card-border)] hover:border-[var(--muted)] text-[var(--foreground)] px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            View Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[var(--muted)] text-sm animate-fade-in-up-delay-3">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span>5.0 on Google</span>
          </div>
          <div className="w-px h-4 bg-[var(--card-border)]" />
          <span>Certified Performance Specialist</span>
          <div className="w-px h-4 bg-[var(--card-border)]" />
          <span>Ocean City, MD</span>
        </div>
      </div>
    </section>
  );
}
