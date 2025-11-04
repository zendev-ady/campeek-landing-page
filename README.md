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

### Identita značky „Moss Light“

Campeek komunikuje klidnou jistotu moderní platformy zakořeněné v přírodě. Tón vizuálu je přátelský, soustředěný a moderní – „klidná síla, která zve“. Brandová komunikace by měla působit přístupně, ale profesionálně a zdůrazňovat jistotu i úlevu od administrativy.

### Barevná paleta & kontrasty

- **Forest Green `#065f46`** – primární barva pro logotyp, CTA a zvýraznění důležitých prvků.
- **Dark Moss `#043828`** – tmavá báze pro hero, patičku nebo kontrastní bloky s mintovým textem.
- **Mint Accent `#34d399`** – energický akcent pro hover efekty, ikonky a zvýrazněné odrážky.
- **Moss Light `#e6f9ef`** + jemné světlejší tóny (`#d1fae5`, `#a7f3d0`) – klidné pozadí sekcí, karty a zvýraznění prostoru.

Paleta kombinuje svěžest a důvěru; kontrasty vždy budujeme Forest Green ↔ Moss Light nebo Dark Moss ↔ Mint Accent, aby kompozice zůstaly čitelné.

### Typografie

- **Primární font:** Outfit
- **Doporučené řezy:** 700 pro hero a CTA, 500 pro podnadpisy, 400 pro běžný text.
- Používejte zápis „campeek“ v lowercase, aby značka působila dostupněji.

### Logo & ikony

- Symbol stanu z knihovny Lucide (`Tent`) se používá společně se slovním logem „campeek“ v Outfit Bold.
- Varianta pro světlá pozadí: tmavozelený symbol a text (`#065f46`).
- Varianta pro tmavá pozadí: světlý text a ikona v mint (`#34d399`).
- Zajistěte clear space min. výšku písmene „c“ kolem loga; logo nedeformujte ani neměňte barevné kombinace mimo uvedené varianty.

### UI principy a layout

- Střídejte světlé sekce (bílá/Moss Light) s tmavými bloky (Dark Moss) pro rytmus a jasnou hierarchii.
- Používejte velkorysé okraje (`24px+`) a zaoblení (`20px`) na kartách pro měkký, přátelský pocit.
- Ikony a kruhové akcenty podporují motiv inkluzivity a organického růstu (radial gradienty, jemné přechody).

### Tone of voice

- Přátelský a klidný „kamarádský průvodce“.
- Zdůrazňuje úsporu času, přehlednost a jistotu pro organizátory.
- Vyhýbá se příliš technickým formulacím; upřednostňuje empatické benefit-driven sdělení.

### Moodboard & inspirace

- Fotografie se záběry lesních cest, ranního světla a týmové spolupráce vedoucích táborů.
- Ilustrace/ikonky s přírodními motivy (stromy, mapa, batoh) ve flat stylu s jemnými stíny.
- Textury: lehké zrno nebo jemné papírové struktury pro offline/přírodní kontext.
