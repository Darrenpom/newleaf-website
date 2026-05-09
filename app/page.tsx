export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero.png')",
      }}
    >
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 tracking-[0.3em] text-amber-400">
          DESBOROUGH • CORBY • KETTERING
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Premium Windows & Doors,
          <br />
          Fitted Properly.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-200">
          Newleaf Windows & Doors supplies and installs quality windows,
          composite doors, bifolds, French doors and glazing solutions across
          Northamptonshire and beyond.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="tel:07944328927"
            className="rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-black"
          >
            Call Darren
          </a>

          <a
            href="mailto:darrenpage@newleafwindows.com"
            className="rounded-2xl border border-white px-6 py-4"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </main>
  );
}