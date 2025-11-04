import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-moss text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.22),_transparent_55%)]" />
      <div className="container-section relative z-10 flex flex-col items-start gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-mint">
            Přehledně. Chytře. Pro všechny organizátory táborů.
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Moderní platforma pro správu dětských táborů a kroužků.
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Campeek propojuje svět táborů s moderní technologií. Vytvářejte termíny, spravujte přihlášky i platby a buďte v
            kontaktu s rodiči — vše z jednoho intuitivního místa.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="shadow-glow">
              Vyžádat demo
            </Button>
            <Link href="#features" className="text-sm font-medium text-mint transition hover:text-white">
              Prozkoumat funkce →
            </Link>
          </div>
          <div className="grid w-full gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-2 text-left sm:grid-cols-3">
              <StatItem value="12+" label="organizátorů v pilotu" />
              <StatItem value="2×" label="rychlejší zpracování přihlášek" />
              <StatItem value="90 %" label="méně papírování pro vedoucí" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="rounded-2xl bg-white/90 p-6 text-moss shadow-lg">
              <p className="text-sm font-semibold text-forest">Organizátor vidí:</p>
              <ul className="mt-4 space-y-4 text-sm text-moss/80">
                <li>
                  <strong>Přihlášky v reálném čase</strong> se stavem plateb
                </li>
                <li>
                  <strong>Automatické faktury</strong> s možností online úhrady
                </li>
                <li>
                  <strong>Komunikační šablony</strong> pro rodiče a vedoucí
                </li>
              </ul>
              <div className="mt-6 rounded-xl bg-moss-light px-4 py-3 text-sm text-forest">
                „Campeek nám konečně uvolnil ruce — místo excelů řešíme program pro děti.“ — Jana, vedoucí táborů
              </div>
            </div>
            <div className="absolute -left-4 -top-6 rounded-full bg-mint px-4 py-2 text-xs font-semibold text-moss shadow-glow">
              Beta přístup 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-mint">{value}</span>
      <span className="text-sm text-white/70">{label}</span>
    </div>
  );
}
