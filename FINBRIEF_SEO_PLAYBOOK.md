# FinBrief SEO & Traffic Playbook
Last updated: 2026-06-15
Status tracking: [ ] = not started | [~] = in progress | [x] = done

## Progress as of 2026-06-15

Closed in the 2026-06-11 session (8 commits, 5 new routes):
- [x] Critical #1 — 5 pillar hub pages
- [x] Critical #2 — 3 calculator/comparison anchor pages (HYSA leaderboard, tax-bracket calc embed, new Roth contribution calc)
- [x] Tech SEO — BreadcrumbList JSON-LD on all 92 articles
- [x] Content & Architecture — RelatedByPillar footer on all 92 articles
- [x] Tech SEO — top-20 title rewrites (16 done; 4 already-strong skipped)
- [x] Tech SEO — universal first-paragraph audit + 2 missing leads fixed (7 long-lead flags intentionally deferred per `LEAD_AUDIT.md`)

Confirmed in the 2026-06-15 session (no code commits):
- [x] GSC — sitemap re-anchor worked: **discovered pages 22 → 108 ✅**
- [x] GSC — 20 high-priority URLs submitted (10 on 2026-06-11, 10 on 2026-06-12)
- [x] Newsletter cron — auto-fires confirmed clean Mon 2026-06-08 + Mon 2026-06-15
- [x] Article-refresh cron — first auto-fire confirmed Tue 2026-06-09 (11 flags / 6 articles, good signal-to-noise)
- [x] First manual newsletter publish to beehiiv (1 subscriber, expected for week 1)

Open critical/high-priority items remaining:
- [ ] **Critical #3 — bootstrap 5 inbound links** (HARO/Connectively/Featured.com signups; r/personalfinance wiki; Bogleheads). Highest-leverage remaining move on the playbook. ~3h in user's own browser. **Recommended for next session.**
- [ ] Editorial pass on 11 article-refresh flags from 2026-06-09 digest (~45 min)
- [ ] FlexOffers status check (review window closed 2026-06-10)
- [ ] Tech SEO — universal first-paragraph rewrite for the 7 long-lead deferrals (only if GSC shows snippet underperformance after a month)
- [ ] All items below this header in this file remain valid; this header is just a progress marker

> Derived from the comprehensive SEO/traffic audit conducted 2026-06-09. Reflects actual repo state: 92 articles shipped, 5 tools, JSON-LD already present, named author Jahanzeb Nawaz, GSC verified. Companion to `SESSION_LOG.md` and `CLAUDE.md`.

> **Framing correction baked in:** the current sub-10-visitors/day floor is mostly an *indexation* problem (GSC last reported 7/15 indexed of 92 articles), not a content-volume or technical problem. Prioritize accordingly.

---

## 🔴 CRITICAL PRIORITY (do these first, highest impact)

- [ ] **Ship 5 pillar hub pages**
  - What: Create `/learn/budget`, `/learn/invest`, `/learn/save-tax`, `/learn/borrow-smart`, `/learn/protect` — each a Server Component reading from `site-config.ts`, grouping articles by `pillar` field, rendering as cluster sections (1,500–2,000 words each: pillar intro → cluster headings → linked spoke articles → embedded relevant tool → FAQ).
  - Why: From Google's POV the site is currently 92 floating spokes pointing at each other randomly. There's no signal that "these 26 articles together are FinBrief's claim to expertise on taxes." Hub pages give Google clear topic clusters AND create 92×5 = 460 new internal links overnight — the cheapest indexation accelerant available. Single highest-leverage action.
  - How: Template at `src/app/learn/[pillar-slug]/page.tsx`. Server Component. Group `siteConfig.articles` by `pillar`. Render cluster sections with linked spoke articles. Embed the pillar's relevant tool (e.g. Budget hub → BudgetCalculator). Add FAQ block. Pillar slugs: `budget`, `invest`, `save-tax`, `borrow-smart`, `protect`.
  - File/location: `src/app/learn/budget/page.tsx`, `src/app/learn/invest/page.tsx`, `src/app/learn/save-tax/page.tsx`, `src/app/learn/borrow-smart/page.tsx`, `src/app/learn/protect/page.tsx` + updates to `src/app/sitemap.ts` to include them.
  - Effort: 1 day (4 hours)

- [ ] **Build comparison + calculator anchor pages for 3 highest-volume queries**
  - What: Wrap the existing calculators in keyword-targeted landing pages: (a) HYSA leaderboard with live rates, (b) tax-bracket calculator results page targeting `[year] tax brackets calculator`, (c) Roth IRA contribution-limit calculator.
  - Why: You already have the calculators — wrap them in keyword-targeted landing pages. Creates 3 ranking targets for "money keywords."
  - How: For each: new route under `/tools/` or `/learn/`, embed the existing tool component, surround with title-keyword-aligned H1, intro, methodology section, FAQ.
  - File/location: Reuses `src/components/tools/TaxBracketCalculator.tsx`, `src/components/tools/RothComparator.tsx`, plus new HYSA leaderboard component.
  - Effort: 2–3 days

- [ ] **Get 5 unique inbound links from easiest paths**
  - What: HARO/Connectively/Featured.com signups (respond to journalist queries with named-author quote) + 2 finance-subreddit value-first posts where your link is the proof + `/r/personalfinance` wiki suggestion path.
  - Why: Domain authority floor goes from 0 → submittable. Most cost-effective way for a new YMYL domain to bootstrap DA.
  - How: Sign up for HARO, Connectively, Featured.com, Qwoted as "Jahanzeb Nawaz, founder of FinBrief." Respond to 5 journalist queries per week on personal finance topics. ~5% response rate → 1 link/month from real news/blog sites. Separately, propose the 401(k) match calculator and budget calculator for inclusion in `/r/personalfinance` wiki.
  - File/location: External — no repo changes.
  - Effort: 3 hours/week ongoing

---

## 🟡 TECHNICAL SEO FIXES

### Indexation (Critical)

- [ ] **Solve the indexation gap**
  - What: GSC last reported 7 indexed / 15 not-indexed of 92 articles. Sitemap discovered only 22 pages but you have 110 routes. Google isn't crawling the rest.
  - Why: The single biggest blocker to traffic — content quality doesn't matter if Google can't see it.
  - How: (1) Ship pillar hubs (creates 460 new internal links, accelerates crawl). (2) Re-submit sitemap ping after hubs ship. (3) Continue manual GSC URL inspection submissions at ~10/day (per existing process documented in SESSION_LOG).
  - File/location: `src/app/sitemap.ts` already correct.
  - Effort: Ongoing; pillar hubs are the catalyst.

### Schema (Moderate)

- [ ] **Add BreadcrumbList JSON-LD to every article**
  - What: Missing schema. Currently have Article + FAQ + HowTo schema but no BreadcrumbList.
  - Why: Multiplies rich-result eligibility. Breadcrumb rich results show up in mobile SERPs as the navigation trail above the title.
  - How: Create helper, then add `<script type="application/ld+json">` to every article page.
  - Code to create at `src/components/seo/Breadcrumb.tsx`:
    ```tsx
    export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      };
    }
    ```
  - Then in every article page:
    ```tsx
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
      breadcrumbJsonLd([
        { name: "Home", url: siteConfig.url },
        { name: "Learn", url: `${siteConfig.url}/learn` },
        { name: pillar, url: `${siteConfig.url}/learn/${pillarSlug}` },
        { name: title, url: `${siteConfig.url}/learn/${slug}` },
      ])
    )}} />
    ```
  - File/location: `src/components/seo/Breadcrumb.tsx` (new); apply to all 92 `src/app/learn/<slug>/page.tsx`.
  - Effort: 30 min

- [ ] **Expand FAQ block to every article**
  - What: FAQ schema is present *where the article has a FAQ block* — currently not universal across all 92 articles.
  - Why: FAQ rich results increase SERP real estate and CTR.
  - How: Audit each article without a FAQ section; add a 4–6 question FAQ block at the bottom; the existing `faqJsonLd` helper will emit schema automatically.
  - File/location: All 92 `src/app/learn/<slug>/page.tsx` that lack `<FAQ>`.
  - Effort: 5–10 min per article × audited gap

### Meta / Titles / On-page (Moderate)

- [ ] **Rewrite top 20 article titles for CTR**
  - What: Meta titles are present per-article via Next `metadata` export but are descriptive, not click-optimized.
  - Why: CTR is a ranking signal and the cheapest lever once impressions arrive.
  - How: Use pattern `[Primary Keyword]: [Specific Benefit / Year / Number]`. Examples:
    - `best-hysa-2026` → `Best High-Yield Savings Accounts (June 2026) — Updated Weekly`
    - `tax-brackets-2026` → `2026 Federal Tax Brackets (Updated for 2025 Tax Year Filing)`
    - `roth-ira-vs-traditional-ira` → `Roth IRA vs Traditional IRA: Which Should You Choose in 2026?`
    - `how-to-budget-50-30-20` → `50/30/20 Budget Rule: A Realistic Example (With Calculator)`
    - `how-much-life-insurance-do-i-need` → `How Much Life Insurance Do I Need? DIME Formula + Calculator`
  - Update meta descriptions similarly — see `best-hysa-2026` example: "Compare the top 10 high-yield savings accounts in June 2026. APYs from 4.5%–5.25%, FDIC-insured, no monthly fees. Updated weekly with current rates."
  - File/location: `metadata` export at top of each article's `page.tsx`.
  - Effort: 1 hour for top 20

- [ ] **Universal first-paragraph answer rule**
  - What: Every article's first paragraph should give the answer in ≤ 2 sentences, then expand. Currently many articles preamble for 3–4 paragraphs before getting to the meat.
  - Why: Kills dwell-time and rich-snippet eligibility. Featured-snippet eligibility especially depends on a clean direct answer near the top.
  - How: Audit first paragraph of every article; rewrite if it doesn't directly answer the title question within 2 sentences.
  - File/location: All 92 `src/app/learn/<slug>/page.tsx`.
  - Effort: 2–5 min per article

### Verification (Minor)

- [ ] **Verify Core Web Vitals in GSC**
  - What: Likely fine (Next.js 15 + static prerender + dynamic OG via `@vercel/og`) but verify.
  - Why: CWV is a confirmed ranking signal.
  - How: GSC → Experience → Core Web Vitals report. If anything fails, it'll be LCP on `/learn/<slug>` due to OG image size — switch `og:image` to the 4×3 variant (smaller payload) in `metadata`.
  - File/location: `src/app/learn/<slug>/page.tsx` metadata if remediation needed.
  - Effort: 15 min check

- [ ] **Mobile Usability check**
  - What: Tailwind, container-prose 3xl, no JS-only nav. Assumed fine.
  - Why: Mobile-first indexing.
  - How: GSC Mobile Usability report — zero errors expected.
  - Effort: 5 min

- [ ] **Verify 404 returns HTTP 404, not 200**
  - What: `not-found.tsx` exists but Next sometimes serves 200 on App Router 404s.
  - Why: Wrong status codes cause indexation of non-pages.
  - How: `curl -I https://finbrief.space/non-existent-page` — should return `HTTP/2 404`.
  - File/location: `src/app/not-found.tsx`.
  - Effort: 5 min

- [ ] **Audit for accidental `noindex`**
  - What: Verify nothing accidentally noindexed.
  - Why: One misconfigured page can tank a cluster.
  - How: `curl -s https://finbrief.space/learn/best-hysa-2026 | grep -i noindex` (and spot-check a few others).
  - Effort: 5 min

- [ ] **Add Domain property in GSC alongside URL-prefix**
  - What: Currently have URL-prefix property `https://finbrief.space/`; add Domain property `finbrief.space`.
  - Why: Domain properties get richer data, capture all subdomains and protocols.
  - How: GSC → Add Property → Domain → `finbrief.space` → verify via DNS TXT (Hostinger DNS).
  - Effort: 15 min

### Confirmed OK (no action)

- ✅ `robots.txt` — allows `/`, disallows `/go/`, `/api/`, points to sitemap. `src/app/robots.ts` correct.
- ✅ `sitemap.xml` — includes home, /learn, /tools, /about, /editorial-standards, author page, all 5 tools, all 92 articles with per-article `lastModified`. `src/app/sitemap.ts` correct.
- ✅ Article schema — `articleJsonLd` with author, reviewer, datePublished, dateModified, image (3 ratios), publisher. Better than 90% of finance sites.
- ✅ HowTo schema — present on step-by-step articles.
- ✅ H1/H2/H3 structure — one H1 per article via `<ArticleHeader>`, body H2s with `<hr>` separators.
- ✅ Canonical URLs — defaults from Next metadata (self-canonical).
- ✅ HTTPS / www → root — www redirects 308 to root.

---

## 🟢 CONTENT & ARCHITECTURE

- [ ] **Cluster sub-hubs within pillars**
  - What: Tax pillar has ~26 articles — too big for one hub; split into `/learn/save-tax/iras-and-roth`, `/learn/save-tax/hsa`, `/learn/save-tax/filing`. Same for other large pillars where natural sub-clusters exist (Borrow Smart → `/learn/borrow-smart/credit-cards` collecting all 8 credit-card articles).
  - Why: Topical authority signals get diluted when one hub has 26 spokes. Sub-hubs build cleaner topic graphs Google can resolve.
  - How: Same template pattern as pillar hubs but at one level deeper. Generate from `site-config.ts` if articles get a `subCluster` field, or hard-code initial set.
  - File/location: `src/app/learn/save-tax/iras-and-roth/page.tsx`, etc.
  - Effort: 1 day for initial 6 sub-hubs

- [ ] **Glossary**
  - What: `/learn/glossary` — A–Z definitions of terms used across articles, each linking back to the canonical deep-dive.
  - Why: Cheap ranking for `[term] definition` queries (e.g. "what is a Roth IRA" snippets) and a massive internal-link sink. 200+ entries possible, each its own page.
  - How: Start with 50 entries (terms from CLAUDE.md acronym list + common terms across articles). Single page initially; expand to per-term pages later.
  - File/location: `src/app/learn/glossary/page.tsx`, eventually `src/app/learn/glossary/[term]/page.tsx`.
  - Effort: 1 day for v1 (50 entries)

- [ ] **"Last updated" surface visibility**
  - What: Currently in metadata; should be prominent in the article header for trust + freshness signals.
  - Why: User-visible recency dates increase CTR and dwell-time; help E-E-A-T signals for YMYL.
  - How: Add `Last updated: {formatDate(updatedAt)}` to `<ArticleHeader>` component near byline.
  - File/location: `src/components/content/ArticleHeader.tsx`.
  - Effort: 15 min

- [ ] **Related-by-pillar component**
  - What: Auto-generated from `site-config.ts`. Append to every article footer: "More from [Pillar]: [3 spokes]".
  - Why: Builds the cluster topology automatically as you add articles. Densifies internal linking without manual work.
  - How: New `<RelatedByPillar>` Server Component that reads current article's pillar from `site-config.ts`, picks 3 other articles in same pillar (excluding self), renders list with links.
  - File/location: `src/components/content/RelatedByPillar.tsx` (new); insert at bottom of all 92 article pages.
  - Effort: 2 hours

- [ ] **"Compare" hub index**
  - What: Comparison hub at `/compare` listing all "X vs Y" articles.
  - Why: Pure-comparison articles often outrank pillar articles. A `/compare` index would be powerful as a category navigation.
  - How: Auto-generate from articles whose slugs contain `-vs-`.
  - File/location: `src/app/compare/page.tsx`.
  - Effort: 1 hour

---

## 📝 KEYWORD TARGETS & CONTENT PIPELINE

### Keywords to target (new articles needed)

| # | Keyword | Pillar | Intent | Difficulty | Priority | Action |
|---|---|---|---|---|---|---|
| 1 | how much should I have in savings by age 30 | Budget | informational | low | High | New |
| 2 | 50/30/20 rule example with $5000 income | Budget | informational | low | High | Optimize `how-to-budget-50-30-20` (add worked-example section) |
| 3 | is the 50/30/20 rule realistic | Budget | question | low | High | New (forum-ranked currently — Quora/Reddit on SERP) |
| 4 | sinking fund vs emergency fund | Budget | informational | low | High | New (clean topic gap) |
| 5 | how to budget on irregular income | Budget | informational | low-med | Med | New (freelancer/gig audience) |
| 6 | vti vs vtsax vs voo | Invest | comparison | low | High | New (high-traffic Bogleheads-style query) |
| 7 | is $5000 enough to start investing | Invest | question | low | High | New |
| 8 | roth ira withdrawal rules before 59 1/2 | Invest | informational | low-med | Med | New (split or expand `roth-ira-5-year-rules`) |
| 9 | how to invest a windfall | Invest | informational | low | Med | New |
| 10 | do i need a financial advisor at $100k net worth | Invest | question | low | Med | Optimize `how-to-choose-a-financial-advisor` |
| 11 | 2026 tax brackets calculator | Save tax | transactional | low-med | High | New (landing page wrapping existing TaxBracketCalculator) |
| 12 | how to file taxes with 1099 and w2 | Save tax | informational | med | Med | New |
| 13 | roth conversion calculator | Save tax | transactional | low | High | New tool + page |
| 14 | do I have to pay taxes on hsa withdrawals | Save tax | question | low | Med | New |
| 15 | what is form 8606 | Save tax | informational | low | Med | New |
| 16 | mega backdoor roth which 401k allows | Save tax | question | low | Med | Optimize `mega-backdoor-roth-guide` |
| 17 | chase sapphire preferred vs venture x | Borrow smart | comparison | low-med | Med | New |
| 18 | is 720 a good credit score | Borrow smart | question | low | High | New |
| 19 | how long does it take to build credit from scratch | Borrow smart | question | low | Med | Optimize `how-to-build-credit-from-scratch` |
| 20 | personal loan vs 0 apr credit card | Borrow smart | comparison | low | Med | Optimize `personal-loan-vs-credit-card` |
| 21 | does paying off a loan early hurt credit | Borrow smart | question | low | Med | New |
| 22 | do I need life insurance if I'm single with no kids | Protect | question | low | High | New |
| 23 | term vs whole life for retirement | Protect | comparison | low-med | Med | Optimize `term-vs-whole-life-insurance` |
| 24 | umbrella insurance worth it for renters | Protect | question | low | Med | Optimize `umbrella-insurance-guide` |
| 25 | how much disability insurance do I need | Protect | informational | low-med | Med | Optimize `disability-insurance-guide` |

**Pattern**: question-format long-tails (5–9 words) where SERP is dominated by Reddit/Quora or 2018-vintage thin articles. Rankable on quality alone within 3–6 months *assuming Google indexes the page*.

### Articles to update (existing content)

- [ ] **`best-hysa-2026`**
  - Current title pattern: "Best high-yield savings accounts 2026 | FinBrief"
  - Better title: `Best High-Yield Savings Accounts (June 2026) — Updated Weekly`
  - Meta description: "Compare the top 10 high-yield savings accounts in June 2026. APYs from 4.5%–5.25%, FDIC-insured, no monthly fees. Updated weekly with current rates."
  - Add above the fold: live comparison table with columns: Bank | APY | Min Deposit | Monthly Fee | Our Take.
  - Add at bottom: "How we pick" methodology section (E-E-A-T signal).

- [ ] **`tax-brackets-2026`**
  - Title: `2026 Federal Tax Brackets (Updated for 2025 Tax Year Filing)`
  - H1: same
  - Embed: TaxBracketCalculator above the brackets table — calculator-first pages outrank table-only pages.
  - Add: "How much will I pay?" worked example for $50k, $100k, $200k single + MFJ.

- [ ] **`roth-ira-vs-traditional-ira`**
  - Title: `Roth IRA vs Traditional IRA: Which Should You Choose in 2026?`
  - Add at top: 2-sentence verdict ("Choose Roth if you expect to be in a higher tax bracket later. Choose Traditional if you expect to be in a lower one. Most people under 35 should choose Roth.")
  - Embed: RothComparator tool.

- [ ] **`how-to-budget-50-30-20`**
  - Title: `50/30/20 Budget Rule: A Realistic Example (With Calculator)`
  - Add: 3 worked examples — $4k/mo, $7k/mo, $12k/mo take-home — showing exact dollar breakdowns.
  - Embed: BudgetCalculator above example #1.

- [ ] **`how-much-life-insurance-do-i-need`**
  - Title: `How Much Life Insurance Do I Need? DIME Formula + Calculator`
  - Embed: LifeInsuranceCalculator immediately after the intro.
  - Add: 4 personas with calculated need (single parent, dual-income, single no kids, business owner).

- [ ] **`how-to-build-credit-from-scratch`** — see keyword #19.
- [ ] **`personal-loan-vs-credit-card`** — see keyword #20.
- [ ] **`term-vs-whole-life-insurance`** — see keyword #23.
- [ ] **`umbrella-insurance-guide`** — see keyword #24.
- [ ] **`disability-insurance-guide`** — see keyword #25.
- [ ] **`how-to-choose-a-financial-advisor`** — see keyword #10.
- [ ] **`mega-backdoor-roth-guide`** — see keyword #16.
- [ ] **`roth-ira-5-year-rules`** — split or expand for keyword #8.
- [ ] **Universal first-paragraph answer rule** applies to ALL 92 articles (see Technical SEO section).

### 90-day publishing roadmap

Assumes solo operator, 3 articles + 1 tool per week. (Faster shipping pace possible — this is a sustainable floor.)

#### Weeks 1–4: Foundation

- [ ] **Week 1** — pillar hubs ship (×5); BreadcrumbList JSON-LD; rewrite top-20 titles; sign up for HARO
- [ ] **Week 2** — Net Worth Percentile tool; cluster sub-hubs (Tax → IRAs, HSA, Filing); 3 new articles from keyword list: #1 (`how much should I have in savings by age 30`), #6 (`vti vs vtsax vs voo`), #11 (`2026 tax brackets calculator` landing page)
- [ ] **Week 3** — 50-state paycheck calculator scaffold + first 10 state pages; 3 new articles: #2 (50/30/20 worked example), #7 (`is $5000 enough to start investing`), #14 (`do I have to pay taxes on hsa withdrawals`)
- [ ] **Week 4** — finish state pages 11–25; HYSA live rate tracker MVP; 2 new articles: #18 (`is 720 a good credit score`), #22 (`do I need life insurance if I'm single with no kids`)

#### Weeks 5–8: Scale

- [ ] **Weeks 5–6** — finish state pages 26–50; ship Roth Conversion Calculator; 6 new articles from keyword list across pillars
- [ ] **Week 7** — Glossary v1 (50 entries); update 5 articles per the on-page fixes (`best-hysa-2026`, `tax-brackets-2026`, `roth-ira-vs-traditional-ira`, `how-to-budget-50-30-20`, `how-much-life-insurance-do-i-need`)
- [ ] **Week 8** — Mortgage affordability calculator; banking-comparison cluster (Ally vs Chime vs SoFi vs Discover) — 4 articles

#### Weeks 9–12: Linkable Assets

- [ ] **Week 9** — Original data study (run survey via Prolific, $300 budget); 3 new articles
- [ ] **Week 10** — Publish data study with PR-ready quotes; pitch to 20 journalists; 3 new articles
- [ ] **Week 11** — Compound-interest visualizer; FIRE calculator; 2 new articles
- [ ] **Week 12** — Audit + refresh oldest 10 articles per article-refresh cron's output; build "Retirement savings by age" series (5 articles)

**Targets at week 12**: ~125 articles (from 92), 12 tools, 5 + 6 sub-hubs.

---

## 🛠️ TOOLS & FEATURES TO BUILD

Ranked by traffic × link potential ÷ effort.

- [ ] **#1 — Live HYSA rate tracker**
  - Purpose: Single most-linked-to page format in personal finance. Scrape 10 bank pages daily, write JSON, render leaderboard. Bankrate, NerdWallet, DepositAccounts all rank on this format.
  - Priority rank: 1
  - Target keyword: `best high yield savings accounts`
  - Build notes: Aligns with Phase 4 Operations Playbook Tier 1 scraper. Even if rates start manually updated weekly, build the scaffold. Render on `/learn/best-hysa-2026`.
  - Effort: 2 days

- [ ] **#2 — Roth conversion calculator**
  - Purpose: Highly-searched, complex math means people share results.
  - Priority rank: 2
  - Target keyword: `roth conversion calculator`
  - Build notes: New `RothConversionCalculator` client component; new landing page at `/tools/roth-conversion`.
  - Effort: 1 day

- [ ] **#3 — Net worth percentile by age**
  - Purpose: Viral-prone. People want to know "am I behind?" Reddit/X share magnet.
  - Priority rank: 3 (build first along with #4 for ROI — link-magnet + scale plays)
  - Target keyword: `net worth by age`
  - Build notes: Use Fed SCF data (Survey of Consumer Finances) for percentile bands by age cohort.
  - Effort: 1 day

- [ ] **#4 — Take-home pay calculator (all 50 states)**
  - Purpose: 50 state pages, massive long-tail.
  - Priority rank: 4 (build first along with #3 for ROI)
  - Target keyword: `[state] paycheck calculator`
  - Build notes: 50 generated pages at `/tools/paycheck/[state]`. Compute federal + state + FICA based on state tax tables. Reuse existing `tax-brackets-2026.ts` pattern for state tables.
  - Effort: 3 days

- [ ] **#5 — Mortgage affordability calculator**
  - Purpose: High commercial intent + backlink target for real-estate blogs.
  - Priority rank: 5
  - Target keyword: `how much house can I afford`
  - Build notes: Inputs: income, debts, down payment, rate, term. Output: max purchase price, DTI ratio.
  - Effort: 1.5 days

- [ ] **#6 — FIRE / early retirement calculator**
  - Purpose: r/financialindependence link magnet.
  - Priority rank: 6
  - Target keyword: `coast fire calculator`
  - Build notes: Inputs: current savings, monthly contribution, target retirement age, expected return, withdrawal rate.
  - Effort: 1 day

- [ ] **#7 — Debt payoff timeline (snowball vs avalanche)**
  - Purpose: Visual comparison, screenshot-worthy.
  - Priority rank: 7
  - Target keyword: `debt payoff calculator`
  - Build notes: Multi-debt input array, side-by-side snowball vs avalanche timeline visualization.
  - Effort: 1 day

- [ ] **#8 — Compound interest visualizer**
  - Purpose: Educational + universally linkable.
  - Priority rank: 8
  - Target keyword: `compound interest calculator`
  - Build notes: Animated chart showing growth curve.
  - Effort: 0.5 day

- [ ] **#9 — Emergency fund target calculator**
  - Purpose: Niche but high-intent + ties to existing emergency-fund articles.
  - Priority rank: 9
  - Target keyword: `emergency fund calculator`
  - Build notes: Inputs: monthly expenses, job stability factor, dependents. Output: target months × monthly expenses.
  - Effort: 0.5 day

- [ ] **#10 — HSA triple-tax-advantage projector**
  - Purpose: Differentiated; no one ranks well on this.
  - Priority rank: 10
  - Target keyword: `hsa retirement calculator`
  - Build notes: Project HSA balance to age 65 with tax-advantaged growth assumptions; compare to taxable account.
  - Effort: 1 day

**Build order recommendation**: #3 (net worth percentiles) and #4 (50-state paycheck) FIRST — link-magnet + scale plays. Then #1 (HYSA tracker).

---

## 🔗 BACKLINK & DISTRIBUTION STRATEGY

### Tier 1 — Do this week

- [ ] **HARO / Connectively / Featured.com / Qwoted signups**
  - Sign up as "Jahanzeb Nawaz, founder of FinBrief."
  - Respond to 5 journalist queries per week on personal finance topics.
  - Expect ~5% response rate → 1 link/month from real news/blog sites.
  - This is how new finance sites bootstrap DA.

- [ ] **`/r/personalfinance` wiki suggestion**
  - Propose your tools (specifically the 401(k) match calculator and budget calculator) for inclusion in the relevant wiki pages.
  - Mods accept genuinely useful free tools.

- [ ] **Bogleheads forum**
  - Value-first posts answering questions, linking to your guides only when *directly relevant.*
  - Don't post the same link twice in 30 days.

### Tier 2 — Do this month

- [ ] **Resource page outreach**
  - Search queries: `inurl:resources personal finance`, `inurl:links investing`, `"financial planning resources" inurl:.edu`
  - Email each maintainer with the *most relevant single page* (not the homepage).
  - 5% reply rate.

- [ ] **University .edu pages**
  - Financial literacy resource pages on .edu sites are gold (DA 70+).
  - Search: `site:.edu "personal finance" "resources"`.
  - Email career services or financial-aid departments.
  - Pitch a relevant guide page as a free resource.

- [ ] **Podcast appearances**
  - Pitch yourself to 5 small/medium personal-finance podcasts as "founder of a new tools-first finance site, ex-[your real background]."
  - Most give a link in show notes.

### Tier 3 — Naturally link-attracting content to publish

- [ ] **Original data studies**
  - Survey 500 people about money habits, publish results.
  - Use Typeform + Prolific, ~$300, 1 weekend.

- [ ] **State-by-state comparisons**
  - "Cost of retiring in all 50 states," "Best states for low taxes in retirement."
  - Local news + state-affinity bloggers link to these.

- [ ] **Definitive lists with primary-source citations**
  - Your IRS-cited articles already do this.
  - Make sure each citation is a clickable link to the IRS.gov primary source.

- [ ] **Free calculator pages**
  - The tools above. Other bloggers embed/link calculators that work and look clean.

### Directories worth submitting to

- [ ] DepositAccounts (HYSA tracker pages get listed)
- [ ] TheCalculatorSite, Calculator.net competitor backlinks
- [ ] AllTopStartups, BetaList for "tools-first finance site" angle
- [ ] Google My Business — even though it's a website, GMB profiles for solo founders get a link

### What NOT to do

- ❌ Don't buy PBN links
- ❌ Don't use Fiverr "guest post" services
- ❌ Don't do reciprocal-link schemes
- The penalty is permanent for YMYL.

### What I'd skip from broader advice

- ❌ Don't rename author to "James Hartley." You already have 92 articles bylined Jahanzeb Nawaz with a real photo, real /author page, and IRS citations. Renaming destroys E-E-A-T continuity. Pen names also fail Google's recent SpamBrain / generative-AI-author detection more often than real-but-low-profile authors do.
- ❌ Don't add more articles before pillar hubs ship. The marginal article doesn't help; the cluster topology does.
- ❌ Don't chase social traffic before fixing indexation. Reddit traffic is fine but doesn't compound.

---

## 📊 TRACKING & MEASUREMENT

### GSC setup checklist

- [x] URL-prefix property `https://finbrief.space/` verified (per SESSION_LOG)
- [x] Sitemap submitted with `Success` status (per SESSION_LOG; 22 pages discovered — re-submit a ping after pillar hubs ship)
- [ ] Add **Domain property** (`finbrief.space`) in addition to URL-prefix — domain properties get richer data
- [ ] **Enhancements report**: check Articles, FAQ, Breadcrumbs all show "Valid" pages
- [ ] **Mobile Usability** report: zero errors expected
- [ ] **Core Web Vitals** report: at least 75% URLs should be "Good"

### GA4 setup checklist

SESSION_LOG mentions Vercel Analytics. Add GA4 in parallel — Vercel Analytics is great for real-user metrics but GA4 is what GSC integrates with and what every link-target site uses to evaluate you.

- [ ] GA4 property created, measurement ID in env vars
- [ ] Linked to GSC property
- [ ] Set up **conversions** for: newsletter signup, affiliate click (existing `track()` event), tool completion

### Weekly reports to check (Monday morning, 15 min)

- [ ] GSC → Performance → last 7 days: which queries gained/lost impressions
- [ ] GSC → Pages → "Not indexed" count: should trend down
- [ ] GSC → Enhancements → Articles: any new errors
- [ ] GA4 → Reports → Acquisition → which organic landing pages converted

### Monthly reports (1 hour)

- [ ] GSC → Performance → last 28d vs prior 28d: net query growth
- [ ] GSC → Links → Top linking sites: which new domains appeared
- [ ] Top 10 ranking-near-page-1 queries (positions 11–20) → these are ranking-up candidates; target their pages for content updates

### Early signals the strategy is working (in order)

- **Week 2–4**: "Pages not indexed" count drops; more pages show "Crawled - currently indexed"
- **Week 4–8**: First impressions in GSC on long-tail queries (e.g. "is the 50/30/20 rule realistic") — clicks still near zero, but appearing at positions 30–60
- **Week 8–12**: First clicks from organic search. Average position for top 10 queries dropping from 60s → 30s
- **Month 4–6**: First single-day spike of >100 organic visitors. Usually a Reddit/HN/news mention coinciding with a query you rank for. This is the "are we real now" moment.
- **Month 6–9**: Sustained 1,000+ daily visitors *if* indexation is solved AND linkable assets are built.

### What "working" looks like at 30 / 60 / 90 days

- **30 days**: indexed-page count up from ~7 to 60+; first impressions in GSC on long-tail queries; HARO signup live with 1–2 responses pending; pillar hubs live.
- **60 days**: 80+ articles indexed; first organic clicks; first non-zero ranking positions (30–60) on a handful of target keywords; first inbound link from HARO or resource-page outreach.
- **90 days**: ~125 articles published; 12 tools live; first sustained organic traffic (50–200 visitors/day); average rankings improving on bonded long-tails (positions 20–40); 3–5 inbound links across HARO + outreach.

---

## 🗓️ 30-DAY QUICK WINS SPRINT

Standalone checklist — work through in order.

- [ ] **[Day 1, 4h] Ship 5 pillar hub pages.** Template at `/learn/[pillar-slug]/page.tsx`. Server Component reading from `site-config.ts`, grouping articles by `pillar` field, rendering as cluster sections.
- [ ] **[Day 1, 30 min] Add BreadcrumbList JSON-LD** to every article (code in Technical SEO section).
- [ ] **[Day 2, 2h] Add "Related from [Pillar]" component** to every article footer.
- [ ] **[Day 2, 1h] Rewrite top 20 article titles** for click-through — pattern: `[Primary Keyword]: [Specific Benefit / Year / Number]`.
- [ ] **[Day 3, 3h] Add live HYSA rate table scaffold** (even if rates are manually updated weekly to start) on `/learn/best-hysa-2026`.
- [ ] **[Day 3, 1h] Sign up for HARO / Featured.com / Connectively** with the Jahanzeb byline.
- [ ] **[Day 4, 4h] Build Net Worth Percentile by Age tool** (link-magnet).
- [ ] **[Day 5, 2h] Add a worked-example section + tool embed** to the 5 articles in "Articles to update" (HYSA, tax-brackets, Roth-vs-traditional, 50/30/20, life-insurance need).
- [ ] **[Week 2] Build 50-state paycheck calculator scaffold** (50 generated pages, each /tools/paycheck/[state]).
- [ ] **[Ongoing] Manual GSC URL submissions** — continue at ~10/day until all 92 are submitted.

---

## 📋 BACKLOG (lower priority, do later)

- [ ] **Banking comparisons cluster** — checking accounts, online banks (Ally, Chime, SoFi, Discover Bank as a category). You only have HYSA. NerdWallet has 40+ checking articles. (See week 8 of roadmap.)
- [ ] **State-specific tax content** — every U.S. tax site has `[state] income tax brackets`, `[state] sales tax`, etc. 50× pages, low effort, low competition.
- [ ] **Retirement-by-age series** — "retirement savings by age 40", "by age 50", "by age 60". Currency-evergreen pages with stable traffic. (See week 12.)
- [ ] **Net worth benchmarks** — "average net worth by age", "median net worth in [year]". Massive traffic, simple to write.
- [ ] **Buying guides** — "first time home buyer guide", "how much house can I afford", "buying a used car checklist".
- [ ] **Side hustle / income content** — entire category gap. "Highest-paying side hustles", "how to ask for a raise", "negotiating salary."
- [ ] **Per-term glossary pages** — initial glossary is one page; expand to `/learn/glossary/[term]/page.tsx` once 50+ entries exist.
- [ ] **Printables/downloads** — budget worksheet PDF, tax-prep checklist PDF. Pinterest backlink magnets.
- [ ] **Consistent credit-card "apply / our take / pros & cons" component** — formatting varies across credit card articles; standardize.
- [ ] **Universal first-paragraph rewrite across all 92 articles** — high-value but high-volume; chip away over the 90 days.
- [ ] **FAQ-block expansion to articles missing one** — chip away over the 90 days.

---

## ⚠️ UNCATEGORIZED / NEEDS REVIEW

- **Author rename to "James Hartley"** — user mentioned this as project context but audit recommendation was to REJECT (preserve Jahanzeb Nawaz byline for E-E-A-T continuity). Flagged here so it's not lost. If the user still wants to rename, that's a ~30-min site-wide find/replace across all 92 articles + `src/lib/authors.ts` + `src/app/author/jahanzeb-nawaz/page.tsx`. Discussion needed before action.
- **Vercel Pro vs lower-tier for `affiliate_click` analytics** — SESSION_LOG notes the `track()` event only surfaces on Pro. Not strictly an SEO issue but affects conversion attribution. Decide whether to upgrade based on traffic growth.

---

## Item count

- **🔴 CRITICAL PRIORITY**: 3
- **🟡 TECHNICAL SEO FIXES**: 10 (1 indexation + 2 schema + 2 meta/on-page + 5 verification)
- **🟢 CONTENT & ARCHITECTURE**: 5
- **📝 KEYWORDS** (table): 25 keyword targets
- **📝 ARTICLES TO UPDATE**: 13 specific articles + universal first-paragraph rule
- **📝 90-day publishing roadmap**: 12 week-blocks
- **🛠️ TOOLS & FEATURES**: 10
- **🔗 BACKLINK & DISTRIBUTION**: 14 specific tactics (3 Tier 1 + 3 Tier 2 + 4 Tier 3 + 4 directories)
- **📊 TRACKING & MEASUREMENT**: 14 checklist items (6 GSC + 3 GA4 + 4 weekly + 3 monthly = wait, recount → 6+3+4+3 = 16; plus 5 milestone signals = 21)
- **🗓️ 30-DAY QUICK WINS**: 10 sprint items
- **📋 BACKLOG**: 11

**Total trackable action items**: ~131 (3 + 10 + 5 + 25 + 13 + 12 + 10 + 14 + 21 + 10 + 11), not counting milestone-signal entries that are read-only signals to watch for.

---

*File saved at: `finance-platform/FINBRIEF_SEO_PLAYBOOK.md` (repo root).*
