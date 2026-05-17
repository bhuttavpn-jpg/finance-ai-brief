# Finance Platform — MVP

A Next.js 15 personal finance site: 5 interactive calculators, 2 cornerstone articles, and a server-side affiliate redirect layer. Built as the Phase 3 deliverable of the strategy → content → build sequence.

## What's in here

```
finance-platform/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home
│   │   ├── about/page.tsx           # About, methodology, disclosures
│   │   ├── learn/                   # Article pages
│   │   ├── tools/                   # Tool pages
│   │   ├── go/[partner]/route.ts    # Affiliate redirect (server-side)
│   │   ├── sitemap.ts               # Generated sitemap.xml
│   │   ├── robots.ts                # Generated robots.txt
│   │   ├── not-found.tsx            # 404
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Tailwind + design tokens
│   ├── components/
│   │   ├── layout/                  # Header, Footer
│   │   ├── ui/                      # Container, Card, NumberInput, Select
│   │   ├── content/                 # ArticleHeader, AffiliateDisclosure, FAQ, AffiliateButton
│   │   ├── seo/JsonLd.tsx           # Article / FAQPage / HowTo helpers
│   │   └── tools/                   # The 5 hero tool components
│   └── lib/
│       ├── site-config.ts           # Site-wide config (name, URL, pillars, tools, articles)
│       ├── affiliates.ts            # Typed PARTNERS registry + URL resolver
│       ├── tax-brackets-2026.ts     # 2026 federal brackets + computeFederalTax()
│       ├── format.ts                # Currency / percent helpers
│       └── analytics.ts             # Click logger stub (swap for PostHog)
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── .env.example
```

## The five tools

| Tool                          | Pillar     | Route                                    |
| ----------------------------- | ---------- | ---------------------------------------- |
| 50/30/20 budget calculator    | Budget     | `/tools/budget-50-30-20`                 |
| 401(k) match calculator       | Invest     | `/tools/401k-match`                      |
| Marginal tax rate (2026)      | Save tax   | `/tools/tax-bracket`                     |
| Roth vs. Traditional IRA      | Invest     | `/tools/roth-vs-traditional`             |
| Life insurance need (DIME)    | Protect    | `/tools/life-insurance`                  |

Every tool is a `"use client"` React component that runs entirely in the browser, no backend, no API key. Each one ends with a recommendation card that routes through `/go/[partner]` for affiliate attribution.

## Affiliate redirect

`/go/[partner]?s=<source>` is the single redirect surface for every affiliate link on the site.

1. Validates `partner` against the typed `PARTNERS` registry in `src/lib/affiliates.ts`.
2. Resolves the real tracked URL from the env var named in the registry (e.g. `AFFILIATE_MARCUS`).
3. Logs the click server-side (currently `console.log`; swap for PostHog / your warehouse in `src/lib/analytics.ts`).
4. 302-redirects to the partner URL with `?subid=<source>` appended so the partner can echo it back in postback (sub-ID attribution).

Why this matters:
- Real affiliate URLs never appear in rendered HTML, so ad-blockers and link-rewriters cannot strip the tracking.
- Affiliate programs change URLs all the time. Only the env var changes — articles never need a rebuild.
- Click logs let you reconcile your dashboard against partner reports.

## Running it locally

```bash
# 1. Install
npm install

# 2. Copy env and set NEXT_PUBLIC_SITE_URL
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_SITE_URL and at least a couple of AFFILIATE_*
# URLs so you can test the redirect.

# 3. Dev server
npm run dev
# Open http://localhost:3000
```

## Deploying to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel detects Next.js automatically.
3. Add environment variables from `.env.example` in the Vercel project settings. At minimum:
   - `NEXT_PUBLIC_SITE_URL` — your production URL (e.g. `https://yourdomain.com`)
   - `NEXT_PUBLIC_SITE_NAME` — your brand
   - As many `AFFILIATE_*` URLs as you have ready. The redirect fails safe to the homepage if a key isn't configured.
4. Click Deploy. Subsequent commits to `main` auto-deploy.

DNS: in Vercel → Project → Domains, add your domain and follow the DNS instructions.

## Adding new content

### A new article

1. Add an entry to `siteConfig.articles` in `src/lib/site-config.ts`.
2. Create `src/app/learn/[your-slug]/page.tsx`. Use `learn/how-to-budget-50-30-20/page.tsx` as a template — it shows the ArticleHeader, AffiliateDisclosure, schema JSON-LD, embedded tool, FAQ pattern.
3. Run `npm run build` locally to sanity-check, then push.

### A new tool

1. Create `src/components/tools/MyTool.tsx` as a `"use client"` component.
2. Create `src/app/tools/[slug]/page.tsx` that imports and renders it.
3. Add to `siteConfig.tools`.

### A new affiliate partner

1. Add the env var to `.env.example` and to Vercel.
2. Add the entry to `PARTNERS` in `src/lib/affiliates.ts` (add the key to `PartnerKey` too).
3. Use `<AffiliateButton partner="your-key" source="some-page-slug">...</AffiliateButton>`.

## What's intentionally NOT in here

These were called out in the strategy doc as Phase 4+ work:

- **Database / auth / user accounts** — the MVP is fully static. Add Clerk + Supabase when you launch the premium tier.
- **Newsletter signup** — add beehiiv embed once the editorial cadence is live (month 4 in the GTM plan).
- **OG image generation** — add `@vercel/og` and an `opengraph-image.tsx` per page when the visual identity is locked in.
- **Real production analytics** — `analytics.ts` is a `console.log` stub. Drop in PostHog or your warehouse when you're ready.
- **MDX** — articles are TSX pages so they can embed live tool components directly. If your editors prefer Markdown, add `@next/mdx` later.
- **Search** — no on-site search yet. Add Algolia or Pagefind once you cross ~50 articles.
- **Auth / paywall** — Phase 3 (~month 15) deliverable per the strategy doc.

## Editorial workflow reminder

From the Phase 2 plan:

1. **Brief** (editor, 1–2 hr) — field-by-field from the brief template in the xlsx.
2. **Draft** (writer, 8–12 hr) — hits word count + outline.
3. **Edit** (editor, 2–3 hr) — line edit + fact check.
4. **Expert review** (CFP / CPA / EA, 1–2 hr) — credential-appropriate to the topic.
5. **Publish** (editor, 1 hr) — schema markup, internal links, FTC disclosure verified.
6. **Refresh** (editor, 1 hr per article) — by cadence column in the workbook.

## License

Proprietary — this is your codebase. Replace this section with your terms when you publish.
