// Server-side click logger for affiliate redirects.
// Stub today; swap for PostHog / Segment / your own DB when you're ready.

interface ClickEvent {
  partner: string;
  url: string;
  source: string | null;
  ts: string;
  ua: string | null;
  ip: string | null;
}

export async function logAffiliateClick(event: ClickEvent): Promise<void> {
  // In production, fan this out to:
  //   - PostHog `capture` (event = "affiliate_click")
  //   - Your data warehouse (Snowflake / BigQuery) for attribution analysis
  //   - Optional: ping the partner's S2S endpoint if they support it
  // For now we just log to stderr so it appears in Vercel logs.
  console.log(JSON.stringify({ type: "affiliate_click", ...event }));
}
