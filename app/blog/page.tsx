import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Advice and guides on windows, doors and home improvements from Newleaf Windows & Doors.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-yellow-500/20 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg text-yellow-400 transition hover:text-yellow-300"
          >
            Newleaf Windows &amp; Doors
          </Link>

          <Link
            href="/"
            className="text-sm text-neutral-300 transition hover:text-yellow-400"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
          Advice &amp; guides
        </p>

        <h1 className="mt-4 font-serif text-5xl font-medium md:text-7xl">
          The Newleaf Blog
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
          Helpful information to guide you through choosing windows and doors
          for your home.
        </p>

        <article className="mt-12 max-w-3xl rounded-2xl border border-yellow-500/25 bg-white/5 p-7 shadow-2xl md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">
            Windows &amp; doors · 6 minute read
          </p>

          <h2 className="mt-5 font-serif text-3xl font-medium md:text-4xl">
            What is a survey when measuring windows and doors?
          </h2>

          <p className="mt-4 leading-relaxed text-neutral-300">
            Find out what happens during a window and door survey, what gets
            measured, and why checking the details helps your installation go
            smoothly.
          </p>

          <Link
            href="/blog/what-is-a-survey"
            className="mt-7 inline-flex rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
          >
            Read the guide →
          </Link>
        </article>
      </section>
    </main>
  );
}