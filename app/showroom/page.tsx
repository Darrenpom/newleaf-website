import Image from "next/image";
import Link from "next/link";

export default function ShowroomPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-16">

        <Image
          src="/showroom-fresh-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/60"></div>

        <div className="relative z-10 text-center max-w-4xl mb-8 rounded-2xl border border-white/35 bg-white/15 p-5 shadow-2xl backdrop-blur-[1px] md:p-7">
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-neutral-950 mb-4 tracking-wide">
            Visit Our Showroom
          </h1>

          <p className="text-lg md:text-2xl font-medium text-yellow-800 mb-3 tracking-wide">
            Newleaf Windows & Doors
          </p>

          <p className="text-sm md:text-xl text-neutral-800 font-medium tracking-wide">
            Unit 5, Pipewell Road, Desborough, NN14 2SW
          </p>
        </div>

        {/* PHONE STYLE VIDEO */}
        <div className="relative z-10 flex justify-center">

          <div className="w-[320px] md:w-[380px] overflow-hidden rounded-[32px] shadow-2xl">

            <video
              src="/videos/showroom.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto"
            />

          </div>

        </div>

        <Link
          href="/"
          className="relative z-10 inline-block mt-10 font-serif text-xl font-medium tracking-wide text-neutral-950 drop-shadow-md transition hover:text-yellow-700"
        >
          ← Back to Home
        </Link>

      </section>

    </main>
  );
}
