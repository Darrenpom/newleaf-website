import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Composite Doors Kettering | Newleaf Windows & Doors",
  description:
    "Composite doors in Kettering from Newleaf Windows & Doors. Secure, stylish front doors supplied and installed by a local Northamptonshire team.",
  alternates: {
    canonical: "/composite-doors-kettering",
  },
};

export default function CompositeDoorsKetteringPage() {
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
                Local composite door installers
              </p>
              <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
                Composite doors in Kettering.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl">
                Choose a secure, stylish front door with help from a local team
                you can visit at our showroom near Kettering.
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
                Door options
              </h2>
              <div className="mt-6 space-y-4 text-neutral-200">
                <p>Front doors and back doors</p>
                <p>Colour, glass and hardware choices</p>
                <p>Secure modern door designs</p>
                <p>Installed by local specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
            A better entrance for your home.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>
              A new composite door can improve kerb appeal, everyday security
              and the feel of your entrance, with a wide choice of colours,
              glazing and hardware.
            </p>
            <p>
              Newleaf helps you compare options properly, with practical advice
              from a local team and installation carried out with care.
            </p>
            <p>
              We supply and install composite doors across Kettering,
              Desborough, Rothwell, Burton Latimer and surrounding areas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
