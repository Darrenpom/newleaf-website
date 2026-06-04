import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Replacement Windows Kettering | Newleaf Windows & Doors",
  description:
    "Replacement windows in Kettering from Newleaf Windows & Doors. Secure, energy-efficient window installations from a local Northamptonshire team.",
  alternates: {
    canonical: "/replacement-windows-kettering",
  },
};

export default function ReplacementWindowsKetteringPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden px-6 py-8 md:py-10">
        <Image src="/hero.png" alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link href="/" className="font-serif text-lg font-medium text-yellow-400 hover:text-yellow-300">
            Back to Home
          </Link>

          <div className="grid min-h-[68vh] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Local replacement window installers
              </p>
              <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
                Replacement windows in Kettering.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl">
                Upgrade your home with carefully fitted replacement windows
                from Newleaf, serving Kettering and the surrounding local area.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:01536601292" className="bg-yellow-500 px-8 py-4 text-center text-lg font-bold text-black transition hover:bg-yellow-400">
                  Call 01536 601292
                </a>
                <Link href="/#get-a-price" className="border-2 border-yellow-500 px-8 py-4 text-center text-lg font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
                  Request a Free Quote
                </Link>
              </div>
            </div>

            <div className="border border-yellow-500/35 bg-black/50 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <h2 className="font-serif text-3xl font-medium text-yellow-400">
                Popular reasons to replace
              </h2>
              <div className="mt-6 space-y-4 text-neutral-200">
                <p>Improve warmth and comfort</p>
                <p>Refresh the look of your home</p>
                <p>Upgrade security and hardware</p>
                <p>Reduce draughts and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
            Straightforward advice before you choose.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>
              Replacement windows are a long-term decision, so we help you
              compare suitable styles, finishes and performance options before
              you commit.
            </p>
            <p>
              Our local showroom gives you a place to see examples in person
              and talk through what will suit your home, budget and plans.
            </p>
            <p>
              Newleaf works across Kettering, Desborough, Wellingborough,
              Corby, Rothwell and nearby Northamptonshire areas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
