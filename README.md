# Campeek Landing Page

Moderní landing page pro platformu Campeek zaměřenou na správu dětských táborů, kroužků a outdoor akcí. Projekt používá stack plánovaný pro produkční aplikaci: Next.js (App Router), Tailwind CSS a komponenty inspirované shadcn/ui.

## Tech stack

- [Next.js 14](https://nextjs.org/) (TypeScript, App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) – ručně integrované základní komponenty (Button, layout helpers)
- [lucide-react](https://lucide.dev/) pro ikonografii

## Vývoj

```bash
npm install
npm run dev
```

Aplikace se spustí na [http://localhost:3000](http://localhost:3000).

## Build a lint

```bash
npm run build
npm run lint
```

## Struktura projektu

```
src/
  app/
    layout.tsx        # Root layout a metadata
    page.tsx          # Landing page složená ze sekcí
    globals.css       # Tailwind utility classes a základní styly
  components/
    sections/         # Jednotlivé sekce landing page
    ui/               # Reusable UI prvky (Button)
  lib/
    utils.ts          # pomocné utility (cn)
```

## Brand guidelines

Landing page reflektuje připravenou identitu značky:

- **Paleta barev:** Forest Green (#065f46), Dark Moss (#043828), Mint Accent (#34d399), Moss Light (#e6f9ef)
- **Primární font:** Outfit (řezy 400/500/700)
- **Tone of voice:** přátelský, klidný, zaměřený na úlevu od administrativy

### Moss Light – vizuální identita

- **Personality & Essence:** přirozená, organizovaná a moderní. Kombinuje technologickou vyspělost se skutečnou zkušeností z terénu a vzbuzuje důvěru díky klidné, ale kompetentní prezentaci.
- **Color psychology:** světlé zelené tóny (např. #d1fae5, #a7f3d0) evokují svěžest a regeneraci, zatímco hlubší odstíny (#065f46, #064e3b) přinášejí pocit stability a profesionální jistoty.
- **Typografie & Layout:** výrazné nadpisy s negativním trackingem a velkorysým řádkováním vytvářejí prémiový, přátelský tón. Vyvážený grid a konzistentní spacing podporují přehlednost a pořádek.
- **Shape language:** zaoblené rohy, kruhové akcenty a jemné radiální gradienty dodávají dojem organického toku, bezpečí a postupného růstu.
- **Brand voice:** „klidný průvodce“ — komunikace je věcná, lidská a inspiruje důvěru bez zbytečného tlaku.
