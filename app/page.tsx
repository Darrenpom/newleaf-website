"use client";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50">

        {/* TOP INFO BAR */}
        <div className="bg-yellow-500 text-black text-xs md:text-sm py-2 px-4 flex justify-center md:justify-between items-center">
          <div>5 Pipewell Industrial Estate, Kettering, NN14 2SW</div>
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

          </nav>

          {/* MOBILE CALL + MENU BUTTONS */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:01536601292"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold"
            >
              Call Now
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-yellow-500 text-yellow-400 transition hover:bg-yellow-500/10"
            >
              <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}></span>
              <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
            </button>
          </div>

          {/* MOBILE MENU LINKS */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-yellow-500/20 px-4 py-3 flex flex-wrap justify-center gap-4 text-sm">
              <a href="/gallery" className="text-white hover:text-yellow-400">
                Gallery
              </a>

              <a href="/showroom" className="text-white hover:text-yellow-400">
                Showroom
              </a>

              <a href="/showroom-open-times" className="text-white hover:text-yellow-400">
                Open Times
              </a>

              <a
                href="mailto:info@newleafwindows.com"
                className="text-white hover:text-yellow-400"
              >
                Contact
              </a>
            </div>
          )}

        </div>
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

          <h2 className="text-2xl md:text-5xl font-light leading-tight max-w-5xl text-white drop-shadow-lg">
            Beautifully crafted windows and doors
            <br />
            designed for{" "}
            <span className="text-yellow-400">
              style, security
            </span>{" "}
            and lasting performance.
          </h2>

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

      {/* ABOUT SECTION */}
      <section className="bg-white px-6 py-16 text-neutral-950">
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

          <div className="rounded-2xl border border-yellow-500/30 bg-neutral-950 p-8 text-white shadow-2xl">
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
      <section className="bg-neutral-100 px-6 py-16 text-neutral-950">
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

      {/* PRODUCT GUIDES SECTION */}
      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-yellow-400">
                Product guides
              </p>

              <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Explore our extended product catalogue.
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-neutral-300">
              Browse more product ranges, brochures and design tools through
              our extended catalogue. These guides open in a new tab so you can
              keep the Newleaf site close by while comparing options.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productGuides.map((guide, index) => (
              <a
                key={guide.title}
                href={guide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[250px] overflow-hidden border border-white/10 bg-neutral-900 p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-yellow-500/70 hover:bg-neutral-800 hover:shadow-yellow-500/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-yellow-500"></div>

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-yellow-500/90">
                      {guide.label}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      {guide.title}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-yellow-500/50 bg-black text-sm font-bold text-yellow-400 transition group-hover:bg-yellow-500 group-hover:text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-neutral-300">
                  {guide.description}
                </p>

                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
                    Open guide
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-yellow-500 transition group-hover:translate-x-1"
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
      <section className="relative overflow-hidden px-6 py-16">
        <img
          src="/showroom-fresh-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/50"></div>

        <div className="relative z-10 mx-auto max-w-3xl bg-white/85 p-6 text-center shadow-2xl backdrop-blur-sm md:p-10">
          <h2 className="font-serif text-4xl font-medium text-neutral-950 md:text-5xl">
            Get a Price
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-neutral-700">
            Tell us what you are looking for and we will get back to you with a
            free no-obligation quote.
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
              <option>Windows</option>
              <option>Front door</option>
              <option>French doors</option>
              <option>Patio or sliding doors</option>
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
              Continue
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
      <section className="bg-neutral-900 border-t border-yellow-500/20 border-b border-yellow-500/20 py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            Trusted & Accredited
          </h2>

          <p className="text-neutral-300 text-lg max-w-3xl mx-auto mb-8">
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
      <section className="bg-neutral-900 px-6 py-16 border-t border-yellow-500/20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            Find Our Showroom
          </h2>

          <p className="text-neutral-300 text-lg mb-8">
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
      <section className="bg-neutral-950 px-6 py-20 border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white/10 border border-white/15 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Premium Products
            </h3>
            <p className="text-neutral-300">
              Carefully selected windows and doors designed for lasting performance.
            </p>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Expert Installation
            </h3>
            <p className="text-neutral-300">
              Installed with care, precision and attention to detail from start to finish.
            </p>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Local Showroom
            </h3>
            <p className="text-neutral-300">
              Visit us in Desborough to view products and speak with the experts.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
