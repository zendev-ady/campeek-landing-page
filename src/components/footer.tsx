import Link from "next/link";

import { Logo } from "@/components/logo";

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
          <div className="space-y-3">
            <Logo tone="dark" />
            <p className="max-w-sm text-sm text-white/70">
              Klid a pořádek do organizace dětských akcí.
            </p>
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
