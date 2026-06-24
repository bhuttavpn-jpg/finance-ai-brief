import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-save-for-a-house";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to save for a house down payment in 2026: timelines, accounts, and strategies";
const description =
  "Saving for a house down payment takes 3–7 years for most first-time buyers. Here's a realistic savings plan: how much you actually need, where to park the money, and the strategies that accelerate the timeline without taking on risk you can't afford.";
const PUBLISHED = "2026-06-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How much do I need for a down payment?",
    a: "It depends on the loan type. Conventional loans accept as little as 3% down (but require PMI below 20%). FHA loans require 3.5% with a 580+ credit score. VA and USDA loans are 0% down for eligible borrowers. On a $400,000 home: 3% = $12,000; 10% = $40,000; 20% = $80,000. Don't forget closing costs (2–5% of the purchase price) and 3–6 months of reserves many lenders require.",
  },
  {
    q: "Should I put 20% down or buy sooner with less?",
    a: "20% down eliminates PMI (typically $50–$200/month) and gives you a lower rate and payment. But waiting years longer to save the extra money means years of continued renting. Run the math: if your monthly PMI is $150 and you'd save $150/month by waiting 4 more years, you've paid $7,200 in rent you'll never recover. Buying sooner at 10% down is often the right call in appreciating markets.",
  },
  {
    q: "What's the best account to save a down payment in?",
    a: "A high-yield savings account (HYSA) is the right choice for most people with a 1–4 year timeline — currently paying 4–5% APY with FDIC insurance. For timelines under 2 years, avoid anything with market risk. For 4+ year timelines, short-duration bond funds or CDs can add slightly more yield without meaningful risk.",
  },
  {
    q: "Can I use my Roth IRA for a down payment?",
    a: "Yes, partially. You can withdraw your Roth IRA contributions (not earnings) at any time tax- and penalty-free. Additionally, first-time homebuyers can withdraw up to $10,000 in earnings without the 10% penalty (though earnings are still taxable unless the account is 5+ years old). This is a one-time lifetime limit per person.",
  },
  {
    q: "Are there first-time homebuyer programs that help with the down payment?",
    a: "Yes. State HFAs (Housing Finance Agencies) offer down payment assistance grants and low-rate first mortgages. Fannie Mae HomeReady and Freddie Mac Home Possible allow 3% down with reduced PMI. FHA loans accept gift funds for the entire down payment. HUD's website lists every state and local program — search 'HUD approved housing counseling agencies' for free guidance.",
  },
  {
    q: "How long does it realistically take to save for a down payment?",
    a: "The median first-time buyer in the U.S. saves for 5–7 years. At a $60,000 income saving 20% ($12,000/year), a 10% down payment on a $300,000 home ($30,000) takes 2.5 years. On a median-priced home ($420,000), a 10% down payment ($42,000) takes 3.5 years. The timeline compresses significantly with a dedicated HYSA, side income, and cuts to discretionary spending.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Budget" })} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={howToJsonLd({
          name: "How to save for a house down payment",
          steps: [
            { name: "Set a target number", text: "Research home prices in your target area. Decide on a down payment percentage (3%, 10%, or 20%) and add 3–5% for closing costs. That's your savings target." },
            { name: "Open a dedicated HYSA", text: "Open a separate high-yield savings account just for the down payment. Segregating the funds prevents spending and makes progress visible." },
            { name: "Automate monthly transfers", text: "Set up a recurring transfer from your checking account on payday. Saving 15–20% of take-home pay is the benchmark; adjust based on your timeline." },
            { name: "Reduce the timeline with windfalls", text: "Deposit tax refunds, bonuses, and any side hustle income directly into the down payment account. Windfalls compress timelines dramatically." },
            { name: "Research first-time buyer programs", text: "Check your state's HFA website for down payment assistance, reduced PMI programs, or below-market-rate first mortgages. Many programs go unused." },
            { name: "Get pre-approved 3–6 months before buying", text: "A mortgage pre-approval shows sellers you're serious and locks your rate window. Use it to verify you're saving enough for the lender's reserve requirements too." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The down payment isn't the only number. Here's the full savings target, the right account, and how to cut years off the timeline."
          pillar="Budget"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="8 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Most first-time buyers underestimate the target by 30–50%</strong> — because the down payment isn&apos;t the only cash needed at closing. Add closing costs (2–5%), lender reserves (2–6 months of payments), and moving costs, and the real number can be 1.5× the down payment alone.
          </p>

          <p>
            The good news: with a dedicated high-yield savings account and a clear monthly target, most people can reach a 10% down payment on a median-priced home in 3–4 years. Here&apos;s the math and the plan.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1 — Know your actual target</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Home price</th>
                  <th className="py-3 pr-4">3% down</th>
                  <th className="py-3 pr-4">10% down</th>
                  <th className="py-3 pr-4">20% down</th>
                  <th className="py-3 pr-4">+ Closing costs (3%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">$250,000</td><td className="py-3 pr-4">$7,500</td><td className="py-3 pr-4">$25,000</td><td className="py-3 pr-4">$50,000</td><td className="py-3 pr-4">+$7,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$350,000</td><td className="py-3 pr-4">$10,500</td><td className="py-3 pr-4">$35,000</td><td className="py-3 pr-4">$70,000</td><td className="py-3 pr-4">+$10,500</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$420,000</td><td className="py-3 pr-4">$12,600</td><td className="py-3 pr-4">$42,000</td><td className="py-3 pr-4">$84,000</td><td className="py-3 pr-4">+$12,600</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">$550,000</td><td className="py-3 pr-4">$16,500</td><td className="py-3 pr-4">$55,000</td><td className="py-3 pr-4">$110,000</td><td className="py-3 pr-4">+$16,500</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Add the down payment + closing costs + 2 months of estimated mortgage payments (typical reserve requirement) to get your real cash-to-close number. <strong>Always save for this combined total, not just the down payment.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2 — Open a dedicated high-yield savings account</h2>

          <p>
            A down payment fund needs two things: <strong>safety</strong> (no market risk) and <strong>yield</strong> (growing while you wait). A high-yield savings account (HYSA) at an online bank delivers both — FDIC-insured, currently paying <strong>4.5–5.0% APY</strong>, and separate from your checking account so you won&apos;t accidentally spend it.
          </p>

          <p>
            Keep the down payment fund completely separate from your emergency fund. They&apos;re different buckets with different purposes — mixing them causes people to drain the down payment when an expense hits.
          </p>

          <div className="my-4 flex flex-wrap gap-2">
            <AffiliateButton partner="sofi-money" source={slug}>Open SoFi HYSA →</AffiliateButton>
            <AffiliateButton partner="marcus" source={slug} variant="secondary">Open Marcus HYSA →</AffiliateButton>
            <AffiliateButton partner="ally" source={slug} variant="secondary">Open Ally HYSA →</AffiliateButton>
          </div>

          <p>
            See our full <Link href="/learn/best-hysa-2026">best HYSA 2026 roundup</Link> for current rates ranked.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3 — Set your monthly savings target</h2>

          <p>
            Divide your savings goal by your target months. A <strong>$45,000 goal in 36 months = $1,250/month</strong>. The benchmark for first-time buyers is <strong>15–20% of take-home pay</strong> directed at the down payment.
          </p>

          <p>
            If the monthly number feels impossible at your current income:
          </p>

          <ul>
            <li><strong>Compress the timeline</strong> by targeting a smaller down payment (3–5%) with a first-time buyer program that offsets the PMI cost.</li>
            <li><strong>Expand the income</strong> — a side hustle producing $500/month cuts a 36-month timeline to 27 months on a $45K goal.</li>
            <li><strong>Reduce the target market</strong> — buying in a lower-priced ZIP code or smaller home means the gap closes much faster.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4 — Use windfalls aggressively</h2>

          <p>
            Tax refunds, work bonuses, and gifts deposited directly into the down payment account are the single biggest timeline compressor. The average federal tax refund in 2026 is ~$3,100 — deposited into the HYSA, that&apos;s 2–3 months of savings in one transaction.
          </p>

          <p>
            See <Link href="/learn/how-to-save-money-fast">how to save money fast</Link> for the highest-leverage spending cuts to accelerate the timeline.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 5 — Research first-time buyer programs</h2>

          <p>
            <strong>Most first-time buyers leave thousands on the table</strong> by not researching state and local programs. These programs offer:
          </p>

          <ul>
            <li><strong>Down payment assistance (DPA) grants</strong> — free money, not a loan, from state HFAs. Some cover 3–5% of the purchase price.</li>
            <li><strong>Forgivable second mortgages</strong> — a second loan that&apos;s forgiven after you live in the home for 5–10 years.</li>
            <li><strong>Below-market first mortgage rates</strong> — state HFA loans often price 0.25–0.5% below market, saving $20,000+ over the loan life.</li>
            <li><strong>Mortgage Credit Certificates (MCCs)</strong> — a federal tax credit worth 20–40% of the mortgage interest paid each year, reducing your tax bill annually.</li>
          </ul>

          <p>
            Search <strong>&ldquo;[your state] housing finance agency first-time homebuyer&rdquo;</strong> or visit HUD.gov to find every program available in your county.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 3% vs 20% down decision</h2>

          <p>
            The &ldquo;always put 20% down&rdquo; advice is outdated for most buyers in appreciating markets. Here&apos;s the real math on a <strong>$400,000 home</strong>:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Scenario</th>
                  <th className="py-3 pr-4">Down payment</th>
                  <th className="py-3 pr-4">PMI/mo</th>
                  <th className="py-3 pr-4">Monthly payment</th>
                  <th className="py-3 pr-4">Time to save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">3% down (FHA)</td><td className="py-3 pr-4">$12,000</td><td className="py-3 pr-4">$180</td><td className="py-3 pr-4">$2,580</td><td className="py-3 pr-4">~1 year</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">10% down (conv)</td><td className="py-3 pr-4">$40,000</td><td className="py-3 pr-4">$120</td><td className="py-3 pr-4">$2,420</td><td className="py-3 pr-4">~3.5 years</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">20% down (conv)</td><td className="py-3 pr-4">$80,000</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">$2,150</td><td className="py-3 pr-4">~7 years</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            In a market appreciating at 4%/year, a $400,000 home bought at 3% down today is worth <strong>~$487,000</strong> in 5 years — before you would have finished saving for 20% down. The equity gained from buying earlier often vastly outweighs PMI cost.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The Roth IRA exception</h2>

          <p>
            If you&apos;ve been contributing to a Roth IRA, your <strong>contributions</strong> (not earnings) can be withdrawn at any time for any reason, tax and penalty-free. Additionally, first-time homebuyers can withdraw up to <strong>$10,000 of Roth earnings</strong> without the 10% penalty (earnings still taxed if account is under 5 years old).
          </p>

          <p>
            Use this strategically: it&apos;s a one-time lifetime limit and reduces your retirement savings. Only tap Roth earnings if it meaningfully closes the gap and you plan to rebuild contributions after closing.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Open a dedicated HYSA today, automate a monthly transfer, and deposit every windfall into it.</strong> Research your state&apos;s first-time buyer programs — you may qualify for grants that cover part of the down payment. Don&apos;t wait for 20% if a 10% or 5% down purchase pencils out in your market.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-hysa-2026">Best HYSAs 2026</Link> — where to park the down payment fund while it grows.</li>
            <li><Link href="/learn/how-to-get-a-mortgage">How to get a mortgage</Link> — the full pre-approval and closing process.</li>
            <li><Link href="/learn/how-much-should-emergency-fund-be">Emergency fund sizing</Link> — build this before the down payment fund.</li>
            <li><Link href="/learn/how-to-budget-50-30-20">50/30/20 budget</Link> — the framework for finding the monthly savings.</li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit</Link> — your score needs to be 620+ (conventional) or 580+ (FHA) before applying.</li>
            <li><Link href="/learn/debt-snowball-vs-avalanche">Pay off debt first?</Link> — if you carry high-rate debt, pay it before saving aggressively for a house.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
        <RelatedByPillar pillar="Budget" currentSlug={slug} />
      </article>
    </>
  );
}
