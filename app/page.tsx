import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero.png')",
      }}
    >
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/logo.png"
          alt="Newleaf Windows & Doors"
          width={600}
          height={160}
          priority
        />
      </div>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 tracking-[0.4em] text-amber-400">
          DESBOROUGH • CORBY • KETTERING
        </p>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Premium Windows & Doors,
          <br />
          Fitted Properly.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-neutral-200">
          Newleaf Windows & Doors supplies and installs quality windows,
          composite doors, bifolds, French doors and glazing solutions
          across Northamptonshire and beyond.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="tel:07944328927"
            className="rounded-2xl bg-amber-400 px-8 py-4 font-semibold text-black"
          >
            Call Darren
          </a>

          <a
            href="mailto:darrenpage@newleafwindows.com"
            className="rounded-2xl border border-white px-8 py-4 font-semibold"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </main>
  );
}