import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-prose py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600">404</p>
      <h1 className="mt-2 text-4xl font-medium text-brand-700">Page not found</h1>
      <p className="mt-4 text-ink-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/tools" className="btn-secondary">See the tools</Link>
      </div>
    </div>
  );
}
