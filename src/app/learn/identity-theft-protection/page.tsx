import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { RelatedByPillar } from "@/components/content/RelatedByPillar";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "identity-theft-protection";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Identity theft protection: The free steps that matter most";
const description =
  "The most effective identity-theft defense is free: credit freezes at all three bureaus, multi-factor authentication, a password manager, and an IRS Identity Protection PIN. Paid monitoring services add a smaller layer on top — here's how to think about each.";
const PUBLISHED = "2026-06-02";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "What's the single most effective free step?",
    a: "A credit freeze at all three bureaus (Equifax, Experian, TransUnion). Once frozen, no lender can pull your credit to open a new account — even if a thief has your SSN, name, and DOB. It's free to freeze, free to unfreeze (temporary or permanent), and takes about 15 minutes total.",
  },
  {
    q: "Is a credit freeze different from a fraud alert?",
    a: "Yes. A freeze BLOCKS lenders from pulling your credit (most effective). A fraud alert just adds a note asking lenders to verify identity before opening accounts — they're not required to honor it. Freezes are stronger. You can have both.",
  },
  {
    q: "Do I need a paid identity-theft service?",
    a: "Probably not for most people. The free steps (freezes, MFA, password manager, IRS IP-PIN) cover 80–90% of the realistic threat. Paid services like LifeLock, Aura, or IdentityForce add credit-and-dark-web monitoring + an insurance/restoration component. Useful if you've already been breached, you want the insurance, or you don't trust yourself to monitor on your own.",
  },
  {
    q: "What's the IRS Identity Protection PIN?",
    a: "A 6-digit code the IRS generates that you must include on your tax return for it to be accepted. Without your IP-PIN, a thief can't successfully e-file a fraudulent return in your name. Free, voluntary, takes 10 minutes to enroll at IRS.gov. One of the highest-leverage free steps in the whole identity-protection stack.",
  },
  {
    q: "What if I'm already a victim?",
    a: "Three immediate steps: (1) report at IdentityTheft.gov — the FTC's official one-stop site that generates a recovery plan. (2) File a police report. (3) Place fraud alerts and freezes at all three bureaus. The IdentityTheft.gov report is free, IRS-recognized, and serves as the standard documentation for disputing fraudulent accounts.",
  },
  {
    q: "What about my Social Security number — should I memorize the last four?",
    a: "Yes — and never store the full SSN in your phone notes, email, or password manager unless absolutely necessary. The full SSN is the highest-value identifier in the US system. Treat it like a master password: rarely needed, never shared loosely, never sent over unsecured channels.",
  },
];

const HOWTO_STEPS = [
  { name: "Freeze your credit at all three bureaus", text: "Equifax.com, Experian.com, TransUnion.com — each lets you create an account and freeze in about 5 minutes. Save the PINs/passwords in your password manager." },
  { name: "Enroll in the IRS Identity Protection PIN", text: "Go to IRS.gov/IPPIN and verify your identity. Annual renewal. Without your IP-PIN, fraudulent tax returns in your name will be rejected." },
  { name: "Set up a password manager", text: "1Password, Bitwarden, or built-in iCloud/Google Passwords. Use unique 16+ character passwords for every site. Never reuse passwords for financial or email accounts." },
  { name: "Enable multi-factor authentication everywhere", text: "Use authenticator app (Authy, Google Authenticator) or hardware key (YubiKey). Avoid SMS-based MFA where the site offers an app option — SIM-swap attacks bypass SMS." },
  { name: "Lock down your phone number", text: "Add a port-out PIN with your mobile carrier so SIM-swap attacks fail. Verizon, AT&T, T-Mobile all support port-out PINs in account settings." },
  { name: "Review your free annual credit reports", text: "AnnualCreditReport.com is the official free source — one report per bureau per year. Look for any account you didn't open." },
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Protect" })} />
      <JsonLd data={howToJsonLd({ name: title, steps: HOWTO_STEPS })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Most paid identity-theft services market features you already get for free. Here's what actually moves the needle — and the small set of cases where paid monitoring earns its keep."
          pillar="Protect"
          publishedAt={PUBLISHED}
          updatedAt={PUBLISHED}
          author="Jahanzeb Nawaz"
          reviewer="the FinBrief Editorial Team"
          readingTime="11 min read"
        />

        <AffiliateDisclosure className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            <strong>The most effective identity-theft defense is free.</strong> A credit freeze at
            all three bureaus blocks the single most damaging attack vector — fraudulent new
            credit accounts in your name — for $0 and about 15 minutes of work. Add the IRS IP-PIN,
            multi-factor auth on financial accounts, and a password manager, and you've covered
            80–90% of the realistic threat.
          </p>

          <p>
            Paid identity-theft services add a smaller layer on top. They're worth it for some
            people, overkill for others. Here's how to think about each.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The free stack — do all six</h2>

          <ol>
            <li><strong>Freeze credit at all three bureaus</strong></li>
            <li><strong>Enroll in the IRS Identity Protection PIN</strong></li>
            <li><strong>Set up a password manager</strong></li>
            <li><strong>Enable MFA on every financial + email account</strong></li>
            <li><strong>Add a SIM-swap port-out PIN with your phone carrier</strong></li>
            <li><strong>Review free annual credit reports</strong></li>
          </ol>

          <p>
            Each is detailed below. Together they take ~2 hours to set up the first time, and
            ~15 minutes/year of ongoing maintenance.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>1. Credit freeze (the single biggest win)</h2>

          <p>
            <strong>A credit freeze locks your credit report so no new lender can pull it.</strong>{" "}
            Without a credit pull, no credit card, loan, mortgage, auto financing, or store credit
            can be opened in your name. Even if a thief has your full name, DOB, SSN, and address,
            they can't open new accounts.
          </p>

          <h3>How to freeze (free, ~5 min per bureau)</h3>

          <ul>
            <li><strong>Equifax:</strong> equifax.com/personal/credit-report-services/credit-freeze/</li>
            <li><strong>Experian:</strong> experian.com/freeze</li>
            <li><strong>TransUnion:</strong> transunion.com/credit-freeze</li>
            <li><strong>Also worth freezing:</strong> Innovis (innovis.com), ChexSystems (chexsystems.com, blocks new bank accounts), NCTUE (nctue.com, blocks new mobile/utility accounts).</li>
          </ul>

          <h3>When you need to open new credit</h3>

          <p>
            Each bureau lets you temporarily lift the freeze online — usually instant or up to 24
            hours. When applying for a new credit card or mortgage, just unfreeze the bureau the
            lender uses (or all three if you don't know), apply, then re-freeze. Zero cost, no
            permanent reduction in protection.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2. IRS Identity Protection PIN (IP-PIN)</h2>

          <p>
            <strong>A 6-digit code the IRS requires on your tax return for it to be accepted.</strong>{" "}
            Without your IP-PIN, the IRS rejects any return filed under your SSN. Effectively
            eliminates tax-refund fraud — one of the most common identity-theft monetization paths.
          </p>

          <ul>
            <li>Enroll at <strong>irs.gov/ippin</strong> with ID.me verification.</li>
            <li>The IRS issues a new IP-PIN each January; you use it on that year's return.</li>
            <li>If you lose your IP-PIN, you can retrieve it online or request a reissue.</li>
            <li>One-time setup, lifetime benefit. Roughly 10 minutes.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>3. Password manager</h2>

          <p>
            The single biggest source of account compromise is password reuse — a breach at one
            site exposes credentials that work at others.
          </p>

          <ul>
            <li><strong>Free options:</strong> Bitwarden (free tier), iCloud Keychain (Mac/iOS), Google Password Manager (Chrome). All sufficient for personal use.</li>
            <li><strong>Paid:</strong> 1Password ($36/year), Dashlane (~$60/year). Worth it for the family-sharing features.</li>
            <li><strong>Rule:</strong> Every site gets a unique 16+ character password the manager generates. You don't memorize them — you memorize one strong master password.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>4. Multi-factor authentication (MFA)</h2>

          <p>
            <strong>Enable MFA on every account that touches your money or your identity.</strong>{" "}
            Email, every bank, every brokerage, every credit card login, your password manager
            itself, your Apple/Google ID.
          </p>

          <h3>Which kind of MFA</h3>

          <ul>
            <li><strong>Best:</strong> Hardware security key (YubiKey, ~$30–$50). Phishing-resistant. Use as primary on your most critical accounts (primary email, password manager, primary bank).</li>
            <li><strong>Strong:</strong> Authenticator app (Authy, Google Authenticator, Microsoft Authenticator). Phishing-vulnerable but immune to SIM swaps.</li>
            <li><strong>OK:</strong> SMS MFA. Better than nothing but vulnerable to SIM-swap attacks. Use only when no app option is offered.</li>
            <li><strong>Avoid as PRIMARY:</strong> security questions ("mother's maiden name") — easily defeated by social media research.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>5. SIM-swap port-out PIN</h2>

          <p>
            <strong>A SIM swap is when an attacker tricks your mobile carrier into transferring
            your phone number to their SIM card.</strong> Once they control your number, they can
            receive SMS MFA codes and break into accounts.
          </p>

          <p>
            All major US carriers let you add a "port-out PIN" (called Number Transfer PIN at
            T-Mobile, NumberShield at AT&T, Account PIN at Verizon). With one set, the carrier
            won't transfer your number without it — defeating the SIM-swap path.
          </p>

          <ul>
            <li><strong>Verizon:</strong> Account settings → Number Lock / Account PIN</li>
            <li><strong>AT&T:</strong> Account settings → NumberShield</li>
            <li><strong>T-Mobile:</strong> Profile → Privacy and Notifications → Number Transfer PIN</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>6. Annual credit report review</h2>

          <p>
            <strong>AnnualCreditReport.com is the only federally-authorized source for free credit
            reports</strong> from Equifax, Experian, and TransUnion. One per bureau per year (or
            now weekly under post-pandemic rules). Look for:
          </p>

          <ul>
            <li>Any account you didn't open</li>
            <li>Hard inquiries you don't recognize</li>
            <li>Addresses or employers you've never had</li>
            <li>Personal info changes you didn't make</li>
          </ul>

          <p>
            For ongoing monitoring without paying a service, <Link href="/learn/how-to-check-credit-score-for-free">Credit Karma</Link>{" "}
            offers free credit-score and credit-report monitoring (TransUnion + Equifax) with
            alerts when new accounts appear.
          </p>

          <p>
            <AffiliateButton partner="credit-karma" source={slug}>
              Free credit monitoring at Credit Karma →
            </AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The paid services — what they actually add</h2>

          <p>
            Paid identity-protection services (LifeLock by Norton, Aura, IdentityForce, Allstate
            Identity Protection) typically run <strong>$10–$30/month</strong> and bundle some mix
            of:
          </p>

          <ul>
            <li>Credit monitoring across all 3 bureaus with real-time alerts</li>
            <li>Dark-web monitoring (alerts when your SSN/email/passwords appear in known data dumps)</li>
            <li>Identity-theft insurance ($1M typical reimbursement cap for direct losses + recovery costs)</li>
            <li>Recovery specialists who help you unwind fraud — paperwork, calls to creditors, freeze coordination</li>
            <li>Address/court-records/social-media monitoring</li>
          </ul>

          <h3>When paid is worth it</h3>

          <ul>
            <li><strong>You've already been breached.</strong> Recovery support is real value when you're untangling existing fraud.</li>
            <li><strong>You want the insurance.</strong> $1M coverage for direct losses + restoration costs (especially attorney/CPA fees) is a real protection layer.</li>
            <li><strong>You don't trust yourself to monitor regularly.</strong> The "set it and forget it" appeal matters for some people.</li>
            <li><strong>High public profile or wealth.</strong> If you're a high-value target, the layered defense and recovery support is justified.</li>
          </ul>

          <h3>When you can skip it</h3>

          <ul>
            <li>You've done all six free steps above.</li>
            <li>You have a homeowner's or renters insurance policy with an identity-theft endorsement (often $25–$50/year add-on, much cheaper than standalone).</li>
            <li>Some premium credit cards (Chase Sapphire, Amex Platinum) bundle identity monitoring as a perk.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>If you become a victim — the 24-hour playbook</h2>

          <ol>
            <li><strong>Go to IdentityTheft.gov</strong> (FTC's official site). Generate a recovery plan and Identity Theft Report — your standard documentation for creditor disputes.</li>
            <li><strong>Place a fraud alert + freeze</strong> at all three bureaus immediately.</li>
            <li><strong>Contact the affected institutions.</strong> Each fraudulent account: dispute it, close it, request written confirmation.</li>
            <li><strong>File a police report</strong> at your local precinct. Required by some creditors for dispute documentation.</li>
            <li><strong>Change passwords</strong> at every financial site, starting with your primary email (the recovery vector for everything else).</li>
            <li><strong>Add the IRS IP-PIN</strong> if you haven't already — file Form 14039 to flag your account.</li>
            <li><strong>Document everything.</strong> Keep a log of calls, dates, names, confirmation numbers. Recovery often takes 6–18 months for serious cases.</li>
          </ol>

          <hr className="my-10 border-brand-100" />

          <h2>One thing most people get wrong</h2>

          <p>
            <strong>Paying for "dark web monitoring" doesn't prevent identity theft.</strong> It
            tells you AFTER your data has already leaked. Useful as one signal, but the prevention
            value of a credit freeze is orders of magnitude higher — and free.
          </p>

          <p>
            Spend the $0 effectively before spending the $20/month.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            Do all six free steps. The credit freeze alone defeats the most damaging attack vector
            — fraudulent new accounts in your name. The IRS IP-PIN defeats tax-refund fraud. The
            password manager + MFA defeats account takeover. The phone-carrier PIN defeats SIM
            swaps. Annual credit-report review catches anything that slips through.
          </p>

          <p>
            <strong>Paid services are a nice-to-have layer on top, not a substitute for the
            basics.</strong> If you want the insurance and recovery support, they're worth
            considering. If you're trying to maximize protection per dollar spent, $0 is hard to
            beat.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-to-check-credit-score-for-free">How to check your credit score for free</Link></li>
            <li><Link href="/learn/what-affects-your-credit-score">What affects your credit score</Link></li>
            <li><Link href="/learn/credit-utilization-ratio">Credit utilization ratio</Link></li>
            <li><Link href="/learn/renters-vs-homeowners-insurance">Renters vs. homeowners insurance</Link></li>
            <li><Link href="/learn/how-to-build-credit-from-scratch">How to build credit from scratch</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      <RelatedByPillar pillar="Protect" currentSlug="identity-theft-protection" />
      </article>
    </>
  );
}
