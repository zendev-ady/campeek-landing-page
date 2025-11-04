import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-moss text-white">
      <div className="container-section relative z-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Připravte se na sezónu bez stresu</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/75">
          Přidejte se k organizátorům, kteří už si užívají klidnější plánování táborů. Domluvte si individuální ukázku a zjistěte,
          jak Campeek zapadne do vašeho týmu.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="shadow-glow">
            Rezervovat demo
          </Button>
          <span className="text-sm text-white/60">Beta přístup jaro 2025</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(52,211,153,0.18),_transparent_55%)]" />
    </section>
  );
}
