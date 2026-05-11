import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50">

        {/* TOP INFO BAR */}
        <div className="bg-yellow-500 text-black text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
          <div>📍 Unit 5, Pipewell Road, Desborough, NN14 2SW</div>

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
        <div className="bg-black/90 backdrop-blur-md border-b border-yellow-500/20 px-6 py-4 flex justify-between items-center">

          <a href="/" className="text-xl font-bold tracking-wide">
            Newleaf Windows & Doors
          </a>

          <nav className="flex gap-6 text-white font-medium items-center">

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

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-105px)] overflow-hidden bg-black">

        {/* HERO IMAGE */}
        <img
          src="/hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        {/* DARK LUXURY OVERLAY */}
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black"></div>

        {/* HERO CONTENT */}
        <div className="relative z-20 min-h-[calc(100vh-105px)] flex flex-col justify-center items-center text-center px-6 py-12">

          {/* LARGE CENTRED LOGO */}
          <div className="-mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Newleaf Windows & Doors"
              width={1200}
              height={440}
              priority
              className="w-[78vw] max-w-[1050px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* ELEGANT BUTTONS */}
          <div className="flex flex-col md:flex-row gap-8 -mt-8 mb-10 w-full max-w-5xl justify-center">

            <a
              href="tel:01536601292"
              className="group flex items-center justify-center gap-5 w-full md:w-[430px] border-2 border-yellow-500/90 bg-black/35 backdrop-blur-md text-white px-10 py-6 rounded-2xl hover:bg-yellow-500/15 transition shadow-2xl"
            >
              <span className="text-yellow-400 text-3xl">📞</span>
              <span className="text-2xl font-medium tracking-wide">
                Call The Experts
              </span>
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="group flex items-center justify-center gap-5 w-full md:w-[430px] border-2 border-yellow-500/90 bg-black/35 backdrop-blur-md text-white px-10 py-6 rounded-2xl hover:bg-yellow-500/15 transition shadow-2xl"
            >
              <span className="text-yellow-400 text-3xl">✉️</span>
              <span className="text-2xl font-medium tracking-wide">
                Email Us
              </span>
            </a>

          </div>

          {/* GOLD DIVIDER */}
          <div className="flex items-center gap-6 mb-6 w-full max-w-3xl">
            <div className="h-[1px] bg-yellow-500 flex-1"></div>
            <div className="text-yellow-500 text-3xl">◆</div>
            <div className="h-[1px] bg-yellow-500 flex-1"></div>
          </div>

          {/* BETTER TEXT */}
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-5xl text-white drop-shadow-lg">
            Beautifully crafted windows and doors
            <br />
            designed for{" "}
            <span className="text-yellow-400">
              style, security
            </span>{" "}
            and lasting performance.
          </h2>

          <p className="mt-6 text-neutral-300 max-w-3xl text-lg md:text-2xl leading-relaxed">
            Premium installations from your local Desborough showroom.
          </p>

          {/* VIEW WORK BUTTON */}
          <a
            href="/gallery"
            className="mt-8 border-2 border-yellow-500 text-yellow-400 px-10 py-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition text-xl shadow-xl"
          >
            View Our Work →
          </a>

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