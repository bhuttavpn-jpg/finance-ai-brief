import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { FAQ, type QA } from "@/components/content/FAQ";
import { BudgetCalculator } from "@/components/tools/BudgetCalculator";
import {
  JsonLd,
  articleJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const url = `${siteConfig.url}/learn/how-to-budget-50-30-20`;
const title = "How to Budget Using the 50/30/20 Rule";
const description =
  "A simple framework that splits your take-home pay into 50% needs, 30% wants, and 20% savings. With a free calculator and the savings account we recommend.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "Does retirement saving count toward the 20%?",
    a: "Yes. The 20% bucket covers both your emergency fund and long-term savings (401(k), Roth IRA, brokerage). If you're behind on retirement, push past 20% as soon as your emergency fund is built.",
  },
  {
    q: "What if I can't hit 20% in savings?",
    a: "Don't worry about hitting 20% on day one. Start with whatever number you can sustain — even 5% — and increase it by one percentage point every three months. The habit matters more than the number.",
  },
  {
    q: "Is the 50/30/20 rule realistic in expensive cities?",
    a: "In high-cost-of-living cities, rent alone can eat 40% or more of take-home, which leaves no room for the rest of needs. In that case, shift to 60/20/20 or 70/10/20 for a few years until either income rises or rent stabilizes. The split is a starting point, not a law.",
  },
  {
    q: "Should I budget gross income or take-home pay?",
    a: "Take-home (after taxes, 401(k), health insurance). The 50/30/20 split is about the money that actually hits your checking account.",
  },
  {
    q: "How is the 50/30/20 rule different from zero-based budgeting?",
    a: "Zero-based budgeting assigns every dollar to a specific category until your remaining balance is zero. 50/30/20 is looser — three buckets, no per-category tracking. Pick 50/30/20 if you want simplicity and to keep less in your head; pick zero-based if you want maximum visibility into where every dollar goes.",
  },
];

const HOWTO_STEPS = [
  { name: "Calculate take-home pay", text: "Take your most recent paycheck and multiply by 2.17 to get a monthly average." },
  { name: "Split into three buckets", text: "Send 50% to needs, 30% to wants, 20% to savings." },
  { name: "Automate the transfers", text: "Set up a direct deposit split: 80% to checking, 20% to a separate high-yield savings account." },
  { name: "Track for one month", text: "Use a budgeting app or a single spreadsheet column for each bucket. Adjust the split next month." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          url,
          title,
          description,
          publishedAt: "2026-05-17",
          updatedAt: "2026-05-17",
          author: "Jahanzeb Nawaz",
        })}
      />
      <JsonLd data={howToJsonLd({ name: title, steps: HOWTO_STEPS })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The simplest budget framework you'll find — and probably all you need."
          pillar="Budget"
          publishedAt="2026-05-17"
          updatedAt="2026-05-17"
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <h2>The rule in one sentence</h2>
          <p>
            Split every dollar of take-home pay into three buckets: <strong>50% for needs</strong>{" "}
            (rent, groceries, utilities, transportation, insurance, minimum debt payments),{" "}
            <strong>30% for wants</strong> (eating out, subscriptions, travel, hobbies), and{" "}
            <strong>20% for savings and debt payoff</strong> (emergency fund, retirement, extra
            debt principal).
          </p>
          <p>
            It comes from <em>All Your Worth</em> by Elizabeth Warren and her daughter Amelia
            Warren Tyagi. It&apos;s held up for two decades because it&apos;s simple enough to
            actually use and flexible enough to match almost any income.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Try it on your number</h2>
        </div>

        <div className="my-10">
          <BudgetCalculator source="article-how-to-budget-50-30-20" />
        </div>

        <div className="prose prose-lg max-w-none">
          <hr className="my-10 border-brand-100" />
          <h2>A worked example</h2>
          <p>
            Say you take home $5,000/month after taxes and 401(k) contributions. The 50/30/20
            split says:
          </p>
          <ul>
            <li><strong>$2,500 for needs</strong> — your rent or mortgage, groceries, utilities, gas or transit, insurance premiums, minimum debt payments.</li>
            <li><strong>$1,500 for wants</strong> — restaurants, streaming, gym, travel, gifts, anything optional.</li>
            <li><strong>$1,000 for savings</strong> — emergency fund first, then retirement, then extra payments on debt above 7% interest.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>Where the rule works well</h2>
          <ul>
            <li>Stable income, predictable expenses.</li>
            <li>Rent under 50% of take-home pay.</li>
            <li>No high-interest debt eating into the savings bucket.</li>
            <li>You want a simple framework you can actually stick with.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>Where the rule breaks down</h2>
          <ul>
            <li><strong>High-cost-of-living cities.</strong> If you live in NYC or SF and rent eats 45% of take-home before groceries, 50/30/20 isn&apos;t realistic. Shift to 60/20/20 or 70/10/20 for a few years.</li>
            <li><strong>Aggressive debt payoff.</strong> If you&apos;re carrying credit card debt at 22%, the math says to push more than 20% at debt and less at long-term savings. Once the debt&apos;s gone, return to the standard split.</li>
            <li><strong>FIRE plans.</strong> If you&apos;re aiming for early retirement, you&apos;ll want a 50/20/30 (savings-heavy) split or more.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>How to actually implement it</h2>
          <ol>
            <li>Open a separate <Link href="/tools/budget-50-30-20">high-yield savings account</Link> for the 20% savings bucket.</li>
            <li>Set up direct deposit at work to send 80% to checking and 20% to the HYSA.</li>
            <li>Pay all of your needs out of checking automatically (autopay).</li>
            <li>Whatever&apos;s left in checking is your wants budget. When it hits zero, stop spending.</li>
          </ol>
          <p>
            That&apos;s the whole framework. Most budgeting failures come from over-engineering;
            the goal is something you can hold in your head and actually use.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>What about retirement?</h2>
          <p>
            Retirement saving lives inside the 20% bucket. If your employer offers a 401(k)
            match, capture <em>all</em> of it before anything else — that&apos;s a 100% return
            you cannot replicate elsewhere. Use our{" "}
            <Link href="/tools/401k-match">401(k) match calculator</Link> to check.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA vs. Traditional IRA</Link> — once your match is maxed, the next dollar belongs here.</li>
            <li>How to build an emergency fund (coming soon)</li>
            <li>Best high-yield savings accounts (coming soon)</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
