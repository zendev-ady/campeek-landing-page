import Link from "next/link";

const footerLinks = [
  { label: "O projektu", href: "#benefits" },
  { label: "Funkce", href: "#features" },
  { label: "Ceník", href: "#pricing" },
  { label: "Kontakt", href: "mailto:ahoj@campeek.cz" }
];

export function Footer() {
  return (
    <footer className="bg-moss text-white">
      <div className="container-section">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint text-lg font-bold text-moss">
              ⛺
            </span>
            <div>
              <p className="text-lg font-semibold text-mint">Campeek</p>
              <p className="text-sm text-white/70">Klid a pořádek do organizace dětských akcí.</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/70">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Campeek. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
