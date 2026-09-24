# Upcoming Wave

![AI could be the best thing we ever built — or the worst.](public/og/upcoming-wave-og-en.jpg)

**[upcomingwave.org](https://upcomingwave.org)** · [Polski](https://upcomingwave.org/pl/)

A short, image-driven explainer of what AI could do to work, money and power, what goes right if we set good rules, and why the people building it are asking to be regulated. It's written for people who don't follow AI.

- **Balanced, not doom:** every risk chapter ends with "If we get it right".
- **Sourced:** every number and quote links to its source. The [Sources & method](https://upcomingwave.org/sources/) page lists all of them.
- **Short by default:** a "Short / Full version" switch; each chapter expands on demand.
- **Independent and non-commercial:** no ads, no sign-up. Analytics load only after consent.

> Inspired by *The Coming Wave* by Mustafa Suleyman and Michael Bhaskar (2023). Not affiliated with the authors or the publisher.

## The page

1. **Hero:** the same wave in two futures, with a before/after slider.
2. **Voices:** Hinton, Hassabis, Gates, Altman, Amodei, the CAIS statement and more.
3. **Four chapters:** Work · Money & the state · Speed & control · Who decides. Each chapter pairs a risk with its upside.
4. **Rules**, then **What you can do**.

English is the default (`/`); Polish lives at `/pl/`. Polish-language browsers are redirected on their first visit, and an explicit choice is remembered.

## Tech

- [Next.js 15](https://nextjs.org) App Router with **static export** (`output: 'export'`). The build is plain HTML, CSS and JS in `out/` and needs no server.
- React 19, TypeScript, plain CSS (no UI framework), `zod` for env validation.
- Separate root layouts per language: `src/app/(en)` and `src/app/(pl)/pl`. Each has its own `lang`, metadata, hreflang and JSON-LD.
- Photos: WebP in two widths plus `srcset`. They were generated for this project with OpenAI image models.

## Getting started

```bash
npm install
npm run dev            # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server, including the unpublished archive at `/archive/` |
| `npm run build` | Clean static export to `out/` |
| `npm run build:verify` | Same build into `.next-verify/`, safe to run next to a running `dev` |
| `npm start` | Serve `out/` locally |
| `npm run lint` | ESLint (typescript-eslint, import order, feature boundaries) |

### Environment

Copy `.env.example` to `.env.local` if you need to override the defaults.

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://upcomingwave.org` | Canonical URLs, sitemap, Open Graph |
| `NEXT_PUBLIC_GA_ID` | — | GA4 measurement ID. If empty, analytics are off. |

## Project structure

```
src/
  app/                    routes, layouts, metadata, sitemap, robots, 404
    (en)/  (pl)/pl/       one root layout per language
  features/
    upcomingWave/
      components/         one folder per component (+ .types.ts)
      content/en|pl/      all copy, facts and sources, per language
      content/archive/    frozen pre-restructure copy (dev-only /archive/)
      hooks/ context/ utils/ lib/ types/
    analytics/            GA4, loaded only after consent
  routes/paths.ts         every URL in one place
  styles/                 plain CSS, one file per area
public/
  images/v2/              photos (WebP, 1600 + 640 px)
  og/                     link-preview cards (EN, PL)
  _headers                caching + security headers (Cloudflare Pages / Netlify)
scripts/og-cards.py       regenerates the link-preview cards
```

### Editing content

All text lives in `src/features/upcomingWave/content/{en,pl}/`:

- `hero.ts`, `voices.ts`, `scenes.ts` (the chapters and their "If we get it right" strips), `closing.ts`, `ui.ts` (labels);
- `story.ts` sets the order of sections, `chain.ts` the progress bar in the header;
- every fact carries a `source: { label, url? }`. The small source captions and the Sources page are generated from these fields. A source without a URL, such as the book, links to its entry on the Sources page.

**Adding a language:** copy `content/en/` to `content/<lang>/`, translate it, register it in `content/locales.ts`, and add a root layout under `src/app/(<lang>)/<lang>/`, modelled on `(pl)/pl`.

## Deploy

The site is a static folder, so any static host works. Production runs on **Cloudflare Workers** (static assets only, configured in `wrangler.jsonc`). Workers serve `out/`, apply `public/_headers`, and use `404.html` for unknown paths.

1. Cloudflare → Compute → Workers & Pages → Create → import the GitHub repo.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. Production values (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`) come from `.env.production`, and the Node version from `.node-version`, so no dashboard variables are needed.
4. Worker → Settings → Domains & Routes → add `upcomingwave.org` and `www.upcomingwave.org`.
5. Add the domain in Google Search Console and submit `/sitemap.xml`. Import it into Bing Webmaster Tools.

Every push to `main` redeploys automatically.

## Contributing

Fixes, better sources, translations and design improvements are welcome. Fork the repo, make your change, and open a pull request against `main`. Before you do:

- run `npm run lint` and `npm run build:verify`;
- make sure every new fact has a `source` with a link;
- keep code, comments and commit messages in English. Only `content/<locale>/` holds translated copy.

## Corrections

Spotted a wrong number, a misquote or a broken source? Open an issue or write to [@blyzbyte](https://x.com/blyzbyte) on X. Corrections are fixed quickly and the Sources page is updated.

## License

Source-available, **not** open source: see [LICENSE](LICENSE). You may fork and modify the code to contribute back through pull requests. You may not deploy, host or redistribute the site or modified versions of it without permission.

## Author

Made by [@blyzbyte](https://x.com/blyzbyte).
