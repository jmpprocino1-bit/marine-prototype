"use client";

import { useState } from "react";

const serviceOptions = [
  {
    id: "paint",
    label: "Custom Painting",
    range: "$3,000 – $15,000+",
    note: "Depends on boat size, design complexity, and finish type",
  },
  {
    id: "graphics",
    label: "Custom Graphics",
    range: "$800 – $5,000+",
    note: "From simple decals to full custom wraps and airbrushing",
  },
  {
    id: "engine",
    label: "Engine Rebuild",
    range: "$2,500 – $8,000+",
    note: "Varies by engine type, parts needed, and performance level",
  },
  {
    id: "fiberglass",
    label: "Fiberglass Repair",
    range: "$500 – $6,000+",
    note: "Small cosmetic repairs to major structural work",
  },
  {
    id: "detail",
    label: "Full Detail",
    range: "$300 – $1,500",
    note: "Based on boat length and condition",
  },
  {
    id: "upholstery",
    label: "Upholstery & Canvas",
    range: "$500 – $4,000+",
    note: "Single seat repair to full interior reupholstering",
  },
];

export default function Estimator() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedService = serviceOptions.find((s) => s.id === selected);

  return (
    <section className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
            Quick Estimate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Does It Cost?
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Select a service to see a typical price range. Every boat is
            different — reach out for an accurate quote.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {serviceOptions.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                selected === service.id
                  ? "bg-[var(--accent)]/10 border-[var(--accent)]/40 text-[var(--foreground)]"
                  : "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--accent)]/20"
              }`}
            >
              <span className="text-sm font-medium">{service.label}</span>
            </button>
          ))}
        </div>

        {selectedService && (
          <div className="bg-[var(--card-bg)] border border-[var(--accent)]/20 rounded-xl p-8 text-center transition-all duration-300">
            <p className="text-sm text-[var(--muted)] mb-2">
              Typical range for {selectedService.label}
            </p>
            <p className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-3">
              {selectedService.range}
            </p>
            <p className="text-sm text-[var(--muted)] mb-6">
              {selectedService.note}
            </p>
            <a
              href="#contact"
              className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[var(--accent)]/20"
            >
              Get an Accurate Quote
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
