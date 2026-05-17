import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-200 bg-brand-50 py-12">
      <div className="container-wide grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-medium text-brand-700">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-ink-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-brand-700">Tools</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {siteConfig.tools.map((t) => (
              <li key={t.slug}>
                <Link href={`/tools/${t.slug}`} className="text-ink-muted no-underline hover:text-brand-700">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-brand-700">Topics</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {siteConfig.pillars.map((p) => (
              <li key={p.slug}>
                <Link href={`/learn?pillar=${p.slug}`} className="text-ink-muted no-underline hover:text-brand-700">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-brand-700">Legal</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li><Link href="/about" className="text-ink-muted no-underline hover:text-brand-700">About & methodology</Link></li>
            <li><Link href="/about#disclosure" className="text-ink-muted no-underline hover:text-brand-700">Affiliate disclosure</Link></li>
            <li><Link href="/about#privacy" className="text-ink-muted no-underline hover:text-brand-700">Privacy</Link></li>
            <li><Link href="/about#terms" className="text-ink-muted no-underline hover:text-brand-700">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-wide mt-10 border-t border-brand-200 pt-6 text-xs text-ink-muted">
        <p>
          {siteConfig.name} is for educational purposes only. We are not a registered investment
          advisor, broker-dealer, tax preparer, or insurance agency. Verify all information with a
          qualified professional before acting on it.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
