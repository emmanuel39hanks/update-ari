"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background image carousel */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <p className="text-white/50 text-xs font-mono tracking-[0.4em] uppercase mb-4 animate-fade-up">
            @stiziyo
          </p>

          <h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-black tracking-tighter leading-[0.85] text-white animate-fade-up animation-delay-200">
            ARI
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/60 max-w-md animate-fade-up animation-delay-400">
            Creative visionary. Content creator. Storyteller.
          </p>

          <div className="mt-8 flex flex-row gap-3 animate-fade-up animation-delay-600">
            <a
              href="#gallery"
              className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all"
            >
              Explore
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/25 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all"
            >
              Work With Me
            </a>
          </div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 flex gap-1.5 animate-fade-in animation-delay-800">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-8 bg-white" : "w-2 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
