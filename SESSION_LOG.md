# Session log — Finbrief

> **Read this first.** It's the running progress journal — current state at the top, collapsed history in the middle, and the most recent sessions verbatim at the bottom for active reference. `CLAUDE.md` is the original strategy + architecture handoff; this file takes precedence where they differ.

---

## Live state (as of 2026-05-31)

### Deployment

| Surface | Status |
|---|---|
| Custom domain | https://finbrief.space (www 308-redirects) |
| GitHub repo | https://github.com/bhuttavpn-jpg/finance-ai-brief (SSH auth via `~/.ssh/id_ed25519`) |
| Vercel project | `finance-ai-brief` (team `bhuttavpn-1595s-projects`); auto-deploy from `main` |
| Latest commit | `2063b30` — 7 P0 spoke batch (articles 28–34) |
| Build | clean, **52 routes**, all 34 articles statically prerendered |
| Vercel env vars | **32 total** (2 paying real URLs: `WISE`, `SOFI_MONEY`; rest placeholder homepages) |
| Vercel Analytics | enabled and verified |
| Newsletter (beehiiv) | LIVE end-to-end (`pub_c2d0f7f4-d91e-4d84-bef3-1024298cecdf`); API key on Vercel prod+dev |
| Google Search Console | URL-prefix property `https://finbrief.space/` verified; sitemap Success / 22 pages discovered; 7 indexed / 15 not yet indexed (sitemap discovery is rolling) |

### Author + editorial (E-E-A-T)

- Named author across all 34 articles: **Jahanzeb Nawaz** (Founder). `/author/jahanzeb-nawaz` page live, real photo.
- Named reviewer: **FinBrief Editorial Team**; `/editorial-standards` page describes the process.
- Schema validated by Google's Rich Results Test (`author` + `reviewedBy` + valid datetimes + image).

### Articles shipped (34 cornerstones)

Original Phase 2 plan called for 10 cornerstones. We're 24 ahead.

| Pillar | Count | Slugs |
|---|---|---|
| Budget | 6 | how-to-budget-50-30-20, best-hysa-2026, how-to-build-emergency-fund, couples-budgeting-guide, debt-snowball-vs-avalanche, how-to-pay-off-credit-card-debt |
| Invest | 7 | roth-ira-vs-traditional-ira, how-to-invest-1000-beginners, 401k-vs-ira-which-first, best-brokerage-accounts-beginners, how-much-to-contribute-to-401k, robinhood-review, how-much-do-i-need-to-retire |
| Save tax | 12 | roth-ira-contribution-limits-2026, tax-loss-harvesting-guide, backdoor-roth-ira-guide, tax-brackets-2026, best-tax-software-2026, how-to-file-taxes-for-free, turbotax-vs-taxact, freetaxusa-review, hsa-vs-fsa, hsa-as-retirement-account, best-hsa-providers, capital-gains-tax-2026 |
| Borrow smart | 7 | how-to-build-credit-from-scratch, best-travel-credit-cards-2026, best-cashback-credit-cards-2026, best-credit-cards-for-beginners, chase-sapphire-preferred-review, what-affects-your-credit-score, (+1 review) |
| Protect | 3 | best-term-life-insurance-young-professionals, term-vs-whole-life-insurance, how-much-life-insurance-do-i-need |

Article presentation spec (apply to every new article): mixed content blocks (comparison tables + bullets + inline Q&A + ≤5-sentence paragraphs), strategic bold on numbers/key terms, `<hr className="my-10 border-brand-100" />` separators between H2s (except "Related reading"), Jahanzeb Nawaz as `author`, "the FinBrief Editorial Team" as `reviewer`. Every article: `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` for step-by-steps), FTC `AffiliateDisclosure` above the fold, dense cross-pillar internal linking.

### Affiliate program status

| Status | Partners |
|---|---|
| ✅ Live (paying) | Wise, SoFi Money |
| ⏳ Under review | Ethos Life (Impact, $55/lead), Policygenius (HasOffers, ~$200/sale) |
| ✅ Platform activated (no programs yet) | CJ Affiliate publisher `finbriefspace` (property ID 101766442) |
| ❌ Structural blocker — Italy × US-only auto-decline | Ally, FreeTaxUSA, TaxAct (and likely most US-only CJ programs) |
| 🟡 Impact brand-direct auth loop | Lively HSA, Ladder, Wealthfront, Webull |
| 🟡 Chrome MCP / Cloudflare block (apply manually) | Betterment |
| ❌ Dead — drop from priority | Bestow/Lantern (no new policies), Marcus by GS (no formal program) |

### Standing open issues

1. **Real affiliate URLs.** Only Wise + SoFi pay. Two more under review (Ethos, Policygenius). Structural Italy×US blocker on CJ programs.
2. **GSC indexing.** 23 URLs still need explicit request-indexing (16 from articles 14–27 + 2 new entity pages + 7 from this session). Quota ~10/day, hit today. Sitemap discovery is working in parallel.
3. **Per-article hero images.** Article schema falls back to single site-wide OG image. For rich-result CTR, eventually want per-article 1x1/4x3/16x9 1200px+.
4. **FSA 2026 contribution limit.** Still "TBA" in `hsa-vs-fsa` until IRS publishes.
5. **Analytics on Vercel Pro.** Custom `affiliate_click` events only surface on Pro plan; the `track()` call is harmless on lower tiers.

### Verified IRS 2026 figures (cite these in any new article)

- **IR-2025-111** (Nov 13, 2025): 401(k) elective deferral $24,500; catch-up 50+ $8,000; SECURE 2.0 super catch-up ages 60–63 $11,250; IRA limit $7,500 / $1,100 catch-up.
- **IR-2025-103 / Rev. Proc. 2025-32** (Oct 9, 2025): 2026 tax brackets + standard deduction ($16,100 / $32,200 / $16,100 / $24,150).
- **Rev. Proc. 2025-19** (May 1, 2025): HSA $4,400 self / $8,750 family / +$1,000 catch-up 55+; HDHP min deductible $1,700 / $3,400; OOP max $8,500 / $17,000.

### Where to start next session

1. Standard checklist (read this file, sanity-check `src/app/layout.tsx` non-empty, `npm run build`).
2. **GSC indexing** — try the URL Inspection → Request Indexing flow tomorrow (quota window resets). 23 URLs queued; expect 2–3 sittings.
3. **Try Impact auth-loop recovery candidate (a)** — use "Sign up with email" on a Lively brand-direct attempt to see if Impact handles a duplicate email gracefully. If it merges into the existing publisher, Wealthfront and Webull immediately unblock.
4. **Apply to Betterment manually** outside this agent setup (the link is the bottleneck, not the application).
5. **Retarget tax software** — research a tax-prep affiliate that accepts non-US publishers, or drop FreeTaxUSA/TaxAct CTAs from the existing Save-tax articles.
6. Check Ethos + Policygenius for approval status (email + login).
7. **Content:** original P0/P1/P2 backlog is exhausted; pull P1 block from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar sheet) in the parent outputs dir for the next batch.

### Recovery notes

- **`layout.tsx` was 0 bytes at one early session.** If it ever happens again, restore from `finance-platform.zip` in the parent outputs/ directory.
- **Vercel CLI preview env vars** — the plugin-wrapped `vercel env add ... preview` can't take the "all preview branches" path non-interactively, and `main` is rejected. Production + development cover the live site; add preview vars via the Vercel dashboard if PR deploys ever need them.

---

## Collapsed history (sessions 2026-05-17 → 2026-05-31 mid-day)

Older sessions are summarized here in chronological order. The original verbatim entries are preserved in git history; if you need full detail, `git log SESSION_LOG.md` and check the commit before the consolidation.

### 2026-05-17 — initial MVP
2 launch articles (`how-to-budget-50-30-20`, `roth-ira-vs-traditional-ira`) + 5 tools shipped from Phase 3 codebase.

### 2026-05-19 — production launch
- 4 cornerstone articles added (3–6): `best-hysa-2026`, `how-to-invest-1000-beginners`, `best-term-life-insurance-young-professionals`, `how-to-build-credit-from-scratch`.
- `finbrief.space` domain attached; production deployment Ready.
- 4 new partner keys: `wise`, `capital-one`, `discover-it`, `credit-karma`. Initial **16 env vars** on Vercel.
- Real tracked URLs live for Wise + SoFi.
- `src/app/layout.tsx` recovered from `finance-platform.zip` (was 0 bytes at session start).

### 2026-05-20 — articles 7–9 + bug fixes + infra
- Articles 7–9 written: `best-travel-credit-cards-2026`, `roth-ira-contribution-limits-2026`, `tax-loss-harvesting-guide`. **Presentation spec introduced** (mixed content blocks, `<hr>` separators, strategic bold).
- 2 new partner keys: `capital-one-venture`, `chase-sapphire-reserve`.
- 9 affiliate env vars added on Vercel → **25 total**. IR-2025-111 verified.
- Deployed via Vercel CLI from local commit; GitHub later synced via SSH key auth.
- Bug fixes: duplicate "Reviewed by" byline (all 9 articles); `/learn` category filter rewritten as async Server Component using awaited `searchParams`.
- First 7 articles refactored to match the new presentation spec.
- Vercel Web Analytics enabled and verified.

### 2026-05-21 — P1+P2 batches + infra: OG/icons/newsletter/GSC
- P1 articles 10–11: `401k-vs-ira-which-first`, `term-vs-whole-life-insurance`.
- P2 articles 12–13: `how-to-build-emergency-fund`, `couples-budgeting-guide`.
- Polished `opengraph-image.tsx`, added `src/app/icon.tsx` (favicon via @vercel/og), removed dead `favicon.png`.
- Affiliate-click analytics wired to `@vercel/analytics/server` `track()` (Pro-only for custom events).
- **Newsletter (beehiiv) built** — `NewsletterSignup` component + `/api/subscribe` route + env var placeholders.
- **GSC URL-prefix property verified** with HTML meta + HTML file; sitemap submitted (initial "Couldn't fetch"); 4 of 13 articles got request-indexing.
- Later in day: **beehiiv ACTIVATED** end-to-end after fixing a trailing-period typo in the API key. API key rotated; test subscribers cleaned.

### 2026-05-30 (morning) — GSC sitemap confirmed + remaining 9 indexing requests
- GSC sitemap status flipped from "Couldn't fetch" → **Success, 22 pages discovered**.
- Remaining 9 article URLs all submitted via URL Inspection → Request Indexing. All 13 articles now have indexing requested.

### 2026-05-30 (afternoon) — P0 spoke batch from Phase 2 Calendar (articles 14–19)
6 articles: `best-cashback-credit-cards-2026`, `how-much-life-insurance-do-i-need`, `best-brokerage-accounts-beginners`, `backdoor-roth-ira-guide`, `how-much-to-contribute-to-401k`, `debt-snowball-vs-avalanche`. No new env vars; reused live partners. 35 routes prerendered.

### 2026-05-30 (continued) — IRS citations + Capital One Savor
- 401(k) catch-up $8,000 (2026) verified against **IR-2025-111**; "COLA-projected — verify" hints removed from `401k-vs-ira-which-first` and `how-much-to-contribute-to-401k`. 60–63 super catch-up of $11,250 documented.
- New partner: `capital-one-savor` (added to `affiliates.ts`, `.env.example`, Vercel prod+dev). `best-cashback-credit-cards-2026` updated with a proper Savor section + CTA. Vercel env count → **26**.

### 2026-05-30 (evening) — Save-tax pillar buildout (articles 20–27)
- 8 articles: `tax-brackets-2026`, `best-tax-software-2026`, `how-to-file-taxes-for-free`, `turbotax-vs-taxact`, `freetaxusa-review`, `hsa-vs-fsa`, `hsa-as-retirement-account`, `best-hsa-providers`.
- Used **IR-2025-103** (tax brackets) and **Rev. Proc. 2025-19** (HSA limits) as authoritative sources.
- 6 new partner env vars on Vercel: `TURBOTAX`, `TAXACT`, `FREETAXUSA`, `LIVELY`, `HEALTHEQUITY`, `FIDELITY_HSA` → **32 total**.
- New partner: `healthequity`. Save-tax pillar now fully built out. 43 routes prerendered.

### 2026-05-31 (morning) — named author + E-E-A-T refactor
- Pushed back on a fabricated CFA author + $2/article credential-rental hire as professional-ethics and Google-policy landmines. Pivoted to honest version.
- New: `src/lib/authors.ts` (author registry), `AuthorBox` component, `/author/jahanzeb-nawaz` page with real photo (`public/authors/jahanzeb-nawaz.jpg`), `/editorial-standards` page.
- All 27 articles: `author` → `"Jahanzeb Nawaz"`, `reviewer` → `"the FinBrief Editorial Team"`.
- `articleJsonLd` upgraded to emit structured `Person` author + `reviewedBy` Organization + richer `publisher` with logo. **45 routes** prerendered.

### 2026-05-31 (afternoon) — Rich Results validation + GSC quota stop
- Rich Results Test on `best-hysa-2026` → **PASS**, 2 valid items (Articles + FAQ). Author + reviewedBy + publisher all parsed.
- 5 non-critical issues fixed in `JsonLd.tsx`: `toIsoDateTime` helper (added timezone to `datePublished`/`dateModified`) + `image` field on Article (falls back to `/opengraph-image`). Commit `ce20c45`.
- GSC: tried second batch of indexing requests; **first submission returned Quota Exceeded**. Deferred to next day.

---

## Recent sessions (verbatim)

The last four sessions are kept exact for active reference.

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

*Last updated: 2026-05-31, 02:00 (1st affiliate application through: Ethos Life via Impact brand-direct, $55/lead. Ladder and Bestow blocked by broken brand pages; logged for follow-up. Affiliate kit updated.)*

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

### Tooling / process lessons
- **CJ "auto decline rule" is enforced client-side** by hard-disabling the APPLY button (not a silent server reject). The disabled-state tooltip is the only signal — easy to miss without hovering.
- **Impact brand-direct contracts run in a state-isolated flow** that doesn't share cookies/session with `app.impact.com` even though both are on the same origin. This is the root cause of the auth loop. Don't expect SSO to "just work" between them.
- **HasOffers Step 3 submit appears to write the Partner record before the duplicate-email guard fires** — useful side-channel: if you hit "user already exists" after walking through Step 3, check the login page; you may already be under review.
- **Always check the brand's own affiliate page first** to learn which network they use before researching. The pattern in finance is: most life-insurance + robo-investor brands → Impact brand-direct; most banking + tax-software brands → CJ; some independents → HasOffers (Policygenius) or direct portal (Wise, SoFi).

*Last updated: 2026-05-31, late (CJ publisher account ACTIVATED, Policygenius application under review, Impact brand-direct auth loop fully reproduced and documented for Lively + Ladder, betterment.com confirmed blocked by extension, Bestow + Marcus confirmed dead/no-program.)*

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

Quota is ~10/day per property, so resume tomorrow (or whenever the 24h window rolls over) and expect 2 sittings to clear all 16. (Plus the 7 from the spoke batch below — 23 URLs total now.)

*Last updated: 2026-05-31 (GSC indexing attempt — quota exceeded on first URL; 16 URLs still queued. Encouraging: GSC reports 7 pages now indexed, 15 not indexed — sitemap discovery is working without per-URL requests.)*

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
**34 articles now live** (original Phase 2 plan called for 10). See the Live state pillar-coverage table at the top of this file for the full breakdown.

### Git
Working tree before this session had 2 dirty files from late-night affiliate session (SESSION_LOG.md, affiliate_applications.md) — picked them up in the same commit. New files: 7 article directories + page.tsx. Modified: site-config.ts + the 2 dirty docs. Commit `2063b30` pushed to `origin/main` over SSH; GitHub auto-deploy picked it up.

*Last updated: 2026-05-31 (P0 spoke batch — 7 articles 28–34: robinhood-review, best-credit-cards-for-beginners, chase-sapphire-preferred-review, how-to-pay-off-credit-card-debt, capital-gains-tax-2026, how-much-do-i-need-to-retire, what-affects-your-credit-score. 34 cornerstones live. 52 routes prerendered.)*

---

## Session 2026-05-31 (continued) — SESSION_LOG consolidation

After 13 session entries piled up over two weeks (1180 lines), consolidated this file. Live state moved to a single summary at the top; older sessions collapsed into one-paragraph history entries; the most recent 4 sessions kept verbatim as active reference. Original verbatim entries preserved in git history — see the commit before this one if you need full detail on the older sessions.

*Last updated: 2026-05-31 (SESSION_LOG consolidated — live state header + collapsed history + last 4 sessions verbatim. Same info, much smaller; future sessions boot faster.)*
