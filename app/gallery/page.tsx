"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GalleryPage() {
  const photos = Array.from(
    { length: 108 },
    (_, i) => `/gallery/${i + 1}.jpg`
  ).filter((photo) => !["/gallery/50.jpg", "/gallery/53.jpg"].includes(photo));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  function showPrevious() {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + photos.length) % photos.length
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % photos.length
    );
  }

  function handleTouchEnd(x: number) {
    if (touchStartX === null) return;

    const distance = touchStartX - x;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStartX(null);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-wide text-yellow-400 hover:text-yellow-300"
          >
            Back to Home
          </Link>

          <div className="mx-auto mb-14 mt-8 max-w-5xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-500">
              Completed Work
            </p>

            <h1 className="font-serif text-5xl font-medium leading-tight text-white md:text-7xl">
              Beautiful upgrades,
              <br />
              finished with care.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Real Newleaf installations across local homes, from statement
              front doors to crisp modern windows and bright living spaces.
            </p>

            <div className="mx-auto mt-8 flex max-w-xl items-center gap-5">
              <div className="h-px flex-1 bg-yellow-500/60"></div>
              <div className="h-3 w-3 rotate-45 bg-yellow-500"></div>
              <div className="h-px flex-1 bg-yellow-500/60"></div>
            </div>
          </div>

          <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {photos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 text-left shadow-2xl"
              >
                <Image
                  src={photo}
                  alt={`Completed Newleaf installation ${index + 1}`}
                  width={900}
                  height={700}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activePhoto && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
          onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20"
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl leading-none text-white transition hover:bg-white/20 md:flex"
          >
            ‹
          </button>

          <Image
            src={activePhoto}
            alt={`Completed Newleaf installation ${activeIndex + 1}`}
            width={1400}
            height={1000}
            sizes="100vw"
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            priority
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={showNext}
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl leading-none text-white transition hover:bg-white/20 md:flex"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-black/60 px-5 py-3 text-sm text-neutral-200">
            <button
              type="button"
              onClick={showPrevious}
              className="text-yellow-400 md:hidden"
            >
              Previous
            </button>
            <span>
              {activeIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={showNext}
              className="text-yellow-400 md:hidden"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
