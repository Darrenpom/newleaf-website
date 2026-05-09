export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold text-amber-400">
          Newleaf Windows & Doors
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Premium windows, doors and glazing solutions across Desborough,
          Corby, Kettering and surrounding areas.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="tel:07944328927"
            className="rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-black"
          >
            Call Now
          </a>

          <a
            href="mailto:darrenpage@newleafwindows.com"
            className="rounded-2xl border border-white px-6 py-4"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}