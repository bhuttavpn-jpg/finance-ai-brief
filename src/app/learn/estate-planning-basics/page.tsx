import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { AffiliateDisclosure } from "@/components/content/AffiliateDisclosure";
import { AffiliateButton } from "@/components/content/AffiliateButton";
import { FAQ, type QA } from "@/components/content/FAQ";
import { JsonLd, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const slug = "estate-planning-basics";
const url = `${siteConfig.url}/learn/${slug}`;
const title = "Estate planning basics: The 5 documents most adults need";
const description =
  "Estate planning isn't just for the wealthy. The 5 core documents — will, durable POA, healthcare POA, advance directive, and beneficiary designations — protect your family from probate, court-appointed guardianship, and tax surprises. Here's what each one does.";
const PUBLISHED = "2026-06-07";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [`${siteConfig.url}/og/${slug}/16x9`] },
};

const FAQS: QA[] = [
  {
    q: "Do I need a will if I'm young and don't have much?",
    a: "Yes — especially if you have minor children or anyone financially dependent on you. A will lets you name a guardian for kids and direct where your stuff goes; without one, state intestacy law decides, and it's rarely what you'd want. Even single 25-year-olds with $20K in a 401(k) benefit from a basic will and updated beneficiary designations.",
  },
  {
    q: "Do beneficiary designations override my will?",
    a: "Yes, and this surprises people. Retirement accounts (401(k), IRA), life insurance, and POD bank accounts pass via beneficiary designation regardless of what your will says. If you got divorced 10 years ago and never updated your 401(k) beneficiary, your ex-spouse still gets the money. Check designations annually.",
  },
  {
    q: "Do I need a trust?",
    a: "Most middle-class households don't NEED one but may benefit. A revocable living trust avoids probate (faster, more private), and can be useful if you own real estate in multiple states. For high net worth (above the federal estate-tax exemption — $13.99M individual / $27.98M couple in 2025, scheduled to be cut in half in 2026 unless Congress extends), more sophisticated trusts become essential. Talk to an estate attorney.",
  },
  {
    q: "What's the difference between a healthcare POA and an advance directive?",
    a: "A healthcare POA names a person to make medical decisions for you when you can't. An advance directive (sometimes called a living will) spells out your wishes for end-of-life care — ventilator, feeding tube, comfort care. They work together: the POA makes decisions, guided by the advance directive's instructions.",
  },
  {
    q: "How much does an estate plan cost?",
    a: "Online services (LegalZoom, Trust & Will, Rocket Lawyer) run $150–$500 for a basic will + POA + directives package. A local estate attorney typically runs $1,000–$3,000 for a will-based plan, $2,500–$5,000+ for a revocable living trust plan. For complex situations (business ownership, blended families, special-needs heirs, taxable estates), pay for the attorney.",
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
      <JsonLd data={breadcrumbJsonLd({ url, title, pillar: "Protect" })} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <article className="container-prose py-16">
        <ArticleHeader
          title={title}
          subtitle="Five documents protect your family from probate, court-appointed guardianship, and tax surprises. Get them done — the cost is modest and the alternative is chaos."
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
            <strong>If you don't have an estate plan, your state has one for you — and you won't
            like it.</strong> Without basic documents in place, the courts decide who raises your
            children, who manages your money if you're incapacitated, and whether life support
            continues. The cost of fixing this is modest. The cost of not fixing it is enormous.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The 5 documents almost every adult should have</h2>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-brand-200 text-brand-700">
                <tr>
                  <th className="py-3 pr-4">Document</th>
                  <th className="py-3 pr-4">What it does</th>
                  <th className="py-3 pr-4">If you skip it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                <tr><td className="py-3 pr-4 font-semibold">Last will and testament</td><td className="py-3 pr-4">Directs where stuff goes, names guardians for minor children, names an executor</td><td className="py-3 pr-4">State intestacy law decides; court appoints guardian for kids</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Durable financial POA</td><td className="py-3 pr-4">Names someone to manage finances if you're incapacitated</td><td className="py-3 pr-4">Family must petition court for conservatorship — slow, public, expensive</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Healthcare POA</td><td className="py-3 pr-4">Names someone to make medical decisions for you</td><td className="py-3 pr-4">Doctors / state default rules pick; family may be locked out</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Advance directive (living will)</td><td className="py-3 pr-4">Spells out end-of-life wishes (ventilator, feeding tube, etc.)</td><td className="py-3 pr-4">Family guesses or fights about it</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Updated beneficiary designations</td><td className="py-3 pr-4">Routes 401(k), IRA, life insurance, POD accounts</td><td className="py-3 pr-4">Stale designations override your will — ex-spouse may inherit</td></tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-brand-100" />

          <h2>1. Last will and testament</h2>

          <p>
            The will is what most people think of as "estate planning" — and it's important — but
            it's actually only one piece of the puzzle. What it does:
          </p>

          <ul>
            <li><strong>Directs distribution of "probate assets"</strong> — anything in your name alone, not jointly titled, and without a beneficiary designation. Common examples: bank accounts in your name only, vehicles, personal property, taxable brokerage accounts (unless TOD-registered).</li>
            <li><strong>Names a guardian for minor children</strong> — arguably the most important reason for parents to write a will. Without this, family members may contest in court.</li>
            <li><strong>Names an executor</strong> — the person who handles the probate process (collecting assets, paying debts, distributing per the will).</li>
            <li><strong>Can create a testamentary trust</strong> — a trust that springs into existence at your death, useful for managing money for minor children.</li>
          </ul>

          <p>
            <strong>What a will does NOT control:</strong> retirement accounts, life insurance, joint
            accounts, POD/TOD accounts, and assets in a living trust. Those pass outside probate.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>2. Durable financial power of attorney</h2>

          <p>
            This document names someone (your "agent" or "attorney-in-fact") to manage your
            financial affairs if you become incapacitated — paying bills, signing checks, accessing
            bank accounts, filing your tax return, making investment decisions on accounts that
            don't have a beneficiary designation.
          </p>

          <p>
            <strong>"Durable" means it survives incapacity</strong> (a non-durable POA terminates
            when you become incapacitated, which defeats the purpose). Without one, your family has
            to petition a court for conservatorship — a process that takes months, is publicly
            recorded, and costs thousands in legal fees.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>3. Healthcare power of attorney</h2>

          <p>
            Names someone to make medical decisions when you can't — what treatments to pursue,
            which hospital, whether to consent to surgery. Different from the financial POA
            (different agent, different scope; usually a separate document).
          </p>

          <p>
            Hospitals will look for this. In the absence of one, many states default to a hierarchy
            (spouse first, then adult children, etc.), but it's not universal and it doesn't apply
            to unmarried partners. If you're in a long-term unmarried relationship, this document is
            non-optional.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>4. Advance directive / living will</h2>

          <p>
            Documents your specific wishes for end-of-life care:
          </p>

          <ul>
            <li>Do you want a ventilator if there's no realistic chance of recovery?</li>
            <li>Feeding tubes?</li>
            <li>Resuscitation if your heart stops?</li>
            <li>Pain management priorities (some people prefer comfort even if it shortens life; others want every measure)</li>
          </ul>

          <p>
            This document works alongside the healthcare POA: the POA agent makes the call, guided
            by the directive's stated wishes. Without it, families often fight or freeze. Many
            states have a standard form; a few minutes filling it out today saves months of family
            grief later.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>5. Beneficiary designations — the silent override</h2>

          <p>
            This is where most people's estate plans actually break. <strong>Beneficiary
            designations on retirement accounts, life insurance, and POD/TOD accounts override your
            will.</strong> If your 401(k) still names an ex-spouse from 2010, the divorce decree
            doesn't matter — the 401(k) plan pays the ex.
          </p>

          <ul>
            <li><strong>Audit annually.</strong> Pull up each account; verify primary and contingent beneficiaries.</li>
            <li><strong>Always name a contingent beneficiary.</strong> If your primary dies before you (or with you), the account flows to the contingent — otherwise it falls into probate.</li>
            <li><strong>Don't name your estate as beneficiary.</strong> It forces probate and accelerates tax recognition on inherited IRAs.</li>
            <li><strong>Consider per-stirpes designations.</strong> If a beneficiary predeceases you, per-stirpes routes their share to their children. Most beneficiary forms allow this.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Probate — what it actually is, and why people avoid it</h2>

          <p>
            Probate is the court process of validating a will, paying debts, and distributing
            assets. It's not as bad as some online voices make it out to be — most states have
            streamlined probate for smaller estates. But it has real downsides:
          </p>

          <ul>
            <li><strong>Time:</strong> 6–18 months typical, longer in complex estates.</li>
            <li><strong>Cost:</strong> Court fees + executor compensation + attorney fees can run 3–7% of the estate.</li>
            <li><strong>Privacy:</strong> Probate is public record. Anyone can pull your will and asset list.</li>
            <li><strong>Multi-state property:</strong> Real estate in another state triggers a second probate ("ancillary probate") in that state — a key reason to consider a revocable living trust if you own out-of-state real estate.</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>When a revocable living trust makes sense</h2>

          <p>
            A revocable trust holds your assets during your lifetime (you're the trustee — you
            control everything as before), then a successor trustee distributes per your
            instructions at your death, bypassing probate. Good fits:
          </p>

          <ul>
            <li>You own real estate in multiple states.</li>
            <li>Your state has a slow or expensive probate process (California, Florida historically painful).</li>
            <li>You want privacy — trust distributions are not public record.</li>
            <li>You have a blended family with children from a prior marriage — trusts handle this much more cleanly than wills.</li>
            <li>You have a child or beneficiary who needs structured distributions (substance issues, spendthrift, disabilities).</li>
          </ul>

          <hr className="my-10 border-brand-100" />

          <h2>Estate tax — does this apply to you?</h2>

          <p>
            <strong>Federal estate tax exemption is $13.99M per individual / $27.98M per couple in
            2025.</strong> The 2017 Tax Cuts and Jobs Act doubled the exemption, with the increase
            scheduled to <strong>sunset at end of 2025</strong>, returning to ~$7M individual /
            ~$14M couple. Whether Congress extends is uncertain as of the publication date — verify
            current rules before relying on them.
          </p>

          <p>
            <strong>States have their own estate or inheritance taxes</strong> with much lower
            exemptions. Massachusetts: $2M. Oregon: $1M. Washington: $2.193M. New York: $7M-ish.
            Maryland and New Jersey have inheritance taxes that apply at much lower levels. If your
            net worth is above $2M and you live in one of these states, you need estate-planning
            attorney input.
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>How to actually do it</h2>

          <p>
            For most middle-class households without complex situations:
          </p>

          <ol>
            <li><strong>Online service for basic will + POA + directives</strong> (Trust &amp; Will, LegalZoom, Rocket Lawyer, Fabric by Gerber Life). $150–$500. Adequate for simple estates.</li>
            <li><strong>Local estate attorney</strong> if you have any of: blended family, special-needs beneficiary, business interest, taxable estate (state or federal), property in multiple states, anyone you want to disinherit. $1,000–$5,000.</li>
            <li><strong>Update beneficiary designations on EVERY account</strong> — retirement, life insurance, bank PODs, brokerage TODs.</li>
            <li><strong>Store documents where your executor can find them.</strong> A safe deposit box can be tricky (banks may seal at death); a fireproof home safe + a copy with your attorney works better.</li>
            <li><strong>Review every 3–5 years</strong> or after any major life event (marriage, divorce, birth, death, move to a new state, large change in net worth).</li>
          </ol>

          <p>
            If your estate plan includes the right amount of life insurance for dependents:
          </p>

          <p>
            <AffiliateButton partner="policygenius" source={slug}>
              Compare term life at Policygenius →
            </AffiliateButton>{" "}
            <AffiliateButton partner="ethos" source={slug} variant="secondary">Ethos</AffiliateButton>{" "}
            <AffiliateButton partner="haven" source={slug} variant="secondary">Haven Life</AffiliateButton>
          </p>

          <hr className="my-10 border-brand-100" />

          <h2>The bottom line</h2>

          <p>
            Get the 5 documents in place. Audit your beneficiary designations. If your situation is
            simple, an online service is fine; if it's complex, pay for an attorney. The hardest
            part of estate planning is starting — the actual work is usually a few hours.
          </p>

          <h2>Related reading</h2>
          <ul>
            <li><Link href="/learn/how-much-life-insurance-do-i-need">How much life insurance do I need?</Link></li>
            <li><Link href="/learn/best-term-life-insurance-young-professionals">Best term life insurance for young professionals</Link></li>
            <li><Link href="/learn/long-term-care-insurance">Long-term care insurance</Link></li>
            <li><Link href="/learn/ira-rmd-rules">IRA RMD rules</Link></li>
            <li><Link href="/learn/umbrella-insurance-guide">Umbrella insurance guide</Link></li>
          </ul>
        </div>

        <FAQ items={FAQS} />
      </article>
    </>
  );
}
