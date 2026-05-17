// /go/[partner]?s=<source>
//
// Single-purpose redirect layer:
//   1. Validate the partner key against the typed PARTNERS registry.
//   2. Resolve the real tracked URL from the configured env var.
//   3. Log the click (PostHog / data warehouse / your DB) — server-side, so
//      attribution survives third-party-cookie blocking.
//   4. 302 to the tracked URL.
//
// Why this matters: the real affiliate URL never appears in the rendered HTML,
// so ad-blockers and link-rewriters can't strip the tracking. Affiliate
// programs change URLs frequently — only the env var moves, never the article.

import { NextRequest, NextResponse } from "next/server";
import { getPartnerUrl } from "@/lib/affiliates";
import { logAffiliateClick } from "@/lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface RouteContext {
  params: Promise<{ partner: string }>;
}

export async function GET(req: NextRequest, ctx: RouteContext) {
  const { partner } = await ctx.params;
  const url = getPartnerUrl(partner);

  if (!url) {
    // Unknown partner or env var not configured — fail safe to the homepage.
    return NextResponse.redirect(new URL("/", req.url), { status: 302 });
  }

  const source = req.nextUrl.searchParams.get("s");

  // Fire-and-forget the click event so we don't block the redirect.
  void logAffiliateClick({
    partner,
    url,
    source,
    ts: new Date().toISOString(),
    ua: req.headers.get("user-agent"),
    ip: req.headers.get("x-forwarded-for"),
  });

  const target = new URL(url);
  // Pass source as a query string the partner can echo back in postback,
  // if your network supports sub-id attribution.
  if (source) target.searchParams.set("subid", source);

  return NextResponse.redirect(target, { status: 302 });
}
