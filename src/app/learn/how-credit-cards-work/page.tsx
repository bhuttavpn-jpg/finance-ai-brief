import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-credit-cards-work";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How credit cards work: A plain-English explainer";
const description =
  "Credit cards are short-term loans with a built-in grace period. Used right (paid in full monthly), they're free credit plus 1–5% cashback. Used wrong (carrying balances), they're 22–28% APR debt. Here's the mechanics — billing cycles, grace periods, interest math, and how to use a card without paying for it.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How does a credit card actually work?",
    a: "The issuer (Chase, Capital One, Amex, etc.) extends you a short-term loan every time you swipe. At the end of the billing cycle (~30 days), they send a statement. If you pay the full statement balance by the due date (~21 days later), you owe zero interest. If you pay less than full, interest accrues at the card's APR — typically 22–28% in 2026 — on the remaining balance from the day of each purchase.",
  },
  {
    q: "What's the grace period?",
    a: "The period between the statement closing date and the payment due date — typically 21–25 days. During this window, you can pay the full balance with zero interest. If you carry any balance into the next month, you lose the grace period and start accruing interest immediately on new purchases.",
  },
  {
    q: "What's the difference between credit limit and available credit?",
    a: "Credit limit is the maximum total balance the issuer will let you carry. Available credit is what's left after subtracting your current balance and pending charges. If your limit is $10,000 and your balance is $2,500, you have $7,500 of available credit.",
  },
  {
    q: "Do I have to use a credit card every month?",
    a: "No, but if you go months without using a card the issuer may close it for inactivity — which hurts your credit score by removing the limit from your available credit pool. Use each card you have for at least one small purchase every 3–6 months and pay it off.",
  },
  {
    q: "What's APR vs. interest rate?",
    a: "For credit cards, they're essentially the same — APR (annual percentage rate) is what the card charges on carried balances, expressed annually. Daily interest = APR ÷ 365. A 24% APR card charges 0.0658% per day on the balance. Compounded daily, it accumulates fast.",
  },
  {
    q: "What's the minimum payment trap?",
    a: "Paying only the minimum (typically 1–3% of balance + interest) keeps the account current but lets interest pile up. A $5,000 balance at 24% APR paid at the 2% minimum takes ~22 years to pay off and costs ~$8,000 in interest. The minimum is a survival lever, not a payoff strategy.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Borrow smart" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="How a credit card actually works — billing cycles, grace periods, interest math, and how to use one for free."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="9 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>A credit card is a short-term, no-interest loan that automatically turns into a
            22–28% APR loan if you don't pay it off in time.</strong> Used as designed — pay in full
            every month — they're free credit plus 1–5% back in rewards. Used wrong, they're among
            the most expensive forms of debt available.
          </p>

          <p>
            This guide walks through the mechanics in plain English. If you grasp the billing cycle
            and the grace period, you understand 90% of how to use a card profitably.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The billing cycle and the grace period</h2>

          <p>
            <strong>Every credit card has a billing cycle of about 30 days.</strong> At the end of
            the cycle, the issuer takes a snapshot of your balance and sends you a statement. Two
            key dates:
          </p>

          <ul>
            <li><strong>Statement closing date</strong> — when the snapshot is taken and reported to credit bureaus.</li>
            <li><strong>Payment due date</strong> — typically ~21–25 days after the statement close.</li>
          </ul>

          <p>
            <strong>The grace period is the window between those two dates.</strong> If you pay the
            full statement balance by the due date, you owe zero interest on anything in that
            statement — and any new purchases continue interest-free until the next statement
            closes.
          </p>

          <p>
            <strong>Lose that habit once, and you lose the grace period entirely.</strong> If you
            carry any balance from one month into the next, new purchases accrue interest from the
            day they post — no grace period. You only restore the grace period by paying the full
            balance for two consecutive months.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How interest is calculated (when you owe it)</h2>

          <p>
            Credit card interest compounds <strong>daily</strong>, not monthly. The daily rate is
            APR ÷ 365.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">APR</th>
                  <th className="py-3 pr-4">Daily rate</th>
                  <th className="py-3 pr-4">Monthly cost on $5,000</th>
                  <th className="py-3 pr-4">Annual cost on $5,000</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">15%</td><td className="py-3 pr-4">0.0411%</td><td className="py-3 pr-4">~$63</td><td className="py-3 pr-4">~$750</td></tr>
                <tr><td className="py-3 pr-4">20%</td><td className="py-3 pr-4">0.0548%</td><td className="py-3 pr-4">~$84</td><td className="py-3 pr-4">~$1,000</td></tr>
                <tr><td className="py-3 pr-4">24%</td><td className="py-3 pr-4">0.0658%</td><td className="py-3 pr-4">~$100</td><td className="py-3 pr-4">~$1,200</td></tr>
                <tr><td className="py-3 pr-4">28%</td><td className="py-3 pr-4">0.0767%</td><td className="py-3 pr-4">~$117</td><td className="py-3 pr-4">~$1,400</td></tr>
                <tr><td className="py-3 pr-4">30%</td><td className="py-3 pr-4">0.0822%</td><td className="py-3 pr-4">~$125</td><td className="py-3 pr-4">~$1,500</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>That's the cost of carrying $5,000 — every year — at common card APRs.</strong>{" "}
            For context, the entire stock market returns ~7–10%/year long-term. You're paying 3× the
            stock market return to a bank.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How rewards actually work</h2>

          <p>
            Issuers pay rewards (cashback, points, miles) out of <strong>interchange fees</strong> —
            the percentage merchants pay to accept cards (2–3% of every transaction). They keep most
            of the interchange and pass a slice back to you as an incentive.
          </p>

          <ul>
            <li><strong>Flat-rate cashback</strong> — typically 1.5–2% on everything. Citi Double Cash, Capital One Quicksilver.</li>
            <li><strong>Category cashback</strong> — 3–5% on specific categories (gas, groceries, dining), 1% elsewhere. Capital One Savor, Chase Freedom Flex.</li>
            <li><strong>Travel points</strong> — 1–5× points on travel-related spend, transferable to airline and hotel partners. Chase Sapphire Preferred, Amex Gold.</li>
            <li><strong>Sign-up bonuses</strong> — 50K–150K points after spending $4K–$15K in 3 months. Often the single largest year-1 reward.</li>
          </ul>

          <p>
            <strong>The catch:</strong> rewards only count if you pay in full. A 2% cashback card
            you carry a balance on costs you ~22% APR for ~2% back — a guaranteed 20%/year loss.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What's on a credit card statement</h2>

          <ul>
            <li><strong>Previous balance</strong> — what you owed last month.</li>
            <li><strong>Payments and credits</strong> — what you paid.</li>
            <li><strong>New purchases</strong> — what you charged this cycle.</li>
            <li><strong>Interest charged</strong> — if you carried a balance.</li>
            <li><strong>Fees</strong> — late fees, annual fees, foreign transaction fees.</li>
            <li><strong>New balance</strong> — the bottom line. This is what gets reported to bureaus and what determines your utilization.</li>
            <li><strong>Minimum payment due</strong> — typically 1–3% of balance + interest, with a $25–$40 floor.</li>
            <li><strong>Due date</strong> — the deadline to pay without late fee or rate penalty.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The fees to watch for</h2>

          <ul>
            <li><strong>Annual fee</strong> — $0 to $695. Only worth paying if rewards + perks exceed the fee for your spending pattern.</li>
            <li><strong>Late fee</strong> — typically $29–$41 per missed payment. Many issuers waive the first one if you call.</li>
            <li><strong>Foreign transaction fee</strong> — 1–3% of foreign purchases. Avoid by using a no-FTF card abroad.</li>
            <li><strong>Cash advance fee</strong> — 3–5% of advance + interest from day one (no grace period). Almost never worth using.</li>
            <li><strong>Balance transfer fee</strong> — 3–5% of transferred balance. Often outweighed by the savings from a 0% intro APR.</li>
            <li><strong>Returned payment fee</strong> — $29–$41 if your payment bounces.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to use a credit card profitably</h2>

          <ol>
            <li><strong>Treat the card like a debit card.</strong> Only charge what's in your checking account.</li>
            <li><strong>Pay the statement balance in full</strong>, by the due date, every month.</li>
            <li><strong>Set auto-pay for the statement balance</strong> as a safety net.</li>
            <li><strong>Match the card to your spend.</strong> A 5% groceries card is useless if you eat out every night.</li>
            <li><strong>Don't carry more cards than you can monitor.</strong> Two or three is the sweet spot for most people.</li>
            <li><strong>Check the statement monthly</strong> for fraud — even one minute of scanning catches most issues.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>How to choose your first card</h2>

          <p>
            If you're building credit from scratch, a secured card or starter cashback card is the
            right entry point. Our{" "}
            <Link href="/learn/best-credit-cards-for-beginners">best credit cards for beginners</Link>{" "}
            guide walks through the top picks. For the full credit-building playbook, see{" "}
            <Link href="/learn/how-to-build-credit-from-scratch">how to build credit from scratch</Link>.
          </p>

          <p>
            <AffiliateButton partner="discover-it" source={slug}>
              Apply for Discover it Secured →
            </AffiliateButton>
          </p>

          <p>
            Or:{" "}
            <AffiliateButton partner="capital-one" source={slug} variant="secondary">Capital One Platinum</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to monitor (free)</h2>

          <p>
            <strong>Credit Karma</strong> shows your TransUnion and Equifax balances, utilization,
            and score for free. Useful for catching reporting errors and tracking your utilization
            in real time.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Open Credit Karma →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Used right, a credit card is free credit plus 1–5% cashback.</strong> Used
            wrong, it's the most expensive consumer debt available short of payday loans. The line
            between the two is simple: pay the statement balance in full every month.
          </p>

          <p>
            If you're carrying a card balance now, the priority is paying it off — not optimizing
            rewards on the next card. Start with our{" "}
            <Link href="/learn/how-to-pay-off-credit-card-debt">pay off credit card debt</Link>{" "}
            playbook.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score?</Link></li>
            <li><Link href="/learn/personal-loan-vs-credit-card">Personal loan vs. credit card</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Borrow smart" currentSlug="how-credit-cards-work" />
      </article>
    </>
  );
}
