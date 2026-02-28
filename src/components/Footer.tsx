export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold tracking-tight">
              East Coast{" "}
              <span className="text-[var(--accent)]">Offshore</span>
            </p>
            <p className="text-sm text-[var(--muted)] mt-1">
              Performance Marine Services — Ocean City, MD
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
            <a href="#services" className="hover:text-[var(--foreground)] transition-colors">
              Services
            </a>
            <a href="#trust" className="hover:text-[var(--foreground)] transition-colors">
              Why Us
            </a>
            <a href="#faq" className="hover:text-[var(--foreground)] transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-[var(--foreground)] transition-colors">
              Contact
            </a>
          </div>

          <div className="text-sm text-[var(--muted)]">
            <a href="tel:4436642733" className="hover:text-[var(--accent)] transition-colors">
              (443) 664-2733
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--card-border)] text-center">
          <p className="text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} East Coast Offshore Performance
            Marine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
