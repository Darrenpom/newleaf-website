export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-400">
          Desborough • Corby • Kettering
        </p>

        <h1 className="mx-auto max-w-5xl text-5xl font-bold md:text-7xl">
          Premium Windows & Doors, Fitted Properly.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
          Newleaf Windows & Doors supplies and installs quality windows, composite doors,
          bifolds, French doors and glazing solutions across Northamptonshire and beyond.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="tel:07944328927" className="rounded-2xl bg-amber-400 px-8 py-4 font-bold text-black">
            Call Darren
          </a>

          <a href="mailto:darrenpage@newleafwindows.com" className="rounded-2xl border border-white px-8 py-4 font-bold">
            Get a Quote
          </a>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-20 md:grid-cols-3">
        {["Windows", "Composite Doors", "Bifolds & French Doors"].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-amber-400">{item}</h2>
            <p className="mt-3 text-neutral-300">
              Quality products, honest advice and a clean professional finish.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}