import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* TOP INFO BAR */}
      <div className="bg-yellow-500 text-black text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">

        <div>
          📍 Unit 5, Pipewell Road, Desborough, NN14 2SW
        </div>

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

      {/* HERO SECTION */}
      <section className="relative">

        {/* HERO IMAGE */}
        <img
          src="/hero.png"
          className="w-full h-screen object-cover"
          alt="Hero"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TOP NAVIGATION */}
        <div className="absolute top-6 right-6 z-20 flex gap-6 text-white font-medium">

          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="/gallery" className="hover:text-yellow-400 transition">
            Our Work
          </a>

          <a
            href="https://endurancedoors.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            Endurance Doors
          </a>

        </div>

        {/* LOGO */}
        <div className="absolute top-6 left-6 z-20">
          <Image
            src="/logo.png"
            alt="Newleaf Windows & Doors"
            width={440}
            height={160}
            priority
          />
        </div>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">

          <h1 className="text-3xl md:text-6xl font-bold">
            Premium Windows & Doors
          </h1>

          <p className="mt-4 text-neutral-200 max-w-xl text-lg">
            Newleaf Windows & Doors - quality installations across your area.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">

            <a
              href="tel:01536601292"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition shadow-lg"
            >
              📞 Call The Experts
            </a>

            <a
              href="mailto:info@newleafwindows.com"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              ✉️ Email Us
            </a>

            <a
              href="/gallery"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              View Our Work
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}