# Source-platform response log

One row per pitch. Update when status changes (pickup, link published, dead).

Pickup rate target per kit: ~5%, ~1 link/month at 5 pitches/week pace.

| Date sent | Platform | Outlet | Query topic | Pitch angle (1-line) | Status | Link URL |
|---|---|---|---|---|---|---|
| 2026-06-15 | Qwoted | MoneyWise | CoastFIRE assumptions + overlooked expenses | Q2 sequence risk + Q4 healthcare/LTC | sent | — |
| 2026-06-15 | Qwoted | Realtor.com | Older millennials $427K retirement shortfall | Q1 catch-up math is recoverable + Q2 layering, not housing alone | sent | — |
| 2026-06-15 | Qwoted | MoneyLion | Americans feel ready for retirement — key concepts | SECURE 2.0 super catch-up, sequence risk, healthcare carve-out | sent | — |
| 2026-06-16 | Qwoted | MoneyWise | Pitch READ signal | — | ambiguous — see 2026-06-17 note | — |
| 2026-06-16 | Qwoted | Realtor.com | Pitch READ signal | — | ambiguous — see 2026-06-17 note | — |
| 2026-06-17 | Qwoted | Martha Stewart Living | Tax/financial paperwork: what to keep, toss, dispose | Direct 5-question Q&A — IRS Topic 305, Pub 583, Rev. Proc. 97-22 anchors | drafted, blocked | — |
| 2026-06-17 | Qwoted | Parade | Realistic emergency savings target | SKIPPED — query expired + reporter declared enough pitches | skipped | — |

## 2026-06-17 — Qwoted account temporarily disabled

When logging in to send the Martha Stewart Living pitch, the dashboard surfaced an **"Account temporarily disabled"** banner with an instruction to chat with support. Support agent (Therese) requested links to a professional bio / LinkedIn and a company website to push the account through internal vetting and re-enable.

**Reply sent:**
- Company: `https://finbrief.space`
- Author/bio: `https://finbrief.space/author/jahanzeb-nawaz`
- No LinkedIn — Finbrief is the primary professional channel.

**Side-effect: pitch stats reset to 0.** The dashboard now shows `Pitches Sent: 0 / Profile Views: 0 / Media Response Rate: N/A / Media Connections: 0`, despite three pitches having been sent on 2026-06-15. The two "Brian O'Connell from MoneyWise read your pitch" and "Anna Baluch from Realtor.com read your pitch" inbox notifications (Jun 16) are therefore downgraded to `ambiguous` until verified post-reinstatement — they may have been automated nudge emails rather than real reporter opens, especially given the account was flagged for vetting around the same time.

**Hypothesis to test if reinstated:** vetting may have been triggered by the three 2026-06-15 pitches looking too template-similar (all retirement-themed, sent same day, same author with no LinkedIn). When the queue refills, space pitches 2–3 days apart and vary the article angles cited.

**Status:** waiting on Qwoted vetting team. Martha Stewart Living pitch is drafted (in SESSION_LOG / commit history) and ready to send the moment the account is back. Track ~3–7 business days for verification turnaround.

## Status values
- `sent` — pitch submitted, no reply yet
- `picked` — reporter responded, quote selected, awaiting publish
- `published` — article live with backlink (paste URL)
- `passed` — reporter explicitly passed
- `dead` — query closed, no pickup

## Per-platform account state (2026-06-16)

| Platform | Status | Notes |
|---|---|---|
| Qwoted | ✅ Active | Profile 100%, 4 of 7 free pitch credits remaining after first batch. Login: admin@finbrief.space. |
| Featured.com | ⚠️ Account only | Account created + email verified. Featured was rebuilt as a PR co-pilot chat — no expert profile/directory anymore. Pitches sent through their chat are the only signal. Revisit only if Qwoted under-delivers. |
| MentionMatch | ✅ Subscribed | Email-digest only (no profile). Categories: Finance + Insurance. Daily emails to admin@finbrief.space. |
| Help a B2B Writer | ✅ Covered | `helpab2bwriter.com` now 301-redirects to MentionMatch — merged into the same operator. MentionMatch subscription covers it. |
| SourceBottle | ✅ Expert profile live | `sourcebottle.com/expert-account.asp`. Free expert profile (not just digest). Categories: Business & Finance + Lifestyle. The playbook's `/sources-signup.asp` URL is 404 — current real URL is `/expert-account.asp`. |
| HARO / Connectively | ❌ Dead | Shut down by Cision 2024-12-09. Do not chase. `connectively.us/expert-pages` signup form still loads but is zombie infra or a squatter — do not submit. |

*Last updated: 2026-06-16. Critical #3 (inbound-link bootstrap) fully closed for now: 5 source platforms active, 3 pitches in flight on Qwoted.*
