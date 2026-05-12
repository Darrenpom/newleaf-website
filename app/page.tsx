import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50">

        {/* TOP INFO BAR */}
        <div className="bg-yellow-500 text-black text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
          <div>📍 5 Pipewell Industrial Estate, Kettering, NN14 2SW</div>

          <div className="flex gap-4 mt-1 md:mt-0 flex-wrap justify-center">
            <span>Mon 9–5</span>
            <span>Tues 9–5</span>
            <span>Wed 9–5</span>
            <span>Thurs 9–5</span>
            <span>Fri 9–4</span>
            <span>Sat 9–1</span>
            <span>📞 01536 601292</span>
          </div>
        </div>

        {/* MAIN NAV BAR */}
        <div className="relative bg-black/90 backdrop-blur-md border-b border-yellow-500/20 px-4 md:px-6 py-4 flex justify-between items-center">

          <a href="/" className="text-base md:text-xl font-bold tracking-wide">
            Newleaf Windows & Doors
          </a>

          <nav className="hidden md:flex gap-6 text-white font-medium items-center">

            <a href="/" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="/gallery" className="hover:text-yellow-400 transition">
              Completed Work
            </a>

            <a
              href="https://endurancedoors.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Endurance Doors
            </a>

            <a
              href="/showroom"
              className="hover:text-yellow-400 transition"
            >
              Visit Our Showroom
            </a>

            <a
              href="https://www.facebook.com/newleafwindowsanddoors"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition shadow-lg"
            >
              <span className="text-white text-lg">📘</span>
              <span className="text-white font-semibold">Facebook</span>
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>

          </nav>

          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:01536601292"
            className="md:hidden bg-yellow-500 text-black px-4 py-2 rounded-full font-bold"
          >
            Call Now
          </a>

          {/* MOBILE MENU LINKS */}
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-yellow-500/20 px-4 py-3 flex flex-wrap justify-center gap-4 text-sm">
            <a href="/gallery" className="text-white hover:text-yellow-400">
              Gallery
            </a>

            <a
              href="https://endurancedoors.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              Endurance
            </a>

            <a href="/showroom" className="text-white hover:text-yellow-400">
              Showroom
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="text-white hover:text-yellow-400"
            >
              Contact
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-105px)] overflow-hidden bg-black">

        <img
          src="/hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black"></div>

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
              className="group flex items-center justify-center gap-5 w-full md:w-[430px] border-2 border-yellow-500/90 bg-black/35 backdrop-blur-md text-white px-6 md:px-10 py-5 md:py-6 rounded-2xl hover:bg-yellow-500/15 transition shadow-2xl"
            >
              <span className="text-yellow-400 text-3xl">📞</span>
              <span className="text-xl md:text-2xl font-medium tracking-wide">
                Call The Experts
              </span>
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="group flex items-center justify-center gap-5 w-full md:w-[430px] border-2 border-yellow-500/90 bg-black/35 backdrop-blur-md text-white px-6 md:px-10 py-5 md:py-6 rounded-2xl hover:bg-yellow-500/15 transition shadow-2xl"
            >
              <span className="text-yellow-400 text-3xl">✉️</span>
              <span className="text-xl md:text-2xl font-medium tracking-wide">
                Email Us
              </span>
            </a>

          </div>

          <div className="flex items-center gap-6 mb-6 w-full max-w-3xl">
            <div className="h-[1px] bg-yellow-500 flex-1"></div>
            <div className="text-yellow-500 text-3xl">◆</div>
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
            View Our Work →
          </a>

        </div>

      </section>

      {/* CERTASS SECTION */}
      <section className="bg-neutral-950 border-t border-yellow-500/20 border-b border-yellow-500/20 py-10 px-6">
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
      <section className="bg-neutral-950 px-6 py-16 border-t border-yellow-500/20">
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
            <span className="text-2xl">📍</span>
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
      <section className="bg-black px-6 py-20 border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Premium Products
            </h3>
            <p className="text-neutral-300">
              Carefully selected windows and doors designed for lasting performance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-yellow-400 text-2xl font-semibold mb-3">
              Expert Installation
            </h3>
            <p className="text-neutral-300">
              Installed with care, precision and attention to detail from start to finish.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
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