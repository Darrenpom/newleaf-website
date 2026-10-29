import Link from "next/link";

const showrooms = [
  {
    title: "Residence",
    description:
      "Explore the Residence virtual showroom and discover distinctive window and door designs.",
    href: "https://www.corby-doubleglazing.co.uk/virtual-showrooms/residence/",
    button: "Explore Residence",
  },
  {
    title: "Corby Showroom",
    description:
      "Take a virtual look around the Corby showroom and find inspiration for your home.",
    href: "https://www.corby-doubleglazing.co.uk/virtual-showrooms/corby/",
    button: "Explore Corby Showroom",
  },
];

export default function ShowroomPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.16),transparent_48%),linear-gradient(to_bottom,#11110f,#050505_72%)]"
      />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="w-fit text-sm font-medium tracking-wide text-yellow-400 transition hover:text-yellow-200"
        >
          ← Back to Newleaf
        </Link>

        <div className="mx-auto my-auto w-full max-w-5xl py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-yellow-500 sm:text-sm">
            Newleaf Windows &amp; Doors
          </p>

          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Visit Our Showrooms
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Explore our virtual showrooms and find inspiration for your next
            window or door project.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2 md:gap-8">
            {showrooms.map((showroom, index) => (
              <article
                key={showroom.title}
                className="group flex min-h-[330px] flex-col rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-7 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/70 sm:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">
                  0{index + 1} &nbsp; | &nbsp; VIRTUAL SHOWROOM
                </p>

                <h2 className="mt-10 font-serif text-3xl font-medium text-white sm:text-4xl">
                  {showroom.title}
                </h2>

                <p className="mt-4 max-w-md leading-relaxed text-neutral-300">
                  {showroom.description}
                </p>

                <a
                  href={showroom.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-3 rounded-lg border border-yellow-500 bg-yellow-500 px-6 py-3.5 text-sm font-bold tracking-wide text-black transition hover:border-yellow-300 hover:bg-yellow-300"
                >
                  {showroom.button}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs tracking-wide text-neutral-500">
            Each virtual showroom opens in a new tab.
          </p>
        </div>
      </section>
    </main>
  );
}