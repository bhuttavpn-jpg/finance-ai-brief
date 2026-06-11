import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "vanguard-vs-fidelity";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Vanguard vs. Fidelity: Which brokerage is right for you?";
const description =
  "An honest 2026 comparison. Vanguard wins on philosophy and ownership structure but loses on tech and customer service. Fidelity wins on tools, app, and breadth — and matches Vanguard on cost for most index funds. Here's who each broker actually fits.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Is Vanguard or Fidelity better for beginners?",
    a: "Fidelity, by a meaningful margin. The app is modern, account opening is fast, fractional shares of stocks and ETFs are supported, and customer service is genuinely helpful. Vanguard's site and app have improved but still feel a generation behind. For a first investing account in 2026, Fidelity wins.",
  },
  {
    q: "Which has lower fees?",
    a: "Roughly tied for the funds most people own. Vanguard's flagship index funds (VTSAX, VTI, VOO) charge 0.03–0.04%. Fidelity's equivalents (FZROX, FSKAX, FXAIX) charge 0% to 0.015%. Both offer commission-free stock and ETF trades, no account minimums on most account types, and no account maintenance fees.",
  },
  {
    q: "Does Vanguard's mutual ownership structure matter?",
    a: "Philosophically yes; practically very little for the end user. Vanguard is owned by its fund shareholders — meaning profits flow back to lower expense ratios. Fidelity is privately held by the Johnson family. The user-experienced cost difference is now negligible because both charge near-zero on flagship index funds. Vanguard's structure matters more for long-term cultural alignment than for next year's returns.",
  },
  {
    q: "What about for retirement accounts?",
    a: "Both support traditional IRAs, Roth IRAs, SEP-IRAs, Solo 401(k)s, and rollovers. Fidelity is generally faster to set up and easier to navigate. Vanguard has a slight edge on target-date funds with the lowest expense ratios in the industry.",
  },
  {
    q: "Can I hold Vanguard funds at Fidelity?",
    a: "Yes — Fidelity sells Vanguard mutual funds, sometimes with a transaction fee, and Vanguard ETFs (VTI, VOO, VXUS) trade commission-free at Fidelity just like anywhere else. Many investors keep their account at Fidelity but own primarily Vanguard ETFs.",
  },
  {
    q: "Which has better customer service?",
    a: "Fidelity, clearly. Phone support is faster, agents are knowledgeable, and they offer in-person branches in many U.S. cities. Vanguard support has improved but remains a common complaint — long hold times and inconsistent rep quality. For complex retirement rollovers, the difference matters.",
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
          subtitle="Vanguard wins on philosophy; Fidelity wins on user experience. For most people in 2026, that makes Fidelity the right pick."
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
            <strong>Both Vanguard and Fidelity are excellent brokerages.</strong> Both have
            essentially eliminated the fees and trade commissions that made the broker choice matter
            two decades ago. The real difference today is user experience: app quality, support
            speed, and breadth of features.
          </p>

          <p>
            On that axis, <strong>Fidelity wins for most investors in 2026</strong>. But Vanguard's
            ownership philosophy and flagship index funds still make it the right pick for a
            specific kind of long-haul, hands-off index investor.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Quick comparison</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Vanguard</th>
                  <th className="py-3 pr-4">Fidelity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Stock/ETF trades</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$0</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Account minimum</td><td className="py-3 pr-4">$0 (most)</td><td className="py-3 pr-4">$0</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Flagship total US fund</td><td className="py-3 pr-4">VTSAX 0.04% / VTI 0.03%</td><td className="py-3 pr-4">FZROX 0% / FSKAX 0.015%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">S&amp;P 500 fund</td><td className="py-3 pr-4">VOO 0.03%</td><td className="py-3 pr-4">FXAIX 0.015%</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Fractional shares</td><td className="py-3 pr-4">ETFs only</td><td className="py-3 pr-4">Yes — stocks &amp; ETFs ($1 min)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">App quality</td><td className="py-3 pr-4">Improved, still dated</td><td className="py-3 pr-4">Modern, well-designed</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Customer service</td><td className="py-3 pr-4">Inconsistent, long hold times</td><td className="py-3 pr-4">Fast, knowledgeable</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">HSA</td><td className="py-3 pr-4">Not offered</td><td className="py-3 pr-4">Top-tier (Fidelity HSA)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Cash management / debit card</td><td className="py-3 pr-4">Limited</td><td className="py-3 pr-4">Full CMA with FDIC sweep</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Robo-advisor</td><td className="py-3 pr-4">Digital Advisor ($3K min)</td><td className="py-3 pr-4">Fidelity Go (no min)</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>Where Vanguard wins</h2>

          <ul>
            <li><strong>Ownership structure.</strong> Vanguard is owned by the funds, which are owned by the investors. Profits flow back to lower expense ratios over time. Fidelity is private and profit-seeking.</li>
            <li><strong>Lowest target-date fund expenses</strong> — the Vanguard Target Retirement series charges 0.08% vs. Fidelity Freedom Index at 0.12%. Small but compounds.</li>
            <li><strong>Pure index-fund culture.</strong> Vanguard built the index fund industry. The default funds are excellent and the firm rarely pushes higher-margin products on customers.</li>
            <li><strong>Slightly better behavior for buy-and-hold investors</strong> — the platform is so clunky that you're less tempted to tinker. Real benefit for impulsive personalities.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Where Fidelity wins</h2>

          <ul>
            <li><strong>App and website.</strong> Modern, fast, well-designed. Vanguard's still feels like it's running on 2012 infrastructure with a 2020 paint job.</li>
            <li><strong>Customer service.</strong> Faster phone support, more knowledgeable reps, in-person branches.</li>
            <li><strong>Fractional shares of individual stocks.</strong> Vanguard offers fractional only on ETFs, not stocks.</li>
            <li><strong>HSA.</strong> The Fidelity HSA is widely considered the best HSA in the industry — no fees, no minimum to invest, full brokerage access. Vanguard doesn't offer one at all.</li>
            <li><strong>Cash management.</strong> The Fidelity CMA functions as a real checking replacement — debit card, ATM fee reimbursement, FDIC sweep.</li>
            <li><strong>Better robo-advisor for small accounts.</strong> Fidelity Go has no minimum and is free under $25K. Vanguard Digital Advisor requires $3K.</li>
            <li><strong>Zero-expense-ratio mutual funds.</strong> FZROX, FZILX, FNILX, FZIPX — 0.00% expense ratio, no transaction fee. Catch: only available inside Fidelity accounts (they're not portable to another brokerage).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The "zero" fund catch at Fidelity</h2>

          <p>
            <strong>Fidelity's zero-expense-ratio funds (FZROX, FZILX, FNILX) are excellent — with
            one important caveat.</strong> They're proprietary to Fidelity and can't be transferred
            in-kind to another brokerage. If you ever move your account to another broker, you'd
            have to sell the funds first — triggering capital gains if held in a taxable account.
          </p>

          <p>
            <strong>The fix:</strong> use FSKAX (0.015%) and FTIHX (0.06%) in taxable accounts —
            both can transfer in-kind to other brokers. Use FZROX/FZILX freely inside IRAs/401(k)s
            where the portability issue doesn't matter.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who should pick Vanguard</h2>

          <ul>
            <li>You believe in the ownership philosophy and want your dollars going to the firm that built passive investing.</li>
            <li>You're a pure buy-and-hold target-date investor who rarely logs in.</li>
            <li>You're not interested in HSA, cash management, fractional stocks, or a polished app.</li>
            <li>You already have a Vanguard account — switching isn't worth the friction.</li>
          </ul>

          <p>
            <AffiliateButton partner="vanguard" source={slug}>
              Open a Vanguard account →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Who should pick Fidelity</h2>

          <ul>
            <li>You're new to investing — Fidelity's UX shortens the learning curve materially.</li>
            <li>You want everything in one place: brokerage + IRA + HSA + cash management.</li>
            <li>You'll use fractional stock shares to dollar-cost average into individual companies.</li>
            <li>You value good customer service.</li>
            <li>You want a free robo-advisor for the under-$25K portion of your portfolio.</li>
          </ul>

          <p>
            <AffiliateButton partner="fidelity" source={slug}>
              Open a Fidelity account →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What about Schwab?</h2>

          <p>
            Schwab is the third member of the Big Three brokerages and competitive with Fidelity on
            almost every axis. We cover the head-to-head in our{" "}
            <Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link> comparison. Short
            version: Fidelity has the edge on HSA and zero-expense funds; Schwab has the edge on
            international stock trading and the Schwab High-Yield Checking that pairs with the
            brokerage.
          </p>

          <p>
            <AffiliateButton partner="schwab" source={slug} variant="secondary">
              Compare Schwab
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The portfolio doesn't change much</h2>

          <p>
            <strong>Important: which broker you pick barely affects your returns.</strong> The
            actual investment decisions — asset allocation, savings rate, time in market — drive
            ~99% of long-term outcome. The broker choice is a UX decision, not an investment
            decision.
          </p>

          <p>
            A 3-fund portfolio at either broker looks roughly identical:
          </p>

          <ul>
            <li><strong>Vanguard:</strong> VTI + VXUS + BND</li>
            <li><strong>Fidelity (portable):</strong> FSKAX + FTIHX + FXNAX</li>
            <li><strong>Fidelity (zero-fund):</strong> FZROX + FZILX + FXNAX</li>
          </ul>

          <p>
            All three combinations track the same global market exposure at near-zero cost.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>For most people opening a brokerage in 2026, Fidelity is the right
            answer.</strong> Better app, better service, more features, equally low fees, plus a
            best-in-class HSA option.
          </p>

          <p>
            For long-haul index investors who care more about ownership philosophy than UX, Vanguard
            is still excellent. And for anyone with an existing account at either, the answer is
            almost always "stay where you are" — the differences aren't worth the friction of moving
            assets.
          </p>

          <p>
            For a deeper look at how Fidelity stacks against its closest peer, see{" "}
            <Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link>.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/fidelity-vs-schwab">Fidelity vs. Schwab</Link></li>
            <li><Link href="/learn/best-brokerage-accounts-beginners">Best brokerage accounts for beginners</Link></li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest $1,000</Link></li>
            <li><Link href="/learn/how-to-invest-in-stocks">How to invest in stocks</Link></li>
            <li><Link href="/learn/best-hsa-providers">Best HSA providers</Link></li>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Invest" currentSlug="vanguard-vs-fidelity" />
      </article>
    </>
  );
}
