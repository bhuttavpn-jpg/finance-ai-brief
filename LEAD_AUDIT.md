# Article lead audit

Generated 2026-06-11 by `scripts/audit-leads.mjs`.

Ranked worst → best. "Lead" = first `<p className="lead">` (or first `<p>` inside the prose block if no lead class). Heuristic only — no LLM. Flags are signals to review, not definitive.

## Triage note (2026-06-09)

Initial audit flagged 9 hard fails. The 2 score-0 articles
(`how-to-budget-50-30-20` and `roth-ira-vs-traditional-ira`) were
missing leads entirely — both fixed in the same commit as this audit
shipped.

The remaining 7 "rewrite candidates" (score 45–60) fail the strict
≤2-sentence heuristic but their **first sentence answers the title
and includes a number or strong claim verb** — which is what
featured-snippet extractors actually use (~first 50 words). Decision:
leave them. Tighten on a future content-refresh pass only if they're
not earning snippet impressions in GSC.

The 49 minor-issue articles are sentence-count flags only — content
is well-written. Same logic applies.

## Summary

- 🟥 **7** rewrite candidates (score < 70)
- 🟧 **49** minor issues (70 ≤ score < 100)
- 🟩 **36** clean (score = 100)

## Rewrite candidates

### how-to-choose-a-financial-advisor (score 45)
**Title:** How to choose a financial advisor (and when you don't need one)

**Flags:** 5 sentences (target ≤ 2); 377 chars (target ≤ 350)

**Current lead:**

> The financial advisor industry is structured to confuse you about who works for whom. "Wealth Advisor," "Financial Consultant," "Senior Vice President of Wealth Management" — these are sales titles. The actual relationships are governed by obscure-sounding rules (fiduciary vs. suitability, fee-only vs. fee-based) that decide whether your advisor is required to put you first.

---

### asset-allocation-by-age (score 55)
**Title:** Asset allocation by age: A practical glide path

**Flags:** 5 sentences (target ≤ 2)

**Current lead:**

> Asset allocation — your stock/bond split — drives the vast majority of your portfolio's risk and return. It matters more than picking the "right" funds. More than market timing. More than tax-loss harvesting. Get this one decision roughly right, then automate everything around it.

---

### how-to-save-money-fast (score 55)
**Title:** How to save money fast: 25 moves that actually work

**Flags:** 5 sentences (target ≤ 2)

**Current lead:**

> The "save money fast" content online overstates small wins and understates the big ones. Skipping coffee saves $400/year if you actually commit. Re-shopping your car insurance saves $300–$600/year in a single 30-minute sitting. Refinancing credit card debt saves $1,000+/year. The math differs by an order of magnitude.

---

### when-to-take-social-security (score 55)
**Title:** When to take Social Security: The 62 vs. 67 vs. 70 decision

**Flags:** 5 sentences (target ≤ 2)

**Current lead:**

> Claiming Social Security is a one-time, mostly-irreversible decision that changes your monthly check for life. Claim at 62 and you lock in ~70% of your Full Retirement Age (FRA) benefit forever. Wait until 70 and you collect ~124%. The gap — about 77% more per month at 70 vs. 62 — is the biggest lever most retirees have.

---

### disability-insurance-guide (score 60)
**Title:** Disability insurance: The coverage most people skip and shouldn't

**Flags:** 4 sentences (target ≤ 2); 367 chars (target ≤ 350)

**Current lead:**

> If your income stopped tomorrow, how long could you keep the lights on? For most working Americans, the honest answer is months, not years. Disability insurance replaces 60–70% of your income if you can't work — and statistically, you're far more likely to need it than life insurance. Yet about 70% of US private-sector workers have no long-term disability coverage.

---

### hmo-vs-ppo-vs-hdhp (score 60)
**Title:** HMO vs. PPO vs. HDHP: How to pick a health plan

**Flags:** 4 sentences (target ≤ 2); 352 chars (target ≤ 350)

**Current lead:**

> The right health plan depends on how much care you actually use, not on which premium looks lowest. A healthy 28-year-old picking an HDHP and maxing the HSA is making the smartest financial move available in U.S. healthcare. A 45-year-old with two prescriptions and a chronic specialist picking the same HDHP can lose $5,000+ a year vs. the PPO option.

---

### umbrella-insurance-guide (score 60)
**Title:** Umbrella insurance: A $1M policy for under $400/year

**Flags:** 4 sentences (target ≤ 2); 354 chars (target ≤ 350)

**Current lead:**

> Most car-accident lawsuits settle for less than the at-fault driver's liability limits. The minority that don't can wipe out a lifetime of savings. An umbrella policy sits above your auto and home liability, adds $1M–$5M of coverage, and costs less than a streaming subscription bundle. It's the single best dollar-per-coverage buy in personal insurance.

---

## Minor issues

- **estate-planning-basics** (70) — 4 sentences (target ≤ 2)
- **how-much-do-i-need-to-retire** (70) — 4 sentences (target ≤ 2)
- **how-to-budget** (70) — 4 sentences (target ≤ 2)
- **qualified-vs-ordinary-dividends** (70) — 4 sentences (target ≤ 2)
- **short-vs-long-term-capital-gains** (70) — 4 sentences (target ≤ 2)
- **best-car-insurance-companies-2026** (75) — 3 sentences (target ≤ 2); 364 chars (target ≤ 350)
- **identity-theft-protection** (75) — 3 sentences (target ≤ 2); 354 chars (target ≤ 350)
- **sequence-of-returns-risk** (75) — 3 sentences (target ≤ 2); 400 chars (target ≤ 350)
- **student-loan-refinance** (75) — 3 sentences (target ≤ 2); 374 chars (target ≤ 350)
- **couples-budgeting-guide** (80) — no number or strong verb
- **hsa-as-retirement-account** (80) — no number or strong verb
- **529-plan-guide** (85) — 3 sentences (target ≤ 2)
- **best-budgeting-apps-2026** (85) — 3 sentences (target ≤ 2)
- **best-business-credit-cards** (85) — 3 sentences (target ≤ 2)
- **best-credit-cards-for-beginners** (85) — 3 sentences (target ≤ 2)
- **best-life-insurance-companies-2026** (85) — 3 sentences (target ≤ 2)
- **best-personal-loans-2026** (85) — 3 sentences (target ≤ 2)
- **credit-utilization-ratio** (85) — 3 sentences (target ≤ 2)
- **debt-snowball-vs-avalanche** (85) — 3 sentences (target ≤ 2)
- **dollar-cost-averaging-vs-lump-sum** (85) — 3 sentences (target ≤ 2)
- **espp-guide** (85) — 3 sentences (target ≤ 2)
- **fidelity-vs-schwab** (85) — 3 sentences (target ≤ 2)
- **fire-movement-guide** (85) — 3 sentences (target ≤ 2)
- **fsa-explainer** (85) — 3 sentences (target ≤ 2)
- **how-credit-cards-work** (85) — 3 sentences (target ≤ 2)
- **how-much-car-insurance-do-i-need** (85) — 3 sentences (target ≤ 2)
- **how-much-to-contribute-to-401k** (85) — 3 sentences (target ≤ 2)
- **how-to-check-credit-score-for-free** (85) — 3 sentences (target ≤ 2)
- **how-to-invest-1000-beginners** (85) — 3 sentences (target ≤ 2)
- **how-to-lower-car-insurance** (85) — 3 sentences (target ≤ 2)
- **how-to-pay-off-credit-card-debt** (85) — 3 sentences (target ≤ 2)
- **how-to-pay-off-debt** (85) — 3 sentences (target ≤ 2)
- **how-to-stop-living-paycheck-to-paycheck** (85) — 3 sentences (target ≤ 2)
- **ira-rmd-rules** (85) — 3 sentences (target ≤ 2)
- **long-term-care-insurance** (85) — 3 sentences (target ≤ 2)
- **mutual-funds-vs-etfs** (85) — 3 sentences (target ≤ 2)
- **personal-loan-vs-credit-card** (85) — 3 sentences (target ≤ 2)
- **renters-vs-homeowners-insurance** (85) — 3 sentences (target ≤ 2)
- **roth-ira-5-year-rules** (85) — 3 sentences (target ≤ 2)
- **secure-2-0-changes-2026** (85) — 3 sentences (target ≤ 2)
- **sofi-personal-loan-review** (85) — 3 sentences (target ≤ 2)
- **standard-vs-itemized-deduction** (85) — 3 sentences (target ≤ 2)
- **tax-brackets-2026** (85) — 3 sentences (target ≤ 2)
- **turbotax-vs-taxact** (85) — 3 sentences (target ≤ 2)
- **vanguard-vs-fidelity** (85) — 3 sentences (target ≤ 2)
- **webull-review** (85) — 3 sentences (target ≤ 2)
- **what-affects-your-credit-score** (85) — 3 sentences (target ≤ 2)
- **when-to-hire-a-cpa** (85) — 3 sentences (target ≤ 2)
- **when-to-refinance-mortgage** (85) — 3 sentences (target ≤ 2)
