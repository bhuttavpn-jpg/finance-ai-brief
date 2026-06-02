# Session log — Finbrief

> **Read this first.** It's the running progress journal — current state at the top, collapsed history in the middle, and the most recent sessions verbatim at the bottom for active reference. `CLAUDE.md` is the original strategy + architecture handoff; this file takes precedence where they differ.

---

## Live state (as of 2026-06-02)

### Deployment

| Surface | Status |
|---|---|
| Custom domain | https://finbrief.space (www 308-redirects) |
| GitHub repo | https://github.com/bhuttavpn-jpg/finance-ai-brief (SSH auth via `~/.ssh/id_ed25519`) |
| Vercel project | `finance-ai-brief` (team `bhuttavpn-1595s-projects`); auto-deploy from `main` |
| Latest commit | (pending) — fourth P1+extension batch (articles 65–74), no new partners or env vars |
| Build | clean, **92 routes**, all 74 articles statically prerendered |
| Vercel env vars | **32 total** (2 paying real URLs: `WISE`, `SOFI_MONEY`; rest placeholder homepages). 8 new partner keys (sofi-loans, lightstream, geico, progressive, better-mortgage, rocket-mortgage, monarch, copilot) use homepage `defaultUrl` fallback in code — no env var needed until tracking is wired. |
| Vercel Analytics | enabled and verified |
| Newsletter (beehiiv) | LIVE end-to-end (`pub_c2d0f7f4-d91e-4d84-bef3-1024298cecdf`); API key on Vercel prod+dev |
| Google Search Console | URL-prefix property `https://finbrief.space/` verified; sitemap Success / 22 pages discovered; 7 indexed / 15 not yet indexed (sitemap discovery is rolling) |

### Author + editorial (E-E-A-T)

- Named author across all 74 articles: **Jahanzeb Nawaz** (Founder). `/author/jahanzeb-nawaz` page live, real photo.
- Named reviewer: **FinBrief Editorial Team**; `/editorial-standards` page describes the process.
- Schema validated by Google's Rich Results Test (`author` + `reviewedBy` + valid datetimes + image).

### Articles shipped (74 cornerstones)

Original Phase 2 plan called for 10 cornerstones. We're 64 ahead. The workbook calendar (71 article slots) is now fully exhausted minus a handful of dupes; this batch went 6 from workbook + 4 logical extensions.

| Pillar | Count | Slugs |
|---|---|---|
| Budget | 12 | how-to-budget-50-30-20, best-hysa-2026, how-to-build-emergency-fund, couples-budgeting-guide, debt-snowball-vs-avalanche, how-to-pay-off-credit-card-debt, best-budgeting-apps-2026, how-to-budget, how-to-pay-off-debt, how-to-stop-living-paycheck-to-paycheck, **how-much-should-emergency-fund-be**, **how-to-save-money-fast** |
| Invest | 14 | roth-ira-vs-traditional-ira, how-to-invest-1000-beginners, 401k-vs-ira-which-first, best-brokerage-accounts-beginners, how-much-to-contribute-to-401k, robinhood-review, how-much-do-i-need-to-retire, fidelity-vs-schwab, fire-movement-guide, how-to-invest-in-stocks, vanguard-vs-fidelity, webull-review, **dollar-cost-averaging-vs-lump-sum**, **how-to-choose-a-financial-advisor** |
| Save tax | 19 | roth-ira-contribution-limits-2026, tax-loss-harvesting-guide, backdoor-roth-ira-guide, tax-brackets-2026, best-tax-software-2026, how-to-file-taxes-for-free, turbotax-vs-taxact, freetaxusa-review, hsa-vs-fsa, hsa-as-retirement-account, best-hsa-providers, capital-gains-tax-2026, mega-backdoor-roth-guide, standard-vs-itemized-deduction, tax-loss-harvesting-wash-sale-rule, tax-deductions-checklist, **short-vs-long-term-capital-gains**, **when-to-hire-a-cpa**, **roth-conversion-ladder** |
| Borrow smart | 20 | how-to-build-credit-from-scratch, best-travel-credit-cards-2026, best-cashback-credit-cards-2026, best-credit-cards-for-beginners, chase-sapphire-preferred-review, what-affects-your-credit-score, best-personal-loans-2026, how-to-get-a-mortgage, amex-gold-card-review, credit-utilization-ratio, when-to-refinance-mortgage, personal-loan-vs-credit-card, best-business-credit-cards, how-credit-cards-work, best-credit-cards-for-fair-credit, student-loan-refinance, best-student-credit-cards, how-to-check-credit-score-for-free, **sofi-personal-loan-review**, **debt-consolidation-loan** |
| Protect | 9 | best-term-life-insurance-young-professionals, term-vs-whole-life-insurance, how-much-life-insurance-do-i-need, best-life-insurance-companies-2026, best-car-insurance-companies-2026, hmo-vs-ppo-vs-hdhp, how-to-lower-car-insurance, how-much-car-insurance-do-i-need, **renters-vs-homeowners-insurance** |

Article presentation spec (apply to every new article): mixed content blocks (comparison tables + bullets + inline Q&A + ≤5-sentence paragraphs), strategic bold on numbers/key terms, `<hr className="my-10 border-brand-100" />` separators between H2s (except "Related reading"), Jahanzeb Nawaz as `author`, "the FinBrief Editorial Team" as `reviewer`. Every article: `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` for step-by-steps), FTC `AffiliateDisclosure` above the fold, dense cross-pillar internal linking.

### Affiliate program status

| Status | Partners |
|---|---|
| ✅ Live (paying) | Wise, SoFi Money |
| ⏳ Under review | Ethos Life (Impact, $55/lead) |
| ❌ Rejected (confirmed 2026-06-02) | Policygenius (HasOffers) — likely Italy×US-only mismatch |
| ✅ Platform activated (no programs yet) | CJ Affiliate publisher `finbriefspace` (property ID 101766442) |
| ❌ Structural blocker — Italy × US-only auto-decline (CJ) | Ally, FreeTaxUSA, TaxAct (and likely most US-only CJ programs) |
| ❌ Brand-level auto-decline after recipe applied | Lively HSA (declined within 4 min of contract approval) |
| ✅ Impact brand-direct auth loop — SOLVED | Recipe in `affiliate_applications.md` § Impact. Unblocks Ladder + any future Impact brand whose slug is known and whose brand-level rules accept Italy. |
| ⚠️ Slug works but contract is $0 placeholder | Webull (`Webull.brand` — real program is invitation-only) |
| 🟢 Contract previewed via Impact brand-direct (tiered $100–$500 per funded referral); awaiting user approval click | Betterment |
| ❌ Dead — drop from priority | Bestow/Lantern (no new policies), Marcus by GS (no formal program), **Wealthfront** (no public affiliate door — `wealthfront.com` has no /affiliates /partners /creators page; `Wealthfront.brand` 404s; per AI Overview, invitation-only) |

### Standing open issues

1. **Real affiliate URLs.** Only Wise + SoFi pay. Two more under review (Ethos, Policygenius). Structural Italy×US blocker on CJ programs.
2. **GSC indexing.** 23 URLs still need explicit request-indexing (16 from articles 14–27 + 2 new entity pages + 7 from this session). Quota ~10/day, hit today. Sitemap discovery is working in parallel.
3. ~~**Per-article hero images.** Article schema falls back to single site-wide OG image. For rich-result CTR, eventually want per-article 1x1/4x3/16x9 1200px+.~~ ✅ Done 2026-06-02 — dynamic `src/app/og/[slug]/[ratio]/route.tsx` renders branded PNG at 16x9/4x3/1x1; `articleJsonLd` emits all three URLs per article; `metadata.openGraph.images` on all 74 article pages points at `/og/<slug>/16x9`. Issue fully closed.
4. **FSA 2026 contribution limit.** Still "TBA" in `hsa-vs-fsa` until IRS publishes.
5. **Analytics on Vercel Pro.** Custom `affiliate_click` events only surface on Pro plan; the `track()` call is harmless on lower tiers.

### Verified IRS 2026 figures (cite these in any new article)

- **IR-2025-111** (Nov 13, 2025): 401(k) elective deferral $24,500; catch-up 50+ $8,000; SECURE 2.0 super catch-up ages 60–63 $11,250; IRA limit $7,500 / $1,100 catch-up.
- **IR-2025-103 / Rev. Proc. 2025-32** (Oct 9, 2025): 2026 tax brackets + standard deduction ($16,100 / $32,200 / $16,100 / $24,150).
- **Rev. Proc. 2025-19** (May 1, 2025): HSA $4,400 self / $8,750 family / +$1,000 catch-up 55+; HDHP min deductible $1,700 / $3,400; OOP max $8,500 / $17,000.

### Where to start next session

1. Standard checklist (read this file, sanity-check `src/app/layout.tsx` non-empty, `npm run build`).
2. **GSC indexing** — backlog is now 44 URLs (4 from original queue + 40 from batches 1–4 of 10-article shipments). Quota ~10/day; 4–5 sittings to clear.
3. **Try Webull via the proven Impact brand-direct recipe.** Recipe is in `affiliate_applications.md` § Impact. First need to find the right brand slug — `Wealthfront.brand` 404'd, so don't assume the obvious; check `webull.com/affiliate` or similar for the actual Impact campaign URL before reusing the pattern.
4. **Apply to Betterment manually** outside this agent setup (the link is the bottleneck, not the application).
5. **Retarget tax software** — research a tax-prep affiliate that accepts non-US publishers, or drop FreeTaxUSA/TaxAct CTAs from the existing Save-tax articles.
6. Check Ethos + Policygenius for approval status (email + login).
7. **Content:** Phase 2 workbook calendar (71 article slots, weeks 1–26) is now fully exhausted (we've shipped all unique slugs from it). Future batches need fresh topic selection — strong candidates include: HSA hub for parents (kids+HSA), step-up in basis explainer, asset allocation by age, qualified vs. ordinary dividends, mutual funds vs. ETFs, IRA RMD rules, SECURE 2.0 changes, Roth IRA 5-year rules deep-dive, when to take Social Security, Medicare basics, long-term care insurance, identity theft protection.

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

---

## Session 2026-05-31 (continued) — Impact brand-direct auth loop SOLVED (Lively still declined)

User picked recovery candidate (a) from the prior auth-loop session: try "Sign up with email" on the Lively brand-direct flow and see if Impact's duplicate-email handling routes back to the existing publisher. Did exactly that, end-to-end. **The loop is broken.** Lively itself then declined the application, but the platform-level fix is fully proven and reusable.

### The recipe (now documented in affiliate_applications.md § Impact)

Reproduced step-by-step:

1. `app.impact.com/campaign-promo-signup/Lively.brand` → Sign up → contract preview ($15 USD/HSA signup confirmed) → Continue.
2. Auth chooser page ("Sign up and start earning"). Clicked **"Sign up with email"** instead of "Sign in with impact.com" at the bottom (which is what caused the original loop).
3. Email-signup form. Entered the existing publisher's email `bhuttavpn@gmail.com` (NOT a fresh email — that would have created a parallel account and made things worse). Plus first/last name, username `finbriefspace`, password.
4. Impact surfaced a modal: **"Email address exists — Your email bhuttavpn@gmail.com is already associated with a user on the Impact.com platform"** with two buttons: **Take me to login** and **Change email**. Clicked **Take me to login**.
5. Landed on `app.impact.com/login.user` — but critically, the tab title was **"Lively - Lively"** and the forgot-password link was `/blc/Lively/password/forgot.brand`. That's the diagnostic: the brand-direct context survives this login route, unlike the "Sign in with impact.com" SSO button on the chooser which strips it.
6. Submitted username/password (`bhuttavpn@gmail.com` + provided password). Impact redirected to a **Google OAuth account chooser** — meaning the existing publisher is registered with Google SSO, not a native password. **This is the actual root cause of the original loop**: the native sign-in form has no credentials to bind, so the form silently bounces back to login.
7. Picked the Google account → OAuth "You're signing back in to impact.com" → Continue.
8. Landed on the **"Review Lively Insertion Order"** page inside the authenticated dashboard (top-right showed "Jahanzeb Nawaz" — confirmed signed in as the existing publisher, not a duplicate account).
9. Scrolled to bottom, clicked **"I approve the Contract and want to continue"**.

### Outcome

✅ Auth loop solved, recipe written into `affiliate_applications.md` for any future Impact brand-direct.

❌ Lively notification at **04:33 PM**: *"Lively declined your application"* — auto-decline within ~4 minutes. The decline is brand-level (Lively is US-only HSA; Italy publisher is a poor fit on their own decision-engine), not platform-level. The Ethos approval on this same account from the prior session is the proof that *some* Impact brands accept the Italy posture.

### Why the original loop happened (now understood)

The "Sign in with impact.com" link on the brand-direct auth chooser does the Google SSO round-trip but loses the brand-direct contract state during the redirect chain. So even when the user is authenticated, the page lands on `app.impact.com` home dashboard instead of the brand IO review page. The "Sign up with email → existing email → Take me to login" path enters a *different* login route (`/login.user` with brand context in the URL/title) that preserves state through the Google OAuth round-trip. That's the only difference.

### Wealthfront attempted next, blocked structurally

Tried `app.impact.com/campaign-promo-signup/Wealthfront.brand` immediately after — **404 Page Not Found**. The slug pattern is brand-specific; the prior session's assumption that all Impact brands use the `<Brand>.brand` pattern is wrong. Google AI Overview reports that Wealthfront's affiliate path goes through Impact's **Marketplace** specifically — which this publisher is declined from. `wealthfront.com` is blocked by the Chrome extension safety filter (same Cloudflare-tier block as `betterment.com`), so the affiliate URL can't be researched from inside the agent. Pivoted before pushing further.

### Tooling lessons

- **Existing Impact publisher account email is `bhuttavpn@gmail.com`, not `admin@finbrief.space`.** SESSION_LOG was wrong to list `admin@finbrief.space` as the contact in the identity defaults — that's the application *contact* email, but the underlying Impact login is the older personal Gmail.
- **Existing Impact publisher is Google-SSO**, no native password. This is information worth carrying forward — any future Impact "Sign in" should expect a Google OAuth round-trip, not a password form that just works.
- **Impact's "Sign up with email" form's duplicate-email modal is the only state-preserving route back into the dashboard from a brand-direct contract.** "Sign in with impact.com" on the auth chooser is *broken* state-wise for this account; don't use it.
- **Brand slugs are not predictable from brand names.** `Lively` → `Lively.brand` works. `Ethos` → `Ethos-Life.brand`. `Wealthfront` → `Wealthfront.brand` 404s. Always confirm via the brand's own affiliate page or Google before navigating.

### Webull attempted, contract is $0

After documenting the recipe, tried `app.impact.com/campaign-promo-signup/Webull.brand`. **Slug works** — the page loaded "Contract Terms for Webull" with normal Impact campaign structure. **But the default payout is $0.00 USD per Sign Up.** Aligned with Google AI Overview: Webull's payable program is gated to "approved creators" (invitation only). The publicly-reachable brand-direct contract is a placeholder. Not worth accepting a $0 contract; backed out without approval. Defer until Webull invites FinBrief or traffic crosses their internal threshold.

### Where to pick up

- Email `partners@livelyme.com` directly with the Italy/audience pitch — the brand auto-decline doesn't preclude a manual partnership conversation.
- Check Ethos + Policygenius for approval decisions (Ethos: Impact notifications; Policygenius: `policygenius.hasoffers.com/login` blue banner).
- GSC indexing — quota should be reset.
- **Ladder** is the remaining unattempted Impact brand-direct candidate. Its brand page previously mis-rendered Ethos branding (Impact bug noted in the prior session). Worth one more attempt with the recipe — if the Lively-style $X/lead contract loads, the recipe will push it through; if Lively-pattern auto-decline hits, it's a brand-level no.

*Last updated: 2026-05-31 (Impact brand-direct auth loop SOLVED, full recipe documented. Root cause: existing publisher account is Google-SSO. Recipe proven against Lively (contract approved on IO review page) but Lively then brand-auto-declined within 4 min. Webull slug works but contract is $0 placeholder — real Webull program is invitation-only. Wealthfront brand slug 404s; affiliate URL can't be researched from agent because wealthfront.com is Cloudflare-blocked in the extension.)*

---

## Session 2026-05-31 (continued) — Lively manual outreach + Wealthfront dropped + GSC indexing batch (8 URLs)

After SOLVING the Impact brand-direct auth loop earlier in this session, three follow-up tracks.

### Lively manual outreach
Drafted a pitch email to `partners@livelyme.com` cross-referencing the Impact application that auto-declined, naming the three Lively-promoting cornerstone articles, framing the Italy/US-audience distinction, and citing the Ethos precedent on the same Impact account. Asked for manual approval or honest "no". User sent from `admin@finbrief.space` via Hostinger webmail. Logged in `affiliate_applications.md` under Lively row.

### Wealthfront — verified DROPPED
Tested every plausible affiliate door:
- `wealthfront.com` footer (WebFetch): no affiliate/partner/creator link
- `wealthfront.com/affiliate-program`, `/affiliates`, `/partners`, `/creators`: all 404
- DuckDuckGo search `"wealthfront" "campaign-promo-signup" impact.com`: zero results
- `app.impact.com/campaign-promo-signup/Wealthfront.brand`: 404 (verified earlier in this session)
- `wealthfront.com` itself is blocked by Chrome extension safety filter (same as `betterment.com`)

Google AI Overview confirms Wealthfront's program is gated to "approved creators" (invitation-only). No public signup door exists. Status in affiliate_applications.md updated to ❌ DROPPED; only re-evaluate if Wealthfront sends an invitation or a third party publishes a working slug.

### GSC indexing — 8 of 23 cleared, quota hit

Drove the URL Inspection → Request Indexing flow in GSC (URL-prefix property `https://finbrief.space/`, signed in as `jahanzebnawaz856@gmail.com`). Used the daily quota (~10/day per property) on:

| # | URL | Status |
|---|---|---|
| 1 | `learn/how-much-life-insurance-do-i-need` | ✅ Indexing requested |
| 2 | `learn/best-cashback-credit-cards-2026` | ✅ Indexing requested |
| 3 | `learn/best-brokerage-accounts-beginners` | ✅ Indexing requested |
| 4 | `learn/backdoor-roth-ira-guide` | ✅ Indexing requested |
| 5 | `learn/how-much-to-contribute-to-401k` | ✅ Indexing requested |
| 6 | `learn/debt-snowball-vs-avalanche` | ✅ Indexing requested |
| 7 | `learn/tax-brackets-2026` | ✅ Indexing requested |
| 8 | `learn/best-tax-software-2026` | ✅ Indexing requested |
| 9 | `learn/how-to-file-taxes-for-free` | ❌ **Quota Exceeded** — *"Sorry — we couldn't process this request because you've exceeded your daily quota. Please try submitting this again tomorrow."* |

8 unique submissions + ~2 wasted on accidental duplicates of URLs #2 and #3 (when the agent's clicks landed on "REQUEST AGAIN" buttons during recipe debugging) = ~10 slots, matching the documented cap.

### GSC submission recipe (lessons learned)

The URL Inspection flow has two flaky steps; the working recipe:

1. **Navigate to property root** every time: `https://search.google.com/search-console?resource_id=https%3A%2F%2Ffinbrief.space%2F`. Wait 5s.
2. **Click directly on the search bar at coordinate (790, 33)** — NOT the "URL inspection" left-nav button. The left-nav button is unreliable (sometimes opens the dropdown, sometimes just highlights without opening; double-clicking toggles closed). Clicking the search bar itself opens the dropdown with the input focused, every time.
3. Wait 3s for the dropdown.
4. Type the URL → press Return. Wait 10s for live URL inspection to complete.
5. **Find the REQUEST INDEXING button via `find` (not coordinates)** — its position shifts when the viewport resizes mid-session. Then `scroll_to` + `left_click` on the ref.
6. Wait 25–30s for the "Indexing requested" toast (or "Quota Exceeded" toast).
7. If REQUEST INDEXING still shows REQUEST INDEXING after the wait (no toast, no button-state change), re-find and re-click — the button often re-renders after live-URL testing completes, invalidating the prior ref.

### Side observations from GSC
- "Discovery → Sitemaps: No referring sitemaps detected" appears on every individual URL inspection, even though the sitemap is `Success` at the property level with 22 pages discovered. This is a per-URL discovery lag, not a sitemap problem.
- Indexing summary remained at **7 indexed / 15 not indexed** throughout the session — same as the prior session. Sitemap-discovery promotion hasn't moved the needle today; manual request-indexing is the only forward motion.

### Where to pick up

- **GSC indexing (cont'd) — 15 URLs left, quota resets ~24h from each per-URL request**: `how-to-file-taxes-for-free`, `turbotax-vs-taxact`, `freetaxusa-review`, `hsa-vs-fsa`, `hsa-as-retirement-account`, `best-hsa-providers`, `/author/jahanzeb-nawaz`, `/editorial-standards`, `robinhood-review`, `best-credit-cards-for-beginners`, `chase-sapphire-preferred-review`, `how-to-pay-off-credit-card-debt`, `capital-gains-tax-2026`, `how-much-do-i-need-to-retire`, `what-affects-your-credit-score`. Two more sittings should clear them.
- **Lively reply window:** ~3-5 business days. If no reply by 2026-06-07, drop Lively from priority and rewrite the HSA pillar around HealthEquity + Fidelity HSA only.
- **Ethos + Policygenius:** still pending decisions; check inbox + login pages.
- **Ladder via the recipe:** untested. The brand page previously mis-rendered Ethos branding; might still work with the recipe.
- **Betterment manual apply** outside the agent.

*Last updated: 2026-05-31 (Lively manual outreach sent via admin@finbrief.space; Wealthfront verified as no-public-door and DROPPED; 8 of 23 GSC indexing requests cleared before quota hit; recipe for the GSC URL-inspection flow documented.)*

---

## Session 2026-06-01 — GSC indexing batch (11 URLs)

Resumed the GSC indexing backlog with the documented recipe. Cleared 11 URLs before hitting the daily quota wall — the largest single GSC sitting to date, almost 2× the prior cap of ~6 effective submissions per sitting.

### Submitted successfully (11)

| # | URL | Result |
|---|---|---|
| 1 | `learn/how-to-file-taxes-for-free` | ✅ Indexing requested |
| 2 | `learn/turbotax-vs-taxact` | ✅ Indexing requested |
| 3 | `learn/freetaxusa-review` | ✅ Indexing requested |
| 4 | `learn/hsa-vs-fsa` | ✅ Indexing requested |
| 5 | `learn/hsa-as-retirement-account` | ✅ Indexing requested |
| 6 | `learn/best-hsa-providers` | ✅ Indexing requested |
| 7 | `/author/jahanzeb-nawaz` | ✅ Indexing requested |
| 8 | `/editorial-standards` | ✅ Indexing requested |
| 9 | `learn/robinhood-review` | ✅ Indexing requested |
| 10 | `learn/best-credit-cards-for-beginners` | ✅ Indexing requested |
| 11 | `learn/chase-sapphire-preferred-review` | ✅ Indexing requested |
| 12 | `learn/how-to-pay-off-credit-card-debt` | ❌ **Quota Exceeded** |

### Recipe refinements (vs. prior session)

The prior session's recipe held up, with one new lesson: **after the "Indexing requested" toast fires, the toast overlay can swallow the next click on the search bar**, leaving the typed URL going nowhere and the page still showing the prior inspection. The fix is to press `Escape` between the toast and the next search-bar click. Once added, the per-URL loop ran reliably for 11 URLs:

```
Escape → click (790, 33) → wait 3s → type URL → Return → wait 10s → click REQUEST INDEXING at (1313, 373) → wait 30s → screenshot
```

A second observation: occasionally the first REQUEST INDEXING click registers no state change (no toast, button stays in `REQUEST INDEXING` text rather than flipping to `REQUEST AGAIN`). Re-clicking the same coordinate after another 30s consistently triggers the submission. This happened on `chase-sapphire-preferred-review` mid-batch.

### Where to pick up next session

- **GSC indexing (cont'd) — 4 URLs left**: `how-to-pay-off-credit-card-debt`, `capital-gains-tax-2026`, `how-much-do-i-need-to-retire`, `what-affects-your-credit-score`. One more sitting clears the backlog entirely.
- Other open items unchanged from prior session: Lively reply window, Ethos + Policygenius status checks, Ladder via Impact recipe, Betterment manual apply, P1 content backlog from Phase 2 workbook.

*Last updated: 2026-06-01 (GSC indexing — 11 of 15 cleared in one sitting; 4 URLs remain. Backlog will be fully cleared in one more sitting. Recipe updated with the Escape-key fix for toast-overlay swallowed clicks.)*

---

## Session 2026-06-01 (continued) — P1 content batch (articles 35–44, 10 articles)

Pulled next P1 block from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar sheet). Strategy shift this session: instead of skipping articles whose affiliates aren't paying yet, ship them anyway with placeholder homepage links — traffic + content quality first, monetization wires through later via env vars.

### Articles shipped (35–44)

| # | Slug | Pillar | Affiliates used |
|---|---|---|---|
| 35 | `best-life-insurance-companies-2026` | Protect | bestow, ethos, haven, ladder, policygenius |
| 36 | `best-personal-loans-2026` | Borrow smart | sofi-loans (NEW), lightstream (NEW), marcus |
| 37 | `best-car-insurance-companies-2026` | Protect | geico (NEW), progressive (NEW), policygenius |
| 38 | `how-to-get-a-mortgage` | Borrow smart | better-mortgage (NEW), rocket-mortgage (NEW), credit-karma |
| 39 | `fidelity-vs-schwab` | Invest | fidelity, schwab |
| 40 | `best-budgeting-apps-2026` | Budget | ynab, monarch (NEW), copilot (NEW) |
| 41 | `fire-movement-guide` | Invest | fidelity, vanguard, schwab, betterment, wealthfront |
| 42 | `mega-backdoor-roth-guide` | Save tax | fidelity, schwab, vanguard |
| 43 | `how-to-invest-in-stocks` | Invest | fidelity, schwab, vanguard, robinhood, webull |
| 44 | `amex-gold-card-review` | Borrow smart | amex-gold, csp |

Each article ships with the standard presentation spec (mixed content blocks, `<hr>` separators between H2s, comparison tables, bullet/Q&A blocks, strategic bold on numbers/key terms), `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` on mortgage / mega-backdoor / how-to-invest), FTC `AffiliateDisclosure` above the fold, Jahanzeb Nawaz as author, FinBrief Editorial Team as reviewer, dense cross-pillar internal linking (each links to 4–6 existing articles).

### Affiliates registry refactor

`src/lib/affiliates.ts` updated:
- Added a `defaultUrl` field on each Partner (homepage URL fallback).
- `getPartnerUrl()` now falls back to `defaultUrl` when no env var is configured, instead of returning null. Once a real tracked URL is set on Vercel for any partner, the env var takes precedence automatically — zero code change needed.
- **8 new partner keys** added with homepage defaults: `sofi-loans`, `lightstream`, `geico`, `progressive`, `better-mortgage`, `rocket-mortgage`, `monarch`, `copilot`. No Vercel env vars added — every CTA still works via the homepage fallback.

This is the model going forward: ship an article whenever the content is solid, regardless of whether the affiliate program is paying yet. Real tracked URLs swap in via env var when they exist.

### IRS citations applied

- `mega-backdoor-roth-guide` cites IR-2025-111 for the 2026 elective deferral limit ($24,500) and notes the §415(c) total limit estimate ($70K) with a "verify final IRS figure" qualifier — the workbook didn't confirm a published 415(c) figure for 2026 yet.
- `how-to-invest-in-stocks` cites IR-2025-111 for the 2026 Roth IRA limit ($7,500) and references existing pillar articles for deeper coverage.

### Build & deploy

`npm run build` → clean, **62 routes** (was 52, +10), all 10 new articles statically prerendered, TypeScript passes.

### Cornerstone count

**44 articles now live** (original Phase 2 plan called for 10; we're now 34 ahead). See the Live state pillar-coverage table at the top of this file for the breakdown.

### Where to pick up next session

- **GSC indexing — 14 URLs left**: original 4 from this morning's queue (`how-to-pay-off-credit-card-debt`, `capital-gains-tax-2026`, `how-much-do-i-need-to-retire`, `what-affects-your-credit-score`) + 10 new (the articles 35–44 from this batch). Expect 2 more sittings to clear.
- **Pull next P1/P2 batch** from the Phase 2 workbook — plenty of P1 backlog left (~30 more articles).
- **Real affiliate URLs** — when Ethos / Policygenius / future approvals come in, just set the corresponding env var on Vercel; no code change needed thanks to the `defaultUrl` fallback model.

*Last updated: 2026-06-01 (P1 content batch — 10 articles 35–44 shipped; 8 new partner keys added with homepage fallback; `affiliates.ts` refactored to use defaultUrl fallback; 62 routes prerendered; affiliate-monetization-blind content strategy now in effect — articles ship whenever the content is solid, env vars wire in real tracking later.)*

---

## Session 2026-06-01 (continued) — Second P1 batch (articles 45–54, 10 articles)

Pulled the next P1 block from `Phase_2_Content_SEO_Workbook.xlsx` Calendar sheet (weeks 14–24). Heaviest on Borrow smart (5 of 10) because that pillar still had the most open hub/spoke slots in the workbook. No new partner keys, no new env vars, no Vercel touch needed — every CTA uses the existing 44-key affiliate registry (with `defaultUrl` homepage fallback for the unconfigured partners).

### Articles shipped (45–54)

| # | Slug | Pillar | Affiliates used |
|---|---|---|---|
| 45 | `how-to-budget` | Budget | sofi-money, marcus, ally, ynab, monarch, copilot |
| 46 | `credit-utilization-ratio` | Borrow smart | sofi-loans, credit-karma |
| 47 | `when-to-refinance-mortgage` | Borrow smart | better-mortgage, rocket-mortgage |
| 48 | `personal-loan-vs-credit-card` | Borrow smart | sofi-loans, lightstream, credit-karma |
| 49 | `best-business-credit-cards` | Borrow smart | csp, amex-gold, capital-one-venture |
| 50 | `how-credit-cards-work` | Borrow smart | discover-it, capital-one, credit-karma |
| 51 | `vanguard-vs-fidelity` | Invest | vanguard, fidelity, schwab |
| 52 | `webull-review` | Invest | webull, robinhood, fidelity |
| 53 | `hmo-vs-ppo-vs-hdhp` | Protect | policygenius, fidelity-hsa, lively, healthequity |
| 54 | `standard-vs-itemized-deduction` | Save tax | turbotax, taxact, freetaxusa |

Standard presentation spec on every article (mixed content blocks, `<hr>` separators between H2s, comparison tables, bullet/Q&A blocks, strategic bold), `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` on `how-to-budget`), FTC `AffiliateDisclosure` above the fold, Jahanzeb Nawaz as author, FinBrief Editorial Team as reviewer, dense cross-pillar internal linking (4–6 related-reading links per article).

### IRS citations applied

- `standard-vs-itemized-deduction` cites IR-2025-103 / Rev. Proc. 2025-32 (Oct 9, 2025) for the 2026 standard deduction amounts ($16,100 single, $32,200 MFJ, $24,150 HoH) and the 65+/blind additional amounts. Also references the still-suspended-since-TCJA miscellaneous itemized deductions and the $10K SALT cap.
- `hmo-vs-ppo-vs-hdhp` cites Rev. Proc. 2025-19 for the 2026 HDHP minimum deductible ($1,700 self / $3,400 family) and OOP max ($8,500 / $17,000), plus HSA contribution limits ($4,400 / $8,750 + $1,000 catch-up 55+).

### Build & deploy

`npm run build` → clean, **72 routes** (was 62, +10), all 10 new articles statically prerendered, TypeScript passes.

### Cornerstone count

**54 articles now live** (Phase 2 plan called for 10; we're now 44 ahead). Borrow smart and Save tax are now the two deepest pillars (14 each), followed by Invest (12), Budget (8), Protect (6).

### Where to pick up next session

- **GSC indexing** — backlog is now 14 URLs (4 from yesterday's queue + 10 new). Quota resets daily; will likely take 2 sittings.
- **Pull next P1/P2 batch** — still plenty in the workbook (~20 P1 + P2 left).
- **Real affiliate URLs** — Ethos/Policygenius status check; set env vars when approvals come in.
- **Per-article hero images** (open issue #3) — eventually.

*Last updated: 2026-06-01 (Second P1 batch — 10 articles 45–54 shipped: how-to-budget, credit-utilization-ratio, when-to-refinance-mortgage, personal-loan-vs-credit-card, best-business-credit-cards, how-credit-cards-work, vanguard-vs-fidelity, webull-review, hmo-vs-ppo-vs-hdhp, standard-vs-itemized-deduction. 54 cornerstones live; 72 routes prerendered. No new partner keys or env vars — reused existing 44-partner registry with defaultUrl fallback.)*

---

## Session 2026-06-02 — Third P1 batch (articles 55–64, 10 articles)

Continued pulling P1 articles from `Phase_2_Content_SEO_Workbook.xlsx` (Calendar weeks 17–26). Same playbook as batches 1 and 2 — reuse existing partner registry, no new env vars, ship the content first.

### Articles shipped (55–64)

| # | Slug | Pillar | Affiliates used |
|---|---|---|---|
| 55 | `how-to-lower-car-insurance` | Protect | policygenius, geico, progressive |
| 56 | `tax-loss-harvesting-wash-sale-rule` | Save tax | fidelity, schwab, vanguard |
| 57 | `best-credit-cards-for-fair-credit` | Borrow smart | capital-one, discover-it, credit-karma |
| 58 | `student-loan-refinance` | Borrow smart | sofi-loans, lightstream, credit-karma |
| 59 | `how-to-pay-off-debt` | Budget | credit-karma, sofi-money, marcus, ally, sofi-loans, lightstream, ynab, monarch |
| 60 | `tax-deductions-checklist` | Save tax | turbotax, taxact, freetaxusa |
| 61 | `best-student-credit-cards` | Borrow smart | discover-it, capital-one, credit-karma |
| 62 | `how-to-stop-living-paycheck-to-paycheck` | Budget | sofi-money, marcus, ally, ynab, monarch, copilot, sofi-loans, lightstream |
| 63 | `how-much-car-insurance-do-i-need` | Protect | policygenius, geico, progressive |
| 64 | `how-to-check-credit-score-for-free` | Borrow smart | credit-karma, discover-it |

Standard presentation spec (mixed content blocks, `<hr>` separators, comparison tables, bullet/Q&A, strategic bold), `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` on `how-to-lower-car-insurance`, `how-to-pay-off-debt`, `how-to-stop-living-paycheck-to-paycheck`), FTC `AffiliateDisclosure` above the fold, Jahanzeb Nawaz as author, FinBrief Editorial Team as reviewer, dense cross-pillar internal linking.

### IRS citations applied

- `tax-deductions-checklist` cites IR-2025-103 / Rev. Proc. 2025-32 (standard deduction $16,100/$32,200), IR-2025-111 (IRA $7,500/$8,600, 401(k) $24,500), and Rev. Proc. 2025-19 (HSA $4,400/$8,750).
- `tax-loss-harvesting-wash-sale-rule` cites 26 U.S. Code § 1091 and IRS Publication 550 for the rule itself, and IRS Revenue Ruling 2008-5 for the IRA wash sale trap (where losses are permanently disallowed).

### Build & deploy

`npm run build` → clean, **82 routes** (was 72, +10), all 10 new articles statically prerendered, TypeScript passes.

### Cornerstone count

**64 articles now live**. Borrow smart is now the deepest pillar (18 articles), then Save tax (16), Invest (12), Budget (10), Protect (8). Pillar imbalance starting to look intentional — Borrow smart has the broadest keyword surface and the most affiliate-friendly topics.

### Where to pick up next session

- **GSC indexing** — backlog is now 34 URLs (4 from original queue + 10 from articles 35–44 + 10 from articles 45–54 + 10 from this batch). Quota ~10/day; 3–4 sittings to clear.
- **Pull next P1/P2 batch** — workbook still has ~15 unshipped articles: how to save money fast, how much should emergency fund be, debt consolidation loan, sofi student loan refinance review (overlaps with student-loan-refinance), short vs long term capital gains (overlaps with capital-gains-tax-2026), webull review (done), and a handful of P2s.
- **Real affiliate URLs** — Ethos/Policygenius status check; set env vars when approvals come in.
- **Per-article hero images** (open issue #3) — eventually.

*Last updated: 2026-06-02 (Third P1 batch — 10 articles 55–64 shipped: how-to-lower-car-insurance, tax-loss-harvesting-wash-sale-rule, best-credit-cards-for-fair-credit, student-loan-refinance, how-to-pay-off-debt, tax-deductions-checklist, best-student-credit-cards, how-to-stop-living-paycheck-to-paycheck, how-much-car-insurance-do-i-need, how-to-check-credit-score-for-free. 64 cornerstones live; 82 routes prerendered. No new partner keys or env vars.)*

---

## Session 2026-06-02 (continued) — Fourth content batch (articles 65–74)

Final pull from `Phase_2_Content_SEO_Workbook.xlsx` (6 articles) + 4 logical extensions to round out pillars where coverage was thin. Invest pillar particularly needed broadening; protect needed one more. Workbook calendar is now fully exhausted — future batches need fresh topic selection.

### Articles shipped (65–74)

| # | Slug | Pillar | Source | Affiliates used |
|---|---|---|---|---|
| 65 | `sofi-personal-loan-review` | Borrow smart | Workbook W22 | sofi-loans, lightstream, credit-karma |
| 66 | `short-vs-long-term-capital-gains` | Save tax | Workbook W23 | fidelity, schwab, vanguard |
| 67 | `how-much-should-emergency-fund-be` | Budget | Workbook W25 | sofi-money, marcus, ally |
| 68 | `how-to-save-money-fast` | Budget | Workbook W25 | policygenius, sofi-loans, lightstream, sofi-money, marcus, ally, fidelity-hsa, freetaxusa, ynab, monarch, credit-karma |
| 69 | `debt-consolidation-loan` | Borrow smart | Workbook W26 | sofi-loans, lightstream, credit-karma, ynab, monarch, sofi-money |
| 70 | `when-to-hire-a-cpa` | Save tax | Workbook W15 (P2) | freetaxusa, turbotax, taxact |
| 71 | `dollar-cost-averaging-vs-lump-sum` | Invest | Extension | sofi-money, fidelity, schwab, vanguard |
| 72 | `roth-conversion-ladder` | Save tax | Extension (FIRE-adjacent) | fidelity, schwab, vanguard |
| 73 | `how-to-choose-a-financial-advisor` | Invest | Extension | betterment, wealthfront, fidelity |
| 74 | `renters-vs-homeowners-insurance` | Protect | Extension | policygenius, geico, progressive |

Standard presentation spec on every article. `articleJsonLd` + `faqJsonLd` (+ `howToJsonLd` on `roth-conversion-ladder`), FTC `AffiliateDisclosure` above the fold, Jahanzeb Nawaz as author, FinBrief Editorial Team as reviewer, dense cross-pillar internal linking.

### IRS citations applied

- `short-vs-long-term-capital-gains` cites IR-2025-103 / Rev. Proc. 2025-32 for 2026 LTCG brackets and ordinary income brackets.
- `roth-conversion-ladder` cites Rev. Proc. 2025-32 for the 2026 standard deduction and 12% bracket thresholds that drive conversion sizing.
- `when-to-hire-a-cpa` references the general 2026 standard deduction.

### Build & deploy

`npm run build` → clean, **92 routes** (was 82, +10), all 10 new articles statically prerendered, TypeScript passes.

### Cornerstone count

**74 articles now live.** Pillar distribution: Borrow smart 20 (the biggest), Save tax 19, Invest 14, Budget 12, Protect 9. The full $/year-spent-on-personal-finance keyword surface is now well covered.

### Workbook exhaustion

Phase 2 workbook calendar has 71 article slots. After this batch, every unique slug from it has been shipped (a few dupes — credit utilization appeared twice as hub-improve-credit and spoke-utilization; how to get a mortgage appeared as both hub-get-mortgage and how-to-get-a-mortgage). **Future content batches need fresh topic selection** — see the updated "Where to start next session" section above for candidate ideas.

### Where to pick up next session

- **GSC indexing** — backlog is now 44 URLs. Quota ~10/day; 4–5 sittings to clear.
- **Fresh content topics** — workbook exhausted; need to ideate next batch. Strong candidates: SECURE 2.0 rule changes, when to take Social Security, Medicare basics, mutual funds vs. ETFs, asset allocation by age, IRA RMD rules, identity theft protection, long-term care insurance.
- **Real affiliate URLs** — Ethos/Policygenius status check; set env vars when approvals come in.
- **Per-article hero images** (open issue #3) — eventually.

*Last updated: 2026-06-02 (Fourth content batch — 10 articles 65–74 shipped. Workbook calendar fully exhausted. 74 cornerstones live; 92 routes prerendered. No new partner keys or env vars.)*

---

## Session 2026-06-02 (continued) — GSC indexing attempt (quota wall on first URL)

Opened GSC, navigated URL Inspection for `learn/how-to-pay-off-credit-card-debt`, clicked REQUEST INDEXING. Toast came back **Quota Exceeded — try submitting this again tomorrow** within ~30s. The 24h rolling window from yesterday's 11-URL batch hasn't reset. Property-wide quota, not per-URL, so no point continuing today.

Backlog unchanged at 44 URLs. Try again in a fresh session tomorrow.

*Last updated: 2026-06-02 (GSC indexing — quota exceeded on first submission; backlog still 44 URLs. Window from yesterday's 11-URL batch not yet reset. Retry tomorrow.)*

---

## Session 2026-06-02 (continued) — Per-article hero images (open issue #3 ✅)

Closed open issue #3. Article schema now emits per-article hero images at all three aspect ratios Google's Article rich result documentation recommends (16x9, 4x3, 1x1), each ≥1200px wide, all dynamically rendered at request time.

### Implementation

Two small changes, no per-article churn:

1. **`src/app/og/[slug]/[ratio]/route.tsx`** — new dynamic route handler. Looks up `{title, pillar}` from `siteConfig.articles` by slug; renders a branded `@vercel/og` PNG. Ratios `16x9` (1200×630), `4x3` (1200×900), `1x1` (1200×1200). Title size + padding scale per ratio so the typography reads cleanly on each canvas. Invalid ratios → 404. Unknown slug → falls back to site tagline + brand name (so the route never errors).
2. **`src/components/seo/JsonLd.tsx`** — `articleJsonLd` now parses the slug out of `args.url` (every article passes `${siteConfig.url}/learn/${slug}`) and emits `image: [16x9, 4x3, 1x1]` URLs. Non-article URLs fall back to the existing site-wide `/opengraph-image`. No changes required to any of the 74 article pages — `articleJsonLd`'s call signature is unchanged.

Build verified clean (93 routes; the new `/og/[slug]/[ratio]` is a `ƒ` dynamic route). Smoke test against `next start`:
- `GET /og/best-hysa-2026/16x9` → 200, `image/png`, 1200×630 ✅
- `GET /og/best-hysa-2026/1x1`  → 200, `image/png`, 1200×1200 ✅
- `GET /og/best-hysa-2026/9x16` → 404 ✅
- Rendered HTML for `/learn/best-hysa-2026` now contains `"image":["https://finbrief.space/og/best-hysa-2026/16x9","…/4x3","…/1x1"]` in the Article JSON-LD ✅

Visual preview of the 16x9 render: branded navy radial-gradient background, FB logo + Finbrief wordmark top-left, pillar eyebrow ("BUDGET"), article title at 68px, `finbrief.space` footer.

### Follow-up shipped same session — per-article `openGraph.images` on all 74 pages

Augmented each article's `metadata.openGraph` with `images: [\`${siteConfig.url}/og/${slug}/16x9\`]`. The two original launch articles (`how-to-budget-50-30-20`, `roth-ira-vs-traditional-ira`) didn't have a `const slug` declaration so they were updated first, then a perl substitution swept the uniform `openGraph: { title, description, url, type: "article" },` line across all 74 files.

One gotcha: perl interpolates `$` in the replacement string by default, so the first sweep produced broken `images: [\`/og//16x9\`]` (empty interpolations). Fixed by escaping `\$` in the perl replacement. Verified the rendered HTML on `learn/best-hysa-2026` now carries `<meta property="og:image" content="https://finbrief.space/og/best-hysa-2026/16x9">`. Build still clean at 93 routes.

Social cards (Twitter, LinkedIn, Facebook, Slack unfurls) will now show the per-article branded image instead of the site-wide one.

*Last updated: 2026-06-02 (Per-article hero images shipped end-to-end — Article schema (3 ratios) + `openGraph.images` (16x9) on all 74 article pages. Issue #3 fully closed.)*

---

## Session 2026-06-02 (continued) — Affiliate status sweep (Ethos / Policygenius / CJ / Webull)

User flagged a "CJ Network!" email visible in Gmail and asked to verify whether CJ approved a commission, plus check Ethos + Policygenius and retry Webull. Net result this sitting: **no new approvals; no new partner programs unlocked.**

### Findings

| Track | Status | Detail |
|---|---|---|
| Ethos Life (Impact) | ⏳ Still pending | Gmail search at bhuttavpn@gmail.com shows only the original 31 May "Contract Application" submission email. No subsequent approval or decline. Application still under review per Impact dashboard convention. |
| Policygenius (HasOffers) | ❌ **REJECTED** (confirmed by user) | User attempted login at `policygenius.hasoffers.com/login` and reports "Cannot login. Account rejected." Application declined — drop Policygenius from the active queue. Most likely cause: Italy publisher × US-only insurance-marketplace traffic mismatch (same structural blocker as the CJ Italy×US auto-decline pattern). |
| CJ "Welcome to the CJ Network!" email | ❌ Not an approval (user double-checked via PDF; same email both times) | Arrived in Gmail today 12:01 from `WelcometoCJ@cj.com`. Contents are the **generic platform-activation welcome** — "Now you have full access to our robust platform... Log into your account to **begin** your partnership journey with CJ." (future tense — i.e., now go apply). This is a delayed automated welcome tied to the publisher-account activation from session 2026-05-31, not an advertiser approval. Reality check: there are **zero pending CJ applications** because the only advertisers tried (Ally Deposits, FreeTaxUSA) had APPLY hard-disabled by Italy×US auto-decline last session — so there's nothing for CJ to approve. A real CJ advertiser approval would have a subject like *"Application Status Change Notification"* or *"\<Advertiser\> has accepted your application"* from `memberservice@cj.com` and would name the specific brand. |
| Webull (Impact brand-direct) | ❌ Still $0 placeholder | Navigated `app.impact.com/campaign-promo-signup/Webull.brand`, clicked Sign up → Contract Terms for Webull loaded. **Default Payout: $0.00 USD per order**, 27-day action locking, Last Click credit policy. Identical to last session — Webull's real payable program is invitation-only. Backed out without accepting. No change. |
| Betterment direct | 🟢 **Real contract found** — pending user approval | User opened `app.impact.com/campaign-promo-signup/Betterment.brand` (not the blocked `betterment.com`) and the contract preview loaded with a tiered payout: $0 default but **Payout Adjustments** populate the real commission by funded amount — $100 for $0–$5K funding, $150 for $5K–$10K, $300 for $10K–$25K, $350 for $25K–$100K, **$500 for $100K+**. Materially different from Webull's $0 placeholder (Webull had no adjustments table at all). User can approve via the proven Impact recipe. Logging this correction: **the extension's safety block only applies to public `betterment.com`, not the Impact brand-direct URL** — so Betterment via Impact is reachable from the agent. |

### Capability lessons reaffirmed

- **Password entry is out of scope for the agent.** Anything gated by a native password form (Policygenius HasOffers, any new HasOffers brand, future direct-program logins) requires the user to log in manually and report what they see — or to be already logged in before the agent drives the session. Impact's Google-SSO is the exception: if the existing Google session is live, the OAuth round-trip works without typing credentials.
- **`betterment.com` (and likely `wealthfront.com`) cannot be reached via the Chrome MCP extension at all** due to a safety-filter block. These are user-manual-only.
- **CJ "platform welcome" ≠ commission approval.** Anyone reading the inbox should ignore the celebratory "Welcome to the CJ Network!" mail as marketing — actual advertiser approvals come from per-program emails referencing the specific advertiser name.

### Action items for the user (offline)

1. ~~Log in at Policygenius.~~ Confirmed REJECTED. Dead.
2. **Apply to Betterment manually** outside this agent. The Chrome MCP extension has an Anthropic-side safety-filter block on `betterment.com` and `wealthfront.com` specifically — no user-side toggle can lift it, the agent literally cannot reach those domains. Open `betterment.com` in a regular Chrome window (not via the extension), find the footer Affiliates/Partners link. If it routes through Impact (`Betterment.brand`), use the proven recipe (Sign up with email → existing `bhuttavpn@gmail.com` → "Take me to login" → Google SSO) to bind to the existing publisher account.
3. **Wait on Ethos** — typical Impact contract review is 3–7 business days; we're at day 2.

### Backlog unchanged

- Real affiliate URLs still limited to Wise + SoFi Money (paying) + 2 under review (Ethos, Policygenius).
- GSC indexing — quota still locked until tomorrow.

*Last updated: 2026-06-02 (Affiliate status sweep — no new approvals. CJ "welcome" email is platform welcome not advertiser approval; Webull still $0; Policygenius login needs user; Betterment still extension-blocked. Ethos still pending.)*
