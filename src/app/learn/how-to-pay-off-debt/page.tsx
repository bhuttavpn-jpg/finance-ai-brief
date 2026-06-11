import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-pay-off-debt";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to pay off debt: A complete 2026 playbook";
const description =
  "The honest debt payoff playbook. List every debt, attack the highest-APR balance first (avalanche), or the smallest balance first if motivation is the bottleneck (snowball). Refinance anything over 15% APR. Automate. Don't take on new debt. Here's the step-by-step.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Should I save or pay off debt first?",
    a: "Both — partially. Build a $1,000 starter emergency fund first so an unexpected $600 car repair doesn't push you back to credit cards. Then attack debt. Once high-APR debt (20%+) is gone, split between debt and savings: 3–6 month full emergency fund, then balance retirement and remaining debt payoff.",
  },
  {
    q: "Snowball or avalanche?",
    a: "Math: avalanche (highest APR first) saves the most interest. Behavior: snowball (smallest balance first) builds momentum through quick wins. Studies suggest the snowball has a higher success rate because people stick with it. Honest answer: use avalanche if you're disciplined; use snowball if motivation is the bottleneck.",
  },
  {
    q: "Should I use a balance transfer or personal loan?",
    a: "If you have credit card debt at 22%+ APR: yes. A 0% intro APR balance transfer (typically 12–21 months) is best if you can clear the balance inside the window. A personal loan at 10–15% is better for $5K+ balances you'll pay over 2–4 years. Either move drops your interest cost dramatically.",
  },
  {
    q: "Will paying off debt help my credit score?",
    a: "Yes — especially revolving debt. Lowering credit card balances drops your utilization ratio (30% of FICO), often producing 20–60 point jumps in 6 weeks. Paying off installment loans (student, auto) helps less but still improves your credit mix and reduces total debt-to-income.",
  },
  {
    q: "Should I stop investing while paying off debt?",
    a: "Stop investing in taxable accounts — yes. Stop capturing your 401(k) match — never. The match is 50–100% guaranteed return; even 28% credit card debt can't beat that. Capture the full match, then redirect everything else to debt.",
  },
  {
    q: "How long does paying off debt take?",
    a: "Depends on amount, APR, and monthly payment capacity. For a typical $10K credit card debt with aggressive payoff ($400/month at 23% APR): ~32 months. Snowball/avalanche choice barely affects timeline for a single debt — the dollar amount and the monthly payment do.",
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
          name: "How to pay off debt",
          steps: [
            { name: "List every debt", text: "Balance, APR, minimum payment, and due date for each account." },
            { name: "Build a $1,000 starter emergency fund", text: "Park it in a HYSA. Prevents new debt from surprise expenses." },
            { name: "Pick a method", text: "Avalanche (highest APR first) saves most interest; snowball (smallest balance first) builds momentum." },
            { name: "Refinance high-APR debt", text: "Move 22%+ credit card debt to a personal loan or 0% balance transfer." },
            { name: "Automate the extra payment", text: "Pay minimums on all debts; automatic extra payment on the target debt." },
            { name: "Avoid new debt", text: "Pause discretionary card spending until you're out." },
            { name: "Capture 401(k) match", text: "Never skip free money even while paying off debt." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The honest playbook — math (avalanche) or motivation (snowball), then refinance the worst-APR debt down, automate, and don't take on more."
          pillar="Budget"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Debt payoff is mostly a math problem with a discipline overlay.</strong> The
            mechanics — list every debt, attack the highest-APR first, refinance anything over 15%,
            automate the extra payment — are straightforward. The hard part is not adding new debt
            faster than you're paying off the old.
          </p>

          <p>
            Here's the honest playbook. It works for $5K of credit card debt and for $80K of mixed
            cards + student loans, with small variations.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1 — List every debt</h2>

          <p>For each debt, write down:</p>

          <ul>
            <li><strong>Creditor</strong> (Chase, Sallie Mae, Toyota Financial, etc.)</li>
            <li><strong>Balance</strong></li>
            <li><strong>APR</strong> (interest rate)</li>
            <li><strong>Minimum payment</strong></li>
            <li><strong>Due date</strong></li>
          </ul>

          <p>
            <strong>Don't skip any.</strong> Buy-now-pay-later, medical bills, family loans,
            collections — all of it. You can't strategize around debt you're avoiding looking at.
          </p>

          <p>
            Free credit report at <a href="https://www.annualcreditreport.com/" target="_blank" rel="noopener noreferrer">AnnualCreditReport.com</a>{" "}
            (federally mandated, no card required) catches anything you've forgotten.{" "}
            <strong>Credit Karma</strong> also shows balances and APRs across all reported tradelines.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              See all my debts on Credit Karma →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2 — Build a $1,000 starter emergency fund</h2>

          <p>
            <strong>Don't skip this.</strong> Most people who pay off all their cards immediately
            then end up back in debt within 6 months because an unexpected expense forces them back
            onto a card. A $1,000 buffer breaks that loop.
          </p>

          <p>
            Park it in a high-yield savings account — it earns 4%+ instead of 0%, and it's just a
            transfer away when you need it.
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
            Full options in <Link href="/learn/best-hysa-2026">best HYSA 2026</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3 — Pick avalanche or snowball</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Method</th>
                  <th className="py-3 pr-4">Order</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Avalanche</td><td className="py-3 pr-4">Highest APR first</td><td className="py-3 pr-4">Saves the most interest; disciplined people</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Snowball</td><td className="py-3 pr-4">Smallest balance first</td><td className="py-3 pr-4">Builds momentum; people who quit when progress is slow</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>The math:</strong> on $30K of mixed debt, avalanche typically saves $500–$2,000
            in interest vs. snowball. Snowball produces faster account-elimination, which has a real
            psychological payoff.
          </p>

          <p>
            Full comparison in our{" "}
            <Link href="/learn/debt-snowball-vs-avalanche">debt snowball vs. avalanche</Link>{" "}
            guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4 — Refinance high-APR debt</h2>

          <p>
            <strong>Any debt over 15% APR is a refinance candidate.</strong> Two main paths:
          </p>

          <h3>Path A: 0% intro APR balance transfer card</h3>

          <ul>
            <li><strong>Best for:</strong> credit card debt under $5K you can clear in 12–18 months.</li>
            <li><strong>How it works:</strong> apply for a card with 0% intro APR (typical 12–21 months), transfer your existing balance, pay aggressively during the intro window.</li>
            <li><strong>Cost:</strong> 3–5% balance transfer fee.</li>
            <li><strong>Risk:</strong> if you don't pay off in the window, the back rate is typically 22–28%.</li>
          </ul>

          <h3>Path B: Personal loan</h3>

          <ul>
            <li><strong>Best for:</strong> $5K+ debt you'll pay over 2–4 years.</li>
            <li><strong>How it works:</strong> apply for a personal loan at 10–15% APR, use it to pay off the high-rate cards, then make fixed monthly payments on the loan.</li>
            <li><strong>Cost:</strong> 0–8% origination fee depending on lender.</li>
            <li><strong>Bonus:</strong> dropping revolving utilization to ~0% lifts your FICO 20–40 points.</li>
          </ul>

          <p>
            <AffiliateButton partner="sofi-loans" source={slug}>
              Check SoFi loan rates →
            </AffiliateButton>
          </p>

          <p>
            Or:{" "}
            <AffiliateButton partner="lightstream" source={slug} variant="secondary">LightStream</AffiliateButton>
          </p>

          <p>
            Deeper analysis in our{" "}
            <Link href="/learn/personal-loan-vs-credit-card">personal loan vs. credit card</Link>{" "}
            comparison.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 5 — Automate the extra payment</h2>

          <p>
            Pay minimums on every debt. Set an <strong>automatic extra payment</strong> on the
            target debt the day after payday. Automation removes the willpower variable.
          </p>

          <p>
            <strong>How much extra?</strong> Whatever's left after fixed costs, the $1,000 emergency
            buffer, and 401(k) match. For most people serious about payoff, 15–30% of take-home pay
            to debt is achievable.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 6 — Capture your 401(k) match (always)</h2>

          <p>
            <strong>Never skip the employer 401(k) match, even while paying off debt.</strong> A 50%
            match is a 50% guaranteed return. Even 28% credit card debt can't beat that.
          </p>

          <p>
            Contribute exactly enough to capture the full match. Direct everything else to debt.
            See our{" "}
            <Link href="/learn/how-much-to-contribute-to-401k">how much to contribute to 401(k)</Link>{" "}
            guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 7 — Don't add new debt</h2>

          <p>
            <strong>This is where most plans fail.</strong> The cards you're paying off are still
            usable. Resist the impulse to charge "just one thing" — a $400 charge undoes a month of
            extra payments.
          </p>

          <p>Practical moves:</p>

          <ul>
            <li>Freeze the cards (literally — put them in a container of water in the freezer).</li>
            <li>Remove them from auto-pay accounts (Netflix, Spotify, etc. — switch to debit/HYSA card).</li>
            <li>Delete saved card info from Amazon, Apple Pay, browser autofill.</li>
            <li>Keep a $500–$1,000 "fun money" line in your budget so you don't binge-relapse.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Step 8 — Track progress and stay motivated</h2>

          <p>
            <strong>A budgeting app like YNAB or Monarch makes this much easier.</strong> Both
            track debt payoff progress visually and can model your payoff date based on current
            extra-payment rate.
          </p>

          <p>
            <AffiliateButton partner="ynab" source={slug}>Try YNAB free for 34 days →</AffiliateButton>
          </p>

          <p>
            Or:{" "}
            <AffiliateButton partner="monarch" source={slug} variant="secondary">Monarch</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>After the cards are gone</h2>

          <p>Once high-APR debt is cleared, shift to:</p>

          <ol>
            <li><strong>Full emergency fund</strong> — 3–6 months of expenses in HYSA.</li>
            <li><strong>Max the Roth IRA</strong> — $7,500 in 2026, $1,100 catch-up at 50+.</li>
            <li><strong>Above-match 401(k)</strong> — push toward the $24,500 limit if you can.</li>
            <li><strong>Pay off remaining low-APR debt</strong> (student loans, car) more slowly. No urgency below 7% APR.</li>
            <li><strong>Build a taxable brokerage</strong> for the surplus.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes</h2>

          <ul>
            <li><strong>Skipping the $1,000 starter fund.</strong> Cycles you back into debt.</li>
            <li><strong>Refinancing without changing behavior.</strong> Personal loan + cards run back up = double debt.</li>
            <li><strong>Stopping the 401(k) match</strong> to throw more at debt. You're trading guaranteed 50% returns for 28% interest savings.</li>
            <li><strong>Picking avalanche when motivation is the bottleneck.</strong> The "correct" plan you quit beats no plan, but only if you don't quit.</li>
            <li><strong>Cashing out a 401(k) to pay debt.</strong> 10% penalty + ordinary income tax + lost compounding. Almost never worth it.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Debt payoff isn't complicated — it's just sustained.</strong> Pick a method,
            refinance the worst-APR balances, automate the extra payment, capture the 401(k) match,
            and don't add new debt.
          </p>

          <p>
            Most people who follow this playbook are out of credit card debt in 18–36 months. The
            biggest predictor of success isn't math — it's not quitting.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/debt-snowball-vs-avalanche">Debt snowball vs. avalanche</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
            <li><Link href="/learn/personal-loan-vs-credit-card">Personal loan vs. credit card</Link></li>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link></li>
            <li><Link href="/learn/how-to-budget">How to budget</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
