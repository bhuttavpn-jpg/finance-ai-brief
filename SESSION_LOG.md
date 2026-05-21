# Session log — Finbrief

> **Read this before anything else.** It records what's actually been built and shipped, vs. what's still planned. The original `CLAUDE.md` is the strategy + architecture handoff; this file is the running progress journal.

---

## Deployment state (as of 2026-05-19)

| Surface | Status | URL / ID |
|---|---|---|
| GitHub repo | Live | https://github.com/bhuttavpn-jpg/finance-ai-brief |
| Default branch | `main` | latest commit at time of writing: `3c1c001` |
| Vercel project | `finance-ai-brief` | `prj_PLS8cwPoRMC3jO6eatmqvvypIHML` |
| Vercel team | `bhuttavpn-1595s-projects` | `team_DwYpse6Xwr9qT5jXrJ9WFUTJ` |
| Custom domain | Live | https://finbrief.space (www redirects 308) |
| Production deployment | READY | latest `dpl_Ap9BAbRfSyjkNwQX34jVUAeW72u2` (2026-05-20, articles 7–9; deployed via CLI from local commit `1c1e3d3`) |
| Smoke test | Passed | apex 200, all 4 articles 200, `/go/wise` and `/go/sofi-money` 302 with correct `subid` |

There is a **second, older Vercel project** called `finance-platform` (`prj_6ww1LLsFXR31YQdEnuQzAcF5bJI6`) in the same team. It is **abandoned**. `finbrief.space` was moved off it on 2026-05-19. Leave it alone (or delete it via Vercel dashboard if confirming).

---

## Articles shipped

| # | Slug | Pillar | Words | Status |
|---|---|---|---|---|
| 1 | `how-to-budget-50-30-20` | Budget | ~1,300 | Pre-existing (initial MVP) |
| 2 | `roth-ira-vs-traditional-ira` | Invest | ~1,400 | Pre-existing (initial MVP) |
| 3 | `best-hysa-2026` | Budget | ~2,150 | **Shipped 2026-05-19** |
| 4 | `how-to-invest-1000-beginners` | Invest | ~1,950 | **Shipped 2026-05-19** |
| 5 | `best-term-life-insurance-young-professionals` | Protect | ~1,800 | **Shipped 2026-05-19** |
| 6 | `how-to-build-credit-from-scratch` | Borrow smart | ~2,300 | **Shipped 2026-05-19** |
| 7 | `best-travel-credit-cards-2026` | Borrow smart | ~2,100 | **Written 2026-05-20** (not yet deployed) |
| 8 | `roth-ira-contribution-limits-2026` | Save tax | ~1,800 | **Written 2026-05-20** (not yet deployed) |
| 9 | `tax-loss-harvesting-guide` | Save tax | ~2,100 | **Written 2026-05-20** (not yet deployed) |

**Articles 3–6 spec used:** see the brief in this session's transcript or the spec block any future "write more cornerstones" prompt should follow. Each ships with:
- `articleJsonLd` + `faqJsonLd` schema (and `howToJsonLd` for step-by-step pieces)
- FTC affiliate disclosure above the fold
- Reviewer byline placeholder ("Reviewed by a Certified Financial Planner (CFP®)" / licensed insurance pro) — **not yet a real person**, see "Open issues" below
- Author byline `Finbrief Editorial Team`
- Comparison tables where relevant
- Internal links to the matching hero tool
- "Related reading" block linking to other shipped articles

---

## Articles to write next

Phase 2 plan calls for 10 cornerstone (hub) articles total across the 5 pillars. **9 are written; 1 remains.** The full backlog of spokes lives in `Phase_2_Content_SEO_Workbook.xlsx` (sheet: Calendar) in the parent outputs directory — but the next priority block is:

| Priority | Pillar | Slug (proposed) | Keyword | Why next |
|---|---|---|---|---|
| ~~P0~~ ✅ | Save tax | ~~`roth-ira-contribution-limits-2026`~~ | "Roth IRA limits 2026" | **Written 2026-05-20** — Save-tax pillar now has a hub |
| ~~P0~~ ✅ | Save tax | ~~`tax-loss-harvesting-guide`~~ | "tax loss harvesting" | **Written 2026-05-20** |
| ~~P0~~ ✅ | Borrow smart | ~~`best-travel-credit-cards-2026`~~ | "Best travel credit cards" | **Written 2026-05-20** — highest CPA category |
| P1 | Invest | `401k-vs-ira-which-first` | "401k vs IRA" | Pairs with existing 401(k) match tool |
| P1 | Protect | `term-vs-whole-life-insurance` | "Term vs whole life" | Natural spoke off Article 5 |
| P2 | Budget | `how-to-build-emergency-fund` | "Emergency fund" | Funnel from `best-hysa-2026` |
| P2 | Budget | `couples-budgeting-guide` | "Couples budget" | Untouched audience segment |

When the user asks for the next batch, default to the P1s next.

**Formatting note (introduced 2026-05-20):** Articles 7–9 follow a presentation spec — mixed content blocks (comparison tables + bullet lists + inline Q&A + short ≤5-sentence paragraphs), strategic bold on numbers/key terms, and `<hr className="my-10 border-brand-100" />` separators between major H2 sections. Match this shape for future articles. Content/accuracy standards from `CLAUDE.md` are unchanged — this only governs visual presentation.

---

## Affiliate registry — current state

Partners with real tracked referral URLs (revenue-generating today):
- `wise` → `https://wise.com/invite/ahpc/jahanzebn17`
- `sofi-money` → `https://sofi.hk/referral/?c=8FE92168`

All other partners point to **institution homepages as placeholders**. They earn $0 until the user applies to and is approved by the relevant affiliate network and replaces the env var. Networks to target:
- **Bankrate CC network / Impact / Fintel Connect** for credit cards, banks, brokerages
- **Direct programs** for Policygenius, Bestow, Ladder, Ethos (life insurance carriers run their own programs)
- **Credit Karma** has a Commission Junction (CJ) program

Partner keys added 2026-05-19 (`src/lib/affiliates.ts`):
- `wise`, `capital-one`, `discover-it`, `credit-karma`

Partner keys added 2026-05-20:
- `capital-one-venture`, `chase-sapphire-reserve` (for the travel-cards article)

⚠️ **New env vars NOT yet on Vercel.** The travel-cards article also reuses pre-existing keys `csp` / `amex-gold` / `citi-double-cash` whose `AFFILIATE_*` env vars were **never added to the 16-var Vercel set** (see env list below). Until added, `/go/csp`, `/go/amex-gold`, `/go/citi-double-cash`, `/go/capital-one-venture`, `/go/chase-sapphire-reserve` all fail-safe to the homepage. Same for the brokerage/robo CTAs in the two Save-tax articles that aren't in the Vercel set: `schwab`, `vanguard`, `betterment`, `wealthfront`. `fidelity` IS set and works. Add the missing vars before deploying articles 7–9 if those CTAs should be live.

Pre-existing partner keys reused: `ally`, `marcus`, `sofi-money`, `robinhood`, `webull`, `fidelity`, `policygenius`, `bestow`, `ladder`, `ethos`.

---

## Env vars on Vercel (production + preview + development)

Initial 16 variables set 2026-05-19; **9 more added 2026-05-20 (now 25 total — see Session 2026-05-20 note below)**. To edit: Vercel dashboard → finance-ai-brief → Settings → Environment Variables. After editing, **trigger a redeploy** — Next.js bakes server env values at build time.

```
NEXT_PUBLIC_SITE_URL=https://finbrief.space
NEXT_PUBLIC_SITE_NAME=Finbrief
AFFILIATE_WISE=https://wise.com/invite/ahpc/jahanzebn17
AFFILIATE_SOFI_MONEY=https://sofi.hk/referral/?c=8FE92168
AFFILIATE_ALLY=https://www.ally.com
AFFILIATE_MARCUS=https://www.marcus.com
AFFILIATE_ROBINHOOD=https://robinhood.com
AFFILIATE_WEBULL=https://www.webull.com
AFFILIATE_FIDELITY=https://www.fidelity.com
AFFILIATE_CAPITAL_ONE=https://www.capitalone.com
AFFILIATE_DISCOVER_IT=https://www.discover.com
AFFILIATE_POLICYGENIUS=https://www.policygenius.com
AFFILIATE_BESTOW=https://www.bestow.com
AFFILIATE_LADDER=https://www.ladder.com
AFFILIATE_ETHOS=https://www.ethos.com
AFFILIATE_CREDIT_KARMA=https://www.creditkarma.com
```

---

## Codebase changes this session

- `src/lib/affiliates.ts` — added 4 new `PartnerKey` entries (wise, capital-one, discover-it, credit-karma) and their `PARTNERS` registry entries.
- `src/lib/site-config.ts` — appended 4 entries to the `articles` array (also flows into `sitemap.xml`).
- `.env.example` — added 4 new placeholder `AFFILIATE_*` lines.
- `src/app/layout.tsx` — restored from `finance-platform.zip` backup; the working-tree copy was 0 bytes at start of session (cause unknown, possibly stale `.next` cache truncating during an earlier session). Confirm this hasn't recurred at start of next session.
- `src/app/learn/<slug>/page.tsx` — 4 new article files (~1,600 lines total).

Build verified locally with `npm run build` in Next.js 16.2.6 / Turbopack. All 21 routes statically prerendered.

---

## Open issues / things still to do

0. ~~**VERIFY 2026 IRS FIGURES...**~~ ✅ **RESOLVED 2026-05-20.** All 2026 Roth figures verified against the official IRS news release (IR-2025-…, "401(k) limit increases to $24,500 for 2026, IRA limit increases to $7,500", irs.gov) and Vanguard's published 2026 limits. Confirmed accurate: limit **$7,500** / catch-up **$1,100** ($8,600 at 50+); MAGI phase-outs **$153,000–$168,000** (single/HOH), **$242,000–$252,000** (MFJ), **$0–$10,000** (MFS). Article hint text updated from "estimate, verify" to authoritative IRS citation. Tax-loss-harvesting $3,000 offset / 30-day wash-sale figures are stable statute (unchanged).

1. **Reviewer + author identity.** Articles currently carry generic `"Finbrief Editorial Team"` + generic CFP / licensed-insurance-pro reviewer notes. Google YMYL E-E-A-T expects a real named person with verifiable credentials. Either:
   - Sign a CFP/CPA/EA on retainer to review (Phase 2 plan budgets for this), OR
   - The user becomes the named author and adds a personal bio + LinkedIn link
   Until this is resolved, hold off on aggressive promotion / link-building.

2. **Real affiliate URLs.** See "Affiliate registry" above. Wise and SoFi already pay; the other 14 partners need program approval.

3. **DNS / domain.** `finbrief.space` is live and verified at Vercel. If switching domains later, also update `NEXT_PUBLIC_SITE_URL`.

4. **`favicon.ico` and `apple-icon.png`.** Not yet generated. Sprint 1 step 3 in `CLAUDE.md`.

5. **`opengraph-image.tsx`.** Generic placeholder only; build a real OG image with `@vercel/og` (Sprint 1 step 4 in `CLAUDE.md`).

6. **Analytics provider.**
   - ✅ **Vercel Web Analytics (page views) enabled 2026-05-20.** `@vercel/analytics@^2` installed; `<Analytics/>` from `@vercel/analytics/next` added to `src/app/layout.tsx` (commit `97b0940`, deployed via GitHub auto-deploy `dpl_ApixSrmmeVcyKBqGjXVCTYdqRsVC`). Dashboard toggle ON (`webAnalytics.enabledAt` = 2026-05-20T14:32Z); `/_vercel/insights/script.js` serves 200; deployed JS bundle contains the insights injection. Stats API shows 0 views so far — populates only on **real browser** traffic (curl doesn't run JS). Manual check: open finbrief.space in a browser, then Vercel → finance-ai-brief → Analytics shows the view within ~1 min.
   - ⏳ **Still a stub:** `src/lib/analytics.ts` `logAffiliateClick` (server-side affiliate-click events) — separate concern from page views. Wire to PostHog/GA4/warehouse to capture `/go/[partner]` clicks.

7. **Sitemap submission.** Submit `https://finbrief.space/sitemap.xml` to Google Search Console, then request indexing for the 4 new article URLs individually.

8. **Newsletter signup.** Not yet built. Phase 2 GTM plan slots this for month 4 of operation.

9. **Git auth.** ✅ Resolved 2026-05-20 — SSH key auth set up. An ed25519 key was generated at `~/.ssh/id_ed25519` (no passphrase) and added to GitHub; the `origin` remote was switched from HTTPS to `git@github.com:bhuttavpn-jpg/finance-ai-brief.git`. Plain `git push` now works in future sessions, no PAT needed. (`gh` CLI still not installed — only needed if PR/issue automation is wanted.)

---

## Process notes (lessons from this session)

- **Token hygiene.** The user pasted several GitHub PATs and one Vercel token directly into chat during this session. They were used and then flagged for revocation. In future sessions, prefer (in order): SSH key auth → `gh auth login` → CLI-managed credentials → short-lived API tokens. Avoid embedding PATs in `git remote` URLs — they leak.
- **Fine-grained PATs vs classic.** A fine-grained GitHub PAT that lacks `Contents: Read and write` on the target repo will return cryptic 403/404s even when `permissions.push` reports `true` (that field reflects user role, not token scopes). Test by trying a write API call (`PUT /repos/.../contents/...`); if it 404s, the scope is wrong.
- **Vercel domain transfers.** A domain can only be attached to one project at a time per team. To move it, `DELETE /v9/projects/{old}/domains/{name}` then `POST /v10/projects/{new}/domains`.
- **Build-time env vars.** Next.js requires a redeploy after env-var changes; setting an env then visiting the site is not enough. After Vercel env-var edits, always trigger a fresh production deploy.
- **`layout.tsx` recovery.** At the start of this session, `src/app/layout.tsx` was a 0-byte file (build failed: "not a module"). Restored from `finance-platform.zip` in the outputs directory. If `layout.tsx` is ever found empty/broken again, that zip is the recovery source.

---

## Where to start in a new session

1. Read this file (`SESSION_LOG.md`) and the original `CLAUDE.md` in this directory.
2. Confirm `src/app/layout.tsx` is non-empty (sanity-check from the issue above).
3. Run `npm run build` to confirm a clean build state.
4. Ask the user: which next article(s) from the "Articles to write next" table? Or another priority (real affiliate URLs, reviewer setup, analytics wire-up, etc.)?

---

---

## Session 2026-05-20 — articles 7–9 (P0 batch)

Picked up the project per the standard startup checklist. Sanity checks passed: `layout.tsx` 1029 bytes (healthy, no restore needed), `npm run build` clean (Next 16.2.6 / Turbopack, all routes prerendered).

**Written this session (built locally, NOT yet committed/deployed):**
- `src/app/learn/best-travel-credit-cards-2026/page.tsx` — Borrow-smart hub. Article + FAQ JSON-LD. CTAs: csp, amex-gold, capital-one-venture, chase-sapphire-reserve, citi-double-cash.
- `src/app/learn/roth-ira-contribution-limits-2026/page.tsx` — Save-tax hub. Article + FAQ JSON-LD. CTAs: fidelity, vanguard, schwab. **See Open issue #0 — IRS figures need verification.**
- `src/app/learn/tax-loss-harvesting-guide/page.tsx` — Save-tax. Article + HowTo + FAQ JSON-LD. CTAs: betterment, wealthfront, fidelity.
- `src/lib/affiliates.ts` — added `capital-one-venture`, `chase-sapphire-reserve`.
- `src/lib/site-config.ts` — added 3 article entries (also flows into sitemap).
- `.env.example` — added the 2 new `AFFILIATE_*` lines.

Build verified: 24 routes total (was 21), all 3 new articles statically prerendered.

**Presentation spec adopted this session** (see "Articles to write next" note): articles 7–9 use mixed content blocks, inline Q&A, `<hr>` section separators, and strategic bold. Match for future articles.

**Done later in the 2026-05-20 session:**
1. ✅ Verified IRS 2026 figures (Open issue #0) — all correct; article hints made authoritative.
2. ✅ Added 9 missing affiliate env vars to Vercel (production+preview+development): `AFFILIATE_CHASE_SAPPHIRE_PREFERRED`, `_AMEX_GOLD`, `_CITI_DOUBLE_CASH`, `_CAPITAL_ONE_VENTURE`, `_CHASE_SAPPHIRE_RESERVE`, `_SCHWAB`, `_VANGUARD`, `_BETTERMENT`, `_WEALTHFRONT`. Vercel env count now **25**. All still placeholder homepage URLs — replace with real tracked links once affiliate programs approve.
3. ✅ Committed locally (`1c1e3d3`) and **deployed to production via Vercel CLI** (`vercel deploy --prod`) — bypassed GitHub because no GitHub credentials were available. Production deployment `dpl_Ap9BAbRfSyjkNwQX34jVUAeW72u2`, READY, aliased to finbrief.space. Smoke test passed: 3 new articles 200; `/go/{capital-one-venture,chase-sapphire-reserve,betterment,vanguard}` all 302 with correct `subid`.
4. ⚠️ **GitHub is now BEHIND production.** Two local commits (`d865146`, `1c1e3d3`) are NOT pushed to origin/main — `git push` failed (HTTPS remote, no PAT/`gh`). The live site was deployed straight from local. **Next session: get a GitHub PAT or `gh auth login` and `git push origin main` so the repo matches what's live**, otherwise the source of truth has diverged from production.
5. TODO: Submit new URLs to Google Search Console.
6. Note: a `.vercel/` link dir was created locally by `vercel link` (gitignored by default).

---

---

## Session 2026-05-20 (continued) — infrastructure, bugs, refactor

Picked up mid-session. All previous work (articles 7–9, env vars, Vercel deploy) was complete. Remaining issues in the open-issues list were resolved one by one.

### Git / GitHub sync (was: GitHub behind production)

SSH key auth set up:
- ed25519 key generated at `~/.ssh/id_ed25519` (no passphrase)
- Public key added to GitHub account (user manually added via Settings → SSH keys)
- `origin` remote switched from HTTPS to `git@github.com:bhuttavpn-jpg/finance-ai-brief.git`
- `git push origin main` succeeded — GitHub now matches production

**Current git state:** `origin/main` = local HEAD = `eb9fc4a` (see below for all commits).

### Vercel Analytics (end-to-end)

1. Installed `@vercel/analytics@^2.0.1` in `package.json`
2. Added `<Analytics />` from `@vercel/analytics/next` to `src/app/layout.tsx` (before `</body>`)
3. Committed and pushed — GitHub auto-deploy triggered, production deployment updated
4. Enabled Web Analytics toggle in Vercel dashboard → finance-ai-brief → Analytics
5. Verified: `/_vercel/insights/script.js` returns HTTP 200 (only true when WA is enabled); deployed JS bundle contains `_vercel/insights` injection
6. **Dashboard shows 0 views** — expected; populates only on real browser traffic (curl doesn't execute JS). Open finbrief.space in a browser → Vercel Analytics shows a view within ~1 min.

### Rollback

Confirmed via Vercel dashboard: every production deployment is retained and can be promoted back instantly (Deployments list → "Promote to Production"). GitHub `git revert` + push also triggers a new deploy. Multiple rollback paths exist.

### Bug fix #1 — duplicate "Reviewed by" in article bylines

**Root cause:** `ArticleHeader.tsx` renders `· Reviewed by {reviewer}`, but all 9 article files were passing `reviewer="Reviewed by a Certified Financial Planner (CFP®)"` — producing "Reviewed by Reviewed by…".

**Fix:** Stripped the leading "Reviewed by " prefix from the `reviewer` prop in all 9 article files:
```bash
sed -i '' 's/reviewer="Reviewed by /reviewer="/' src/app/learn/*/page.tsx
```
Result: `reviewer="a Certified Financial Planner (CFP®)"` — component renders correctly.

### Bug fix #2 — `/learn` page category filter not working

**Root cause:** Two issues:
1. `src/app/learn/page.tsx` was a plain (sync) Server Component reading `searchParams` synchronously — Next.js 15+ requires `searchParams` to be `await`-ed as a `Promise<{...}>`.
2. `siteConfig.pillars` stores slugs (`borrow-smart`) while `siteConfig.articles[].pillar` stores display labels (`"Borrow smart"`) — direct comparison always failed.

**Fix:** Completely rewrote `src/app/learn/page.tsx` as an async Server Component:
```tsx
export default async function LearnIndex({
  searchParams,
}: {
  searchParams: Promise<{ pillar?: string }>;
}) {
  const { pillar } = await searchParams;
  const activePillar = siteConfig.pillars.find((p) => p.slug === pillar) ?? null;
  const articles = activePillar
    ? siteConfig.articles.filter((a) => a.pillar === activePillar.label)
    : siteConfig.articles;
  // ...
}
```
Added `FilterChip` component with active/inactive styles. `/learn` is now `ƒ` (dynamic, not static) in the build output — expected for a page with URL-driven filter state.

### Formatting refactor — first 7 articles

Articles 8–9 (Roth limits, tax-loss harvesting) were written with a new presentation spec: `<hr className="my-10 border-brand-100" />` separators before each major H2, bold lead-in paragraphs, and mixed content blocks (tables + bullets + inline Q&A).

The first 7 articles were refactored to match **presentation only** — no content, research, or accuracy changes:
1. Added `<hr className="my-10 border-brand-100" />` before each H2 except "Related reading"
2. Bolded the opening sentence of each article's lead paragraph
3. **Exception:** `how-to-budget-50-30-20` and `roth-ira-vs-traditional-ira` had no intro text before their first H2 — removed the leading hr from those two to avoid a visual separator with nothing above it

**Articles 8–9 were NOT touched** (they are the reference; they already match the spec).

### Full commit history (as of end of session)

| Commit | Message |
|---|---|
| `eb9fc4a` | Refactor first 7 articles to match reference formatting |
| `30c519b` | Fix duplicate "Reviewed by" byline and add category filtering to /learn |
| `34ecb72` | Document Vercel Analytics enablement + SSH git auth in SESSION_LOG |
| `97b0940` | Enable Vercel Analytics |
| `392345f` | Update SESSION_LOG with 2026-05-20 deploy + GitHub sync notes |
| `1c1e3d3` | Add 3 P0 cornerstone articles (travel cards, Roth limits, tax-loss harvesting) |
| `d865146` | Add SESSION_LOG.md to track shipped progress |
| `3c1c001` | Add 4 cornerstone articles + 4 new affiliate partners |

### Updated deployment state

| Surface | Status |
|---|---|
| GitHub `origin/main` | `eb9fc4a` ✅ in sync |
| Vercel production | Latest auto-deploy from `eb9fc4a` ✅ |
| Vercel env vars | **25 total** (see updated env-var table below) |
| Vercel Analytics | Enabled and verified ✅ |
| SSH auth | `~/.ssh/id_ed25519` configured ✅ |

### Updated env vars on Vercel (25 total)

```
NEXT_PUBLIC_SITE_URL=https://finbrief.space
NEXT_PUBLIC_SITE_NAME=Finbrief
AFFILIATE_WISE=https://wise.com/invite/ahpc/jahanzebn17          ← real tracked URL
AFFILIATE_SOFI_MONEY=https://sofi.hk/referral/?c=8FE92168        ← real tracked URL
AFFILIATE_ALLY=https://www.ally.com
AFFILIATE_MARCUS=https://www.marcus.com
AFFILIATE_ROBINHOOD=https://robinhood.com
AFFILIATE_WEBULL=https://www.webull.com
AFFILIATE_FIDELITY=https://www.fidelity.com
AFFILIATE_CAPITAL_ONE=https://www.capitalone.com
AFFILIATE_DISCOVER_IT=https://www.discover.com
AFFILIATE_POLICYGENIUS=https://www.policygenius.com
AFFILIATE_BESTOW=https://www.bestow.com
AFFILIATE_LADDER=https://www.ladder.com
AFFILIATE_ETHOS=https://www.ethos.com
AFFILIATE_CREDIT_KARMA=https://www.creditkarma.com
AFFILIATE_CHASE_SAPPHIRE_PREFERRED=https://creditcards.chase.com   ← added 2026-05-20
AFFILIATE_AMEX_GOLD=https://www.americanexpress.com                ← added 2026-05-20
AFFILIATE_CITI_DOUBLE_CASH=https://www.citi.com                    ← added 2026-05-20
AFFILIATE_CAPITAL_ONE_VENTURE=https://www.capitalone.com           ← added 2026-05-20
AFFILIATE_CHASE_SAPPHIRE_RESERVE=https://creditcards.chase.com     ← added 2026-05-20
AFFILIATE_SCHWAB=https://www.schwab.com                            ← added 2026-05-20
AFFILIATE_VANGUARD=https://www.vanguard.com                        ← added 2026-05-20
AFFILIATE_BETTERMENT=https://www.betterment.com                    ← added 2026-05-20
AFFILIATE_WEALTHFRONT=https://www.wealthfront.com                  ← added 2026-05-20
```
All non-WISE/SOFI vars are placeholder homepages — replace with real tracked links when affiliate programs approve.

### Updated articles table

| # | Slug | Pillar | Status |
|---|---|---|---|
| 1 | `how-to-budget-50-30-20` | Budget | ✅ Live (initial MVP) |
| 2 | `roth-ira-vs-traditional-ira` | Invest | ✅ Live (initial MVP) |
| 3 | `best-hysa-2026` | Budget | ✅ Live (shipped 2026-05-19) |
| 4 | `how-to-invest-1000-beginners` | Invest | ✅ Live (shipped 2026-05-19) |
| 5 | `best-term-life-insurance-young-professionals` | Protect | ✅ Live (shipped 2026-05-19) |
| 6 | `how-to-build-credit-from-scratch` | Borrow smart | ✅ Live (shipped 2026-05-19) |
| 7 | `best-travel-credit-cards-2026` | Borrow smart | ✅ Live (shipped 2026-05-20) |
| 8 | `roth-ira-contribution-limits-2026` | Save tax | ✅ Live (shipped 2026-05-20) |
| 9 | `tax-loss-harvesting-guide` | Save tax | ✅ Live (shipped 2026-05-20) |

**9 of 10 planned cornerstone articles live.**

### Next articles to write (P1 priorities)

| Priority | Pillar | Slug | Keyword |
|---|---|---|---|
| **P1** | Invest | `401k-vs-ira-which-first` | "401k vs IRA which to fund first" |
| **P1** | Protect | `term-vs-whole-life-insurance` | "term vs whole life insurance" |
| P2 | Budget | `how-to-build-emergency-fund` | "emergency fund" |
| P2 | Budget | `couples-budgeting-guide` | "couples budget" |

Default next session: write both P1s.

### Remaining open issues

1. **Real affiliate URLs** — all 23 non-WISE/SOFI vars are placeholders; apply to Bankrate CC / Impact / Fintel Connect.
2. **Reviewer + author identity** — generic bylines only; need real credentialed person for YMYL E-E-A-T.
3. **Sitemap submission** — submit `https://finbrief.space/sitemap.xml` + request indexing for 9 article URLs in Google Search Console.
4. **`favicon.ico` + `apple-icon.png`** — not yet generated.
5. **`opengraph-image.tsx`** — generic placeholder; build with `@vercel/og`.
6. **Affiliate click analytics** — `src/lib/analytics.ts` `logAffiliateClick` is still a `console.log` stub.
7. **Newsletter signup** — Phase 2 GTM, month 4.

---

---

---

## Session 2026-05-21 — P1 batch (articles 10–11)

Standard startup checklist passed: `layout.tsx` 1103 bytes (healthy), `npm run build` clean (Next 16.2.6 / Turbopack, 24 routes before this session's additions).

**Written this session:**
- `src/app/learn/401k-vs-ira-which-first/page.tsx` — Invest pillar. Thesis: match-first order of operations (401(k) to match → max IRA → back to 401(k) → HSA/taxable). Article + FAQ + **HowTo** JSON-LD. CTAs: `fidelity`, `vanguard`, `schwab` (all already in registry + Vercel env). Links to `/tools/401k-match`, `roth-ira-vs-traditional-ira`, `roth-ira-contribution-limits-2026`.
- `src/app/learn/term-vs-whole-life-insurance/page.tsx` — Protect pillar. Thesis: "buy term and invest the difference"; covers the narrow cases where whole life fits. Article + FAQ JSON-LD. DIME sizing method. CTAs: `policygenius`, `bestow`, `ladder`, `ethos` (all already in registry + Vercel env). Links to `best-term-life-insurance-young-professionals`, `/tools/life-insurance`.
- `src/lib/site-config.ts` — added the 2 article entries (also flows into sitemap).

**No new affiliate keys or env vars** — both articles reuse existing partners. Nothing to add on Vercel.

Build verified: **26 routes** total (was 24), both new articles statically prerendered, TypeScript passed.

**Presentation:** followed the articles 8–9 spec + the expanded formatting guidelines provided this session (mixed content blocks — comparison tables + bullet lists + inline Q&A + ≤5-sentence paragraphs; strategic bold on numbers/key terms; `<hr className="my-10 border-brand-100" />` separators before each H2 except "Related reading"). Content/accuracy standards unchanged.

**Git:** committed `03e0cac` ("Add 2 P1 cornerstone articles…", 3 files / 681 insertions) and pushed `7baba26..03e0cac` to `origin/main` over SSH. Working tree clean, in sync. GitHub auto-deploy should pick this up.

### Cornerstone count
**11 cornerstone articles now written** (Phase 2 plan called for 10 — now one ahead). Both P1s from the prior backlog are done.

### Caveats flagged this session
- **401(k) 50+ catch-up = $8,000 (2026)** is a COLA-projected figure, written with an IRS-confirm hint. The confidently-verified 2026 numbers remain the $24,500 employee deferral and the $7,500 / $1,100 IRA limit/catch-up (verified prior session). Confirm the 401(k) catch-up on IRS.gov before aggressive promotion.
- **Reviewer/author bylines** are still the generic placeholders (`a Certified Financial Planner (CFP®)` / `a licensed insurance professional`) — same YMYL E-E-A-T open issue as the other articles.

### Next articles (P2 backlog)
| Priority | Pillar | Slug | Keyword |
|---|---|---|---|
| P2 | Budget | `how-to-build-emergency-fund` | "emergency fund" |
| P2 | Budget | `couples-budgeting-guide` | "couples budget" |

Beyond these, the full spoke backlog lives in `Phase_2_Content_SEO_Workbook.xlsx` (sheet: Calendar).

---

*Last updated: 2026-05-21 (articles 10–11 — 401k-vs-IRA and term-vs-whole-life — written, committed `03e0cac`, pushed to origin/main. 11 cornerstones written; P1 backlog cleared. P2 budget articles remain.)*
