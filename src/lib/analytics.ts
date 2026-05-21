// Server-side click logger for affiliate redirects.
// Sends an "affiliate_click" custom event to Vercel Web Analytics (already
// enabled for this project) and mirrors the event to stderr for Vercel logs.
// Add destinations (PostHog / warehouse / partner S2S) here as needed.

import { track } from "@vercel/analytics/server";

interface ClickEvent {
  partner: string;
  url: string;
  source: string | null;
  ts: string;
  ua: string | null;
  ip: string | null;
}

export async function logAffiliateClick(event: ClickEvent): Promise<void> {
  // Always log to stderr so the event shows up in Vercel runtime logs.
  console.log(JSON.stringify({ type: "affiliate_click", ...event }));

  // Vercel Web Analytics custom event. Only low-cardinality, non-PII fields
  // are sent as properties — never the user agent or IP.
  try {
    await track("affiliate_click", {
      partner: event.partner,
      source: event.source ?? "none",
    });
  } catch {
    // Never let an analytics failure affect the redirect.
  }
}
