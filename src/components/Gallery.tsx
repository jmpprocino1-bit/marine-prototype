export default function Gallery() {
  const projects = [
    {
      title: "Custom Racing Graphics",
      category: "Graphics & Paint",
      description:
        "Complete custom graphic design and application for a 38ft Sunsation. From concept sketches to final clear coat.",
      result: "Show-ready finish in under 3 weeks",
    },
    {
      title: "Twin Engine Rebuild",
      category: "Engine Performance",
      description:
        "Full teardown and rebuild of twin outboard engines. New internals, upgraded components, and performance tuning.",
      result: "15% more horsepower, factory-fresh reliability",
    },
    {
      title: "Hull Restoration",
      category: "Fiberglass & Paint",
      description:
        "Major fiberglass repair and complete hull repaint on a 42ft offshore boat. Structural damage repaired to better-than-new condition.",
      result: "Boat returned to water 2 weeks ahead of schedule",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Performance. Finished with Precision.
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Every project gets the same level of attention — whether it&apos;s a
            custom paint job or a complete engine overhaul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-1"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--card-bg)] flex items-center justify-center">
                <span className="text-[var(--muted)] text-sm">
                  [Project Photo]
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs text-[var(--accent)] font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-[var(--card-border)]">
                  <p className="text-sm">
                    <span className="text-[var(--accent)]">Result: </span>
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
