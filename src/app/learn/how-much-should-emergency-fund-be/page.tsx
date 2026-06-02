import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-much-should-emergency-fund-be";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How big should your emergency fund be? (2026 sizing guide)";
const description =
  "The classic '3–6 months of expenses' answer is too generic. The right size depends on income stability, dependents, and health insurance deductible. Here's the framework — 1 month minimum, 3 for stable W-2 incomes, 6 for single-earner households, 9–12 for freelancers and the self-employed.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is 3–6 months really the right answer?",
    a: "It's the right answer for a typical stable W-2 employee with no major risk factors. It's too small for single-earner households, freelancers, and people with chronic health conditions. It's too big for a young, single, fully W-2 employed person who's also actively trying to pay off credit card debt at 25% APR.",
  },
  {
    q: "Should I count expenses or income?",
    a: "Expenses, not income. Specifically, your essential monthly expenses — rent/mortgage, utilities, insurance, groceries, transportation, debt minimums. Discretionary spending (dining, entertainment, travel) doesn't count because you'd cut it during an emergency. For most households, essential expenses are 60–80% of total spending.",
  },
  {
    q: "Where should I keep the emergency fund?",
    a: "A high-yield savings account at a different institution from your daily checking. The separation creates psychological distance (you won't tap it impulsively). The HYSA pays 4%+ in 2026 vs. ~0% in checking, so on a $20K fund you're earning $800/year just for having it there.",
  },
  {
    q: "Can I keep my emergency fund in investments?",
    a: "Not safely. The 2008, 2020, and 2022 crashes all showed why — exactly when you need the cash (job loss during a recession), your stocks are down 30%. The interest rate spread (4% HYSA vs. 7% stocks long-term) sounds tempting but the emergency-timing risk wipes it out.",
  },
  {
    q: "What about a HELOC or credit card as an emergency fund?",
    a: "Backup, not primary. A HELOC has lower rates but takes weeks to draw and can be frozen during exactly the financial conditions you'd need it (banks tightened HELOC access in 2008–2009). Credit cards work for fast emergencies but carry 22–28% APR — only fine if you can pay them off within 1–2 cycles.",
  },
  {
    q: "What if I have debt — fund or pay off first?",
    a: "Both, in stages. Build a $1,000 starter buffer first (enough to absorb most surprise expenses without forcing more debt). Then aggressively pay off high-APR debt while building up to 1 month of expenses. Once all debt over 8% APR is gone, build to full 3–6 month target.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          url,
          title,
          description,
          publishedAt: PUBLISHED,
          updatedAt: PUBLISHED,
          author: "Jahanzeb Nawaz",
        })}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The right size depends on income stability, dependents, health deductible, and access to debt. Here's the framework."
          pillar="Budget"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>"3–6 months of expenses" is the universal answer to the emergency fund
            question — and it's generic enough to be wrong for most people.</strong> A dual-income
            household with stable W-2 jobs and good health insurance needs much less than a
            single-earner freelancer with a chronic medical condition.
          </p>

          <p>
            Here's the honest framework, sized by your actual risk profile.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The risk-adjusted sizing framework</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Profile</th>
                  <th className="py-3 pr-4">Recommended fund</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">Anyone, while paying off high-APR debt</td><td className="py-3 pr-4">$1,000 starter</td></tr>
                <tr><td className="py-3 pr-4">Dual-income W-2, no dependents, both healthy</td><td className="py-3 pr-4">3 months</td></tr>
                <tr><td className="py-3 pr-4">Dual-income W-2 with dependents</td><td className="py-3 pr-4">3–6 months</td></tr>
                <tr><td className="py-3 pr-4">Single-income W-2 household</td><td className="py-3 pr-4">6 months</td></tr>
                <tr><td className="py-3 pr-4">Single-income with dependents</td><td className="py-3 pr-4">6–9 months</td></tr>
                <tr><td className="py-3 pr-4">Self-employed / freelancer / commission</td><td className="py-3 pr-4">9–12 months</td></tr>
                <tr><td className="py-3 pr-4">Self-employed with dependents</td><td className="py-3 pr-4">12+ months</td></tr>
                <tr><td className="py-3 pr-4">Pre-retirement / age 55+</td><td className="py-3 pr-4">12+ months (job-loss recovery is longer)</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>The variables that move the target up</h2>

          <p>Add a month or two of buffer for each of these:</p>

          <ul>
            <li><strong>Single-income household.</strong> No backstop if the earner loses work.</li>
            <li><strong>Dependents (kids, aging parents).</strong> Higher fixed costs you can't easily reduce.</li>
            <li><strong>High-deductible health plan (HDHP).</strong> Add at least the deductible to your fund. A $5K family deductible means $5K of potential surprise medical spend.</li>
            <li><strong>Long employment search risk.</strong> Senior professionals, niche specialists, government employees in restructuring. Job searches at $250K+ can take 6–12 months.</li>
            <li><strong>Variable or commission-based income.</strong> Self-employed and 1099 workers can have multi-month drought periods.</li>
            <li><strong>Owned home with deferred maintenance.</strong> Roof, HVAC, water heater are all 5-figure surprise costs.</li>
            <li><strong>Single car for multi-driver household.</strong> Vehicle breakdown becomes a logistics crisis.</li>
            <li><strong>Living paycheck-to-paycheck</strong> with no cash buffer in checking.</li>
          </ul>

          <p>
            See our <Link href="/learn/how-to-stop-living-paycheck-to-paycheck">stop living paycheck to paycheck</Link>{" "}
            guide if the last one applies.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The variables that allow a smaller fund</h2>

          <ul>
            <li><strong>Dual stable W-2 income.</strong> Job loss for one doesn't end household income.</li>
            <li><strong>High-demand profession with rapid re-employment.</strong> Some software engineering, healthcare, skilled trades.</li>
            <li><strong>Strong family/community safety net.</strong> If you could move home or get short-term help.</li>
            <li><strong>Generous employer severance / unemployment insurance.</strong> Verify how much you'd actually receive.</li>
            <li><strong>Low fixed costs.</strong> Renters with cheap rent and no debt minimums can stretch a fund further.</li>
            <li><strong>Substantial taxable brokerage</strong>. Not a replacement, but if you have $100K+ liquid it adds emergency capacity.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to calculate your "month of expenses"</h2>

          <p>
            <strong>Use essential expenses, not total spending.</strong> Include:
          </p>

          <ul>
            <li>Rent / mortgage</li>
            <li>Utilities (electric, gas, water, internet, phone)</li>
            <li>Insurance (health, auto, life)</li>
            <li>Groceries (not dining out)</li>
            <li>Transportation (gas, transit, basic car maintenance)</li>
            <li>Debt minimums (cards, loans, student debt)</li>
            <li>Childcare (if employed)</li>
            <li>Basic household goods (cleaning, hygiene)</li>
          </ul>

          <p>
            <strong>Exclude</strong> dining out, entertainment, vacations, gym, subscriptions
            (cancellable), and other discretionary spending — you'd cut these during a real
            emergency.
          </p>

          <p>
            <strong>Typical household:</strong> essential expenses run 60–80% of total spending. If
            your total monthly spend is $5,000, your essential is likely ~$3,500–$4,000.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Real examples</h2>

          <p><strong>Example A: 28-year-old single, W-2 software engineer, no debt, renter, $80K income</strong></p>
          <ul>
            <li>Essential expenses: ~$2,800/month</li>
            <li>Target: 3 months × $2,800 = $8,400</li>
            <li>Held in: SoFi HYSA earning 4%+ = ~$340/year of free interest</li>
          </ul>

          <p><strong>Example B: 35-year-old single income, spouse + 2 kids, homeowner, $120K income</strong></p>
          <ul>
            <li>Essential expenses: ~$5,500/month</li>
            <li>Target: 6–9 months × $5,500 = $33K–$49K</li>
            <li>Plus deductible buffer: + $5K for HDHP family deductible</li>
          </ul>

          <p><strong>Example C: 42-year-old self-employed designer, dual-income with W-2 spouse, owns home</strong></p>
          <ul>
            <li>Essential expenses: ~$4,200/month</li>
            <li>Target: 6 months × $4,200 = $25K</li>
            <li>Spouse W-2 provides partial backstop, so lower end of self-employed range</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where to keep it</h2>

          <p>
            <strong>A high-yield savings account at a different institution from daily
            checking.</strong> Two-day ACH transfer is fast enough for real emergencies, slow
            enough to discourage impulse withdrawals.
          </p>

          <p>
            <AffiliateButton partner="sofi-money" source={slug}>
              Open a SoFi HYSA →
            </AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="marcus" source={slug} variant="secondary">Marcus</AffiliateButton>{" "}
            <AffiliateButton partner="ally" source={slug} variant="secondary">Ally</AffiliateButton>
          </p>

          <p>
            Full options in our <Link href="/learn/best-hysa-2026">best HYSA 2026</Link> roundup.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What about treasury bills or money market funds?</h2>

          <p>
            <strong>Reasonable alternatives at scale.</strong> If your emergency fund is $50K+, you
            can split between HYSA (fast access) and Treasury bills (slightly higher yield, 4-week
            to 6-month durations).
          </p>

          <p>
            <strong>The downside:</strong> Treasury bills tie up money for weeks. For most people,
            a single HYSA is simpler and the yield difference is minor relative to the convenience.
          </p>

          <p>
            <strong>Avoid:</strong> any "high-yield" product without FDIC/NCUA insurance, anything
            requiring lock-up over 1 year, anything denominated in volatile currencies/crypto.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually build it</h2>

          <ol>
            <li><strong>Open the HYSA.</strong> 10 minutes.</li>
            <li><strong>Set up direct deposit split.</strong> 5–15% of every paycheck routes there before checking sees it.</li>
            <li><strong>Hit $1,000 first.</strong> 2–4 months for most households.</li>
            <li><strong>Pause savings, kill high-APR debt</strong> (above 8% APR) while keeping the $1,000 starter intact.</li>
            <li><strong>Once high-APR debt is gone, resume saving to 1 month of expenses.</strong></li>
            <li><strong>Then ratchet to your target</strong> (3, 6, 9, or 12 months) based on your risk profile.</li>
            <li><strong>After hitting target, redirect savings to retirement / taxable investing.</strong></li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>The "too big" question</h2>

          <p>
            <strong>Yes, you can have too much in your emergency fund.</strong> A 4% HYSA still
            badly trails 7–10% long-term stock market returns. Above 12 months of expenses, the
            opportunity cost outweighs the safety benefit for most profiles.
          </p>

          <p>
            <strong>Rule of thumb:</strong> hit your target, then redirect new savings to retirement
            and taxable brokerage. Don't keep pouring into the HYSA past 12 months unless your
            specific risk profile (self-employed with major dependents, pre-retirement with
            health concerns) genuinely justifies more.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>The right emergency fund is the smallest one that handles your specific risk
            profile.</strong> For most stable W-2 households: 3–6 months. For single-earner
            households: 6–9. For self-employed: 9–12. Always parked in a separate HYSA earning
            real interest.
          </p>

          <p>
            Once you hit target, stop adding and start investing for the long term.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link></li>
            <li><Link href="/learn/best-hysa-2026">Best HYSA 2026</Link></li>
            <li><Link href="/learn/how-to-stop-living-paycheck-to-paycheck">Stop living paycheck to paycheck</Link></li>
            <li><Link href="/learn/how-to-budget">How to budget</Link></li>
            <li><Link href="/learn/how-to-pay-off-debt">How to pay off debt</Link></li>
            <li><Link href="/learn/hmo-vs-ppo-vs-hdhp">HMO vs. PPO vs. HDHP</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
