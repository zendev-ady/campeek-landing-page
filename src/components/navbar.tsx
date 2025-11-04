import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Funkce", href: "#features" },
  { name: "Jak to funguje", href: "#workflow" },
  { name: "Proč Campeek", href: "#benefits" },
  { name: "Ceník", href: "#pricing" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Logo href="/" />
        <nav className="hidden items-center gap-6 text-sm font-medium text-moss/80 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-forest">
              {item.name}
            </Link>
          ))}
        </nav>
        <Button className="hidden md:inline-flex" size="sm">
          Získat demo
        </Button>
      </div>
    </header>
  );
}
