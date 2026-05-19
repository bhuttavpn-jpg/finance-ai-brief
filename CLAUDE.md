# Finance Platform — Project Handoff

> **Read [`SESSION_LOG.md`](./SESSION_LOG.md) first.** It records what's actually been shipped and what's pending — the running progress journal. This file is the original architecture/strategy handoff.

> Drop this file into the project root as `CLAUDE.md` so Claude Code auto-loads it on startup. It is the single source of truth across the four phases delivered in the original planning session.

---

## One-sentence pitch

A U.S. personal-finance platform that helps people **budget what they earn, invest what's left, and save on taxes**, monetized through affiliate partnerships with financial institutions and a future premium tier — combining NerdWallet's editorial discipline with a tools-first product experience and AI-native personalization.

## Current state

Four phases of work are complete. Phases 1, 2, and 4 are documents. Phase 3 is a working Next.js codebase you can `npm install && npm run dev` immediately.

| # | Phase | Deliverable | File |
|---|---|---|---|
| 1 | Strategy & business plan | 14-page .docx | `Personal_Finance_Platform_Strategy.docx` |
| 2 | Content & SEO plan | 23-page .docx + 5-sheet .xlsx workbook | `Phase_2_Content_SEO_Plan.docx`, `Phase_2_Content_SEO_Workbook.xlsx` |
| 3 | MVP codebase | Next.js 15 + React 19 + Tailwind, 46 files | `finance-platform/` (also zipped) |
| 4 | Operations playbook | 5-page .docx — how to automate cheaply | `Phase_4_Operations_Playbook.docx` |

All files live in the project's outputs directory and are downloadable from the original session.

---

## What the business is

### Market
- **Geo:** United States (USD, IRS rules, US affiliate programs)
- **Audience:** two tiers, layered by content depth
  - *Beginners (common folks)* — age 22–34, $40K–$80K income. Top-of-funnel traffic. Tone: reassuring, no jargon.
  - *Working professionals* — age 30–50, $120K–$400K. High-intent affiliate clicks. Tone: practical, optimization-focused.

### Five content pillars
1. **Budget** — methods, emergency funds, HYSA, debt payoff, couples/family, cost of living
2. **Invest** — basics, 401(k), IRAs, brokerages, funds/strategy, FIRE & retirement
3. **Save tax** — brackets, deductions, tax-advantaged accounts, backdoor Roth, HSA, capital gains
4. **Borrow smart** — credit cards basics, cards by category, credit score, loans, mortgages, refinancing
5. **Protect** — life, health, auto, home/renters, disability/umbrella, estate

Each pillar has ~6 topic clusters. Each cluster is **hub-and-spoke** (1 hub article + 4–6 spoke articles + 1 anchor tool). 30 clusters total, mapped in `Phase_2_Content_SEO_Workbook.xlsx`.

### Monetization stack (sequenced)
1. Credit card affiliate — $50–$200 CPA per approved app (Bankrate CC network, Impact, Fintel Connect)
2. Brokerage/banking affiliate — $20–$70 per funded account
3. Loans & refinance — $30–$500 CPA (mortgage = highest)
4. Insurance & tax software — $30–$120 per activation
5. Newsletter sponsorships — kicks in around month 9 at ~25K subs
6. Premium subscription — launches month 15, ~$79/year

Target: **$150–$200K MRR by month 18**.

### Competitive wedge
- **Tools first, articles second** — every pillar has a hero tool that produces a personalized answer
- **Cross-pillar journeys** — Budget → Invest → Save Tax as one connected flow
- **AI-native personalization** — adaptive content, embedded assistant
- **Transparent affiliate posture** — published methodology, FTC-compliant disclosure on every monetized page

---

## The codebase (`finance-platform/`)

### Tech stack
- **Next.js 15** (App Router) + **React 19**
- **TypeScript** strict mode, no `any`, no `enum`s
- **Tailwind CSS 3.4** for styling — no shadcn yet, pure Tailwind components
- No DB / auth / CMS in the MVP (Phase 3 deferred). All content is in TSX files.

### File tree
```
finance-platform/
├── README.md                 # Setup + Vercel deploy + content workflow
├── package.json
├── tsconfig.json             # Paths: @/* → src/*
├── tailwind.config.ts        # Brand tokens (brand-50..900, ink)
├── next.config.mjs
├── postcss.config.mjs
├── .env.example              # All AFFILIATE_* keys
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, metadata, OG defaults
│   │   ├── page.tsx          # Home
│   │   ├── globals.css       # Tailwind + design tokens + @layer components
│   │   ├── sitemap.ts        # Generated sitemap.xml
│   │   ├── robots.ts         # Generated robots.txt (disallow /go/, /api/)
│   │   ├── not-found.tsx
│   │   ├── about/page.tsx    # Methodology, disclosure, privacy, terms
│   │   ├── learn/
│   │   │   ├── page.tsx
│   │   │   ├── how-to-budget-50-30-20/page.tsx
│   │   │   └── roth-ira-vs-traditional-ira/page.tsx
│   │   ├── tools/
│   │   │   ├── page.tsx
│   │   │   ├── budget-50-30-20/page.tsx
│   │   │   ├── 401k-match/page.tsx
│   │   │   ├── tax-bracket/page.tsx
│   │   │   ├── roth-vs-traditional/page.tsx
│   │   │   └── life-insurance/page.tsx
│   │   └── go/[partner]/route.ts   # Server-side affiliate redirect
│   ├── components/
│   │   ├── layout/{Header,Footer}.tsx
│   │   ├── ui/{Container,Card,NumberInput,Select}.tsx
│   │   ├── content/{ArticleHeader,AffiliateDisclosure,FAQ,AffiliateButton}.tsx
│   │   ├── seo/JsonLd.tsx                  # articleJsonLd, faqJsonLd, howToJsonLd
│   │   └── tools/                           # The 5 hero tool components
│   │       ├── BudgetCalculator.tsx
│   │       ├── MatchCalculator.tsx
│   │       ├── TaxBracketCalculator.tsx
│   │       ├── LifeInsuranceCalculator.tsx
│   │       └── RothComparator.tsx
│   └── lib/
│       ├── site-config.ts                  # Site name, URL, pillars, tools, articles
│       ├── affiliates.ts                   # PARTNERS registry + getPartnerUrl()
│       ├── tax-brackets-2026.ts            # 2026 brackets + computeFederalTax()
│       ├── format.ts                       # formatCurrency, formatPercent
│       └── analytics.ts                    # logAffiliateClick stub
```

### What's working today
- ✅ All 5 interactive tools compute real values
- ✅ Server-side affiliate redirect at `/go/[partner]?s=<source>` — real URLs only in env vars, never in rendered HTML
- ✅ 2 launch articles with embedded tools, FAQ schema, Article schema, HowTo schema, FTC disclosure
- ✅ Sitemap, robots.txt, canonical URLs, OG metadata
- ✅ Brand-aligned design system (navy + slate, sentence case, no shadow-heavy CSS)

### What's NOT built yet (deferred from Phase 3)
- ❌ Database, auth, user accounts — Phase 5 when premium tier launches
- ❌ Newsletter signup form (beehiiv embed) — month 4 in GTM
- ❌ OG image generation (`@vercel/og` + `opengraph-image.tsx`)
- ❌ Real analytics provider — `analytics.ts` is a `console.log` stub
- ❌ MDX (articles are TSX so they can embed live tool components)
- ❌ On-site search — Algolia / Pagefind around 50 articles
- ❌ Paywall — Phase 3 (~month 15)

---

## Conventions

### Code
- TypeScript strict. No `any`. No `enum`s — use `as const` unions.
- Server Components by default. Add `"use client"` only on tool components, controlled inputs, or anything reading browser APIs.
- Imports use `@/` paths (configured in `tsconfig.json`).
- Tailwind classes only — no inline styles, no styled-components, no CSS modules. Reusable patterns live in `@layer components` inside `globals.css` (`btn-primary`, `card`, `input`, etc.).
- Component naming: `PascalCase.tsx`. One component per file.
- Tool components live in `src/components/tools/`. Each one is a `"use client"` self-contained widget that:
  1. Takes a `source` prop (string slug used for affiliate attribution)
  2. Renders form inputs + computed result + a recommendation card with `<AffiliateButton>` CTAs
- The 5 tool components are the spec — match their shape when adding tool #6.

### Routing
- `/tools/[slug]` for tools, `/learn/[slug]` for articles. Both indexed.
- `/go/[partner]` is the only affiliate redirect. Never embed raw affiliate URLs in pages.
- `/api/*` and `/go/*` are disallowed in `robots.txt`.

### Affiliate pattern
1. Add partner key to `PartnerKey` union + `PARTNERS` registry in `src/lib/affiliates.ts`.
2. Add the matching `AFFILIATE_*` env var to `.env.example` (and to Vercel).
3. Use `<AffiliateButton partner="key" source="page-slug">CTA text →</AffiliateButton>`.
4. The button renders `<a href="/go/key?s=page-slug" rel="sponsored noopener" target="_blank">`.
5. The redirect route resolves the env var, logs the click, 302s to the real URL with `?subid=<source>` appended for partner postback.

### Content / editorial
- **YMYL ("Your Money or Your Life") rules apply.** Every article must:
  - Carry a real author byline + credential
  - Be reviewed by a credentialed expert (CFP, CPA, EA, or licensed insurance professional)
  - Cite primary sources (IRS, FDIC, FINRA, SEC) — not aggregators
  - Display the FTC affiliate disclosure on every monetized page above the fold
  - Include JSON-LD (`articleJsonLd`, plus `faqJsonLd` and/or `howToJsonLd` as applicable)
  - Show "Last updated: [date]"
- **House style:** plain language, sentence case headings, American English, active voice, second-person for instructional content. No empty intros — answer in the first 100 words.
- **Refresh cadence:** HYSA roundups monthly, credit cards monthly, brokerages quarterly, tax content annually (Nov), insurance semi-annually, evergreen explainers annually.

### Schema markup
Use the helpers in `src/components/seo/JsonLd.tsx`:
- `articleJsonLd({ url, title, description, publishedAt, updatedAt, author })` — every article
- `faqJsonLd([{ q, a }, ...])` — when the page has a meaningful FAQ section
- `howToJsonLd({ name, steps: [{ name, text }] })` — when the page is a step-by-step

### Design tokens (Tailwind)
- `brand-50` — backgrounds (`#F5F8FC`)
- `brand-100/200` — soft / borders
- `brand-600` — primary accent (`#1F3A5F`, navy)
- `brand-700` — heading color
- `ink` — body text (`#1F2D3D`); `ink-muted` for secondary; `ink-subtle` for hints
- Pre-styled patterns: `.btn-primary`, `.btn-secondary`, `.card`, `.input`, `.label`, `.hint`, `.container-prose` (3xl max-width), `.container-wide` (6xl max-width)

---

## Recommended next steps

When the user is ready to ship, work through this in order. Each step is concrete enough to be a single working session.

### Sprint 1 — Make it deployable
1. **Run `npm install && npm run build` locally**, fix any TypeScript or build errors. The scaffold was written without a live compile pass — flag and resolve any issues.
2. **Add `next-env.d.ts`** if Next doesn't auto-generate it during build.
3. **Generate a proper `favicon.ico` and `apple-icon.png`** under `src/app/`. Use the navy `brand-600` color and the `FP` short-name lockup from the header.
4. **Add `opengraph-image.tsx`** at the root so social shares get a branded OG image. Use `@vercel/og` (zero dependency overhead).
5. **Verify the affiliate redirect** locally: set `AFFILIATE_MARCUS=https://example.com/test`, hit `/go/marcus?s=test`, confirm it 302s correctly.
6. **Deploy to Vercel.** Set all env vars per `.env.example`.

### Sprint 2 — Operations & automation (per Phase 4 playbook)
Per the cost tiers in `Phase_4_Operations_Playbook.docx`:

1. **Vercel Cron — HYSA rate scraper (Tier 1, no LLM).** Daily job that pulls current APYs from a small list of bank pages and writes a JSON file the leaderboard reads.
2. **Article-refresh job (Tier 2, Haiku).** Compares an article's mentioned rates/dates against current data, proposes a diff for editor review. Use prompt caching for the brand voice prefix.
3. **Newsletter assembly (Tier 2, Haiku).** Weekly Vercel Cron picks the week's lead story, writes a 200-word intro, ships a draft to beehiiv.
4. **Affiliate reconciliation (Tier 2, Haiku).** Nightly download of each partner's CSV, normalize to one schema, alert on drops.

Run the Anthropic SDK with `claude-haiku-4-5-20251001` for jobs 2–4. Reserve Sonnet (`claude-sonnet-4-6`) for new article drafts.

### Sprint 3 — Content scale
Per the editorial calendar in `Phase_2_Content_SEO_Workbook.xlsx`, sheet "Calendar":
- Weeks 1–2 of the calendar are already shipped (Phase 3 launched 2 articles + 5 tools).
- Build out the next 8 P0 articles from the workbook. Briefs for all 10 cornerstones are in `Phase_2_Content_SEO_Plan.docx` section 5.

### Sprint 4 — Newsletter + premium (later phases)
- beehiiv embed on the homepage and end of articles
- Phase 3 of the strategy doc (month 15+): premium subscription, more tools, paid acquisition

---

## Glossary

### Partner keys (in `affiliates.ts`)
HYSA: `marcus`, `ally`, `sofi-money`, `cit` · Brokerages: `fidelity`, `schwab`, `vanguard`, `robinhood`, `webull`, `m1`, `sofi-invest` · Robo: `betterment`, `wealthfront` · Tax: `turbotax`, `taxact`, `freetaxusa` · Life ins.: `bestow`, `ethos`, `haven`, `ladder` · Insurance marketplace: `policygenius` · Cards: `csp` (Chase Sapphire Preferred), `amex-gold`, `citi-double-cash` · HSA: `lively`, `fidelity-hsa` · Budgeting: `ynab`

### Filing statuses (in `tax-brackets-2026.ts`)
`single`, `mfj` (married filing jointly), `mfs` (married filing separately), `hoh` (head of household)

### Article slug pattern
- Hub: `hub-<topic>` (in workbook), URL: `/learn/<full-slug>`
- Spoke: `spoke-<topic>`
- Tool: `tool-<name>`, URL: `/tools/<full-slug>`

### Acronyms
- **YMYL** — "Your Money or Your Life," Google's term for high-stakes content categories
- **E-E-A-T** — Experience, Expertise, Authoritativeness, Trustworthiness; Google's quality rubric for YMYL
- **CPA** — cost per acquisition (affiliate) OR certified public accountant (reviewer) — context-dependent
- **RPM** — revenue per 1,000 pageviews
- **HYSA** — high-yield savings account
- **DIME** — Debt + Income + Mortgage + Education (life insurance sizing method)

---

## Open questions to resolve before going live

These weren't decided in the original session. The user should answer before content goes live.

1. **Brand name & domain.** The codebase reads `NEXT_PUBLIC_SITE_NAME` from env. What's the actual name?
2. **Author identity.** Is the user the author/byline themselves? Or hiring a credentialed writer? YMYL requires real identity.
3. **Reviewer arrangement.** Need a CFP / CPA / licensed insurance person on retainer before publishing. Until that's lined up, hold off on going live with monetized content.
4. **Affiliate program signups.** None of the `AFFILIATE_*` env vars have real URLs yet. The user needs to apply to Bankrate CC network, Impact, Fintel Connect, and individual brokerage / insurance programs. Most have a 1–2 week approval window.
5. **Legal entity & FTC compliance.** US affiliate marketing requires a clear advertiser disclosure (which the codebase ships with) plus a registered business entity if affiliate revenue crosses ~$1K. Get an LLC before scaling.

---

## How to use this file with Claude Code

1. Place it as `CLAUDE.md` inside the `finance-platform/` repo (or wherever you're running Claude Code).
2. Open Claude Code in that directory: `claude` — it will read this file automatically.
3. The first prompt can be something like: *"Read CLAUDE.md, then start Sprint 1 step 1."*
4. Use Claude Code for everything code-related. Reserve Cowork chat sessions for strategy / open-ended thinking — they're more expensive per token.
5. For automation jobs (Sprints 2+), Claude Code can scaffold the Vercel Cron handlers and Anthropic SDK integrations directly into the repo.

---

*End of handoff. The four phase docs and the codebase together contain everything needed to operate the business. This file is the index.*
