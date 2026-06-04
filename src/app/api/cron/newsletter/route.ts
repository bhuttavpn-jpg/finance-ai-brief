// GET /api/cron/newsletter — weekly newsletter draft generator.
//
// Auth: Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}`. We accept
// that header OR a `?secret=...` query param (for manual smoke testing).
//
// Each Monday this:
//   1. Picks the week's lead article from siteConfig.articles (deterministic
//      rotation by ISO week).
//   2. Calls Claude Haiku to write the ~200-word intro in house voice.
//   3. Emails the draft to NEWSLETTER_DRAFT_TO via Resend, if RESEND_API_KEY
//      is set. The email body is paste-ready: subject line in the subject,
//      intro + lead-story link in the body.
//   4. Returns the draft as JSON (and logs it) — so you can also hit the
//      route manually with ?secret=... and copy from the response.
//
// Beehiiv's public API can't create posts on non-Enterprise tiers, so
// scheduling the actual send stays manual: open beehiiv, paste, click Send.

import { NextRequest, NextResponse } from "next/server";
import { generateNewsletterDraft, type NewsletterDraft } from "@/lib/newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function authorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;
  const qs = req.nextUrl.searchParams.get("secret");
  if (qs && qs === secret) return true;
  return false;
}

function draftToHtml(draft: NewsletterDraft): string {
  const intro = draft.intro
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("\n");
  return `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1F2D3D;max-width:640px;margin:0 auto;padding:24px;line-height:1.55;">
  <p style="color:#64748b;font-size:13px;margin:0 0 16px;">
    Finbrief weekly draft · ISO week ${draft.isoWeek} · generated ${draft.generatedAt}
  </p>
  <h1 style="font-size:22px;color:#1F3A5F;margin:0 0 16px;">Subject: ${escapeHtml(draft.subject)}</h1>
  <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>
  ${intro}
  <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>
  <p>
    <a href="${draft.leadArticle.url}" style="color:#1F3A5F;font-weight:600;">
      Read: ${escapeHtml(draft.leadArticle.title)}
    </a>
  </p>
  <p style="color:#64748b;font-size:13px;margin-top:32px;">
    Paste subject + intro into beehiiv, attach the lead-story block, send.
  </p>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function emailDraft(draft: NewsletterDraft): Promise<
  { sent: true; id?: string } | { sent: false; reason: string }
> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM;
  const to = process.env.NEWSLETTER_DRAFT_TO;
  if (!apiKey) return { sent: false, reason: "RESEND_API_KEY not set" };
  if (!from) return { sent: false, reason: "NEWSLETTER_FROM not set" };
  if (!to) return { sent: false, reason: "NEWSLETTER_DRAFT_TO not set" };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[Finbrief draft, wk ${draft.isoWeek}] ${draft.subject}`,
      html: draftToHtml(draft),
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { sent: false, reason: `Resend ${res.status}: ${text.slice(0, 200)}` };
  }
  const json = (await res.json().catch(() => ({}))) as { id?: string };
  return { sent: true, id: json.id };
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  try {
    const draft = await generateNewsletterDraft({});
    console.log("[newsletter] draft generated", {
      subject: draft.subject,
      slug: draft.leadArticle.slug,
      isoWeek: draft.isoWeek,
    });
    console.log("[newsletter] intro\n" + draft.intro);

    const delivery = await emailDraft(draft);
    if (delivery.sent) {
      console.log("[newsletter] emailed draft", { id: delivery.id });
    } else {
      console.warn("[newsletter] email skipped:", delivery.reason);
    }

    return NextResponse.json({ ok: true, draft, delivery });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error.";
    console.error("[newsletter] generation failed", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
