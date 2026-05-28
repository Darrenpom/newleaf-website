import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Windows and Doors in Northamptonshire",
  description:
    "Newleaf supplies and installs secure, energy-efficient windows and doors across Northamptonshire, including Northampton, Kettering, Wellingborough, Corby, Daventry, Towcester and nearby villages.",
  alternates: {
    canonical: "/windows-and-doors-northamptonshire",
  },
  openGraph: {
    title: "Windows and Doors in Northamptonshire | Newleaf",
    description:
      "Visit our local showroom near Kettering for windows and doors installed across Northamptonshire.",
    images: ["/hero.png"],
  },
};

const serviceAreas = [
  "Northampton",
  "Kettering",
  "Desborough",
  "Wellingborough",
  "Corby",
  "Daventry",
  "Towcester",
  "Rothwell",
  "Market Harborough",
  "surrounding Northamptonshire villages",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Newleaf Windows & Doors",
  image: "/logo.png",
  telephone: "01536 601292",
  email: "info@newleafwindows.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Pipewell Industrial Estate",
    addressLocality: "Kettering",
    postalCode: "NN14 2SW",
    addressCountry: "GB",
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  openingHours: [
    "Mo-Th 09:00-17:00",
    "Fr 09:00-16:00",
    "Sa 09:00-13:00",
  ],
  priceRange: "$$",
};

export default function NorthamptonshireWindowsAndDoorsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="relative overflow-hidden px-6 py-8 md:py-10">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-neutral-950" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-wide text-yellow-400 hover:text-yellow-300"
          >
            Back to Home
          </Link>

          <div className="grid min-h-[70vh] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Northamptonshire window and door installers
              </p>

              <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
                Windows and doors across Northamptonshire.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl">
                Newleaf helps homeowners upgrade their homes with secure,
                energy-efficient windows and doors, supplied and installed by a
                local team you can visit at our showroom near Kettering.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:01536601292"
                  className="bg-yellow-500 px-8 py-4 text-center text-lg font-bold text-black transition hover:bg-yellow-400"
                >
                  Call 01536 601292
                </a>

                <a
                  href="mailto:info@newleafwindows.com"
                  className="border-2 border-yellow-500 px-8 py-4 text-center text-lg font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="border border-yellow-500/35 bg-black/45 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <h2 className="font-serif text-3xl font-medium text-yellow-400">
                Local service areas
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 text-neutral-200">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
              Windows and doors Northamptonshire
            </p>

            <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
              Practical advice, careful installation and products chosen for
              your home.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>
              From replacement windows and front doors to patio, French and
              sliding doors, Newleaf works with homeowners across
              Northamptonshire who want a better-looking, warmer and more secure
              home.
            </p>

            <p>
              Our showroom near Kettering gives you a place to compare designs,
              finishes, glazing options and hardware before you decide. We keep
              the process straightforward, with clear advice and tidy
              installation from start to finish.
            </p>

            <p>
              Whether you are in Northampton, Wellingborough, Corby, Daventry,
              Towcester, Desborough or a nearby village, you can speak to a
              local team who knows the area and the homes we work on.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-yellow-500 md:text-4xl">
            Popular window and door services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Replacement windows",
                "Secure, energy-efficient windows fitted with care for homes across Northamptonshire.",
              ],
              [
                "Front and back doors",
                "A wide choice of door styles, colours and finishes to improve kerb appeal and everyday security.",
              ],
              [
                "Patio and French doors",
                "Bright, practical doors for gardens, kitchens, extensions and living spaces.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="border border-white/10 bg-white/5 p-6 shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-yellow-400">
                  {title}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Visit the showroom or ask for a local quote.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-neutral-300">
            Find us at 5 Pipewell Industrial Estate, Kettering, NN14 2SW, or
            contact the team to talk through your window and door project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/showroom"
              className="bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Visit Our Showroom
            </Link>

            <Link
              href="/gallery"
              className="border-2 border-yellow-500 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              View Completed Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
