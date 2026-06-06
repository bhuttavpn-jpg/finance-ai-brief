// GET /api/cron/article-refresh — weekly article-refresh scanner.
//
// Auth: Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}`. We accept
// that header OR a `?secret=...` query param (for manual smoke testing).
//
// Each Tuesday this:
//   1. Picks 6 articles from siteConfig.articles via deterministic
//      ISO-week rotation (~13 weeks to sweep the full catalog).
//   2. Reads each article's .tsx source from disk.
//   3. Calls Claude Haiku per article to flag stale rates/dates/limits.
//   4. Emails the consolidated digest to NEWSLETTER_DRAFT_TO via Resend,
//      if RESEND_API_KEY is set. The email is action-oriented: each finding
//      links straight to the article so the editor can review and patch.
//   5. Returns the report as JSON (and logs it) — manual smoke testing via
//      ?secret=... lets you inspect findings without sending email.
//
// We never write to article files. Humans review and edit. This is a
// diff-proposer, not a diff-applier.

import { NextRequest, NextResponse } from "next/server";
import { generateRefreshReport, type RefreshReport, type Finding } from "@/lib/article-refresh";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// 6 articles × ~5–15s/Haiku call = up to ~90s worst case. Give headroom.
export const maxDuration = 300;

function authorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;
  const qs = req.nextUrl.searchParams.get("secret");
  if (qs && qs === secret) return true;
  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function severityColor(sev: Finding["severity"]): string {
  return sev === "high" ? "#b91c1c" : sev === "medium" ? "#b45309" : "#475569";
}

function reportToHtml(report: RefreshReport): string {
  const sections = report.scans
    .map((scan) => {
      const url = `${siteConfig.url}/learn/${scan.slug}`;
      const header = `
        <h2 style="font-size:17px;color:#1F3A5F;margin:28px 0 4px;">
          <a href="${url}" style="color:#1F3A5F;text-decoration:none;">${escapeHtml(scan.title)}</a>
        </h2>
        <p style="margin:0 0 12px;color:#64748b;font-size:13px;">
          ${escapeHtml(scan.pillar)} · /learn/${escapeHtml(scan.slug)}
        </p>`;

      if (scan.error) {
        return (
          header +
          `<p style="color:#b91c1c;font-size:13px;margin:0 0 8px;">scan error: ${escapeHtml(scan.error)}</p>`
        );
      }

      if (scan.findings.length === 0) {
        return header + `<p style="color:#475569;font-size:13px;margin:0 0 8px;">No staleness flags. ✓</p>`;
      }

      const rows = scan.findings
        .map((f) => {
          const color = severityColor(f.severity);
          return `
            <li style="margin:0 0 12px;padding-left:0;">
              <div style="font-size:12px;color:${color};text-transform:uppercase;letter-spacing:0.04em;font-weight:600;">
                ${escapeHtml(f.severity)} · ${escapeHtml(f.category)}
              </div>
              <div style="margin-top:4px;font-size:14px;color:#1F2D3D;">
                <strong>Issue:</strong> ${escapeHtml(f.issue)}
              </div>
              ${
                f.excerpt
                  ? `<div style="margin-top:4px;font-size:13px;color:#475569;font-style:italic;">
                       "${escapeHtml(f.excerpt)}"
                     </div>`
                  : ""
              }
              <div style="margin-top:4px;font-size:14px;color:#1F2D3D;">
                <strong>Suggestion:</strong> ${escapeHtml(f.suggestion)}
              </div>
            </li>`;
        })
        .join("");

      return header + `<ul style="margin:0;padding-left:18px;list-style:disc;">${rows}</ul>`;
    })
    .join("");

  return `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1F2D3D;max-width:720px;margin:0 auto;padding:24px;line-height:1.55;">
  <p style="color:#64748b;font-size:13px;margin:0 0 16px;">
    Finbrief refresh digest · ISO week ${report.isoWeek} · generated ${report.generatedAt}
  </p>
  <h1 style="font-size:22px;color:#1F3A5F;margin:0 0 8px;">
    ${report.totalFindings} potential staleness ${report.totalFindings === 1 ? "flag" : "flags"} across ${report.articlesScanned} articles
  </h1>
  <p style="color:#475569;font-size:14px;margin:0 0 16px;">
    Skim, then patch the ones that hold up. Haiku flagged candidates — humans decide.
  </p>
  <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;"/>
  ${sections}
  <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0 16px;"/>
  <p style="color:#64748b;font-size:12px;">
    Rotation: 6 articles/week, ~13-week catalog sweep. To change cadence edit ARTICLES_PER_WEEK in src/lib/article-refresh.ts and the cron in vercel.json.
  </p>
</body></html>`;
}

async function emailReport(report: RefreshReport): Promise<
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
      subject: `[Finbrief refresh, wk ${report.isoWeek}] ${report.totalFindings} flags across ${report.articlesScanned} articles`,
      html: reportToHtml(report),
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
    const report = await generateRefreshReport({});
    console.log("[article-refresh] report generated", {
      isoWeek: report.isoWeek,
      articlesScanned: report.articlesScanned,
      totalFindings: report.totalFindings,
      slugs: report.scans.map((s) => s.slug),
    });

    const delivery = await emailReport(report);
    if (delivery.sent) {
      console.log("[article-refresh] emailed digest", { id: delivery.id });
    } else {
      console.warn("[article-refresh] email skipped:", delivery.reason);
    }

    return NextResponse.json({ ok: true, report, delivery });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error.";
    console.error("[article-refresh] generation failed", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
