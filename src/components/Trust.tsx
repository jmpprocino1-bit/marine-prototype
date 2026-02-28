export default function Trust() {
  const brands = [
    "Sunsation",
    "Black Thunder",
    "Skater",
    "Checkmate",
    "Awesome Powerboats",
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "5.0", label: "Google Rating" },
    { value: "FL→ME", label: "Coast to Coast" },
    { value: "6+", label: "Services Offered" },
  ];

  return (
    <section id="trust" className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
            Trusted By The Best
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Performance Boats Deserve Performance Service
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Jerry Thompson is recognized as one of the top marine graphic
            designers and artists on the entire Atlantic coast.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8">
          <p className="text-center text-sm text-[var(--muted)] mb-8 uppercase tracking-wider">
            Brands We&apos;ve Worked On
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-xl font-bold text-[var(--muted)]/50 hover:text-[var(--foreground)] transition-colors duration-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
