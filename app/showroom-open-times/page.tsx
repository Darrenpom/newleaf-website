import Link from "next/link";
import Image from "next/image";

export default function ShowroomOpenTimes() {
  const times = [
    ["Monday", "9:00am - 5:00pm"],
    ["Tuesday", "9:00am - 5:00pm"],
    ["Wednesday", "9:00am - 5:00pm"],
    ["Thursday", "9:00am - 5:00pm"],
    ["Friday", "9:00am - 4:00pm"],
    ["Saturday", "9:00am - 1:00pm"],
    ["Sunday", "Closed"],
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/showroom-open-times-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-yellow-500/40 bg-black/25 p-6 text-center shadow-2xl backdrop-blur-[2px] md:p-10">
          <Link href="/" className="text-sm font-medium text-yellow-400 hover:text-yellow-300">
            Back to Home
          </Link>

          <h1 className="mt-8 text-4xl font-bold text-yellow-500 md:text-5xl">
            Showroom Open Times
          </h1>

          <p className="mt-4 text-lg text-neutral-300">
            Visit our showroom at 5 Pipewell Industrial Estate, Kettering, NN14 2SW.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-yellow-500/35 bg-neutral-950/55 shadow-2xl">
            {times.map(([day, time]) => (
              <div
                key={day}
                className="flex items-center justify-between border-b border-white/10 px-6 py-4 last:border-b-0"
              >
                <span className="font-semibold text-white">{day}</span>
                <span className="text-yellow-400">{time}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:01536601292"
              className="rounded-2xl bg-yellow-500 px-8 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Call 01536 601292
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=5+Pipewell+Industrial+Estate,+Kettering,+NN14+2SW"
              className="rounded-2xl border-2 border-yellow-500 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
