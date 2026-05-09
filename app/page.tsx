import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative">

        {/* HERO IMAGE */}
        <img
          src="/hero.png"
          className="w-full h-[70vh] object-cover"
          alt="Hero"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

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

          <p className="mt-4 text-neutral-300 max-w-xl">
            Newleaf Windows & Doors - quality installations across your area.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">

            <a
              href="tel:01536601292"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl"
            >
              Call The Experts
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