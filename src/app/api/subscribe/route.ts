// POST /api/subscribe — newsletter signup, proxied to beehiiv.
//
// The beehiiv API key never reaches the client; it lives in BEEHIIV_API_KEY
// and is used only here on the server. /api/* is disallowed in robots.txt.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let email: unknown;
  try {
    ({ email } = (await req.json()) as { email?: unknown });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    // Not yet configured — fail clearly rather than silently dropping signups.
    return NextResponse.json(
      { ok: false, error: "Newsletter signup isn't available right now. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "finbrief",
          utm_medium: "organic",
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Couldn't complete signup. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Couldn't reach the newsletter service. Please try again." },
      { status: 502 }
    );
  }
}
