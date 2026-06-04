import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Windows and Doors Leicester | Newleaf Windows & Doors",
  description:
    "Windows and doors in Leicester from Newleaf Windows & Doors. Replacement windows, doors and glazing advice from a trusted local team.",
  alternates: {
    canonical: "/windows-and-doors-leicester",
  },
};

export default function WindowsAndDoorsLeicesterPage() {
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
                Covering Leicester and nearby areas
              </p>
              <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
                Windows and doors in Leicester.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl">
                Newleaf supplies and installs secure, stylish windows and doors
                for homeowners in Leicester and surrounding areas.
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
                Talk to Newleaf
              </h2>
              <div className="mt-6 space-y-4 text-neutral-200">
                <p>Clear advice before you commit</p>
                <p>Quality windows and doors</p>
                <p>Free no-obligation quotes</p>
                <p>Friendly local service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
