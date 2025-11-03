const steps = [
  {
    title: "1. Nastavíte akci",
    description: "Zadejte kapacitu, cenu, doplňkové služby a Campeek připraví kompletní přihlášku."
  },
  {
    title: "2. Sdílíte formulář",
    description: "Rodiče se registrují online a systém jim automaticky odešle potvrzení i platební instrukce."
  },
  {
    title: "3. Sledujete platby",
    description: "Přehled plateb, faktur a dluhů na jednom místě. Účetní má exporty vždy po ruce."
  },
  {
    title: "4. Komunikujete bez stresu",
    description: "Šablony pro e-maily a SMS vám ušetří čas před táborem, během něj i po něm."
  }
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="bg-moss-light">
      <div className="container-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Jak Campeek funguje</h2>
          <p className="section-subheading text-moss/80">
            Vytvořeno organizátory táborů pro organizátory. Celý proces zvládnete bez složitého zaškolení.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl bg-white p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-forest">{step.title}</h3>
              <p className="mt-3 text-sm text-moss/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
