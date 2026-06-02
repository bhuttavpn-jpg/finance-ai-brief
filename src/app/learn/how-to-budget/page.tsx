import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-budget";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to budget: A practical guide for 2026";
const description =
  "A plain-English budgeting guide for 2026. Pick a method (50/30/20, zero-based, envelopes, or pay-yourself-first), set realistic categories, automate the boring parts, and check in monthly. Includes a step-by-step setup that takes ~45 minutes.";
const PUBLISHED = "2026-06-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the easiest budgeting method for a beginner?",
    a: "The 50/30/20 rule. You split take-home pay into 50% needs, 30% wants, and 20% savings + debt payoff — no tracking individual categories. It's not the most precise method, but it's the only one most people will actually stick with for more than two months.",
  },
  {
    q: "How is budgeting different from just tracking expenses?",
    a: "Tracking is backward-looking — it tells you what you spent last month. Budgeting is forward-looking — it assigns a job to each dollar before you spend it. Most people fail because they only track. The plan is what changes behavior.",
  },
  {
    q: "Do I need a budgeting app, or is a spreadsheet enough?",
    a: "A spreadsheet works fine if you check it weekly. Apps win on auto-categorization and shared visibility for couples. YNAB and Monarch are the most popular paid apps; Copilot is the mobile-first pick. Free options like the budgeting tool inside SoFi or your bank's own app cover the basics.",
  },
  {
    q: "How much should I save each month?",
    a: "Start with 20% of take-home pay split across emergency fund + retirement + extra debt payoff. If 20% is impossible, start at 5% and ratchet up 1% every quarter. The actual rate matters less than the habit of paying yourself first before discretionary spending.",
  },
  {
    q: "What if my income varies month to month?",
    a: "Budget based on your average low month — not your average month. Set a 'staging' checking account where every paycheck lands. Pay yourself a fixed 'salary' from it on the 1st and 15th. Excess from high months builds the buffer for low months. This is how freelancers stay sane.",
  },
  {
    q: "How often should I review my budget?",
    a: "Once a week for ~10 minutes (check categories, adjust if needed) and once a month for ~30 minutes (full reconciliation, retire categories that don't fit, set the next month). Budgets that don't get reviewed silently break within 6 weeks.",
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
      <JsonLd
        data={howToJsonLd({
          name: "How to set up a monthly budget",
          steps: [
            { name: "Calculate take-home pay", text: "Add net (post-tax, post-401k) pay across all income sources for one month." },
            { name: "Pick a method", text: "Choose 50/30/20, zero-based, envelopes, or pay-yourself-first based on your discipline level." },
            { name: "List fixed costs", text: "Rent/mortgage, utilities, insurance, debt minimums, subscriptions, transportation." },
            { name: "Allocate variable spending", text: "Groceries, dining, gas, entertainment — use the last 60 days of statements as the baseline." },
            { name: "Automate transfers", text: "Set auto-transfers on payday to HYSA + retirement + debt payoff." },
            { name: "Review weekly", text: "Open the app or sheet for 10 minutes each weekend to catch drift early." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="The 2026 version — pick a method that fits your discipline level, set up the boring automation once, then spend 10 minutes a week keeping it alive."
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
            <strong>A budget is just a plan for your money before the month starts.</strong> The
            method matters less than the habit. The two failure modes are: (1) picking a system more
            elaborate than you'll actually follow, or (2) tracking expenses without ever planning
            them. This guide walks through how to avoid both.
          </p>

          <p>
            If you're brand new to budgeting, the 50/30/20 rule is the lowest-friction starting
            point. We cover it in depth in the{" "}
            <Link href="/learn/how-to-budget-50-30-20">50/30/20 budget guide</Link>. This article is
            the broader version — the method choice, the setup, and the maintenance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Pick a method that matches your discipline level</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Method</th>
                  <th className="py-3 pr-4">Effort</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">50/30/20</td><td className="py-3 pr-4">Low — 3 buckets</td><td className="py-3 pr-4">Beginners, single-income, simple lives</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Pay-yourself-first</td><td className="py-3 pr-4">Lowest — automate, spend rest</td><td className="py-3 pr-4">Hate tracking, just want to save</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Zero-based</td><td className="py-3 pr-4">High — assign every dollar</td><td className="py-3 pr-4">Couples, high earners, debt payoff</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Envelope (digital)</td><td className="py-3 pr-4">Medium — multi-account or app</td><td className="py-3 pr-4">Overspenders, variable income</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Honest advice:</strong> if you've never budgeted before, do{" "}
            <strong>pay-yourself-first</strong> or <strong>50/30/20</strong>. Zero-based is the most
            precise method, but it has a 75%+ dropout rate within 90 days for people new to
            budgeting.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 45-minute setup</h2>

          <ol>
            <li><strong>Calculate take-home pay.</strong> Net of taxes, health insurance, and 401(k). Add side income.</li>
            <li><strong>List fixed costs.</strong> Rent, utilities, insurance, minimum debt payments, subscriptions, transportation.</li>
            <li><strong>Pull 60 days of statements</strong> to baseline variable spending — groceries, dining, gas, entertainment.</li>
            <li><strong>Decide your savings rate.</strong> 20% if you can; ratchet up 1% per quarter if you can't.</li>
            <li><strong>Set up the accounts.</strong> Checking for fixed costs, HYSA for savings, separate account for variable spending if you tend to overspend.</li>
            <li><strong>Automate.</strong> Auto-transfer to HYSA + retirement + extra debt on payday — before discretionary spending happens.</li>
            <li><strong>Calendar the weekly review.</strong> Saturday morning, 10 minutes, in whatever app or sheet you chose.</li>
          </ol>

          <p>
            The automation step is the one that does most of the work. Most "willpower" budgets
            fail; automated ones survive.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to keep your savings</h2>

          <p>
            <strong>The dollars you're trying to save should live somewhere they can earn.</strong>{" "}
            A high-yield savings account in 2026 pays roughly 4–4.5% APY — versus 0.01% at most
            big-bank checking. On a $10,000 emergency fund, that's <strong>~$400/year</strong> of
            free money for moving accounts.
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
            Full roundup in our <Link href="/learn/best-hysa-2026">best HYSA 2026 guide</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Apps that make this easier</h2>

          <ul>
            <li><strong>YNAB ($109/year)</strong> — zero-based budgeting, steep learning curve, devoted community. Best for couples doing serious debt payoff.</li>
            <li><strong>Monarch ($99/year)</strong> — clean UI, strong investment tracking, good shared-budgets for couples.</li>
            <li><strong>Copilot ($95/year, iOS)</strong> — best mobile UX, AI categorization, no web app.</li>
            <li><strong>Free options</strong> — Empower (free, ads), your bank's built-in tool, or a Google Sheet you actually open.</li>
          </ul>

          <p>
            <AffiliateButton partner="ynab" source={slug}>Try YNAB free for 34 days →</AffiliateButton>
          </p>

          <p>
            Or compare:{" "}
            <AffiliateButton partner="monarch" source={slug} variant="secondary">Monarch</AffiliateButton>{" "}
            <AffiliateButton partner="copilot" source={slug} variant="secondary">Copilot</AffiliateButton>
          </p>

          <p>
            Full comparison in our <Link href="/learn/best-budgeting-apps-2026">best budgeting apps 2026</Link> guide.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Common mistakes and fixes</h2>

          <ul>
            <li><strong>Mistake: Setting categories too tight.</strong> A $200 grocery budget for a family of four is fiction. Fix: use 60 days of actual data, not aspiration.</li>
            <li><strong>Mistake: No "fun" line.</strong> Budgets without discretionary spending fail. Fix: explicit "wants" allocation.</li>
            <li><strong>Mistake: Tracking after the fact only.</strong> Fix: set category limits in advance and check weekly.</li>
            <li><strong>Mistake: Forgetting annual costs.</strong> Car registration, holidays, insurance premiums. Fix: divide annual costs by 12 and stash monthly in a "sinking fund" HYSA bucket.</li>
            <li><strong>Mistake: Tying every dollar to a category from day one.</strong> Fix: leave a 5–10% "miscellaneous" buffer.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Couples: budget together or separately?</h2>

          <p>
            <strong>Joint budgets work best when both partners have full visibility</strong> even if
            you keep some separate spending money. The most durable model in our reader base:
          </p>

          <ul>
            <li>Joint checking for shared fixed costs (rent, utilities, groceries).</li>
            <li>Joint HYSA for shared savings goals.</li>
            <li>Individual checking for personal discretionary — each partner contributes a flat amount monthly.</li>
            <li>Monthly money meeting (~30 min) to review categories and adjust.</li>
          </ul>

          <p>
            Deeper guide:{" "}
            <Link href="/learn/couples-budgeting-guide">how to budget as a couple</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How budgeting connects to the rest of your money</h2>

          <p>
            A budget isn't the goal — <strong>it's the funnel</strong>. The savings rate is the
            number that compounds. A working budget should produce:
          </p>

          <ul>
            <li>A 3–6 month <Link href="/learn/how-to-build-emergency-fund">emergency fund</Link> in a HYSA.</li>
            <li>Enough left over to <Link href="/learn/how-much-to-contribute-to-401k">capture the full 401(k) match</Link>.</li>
            <li>Room to <Link href="/learn/how-to-pay-off-credit-card-debt">pay off credit card debt</Link> aggressively (the 22%+ APR makes this the highest-priority dollar).</li>
            <li>Eventually, automated contributions to a <Link href="/learn/roth-ira-vs-traditional-ira">Roth IRA</Link> or taxable brokerage.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Pick the simplest method you'll actually follow.</strong> Automate transfers on
            payday so you never see the savings dollars in checking. Set a 10-minute weekly review.
            Revisit categories monthly.
          </p>

          <p>
            The goal isn't a perfect budget. It's <strong>a budget that survives month six</strong>{" "}
            — most don't.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-budget-50-30-20">The 50/30/20 rule explained</Link></li>
            <li><Link href="/learn/best-budgeting-apps-2026">Best budgeting apps 2026</Link></li>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link></li>
            <li><Link href="/learn/couples-budgeting-guide">Budgeting as a couple</Link></li>
            <li><Link href="/learn/best-hysa-2026">Best HYSA 2026</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">Pay off credit card debt</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
