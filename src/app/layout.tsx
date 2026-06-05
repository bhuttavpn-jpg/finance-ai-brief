import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  verification: {
    // Google Search Console URL-prefix property (https://finbrief.space).
    // Public verification token — safe to commit. Don't remove after verifying.
    google: "O4v6KR8AAC0U9Tpf3ctYx-uzFvO73VvX19EL99KErB8",
    // FlexOffers publisher application — verify-ownership meta. Public token.
    other: {
      "fo-verify": "83143839-f2d5-43c3-b39a-1e7cec99ce20",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
