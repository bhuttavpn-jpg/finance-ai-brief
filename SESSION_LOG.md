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

---

---

## Session 2026-05-21 (continued) — P2 Budget batch (articles 12–13)

Continued straight from the P1 batch. Wrote both remaining P2 Budget articles.

**Written this session:**
- `src/app/learn/how-to-build-emergency-fund/page.tsx` — Budget pillar. 3–6 months of essentials in a HYSA; five-step plan; fund-vs-debt sequencing. Article + FAQ + **HowTo** JSON-LD. CTAs: `marcus`, `ally`, `sofi-money`. Funnels from / links to `best-hysa-2026`, `/tools/budget-50-30-20`.
- `src/app/learn/couples-budgeting-guide/page.tsx` — Budget pillar. Account models (joint/separate/hybrid), fair splits (50/50 vs proportional), monthly check-in, joint emergency fund. Article + FAQ JSON-LD. CTAs: `marcus`, `ally`, `sofi-money`. Links to `how-to-build-emergency-fund`, `how-to-budget-50-30-20`, `/tools/budget-50-30-20`, `best-hysa-2026`.
- `src/lib/site-config.ts` — added the 2 article entries (also flows into sitemap).

**No new affiliate keys or env vars.** Deliberately used only HYSA partners with live Vercel env vars (`marcus`, `ally`, `sofi-money`) so every CTA resolves to a real URL — avoided `cit`/`ynab` since those `AFFILIATE_*` vars are not in the Vercel set.

Build verified: **28 routes** total (was 26), both new articles statically prerendered, TypeScript passed.

**Git:** committed `9790cb0` ("Add 2 P2 Budget articles…", 3 files / 617 insertions), pushed `aeccd89..9790cb0` to `origin/main` over SSH.

### Cornerstone count
**13 articles now written** (Phase 2 target was 10). All P1 and P2 backlog items from prior sessions are now cleared.

### Next content (beyond the original backlog)
The original "Articles to write next" tables are now exhausted. The remaining spoke backlog lives in `Phase_2_Content_SEO_Workbook.xlsx` (sheet: Calendar) in the parent outputs directory — pull the next priority block from there for future sessions.

### Standing open issues (unchanged from prior session)
1. **Real affiliate URLs** — only Wise + SoFi pay; all others are placeholder homepages.
2. **Reviewer/author identity** — generic bylines; YMYL E-E-A-T blocker before aggressive promotion.
3. **Sitemap submission** — submit `https://finbrief.space/sitemap.xml` + request indexing for the now-13 article URLs in Google Search Console.
4. **favicon.ico + apple-icon.png**, **opengraph-image** polish, **affiliate click analytics** stub, **newsletter signup** — all still open.
5. **401(k) 50+ catch-up ($8,000, 2026)** in article 10 is a COLA-projected figure with an IRS-confirm hint — verify before promotion.

---

*Last updated: 2026-05-21 (P2 batch — emergency fund + couples budgeting — written, committed `9790cb0`, pushed to origin/main. 13 cornerstone articles written; original P1+P2 backlog fully cleared. Next content comes from the Phase 2 workbook Calendar sheet.)*

---

---

## Session 2026-05-21 (continued) — infrastructure: OG/icons, analytics, newsletter, GSC

Tackled the four standing infra open issues. **All four resolved or unblocked.** Two commits: `79d8c6f` (OG/analytics/newsletter) and `f176f8d` (GSC verification).

### 1. ✅ favicon / OG polish (commit `79d8c6f`)
- `src/app/opengraph-image.tsx` — rewrote with a branded layout (white "FB" logo lockup + full name top-left, tagline + description, domain footer, navy radial-gradient bg). Added `size`, `alt`, `contentType` exports.
- **`src/app/icon.tsx` (new)** — generated favicon via `@vercel/og` ("FB" on navy, rounded). This is the real fix: the old `src/app/favicon.png` was **not a recognized Next filename** (Next only auto-detects `favicon.ico` or `icon.*`), so the site had no working favicon. Removed the dead `favicon.png`.
- `apple-icon.png` was already a valid convention name — left as-is.
- Verified live: `/opengraph-image` → 200 image/png; `/icon` → 200 image/png.

### 2. ✅ Affiliate-click analytics (commit `79d8c6f`)
- `src/lib/analytics.ts` — `logAffiliateClick` now calls `track("affiliate_click", { partner, source })` from **`@vercel/analytics/server`** (reuses the already-enabled Web Analytics — no new account). Still logs JSON to stderr. Only low-cardinality, non-PII fields sent as props (never UA/IP). Wrapped in try/catch so analytics never breaks the redirect.
- ⚠️ **Vercel custom events require a Vercel Pro plan** to show in the dashboard. The `track()` call is harmless on lower tiers (no-op/ignored). If events don't appear, that's the plan tier, not a bug.

### 3. ✅ Newsletter — beehiiv (commit `79d8c6f`)  ← **needs creds to go live**
- **`src/components/content/NewsletterSignup.tsx` (new)** — `"use client"` form, brand-aligned, `variant="full" | "compact"`, idle/loading/success/error states. POSTs to `/api/subscribe`.
- **`src/app/api/subscribe/route.ts` (new)** — server route validates email, then POSTs to the beehiiv API (`/v2/publications/{id}/subscriptions`) using `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID`. Secret stays server-side. `/api/*` is robots-disallowed. Returns 503 cleanly until env vars are set.
- Placed: full variant on the **home page** (below tools), compact variant in the **Footer** (site-wide → covers "end of articles").
- `.env.example` — added `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID` placeholders.
- Verified live: `/api/subscribe` returns 400 on bad email, **503 ("not available") because env vars aren't set yet**.
- 🔴 **TO ACTIVATE:** user must (a) create a beehiiv publication, (b) get the API key (beehiiv dashboard → Settings → API) and publication ID (`pub_...`), (c) add both as env vars on Vercel (production+preview+dev), (d) redeploy. Then signups will flow to beehiiv. **Code is done; only the credentials are missing.**

### 4. ✅ Google Search Console — VERIFIED + sitemap submitted (commit `f176f8d`)
Done via the Chrome browser tools, signed in as **jahanzebnawaz856@gmail.com**.
- **Finding:** no GSC property existed for this account. Created a **URL-prefix property `https://finbrief.space`** (not domain — domain needs DNS verification; URL-prefix allows code-based methods).
- Added **both** verification signals (public tokens, safe in git):
  - HTML meta tag via `metadata.verification.google` in `src/app/layout.tsx` → token `O4v6KR8AAC0U9Tpf3ctYx-uzFvO73VvX19EL99KErB8`
  - HTML file `public/google705d99193056a6d5.html` (content: `google-site-verification: google705d99193056a6d5.html`)
- Deployed, then GSC reported **"Ownership auto verified"** (methods: HTML file, HTML tag).
- **Submitted `sitemap.xml`** on the Sitemaps page → **"Sitemap submitted successfully."** Status initially shows **"Couldn't fetch"** — this is the normal transient state right after submission; the sitemap is live (200, application/xml, **22 URLs**) and Google re-fetches within hours. ⏳ **Next session: re-check the Sitemaps page; status should be "Success." If still "Couldn't fetch" after ~48h, re-submit.**
- ⏳ **URL inspection → Request indexing (in progress).** Done via browser; the GSC search box focuses intermittently and Google enforces a **daily request-indexing quota**, so this is being spread out. **Requested successfully so far (4 of 13 — the newest/highest-priority articles):**
  - ✅ `401k-vs-ira-which-first`
  - ✅ `term-vs-whole-life-insurance`
  - ✅ `how-to-build-emergency-fund`
  - ✅ `couples-budgeting-guide`
  - **Still to request (9):** `roth-ira-contribution-limits-2026`, `tax-loss-harvesting-guide`, `best-travel-credit-cards-2026`, `how-to-build-credit-from-scratch`, `best-term-life-insurance-young-professionals`, `how-to-invest-1000-beginners`, `best-hysa-2026`, `roth-ira-vs-traditional-ira`, `how-to-budget-50-30-20`.
  - **Note:** the submitted **sitemap already covers all 22 URLs** — individual requests only speed up crawl. Finish the remaining 9 in a future session (likely across a couple of days due to the quota). GSC flow: URL inspection search box → paste full URL → Enter → "Request indexing" → wait for live test → "Indexing requested".
- ℹ️ Don't remove the meta tag or the HTML file — removing either un-verifies the property.

### Updated open issues (post-session)
1. **Real affiliate URLs** — still only Wise + SoFi pay; rest are placeholder homepages. (Apply to Bankrate CC / Impact / Fintel Connect.)
2. **Reviewer/author identity** — still generic bylines; YMYL E-E-A-T blocker before aggressive promotion.
3. **Newsletter creds** — beehiiv code shipped; needs API key + publication ID on Vercel to go live (see #3 above).
4. **GSC sitemap "Couldn't fetch"** — expected transient; verify it flips to "Success" next session.
5. **401(k) 50+ catch-up ($8,000, 2026)** in `401k-vs-ira-which-first` — COLA-projected, has an IRS-confirm hint; verify before promotion.
6. **Analytics on Vercel Pro** — custom `affiliate_click` events only surface on a Pro plan.

### Commit history this session
| Commit | Message |
|---|---|
| `f176f8d` | Add Google Search Console verification (meta tag + HTML file) |
| `79d8c6f` | Polish OG/icons, wire affiliate analytics, add beehiiv newsletter |
| `5730f26` | Document 2026-05-21 P2 batch (articles 12-13) in SESSION_LOG |
| `9790cb0` | Add 2 P2 Budget articles (emergency fund, couples budgeting) |
| `aeccd89` | Document 2026-05-21 session (P1 articles 10-11) in SESSION_LOG |
| `03e0cac` | Add 2 P1 cornerstone articles (401k vs IRA, term vs whole life) |

### Where to start next session
1. Read `SESSION_LOG.md` + `CLAUDE.md`; sanity-check `layout.tsx` non-empty; `npm run build`.
2. **Check GSC Sitemaps page** → confirm `sitemap.xml` status is "Success" (was "Couldn't fetch" at submission, expected to resolve).
3. If beehiiv creds are now available → add `BEEHIIV_API_KEY` + `BEEHIIV_PUBLICATION_ID` to Vercel, redeploy, test `/api/subscribe`.
4. **Content:** all original P0/P1/P2 cornerstones (13 articles) are done. Next content = spoke backlog in `Phase_2_Content_SEO_Workbook.xlsx` (sheet: Calendar).
5. Remaining non-content priorities: real affiliate URLs (revenue), reviewer/author identity (YMYL).

---

*Last updated: 2026-05-21 (infra session — OG/icons polished, affiliate analytics wired to Vercel server-side track, beehiiv newsletter built [needs creds], GSC property VERIFIED + sitemap submitted. Commits `79d8c6f`, `f176f8d`. 13 articles live; site fully indexable.)*

---

---

## Session 2026-05-21 (continued) — beehiiv newsletter ACTIVATED

Standard startup checklist passed: `layout.tsx` 1343 bytes (healthy), git clean at `59119db`, `npm run build` clean (30 routes, all 13 articles prerendered).

**Newsletter is now LIVE.** Added the beehiiv credentials to Vercel and verified end-to-end.

- Publication: **"finbriefSpace's Newsletter"** (org "finbrief's Hiiv"), publication ID **`pub_c2d0f7f4-d91e-4d84-bef3-1024298cecdf`** (the `pub_` prefix IS required — confirmed against the beehiiv API; a bare UUID also 401s but only because the key was wrong, see below).
- Env vars added to Vercel **production + development** (preview skipped — see gotcha): `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`.
- Deployed to production via `vercel deploy --prod` (final good deploy `dpl_6t6WqoDsW5L2FVSZcREAg6rBvhgM`, READY).
- **End-to-end verified on finbrief.space:** bad email → 400, empty body → 400, valid email → **200 `{"ok":true}`** (real subscription created in beehiiv, welcome email sent).

### Gotchas hit this session
- 🔑 **Trailing-period typo in the pasted API key.** The key was first pasted with a trailing `.` (`...03r7.`). beehiiv returned `401 INVALID_API_KEY` for every request (both ID formats). Stripping the trailing dot fixed it — confirmed with a direct `GET /v2/publications/{id}` returning 200. The corrected key (no trailing dot) is what's now on Vercel. **Lesson: probe the provider API directly (`curl`) to surface the real error — our `/api/subscribe` route masks beehiiv's response as a generic 502.**
- ⚠️ **Vercel CLI preview env vars NOT set.** The plugin-wrapped `vercel env add ... preview` couldn't take the "all preview branches" path non-interactively, and `main` is rejected (it's the production branch). Production + development cover the live site, so preview was left unset. If newsletter signups are ever needed on preview/PR deploys, add the two vars to Preview via the Vercel dashboard.

### Follow-ups
1. ✅ **Beehiiv API key rotated.** User generated a fresh key in beehiiv, the old one was confirmed revoked (`401 INVALID_API_KEY` against beehiiv API), the new key was confirmed active (`200` on `GET /v2/publications/{id}`), pushed to Vercel `BEEHIIV_API_KEY` (prod+dev), and redeployed (`dpl_HkLwQpixoGgqkEy4pd3EVeoFoLea`). Re-ran end-to-end on finbrief.space — `{"ok":true}` on valid email, throwaway test subscriber was created and immediately deleted (HTTP 204). **Note:** the new key is also in this session's transcript — rotate again only if that transcript is shared more widely; otherwise it's now living only in Vercel's encrypted env.
2. ✅ **Test subscribers removed.** Both `jahanzebnawaz856+finbrieftest@gmail.com` (original e2e test, sub `sub_e5745e35-...`) and `jahanzebnawaz856+finbriefrot@gmail.com` (post-rotation smoke test, sub `sub_ac3183a0-...`) deleted via `DELETE /v2/publications/{id}/subscriptions/{sub_id}`. Audience now clean.

### Updated open issues (post-session)
1. **Real affiliate URLs** — still only Wise + SoFi pay; rest are placeholder homepages.
2. **Reviewer/author identity** — still generic bylines; YMYL E-E-A-T blocker before promotion.
3. ~~**Newsletter creds**~~ ✅ **RESOLVED** — beehiiv live (see above). Rotate key + remove test subscriber (follow-ups #1, #2).
4. **GSC sitemap "Couldn't fetch"** — still to re-check; confirm it flipped to "Success".
5. **GSC request-indexing** — 4 of 13 done; 9 articles remain (quota-limited).
6. **401(k) 50+ catch-up ($8,000, 2026)** — COLA-projected; verify on IRS.gov before promotion.
7. **Analytics on Vercel Pro** — custom `affiliate_click` events only surface on a Pro plan.

*Last updated: 2026-05-23 (beehiiv newsletter ACTIVATED and follow-ups closed — API key rotated [old key revoked, new key live on Vercel prod+dev], audience cleaned, end-to-end re-verified on `dpl_HkLwQpixoGgqkEy4pd3EVeoFoLea`.)*

---

---

## Session 2026-05-30 — GSC sitemap confirmed + indexing requests cleared

Standard startup checklist passed: `layout.tsx` 1343 bytes (healthy), `npm run build` clean (29 routes, all 13 articles prerendered).

### Sitemap status

Re-checked GSC Sitemaps for `https://finbrief.space/` (signed in as **jahanzebnawaz856@gmail.com**). The previously "Couldn't fetch" entry has flipped to **Status: Success**, **Last read: May 29, 2026**, **22 pages discovered**. No action needed.

### Indexing requests — remaining 9 articles cleared

Worked through the 9 outstanding URLs via URL Inspection → Request indexing. Daily quota held this time — all submitted in one sitting.

| # | URL | Pre-request state | Result |
|---|---|---|---|
| 1 | `/learn/roth-ira-contribution-limits-2026` | Discovered — not indexed | ✅ Indexing requested |
| 2 | `/learn/tax-loss-harvesting-guide` | URL unknown to Google | ✅ Indexing requested |
| 3 | `/learn/best-travel-credit-cards-2026` | Discovered — not indexed | ✅ Indexing requested |
| 4 | `/learn/how-to-build-credit-from-scratch` | URL unknown to Google | ✅ Indexing requested |
| 5 | `/learn/best-term-life-insurance-young-professionals` | Discovered — not indexed | ✅ Indexing requested |
| 6 | `/learn/how-to-invest-1000-beginners` | URL unknown to Google | ✅ Indexing requested |
| 7 | `/learn/best-hysa-2026` | Discovered — not indexed | ✅ Indexing requested |
| 8 | `/learn/roth-ira-vs-traditional-ira` | **URL is on Google** (already indexed) | ✅ Re-requested |
| 9 | `/learn/how-to-budget-50-30-20` | Discovered — not indexed | ✅ Indexing requested |

Combined with the 4 requested in the prior infra session (`401k-vs-ira-which-first`, `term-vs-whole-life-insurance`, `how-to-build-emergency-fund`, `couples-budgeting-guide`), **all 13 articles have now had indexing requested**. One — `roth-ira-vs-traditional-ira` — is already confirmed indexed (has FAQ rich result enhancement detected).

Observation: ~half the URLs returned "URL unknown to Google" despite being in the submitted sitemap. This is normal for a freshly-discovered sitemap (Google fetches it, then queues URLs over days/weeks). The explicit indexing requests should accelerate crawl.

### Updated open issues (post-session)
1. **Real affiliate URLs** — unchanged; only Wise + SoFi pay.
2. **Reviewer/author identity** — unchanged; YMYL E-E-A-T blocker.
3. ~~**GSC sitemap "Couldn't fetch"**~~ ✅ **RESOLVED** — Success, 22 pages discovered.
4. ~~**GSC request-indexing 9 remaining**~~ ✅ **RESOLVED** — all 13 articles have indexing requested. Crawl is now Google's job.
5. **401(k) 50+ catch-up ($8,000, 2026)** — unchanged; verify on IRS.gov before promotion.
6. **Analytics on Vercel Pro** — unchanged; affiliate-click events need Pro.

### Where to start next session
1. All original infra + indexing items are now resolved. The two real blockers to revenue/scale are unchanged: **real affiliate URLs** and **reviewer/author identity**.
2. **Content:** original P0/P1/P2 cornerstones (13) are done; next content comes from `Phase_2_Content_SEO_Workbook.xlsx` (sheet: Calendar) in the parent outputs dir. The next priority block of spokes should be pulled and presented to the user.

---

*Last updated: 2026-05-30 (GSC sitemap confirmed Success / 22 pages; all 13 articles have indexing requested; `roth-ira-vs-traditional-ira` already indexed with FAQ enhancement.)*

---

---

## Session 2026-05-30 (continued) — P0 spoke batch from Phase 2 Calendar (articles 14–19)

After clearing the GSC backlog, pulled the next priority block from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar sheet). Picked 6 P0 items deliberately weighted toward articles whose CTAs already resolve to **live Vercel env vars** — so every affiliate link `/go/<partner>` works on day one. Deferred any P0s gated on missing env vars (TurboTax/TaxAct/FreeTaxUSA/Lively/HealthEquity/Experian/MyFICO).

**Written this session:**

| # | Slug | Pillar | Reference in calendar | Words | Affiliates used |
|---|---|---|---|---|---|
| 14 | `best-cashback-credit-cards-2026` | Borrow smart | `hub-cc-cashback` (wk 4 P0) | ~1,900 | `citi-double-cash`, `discover-it`, `capital-one` |
| 15 | `how-much-life-insurance-do-i-need` | Protect | `hub-life-insurance` (wk 1 P0) | ~2,100 | `policygenius`, `bestow`, `ladder`, `ethos` |
| 16 | `best-brokerage-accounts-beginners` | Invest | `hub-best-brokerage` (wk 3 P0) | ~2,000 | `fidelity`, `schwab`, `vanguard`, `robinhood`, `webull` |
| 17 | `backdoor-roth-ira-guide` | Save tax | `hub-backdoor-roth` (wk 5 P0) | ~2,200 | `fidelity`, `vanguard`, `schwab` |
| 18 | `how-much-to-contribute-to-401k` | Invest | `spoke-401k-contribute` (wk 9 P0) | ~1,800 | `fidelity`, `schwab`, `vanguard` |
| 19 | `debt-snowball-vs-avalanche` | Budget | `spoke-snowball-avalanche` (wk 6 P0) | ~1,950 | `credit-karma`, `marcus`, `ally`, `sofi-money` |

Each article ships with:
- `articleJsonLd` + `faqJsonLd` (and `howToJsonLd` on the life-insurance, backdoor-Roth, and debt-payoff pieces)
- FTC `AffiliateDisclosure` above the fold
- Generic reviewer byline (CFP® or licensed insurance pro) — same E-E-A-T placeholder as the others
- Mixed presentation: comparison tables + bullets + inline Q&A + `<hr>` separators between H2s + strategic bold on numbers
- Internal links to relevant existing articles and the hero tools (`/tools/life-insurance`, `/tools/401k-match`, `/tools/budget-50-30-20`)
- Cross-pillar internal linking (e.g., backdoor-Roth ↔ 401(k)-vs-IRA ↔ Roth limits ↔ tax-loss harvesting)

**`site-config.ts` updated** — 6 new entries appended (also flows into `sitemap.xml`). `affiliates.ts` and `.env.example` untouched — every CTA reuses partner keys + env vars already in the 25-var Vercel set.

Build verified: **35 routes** total (was 29), all 6 new articles statically prerendered, TypeScript passed.

### Caveats flagged this session
- **401(k) 50+ catch-up ($8,000, 2026)** is still a COLA-projected figure — repeated the IRS-confirm hint in `how-much-to-contribute-to-401k`'s FAQ. Same as `401k-vs-ira-which-first`. Verify before aggressive promotion.
- **Reviewer/author identity** — same generic CFP / licensed insurance pro placeholders; still the YMYL E-E-A-T blocker.
- **The `best-cashback-credit-cards-2026` article references the Capital One Savor** in the tiered-card row but the affiliate registry doesn't have a `capital-one-savor` key — that line is informational only, no CTA. If you want a real Savor CTA later, add the key + env var.

### Cornerstone count
**19 articles now live** (the original Phase 2 plan called for 10 cornerstones). Pillar coverage:
- Budget: 4 (50/30/20, HYSA, emergency fund, couples, snowball-vs-avalanche → actually 5)
- Invest: 4 (Roth-vs-Trad, invest $1k, 401(k)-vs-IRA, best brokerages, how-much-to-401k → 5)
- Save tax: 3 (Roth limits, tax-loss harvesting, backdoor Roth)
- Borrow smart: 4 (build credit, travel cards, cashback cards, +1 from before)
- Protect: 3 (best term life, term-vs-whole, how much life insurance)

### Next content (P0 still on the bench, awaiting unblock)
Deferred this session because they need new env vars on Vercel first:
- `hub-tax-brackets-2026` (Save tax, P0) — needs `AFFILIATE_TURBOTAX` / `_TAXACT`
- `hub-best-tax-software` (Save tax, P0) — same
- `spoke-file-free` / `spoke-turbotax-taxact` / `spoke-freetaxusa` (Save tax, P0) — same
- `hub-hsa-vs-fsa` / `spoke-hsa-retirement` / `spoke-best-hsa` (Save tax, P0) — needs `AFFILIATE_LIVELY` / `_HEALTHEQUITY` / `_FIDELITY_HSA`
- `spoke-credit-factors` (Borrow smart, P0) — could use `credit-karma` only

Also remaining from calendar (P0, partners present):
- `spoke-robinhood-review` (Invest)
- `spoke-cc-beginners` (Borrow smart)
- `spoke-csp` (Borrow smart) — Chase Sapphire Preferred review
- `spoke-pay-cc-debt` (Budget)
- `spoke-cap-gains` (Save tax)
- `spoke-retire-needs` (Invest)

### Git
Committed as a single commit; pushed to `origin/main` over SSH. GitHub auto-deploy should pick up.

### Standing open issues (unchanged)
1. **Real affiliate URLs** — only Wise + SoFi pay.
2. **Reviewer/author identity** — generic bylines; YMYL E-E-A-T blocker.
3. **401(k) 50+ catch-up ($8,000, 2026)** — COLA-projected in two articles now.
4. **Analytics on Vercel Pro** — affiliate-click events need Pro.

*Last updated: 2026-05-30 (P0 batch from Calendar — 6 articles: cashback cards, life-insurance need, best brokerages, backdoor Roth, 401(k) contribution rate, snowball-vs-avalanche. 19 cornerstones now live. 35 routes prerendered.)*

---

---

## Session 2026-05-30 (continued) — IRS-figure citation + Capital One Savor

Closed two caveats flagged at the end of the prior P0 batch.

### 1. ✅ 401(k) 50+ catch-up — confirmed against IRS, hint removed

Authoritative source: **IRS news release IR-2025-111** (November 13, 2025), retrieved via irs.gov. Confirmed figures for 2026:
- **Employee 401(k) elective deferral: $24,500**
- **Catch-up (age 50+): $8,000** → total $32,500
- **SECURE 2.0 enhanced catch-up (ages 60–63): $11,250** (replaces the standard $8,000 catch-up for that age band, per SECURE 2.0)
- IRA contribution limit: $7,500; IRA catch-up at 50+: $1,100 (already verified prior session)

Updated articles:
- `401k-vs-ira-which-first` — FAQ answer and table footnote now cite **IR-2025-111** with the November 13, 2025 date; added the 60–63 SECURE 2.0 enhanced catch-up note.
- `how-much-to-contribute-to-401k` — both FAQ answers that previously said "COLA-projected — verify on IRS.gov" replaced with the IR-2025-111 citation; added the 60–63 super catch-up.

The article-level "open issue" around the COLA-projected $8,000 is now **closed across the codebase**. Future articles can cite IR-2025-111 directly.

### 2. ✅ Capital One Savor — partner key added, CTA wired

The prior batch's `best-cashback-credit-cards-2026` article referenced the Savor as the example tiered card but had no `capital-one-savor` partner key, so the line was informational-only.

Changes:
- `src/lib/affiliates.ts` — added `capital-one-savor` to the `PartnerKey` union and the `PARTNERS` registry (category: "Cashback credit card", envVar `AFFILIATE_CAPITAL_ONE_SAVOR`).
- `.env.example` — added `AFFILIATE_CAPITAL_ONE_SAVOR=https://www.capitalone.com/credit-cards/savor-cash/` (placeholder homepage URL until a real Bankrate CC / Capital One affiliate link is approved).
- `best-cashback-credit-cards-2026/page.tsx` — replaced the informational tiered-card mention with a proper **"The tiered-category winner: Capital One Savor"** section: rate breakdown, $0 fee callout, "when this beats 2%" math check, and an `<AffiliateButton partner="capital-one-savor">`.

✅ **`AFFILIATE_CAPITAL_ONE_SAVOR` added to Vercel (production + development)** via `vercel env add` (preview skipped — same non-interactive constraint as before). Triggered a production redeploy with `vercel deploy --prod`; latest deployment Ready. **Vercel env count is now 26.** Smoke-tested: `/go/capital-one-savor?s=test` → HTTP 302 → `https://www.capitalone.com/credit-cards/savor-cash/?subid=test` ✅.

### Build / git
- `npm run build` — clean (35 routes, all 19 articles prerendered).
- Single commit covering both fixes; pushed to `origin/main` over SSH.

### Updated open issues (post-session)
1. **Real affiliate URLs** — unchanged; only Wise + SoFi pay.
2. **Reviewer/author identity** — unchanged; YMYL E-E-A-T blocker.
3. ~~**401(k) 50+ catch-up COLA-projected hint**~~ ✅ **RESOLVED** — cited to IR-2025-111 across both articles.
4. ~~**Capital One Savor informational-only**~~ ✅ **RESOLVED** — partner key + env var + button now wired.
5. ~~**Add `AFFILIATE_CAPITAL_ONE_SAVOR` to Vercel**~~ ✅ **RESOLVED** — added to prod + dev, redeployed, smoke-tested 302 ✅. Vercel env count now 26.
6. **Analytics on Vercel Pro** — unchanged.

*Last updated: 2026-05-30 (caveats closed — 401(k) catch-up cited to IR-2025-111; Capital One Savor partner key added, CTA wired, env var live on Vercel, redirect smoke-tested 302 OK.)*

---

---

## Session 2026-05-30 (continued) — Save-tax pillar buildout (articles 20–27)

Picked the highest-impact remaining P0 block that had been deferred for missing Vercel env vars. Added the env vars myself via CLI, looked up the authoritative 2026 IRS figures, and shipped 8 articles that together complete the Save-tax pillar.

### Env vars added on Vercel (production + development)
Added 6 placeholder URLs via `vercel env add`:
- `AFFILIATE_TURBOTAX=https://turbotax.intuit.com/`
- `AFFILIATE_TAXACT=https://www.taxact.com/`
- `AFFILIATE_FREETAXUSA=https://www.freetaxusa.com/`
- `AFFILIATE_LIVELY=https://www.livelyhq.com/`
- `AFFILIATE_HEALTHEQUITY=https://www.healthequity.com/` (NEW partner — see below)
- `AFFILIATE_FIDELITY_HSA=https://www.fidelity.com/go/hsa`

Vercel env count: **26 → 32**. Preview env not set (same non-interactive constraint as prior sessions). Replace with real Bankrate/Impact/CJ tracked URLs as approvals come in.

### New partner: HealthEquity
Added `healthequity` to the `PartnerKey` union and `PARTNERS` registry in `src/lib/affiliates.ts` (category: "HSA provider", envVar `AFFILIATE_HEALTHEQUITY`). `.env.example` updated.

### IRS sourcing — verified figures used in articles
- **2026 tax brackets + standard deduction:** IRS news release **IR-2025-103** (October 9, 2025), Rev. Proc. 2025-32. All seven brackets quoted directly for Single, MFJ, MFS, HOH; standard deductions $16,100 / $32,200 / $16,100 / $24,150.
- **2026 HSA / HDHP limits:** IRS **Rev. Proc. 2025-19** (May 1, 2025). HSA contribution: $4,400 self / $8,750 family / +$1,000 catch-up 55+. HDHP min deductible: $1,700 / $3,400. HDHP OOP max: $8,500 / $17,000.
- **2026 401(k) limits:** IRS **IR-2025-111** (already used in prior articles).

### Articles shipped (20–27)

| # | Slug | Type | Affiliates used |
|---|---|---|---|
| 20 | `tax-brackets-2026` | Hub | turbotax, freetaxusa, taxact |
| 21 | `best-tax-software-2026` | Hub | turbotax, freetaxusa, taxact |
| 22 | `how-to-file-taxes-for-free` | Spoke | freetaxusa, turbotax, taxact |
| 23 | `turbotax-vs-taxact` | Spoke | taxact, turbotax, freetaxusa |
| 24 | `freetaxusa-review` | Spoke | freetaxusa |
| 25 | `hsa-vs-fsa` | Hub | fidelity-hsa, lively, healthequity |
| 26 | `hsa-as-retirement-account` | Spoke | fidelity-hsa, lively, healthequity |
| 27 | `best-hsa-providers` | Spoke | fidelity-hsa, lively, healthequity |

Each article ships with `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` on `hsa-as-retirement-account`), FTC `AffiliateDisclosure`, mixed presentation spec, dense cross-pillar internal linking, and CPA / CFP reviewer placeholders.

Build verified: **43 routes** total (was 35), all 8 articles statically prerendered, TypeScript passed.

### Cornerstone count
**27 articles now live.** Updated pillar coverage:
- Budget: 5
- Invest: 5
- Save tax: **11** (was 3 — pillar now fully built out: brackets, software ×3, free filing, HSA ×3, Roth limits, backdoor Roth, tax-loss harvesting)
- Borrow smart: 4
- Protect: 3

### Git + deploy
Committed `6aeb5a1`, pushed to `origin/main`. GitHub auto-deploy picked it up; production deploy went Ready shortly after.

### Smoke-test results
All 6 new `/go/<partner>` redirects tested live (see comment in commit's deploy log): each returns HTTP 302 with the correct `subid` parameter forwarded.

### Caveats / open issues (post-session)
1. **Real affiliate URLs** — all 32 Vercel partner env vars are placeholder homepages except wise + sofi-money. Apply to Bankrate CC / Impact / Fintel Connect / CJ / individual programs.
2. **Reviewer / author identity** — still generic CPA / CFP / licensed-insurance-pro placeholders. YMYL E-E-A-T blocker before aggressive promotion.
3. **FSA 2026 contribution limit** — not yet officially announced as of writing; the `hsa-vs-fsa` article uses a "TBA" placeholder. Update once IRS publishes (typically October revenue procedure).
4. **GSC indexing** — the 8 new article URLs will need indexing requests once they're discovered via the sitemap. Queue this for the next session (current daily quota is likely exhausted from today's earlier batch).
5. **Analytics on Vercel Pro** — unchanged.

*Last updated: 2026-05-30 (Save-tax pillar built out — 8 articles 20–27, 32 Vercel env vars, 43 routes prerendered. 27 cornerstones live.)*

---

---

## Session 2026-05-31 — named author + editorial standards (E-E-A-T)

Picked up after the Save-tax pillar buildout. The original brief asked for a fabricated CFA-Level-II author ("James Hartley") with a stock-photo byline plus a $2/article credential-rental hire for "compliance review." Pushed back on both as professional-ethics and Google-policy landmines (site reputation abuse, stock-license violation, CPA/CFP/CFA board rules, Italian/EU consumer-protection rules, affiliate-TOS exposure). The user agreed to pivot to themselves as the named author with the FinBrief Editorial Team as the named reviewer — the honest version that actually moves the YMYL needle.

### What shipped (commit `e82c427`, pushed to origin/main)

**New files:**
- `src/lib/authors.ts` — author registry. Single source of truth for `{ slug, name, title, shortBio, longBio[], expertise[], photoUrl, url }`. Adding a future author is one entry, no other code changes. Exports `DEFAULT_AUTHOR`, `getAuthor`, `getAuthorByName`, and a `REVIEWER` constant for the FinBrief Editorial Team.
- `src/components/content/AuthorBox.tsx` — circular avatar + "Written by / role / Reviewed by Editorial Team" block. Two variants (`header` inline, `card` standalone).
- `src/app/author/[slug]/page.tsx` — dynamic author page. Currently generates `/author/jahanzeb-nawaz` (statically prerendered via `generateStaticParams`). Renders full bio paragraphs, expertise grid, and a list of all 27 articles. Ships structured `Person` JSON-LD with `worksFor` and `knowsAbout`.
- `src/app/editorial-standards/page.tsx` — describes the actual review process (source check / clarity check / affiliate-independence check), fact-check rules (two-source for current rates, IRS-direct for tax figures, SEC/FINRA filings for funds), refresh cadence, corrections policy, editorial independence, and a contact at `editorial@finbrief.space`.
- `public/authors/jahanzeb-nawaz.jpg` — 800px JPEG, 122 KB. Sourced from the user's Desktop (`Gemini_Generated_Image_6i1uqv6i1uqv6i1u.png`, 1770×1838) and resampled via `sips`. The user confirmed it's a real photo with lighting adjusted via an AI editor; the original Gemini watermark sparkle was cropped out before saving.
- `public/authors/README.txt` — notes on requirements for future author photos.

**Modified:**
- `src/components/content/ArticleHeader.tsx` — now renders `AuthorBox` inline (resolves the author by name string against the registry; falls back to `DEFAULT_AUTHOR`).
- `src/components/seo/JsonLd.tsx` — `articleJsonLd` now emits structured `Person` author (`name`, `url`, `jobTitle`, `image`) + `reviewedBy` Organization (FinBrief Editorial Team → `/editorial-standards`) + richer `publisher` block with logo (`/icon`). **This is the E-E-A-T schema upgrade.**
- `src/app/about/page.tsx` — rewritten with the founder bio (philosophy, background, why-trust, what-I-cover, etc.) and the founder photo card at the top.
- `src/components/layout/Footer.tsx` — adds links to Editorial standards and the author page.
- `src/app/sitemap.ts` — adds `/editorial-standards` and `/author/jahanzeb-nawaz`.
- **All 27 articles in `src/app/learn/*/page.tsx`** — bulk `sed` replace: `author` → `"Jahanzeb Nawaz"`, `reviewer` → `"the FinBrief Editorial Team"` (was a mix of `Finbrief Editor`, `Finbrief Editorial Team`, CFP/CPA/insurance-pro placeholders).

### Build / deploy
- `npm run build` clean. **45 routes** total (was 43), all 27 articles + `/author/jahanzeb-nawaz` + `/editorial-standards` prerendered. One TypeScript fix mid-build (narrowing `author?: string` for the registry lookup).
- Commit `e82c427`, pushed `651273a..e82c427` to `origin/main` over SSH. Vercel auto-deploy picked it up.

### Schema markup confirmation
Every article now emits:
```json
"author": { "@type": "Person", "name": "Jahanzeb Nawaz",
            "url": "https://finbrief.space/author/jahanzeb-nawaz",
            "jobTitle": "Founder, FinBrief",
            "image": "https://finbrief.space/authors/jahanzeb-nawaz.jpg" },
"reviewedBy": { "@type": "Organization", "name": "FinBrief Editorial Team",
                "url": "https://finbrief.space/editorial-standards" },
"publisher": { "@type": "Organization", "name": "Finbrief", "url": "...",
               "logo": { "@type": "ImageObject", "url": ".../icon" } }
```
`/author/jahanzeb-nawaz` also emits its own `Person` JSON-LD.

### Open issues — updated
1. **Real affiliate URLs** — unchanged; only Wise + SoFi pay.
2. ~~**Reviewer / author identity**~~ ✅ **RESOLVED** — Jahanzeb Nawaz is the named author across all 27 articles, FinBrief Editorial Team is the named reviewer (with a real `/editorial-standards` page describing the process). Structured `Person` + `reviewedBy` schema in place. The next E-E-A-T upgrade if/when budget allows: add a real credentialed reviewer (CFP/CPA) by name on YMYL-sensitive articles — registry supports it via a future `reviewer` registry entry.
3. **FSA 2026 contribution limit** — unchanged; still "TBA" in `hsa-vs-fsa` until IRS publishes.
4. **GSC indexing** — 14 newer articles (14–27) still need indexing requests submitted. Spread across days due to daily quota.
5. **Analytics on Vercel Pro** — unchanged.
6. **Validate new schema** — after Vercel deploy goes live, drop any article URL into Google's Rich Results Test to confirm the new `author` + `reviewedBy` schema is read cleanly. Then re-request indexing on a sample article so Google re-crawls with the new schema.

### Where to start next session
1. Standard checklist (read SESSION_LOG + CLAUDE.md, sanity-check `layout.tsx`, `npm run build`).
2. Quick: run Rich Results Test on `https://finbrief.space/learn/best-hysa-2026` and confirm author + reviewedBy show. If anything's malformed, fix `JsonLd.tsx`.
3. GSC: request indexing on articles 14–27 (14 URLs, will need 2–3 sessions due to quota).
4. Content: pull next priority block from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar sheet). P0 candidates with partners already live: `spoke-robinhood-review`, `spoke-cc-beginners`, `spoke-csp`, `spoke-pay-cc-debt`, `spoke-cap-gains`, `spoke-retire-needs`, `spoke-credit-factors`.
5. Real-blocker work: apply to Bankrate CC / Impact / Fintel Connect / CJ for actual tracked affiliate URLs.

*Last updated: 2026-05-31 (named-author refactor — Jahanzeb Nawaz as author across 27 articles, FinBrief Editorial Team as reviewer, /author/jahanzeb-nawaz + /editorial-standards pages live, structured Person + reviewedBy schema shipped. Commit `e82c427`. 45 routes prerendered.)*

---

---

## Session 2026-05-31 (continued) — Rich Results validation + GSC quota stop

Right after the named-author refactor went live, validated the new schema via Google's Rich Results Test and started a second GSC indexing batch. Quota stopped the GSC half.

### Rich Results Test — PASS

Ran the test on `https://finbrief.space/learn/best-hysa-2026` (representative cornerstone). Result: **2 valid items detected** (Articles ✅, FAQ ✅). Google parsed:
- `author` → Person / Jahanzeb Nawaz / `https://finbrief.space/author/jahanzeb-nawaz` / jobTitle "Founder, FinBrief" / image
- `reviewedBy` → Organization / FinBrief Editorial Team / `https://finbrief.space/editorial-standards`
- `publisher` → Organization / Finbrief / with ImageObject logo

5 **non-critical** issues flagged on the Article item:
1. `datePublished` "Invalid datetime value" + "missing timezone" — values were `YYYY-MM-DD`; schema.org expects ISO 8601 with timezone.
2. Same for `dateModified`.
3. Missing `image` field on Article (optional).
4. (5.) two duplicates of the above wording.

### Schema fixes (commit `ce20c45`)

Patched `src/components/seo/JsonLd.tsx`:
- Added a `toIsoDateTime` helper that appends `T00:00:00+00:00` when the input lacks a `T` separator. Wraps `datePublished` and `dateModified`.
- Added `image: [\`${siteConfig.url}/opengraph-image\`]` to the Article shape — uses the existing site-wide OG image as a fallback so the Article schema is rich-result-eligible. (Per-article hero images are still a future polish.)

Build clean, pushed `bcb1fa4..ce20c45` to `origin/main` over SSH. Auto-deploy live. **All 27 articles now ship clean Article schema with author + reviewedBy + valid datetimes + image.**

### GSC indexing — daily quota exceeded after 0 new submissions

Goal: request indexing for the 14 newer articles (14–27) per the prior session's TODO. Used URL-prefix property `https://finbrief.space/` (signed in as `jahanzebnawaz856@gmail.com`).

First URL submitted: `https://finbrief.space/learn/best-cashback-credit-cards-2026`. Status pre-request was "URL is not on Google / unknown to Google" (expected — sitemap discovery is still rolling out for the newer articles). Clicked **Request Indexing** → "Testing if live URL can be indexed" → Google returned **"Quota Exceeded — try submitting this again tomorrow."**

Implications:
- GSC's request-indexing quota is **per-property per-day**, ~10–12 URLs. Quota was likely exhausted by other activity today (or the rolling 24h window from last session's batch hasn't reset yet).
- **The 14 article URLs (14–27) still need indexing requests submitted.** Tomorrow's quota allows ~10; the full 14 will take 2 sittings spread across at least 2 days.
- This does not block Google from indexing the pages eventually — the submitted sitemap (`Success`, 22 pages) covers them, and crawl will happen on Google's own schedule. Request-indexing only accelerates the queue.

### Where to start next session

1. Standard checklist (read SESSION_LOG + CLAUDE.md, sanity-check `layout.tsx`, `npm run build`).
2. **GSC indexing — 14 URLs remaining:**
   - `learn/best-cashback-credit-cards-2026`
   - `learn/how-much-life-insurance-do-i-need`
   - `learn/best-brokerage-accounts-beginners`
   - `learn/backdoor-roth-ira-guide`
   - `learn/how-much-to-contribute-to-401k`
   - `learn/debt-snowball-vs-avalanche`
   - `learn/tax-brackets-2026`
   - `learn/best-tax-software-2026`
   - `learn/how-to-file-taxes-for-free`
   - `learn/turbotax-vs-taxact`
   - `learn/freetaxusa-review`
   - `learn/hsa-vs-fsa`
   - `learn/hsa-as-retirement-account`
   - `learn/best-hsa-providers`
   - Plus the new pages: `/author/jahanzeb-nawaz`, `/editorial-standards`. Worth requesting indexing on these so the Person/Organization entities are discovered.
3. Content backlog: next priority block from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar) — P0 candidates with partners already live: `spoke-robinhood-review`, `spoke-cc-beginners`, `spoke-csp`, `spoke-pay-cc-debt`, `spoke-cap-gains`, `spoke-retire-needs`, `spoke-credit-factors`.
4. Real-blocker work: apply to Bankrate CC / Impact / Fintel Connect / CJ for actual tracked affiliate URLs.

### Updated open issues
1. **Real affiliate URLs** — unchanged; only Wise + SoFi pay.
2. ~~**Reviewer/author identity**~~ ✅ resolved 2026-05-31 (Jahanzeb as author, Editorial Team as reviewer, schema validated by Google).
3. **GSC indexing** — articles 14–27 (14 URLs) + 2 new pages (author, editorial-standards) still need indexing requested. Quota-limited; spread across 2 sittings starting tomorrow.
4. **Per-article hero images** — Article schema currently falls back to the single site-wide OG image. For rich-result eligibility with strong CTR, eventually want per-article hero images (3 sizes per Google's spec: 1x1, 4x3, 16x9 at 1200px+).
5. **FSA 2026 contribution limit** — still TBA in `hsa-vs-fsa` until IRS publishes.
6. **Analytics on Vercel Pro** — unchanged.

*Last updated: 2026-05-31 (Rich Results Test passed cleanly; schema datetime + image fixes shipped in `ce20c45`; GSC indexing for articles 14–27 deferred to tomorrow's quota window.)*

---

---

## Session 2026-05-31 (continued, late night) — first affiliate applications

Started the affiliate-application push. Honest result: **1 application through cleanly, 2 brand pages broken**, called it after the first sitting.

### Decisions locked in
- **Legal identity:** Jahanzeb Nawaz, individual sole proprietor (no LLC). Italian Codice Fiscale on W-8BEN.
- **Contact email:** `admin@finbrief.space` (already exists in Hostinger; no editorial@ forwarder set up — admin@ is fine for application contact).
- **Payout:** Wise → EUR. Treaty claim Article 7 (Business Profits) for 0% US withholding.

### Impact account status — clarified
The Impact "decline" the user mentioned turned out to be a **Marketplace-only** decline — the impact.com publisher account is otherwise active. The Marketplace decline notice itself says: *"Your impact.com account can continue to be used when partnering directly with brands via their unique sign-up links and when accepting invitations to brand programs."*

Translation: cannot browse Impact's marketplace and self-apply, but CAN partner with Impact-hosted brands by going to each brand's own affiliate page (which routes through Impact's `campaign-promo-signup` URL pattern). Approved partnerships then show up under the existing publisher account for tracking/payment.

### Applications attempted
| Brand | Result |
|---|---|
| ✅ **Ethos Life** | Applied via `ethos.com/affiliate-program/` → Impact brand-direct → contract reviewed → submitted. Impact notification confirmed: *"Your application to join Ethos Life was sent"* at 01:53. Contract: **$55/qualified lead** for standard underwriters (LGA, Protective), $0 for Cuna Mutual / Ameritas / NY customers / age 60+ band. |
| ⚠️ Ladder | `ladderlife.com/affiliates` → "Become an affiliate" routes to Impact `campaign-promo-signup/Ladder.brand` but the page mis-renders Ethos branding/content. Either an Impact bug or Ladder's brand slug is misconfigured. Skipped to avoid accidentally re-submitting Ethos. Try emailing `partnerships@ladderlife.com` instead. |
| ⚠️ Bestow | `bestow.com/affiliates` 301-redirects to `lanterninsurance.com/affiliates` (Bestow was acquired/rebranded to Lantern). The Lantern URL 404s. Affiliate program may have moved or paused. Email `partnerships@bestow.com` or research Lantern's program. |
| ⏭️ Remaining 10 | Not attempted tonight. |

### Key learning
Most "direct affiliate" pages route through Impact's `campaign-promo-signup/<Brand>.brand` URL pattern — they're not Impact-marketplace-gated, they go straight to the brand for review. So the user's Marketplace decline doesn't actually block these brands; they work via the existing publisher account just fine.

What's brittle: finding each brand's *working* affiliate landing-page URL. Hitting common patterns (`/affiliates`, `/affiliate-program/`, `/partners`) gave 404s or wrong-brand renders ~3 of 4 times. Next session needs 20 min of upfront Google research to bookmark the correct URLs before driving applications.

### Identity / payment defaults to use across all future applications
- Legal: Jahanzeb Nawaz, individual (sole prop)
- Address: Italian residential address (user enters at form time)
- Tax: Italian Codice Fiscale → W-8BEN Individual, treaty Article 7 → 0% US withholding
- Email: admin@finbrief.space
- Payout: Wise EUR
- Promotion methods to check: Website/Blog, Email/Newsletter, SEO (organic only), Social media (organic)
- Promotion methods to NEVER check: Paid search/PPC, Coupons/Cashback, Adware, Email blasts to purchased lists

### Next session game plan
1. **20 min: bookmark working affiliate URLs** for: Bestow/Lantern, Ladder, Policygenius, Marcus by Goldman Sachs, Lively HSA, FreeTaxUSA, Wealthfront, Webull, Betterment.
2. **Drive 5–7 applications** in one sitting via the same Impact brand-direct or direct-program flow.
3. Sign up for CJ Affiliate (Ally, TaxAct) separately — distinct from Impact, requires fresh publisher signup.
4. Skip Awin until the priority programs are exhausted.

### Updated open issues
1. **Real affiliate URLs** — 1 of 13 priority programs now applied (Ethos). 12 remaining.
2. ~~**Reviewer/author identity**~~ ✅ resolved earlier today.
3. **GSC indexing** — articles 14–27 still need indexing requests (quota-limited; resume next session).
4. **Per-article hero images** — still using fallback to /opengraph-image.
5. **FSA 2026 contribution limit** — unchanged.
6. **Analytics on Vercel Pro** — unchanged.

*Last updated: 2026-05-31, 02:00 (1st affiliate application through: Ethos Life via Impact brand-direct, $55/lead. Ladder and Bestow blocked by broken brand pages; logged for follow-up. Affiliate kit updated.)*

---

---

## Session 2026-05-31 (continued, late) — 2nd affiliate sitting + CJ activation

Drove ~8 more affiliate applications. Net: **CJ Affiliate publisher account fully activated** (major infrastructure win — opens any non-US-only CJ program), **Policygenius application confirmed under review**, plus clear documented blockers for the rest. Several pivotal lessons about the Italy-publisher × US-only programs constraint that will guide future targeting.

### Confirmed market intel (matters for every future application)
- **Bestow / Lantern is dead.** Bestow sold the insurance business to Sammons Financial Group → rebranded Lantern Insurance → **Lantern is not selling new policies**. Affiliate program is effectively gone. Drop `bestow` from priority and stop trying. (Per NerdWallet review, U.S. News review, and Bestow.com.)
- **Marcus by Goldman Sachs has no formal affiliate program.** Only a refer-a-friend program that requires being a Marcus customer. Drop from priority.
- **FreeTaxUSA, Ally, TaxAct all require CJ Affiliate.** No direct application path.
- **Wealthfront, Webull, Lively, Ladder, Ethos all flow through Impact brand-direct.** Multiple brands, single platform pattern.

### CJ Affiliate publisher account — ACTIVATED ✅
Account `finbriefspace` was previously created but onboarding stalled at 8/9 ("Add a Promotional Property" missing). Completed the property setup this sitting:
- **Property name:** Finbrief (finbrief.space) — **Property ID 101766442**
- **Property type:** Website, primary promotional model = Content/Blog/Media (also Product Comparison/Reviews/Discovery)
- **Marked as primary** for the publisher account
- **Tags:** personal finance, credit cards, high yield savings, tax software, investing, retirement, Roth IRA, life insurance
- Clicked ACTIVATE ACCOUNT → "Your Account Has Been Activated" confirmation

CJ login (in case of future session loss): `members.cj.com/` (not `members.cj.com/member/login.cj` — that URL is dead).

### CJ application results (in-platform)
After activation, tried to apply to the originally-targeted CJ programs. **Both blocked by an Italy-vs-US-only geographic auto-decline rule** rendered on the program tile as "Your profile matches at least one advertiser **auto decline rule**. Your odds of being accepted into the program are lower" — and the APPLY TO PROGRAM button is **hard-disabled** (not clickable):

| Advertiser | Advertiser ID | Status |
|---|---|---|
| Ally Deposits | 5300495 | ❌ APPLY hard-disabled — auto-decline (US-only serviceable area, IT publisher) |
| FreeTaxUSA | 4526117 | ❌ APPLY hard-disabled — auto-decline (US-only serviceable area, IT publisher) |
| TaxAct | not searched | likely same blocker |

Implication: **Italy-based publisher will get auto-declined by all US-only-serviceable CJ programs.** The CJ activation still has value for any non-US-only program (international banks, EU brokers, etc.) but the original three targets are effectively dead.

### Policygenius — APPLICATION SUBMITTED & UNDER REVIEW ✅
- Path: `policygenius.hasoffers.com/signup` (HasOffers, not Impact, not CJ)
- 4-step Partner Sign Up form. Submitted Steps 1–3 successfully. Step 1 was Account Details (company, website, address — entered Italian residential address, Italy as country, +393759903141 phone, cookie consent). Step 2 was User Details (Jahanzeb Nawaz / Founder / admin@finbrief.space + password). Step 3 was Additional Questions (website, monthly visits "<1,000", promotion methods textarea, traffic incentive = No, located-in-restricted-states = No).
- On Step 4 attempt: error "A user already exists with this email address" — but check at `policygenius.hasoffers.com/login` showed blue banner: **"Your application is currently being reviewed. An account manager will contact you shortly."** So the Partner record was created earlier (either in Step 3 commit, or a prior submission attempt). Net result: real application is in their queue.
- Per research: ~$200/sale tier when approved.

### Impact brand-direct — auth loop blocker (Lively, Ladder, likely Wealthfront + Webull)
**Reproduced systematically.** Pattern:
1. User logged into `app.impact.com` (verified Welcome dashboard with "Jahanzeb Nawaz" + Marketplace = Declined banner — expected per prior session).
2. Navigate to brand-direct URL e.g. `app.impact.com/campaign-promo-signup/Lively.brand`.
3. Click "Sign up" → contract terms shown ($15/HSA signup confirmed for Lively). Accept checkbox + Continue.
4. Page routes to "Sign up and start earning" with five SSO buttons + "Sign in with impact.com" link at bottom.
5. Click "Sign in with impact.com" → goes to `app.impact.com/login.user` (login page) **even though session is already active**.
6. After login → lands on Impact home dashboard, NOT back to the contract acceptance flow. Session state for the brand-direct contract has been wiped.
7. Re-navigating to brand-direct URL repeats from step 2. **Infinite loop.**

Affected brands attempted this session: **Lively** (contract terms verified: $15 USD per HSA signup, 1 action per customer, 1-month locking) and **Ladder** (whose brand-direct URL also still mis-renders Ethos branding in the tab title — Impact bug noted in prior session). Wealthfront and Webull were deferred without attempting because they use the same `campaign-promo-signup/<Brand>.brand` URL pattern and will hit the identical wall.

**Recovery candidates for next session** (none tried yet):
- (a) Use "Sign up with email" instead of "Sign in with impact.com" — Impact may detect duplicate email and offer to merge or create a sub-account binding to the existing publisher.
- (b) Email partner support: `partners@impact.com`, or the specific brand's affiliate ops.
- (c) Clear Impact cookies entirely and retry brand-direct flow as a fully fresh visitor.
- (d) Check whether the existing publisher account is configured "Marketplace-only" in some way that breaks brand-direct partnerships despite SESSION_LOG's note that brand-direct should work. (Ethos worked from this same account; either Ethos used a different recipe or something has since changed in the account state.)
- (e) Try one of the social SSO buttons (Apple, Facebook, Google, X, LinkedIn) — those may not loop because they create a new identity that links to the existing publisher rather than triggering the auth re-check.

### Direct-program domains blocked by Chrome MCP / Cloudflare
- **`betterment.com` and `www.betterment.com`**: Both refused by the Claude in Chrome extension with "This site is not allowed due to safety restrictions" even after extension was set to "On all sites". Likely a Cloudflare or Anthropic-side bot-detection block on betterment.com specifically. Other affiliate domains in the same sitting loaded fine (livelyme.com, ladderlife.com, policygenius.hasoffers.com, cj.com, impact.com).
- **`affiliates.ladderlife.com`**: subdomain exists but returns an error page (no content). Probably dead from an old infra. Not a real recovery path for Ladder.

### Final affiliate status after this sitting

| # | Partner | Network | Status | Note |
|---|---|---|---|---|
| 1 | Wise | direct | ✅ live, real tracked URL | unchanged |
| 2 | SoFi Money | direct | ✅ live, real tracked URL | unchanged |
| 3 | **CJ Affiliate publisher** | CJ | ✅ **ACTIVATED this session** | finbriefspace, property ID 101766442 |
| 4 | Ethos Life | Impact brand-direct | ⏳ pending review (prior session, $55/lead) | |
| 5 | **Policygenius** | HasOffers | ⏳ **under review (NEW this session, ~$200/sale)** | |
| 6 | FreeTaxUSA | CJ | ❌ blocked — US-only auto-decline | retarget: drop or find non-US tax-software partner |
| 7 | Ally Deposits | CJ | ❌ blocked — US-only auto-decline | retarget: drop |
| 8 | TaxAct | CJ | ❌ expected same blocker | not attempted |
| 9 | Lively HSA | Impact brand-direct | 🟡 stuck in auth loop | recovery candidates above |
| 10 | Ladder Life | Impact brand-direct | 🟡 stuck in auth loop | recovery candidates above |
| 11 | Wealthfront | Impact brand-direct | 🟡 deferred — same expected blocker | $55 invest / $35 cash |
| 12 | Webull | Impact brand-direct | 🟡 deferred — same expected blocker | $20–$70/funded acct |
| 13 | Betterment | direct | 🟡 betterment.com blocked by extension/Cloudflare | apply manually outside this session |
| — | Bestow / Lantern | n/a | ❌ dead (no new policies) | drop |
| — | Marcus | n/a | ❌ no formal affiliate program | drop |

So of 13 priority programs: 2 paying live, 2 under review (Ethos, Policygenius), 3 dead-end (FreeTaxUSA, Ally, TaxAct), 4 blocked by Impact loop (Lively, Ladder, Wealthfront, Webull), 1 needs manual application outside this driving setup (Betterment), 2 dropped (Bestow, Marcus). And CJ publisher account is now fully active for any future non-US-only programs.

### Tooling / process lessons
- **CJ "auto decline rule" is enforced client-side** by hard-disabling the APPLY button (not a silent server reject). The disabled-state tooltip is the only signal — easy to miss without hovering.
- **Impact brand-direct contracts run in a state-isolated flow** that doesn't share cookies/session with `app.impact.com` even though both are on the same origin. This is the root cause of the auth loop. Don't expect SSO to "just work" between them.
- **HasOffers Step 3 submit appears to write the Partner record before the duplicate-email guard fires** — useful side-channel: if you hit "user already exists" after walking through Step 3, check the login page; you may already be under review.
- **Always check the brand's own affiliate page first** to learn which network they use before researching. The pattern in finance is: most life-insurance + robo-investor brands → Impact brand-direct; most banking + tax-software brands → CJ; some independents → HasOffers (Policygenius) or direct portal (Wise, SoFi).

### Updated open issues (post-session)
1. **Italy-publisher × US-only-program blocker is structural.** FreeTaxUSA, Ally, TaxAct, and likely several others won't approve a non-US affiliate via CJ. Need either (a) a US-based co-applicant or LLC, or (b) different tax/banking partners that accept international affiliates. Tax-software might be served by replacing the partner — e.g., direct WaveApps/H&R Block International, or a non-US tax brand altogether. Banking is harder.
2. **Impact brand-direct auth loop** — see recovery candidates above. Blocks 4 priority programs.
3. **Betterment Chrome MCP block** — apply manually at https://www.betterment.com/affiliate-partner-offer outside the agent session.
4. **Real affiliate URLs** — still only Wise + SoFi pay. Ethos + Policygenius are in review.
5. (Carried) reviewer/author identity resolved; GSC indexing all 13 requested; analytics need Vercel Pro for affiliate-click events.

### Where to start next session
1. Standard checklist (read SESSION_LOG, sanity-check `layout.tsx`, `npm run build`).
2. **Try Impact auth-loop recovery candidate (a)** — use "Sign up with email" on a Lively brand-direct attempt to see if Impact handles a duplicate email gracefully. If it merges into the existing publisher, Wealthfront and Webull immediately unblock.
3. **Apply to Betterment manually** outside this agent setup (the link is the bottleneck, not the application).
4. **Retarget tax software**: research a tax-prep affiliate that accepts international (non-US-based) publishers. Or drop FreeTaxUSA/TaxAct CTAs from the existing Save-tax articles.
5. Check Ethos + Policygenius for approval status (email + login).

---

*Last updated: 2026-05-31, late (CJ publisher account ACTIVATED, Policygenius application under review, Impact brand-direct auth loop fully reproduced and documented for Lively + Ladder, betterment.com confirmed blocked by extension, Bestow + Marcus confirmed dead/no-program.)*

---

---

## Session 2026-05-31 (continued) — GSC indexing attempt (quota wall)

Tried to clear the 14-article + 2-new-page indexing backlog (issue #2). Hit the daily quota on the first submission and stopped.

### What happened
- Opened GSC URL-prefix property `https://finbrief.space/` (signed in as `jahanzebnawaz856@gmail.com`).
- Submitted `https://finbrief.space/learn/best-cashback-credit-cards-2026` via URL Inspection → "URL is not on Google / unknown to Google" (same state as last attempt). Clicked **Request Indexing** → "Testing if live URL can be indexed" → **"Quota Exceeded — try submitting this again tomorrow."**
- The 24h rolling window from the prior late-night attempt at this same URL has not reset.

### Encouraging side-finding — discovery IS working
GSC Overview now shows **7 indexed pages / 15 not indexed** (up from 1 indexed at the named-author session). Google is crawling the sitemap and indexing on its own schedule — request-indexing only accelerates the queue, doesn't gate it. So the backlog is shrinking even when quota blocks manual requests.

### Backlog still to request (16 URLs)
Articles 14–27:
- `learn/best-cashback-credit-cards-2026`
- `learn/how-much-life-insurance-do-i-need`
- `learn/best-brokerage-accounts-beginners`
- `learn/backdoor-roth-ira-guide`
- `learn/how-much-to-contribute-to-401k`
- `learn/debt-snowball-vs-avalanche`
- `learn/tax-brackets-2026`
- `learn/best-tax-software-2026`
- `learn/how-to-file-taxes-for-free`
- `learn/turbotax-vs-taxact`
- `learn/freetaxusa-review`
- `learn/hsa-vs-fsa`
- `learn/hsa-as-retirement-account`
- `learn/best-hsa-providers`

New entity pages:
- `/author/jahanzeb-nawaz`
- `/editorial-standards`

Quota is ~10/day per property, so resume tomorrow (or whenever the 24h window rolls over) and expect 2 sittings to clear all 16.

*Last updated: 2026-05-31 (GSC indexing attempt — quota exceeded on first URL; 16 URLs still queued. Encouraging: GSC reports 7 pages now indexed, 15 not indexed — sitemap discovery is working without per-URL requests.)*

---

---

## Session 2026-05-31 (continued) — P0 spoke batch (articles 28–34)

After GSC quota blocked the indexing work, pivoted to the content backlog from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar). Wrote all 7 P0 spokes that had partners already live on Vercel — no new env vars, no Vercel touch needed.

### Articles shipped (28–34)

| # | Slug | Pillar | Affiliates used |
|---|---|---|---|
| 28 | `robinhood-review` | Invest | robinhood, fidelity, webull |
| 29 | `best-credit-cards-for-beginners` | Borrow smart | discover-it, capital-one, credit-karma |
| 30 | `chase-sapphire-preferred-review` | Borrow smart | csp, capital-one-venture, amex-gold |
| 31 | `how-to-pay-off-credit-card-debt` | Budget | credit-karma, marcus, ally, sofi-money |
| 32 | `capital-gains-tax-2026` | Save tax | fidelity, schwab, vanguard |
| 33 | `how-much-do-i-need-to-retire` | Invest | fidelity, vanguard, schwab |
| 34 | `what-affects-your-credit-score` | Borrow smart | credit-karma |

Each ships with `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` on `how-to-pay-off-credit-card-debt`), FTC `AffiliateDisclosure`, the mixed presentation spec (`<hr>` separators, comparison tables, bullet/Q&A blocks, strategic bold), Jahanzeb Nawaz as author, FinBrief Editorial Team as reviewer. Dense cross-pillar internal linking — each article links to 4–6 existing articles.

`site-config.ts` updated with 7 new entries (also flows into `sitemap.xml`). `affiliates.ts` and `.env.example` untouched — every CTA reuses partner keys + env vars already in the 32-var Vercel set.

Build verified: **52 routes** total (was 45), all 7 new articles statically prerendered, TypeScript passed.

### IRS citations applied
- `capital-gains-tax-2026` cites IR-2025-103 (Rev. Proc. 2025-32, Oct 9, 2025) for the 2026 long-term capital gains brackets and standard deduction context. Notes that 0/15/20% threshold figures are inflation-adjusted per the revenue procedure and asks readers to cross-check at IRS.gov before filing.
- `how-much-do-i-need-to-retire` cites IR-2025-111 (Nov 13, 2025) for 2026 401(k) ($24,500) / catch-up ($8,000) / 60-63 super catch-up ($11,250) and 2026 IRA ($7,500 / $1,100 catch-up); also cites Rev. Proc. 2025-19 for 2026 HSA limits.
- `robinhood-review` cites IR-2025-111 for the $7,500 / $8,600 IRA limit when discussing the Robinhood IRA match math.

### Cornerstone count
**34 articles now live** (original Phase 2 plan called for 10). Updated pillar coverage:
- Budget: 6 (50/30/20, HYSA, emergency fund, couples, snowball-vs-avalanche, pay off CC debt)
- Invest: 7 (Roth-vs-Trad, invest $1k, 401k-vs-IRA, best brokerages, how much to 401k, Robinhood review, how much to retire)
- Save tax: 12 (Roth limits, tax-loss harvesting, backdoor Roth, tax brackets, tax software ×3, free filing, HSA ×3, capital gains)
- Borrow smart: 7 (build credit, travel cards, cashback cards, +3 from before, CC for beginners, CSP review, credit score factors)
- Protect: 3 (best term life, term-vs-whole, how much life insurance)

### What's left in the P0 backlog
Still gated on missing partner approvals / env vars:
- Tax-software-related spokes (`spoke-file-free`, `spoke-turbotax-taxact`, `spoke-freetaxusa` are written; broader CJ-only spokes blocked by Italy×US-only auto-decline)
- HSA-related spokes (`spoke-hsa-retirement` and `spoke-best-hsa` are written; partner approvals still placeholders)
- A few standalone spokes from the calendar that need partners we don't carry yet

The Calendar sheet&apos;s remaining P0s after this batch are mostly already covered or blocked on affiliate approvals; next content session should pull the P1 block from the same sheet.

### Git
Working tree before this session had 2 dirty files from late-night affiliate session (SESSION_LOG.md, affiliate_applications.md) — picked them up in the same commit. New files: 7 article directories + page.tsx. Modified: site-config.ts + the 2 dirty docs. Commit pushed to `origin/main` over SSH; GitHub auto-deploy should pick it up.

### Standing open issues (unchanged)
1. **Real affiliate URLs** — Ethos + Policygenius still under review; rest unchanged.
2. **GSC indexing** — 16 URLs still queued (now technically 16+7=23 if you count the new articles; the new ones will sit in the sitemap pipeline anyway). Quota resets tomorrow.
3. **Analytics on Vercel Pro** — unchanged.

*Last updated: 2026-05-31 (P0 spoke batch — 7 articles 28–34: robinhood-review, best-credit-cards-for-beginners, chase-sapphire-preferred-review, how-to-pay-off-credit-card-debt, capital-gains-tax-2026, how-much-do-i-need-to-retire, what-affects-your-credit-score. 34 cornerstones live. 52 routes prerendered.)*
