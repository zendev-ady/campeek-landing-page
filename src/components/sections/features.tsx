import { CheckCircle2, CreditCard, FileSpreadsheet, Inbox, LayoutDashboard, Users } from "lucide-react";

const features = [
  {
    title: "Registrace bez papírování",
    description: "Online formulář pro rodiče s automatickým potvrzením a napojením na platby.",
    icon: Inbox
  },
  {
    title: "Plná kontrola nad termíny",
    description: "Jednoduše nastavte kapacitu, ceny, slevy i doplňkové služby v rámci jedné platformy.",
    icon: LayoutDashboard
  },
  {
    title: "Správa plateb a faktur",
    description: "Automatická vystavení faktur, párování plateb a exporty pro účetní systém.",
    icon: CreditCard
  },
  {
    title: "Databáze účastníků",
    description: "Veškeré údaje na jednom místě — alergie, kontakty, dokumenty i historie akcí.",
    icon: Users
  },
  {
    title: "Reporty a exporty",
    description: "Přehledné tabulky a export do Excelu nebo PDF pro vedoucí, kuchaře i zdravotníky.",
    icon: FileSpreadsheet
  },
  {
    title: "Automatizace a šablony",
    description: "Předpřipravené e-maily a SMS usnadní komunikaci s rodiči před táborem i po něm.",
    icon: CheckCircle2
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white">
      <div className="container-section">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Vše, co potřebujete pro bezstarostné tábory</h2>
          <p className="section-subheading">
            Campeek kombinuje zkušenost táborových vedoucích s moderním softwarem. Ovládání zvládne každý a díky automatizaci
            ušetříte desítky hodin administrativy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-moss-light bg-white p-6 transition hover:-translate-y-1 hover:border-mint hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-light text-forest transition group-hover:bg-mint group-hover:text-moss">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-moss">{feature.title}</h3>
              <p className="mt-3 text-sm text-moss/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
