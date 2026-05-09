export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <a
        href="/"
        className="text-yellow-500 hover:underline"
      >
        ← Back to Home
      </a>

      <h1 className="text-4xl font-bold text-center mb-4">
        Our Recent Installations
      </h1>

      <p className="text-center text-neutral-400 mb-10">
        Before and after transformations by Newleaf Windows & Doors
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* BEFORE */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">

          <img
            src="/before-after/before1.jpg"
            className="w-full h-auto"
            alt="Before"
          />

          <p className="p-4 text-center text-sm text-neutral-400">
            Before
          </p>

        </div>

        {/* AFTER */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">

          <img
            src="/before-after/after1.jpg"
            className="w-full h-auto"
            alt="After"
          />

          <p className="p-4 text-center text-sm text-neutral-400">
            After
          </p>

        </div>

      </div>

    </main>
  );
}