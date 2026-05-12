import Image from "next/image";

export default function GalleryPage() {
  const photos = Array.from(
    { length: 20 },
    (_, i) => `/gallery/${i + 1}.jpg`
  );

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">

      <a
        href="/"
        className="text-yellow-500 hover:underline"
      >
        ← Back to Home
      </a>

      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
        Our Recent Work
      </h1>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg break-inside-avoid"
          >
            <a href={photo} target="_blank">
              <Image
                src={photo}
                alt={`Gallery Image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto hover:scale-105 transition duration-300 cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}