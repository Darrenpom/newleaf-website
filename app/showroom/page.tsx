import Image from "next/image";
import Link from "next/link";

export default function ShowroomPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
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

        <div className="relative z-10 mb-8 max-w-4xl rounded-2xl border border-white/35 bg-white/15 p-5 text-center shadow-2xl backdrop-blur-[1px] md:p-7">
          <h1 className="mb-4 font-serif text-4xl font-medium tracking-wide text-neutral-950 md:text-6xl">
            Showroom Video
          </h1>

          <p className="mb-3 font-medium tracking-wide text-yellow-800 md:text-2xl">
            Newleaf Windows &amp; Doors
          </p>
        </div>

        {/* PHONE STYLE VIDEO */}
        <div className="relative z-10 flex justify-center">
          <div className="w-[320px] overflow-hidden rounded-[32px] shadow-2xl md:w-[380px]">
            <video
              src="/videos/showroom.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-auto w-full"
            />
          </div>
        </div>

        <Link
          href="/"
          className="relative z-10 mt-10 inline-block font-serif text-xl font-medium tracking-wide text-neutral-950 drop-shadow-md transition hover:text-yellow-700"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}