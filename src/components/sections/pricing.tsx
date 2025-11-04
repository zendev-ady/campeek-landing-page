const pricingTiers = [
  {
    name: "Start",
    price: "1 290 Kč",
    description: "Pro malé tábory a kroužky do 100 přihlášek ročně.",
    features: [
      "Neomezené akce a termíny",
      "Online přihlášky a platby",
      "Základní reporty",
      "E-mailové šablony"
    ]
  },
  {
    name: "Pro",
    price: "2 490 Kč",
    description: "Nejoblíbenější varianta pro profesionální organizátory.",
    features: [
      "Vše ze Start",
      "Automatické faktury",
      "Exporty pro účetní",
      "SMS upozornění",
      "Prioritní podpora"
    ],
    highlighted: true
  },
  {
    name: "Individuál",
    price: "Na míru",
    description: "Pro velké organizace, města a sítě kroužků.",
    features: [
      "Vlastní onboarding",
      "API napojení",
      "Školení týmu",
      "Dedikovaný account manager"
    ]
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-moss-light">
      <div className="container-section">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Jednoduché a férové ceny</h2>
          <p className="section-subheading text-moss/80">
            Investice, která se vrátí během prvního turnusu. Žádné skryté poplatky — jen přehledná správa táborů.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex h-full flex-col rounded-3xl border bg-white p-8 text-left shadow-sm transition ${
                tier.highlighted ? "border-mint shadow-glow" : "border-moss-light"
              }`}
            >
              {tier.highlighted ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-mint px-4 py-1 text-xs font-semibold text-moss">
                  Nejčastější volba
                </span>
              ) : null}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-forest">{tier.name}</h3>
                <p className="text-3xl font-bold text-moss">{tier.price}</p>
                <p className="text-sm text-moss/70">{tier.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-moss/80">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-moss-light text-xs font-semibold text-forest">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-white transition hover:bg-mint hover:text-moss">
                Domluvit konzultaci
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
