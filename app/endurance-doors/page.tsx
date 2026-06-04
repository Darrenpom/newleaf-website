import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Endurance Doors Northamptonshire | Newleaf Windows & Doors",
  description:
    "Endurance composite doors designed, supplied and installed by Newleaf Windows & Doors. Trusted Endurance installer for Northamptonshire and nearby areas.",
  alternates: {
    canonical: "/endurance-doors",
  },
};

export default function EnduranceDoorsPage() {
  const heroDoors = [
    "/Endurance%20door%201.png.jpg",
    "/Endurance%20door%202%20.png.jpg",
    "/Endurance%20door%203%20.png.jpg",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden px-6 py-8 md:py-10">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
          {heroDoors.map((src, index) => (
            <div key={src} className="relative min-h-full">
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-70"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/75" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            href="/"
            className="font-serif text-lg font-medium text-yellow-400 hover:text-yellow-300"
          >
            Back to Home
          </Link>

          <div className="grid min-h-[70vh] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Image
                src="/Endurance%20logo.%20png.jpg"
                alt="Endurance Doors"
                width={460}
                height={165}
                priority
                className="mb-8 h-auto w-80"
              />
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Trusted Endurance installer
              </p>
              <h1 className="font-serif text-5xl font-medium leading-tight md:text-7xl">
                Endurance composite doors, installed by Newleaf.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl">
                Choose a premium Endurance door with advice from Newleaf, your
                local trusted installer for Northamptonshire and nearby areas.
                From the first enquiry, your quote is handled directly by our
                team.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:01536601292"
                  className="bg-yellow-500 px-8 py-4 text-center text-lg font-bold text-black transition hover:bg-yellow-400"
                >
                  Call 01536 601292
                </a>
                <Link
                  href="/#get-a-price"
                  className="border-2 border-yellow-500 px-8 py-4 text-center text-lg font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                >
                  Request an Endurance Quote
                </Link>
              </div>
            </div>

            <div className="border border-yellow-500/35 bg-black/50 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <h2 className="font-serif text-3xl font-medium text-yellow-400">
                Why choose Endurance with Newleaf?
              </h2>
              <div className="mt-6 space-y-4 text-neutral-200">
                <p>Premium composite door range</p>
                <p>Trusted installer on the Endurance network</p>
                <p>Local showroom advice before you commit</p>
                <p>Colours, glass and hardware options</p>
                <p>Quote handled directly by Newleaf</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Image
              src="/Endurance%20logo.%20png.jpg"
              alt="Endurance Doors"
              width={360}
              height={130}
              className="mb-8 h-auto w-64"
            />
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
              Premium front doors
            </p>
            <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
              A secure, stylish entrance chosen with local advice.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
            <p>
              Endurance doors are a premium choice for homeowners who want a
              front door that looks right, feels secure and suits the character
              of their home.
            </p>
            <p>
              With Newleaf, you can talk through the design, colour, glass and
              hardware options directly with a local team, then request a
              quote from the people who will be helping with the installation.
            </p>
            <p>
              If you have already seen an Endurance style you like, tell us the
              design or send us a screenshot and we will quote it directly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-16 text-neutral-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
                How we help
              </p>
              <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Design the door with local guidance.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-700">
              We make the Endurance process simple: choose the style, compare
              colours and glass, then get a clear Newleaf quote for your home.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Choose your style",
                "Traditional, modern and cottage-style options to suit the look of your home.",
              ],
              [
                "Compare the details",
                "Talk through colours, glazing, handles, letterplates and finishing touches.",
              ],
              [
                "Quote with Newleaf",
                "Send your preferred design to us and we will price it directly for you.",
              ],
            ].map(([title, description]) => (
              <article
                key={title}
                className="border border-yellow-700/25 bg-white p-7 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-neutral-950">
                  {title}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-700">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Ask Newleaf about Endurance doors.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-300">
            Visit the showroom, call the team, or send a quote request and we
            will help you choose the right Endurance door for your home.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#get-a-price"
              className="bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Request a Quote
            </Link>
            <Link
              href="/showroom"
              className="border-2 border-yellow-500 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Visit Our Showroom
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
