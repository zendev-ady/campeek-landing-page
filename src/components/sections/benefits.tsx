const benefits = [
  {
    title: "Skutečný vhled do potřeb trhu",
    description:
      "Campeek vzniká přímo z táborové praxe. Víme, co organizátory pálí, a proto jsme mysleli na platby, dokumentaci i komunikaci."
  },
  {
    title: "Česká legislativa a návyky",
    description:
      "Formuláře i procesy odpovídají lokálním požadavkům — GDPR, evidenci plateb i práci s pojišťovnami."
  },
  {
    title: "Rychlá implementace",
    description:
      "Připraveno pro menší i větší týmy. Vše zvládnete během jednoho odpoledne, bez nutnosti IT specialisty."
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white">
      <div className="container-section">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="section-heading">Proč organizátoři volí Campeek</h2>
            <p className="section-subheading">
              Kombinujeme moderní technologie se zkušenostmi z terénu. Pomáháme vedoucím vrátit se zpět k práci s dětmi místo
              administrativy.
            </p>
            <div className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-moss-light p-6">
                  <h3 className="text-lg font-semibold text-forest">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-moss/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl bg-moss p-8 text-white">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-mint">
                Jedinečná perspektiva
              </span>
              <p className="text-lg leading-relaxed text-white/80">
                "Jako vedoucí táborů jsem hledal řešení, které by skutečně respektovalo naše workflow. Proto vznikl Campeek.
                Potřebujeme nástroj, který nás podrží od prvního nápadu až po závěrečný report."
              </p>
              <p className="text-sm font-semibold text-mint">Matěj, zakladatel Campeek</p>
            </div>
            <div className="absolute -right-6 bottom-6 rounded-2xl bg-mint px-4 py-3 text-xs font-semibold text-moss shadow-glow">
              Zkušenosti z českých táborů
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
