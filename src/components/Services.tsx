"use client";

const services = [
  {
    title: "Custom Painting",
    description:
      "Full hull painting, specialty finishes, and professionally designed graphics. Recognized as one of the top marine graphic artists on the Atlantic coast.",
    icon: "🎨",
  },
  {
    title: "Engine Repair & Rebuilds",
    description:
      "Certified high performance engine specialist. Inboard and outboard engine removal, rebuilds, upgrades, and reinstallation.",
    icon: "⚙️",
  },
  {
    title: "Fiberglass Repair",
    description:
      "Structural and cosmetic fiberglass repair for hulls, decks, and components. Restore your boat to factory-quality condition.",
    icon: "🛠️",
  },
  {
    title: "Custom Graphics",
    description:
      "25+ years designing custom graphics for performance boats. From concept to application — your vision, our expertise.",
    icon: "✏️",
  },
  {
    title: "Detailing",
    description:
      "Professional marine detailing that protects your investment. Compound, polish, wax, and ceramic coating options available.",
    icon: "✨",
  },
  {
    title: "Upholstery & Canvas",
    description:
      "Custom upholstery repair and replacement. Canvas tops, vinyl seats, cushions, and complete interior refurbishment.",
    icon: "🪡",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Full-Service Marine Shop
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Everything your boat needs under one roof. From cosmetic upgrades to
            complete engine overhauls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
