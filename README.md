# BeastTheNinja Portfolio

Moderne portfolio bygget med Next.js App Router, TypeScript og Tailwind CSS.

## Kort om projektet

Dette er min personlige portfolio, hvor jeg præsenterer:

- hvem jeg er som udvikler
- udvalgte projekter
- kontaktmuligheder

Målet med projektet er at kombinere et clean, moderne UI med en enkel og skalerbar kodebase baseret på genbrugelige komponenter.

## Højdepunkter

- Genbrugelig komponentstruktur (`Header`, `Nav`, `Section`, `PageIntro`, `ProjectCard`, `Footer`)
- Datadrevet indhold via `site-data.ts`
- Tydelig sideopdeling med App Router route groups
- Fokus på vedligeholdbar frontend-arkitektur og konsistent design

## Tech stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Sider

- `/` Forside med intro + featured projekter
- `/projects` Oversigt over projekter
- `/about` Profil, skills og personlig introduktion
- `/contact` Kontakt-CTA og sociale links

## Projektstruktur (kort)

- `src/app/(root)/` Offentlige portfolio-sider
- `src/app/(root)/components/` Genbrugelige UI-komponenter
- `src/app/(root)/data/site-data.ts` Central data (projekter + kontaktlinks)
- `src/app/layout.tsx` Global metadata og root layout

## Hvad jeg lærte i projektet

- Strukturere en portfolio med Next.js App Router og route groups
- Bygge reusable UI-komponenter med tydelige props
- Flytte indhold til central datafil for bedre vedligeholdelse
- Arbejde med aktiv navigation og konsistent layout på tværs af sider
- Forbedre tekst og præsentation, så siden kommunikerer mere professionelt

## Kom i gang

Installer dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Åbn derefter `http://localhost:3000` i browseren.

## Scripts

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Kør ESLint
```

## Deployment

Anbefalet deployment: Vercel.

1. Push projektet til GitHub
2. Importér repo i Vercel
3. Deploy

---

Lavet af Sebastian Larsen.
