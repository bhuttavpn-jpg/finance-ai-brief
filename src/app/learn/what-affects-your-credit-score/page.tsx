import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "what-affects-your-credit-score";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "What affects your credit score? The 5 factors explained";
const description =
  "Your FICO score is built from five categories with set weights: payment history (35%), amounts owed (30%), length of history (15%), credit mix (10%), and new credit (10%). Here's what actually moves the score, and what doesn't.";
const PUBLISHED = "2026-05-31";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What is the most important factor in your credit score?",
    a: "Payment history — 35% of your FICO score. One missed payment 30+ days late can drop your score 50–100 points and stay on your report for 7 years. There's no faster way to damage a credit score, and nothing else you do matters if you can't pay on time.",
  },
  {
    q: "Does checking my credit score hurt my credit score?",
    a: "No. Soft inquiries (you checking, lender prequalification, employer checks) don't affect your score. Only hard inquiries — pulled when you apply for credit — affect it, and even then only by a few points each and only for 12 months. Pull your reports regularly through Credit Karma, your bank, or annualcreditreport.com.",
  },
  {
    q: "How long do late payments stay on my credit report?",
    a: "Seven years from the date of the original delinquency. The damage to your score is biggest in the first 12–24 months and slowly fades as the late payment ages. After 7 years, the late payment falls off entirely. Collections and charge-offs also stay 7 years; bankruptcies stay 7–10 years depending on chapter.",
  },
  {
    q: "What is credit utilization and why does it matter?",
    a: "Credit utilization is your balance divided by your credit limit, both per card and total across all cards. It's 30% of your FICO score. Keep it under 30% to avoid score damage; under 10% to maximize the score. The utilization that matters is what's reported to the credit bureaus on your statement closing date, not your average daily balance — so paying down before the statement closes is the move.",
  },
  {
    q: "Should I close old credit cards?",
    a: "Usually no. Closing a card reduces your available credit (raising utilization) and shortens your average account age. Both hurt your score. Exceptions: if there's an annual fee you're not using, or the card has been closed by the issuer for inactivity — in those cases the damage is already done.",
  },
  {
    q: "Do utility bills affect my credit score?",
    a: "Not by default — most utility providers don't report to credit bureaus. But Experian Boost lets you opt-in to count on-time utility, phone, and streaming payments toward your Experian credit file. This can lift the Experian-pulled score for someone with thin credit history; it doesn't affect Equifax or TransUnion scores.",
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
          subtitle="Your FICO score is a weighted formula across five categories. Two of them — payment history and utilization — account for two-thirds of the score. The other three each matter at the margins."
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
            <strong>Your FICO score comes from a weighted formula across five categories.</strong>
            The weights aren&apos;t secret — FICO publishes them. Two factors account for 65% of
            the score; the other three split the rest.
          </p>

          <p>
            <strong>If you optimize the first two (payment history and amounts owed),</strong> the
            other three mostly take care of themselves over time. Most credit-building advice that
            sounds clever is either irrelevant or actively counterproductive.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 5 factors and their weights</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Factor</th>
                  <th className="py-3 pr-4">Weight</th>
                  <th className="py-3 pr-4">What it measures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Payment history</td><td className="py-3 pr-4">35%</td><td className="py-3 pr-4">Whether you pay on time, every time</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Amounts owed (utilization)</td><td className="py-3 pr-4">30%</td><td className="py-3 pr-4">Balance vs. limit, per card and total</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Length of credit history</td><td className="py-3 pr-4">15%</td><td className="py-3 pr-4">Average age of accounts; age of oldest</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Credit mix</td><td className="py-3 pr-4">10%</td><td className="py-3 pr-4">Variety of credit types (cards, loans, mortgage)</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">New credit</td><td className="py-3 pr-4">10%</td><td className="py-3 pr-4">Recent applications and new accounts</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>1. Payment history (35%)</h2>

          <p>
            <strong>The single biggest factor.</strong> Did you pay your bills on time, every time?
            A FICO score is fundamentally a forecast of whether you&apos;ll pay future debt on time,
            and your past behavior is the strongest predictor.
          </p>

          <p>
            <strong>What helps:</strong>
          </p>
          <ul>
            <li>On-time payments every single month, on every account</li>
            <li>Older late payments aging off (they hurt less over time)</li>
          </ul>

          <p>
            <strong>What hurts:</strong>
          </p>
          <ul>
            <li>One 30-day-late payment: drops score 50–100 points</li>
            <li>60-day-late: bigger drop</li>
            <li>90-day-late and beyond: severe damage</li>
            <li>Collections, charge-offs, bankruptcies: catastrophic damage that takes years to recover from</li>
          </ul>

          <p>
            <strong>The fix:</strong> set every account to autopay-minimum. The full payment can be
            manual or a separate autopay; minimum-autopay is the safety net under everything else.
            One missed payment can undo a year of credit-building.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2. Amounts owed / credit utilization (30%)</h2>

          <p>
            <strong>The second biggest factor.</strong> Credit utilization is the balance on each
            card (and across all cards) divided by the credit limit. FICO views high utilization as
            a sign you&apos;re stretched.
          </p>

          <p>
            <strong>The target:</strong>
          </p>
          <ul>
            <li><strong>Under 30%</strong> — avoid most utilization damage</li>
            <li><strong>Under 10%</strong> — maximize the score</li>
            <li><strong>1–9%</strong> — slightly better than 0% (signals active use)</li>
          </ul>

          <p>
            <strong>The timing detail that catches everyone:</strong> utilization is measured on
            your statement closing date, not your due date. If you charge $1,000 to a card with a
            $2,000 limit and pay it off the day before your due date, your statement still reported
            50% utilization to the bureaus. Pay it down BEFORE the statement closes to keep reported
            utilization low.
          </p>

          <p>
            <strong>The fix:</strong> set a calendar reminder 2–3 days before your statement closes.
            Pay down to under 10% of the limit at that time. Or request a credit-limit increase
            (soft pull) every 6–12 months to raise the denominator.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>3. Length of credit history (15%)</h2>

          <p>
            <strong>How long have your accounts been open?</strong> FICO looks at the age of your
            oldest account, your newest account, and the average age across all accounts. Older is
            better.
          </p>

          <p>
            <strong>What hurts:</strong>
          </p>
          <ul>
            <li>Closing old credit cards (drops the oldest and the average)</li>
            <li>Opening many new accounts in a short time (drags the average down)</li>
          </ul>

          <p>
            <strong>The fix:</strong> never close your oldest no-fee card. If your oldest card has
            an annual fee, ask the issuer to product-change it to a no-fee version of the same card
            — that keeps the account age while eliminating the fee.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>4. Credit mix (10%)</h2>

          <p>
            <strong>FICO likes seeing both revolving credit (cards) and installment loans (auto,
            mortgage, student, personal).</strong> If your only credit is credit cards, your mix is
            weaker than someone who also has an auto loan or mortgage.
          </p>

          <p>
            <strong>The fix:</strong> don&apos;t take on debt just to improve your mix. That&apos;s
            backward. But if you naturally have an auto loan or mortgage in addition to cards,
            you&apos;ll see a small score benefit. Credit-builder loans (Self, Kikoff) can add
            installment history for someone with cards-only.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>5. New credit (10%)</h2>

          <p>
            <strong>How recently did you open new accounts? How many hard inquiries hit recently?</strong>
            FICO treats a flurry of applications as a risk signal — someone seeking lots of new
            credit may be in trouble.
          </p>

          <p>
            <strong>What hurts:</strong>
          </p>
          <ul>
            <li>Hard inquiries (each drops the score a few points for 12 months)</li>
            <li>Many new accounts opened in a short window</li>
          </ul>

          <p>
            <strong>The exception — rate shopping:</strong> when you apply for the same kind of loan
            (mortgage, auto, student) within a 14- or 45-day window, FICO bundles those inquiries
            into a single one. Shop rates aggressively for big-ticket loans; don&apos;t spread
            applications out.
          </p>

          <p>
            <strong>The fix:</strong> apply for new credit deliberately. Use issuer prequalification
            tools (soft pulls) to check approval odds before applying. Space hard applications 6+
            months apart unless you&apos;re rate-shopping.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>What does NOT affect your credit score</h2>

          <ul>
            <li><strong>Your income.</strong> FICO doesn&apos;t see it. Lenders see it on the application; FICO models don&apos;t use it.</li>
            <li><strong>Your savings balance or net worth.</strong> Same — not in the model.</li>
            <li><strong>Checking the score yourself.</strong> Soft pull, no impact.</li>
            <li><strong>Employer credit checks.</strong> Soft pull, no impact.</li>
            <li><strong>Carrying a balance &quot;to build credit.&quot;</strong> Myth. Pay in full. Interest doesn&apos;t build credit; on-time history does.</li>
            <li><strong>Renting (usually).</strong> Most landlords don&apos;t report rent payments to bureaus. Services like RentTrack and Experian RentBureau let you opt-in to add rent payments.</li>
            <li><strong>Bank account balances or overdrafts</strong> (unless they go to collections).</li>
            <li><strong>Soft inquiries from prequalification tools.</strong> Including the &quot;See your approval odds&quot; tools at most card issuers.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually move your score</h2>

          <p>
            <strong>Fast wins (1–3 months):</strong>
          </p>
          <ol>
            <li><strong>Pay down balances</strong> before your statement closes. Utilization moves the score in days.</li>
            <li><strong>Dispute errors</strong> on your reports. Free at annualcreditreport.com. Wrong account, wrong balance, identity-theft accounts — disputed errors drop off quickly when verified.</li>
            <li><strong>Request credit-limit increases</strong> on existing cards via soft-pull request. Higher limits = lower utilization at the same spending.</li>
            <li><strong>Add Experian Boost</strong> to count on-time utility/phone payments on your Experian file.</li>
          </ol>

          <p>
            <strong>Medium-term (3–12 months):</strong>
          </p>
          <ol>
            <li><strong>Set every account to autopay-minimum.</strong> Eliminates the biggest risk to the score.</li>
            <li><strong>Reduce new applications.</strong> Let inquiries age off.</li>
          </ol>

          <p>
            <strong>Long-term (1+ years):</strong>
          </p>
          <ol>
            <li><strong>Let accounts age.</strong> Average age of accounts is something only time fixes.</li>
            <li><strong>Let negative items age off.</strong> Late payments fade. Collections fall off at 7 years.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>How to check your score and reports free</h2>

          <p>
            <strong>Three places to look:</strong>
          </p>

          <ul>
            <li><strong>annualcreditreport.com</strong> — the federally-mandated free reports from all three bureaus (Equifax, Experian, TransUnion), now available weekly. No score, just reports.</li>
            <li><strong>Your bank or credit card app</strong> — most include a FICO score (Chase, Citi, Discover, Capital One, Bank of America, Wells Fargo).</li>
            <li><strong>Credit Karma</strong> — free monitoring of Equifax and TransUnion VantageScores (not FICO). Useful for tracking changes; the VantageScore is usually within 10–20 points of your FICO.</li>
          </ul>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Check your credit free at Credit Karma →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            <strong>Two factors do most of the work:</strong> pay every bill on time, every time, and
            keep utilization under 10% on your statement closing date. Get those two right and the
            rest of the score takes care of itself over time. There&apos;s no clever trick that
            substitutes for these two habits.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
            <li><Link href="/learn/best-credit-cards-for-beginners">Best credit cards for beginners</Link></li>
            <li><Link href="/learn/best-cashback-credit-cards-2026">Best cashback credit cards 2026</Link></li>
            <li><Link href="/learn/how-to-pay-off-credit-card-debt">How to pay off credit card debt</Link></li>
            <li><Link href="/learn/debt-snowball-vs-avalanche">Debt snowball vs. avalanche</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
