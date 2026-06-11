import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "couples-budgeting-guide";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to budget as a couple: A practical guide";
const description =
  "How to combine finances as a couple — joint, separate, or hybrid accounts; how to split expenses fairly; and how to run a monthly money check-in. A judgment-free framework for budgeting together.";
const PUBLISHED = "2026-05-21";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Should couples have joint or separate bank accounts?",
    a: "There's no single right answer — the best setup is the one you both agree on. Three common models work well: fully joint (everything shared), fully separate (you split bills but keep accounts apart), and the hybrid 'yours, mine, and ours' (a joint account for shared expenses plus individual accounts for personal spending). The hybrid is the most popular because it balances teamwork with autonomy.",
  },
  {
    q: "How should couples split expenses fairly?",
    a: "If incomes are similar, a 50/50 split is simple and works. If they're not, splitting proportionally to income is usually fairer — for example, the partner earning 60% of household income covers 60% of shared bills. The goal is that both partners feel the split is equitable, not necessarily identical. Agree on the method explicitly rather than letting it happen by default.",
  },
  {
    q: "What is the 'yours, mine, and ours' budgeting method?",
    a: "It's a hybrid system with three buckets: a joint account both partners fund for shared expenses (rent, utilities, groceries, shared savings), plus two individual accounts for personal, no-questions-asked spending. Each person contributes an agreed amount to the joint account each month, then keeps the rest. It combines shared accountability with personal freedom, which is why many couples settle on it.",
  },
  {
    q: "How often should couples talk about money?",
    a: "A short monthly money check-in (15–30 minutes) is the single most effective habit. Review what you spent versus the plan, upcoming large expenses, and progress toward shared goals. Keeping it regular and low-stakes prevents money issues from building up into bigger conflicts, and it keeps both partners informed and aligned.",
  },
  {
    q: "How do we budget when we have very different spending styles?",
    a: "Build personal spending into the plan rather than fighting over it. The hybrid model is ideal here: agree on shared contributions and goals, then give each partner an equal personal allowance to spend however they like, judgment-free. A saver and a spender can coexist as long as the shared obligations and savings goals are funded first.",
  },
  {
    q: "Should couples combine finances before marriage?",
    a: "Many couples start combining gradually — often a shared account for joint bills while keeping individual accounts — before fully merging. There's no obligation to combine everything, even after marriage. What matters most is transparency about income, debt, and goals, and agreement on how shared expenses get covered.",
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

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Joint, separate, or hybrid accounts; how to split bills fairly; and the monthly check-in that keeps both partners aligned. A judgment-free framework for budgeting together."
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
            <strong>Budgeting as a couple comes down to three decisions:</strong> how to structure
            your accounts, how to split shared expenses, and how often you&apos;ll talk about money.
          </p>

          <p>
            <strong>There&apos;s no single correct setup.</strong> The best system is the one you
            both understand and agree on. Money is one of the most common sources of relationship
            conflict — not because of the dollars, but because of mismatched expectations. A clear,
            shared plan removes the guesswork.
          </p>

          <p>
            This guide walks through the three account models, two fair ways to split expenses, and a
            simple monthly check-in that keeps both partners on the same page.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 1: Choose how to structure your accounts</h2>
          <p>
            The first decision is how combined your money will be. Three models cover almost every
            couple, and each has a clear trade-off.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Model</th>
                  <th className="py-3 pr-4">How it works</th>
                  <th className="py-3 pr-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Fully joint</td>
                  <td className="py-3 pr-4">All income and spending in shared accounts</td>
                  <td className="py-3 pr-4">High trust, similar habits</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Fully separate</td>
                  <td className="py-3 pr-4">Each keeps own accounts; split the bills</td>
                  <td className="py-3 pr-4">Strong desire for autonomy</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Hybrid (&quot;yours, mine, ours&quot;)</td>
                  <td className="py-3 pr-4">Joint account for shared costs + individual accounts</td>
                  <td className="py-3 pr-4">Most couples</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Why the hybrid wins for most couples.</strong> It funds shared life from a joint
            account — so bills and savings are a team effort — while leaving each partner a personal
            account for no-questions-asked spending. You get accountability without surveillance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 2: Split shared expenses fairly</h2>
          <p>
            Once you have a shared pot, you need a rule for how much each person puts in. There are
            two fair approaches — pick the one that matches your incomes.
          </p>

          <p>
            <strong>Equal split (50/50).</strong> Each partner contributes the same dollar amount to
            shared expenses. Simple and transparent — and a good fit when your incomes are similar.
          </p>

          <p>
            <strong>Proportional split.</strong> Each partner contributes in proportion to their
            income. If one earns <strong>60%</strong> of the household total, they cover{" "}
            <strong>60%</strong> of shared bills. This keeps the split equitable when incomes differ
            significantly.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Shared expense</th>
                  <th className="py-3 pr-4">50/50 split</th>
                  <th className="py-3 pr-4">Proportional (60/40)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">$3,000 in monthly shared bills</td>
                  <td className="py-3 pr-4">$1,500 each</td>
                  <td className="py-3 pr-4">$1,800 / $1,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Whichever you choose, <strong>agree on it out loud.</strong> Most resentment comes from a
            split that was never actually discussed.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 3: Build the budget together</h2>
          <p>
            With accounts and splits decided, build the actual plan. The{" "}
            <strong>50/30/20 framework</strong> works just as well for two people as for one —
            applied to your combined take-home pay.
          </p>

          <ul>
            <li><strong>50% needs.</strong> Rent or mortgage, utilities, groceries, insurance, minimum debt payments, transportation.</li>
            <li><strong>30% wants.</strong> Dining out, travel, hobbies, and each partner&apos;s personal spending allowance.</li>
            <li><strong>20% savings.</strong> Shared goals — emergency fund, retirement, a house down payment — funded from the joint account.</li>
          </ul>

          <p>
            Run your combined numbers through the{" "}
            <Link href="/tools/budget-50-30-20">50/30/20 budget calculator</Link> to see the
            targets, then read{" "}
            <Link href="/learn/how-to-budget-50-30-20">the full 50/30/20 guide</Link> for how to
            apply it.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Step 4: Hold a monthly money check-in</h2>
          <p>
            The single habit that separates couples who stay aligned from those who drift is a
            short, regular money conversation. Keep it brief and low-stakes.
          </p>

          <ul>
            <li><strong>Keep it short.</strong> 15–30 minutes, same time each month, no surprises.</li>
            <li><strong>Review the month.</strong> Compare what you spent against the plan — without blame.</li>
            <li><strong>Look ahead.</strong> Flag any large or irregular expenses coming up.</li>
            <li><strong>Check the goals.</strong> Note progress on the emergency fund, debt, and savings targets.</li>
          </ul>

          <p>
            <strong>Why it works.</strong> Small issues get resolved before they compound, and both
            partners stay informed — which is what prevents money from becoming a source of conflict.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Don&apos;t forget shared goals</h2>
          <p>
            Budgeting together isn&apos;t only about covering bills — it&apos;s about funding the
            future you&apos;re building as a team. A shared <strong>high-yield savings account</strong>{" "}
            is the natural home for joint goals like an emergency fund or a down payment.
          </p>

          <p>
            <strong>Start with a joint emergency fund.</strong> Three to six months of shared
            essential expenses, kept separate from your spending accounts, protects you both when
            life goes sideways. Our{" "}
            <Link href="/learn/how-to-build-emergency-fund">emergency fund guide</Link> walks through
            how to size and build it.
          </p>

          <p>
            <AffiliateButton partner="marcus" source={slug}>
              Open a joint high-yield savings account at Marcus →
            </AffiliateButton>
          </p>

          <p>
            Ally and SoFi also offer strong joint savings options with no minimums:
          </p>
          <ul>
            <li><AffiliateButton partner="ally" source={slug} variant="secondary">Open an Ally savings account</AffiliateButton></li>
            <li><AffiliateButton partner="sofi-money" source={slug} variant="secondary">Open a SoFi savings account</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>
          <p>
            <strong>Pick an account model, agree on a fair split, and check in monthly.</strong> The
            hybrid &quot;yours, mine, and ours&quot; setup works for most couples because it funds
            shared life together while preserving personal autonomy.
          </p>
          <p>
            The mechanics matter less than the alignment. A couple that talks openly about money and
            agrees on the plan will do well with almost any system — and a shared emergency fund is
            the best first goal to build toward together.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-budget-50-30-20">How to budget with the 50/30/20 rule</Link> — the framework, applied to your combined income.</li>
            <li><Link href="/learn/how-to-build-emergency-fund">How to build an emergency fund</Link> — your first shared savings goal.</li>
            <li><Link href="/tools/budget-50-30-20">50/30/20 budget calculator</Link> — run your household numbers.</li>
            <li><Link href="/learn/best-hysa-2026">Best high-yield savings accounts 2026</Link> — where to keep joint savings.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
