"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  "/content/pictures/pic_DRuehg2DB4E_0.jpg",
  "/content/pictures/pic_DSu5UcAjMhM_0.jpg",
  "/content/pictures/pic_DNNpMyMMNrw_0.jpg",
  "/content/pictures/pic_DVwB7ctjPHD_0.jpg",
  "/content/pictures/pic_DMAhPmfotm9_0.jpg",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1.5s] ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <Image src={src} alt="" fill className="object-cover" priority={i === 0} unoptimized />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <Image src="/assets/logos/header_logo.png" alt="Room Nine" width={40} height={40} className="rounded" unoptimized />
            <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">Room Nine Studios</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white animate-fade-up animation-delay-200">
            Where Creative
            <br />
            Vision Meets
            <br />
            <span className="text-white/40">Strategic Impact</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/50 max-w-lg animate-fade-up animation-delay-400">
            A strategic content and production agency helping brands tell stories that matter. Based in Lusaka, Zambia.
          </p>

          <div className="mt-8 flex flex-row gap-3 animate-fade-up animation-delay-500">
            <a href="#contact" className="px-7 py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all">
              Start a Project
            </a>
            <a href="#work" className="px-7 py-3.5 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all">
              View Our Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:right-12 flex gap-1.5 animate-fade-in animation-delay-800">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? "w-8 bg-white" : "w-2 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
