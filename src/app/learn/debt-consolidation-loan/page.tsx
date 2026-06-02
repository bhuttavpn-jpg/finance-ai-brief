import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "debt-consolidation-loan";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Debt consolidation loan: When it's the right move (and when it isn't)";
const description =
  "A debt consolidation loan is just a personal loan you use to pay off high-APR debt. It works when the new rate is meaningfully lower AND you stop using the cards you're consolidating. It fails when borrowers run the cards back up — doubling their debt. Here's the honest framework.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's a debt consolidation loan?",
    a: "A personal loan you take out specifically to pay off other higher-rate debts — typically credit cards. The new loan has a lower rate, a fixed payoff timeline, and a single monthly payment instead of juggling 3–5 card payments. Functionally identical to a regular personal loan; the 'consolidation' name just describes the use case.",
  },
  {
    q: "When is debt consolidation actually worth it?",
    a: "Three conditions all need to be true. (1) The new loan rate is at least 5 percentage points lower than the cards you're paying off. (2) You have the discipline to stop using the cards after consolidating. (3) Your credit score qualifies you for a sub-15% APR on the consolidation loan. Without all three, you're either not saving enough or setting up for a worse outcome.",
  },
  {
    q: "Will it help my credit score?",
    a: "Usually yes, often dramatically. Paying off revolving credit card balances drops your utilization ratio to near 0%, which can lift your FICO 20–40 points. The new personal loan adds an installment account (good for credit mix) and the inquiry costs ~5 points temporarily. Net effect: positive within 30–60 days.",
  },
  {
    q: "What if I have bad credit?",
    a: "Sub-650 FICO scores typically get debt-consolidation loan offers in the 22–35% range — barely better than the cards you're trying to escape, sometimes worse. In that case, focus on paying down balances first (which raises your score), or look at a credit counseling service's debt management plan (DMP) — they negotiate lower rates with card issuers directly.",
  },
  {
    q: "Should I use my home equity instead?",
    a: "Only if you're disciplined and unlikely to repeat the debt cycle. HELOCs and home equity loans typically have lower rates (~7–10%) than personal loans (10–15%), but you're putting your house at risk. If you lose your job and can't pay, the bank can foreclose. Personal loans are unsecured — only your credit score takes the hit.",
  },
  {
    q: "Should I use a balance transfer card instead?",
    a: "For under $5K of debt you can clear in 12–18 months: yes, often cheaper. For $5K+ paid over 2–4 years: a personal loan is usually better. See our personal loan vs. credit card guide for the full math.",
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
          subtitle="A consolidation loan only works if the new rate is materially lower AND you stop using the cards you paid off. Without both, it's a trap that doubles your debt."
          pillar="Borrow smart"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="10 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Debt consolidation is one of the most powerful debt-payoff moves available —
            and one of the easiest to undo by running the cards back up.</strong> The mechanics are
            simple: take out a lower-rate personal loan, use it to pay off your high-APR credit card
            balances, then make fixed monthly payments on the loan instead of juggling multiple card
            minimums.
          </p>

          <p>
            Done right, it saves thousands in interest and lifts your credit score. Done wrong, it
            doubles your debt.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The math: why consolidation works</h2>

          <p>Example: $15,000 of credit card debt across three cards at 24% APR.</p>

          <ul>
            <li><strong>Status quo (minimum payments only):</strong> ~20+ years to pay off, ~$22,000 in interest.</li>
            <li><strong>Status quo ($500/month flat):</strong> ~46 months, ~$7,800 in interest.</li>
            <li><strong>Consolidation to 12% personal loan, 4-year term:</strong> $395/month, ~$3,950 in interest. <strong>Saves $3,850</strong>.</li>
            <li><strong>Consolidation to 9% personal loan, 3-year term:</strong> $477/month, ~$2,180 in interest. <strong>Saves $5,620</strong>.</li>
          </ul>

          <p>
            <strong>The interest savings are real and large.</strong> Plus the FICO bump from
            dropping revolving utilization typically lifts your score 20–40 points.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The three conditions for consolidation to actually work</h2>

          <ol>
            <li><strong>The new rate is meaningfully lower.</strong> At least 5 percentage points below the cards you're consolidating. A 24% APR card consolidating to a 19% loan saves a little. The same card consolidating to a 12% loan saves a lot.</li>
            <li><strong>You stop using the cards.</strong> The single failure mode: borrowers consolidate $15K of cards, feel "free," run the cards back up to $15K, and end up with $30K of debt — $15K personal loan + $15K cards. Discipline is the requirement, not a nice-to-have.</li>
            <li><strong>Your credit qualifies you for sub-15% APR.</strong> Below 650 FICO, consolidation loan rates often run 22–30% — barely better than the cards. The math doesn't work.</li>
          </ol>

          <p>
            <strong>If any one of the three fails, consolidation is the wrong tool.</strong>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What you'll qualify for at different credit scores</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">FICO score</th>
                  <th className="py-3 pr-4">Typical APR range</th>
                  <th className="py-3 pr-4">Consolidation makes sense?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4">780+</td><td className="py-3 pr-4">~7–11%</td><td className="py-3 pr-4">Yes — big rate drop vs. cards</td></tr>
                <tr><td className="py-3 pr-4">720–779</td><td className="py-3 pr-4">~9–14%</td><td className="py-3 pr-4">Yes</td></tr>
                <tr><td className="py-3 pr-4">680–719</td><td className="py-3 pr-4">~12–18%</td><td className="py-3 pr-4">Usually yes</td></tr>
                <tr><td className="py-3 pr-4">640–679</td><td className="py-3 pr-4">~16–24%</td><td className="py-3 pr-4">Maybe — run the math</td></tr>
                <tr><td className="py-3 pr-4">580–639</td><td className="py-3 pr-4">~22–32%</td><td className="py-3 pr-4">Usually not — focus on rate-improving moves first</td></tr>
                <tr><td className="py-3 pr-4">&lt; 580</td><td className="py-3 pr-4">~30%+ or denied</td><td className="py-3 pr-4">No — consider debt management plan</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>How to do it step by step</h2>

          <ol>
            <li><strong>List every debt</strong> you want to consolidate: balance, APR, and minimum payment for each.</li>
            <li><strong>Calculate the weighted average APR</strong> of your current debts. This is the rate to beat.</li>
            <li><strong>Pre-qualify with 3+ lenders</strong> — all soft pulls, no credit damage. SoFi, LightStream, and one credit-karma marketplace pick.</li>
            <li><strong>Compare APR (not just rate)</strong> — origination fees can add 1–8% to the effective rate.</li>
            <li><strong>Pick the loan with the lowest APR that gives you a comfortable monthly payment.</strong></li>
            <li><strong>Apply</strong> — hard pull at this stage.</li>
            <li><strong>Funds disburse</strong> in 1–3 business days. Pay off the cards immediately.</li>
            <li><strong>Cut up the cards or freeze them</strong> (literally — put them in water in the freezer). Don't close them — that hurts your utilization. Just stop using them.</li>
            <li><strong>Set up autopay</strong> on the personal loan for the 0.25% rate discount and to never miss a payment.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>Where to shop</h2>

          <p>
            <strong>SoFi</strong> and <strong>LightStream</strong> are the two most popular
            consolidation lenders in 2026.
          </p>

          <p>
            <strong>SoFi:</strong> No origination fee, no prepayment penalty, no late fees,
            unemployment protection. Best for 680–760 FICO. Deeper review:{" "}
            <Link href="/learn/sofi-personal-loan-review">SoFi personal loan review</Link>.
          </p>

          <p>
            <AffiliateButton partner="sofi-loans" source={slug}>
              Check SoFi rates →
            </AffiliateButton>
          </p>

          <p>
            <strong>LightStream:</strong> Lowest rates available for 720+ FICO. No origination fee.
            Same-day funding possible.
          </p>

          <p>
            <AffiliateButton partner="lightstream" source={slug}>
              Check LightStream rates →
            </AffiliateButton>
          </p>

          <p>
            <strong>Credit Karma marketplace:</strong> Compares offers from multiple lenders in one
            place. Useful starting point for borrowers under 700 FICO.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug} variant="secondary">
              Credit Karma loan matches
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Alternatives to a consolidation loan</h2>

          <h3>0% intro APR balance transfer</h3>

          <p>
            For under $5K of debt you can clear in 12–18 months. Pay a 3–5% transfer fee but no
            interest during the intro window. Risk: if you don't pay off in the window, the back
            rate is typically 22–28%.
          </p>

          <p>
            Full comparison in our{" "}
            <Link href="/learn/personal-loan-vs-credit-card">personal loan vs. credit card</Link>{" "}
            guide.
          </p>

          <h3>Home equity loan or HELOC</h3>

          <p>
            Lower rates (~7–10%) but secured by your house. Only use if you're highly disciplined
            and confident you won't run the cards back up. The downside is severe — missed payments
            can lead to foreclosure.
          </p>

          <h3>401(k) loan</h3>

          <p>
            <strong>Generally a bad idea.</strong> If you leave or lose the job, the loan is due
            immediately or treated as a withdrawal (10% penalty + ordinary income tax). The
            opportunity cost of taking money out of the market is also large.
          </p>

          <h3>Debt management plan (DMP) through a nonprofit credit counselor</h3>

          <p>
            <strong>The right move if your credit is too low to qualify for a sub-15% loan.</strong>{" "}
            Nonprofits like the National Foundation for Credit Counseling (NFCC) negotiate reduced
            interest rates with card issuers directly. Typical APRs in a DMP: 8–12%. The catch:
            cards in the plan are closed during the plan; you can't use them.
          </p>

          <h3>Debt settlement</h3>

          <p>
            <strong>Last resort, with serious downsides.</strong> Settlement involves stopping
            payments and negotiating a lump-sum payoff at 30–60 cents on the dollar. The credit
            damage is severe (lasts 7 years), and forgiven debt over $600 is taxable as income.
            Only consider if bankruptcy is the alternative.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The behavior problem (the real reason most consolidations fail)</h2>

          <p>
            <strong>Roughly 30% of debt consolidation borrowers end up with MORE total debt within
            2 years</strong> than when they consolidated. The mechanism is always the same: cards
            paid off → cards used again → balance grows back → personal loan still has to be paid →
            household has both.
          </p>

          <p>Fixes:</p>

          <ul>
            <li><strong>Lock the cards.</strong> Freeze, cut up, or store with a trusted friend.</li>
            <li><strong>Remove cards from auto-pay accounts</strong> (Netflix, Spotify, Amazon). Switch to debit/HYSA card.</li>
            <li><strong>Set up a budgeting app</strong> to track ongoing spending.
              <br />
              <AffiliateButton partner="ynab" source={slug} variant="secondary">YNAB</AffiliateButton>{" "}
              <AffiliateButton partner="monarch" source={slug} variant="secondary">Monarch</AffiliateButton>
            </li>
            <li><strong>Build a $1,000 starter emergency fund</strong> so surprise expenses don't force credit card use.
              <br />
              <AffiliateButton partner="sofi-money" source={slug} variant="secondary">SoFi HYSA</AffiliateButton>
            </li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>A consolidation loan is the right move when (1) your credit qualifies you for
            sub-15% APR, (2) your current debt is at 22%+ APR, and (3) you have the discipline to
            stop using the consolidated cards.</strong>
          </p>

          <p>
            If your credit isn't high enough for a sub-15% loan, the highest-leverage move is
            improving your credit score first (lower utilization, on-time payments) and revisiting
            in 3–6 months. If discipline is the problem, a debt management plan through a nonprofit
            counselor is more durable than a consolidation loan you'll undo.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-personal-loans-2026">Best personal loans 2026</Link></li>
            <li><Link href="/learn/sofi-personal-loan-review">SoFi personal loan review</Link></li>
            <li><Link href="/learn/personal-loan-vs-credit-card">Personal loan vs. credit card</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
            <li><Link href="/learn/how-to-pay-off-debt">How to pay off debt</Link></li>
            <li><Link href="/learn/debt-snowball-vs-avalanche">Debt snowball vs. avalanche</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
