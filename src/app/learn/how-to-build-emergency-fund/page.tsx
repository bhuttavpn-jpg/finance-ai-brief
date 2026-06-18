import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "how-to-build-emergency-fund";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "How to build an emergency fund (step by step)";
const description =
  "How much to save for emergencies, where to keep it, and a step-by-step plan to build your fund from scratch — even on a tight budget. Plain-language guidance with a high-yield savings strategy.";
const PUBLISHED = "2026-05-21";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "How much should I have in an emergency fund?",
    a: "The standard target is three to six months of essential expenses — not income. Count only the necessities you'd still pay if you lost your job: rent or mortgage, utilities, food, insurance, minimum debt payments, and transportation. If your income is variable or you're a single earner, lean toward six months or more; a dual-income household with stable jobs can lean toward three.",
  },
  {
    q: "Where should I keep my emergency fund?",
    a: "In a high-yield savings account (HYSA), separate from your checking account. You want it safe, FDIC-insured, and accessible within a day or two — but not so accessible that you spend it. Don't invest your emergency fund in stocks; the whole point is that the money is there in full when you need it, regardless of what the market is doing.",
  },
  {
    q: "Should I build an emergency fund or pay off debt first?",
    a: "Do a little of both. Build a small starter fund of about $1,000 first so a surprise expense doesn't push you deeper into debt. Then focus on high-interest debt (anything above ~8–10%, like credit cards) while keeping that starter cushion. Once the high-interest debt is gone, build the fund up to the full three-to-six-month target.",
  },
  {
    q: "How long does it take to build an emergency fund?",
    a: "It depends on your target and how much you can set aside. Saving $400 a month toward a $7,200 goal (six months at $1,200/month of expenses) takes about 18 months. Automating the transfer and starting with a small starter fund makes the timeline far more achievable — progress matters more than speed.",
  },
  {
    q: "What counts as a real emergency?",
    a: "A genuine emergency is urgent, necessary, and unexpected — a job loss, a medical bill, an essential car or home repair. A vacation, a holiday gift budget, or an expected annual expense isn't an emergency; those should be planned for in your regular budget or a separate sinking fund. Keeping that line clear is what keeps the fund intact for when you truly need it.",
  },
  {
    q: "Should I keep my emergency fund in the same bank as my checking?",
    a: "Usually no. Keeping it at a separate bank — ideally an online HYSA — adds a small amount of friction that stops impulse spending, and it often earns a much higher interest rate than a big-bank savings account. The one-to-two-day transfer time is a feature, not a bug, for true emergencies.",
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
          name: "How to build an emergency fund",
          steps: [
            { name: "Calculate your target", text: "Add up your essential monthly expenses and multiply by three to six months to set your full goal." },
            { name: "Save a $1,000 starter fund", text: "Build a small starter cushion first so a surprise expense doesn't push you into debt." },
            { name: "Open a separate high-yield savings account", text: "Keep the fund in an FDIC-insured HYSA, separate from checking, so it earns interest and isn't easy to spend." },
            { name: "Automate a monthly transfer", text: "Set up an automatic transfer the day after payday so the fund grows without willpower." },
            { name: "Build to the full target, then stop", text: "Once you hit three to six months, redirect that monthly amount to investing." },
          ],
        })}
      />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="How much to save, where to keep it, and a five-step plan to build your fund from zero — even on a tight budget."
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
            <strong>An emergency fund is three to six months of essential expenses, kept in a
            high-yield savings account.</strong> It&apos;s the financial cushion that turns a crisis
            into an inconvenience.
          </p>

          <p>
            <strong>It&apos;s the foundation of every financial plan.</strong> Without one, a single
            surprise — a job loss, a medical bill, a car repair — pushes you onto high-interest
            credit cards and undoes months of progress. With one, the same event is a non-event.
          </p>

          <p>
            This guide covers exactly how much to save, where to keep it, and a step-by-step plan to
            get there from zero — even when money is tight. The numbers are illustrative; your
            target depends on your own expenses.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How much do you actually need?</h2>
          <p>
            The answer comes down to a few specific questions, not a single universal number.
          </p>

          <p>
            <strong>Three months or six?</strong> The right target depends on how stable and
            replaceable your income is. The riskier your situation, the bigger the cushion you want.
          </p>

          <p>
            <strong>What expenses do I count?</strong> Only essentials — the bills you&apos;d still
            have to pay if your income stopped. Skip the discretionary spending; this is a survival
            number, not a lifestyle number.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Your situation</th>
                  <th className="py-3 pr-4">Suggested target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">Dual income, stable jobs</td>
                  <td className="py-3 pr-4">3 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Single income, stable job</td>
                  <td className="py-3 pr-4">4–6 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Variable / freelance income</td>
                  <td className="py-3 pr-4">6–9 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Sole earner with dependents</td>
                  <td className="py-3 pr-4">6+ months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>A quick example.</strong> If your essential expenses are <strong>$3,000 a
            month</strong>, a three-month fund is <strong>$9,000</strong> and a six-month fund is{" "}
            <strong>$18,000</strong>. Use our{" "}
            <Link href="/tools/budget-50-30-20">50/30/20 budget calculator</Link> to pin down your
            essentials (the &quot;needs&quot; bucket) if you&apos;re not sure.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Where to keep it</h2>
          <p>
            The right home for an emergency fund balances three things: safety, access, and a little
            bit of growth. A <strong>high-yield savings account (HYSA)</strong> hits all three.
          </p>

          <ul>
            <li><strong>Safe.</strong> Choose an FDIC-insured account so your principal is protected up to $250,000. Never put your emergency fund in stocks.</li>
            <li><strong>Accessible — but not too accessible.</strong> A one-to-two-day transfer to checking is fast enough for real emergencies and slow enough to stop impulse spending.</li>
            <li><strong>Earning interest.</strong> Online HYSAs often pay many times the rate of a big-bank savings account, so your cushion keeps pace with inflation while it sits.</li>
          </ul>

          <p>
            <strong>Why not checking?</strong> Money in your everyday account tends to get spent.
            Keeping the fund at a separate online bank adds just enough friction to protect it.
          </p>

          <p>
            For current rates and our picks, see{" "}
            <Link href="/learn/best-hysa-2026">the best high-yield savings accounts for 2026</Link>.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The five-step plan</h2>
          <p>
            Building the fund is less about willpower and more about setting up a system that runs on
            autopilot. Here&apos;s the order that works.
          </p>

          <ul>
            <li><strong>1. Calculate your target.</strong> Add up essential monthly expenses and multiply by your chosen number of months.</li>
            <li><strong>2. Save a $1,000 starter fund.</strong> Get a small cushion in place fast so the next surprise doesn&apos;t go on a credit card.</li>
            <li><strong>3. Open a separate HYSA.</strong> Keep the fund out of sight of your checking account and earning interest.</li>
            <li><strong>4. Automate a monthly transfer.</strong> Schedule it for the day after payday so you save before you can spend.</li>
            <li><strong>5. Build to target, then stop.</strong> Once you hit three to six months, redirect that same monthly amount into investing.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>How to build it faster on a tight budget</h2>
          <p>
            If there&apos;s no obvious room in your budget, the fund still gets built — it just comes
            from a few smaller sources stacked together.
          </p>

          <ul>
            <li><strong>Start tiny.</strong> Even <strong>$25 a week</strong> is $1,300 in a year. The habit matters more than the amount at first.</li>
            <li><strong>Bank the windfalls.</strong> Route tax refunds, bonuses, and cash gifts straight to the fund before they get absorbed into spending.</li>
            <li><strong>Redirect a freed-up payment.</strong> When a debt is paid off or a subscription ends, send that exact amount to savings.</li>
            <li><strong>Use a temporary side income.</strong> A short-term gig aimed solely at the fund can compress a multi-year goal into months.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Emergency fund vs. paying off debt</h2>
          <p>
            This is the most common sticking point, and the answer is to do both in sequence rather
            than choosing one.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Stage</th>
                  <th className="py-3 pr-4">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">1. Starter cushion</td>
                  <td className="py-3 pr-4">Save ~$1,000 first</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">2. High-interest debt</td>
                  <td className="py-3 pr-4">Attack anything above ~8–10% (e.g. credit cards)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">3. Full emergency fund</td>
                  <td className="py-3 pr-4">Build to 3–6 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">4. Invest</td>
                  <td className="py-3 pr-4">Redirect savings to retirement accounts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The logic: a small cushion stops new debt, then you kill the expensive debt, then you
            finish the fund. Low-interest debt (like a mortgage) doesn&apos;t need to come before the
            full fund.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>Next steps</h2>
          <p>
            The single highest-impact move is opening a separate high-yield savings account today and
            automating a transfer into it. The account is free and takes about 10 minutes to open.
          </p>

          <p>
            <AffiliateButton partner="marcus" source={slug}>
              Open a high-yield savings account at Marcus →
            </AffiliateButton>
          </p>

          <p>
            Ally and SoFi are equally strong, with no minimums and competitive rates:
          </p>
          <ul>
            <li><AffiliateButton partner="ally" source={slug} variant="secondary">Open an Ally savings account</AffiliateButton></li>
            <li><AffiliateButton partner="sofi-money" source={slug} variant="secondary">Open a SoFi savings account</AffiliateButton></li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>
          <p>
            <strong>Aim for three to six months of essential expenses in a separate high-yield
            savings account.</strong> Start with a $1,000 cushion, automate a monthly transfer, and
            build steadily from there.
          </p>
          <p>
            Don&apos;t wait until you can save a lot — start with whatever you can and let the system
            do the work. A funded emergency account is what lets every other part of your financial
            plan stay on track when life goes sideways.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/best-hysa-2026">Best high-yield savings accounts 2026</Link> — where to actually keep the fund.</li>
            <li><Link href="/tools/budget-50-30-20">50/30/20 budget calculator</Link> — find your essential expenses and savings room.</li>
            <li><Link href="/learn/how-to-budget-50-30-20">How to budget with the 50/30/20 rule</Link> — the framework that frees up money to save.</li>
            <li><Link href="/learn/how-to-invest-1000-beginners">How to invest $1,000 for beginners</Link> — what to do once the fund is full.</li>
            <li><Link href="/learn/how-to-save-money-fast">How to save money fast — accelerator tactics</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Budget" currentSlug="how-to-build-emergency-fund" />
      </article>
    </>
  );
}
