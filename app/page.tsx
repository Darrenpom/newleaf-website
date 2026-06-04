"use client";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

const quoteConversionId = "AW-18194635837/xmXQCOO34bgcEL248OND";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: "conversion",
      params: { send_to: string }
    ) => void;
  }
}

export default function Home() {
  const [quoteStatus, setQuoteStatus] = useState("");
  const productGuides = [
    {
      title: "Windows",
      label: "Window ranges",
      description: "Compare uPVC, aluminium, timber and timber alternative window ranges.",
      href: "https://www.corby-doubleglazing.co.uk/windows/",
    },
    {
      title: "Doors",
      label: "Door ranges",
      description: "Browse front doors, patio doors, French doors, bi-folding doors and more.",
      href: "https://www.corby-doubleglazing.co.uk/doors/",
    },
    {
      title: "Composite Door Designer",
      label: "Design tool",
      description: "Design a Solidor or Residor composite door and explore colours and hardware.",
      href: "https://www.corby-doubleglazing.co.uk/doors/door-designers/",
    },
    {
      title: "Conservatories",
      label: "Living spaces",
      description: "Explore conservatories, orangeries and garden room options.",
      href: "https://www.corby-doubleglazing.co.uk/orangeries-and-conservatories-corby/",
    },
    {
      title: "Energy Savings Calculator",
      label: "Planning tool",
      description: "Estimate possible savings from upgrading to energy-efficient windows.",
      href: "https://www.corby-doubleglazing.co.uk/energy-calculator/",
    },
    {
      title: "Brochures",
      label: "Downloads",
      description: "Download product brochures for windows, doors and glazing options.",
      href: "https://www.corby-doubleglazing.co.uk/brochure-downloads/",
    },
  ];

  async function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const accessKey = "2fa29ea3-1d5a-4773-b5b9-e91c68ea9a5d";

    const formData = new FormData(form);
    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const product = formData.get("product")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const house = formData.get("house")?.toString() || "";
    const postcode = formData.get("postcode")?.toString() || "";

    formData.append("access_key", accessKey);
    formData.append("subject", "New quote enquiry from Newleaf website");
    formData.append("from_name", "Newleaf Website");
    formData.append("name", `${firstName} ${lastName}`.trim());
    formData.append(
      "message",
      `Product: ${product}
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Address: ${house}, ${postcode}`
    );

    setQuoteStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        window.gtag?.("event", "conversion", {
          send_to: quoteConversionId,
        });
        form.reset();
        setQuoteStatus("Thanks, your enquiry has been sent.");
      } else {
        setQuoteStatus(result.message || "Sorry, something went wrong. Please call or email us.");
      }
    } catch (error) {
      setQuoteStatus(
        error instanceof Error
          ? error.message
          : "Sorry, something went wrong. Please call or email us."
      );
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <a
        href="#residence-collection"
        className="fixed right-6 top-[38%] z-40 hidden w-[34rem] -translate-y-1/2 text-center text-white transition hover:-translate-y-[52%] xl:block"
        aria-label="View The Residence Collection"
      >
        <Image
          src="/residence-collection-logo.png.jpg"
          alt="The Residence Collection"
          width={780}
          height={300}
          className="h-auto w-full"
        />
        <span className="mt-4 block font-serif text-2xl font-semibold uppercase tracking-[0.32em] text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_65%)]">
          View Ranges
        </span>
      </a>

      <div className="fixed bottom-6 right-6 z-40 hidden aspect-video w-[34rem] overflow-hidden shadow-2xl xl:block">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/XtDHil3kA_w?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=XtDHil3kA_w"
          title="Newleaf Residence Collection video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50">

        {/* TOP INFO BAR */}
        <div className="flex items-center justify-center bg-yellow-500 px-4 py-2.5 text-center text-black">
          <div className="font-serif text-sm font-medium tracking-wide md:text-base">
            Locals looking after locals across Northamptonshire
          </div>
        </div>

        {/* MAIN NAV BAR */}
        <div className="relative bg-black/90 backdrop-blur-md border-b border-yellow-500/20 px-4 md:px-6 py-4 flex justify-between items-center">

          <Link href="/" className="text-base md:text-xl font-bold tracking-wide">
            Newleaf Windows & Doors
          </Link>

          <nav className="hidden md:flex gap-6 text-white font-medium items-center">

            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>

            <a href="/gallery" className="hover:text-yellow-400 transition">
              Completed Work
            </a>

            <Link href="/#product-guides" className="hover:text-yellow-400 transition">
              Products & Brochures
            </Link>

            <a
              href="/showroom"
              className="hover:text-yellow-400 transition"
            >
              Visit Our Showroom
            </a>

            <a
              href="/showroom-open-times"
              className="hover:text-yellow-400 transition"
            >
              Showroom Open Times
            </a>

            <Link href="/endurance-doors" className="hover:text-yellow-400 transition">
              Endurance Doors
            </Link>

            <a
              href="https://www.facebook.com/newleafwindowsanddoors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition shadow-lg"
            >
              <span className="text-white font-semibold">Facebook</span>
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>

            <Link
              href="/#get-a-price"
              className="border-b border-yellow-500 pb-1 font-semibold text-yellow-400 transition hover:border-yellow-300 hover:text-yellow-300"
            >
              Request a Quote
            </Link>

          </nav>

          {/* MOBILE QUOTE BUTTON */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="#get-a-price"
              className="border-b border-yellow-500 pb-1 text-sm font-semibold text-yellow-400"
            >
              Request a Quote
            </a>
          </div>

        </div>

        {/* MOBILE ALWAYS-VISIBLE LINKS */}
        <nav className="md:hidden flex gap-4 overflow-x-auto border-t border-yellow-500/20 bg-black px-4 py-3 text-sm font-medium text-white">
          <Link href="/" className="shrink-0 hover:text-yellow-400">
            Home
          </Link>
          <a href="/gallery" className="shrink-0 hover:text-yellow-400">
            Gallery
          </a>
          <Link href="/#product-guides" className="shrink-0 hover:text-yellow-400">
            Products
          </Link>
          <a href="/showroom" className="shrink-0 hover:text-yellow-400">
            Showroom
          </a>
          <a href="/showroom-open-times" className="shrink-0 hover:text-yellow-400">
            Open Times
          </a>
          <Link href="/endurance-doors" className="shrink-0 hover:text-yellow-400">
            Endurance
          </Link>
          <a href="mailto:info@newleafwindows.com" className="shrink-0 hover:text-yellow-400">
            Contact
          </a>
          <a href="tel:01536601292" className="shrink-0 text-yellow-400 hover:text-yellow-300">
            Call
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-105px)] overflow-hidden bg-black">

        <img
          src="/hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70"></div>

        <div className="relative z-20 min-h-[calc(100vh-105px)] flex flex-col justify-center items-center text-center px-6 py-20 md:py-12">

          <div className="-mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Newleaf Windows & Doors"
              width={1200}
              height={440}
              priority
              className="w-[90vw] md:w-[78vw] max-w-[1050px] h-auto drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 -mt-8 mb-10 w-full max-w-5xl justify-center">

            <a
              href="tel:01536601292"
              className="group flex items-center justify-center gap-5 w-full md:w-[430px] border-2 border-yellow-500/90 bg-black/25 backdrop-blur-sm text-white px-6 md:px-10 py-5 md:py-6 rounded-2xl hover:bg-yellow-500/20 transition shadow-2xl"
            >
              <span className="text-xl md:text-2xl font-medium tracking-wide">
                Call The Experts
              </span>
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="group flex items-center justify-center gap-5 w-full md:w-[430px] border-2 border-yellow-500/90 bg-black/25 backdrop-blur-sm text-white px-6 md:px-10 py-5 md:py-6 rounded-2xl hover:bg-yellow-500/20 transition shadow-2xl"
            >
              <span className="text-xl md:text-2xl font-medium tracking-wide">
                Email Us
              </span>
            </a>

          </div>

          <div className="flex items-center gap-6 mb-6 w-full max-w-3xl">
            <div className="h-[1px] bg-yellow-500 flex-1"></div>
            <div className="h-3 w-3 rotate-45 bg-yellow-500"></div>
            <div className="h-[1px] bg-yellow-500 flex-1"></div>
          </div>

          <h1 className="max-w-5xl text-3xl font-light leading-tight text-white drop-shadow-lg md:text-6xl">
            Windows and doors in
            <br />
            <span className="text-yellow-400">Northamptonshire</span>
          </h1>

          <p className="mt-5 max-w-4xl text-xl font-light leading-relaxed text-white drop-shadow-lg md:text-3xl">
            Beautifully crafted for style, security and lasting performance.
          </p>

          <p className="mt-6 text-neutral-300 max-w-3xl text-base md:text-2xl leading-relaxed">
            Premium installations from your local Desborough showroom.
          </p>

          <a
            href="/gallery"
            className="mt-8 border-2 border-yellow-500 text-yellow-400 px-8 md:px-10 py-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition text-lg md:text-xl shadow-xl"
          >
            View Our Work
          </a>

        </div>

      </section>

      <div
        className="relative bg-scroll bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url('/showroom-fresh-bg.png')" }}
      >
      <div className="absolute inset-0 bg-white/58"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/68 via-white/42 to-white/64"></div>
      <div className="relative z-10">
      {/* TRUST STRIP */}
      <section className="border-b border-yellow-700/20 px-6 py-8 text-neutral-950">
        <div className="mx-auto grid max-w-6xl gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            "CERTASS Registered",
            "Local Showroom",
            "Free No-Obligation Quotes",
            "Northamptonshire Installers",
          ].map((item) => (
            <div
              key={item}
              className="border border-yellow-700/25 bg-white/80 px-5 py-4 font-semibold shadow-lg backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="px-6 py-16 text-neutral-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
                Customer feedback
              </p>
              <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Recommended by local homeowners.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-700">
              Real feedback from customers who chose Newleaf for windows, doors
              and porchway work across the local area.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Gareth Evans",
                review:
                  "Had a new door fitted and it was done by the friendliest and most expert team of guys imaginable. Every step of the process was transparent and it wasn't even that expensive. Highly recommended. We'll be back.",
              },
              {
                name: "Phil Pace",
                review:
                  "David was very helpful in all aspects of choosing the right door and bespoke outer porch. Great workmanship from the fitters and very happy with the end result.",
              },
              {
                name: "Michael Haywood",
                review:
                  "David is really helpful. We've had doors from him previously and are very happy with the quality. The windows we ordered look good and we are excited for their installation.",
              },
            ].map((item) => (
              <article
                key={item.name}
                className="border border-yellow-700/25 bg-white/85 p-7 shadow-xl backdrop-blur-sm"
              >
                <div className="mb-4 text-xl text-yellow-600" aria-label="5 star review">
                  *****
                </div>
                <p className="leading-relaxed text-neutral-700">
                  &ldquo;{item.review}&rdquo;
                </p>
                <p className="mt-5 font-semibold text-neutral-950">
                  {item.name}
                </p>
                <p className="mt-1 text-sm font-medium text-yellow-700">
                  Google review
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENDURANCE DOORS FEATURE */}
      <section id="endurance-doors" className="scroll-mt-24 px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl overflow-hidden border border-yellow-700/25 bg-neutral-950 text-white shadow-2xl md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-12">
            <Image
              src="/Endurance%20logo.%20png.jpg"
              alt="Endurance Doors"
              width={420}
              height={150}
              className="mb-8 h-auto w-72"
            />
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-400">
              Premium composite doors
            </p>
            <h2 className="font-serif text-5xl font-medium leading-tight md:text-6xl">
              Endurance doors, designed with Newleaf.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-200">
              Newleaf is a trusted Endurance installer, helping homeowners
              choose premium composite doors across Northamptonshire and nearby
              areas with advice, measuring and quotes handled directly by our
              local team.
            </p>

            <div className="mt-7 grid gap-3 text-sm font-semibold text-neutral-100 sm:grid-cols-2">
              <span className="border border-white/10 bg-white/5 px-4 py-3">
                Trusted installer
              </span>
              <span className="border border-white/10 bg-white/5 px-4 py-3">
                Solid-core composite doors
              </span>
              <span className="border border-white/10 bg-white/5 px-4 py-3">
                Colours, glass and hardware
              </span>
              <span className="border border-white/10 bg-white/5 px-4 py-3">
                Quote handled by Newleaf
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/endurance-doors"
                className="bg-yellow-500 px-7 py-4 text-center font-bold text-black transition hover:bg-yellow-400"
              >
                View Endurance Doors
              </Link>
              <Link
                href="/#get-a-price"
                className="border-2 border-yellow-500 px-7 py-4 text-center font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
              >
                Request an Endurance Quote
              </Link>
            </div>
          </div>

          <div className="flex min-h-[420px] items-center bg-black p-5 md:p-8">
            <div className="w-full">
              <div className="aspect-video w-full overflow-hidden border border-yellow-500/30 bg-black shadow-2xl">
                <iframe
                  className="h-full w-full border-0"
                  src="https://www.youtube.com/embed/Vw3g7Cj1Qwo?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=Vw3g7Cj1Qwo&cc_load_policy=1&cc_lang_pref=en"
                  title="Endurance composite doors video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 border-l-4 border-yellow-500 pl-4">
                <Image
                  src="/Endurance%20logo.%20png.jpg"
                  alt="Endurance"
                  width={260}
                  height={94}
                  className="h-auto w-40"
                />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                  Doors by Newleaf
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
              About Newleaf
            </p>

            <h2 className="mb-6 font-serif text-4xl font-medium leading-tight md:text-5xl">
              Local window and door specialists with a showroom you can visit.
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-neutral-700">
              Newleaf Windows & Doors helps homeowners choose quality windows and doors
              that look right, feel secure, and are installed with care from start to finish.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700">
              Visit our local showroom to see products in person, compare styles, and get
              friendly advice before making a decision. We work with customers across
              Northamptonshire, including Kettering, Desborough, Northampton,
              Wellingborough and nearby villages.
            </p>
          </div>

          <div className="border border-yellow-500/40 bg-black/75 p-8 text-white shadow-2xl">
            <h3 className="mb-5 text-2xl font-semibold text-yellow-400">
              Why customers choose us
            </h3>

            <div className="space-y-4 text-neutral-200">
              <p>Local showroom in Desborough</p>
              <p>Quality windows and doors</p>
              <p>Careful, tidy installation</p>
              <p>CERTASS registered installers</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="px-6 py-16 text-neutral-950">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
              Local Northamptonshire service
            </p>

            <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
              Windows and doors for homes across Northamptonshire.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-neutral-700">
              From replacement windows to front doors, patio doors and French
              doors, Newleaf supplies and installs products for homeowners
              across Northamptonshire. Our team regularly helps customers in
              Northampton, Kettering, Desborough, Wellingborough, Corby,
              Daventry, Towcester and the surrounding villages.
            </p>

            <Link
              href="/windows-and-doors-northamptonshire"
              className="mt-6 inline-flex bg-yellow-500 px-7 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Windows and Doors in Northamptonshire
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-neutral-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
                Areas we cover
              </p>
              <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Windows and doors across a wider local area.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-700">
              Newleaf works with homeowners across Northamptonshire and nearby
              areas, from our local showroom near Kettering to Market
              Harborough, Leicester and surrounding towns.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Kettering",
                "Windows and doors installed by a local team near our showroom.",
                "/windows-and-doors-kettering",
              ],
              [
                "Market Harborough",
                "Quality windows and doors for homes across the local area.",
                "/windows-and-doors-market-harborough",
              ],
              [
                "Leicester",
                "Window and door advice, supply and installation for Leicester homes.",
                "/windows-and-doors-leicester",
              ],
            ].map(([title, description, href]) => (
              <Link
                key={title}
                href={href}
                className="border border-yellow-700/25 bg-white/85 p-7 shadow-xl transition hover:-translate-y-1 hover:border-yellow-600/70 hover:bg-white hover:shadow-2xl"
              >
                <h3 className="text-2xl font-semibold text-neutral-950">
                  {title}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-700">
                  {description}
                </p>
                <span className="mt-6 inline-flex font-semibold text-yellow-700">
                  View service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENCE COLLECTION FEATURE */}
      <section id="residence-collection" className="scroll-mt-24 px-6 py-20 text-neutral-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <Image
                src="/residence-collection-logo.png.jpg"
                alt="The Residence Collection"
                width={310}
                height={120}
                className="mb-8 h-auto w-60 md:w-72"
              />
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
                Featured window range
              </p>
              <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Explore The Residence Collection.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                Newleaf supplies and installs the full Residence Collection,
                including Residence 2, Residence 7 and Residence 9 windows.
              </p>
              <p>
                With 20+ Residence Collection installations completed across
                Northamptonshire and nearby areas, we can help you choose the
                right style for your home.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <a
              href="https://www.corby-doubleglazing.co.uk/windows/upvc/residence-9-windows-corby/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[390px] overflow-hidden bg-neutral-950 p-8 text-white shadow-2xl"
            >
              <Image
                src="/showroom-fresh-bg.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-55 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 mt-auto">
                <div className="font-serif text-8xl leading-none text-[#8c7648]">
                  R9
                </div>
                <h3 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide">
                  The original timber alternative
                </h3>
                <p className="mt-5 font-bold uppercase tracking-wide text-yellow-400">
                  View Residence 9
                </p>
              </div>
            </a>

            <a
              href="https://www.corby-doubleglazing.co.uk/windows/upvc/residence-7-windows-corby/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[390px] overflow-hidden bg-neutral-950 p-8 text-white shadow-2xl"
            >
              <Image
                src="/hero.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-55 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 mt-auto">
                <div className="font-serif text-8xl leading-none text-[#f05a28]">
                  R7
                </div>
                <h3 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide">
                  Flush, modern, versatile
                </h3>
                <p className="mt-5 font-bold uppercase tracking-wide text-yellow-400">
                  View Residence 7
                </p>
              </div>
            </a>

            <a
              href="https://www.corby-doubleglazing.co.uk/windows/upvc/residence-2-windows-corby/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[390px] overflow-hidden bg-neutral-950 p-8 text-white shadow-2xl"
            >
              <Image
                src="/showroom-open-times-bg.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-55 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 mt-auto">
                <div className="font-serif text-8xl leading-none text-[#d9e021]">
                  R<sup className="text-5xl">2</sup>
                </div>
                <h3 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide">
                  Technology and innovation
                </h3>
                <p className="mt-5 font-bold uppercase tracking-wide text-yellow-400">
                  View Residence 2
                </p>
              </div>
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/#get-a-price"
              className="bg-yellow-500 px-8 py-4 text-center font-bold text-black shadow-xl transition hover:bg-yellow-400"
            >
              Ask About The Residence Collection
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT GUIDES SECTION */}
      <section id="product-guides" className="relative overflow-hidden px-6 py-20 text-neutral-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-700">
                Product guides
              </p>

              <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Explore our extended product catalogue.
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-neutral-700">
              Browse more product ranges, brochures and design tools through
              our extended catalogue. These guides open in a new tab so you can
              keep the Newleaf site close by while comparing options.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productGuides.map((guide) => (
              <a
                key={guide.title}
                href={guide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[235px] overflow-hidden border border-yellow-700/25 bg-white/86 p-7 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-600/70 hover:bg-white hover:shadow-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-yellow-500"></div>

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-yellow-700">
                      {guide.label}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-neutral-950">
                      {guide.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-neutral-700">
                  {guide.description}
                </p>

                <div className="absolute inset-x-7 bottom-6 flex items-center justify-between border-t border-yellow-700/15 pt-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-yellow-700">
                    Open guide
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center border border-yellow-500/60 bg-neutral-950 text-lg text-yellow-400 transition group-hover:translate-x-1 group-hover:bg-yellow-500 group-hover:text-black"
                  >
                    {">"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        id="get-a-price"
        className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 py-20"
      >
        <div className="absolute inset-0"></div>

        <div className="relative z-10 mx-auto max-w-3xl border border-yellow-600/45 p-6 text-center shadow-2xl md:p-10">
          <h2 className="font-serif text-4xl font-medium text-neutral-950 md:text-5xl">
            Request a Free Quote
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-neutral-700">
            Tell us what you are looking for and we will get back to you with a
            free no-obligation quote.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold text-neutral-800">
            No pressure sales. Just practical advice from a local team.
          </p>

          <form onSubmit={handleQuoteSubmit} className="mt-8 grid gap-4 text-left">
            <select
              name="product"
              required
              className="h-12 w-full border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a product *
              </option>
              <option>Endurance doors</option>
              <option>Residence windows</option>
              <option>Composite front door</option>
              <option>Replacement windows</option>
              <option>Double glazing</option>
              <option>French doors</option>
              <option>Patio or sliding doors</option>
              <option>Bi-fold doors</option>
              <option>Porch or porchway</option>
              <option>Other</option>
            </select>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="firstName"
                required
                className="h-12 border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
                placeholder="First name *"
              />
              <input
                name="lastName"
                required
                className="h-12 border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
                placeholder="Last name *"
              />
            </div>

            <input
              name="phone"
              required
              className="h-12 border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
              placeholder="Contact number *"
            />

            <input
              name="email"
              type="email"
              required
              className="h-12 border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
              placeholder="Email address *"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="house"
                required
                className="h-12 border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
                placeholder="House number/name *"
              />
              <input
                name="postcode"
                required
                className="h-12 border border-neutral-300 bg-white px-4 text-neutral-700 outline-none focus:border-yellow-500"
                placeholder="Postcode *"
              />
            </div>

            <button
              type="submit"
              className="mx-auto mt-4 h-14 w-full max-w-xs bg-green-600 px-8 text-lg font-bold text-white shadow-xl transition hover:bg-green-500"
            >
              Request My Free Quote
            </button>

            {quoteStatus && (
              <p className="text-center text-sm font-semibold text-neutral-800">
                {quoteStatus}
              </p>
            )}
          </form>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-700">
            By providing your details you agree to being contacted about your
            enquiry.
          </p>
        </div>
      </section>

      {/* CERTASS SECTION */}
      <section className="border-y border-yellow-500/25 px-6 py-10">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            Trusted & Accredited
          </h2>

          <p className="text-neutral-950 text-lg max-w-3xl mx-auto mb-8">
            Proud CERTASS registered installers delivering compliant,
            high-quality window and door installations across the region.
          </p>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl px-8 py-5 shadow-2xl">
              <img
                src="/certass.png"
                alt="CERTASS Registered"
                className="h-20 object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="border-t border-yellow-500/25 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            Find Our Showroom
          </h2>

          <p className="text-neutral-950 text-lg mb-8">
            5 Pipewell Industrial Estate, Kettering, NN14 2SW
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=5+Pipewell+Industrial+Estate,+Kettering,+NN14+2SW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl transition shadow-2xl text-lg mb-8"
          >
            Click For Directions To Our Showroom
          </a>

          <div className="rounded-2xl overflow-hidden border border-yellow-500/30 shadow-2xl">
            <img
              src="/map.png"
              alt="Map to Newleaf Windows showroom"
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>

      {/* RICH BLACK SECTION UNDER HERO */}
      <section className="border-t border-yellow-500/25 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="border border-yellow-700/30 p-8 shadow-xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Premium Products
            </h3>
            <p className="text-neutral-950">
              Carefully selected windows and doors designed for lasting performance.
            </p>
          </div>

          <div className="border border-yellow-700/30 p-8 shadow-xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Expert Installation
            </h3>
            <p className="text-neutral-950">
              Installed with care, precision and attention to detail from start to finish.
            </p>
          </div>

          <div className="border border-yellow-700/30 p-8 shadow-xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Local Showroom
            </h3>
            <p className="text-neutral-950">
              Visit us in Desborough to view products and speak with the experts.
            </p>
          </div>

        </div>
      </section>
      </div>
      </div>

    </main>
  );
}
