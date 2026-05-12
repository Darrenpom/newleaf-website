export default function ShowroomPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">

        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 text-center max-w-4xl mb-10">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-6 drop-shadow-2xl">
            Visit Our Showroom
          </h1>

          <p className="text-2xl md:text-4xl font-semibold text-white mb-4">
            Newleaf Windows & Doors
          </p>

          <p className="text-xl md:text-3xl text-yellow-400 font-medium">
            Unit 5, Pipewell Road, Desborough, NN14 2SW
          </p>
        </div>

        {/* PHONE STYLE VIDEO */}
        <div className="relative z-10 flex justify-center">

          <div className="w-[320px] md:w-[380px] rounded-[40px] border-4 border-yellow-500 shadow-2xl overflow-hidden bg-black">

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

        <a
          href="/"
          className="relative z-10 inline-block mt-10 border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition text-lg"
        >
          ← Back to Home
        </a>

      </section>

    </main>
  );
}