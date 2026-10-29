import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is a Window and Door Survey?",
  description:
    "Learn what happens during a window and door survey, what gets measured and why a professional survey matters before new windows or doors are ordered.",
  alternates: {
    canonical: "/blog/what-is-a-survey",
  },
};

export default function WhatIsASurveyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-yellow-500/20 px-6 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg text-yellow-400 transition hover:text-yellow-300"
          >
            Newleaf Windows &amp; Doors
          </Link>

          <Link
            href="/blog"
            className="text-sm text-neutral-300 transition hover:text-yellow-400"
          >
            ← Back to Blog
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
          Windows &amp; doors · 6 minute read
        </p>

        <h1 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-6xl">
          What is a survey when measuring windows and doors?
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-neutral-300">
          If you’re planning to replace your windows or doors, you may hear the
          installer talk about carrying out a survey. But what does a window
          and door survey involve, and why is it an important step before your
          new products are ordered?
        </p>

        <p className="mt-5 leading-relaxed text-neutral-300">
          A survey is a detailed visit to check the openings, measurements and
          practical details needed for your new windows or doors. It helps make
          sure the products are specified for your home and that the
          installation can be planned properly. It is more detailed than
          simply measuring the visible glass or frame.
        </p>

        <figure className="my-10 overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900">
          <Image
            src="/images/blog/window-survey.png"
            alt="A window surveyor checking the width of a window opening"
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-neutral-400">
            A survey checks the window opening and the details needed to plan
            the replacement.
          </figcaption>
        </figure>

        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-yellow-400">
            What happens during a window and door survey?
          </h2>

          <p className="mt-5 leading-relaxed text-neutral-300">
            The surveyor looks at each window or door included in the project.
            They check the opening, take measurements and note anything that
            could affect the product choice or installation. The surveyor may
            also talk through your preferred style, colour, glazing and
            hardware, so the final specification reflects what you want for
            your home.
          </p>

          <p className="mt-5 leading-relaxed text-neutral-300">
            Every property is different. Older homes, extensions and previously
            altered openings can have details that are not obvious from a
            photograph or an initial quotation. A careful survey helps identify
            those details before products are made to size.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-yellow-400">
            What gets measured and checked?
          </h2>

          <p className="mt-5 leading-relaxed text-neutral-300">
            Measurements are taken for the individual window and door openings.
            Depending on the property and the installation, the surveyor may
            measure at more than one point because openings are not always
            perfectly square or even. They will also check the surrounding
            frame, sill and other visible details that may affect how the new
            product fits.
          </p>

          <p className="mt-5 leading-relaxed text-neutral-300">
            For a replacement window, the survey may record the opening style,
            frame requirements, glazing choices, colour and any options such as
            trickle vents or specific handles. For a front or back door, it may
            include the door style, threshold, hinges, locking system, handle
            position, letterbox and the direction the door opens.
          </p>

          <p className="mt-5 leading-relaxed text-neutral-300">
            The surveyor can also note access, parking and any practical
            considerations for the installation team. These checks help the
            company plan the work and discuss any questions with you in advance.
          </p>
        </section>

        <figure className="my-10 overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900">
          <Image
            src="/images/blog/window-height-survey.png"
            alt="A surveyor measuring the height of a window"
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
          <figcaption className="px-4 py-3 text-sm text-neutral-400">
            Width, height and the condition of the opening all help inform the
            product specification.
          </figcaption>
        </figure>

        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-yellow-400">
            Why is a professional survey important?
          </h2>

          <p className="mt-5 leading-relaxed text-neutral-300">
            Windows and doors are made to suit their openings. If measurements
            or specifications are wrong, the product may not fit as intended
            or an important feature could be missed. A survey gives the
            installer a chance to check the details before the order is
            finalised.
          </p>

          <p className="mt-5 leading-relaxed text-neutral-300">
            A survey also gives you an opportunity to confirm choices and ask
            questions. You can discuss how the windows should open, which
            glazing or hardware you prefer, and whether there are any
            installation details you would like the company to consider.
          </p>

          <p className="mt-5 leading-relaxed text-neutral-300">
            It is a key part of planning replacement windows and doors, helping
            the homeowner and installer understand what is being supplied and
            how the work is expected to proceed.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-yellow-500/25 bg-white/5 p-6 md:p-8">
          <h2 className="font-serif text-3xl font-medium text-yellow-400">
            How should I prepare for a survey?
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-neutral-300">
            <li>
              Make sure the surveyor can reach the windows and doors being
              discussed.
            </li>
            <li>
              Think about the styles, colours and opening options you would
              like.
            </li>
            <li>
              Mention any issues you have noticed, such as a window that is
              difficult to open or a draught around a door.
            </li>
            <li>
              Ask any questions you have about the products or the installation
              process.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl font-medium text-yellow-400">
            Window and door survey FAQs
          </h2>

          <h3 className="mt-7 text-xl font-semibold text-white">
            Is a survey the same as a quote?
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-300">
            No. A quote gives you an outline of the proposed work and its
            price. A survey checks the individual openings and records the
            details needed to confirm the product specification.
          </p>

          <h3 className="mt-7 text-xl font-semibold text-white">
            How long does a survey take?
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-300">
            It depends on the number of windows and doors, the property and the
            details that need checking. Your installer can give you an
            estimate when arranging the visit.
          </p>

          <h3 className="mt-7 text-xl font-semibold text-white">
            Do I need to be at home?
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-300">
            It is helpful to be available so you can confirm your choices and
            discuss any questions. The surveyor will also need access to the
            areas being measured.
          </p>

          <h3 className="mt-7 text-xl font-semibold text-white">
            Does a survey mean my windows or doors will be fitted straight away?
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-300">
            No. The survey is part of the preparation process. Once the details
            are confirmed, the products can be ordered and the installation
            date can be arranged.
          </p>
        </section>

        <section className="mt-14 border-t border-yellow-500/20 pt-10">
          <h2 className="font-serif text-3xl font-medium text-yellow-400">
            Planning new windows or doors?
          </h2>

          <p className="mt-4 leading-relaxed text-neutral-300">
            Newleaf Windows &amp; Doors supplies and installs windows and doors
            for homes across Northamptonshire, including Kettering, Corby,
            Desborough and Wellingborough. Get in touch to discuss your
            project.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:01536647649"
              className="rounded-lg bg-yellow-500 px-6 py-3 text-center font-bold text-black transition hover:bg-yellow-400"
            >
              Call 01536 647649
            </a>

            <a
              href="mailto:info@nlwd.co.uk"
              className="rounded-lg border border-yellow-500 px-6 py-3 text-center font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Email Newleaf
            </a>
          </div>
        </section>

        <Link
          href="/blog"
          className="mt-12 inline-block text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to all blog posts
        </Link>
      </article>
    </main>
  );
}