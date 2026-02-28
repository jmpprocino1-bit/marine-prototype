"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We're based in West Ocean City, MD and serve the entire mid-Atlantic region — Maryland, Delaware, New Jersey, Virginia, and communities along the Chesapeake Bay. We've worked on boats from Florida to Maine.",
  },
  {
    q: "How long does a custom paint job take?",
    a: "Timelines depend on the scope of work. A standard repaint typically takes 2-4 weeks. Complex custom graphics with multiple colors and designs can take 4-6 weeks. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do you work on all boat types?",
    a: "We specialize in high performance boats — speedboats, offshore racing boats, cigarette boats, and yachts. We've worked on Sunsation, Black Thunder, Skater, Checkmate, and Awesome Powerboats, among many others. If it's on the water, we can help.",
  },
  {
    q: "Can I get a quote without bringing my boat in?",
    a: "Yes. Send us photos and a description of what you need, and we'll give you a ballpark estimate. For detailed quotes on major work, we'll want to see the boat in person — but the initial conversation costs nothing.",
  },
  {
    q: "What are your hours?",
    a: "Monday through Saturday, 9 AM to 5 PM. Closed Sundays. Best way to reach us is by phone at (443) 664-2733 or through the contact form below.",
  },
  {
    q: "Do you offer any warranties?",
    a: "We stand behind our work. Specific warranty terms depend on the service — paint, fiberglass, engine work, and upholstery each have different coverage. We'll discuss warranty details before any job begins.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-[var(--muted)]">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden transition-all duration-200 hover:border-[var(--accent)]/20"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-medium">{faq.q}</span>
                <span
                  className={`text-[var(--accent)] text-xl shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
