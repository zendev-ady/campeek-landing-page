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

Landing page reflektuje identitu Campeek – moderní platformy propojující svět dětských táborů a technologií.

### Brand essence

- **Osobnost:** přirozená, klidná, spolehlivá a moderní.
- **Dojem:** organická sofistikovanost, pocit jistoty a přehlednosti.
- **Klíčová sdělení:** úleva od administrativy, profesionální partner, který rozumí organizátorům.

### Barevná paleta

| Název        | Hex      | Použití                                           |
| ------------ | -------- | ------------------------------------------------- |
| Forest Green | #065f46  | Primární CTA, titulky, zvýraznění                 |
| Dark Moss    | #043828  | Tmavé pozadí, hero sekce, patička                 |
| Moss Light   | #e6f9ef  | Světlé pozadí, boxy, kontrastní vrstvy            |
| Mint Accent  | #34d399  | Akcenty, ikonografie, hover efekty, glow stíny    |

Paleta kombinuje klid lesa s energií čerstvého vzduchu – působí svěže, stabilně a důvěryhodně.

### Typografie

- Primární font: **Outfit** (řezy 400 / 500 / 700).
- Styl: geometrický sans-serif – moderní, přehledný, přátelský.
- Použití: lowercase wordmark „campeek“, hero nadpisy (700), podnadpisy (500), copy (400).

### Logo a ikonografie

- Wordmark využívá lowercase „campeek“ s fontem Outfit a barvou Forest Green.
- Ikona: `Tent` z balíčku lucide-react, v primárním odstínu Forest Green.
- Vždy zachovat dostatečný clear space (min. výška písmene „c“). Neměnit barvy, nepřekrývat.

### Tone of voice

- Přátelský průvodce: klidný, lidský, praktický.
- Mluví o výhodách – „Přehledně. Chytře. Pro všechny organizátory táborů.“
- Vyhýbá se čistě technickému slovníku; důraz na úsporu času a jistotu.

### UI principy

- Střídání světlých sekcí (white / Moss Light) s tmavými highlighty (Dark Moss).
- CTA v barvě Forest Green s bílým textem, hover přechod do Mint Accent.
- Zaoblené prvky (20–24 px) a jemné glow stíny budují pocit bezpečí.
- Používat konzistentní mřížku a prostorné mezery pro pocit přehlednosti.
