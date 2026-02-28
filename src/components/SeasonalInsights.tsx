export default function SeasonalInsights() {
  const insights = [
    {
      issue: "Gelcoat Oxidation & Fading",
      description:
        "UV exposure and salt air break down gelcoat faster than most owners expect. What starts as dullness becomes chalking, then cracking.",
      tip: "Annual compound and wax protects your finish. Ceramic coating lasts 2-3x longer.",
    },
    {
      issue: "Engine Corrosion from Salt",
      description:
        "Salt water is aggressive. Internal cooling passages, lower units, and electrical connections corrode quietly until something fails.",
      tip: "Flush after every use. Annual inspection catches problems before they strand you.",
    },
    {
      issue: "Canvas & Upholstery Sun Damage",
      description:
        "Mid-Atlantic summers destroy vinyl and canvas. Stitching rots, vinyl cracks, and zippers corrode — usually all at once.",
      tip: "UV protectant spray doubles the life of your canvas. Replace before mold sets in.",
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-4">
            What We See Every Season
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Issues We Fix
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            After 25 years in marine service, these are the problems we see most
            often — and how to get ahead of them.
          </p>
        </div>

        <div className="space-y-6">
          {insights.map((insight) => (
            <div
              key={insight.issue}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 hover:border-[var(--accent)]/20 transition-all duration-300"
            >
              <div className="md:flex md:items-start md:gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">
                    {insight.issue}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                    {insight.description}
                  </p>
                </div>
                <div className="md:w-80 shrink-0 bg-[var(--accent)]/5 border border-[var(--accent)]/10 rounded-lg p-4">
                  <p className="text-sm">
                    <span className="text-[var(--accent)] font-medium">
                      Pro tip:{" "}
                    </span>
                    {insight.tip}
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
