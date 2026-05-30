import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { FAQ, type QA } from "@/components/content/FAQ";
import { RothComparator } from "@/components/tools/RothComparator";
import {
  JsonLd,
  articleJsonLd,
  faqJsonLd,
} from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const url = `${siteConfig.url}/learn/roth-ira-vs-traditional-ira`;
const title = "Roth IRA vs. Traditional IRA: Which Should You Choose?";
const description =
  "A clear framework for picking between Roth and Traditional. With a side-by-side calculator that runs the math on your own bracket.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "Can I have both a Roth and a Traditional IRA?",
    a: "Yes. You can split your annual contribution across both. For 2026, the combined limit is $7,000 ($8,000 if you're 50 or older).",
  },
  {
    q: "What if I make too much for a Roth IRA?",
    a: "You can still contribute through a 'Backdoor Roth' — contribute to a Traditional IRA and immediately convert to Roth. There's no income limit on conversions. Read our backdoor Roth guide for the steps and pro-rata pitfalls.",
  },
  {
    q: "Should I prioritize my 401(k) or IRA first?",
    a: "Capture your full employer 401(k) match first (it's free money). Then max your IRA (Roth or Traditional, depending on your bracket). Then return to the 401(k) for any additional contributions.",
  },
  {
    q: "Can I convert a Traditional IRA to a Roth?",
    a: "Yes, anytime — it's called a Roth conversion. You'll owe income tax on the converted amount in the year of conversion. It often makes sense in low-income years (sabbatical, layoff, between jobs).",
  },
  {
    q: "What's the deadline to contribute for 2026?",
    a: "April 15, 2027 — the tax filing deadline. You can contribute for the prior tax year up until that date.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={articleJsonLd({
        url, title, description,
        publishedAt: "2026-05-17", updatedAt: "2026-05-17",
        author: "Jahanzeb Nawaz",
      })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="It comes down to one question: do you expect to be in a higher or lower bracket when you retire?"
          pillar="Invest"
          publishedAt="2026-05-17"
          updatedAt="2026-05-17"
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <h2>The 30-second answer</h2>
          <ul>
            <li>If you expect a <strong>higher tax bracket in retirement</strong>, go Roth. Pay tax now at today&apos;s lower rate, withdraw tax-free later.</li>
            <li>If you expect a <strong>lower tax bracket in retirement</strong>, go Traditional. Get the deduction now at today&apos;s higher rate, pay tax later when the rate is lower.</li>
            <li>If you have <strong>no idea</strong>, split your contribution 50/50. You&apos;ll be diversified across tax regimes.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>How each one is taxed</h2>
          <p>
            A <strong>Traditional IRA</strong> works like a 401(k): you contribute pre-tax dollars
            (you get a deduction in the year of contribution), the money grows tax-deferred,
            and you pay ordinary income tax on every dollar you withdraw in retirement.
          </p>
          <p>
            A <strong>Roth IRA</strong> is the mirror image: you contribute after-tax dollars
            (no deduction now), the money grows tax-free, and qualified withdrawals in retirement
            are 100% tax-free — including all the growth.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Run your scenario</h2>
        </div>

        <div className="my-10">
          <RothComparator source="article-roth-vs-traditional" />
        </div>

        <div className="prose prose-lg max-w-none">
          <hr className="my-10 border-brand-100" />
          <h2>Contribution and income limits (2026)</h2>
          <ul>
            <li><strong>Annual contribution limit:</strong> $7,000, or $8,000 if you&apos;re 50 or older. This is a combined limit across Roth and Traditional.</li>
            <li><strong>Roth income phase-outs (2026):</strong> Single filers phase out between $150K and $165K MAGI; MFJ phases out between $236K and $246K.</li>
            <li><strong>Traditional IRA deduction limits:</strong> If you (or your spouse) are covered by a workplace retirement plan, the deduction phases out at lower income levels.</li>
          </ul>
          <p>
            Above the Roth income limits? You can still contribute through a <em>Backdoor Roth</em>{" "}
            — contribute to a Traditional IRA and convert it to a Roth. There&apos;s no income
            cap on conversions.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>When Roth wins</h2>
          <ul>
            <li>Early in your career, when you&apos;re in a low bracket but expect higher income later.</li>
            <li>You want flexibility — Roth contributions (not earnings) can be withdrawn anytime without penalty.</li>
            <li>You expect to leave the account to heirs — Roth heirs inherit tax-free.</li>
            <li>You believe tax rates will be higher in the future (the TCJA brackets are scheduled to revert in 2026).</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>When Traditional wins</h2>
          <ul>
            <li>You&apos;re in a high bracket today (24%, 32%, or above) and expect to retire in a meaningfully lower one.</li>
            <li>You need the deduction now to bring your AGI under a threshold (e.g., to qualify for a tax credit).</li>
            <li>You&apos;re close to retirement and your earning years are nearly over.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>The hybrid strategy</h2>
          <p>
            If your future bracket is uncertain (whose isn&apos;t?), splitting contributions
            between Roth and Traditional gives you what financial planners call &quot;tax
            diversification.&quot; In retirement, you can pull from whichever bucket minimizes
            your tax bill that year.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>How to open an IRA</h2>
          <p>
            All three of the major low-cost brokerages — Fidelity, Schwab, and Vanguard —
            offer free Roth and Traditional IRAs with no account minimum. Opening one takes
            about 10 minutes online. Funding takes 1–3 business days for an ACH transfer.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-budget-50-30-20">How to Budget Using the 50/30/20 Rule</Link> — figure out how much you can actually contribute.</li>
            <li>The Backdoor Roth IRA Guide (coming soon)</li>
            <li>How much should I contribute to my 401(k)? (coming soon)</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
