"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a Free Estimate
            </h2>
            <p className="text-[var(--muted)] mb-8 leading-relaxed">
              Tell us about your boat and what you need. No pressure, no
              obligations — just an honest assessment and a clear quote.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Phone</p>
                <p className="text-lg font-medium">(443) 664-2733</p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Email</p>
                <p className="text-lg font-medium">
                  jerry@eastcoastoffshore.net
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Location</p>
                <p className="text-lg font-medium">
                  12739 Sunset Avenue
                  <br />
                  Ocean City, MD 21842
                </p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Hours</p>
                <p className="text-lg font-medium">
                  Mon–Sat: 9:00 AM – 5:00 PM
                  <br />
                  <span className="text-[var(--muted)]">Sunday: Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">
                  Estimate Requested
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  We&apos;ll review your info and get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)]/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)]/40 transition-colors"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--muted)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)]/40 transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-2">
                    Service Needed
                  </label>
                  <select className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]/40 transition-colors">
                    <option value="">Select a service</option>
                    <option value="paint">Custom Painting</option>
                    <option value="graphics">Custom Graphics</option>
                    <option value="engine">Engine Repair / Rebuild</option>
                    <option value="fiberglass">Fiberglass Repair</option>
                    <option value="detail">Detailing</option>
                    <option value="upholstery">Upholstery & Canvas</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-2">
                    Tell Us About Your Boat & What You Need
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-[var(--background)] border border-[var(--card-border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)]/40 transition-colors resize-none"
                    placeholder="Boat type, size, year, and what work you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[var(--accent)]/20 cursor-pointer"
                >
                  Request Free Estimate
                </button>
                <p className="text-xs text-[var(--muted)] text-center">
                  No commitment required. We&apos;ll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
