import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import {
  JsonLd,
  articleJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-build-credit-from-scratch";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to build credit from scratch";
const description =
  "A step-by-step playbook to go from no credit history to a 700+ FICO score in 12–18 months. Covers secured cards, authorized user strategies, and what to never do.";
const PUBLISHED = "2026-05-19";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

const FAQS: QA[] = [
  {
    q: "How long does it take to build credit from zero?",
    a: "You'll typically have a FICO score within 6 months of opening your first credit account, per FICO's own documentation. Reaching 700+ usually takes 12–18 months of consistent on-time payments and low utilization. Reaching 750+ usually takes 2–3 years.",
  },
  {
    q: "Does checking my credit score hurt it?",
    a: "No. Checking your own score is a soft inquiry, which has no effect on your score. Only hard inquiries — when a lender pulls your credit for a new application — affect it, and only by a few points each, with the effect fading within 12 months.",
  },
  {
    q: "Will a secured card show up on my credit report like a regular card?",
    a: "Yes, if the issuer reports to all three bureaus (Equifax, Experian, TransUnion). The two cards we recommend (Capital One Platinum Secured and Discover it Secured) both report to all three. Avoid any secured card that doesn't — without the reporting, you get none of the credit-building benefit.",
  },
  {
    q: "What's the difference between FICO and VantageScore?",
    a: "Both are credit scoring models, but FICO is used in roughly 90% of US lending decisions per FICO disclosures. Free apps like Credit Karma typically show VantageScore, which can differ from your FICO by 20–50 points. Use Credit Karma to track trends, but don't be surprised when a lender pulls a different number.",
  },
  {
    q: "Can I be an authorized user on a parent's card?",
    a: "Yes, and this is the single fastest legal way to build credit history. If a parent or family member adds you to a card they've held for 5+ years with perfect payment history, that card's full history typically appears on your credit report — instantly aging your credit file. Ask whether the issuer reports authorized users to the bureaus before doing this; most do, a few don't.",
  },
  {
    q: "Does paying rent build credit?",
    a: "Only if you actively report it. Landlords don't report rent payments by default. Services like Experian Boost, RentTrack, and Self can add rent payment history to your credit file. The effect is real but modest — usually a 5–15 point bump, useful when starting from zero.",
  },
  {
    q: "Should I close my secured card once I graduate to a regular card?",
    a: "Most issuers, including Capital One and Discover, will automatically convert your secured card to an unsecured version after 6–12 months of on-time payments. That's preferable to closing it — closing a card lowers your average account age and reduces your total credit limit (both hurt your score). Let it convert and keep it open.",
  },
  {
    q: "What's the fastest way to bump my score in 30 days?",
    a: "Three moves with quick effect: (1) pay your statement balance down to under 10% of your credit limit, (2) become an authorized user on a long-held family card, (3) dispute any errors on your credit report at annualcreditreport.com. Combined, this can move your score 30–60 points in one billing cycle.",
  },
  {
    q: "Will paying my credit card multiple times a month help my score?",
    a: "Indirectly, yes. Your statement balance — not your monthly spend — is what gets reported to bureaus. If you pay down your balance before the statement closes, you'll show low utilization. This trick can move utilization-sensitive scores by 20–40 points without changing your spending.",
  },
];

const HOWTO_STEPS = [
  { name: "Check your starting credit file", text: "Pull your free credit reports from annualcreditreport.com. Confirm whether you have a file at all — many young adults don't." },
  { name: "Open a secured credit card", text: "Apply for the Capital One Platinum Secured or Discover it Secured. Deposit $200, which becomes your credit limit. The card reports to all three bureaus." },
  { name: "Use it lightly and pay in full", text: "Charge one small recurring expense (a streaming service) and set autopay for the full statement balance. Keep utilization under 10%." },
  { name: "Add a second tradeline at month 6", text: "Once your secured card has reported 6 months of on-time payments, apply for an unsecured starter card or get added as an authorized user on a parent's account." },
  { name: "Monitor and optimize", text: "Use Credit Karma to track changes monthly. After 12 months, request a credit limit increase on your secured card and start exploring rewards cards." },
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
          author: "Finbrief Editorial Team",
        })}
      />
      <JsonLd data={howToJsonLd({ name: title, steps: HOWTO_STEPS })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="A 12–18 month playbook to go from no credit history to a 700+ FICO score — and the small habits that get you to 750+."
          pillar="Borrow"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Finbrief Editorial Team"
          reviewer="a Certified Financial Planner (CFP®)"
          readingTime="12 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>Your credit score is the invisible number that determines how much you&apos;ll pay for
            a house, car, and literally everything.</strong> Here&apos;s how to build it from 0.
          </p>

          <p>
            A borrower with a 760 FICO score pays roughly 1.5 percentage points less on a 30-year
            mortgage than someone with a 640 — about $80,000 over the life of a $400,000 loan, per
            Freddie Mac and Consumer Financial Protection Bureau (CFPB) data. The same gap shows
            up on auto loans, insurance premiums (in most states), apartment rentals, and even
            employment background checks. Building credit early is one of the highest-ROI
            financial moves a young adult can make.
          </p>
          <p>
            The good news: you can establish a credit file in 6 months, hit 700 in 12–18, and
            reach 750+ within 2–3 years. The process is mechanical. Follow it.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>What a credit score actually is</h2>
          <p>
            A credit score is a three-digit number (typically 300–850) summarizing the likelihood
            you&apos;ll repay a debt on time. The two scoring models that matter:
          </p>
          <ul>
            <li><strong>FICO Score</strong> — used in roughly 90% of US lending decisions per FICO&apos;s published data. This is the one mortgage lenders, auto lenders, and credit card issuers pull.</li>
            <li><strong>VantageScore</strong> — a competing model jointly created by Equifax, Experian, and TransUnion. Free apps like Credit Karma show VantageScore.</li>
          </ul>
          <p>
            The two usually correlate but can diverge by 20–50 points. Your FICO is what matters
            when you actually apply for credit.
          </p>

          <h3>The credit bureaus</h3>
          <p>
            Three nationwide consumer reporting agencies maintain your credit file: Equifax,
            Experian, and TransUnion. Federal law (the FCRA, enforced by the CFPB) entitles you to
            one free report from each bureau every week at{" "}
            <span className="text-ink-muted">annualcreditreport.com</span> — the only government-
            sanctioned source. Pull all three before you start; you can&apos;t fix what you
            don&apos;t see.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>How credit scores are built — the 5 factors</h2>
          <p>
            FICO has publicly disclosed the relative weighting of its five inputs. They&apos;re
            ordered here from most to least important.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Factor</th>
                  <th className="py-3 pr-4">Weight</th>
                  <th className="py-3 pr-4">What it measures</th>
                  <th className="py-3 pr-4">How to optimize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Payment history</td>
                  <td className="py-3 pr-4">35%</td>
                  <td className="py-3 pr-4">On-time vs. late payments</td>
                  <td className="py-3 pr-4">Autopay the full statement balance every month</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Amounts owed (utilization)</td>
                  <td className="py-3 pr-4">30%</td>
                  <td className="py-3 pr-4">Balance ÷ credit limit</td>
                  <td className="py-3 pr-4">Keep under 10% per card and overall</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Length of credit history</td>
                  <td className="py-3 pr-4">15%</td>
                  <td className="py-3 pr-4">Average age of all accounts</td>
                  <td className="py-3 pr-4">Never close your oldest card</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Credit mix</td>
                  <td className="py-3 pr-4">10%</td>
                  <td className="py-3 pr-4">Variety of account types</td>
                  <td className="py-3 pr-4">A mix of revolving + installment helps marginally</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">New credit</td>
                  <td className="py-3 pr-4">10%</td>
                  <td className="py-3 pr-4">Recent hard inquiries</td>
                  <td className="py-3 pr-4">Avoid more than 1–2 new applications per year</td>
                </tr>
              </tbody>
            </table>
            <p className="hint mt-2">Source: FICO official documentation.</p>
          </div>

          <p>
            Payment history and utilization are <strong>65% of your score combined</strong>. If
            you only remember two things: never miss a payment, and never carry a balance above
            10% of your limit on a statement close date.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>If you have no credit history yet</h2>
          <p>
            About 26 million US adults are &quot;credit invisible&quot; — they have no file at any
            bureau, per CFPB research. If you&apos;re one of them, you need to trigger your first
            tradeline. There are three legitimate paths.
          </p>

          <h3>Path 1: A secured credit card (the default)</h3>
          <p>
            A secured card requires you to deposit a refundable amount (typically $200) that
            becomes your credit limit. The deposit sits in a separate account and is returned
            either when you close the card or when the issuer upgrades you to an unsecured
            product. From the bureaus&apos; perspective, it&apos;s a regular credit card —
            payment history reports the same, utilization counts the same, and it ages the same.
          </p>
          <p>
            <strong>This is the right starting move for 90% of people with no credit.</strong>
          </p>

          <h3>Path 2: Authorized user on a family member&apos;s card</h3>
          <p>
            If a parent (or any relative) has held a credit card for 5+ years with perfect
            payment history, ask to be added as an authorized user. Most major issuers
            (including Chase, Capital One, and American Express) report the full account history
            to the bureaus under your file — meaning a 10-year-old account with $20K of limit
            can show up overnight, instantly aging your credit and dropping your utilization. You
            don&apos;t even need to physically use the card.
          </p>
          <p>
            Verify the issuer reports authorized users to all three bureaus before doing this.
            Most do; some don&apos;t.
          </p>

          <h3>Path 3: Credit-builder loans</h3>
          <p>
            A credit-builder loan, offered by some credit unions and apps like Self, is a small
            installment loan where the proceeds sit in a locked savings account while you make
            monthly payments. At the end of the term, you get the money. It&apos;s a mediocre
            option compared with a secured card — slower, more expensive, and only builds the
            installment side of your credit mix. Use it as a supplement, not your primary tool.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Best starter credit cards in 2026</h2>
          <p>
            Two cards stand out for people building from zero. Both report to all three bureaus,
            both have a clear path to upgrade, and both have no annual fee.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Card</th>
                  <th className="py-3 pr-4">Min. deposit</th>
                  <th className="py-3 pr-4">Annual fee</th>
                  <th className="py-3 pr-4">Rewards</th>
                  <th className="py-3 pr-4">Upgrade path</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Capital One Platinum Secured</td>
                  <td className="py-3 pr-4">$49 / $99 / $200</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">Auto-review at 6 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Discover it Secured</td>
                  <td className="py-3 pr-4">$200</td>
                  <td className="py-3 pr-4">$0</td>
                  <td className="py-3 pr-4">2% gas/dining, 1% other; 1st-year cashback match</td>
                  <td className="py-3 pr-4">Auto-review starting at 7 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>1. Capital One Platinum Secured — easiest to qualify</h3>
          <p>
            Capital One offers a tiered deposit ($49, $99, or $200 for a $200 starting credit
            limit, based on your application). For people with truly nothing — no income history,
            no bank relationships — this is the most likely approval. Capital One automatically
            reviews your account at 6 months for an unsecured upgrade. Reports to all three
            bureaus.
          </p>
          <p>
            <AffiliateButton partner="capital-one" source={slug}>
              Apply for Capital One Platinum Secured →
            </AffiliateButton>
          </p>

          <h3>2. Discover it Secured — best rewards on a secured card</h3>
          <p>
            Discover it Secured is the rare secured card that actually pays cashback — 2% on gas
            and dining (up to $1,000/quarter), 1% on everything else. The genuine differentiator
            is Discover&apos;s first-year cashback match: at the end of your first 12 months,
            Discover matches every dollar you earned in rewards. On modest spending, that
            translates to $100–$300 of free cash. Reports to all three bureaus. Discover begins
            automatic upgrade reviews at 7 months.
          </p>
          <p>
            <AffiliateButton partner="discover-it" source={slug}>
              Apply for Discover it Secured →
            </AffiliateButton>
          </p>

          <h3>Which should you pick?</h3>
          <p>
            If you&apos;re unsure your application will be approved or you want the smallest
            possible deposit, go with Capital One. If your application odds look good (any income
            and a bank account), Discover&apos;s cashback structure is meaningfully better. Both
            are legitimate cards from major US issuers.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Monitor your credit for free</h2>
          <p>
            <strong>Credit Karma</strong> is the standard tool for tracking your score over time.
            It&apos;s free, pulls Equifax and TransUnion VantageScores weekly, and shows you the
            same five factors above with an explanation of how each is moving. The trade-off is
            that Credit Karma makes money by recommending products to you — ignore the
            recommendations, use the tracking.
          </p>
          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Sign up for Credit Karma →
            </AffiliateButton>
          </p>
          <p>
            For your actual FICO score (the one lenders pull), Discover&apos;s Credit Scorecard
            and many credit card issuers&apos; mobile apps show your FICO 8 score for free, even
            for non-customers. Pull it once before any major application.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>Fast-track strategies — how to compress 18 months into 9</h2>

          <h3>1. Pay your statement balance down before the statement closes</h3>
          <p>
            The balance reported to bureaus is your <em>statement</em> balance, not your monthly
            spend. If your $200 credit limit shows a $190 balance on statement close, your
            utilization reports as 95% — terrible. Pay the card down to ~$15 the day before
            statement close, and your utilization reports as 7.5% — excellent. Then pay the
            remaining $15 by the due date for autopay&apos;s on-time history. This single trick
            moves utilization-sensitive credit scores by 20–40 points.
          </p>

          <h3>2. Become an authorized user on a long-aged account</h3>
          <p>
            Already covered above — but worth re-emphasizing. The fastest way to age a credit
            file is to inherit someone else&apos;s history. If a parent will do this for you, do
            it on day one, not month six.
          </p>

          <h3>3. Add rent reporting</h3>
          <p>
            Services like Experian Boost (free) and RentTrack ($6.95/month) report your rent and
            utility payments to bureaus. Effect is modest (5–15 points) but it&apos;s easy and
            costs nothing through Experian.
          </p>

          <h3>4. Dispute errors</h3>
          <p>
            CFPB data shows that roughly 1 in 5 consumers find an error on their credit report. Pull
            your reports at annualcreditreport.com, look for accounts that aren&apos;t yours,
            balances that are wrong, or late payments you didn&apos;t actually make. Dispute
            directly with each bureau online — the bureau has 30 days to investigate under the
            Fair Credit Reporting Act. Successful disputes can produce instant 20+ point gains.
          </p>

          <h3>5. Request a credit limit increase after 6 months</h3>
          <p>
            Most issuers (Capital One especially) will grant a credit limit increase to a
            6-month-old account in good standing on request. A higher limit with the same balance
            mechanically lowers your utilization. Capital One typically performs a soft pull for
            CLI requests; Discover sometimes does a hard pull, so ask first.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>The 18-month timeline</h2>
          <ul>
            <li><strong>Month 0:</strong> Pull all three credit reports at annualcreditreport.com. Apply for a secured card (Capital One or Discover). Sign up for Credit Karma. Ask family about becoming an authorized user.</li>
            <li><strong>Month 1–5:</strong> Use the card for one small recurring charge. Autopay full statement. Pay down before statement close to keep utilization under 10%.</li>
            <li><strong>Month 6:</strong> Your first FICO score appears. Typical starting range: 650–700, depending on whether you added an authorized-user account. Request a credit limit increase.</li>
            <li><strong>Month 7–11:</strong> Issuer auto-reviews your secured card; deposit may be refunded and card upgraded to unsecured. Consider applying for one unsecured starter rewards card if your score is above 680.</li>
            <li><strong>Month 12:</strong> Score typically in the 700–720 range with consistent behavior. You now qualify for most no-annual-fee rewards cards.</li>
            <li><strong>Month 18+:</strong> 720–760 range. You qualify for premium travel cards, the lowest auto loan rates, and competitive mortgage pre-approvals.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>What to never do</h2>
          <ul>
            <li><strong>Never miss a payment.</strong> A single 30-day late payment can drop a new score by 60–110 points and stays on your report for 7 years.</li>
            <li><strong>Never close your oldest card.</strong> Average account age is part of your score. If a card has no annual fee, keep it open forever even if you never use it.</li>
            <li><strong>Never apply for multiple cards in the same month.</strong> Two hard inquiries in 30 days flags as high-risk behavior. Space applications at least 90 days apart.</li>
            <li><strong>Never carry a balance to &quot;build credit.&quot;</strong> This is the most common myth. Paying interest does nothing for your score; on-time payments do everything. Pay in full, every month.</li>
            <li><strong>Never pay for credit repair services.</strong> Everything they do, you can do yourself for free. The CFPB has fined several large credit-repair firms for deceptive practices.</li>
            <li><strong>Never co-sign for someone else.</strong> Their late payments become your late payments. If you must support a family member, gift the money instead.</li>
          </ul>

          <hr className="my-10 border-brand-100" />
          <h2>What good credit unlocks</h2>
          <p>
            Once your FICO crosses 720, you unlock:
          </p>
          <ul>
            <li>The lowest mortgage rates (typically 0.5–1.5 percentage points lower than fair-credit borrowers).</li>
            <li>Premium rewards credit cards with sign-up bonuses worth $500–$1,000.</li>
            <li>Lower auto insurance premiums in most states (CFPB confirms credit-based insurance scoring is legal in 47 states).</li>
            <li>Apartment approvals without large security deposits.</li>
            <li>Better cell phone plans and utility setups without deposits.</li>
          </ul>
          <p>
            Once you&apos;re building toward those, you&apos;ll also want to think about taxes —
            our <Link href="/tools/tax-bracket">tax bracket calculator</Link> shows what
            you&apos;re actually paying on your next dollar of income, which matters when you
            start optimizing across credit and tax decisions.
          </p>

          <hr className="my-10 border-brand-100" />
          <h2>The bottom line</h2>
          <p>
            Open a secured card today. Use it for one small recurring charge. Set autopay. Pay
            down before statement close. Add yourself as an authorized user on a parent&apos;s
            account if possible. Track with Credit Karma. Don&apos;t miss a payment. In 18 months
            you&apos;ll be in the 700s, and the financial system will start treating you
            differently.
          </p>
          <ul>
            <li><strong>Easiest approval:</strong> <AffiliateButton partner="capital-one" source={slug} variant="secondary">Capital One Platinum Secured</AffiliateButton></li>
            <li><strong>Best rewards:</strong> <AffiliateButton partner="discover-it" source={slug} variant="secondary">Discover it Secured</AffiliateButton></li>
            <li><strong>Free credit monitoring:</strong> <AffiliateButton partner="credit-karma" source={slug} variant="secondary">Credit Karma</AffiliateButton></li>
          </ul>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/tools/tax-bracket">Tax bracket calculator</Link> — pair good credit with smart tax planning.</li>
            <li><Link href="/learn/how-to-budget-50-30-20">How to budget using the 50/30/20 rule</Link> — pay off the card from the &quot;needs&quot; bucket, not the &quot;wants&quot; bucket.</li>
            <li><Link href="/learn/best-hysa-2026">Best high-yield savings accounts 2026</Link> — pair good credit habits with an emergency fund.</li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
