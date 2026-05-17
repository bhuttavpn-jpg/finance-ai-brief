import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-brand-200 bg-white">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-sm font-semibold text-white">
            {siteConfig.shortName}
          </span>
          <span className="text-base font-medium text-brand-700">{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/tools" className="text-ink no-underline hover:text-brand-700">Tools</Link>
          <Link href="/learn" className="text-ink no-underline hover:text-brand-700">Learn</Link>
          <Link href="/about" className="text-ink no-underline hover:text-brand-700">About</Link>
        </nav>
      </div>
    </header>
  );
}
