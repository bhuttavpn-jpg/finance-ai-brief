import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-choose-a-financial-advisor";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to choose a financial advisor (and when you don't need one)";
const description =
  "Only hire a fee-only fiduciary CFP. Avoid anyone selling commissioned products. The honest version: most people with under $500K don't need a full advisor — they need a robo-advisor or one-time financial plan. Here's how to tell the difference and what each tier costs.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I need a financial advisor?",
    a: "Probably not if your situation is straightforward (single income, W-2, retirement accounts, basic taxable brokerage). A robo-advisor or one-time financial plan covers most needs. You DO need an advisor for complex situations: business owner, equity comp, multi-state, divorce, inheritance, near-retirement transition, or net worth above ~$1M.",
  },
  {
    q: "What's a fiduciary?",
    a: "An advisor legally required to act in your best interest — not their own commission. Not all financial advisors are fiduciaries. Registered Investment Advisors (RIAs) are fiduciaries; broker-dealers are usually held to a 'suitability' standard which is much weaker. Always ask 'Are you a fiduciary 100% of the time?' and get the answer in writing.",
  },
  {
    q: "What's the difference between fee-only and fee-based?",
    a: "Fee-only advisors receive zero commissions — only flat fees, hourly rates, or percentage-of-assets fees from clients. Fee-based advisors receive both fees AND commissions from product providers, which creates conflicts of interest. The naming is deliberately confusing. Only hire fee-only.",
  },
  {
    q: "What credentials should I look for?",
    a: "CFP (Certified Financial Planner) is the gold standard. CFA (Chartered Financial Analyst) is great for investment management but doesn't include financial planning. ChFC is decent. Avoid 'Wealth Manager' or 'Senior Vice President' titles without an underlying credential — those are job titles, not certifications.",
  },
  {
    q: "How much does a financial advisor cost?",
    a: "Three main fee models: (1) AUM (assets under management) — typically 1% per year, so $5K on a $500K portfolio. (2) Flat fee — $2K-$10K per year for ongoing planning, regardless of portfolio size. (3) Hourly — $200-$500 per hour for project work. For most people under $1M, flat-fee or hourly beats AUM by tens of thousands over a lifetime.",
  },
  {
    q: "How do I find one I can trust?",
    a: "Search the NAPFA directory (napfa.org) — every member is fee-only and a fiduciary by membership requirement. The XY Planning Network (xyplanningnetwork.com) is similar and skews toward younger advisors. Avoid going by big-name brokerage advisors — they're often suitability-only and sell their employer's products.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Invest" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The honest version. Most people with under $500K don't need a full advisor. The ones who do, need a specific kind: fee-only, fiduciary, CFP."
          pillar="Invest"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The financial advisor industry is structured to confuse you about who works for
            whom.</strong> "Wealth Advisor," "Financial Consultant," "Senior Vice President of
            Wealth Management" — these are sales titles. The actual relationships are governed by
            obscure-sounding rules (fiduciary vs. suitability, fee-only vs. fee-based) that decide
            whether your advisor is required to put you first.
          </p>

          <p>
            For most households, the right answer isn't an advisor at all. For those who do need
            one, the qualifying filters are narrow.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1 — Do you actually need an advisor?</h2>

          <p>You DON'T need a full advisor if:</p>

          <ul>
            <li>Your income is W-2 (single or dual).</li>
            <li>Your net worth is under $500K.</li>
            <li>You're saving in a 401(k) and IRA, plus maybe a taxable brokerage.</li>
            <li>You don't own a business or have significant equity comp.</li>
            <li>Your tax situation fits in DIY software.</li>
          </ul>

          <p><strong>What you might want instead:</strong></p>

          <ul>
            <li><strong>A robo-advisor</strong> for $0–$25K accounts — Fidelity Go, Wealthfront, Betterment. ~0.25% fee.</li>
            <li><strong>A target-date fund</strong> in your 401(k) for set-and-forget retirement investing.</li>
            <li><strong>A one-time financial plan</strong> from a fee-only CFP ($1,500–$4,000) for a comprehensive review without ongoing management.</li>
            <li><strong>An hourly advisor</strong> for project work like RSU vests, home purchase, retirement transition.</li>
          </ul>

          <p>You DO need a full advisor relationship if:</p>

          <ul>
            <li>Net worth over $1M with multiple account types.</li>
            <li>Equity compensation (RSUs, ISOs, ESPP) materially affecting net worth.</li>
            <li>Self-employed or business owner with retirement plan choices.</li>
            <li>Approaching or in retirement (Social Security timing, Roth conversions, RMDs).</li>
            <li>Major life event: inheritance, divorce, sale of business, sudden wealth.</li>
            <li>Estate planning needs (trusts, gifting strategies).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2 — The 4 qualifying filters</h2>

          <p>If you decide you need an advisor, only hire one who passes all four filters:</p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Filter</th>
                  <th className="py-3 pr-4">What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">1. Fiduciary 100% of the time</td><td className="py-3 pr-4">Legally required to act in your best interest in every interaction, not just for "advice."</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">2. Fee-only</td><td className="py-3 pr-4">Compensated solely by client fees. No commissions from product providers.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">3. CFP credential</td><td className="py-3 pr-4">Passed the rigorous CFP exam and committed to ongoing education.</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">4. Independent or RIA</td><td className="py-3 pr-4">Not a wirehouse broker-dealer employee with quota incentives.</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>An advisor failing any of these is selling you products, not advising you.</strong>{" "}
            That includes most "advisors" at the big retail brokerage chains.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3 — Fee structure decoded</h2>

          <h3>AUM (Assets Under Management) — typically 1% per year</h3>

          <p>
            <strong>The most common model, and almost always the worst deal for the client.</strong>{" "}
            On a $500K portfolio: $5,000/year. On a $1M portfolio: $10,000/year. The advisor's work
            doesn't scale with portfolio size — managing $5M takes the same hours as managing $500K
            for most clients.
          </p>

          <p>
            <strong>Where AUM makes sense:</strong> clients who want full delegation and have
            complex ongoing tax and estate situations. Most others come out ahead with flat-fee or
            hourly.
          </p>

          <h3>Flat fee — $2,000–$10,000 per year</h3>

          <p>
            <strong>Increasingly popular among fee-only CFPs.</strong> Predictable cost regardless
            of portfolio size. Best fit for moderately complex clients who want ongoing planning
            without portfolio management.
          </p>

          <h3>Hourly — $200–$500 per hour</h3>

          <p>
            <strong>Best for project-based needs.</strong> One-time decisions like RSU vesting,
            Social Security timing, or whether to take a pension lump sum. Total cost typically
            $500–$3,000 per project.
          </p>

          <h3>One-time comprehensive plan — $1,500–$4,000</h3>

          <p>
            <strong>The single best ROI for many households.</strong> Comprehensive review of your
            full picture: cash flow, retirement projection, insurance, tax strategy, estate basics.
            Implementation is on you. Refresh every 3–5 years or after major life events.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4 — Where to find them</h2>

          <p>
            Two directories provide pre-filtered options that all pass the four filters above:
          </p>

          <ul>
            <li>
              <strong>NAPFA</strong> (National Association of Personal Financial Advisors) —{" "}
              <a href="https://www.napfa.org/" target="_blank" rel="noopener noreferrer">napfa.org</a>.
              Members are fee-only fiduciaries by membership requirement. Includes the largest
              independent advisors.
            </li>
            <li>
              <strong>XY Planning Network</strong> —{" "}
              <a href="https://www.xyplanningnetwork.com/" target="_blank" rel="noopener noreferrer">xyplanningnetwork.com</a>.
              Fee-only fiduciaries focused on younger clients; many offer flat-fee or monthly subscription pricing.
            </li>
          </ul>

          <p>
            Both directories let you filter by location, specialty (FIRE, equity comp, business
            owner, etc.), and fee structure.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 5 — Interview questions to ask</h2>

          <ol>
            <li><strong>"Are you a fiduciary 100% of the time?"</strong> Anything less than yes — walk away.</li>
            <li><strong>"How are you compensated?"</strong> Want to hear: only from client fees. If they mention "commissions" or "products," walk away.</li>
            <li><strong>"What's your CFP certification number?"</strong> Verify at cfp.net.</li>
            <li><strong>"Can I see your ADV Part 2A?"</strong> SEC-required disclosure document; lists fees, conflicts, disciplinary history.</li>
            <li><strong>"What's your investment philosophy?"</strong> Want low-cost passive indexing. Run if they pitch picking individual stocks or chasing themes.</li>
            <li><strong>"Do you do tax planning?"</strong> Real advisors coordinate with your CPA on annual tax strategy; product-pushers don't.</li>
            <li><strong>"How often do we talk?"</strong> 2–4 substantive meetings per year is normal. Quarterly check-ins, annual deep review.</li>
            <li><strong>"Can you give me 3 client references in my situation?"</strong> If they refuse, that's information.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Red flags during the interview</h2>

          <ul>
            <li>They lead with investment performance claims ("we beat the market last year").</li>
            <li>They push annuities, whole life insurance, or "alternative investments" early.</li>
            <li>They can't or won't explain their fee structure clearly.</li>
            <li>They tell you not to invest in your 401(k) and instead put money with them.</li>
            <li>They guarantee returns.</li>
            <li>They pressure you to decide quickly.</li>
            <li>They refuse to give you a written advisory agreement before any commitment.</li>
            <li>They mention "free" services — financial advice is never free; you're paying somewhere.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The robo-advisor alternative</h2>

          <p>
            <strong>For investors under $500K with simple situations, a robo-advisor at ~0.25%
            fee handles 80% of what a full advisor does — automated rebalancing, tax-loss harvesting,
            and portfolio allocation based on a risk questionnaire.</strong>
          </p>

          <ul>
            <li><strong>Betterment</strong> — broadest robo, includes optional human CFP access at higher tiers.</li>
            <li><strong>Wealthfront</strong> — better tax-loss harvesting, no human option.</li>
            <li><strong>Fidelity Go</strong> — free under $25K, no minimum.</li>
            <li><strong>Schwab Intelligent Portfolios</strong> — no advisory fee but holds cash (drag on returns).</li>
          </ul>

          <p>
            <AffiliateButton partner="betterment" source={slug}>
              See Betterment →
            </AffiliateButton>
          </p>

          <p>
            Or:{" "}
            <AffiliateButton partner="wealthfront" source={slug} variant="secondary">Wealthfront</AffiliateButton>{" "}
            <AffiliateButton partner="fidelity" source={slug} variant="secondary">Fidelity Go</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>When to upgrade from robo to a real advisor</h2>

          <ul>
            <li>Net worth crosses $500K–$1M, especially with equity comp.</li>
            <li>You become self-employed or start a business.</li>
            <li>You're within 10 years of retirement and need transition planning.</li>
            <li>You receive a sudden lump sum (inheritance, sale, settlement).</li>
            <li>Your tax situation outgrows DIY software.</li>
            <li>Estate planning becomes relevant (trusts, gifting, taxable estate threshold).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Most people don't need a full financial advisor.</strong> A robo-advisor for
            $0–$500K + a one-time CFP plan + DIY tax software covers what most households need at
            a small fraction of the cost.
          </p>

          <p>
            When you DO need an advisor, only hire a <strong>fee-only fiduciary CFP</strong>. The
            NAPFA and XY Planning Network directories make this filter easy. The wrong advisor can
            cost you 10–20× the advisor fee in bad product sales, suboptimal tax strategy, and
            ill-suited investments. The right advisor pays for themselves several times over for
            complex situations.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners</Link></li>
            <li><Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link></li>
            <li><Link href="/learn/vanguard-vs-fidelity">Vanguard vs. Fidelity</Link></li>
            <li><Link href="/learn/how-to-invest-in-stocks">How to invest in stocks</Link></li>
            <li><Link href="/learn/how-much-do-i-need-to-retire">How much do I need to retire?</Link></li>
            <li><Link href="/learn/when-to-hire-a-cpa">When to hire a CPA</Link></li>
            <li><Link href="/learn/dollar-cost-averaging-vs-lump-sum">DCA vs. lump sum</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
