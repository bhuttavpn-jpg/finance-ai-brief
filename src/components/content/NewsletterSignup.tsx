"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterSignup({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (res.ok && data.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox to confirm.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const isCompact = variant === "compact";

  return (
    <div className={isCompact ? "" : "card bg-brand-50"}>
      {!isCompact && (
        <>
          <p className="text-lg font-medium text-brand-700">
            Get the {siteConfig.name} brief
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Plain-language money tips and the occasional rate update. No spam, unsubscribe anytime.
          </p>
        </>
      )}
      {isCompact && (
        <p className="text-sm font-medium text-brand-700">Get the {siteConfig.name} brief</p>
      )}

      {status === "success" ? (
        <p className={`${isCompact ? "mt-2" : "mt-4"} text-sm font-medium text-brand-700`}>
          {message}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`${isCompact ? "mt-2" : "mt-4"} flex flex-col gap-2 sm:flex-row`}
        >
          <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`newsletter-email-${variant}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input sm:flex-1"
            disabled={status === "loading"}
          />
          <button type="submit" className="btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-xs text-red-600" role="alert">
          {message}
        </p>
      )}
    </div>
  );
}
