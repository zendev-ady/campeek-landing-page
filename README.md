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

- Paleta barev: Forest Green (#065f46), Dark Moss (#043828), Mint Accent (#34d399), Moss Light (#e6f9ef)
- Primární font: Outfit (řezy 400/500/700)
- Tone of voice: přátelský, klidný, zaměřený na úlevu od administrativy
