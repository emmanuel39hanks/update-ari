"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_IMAGES = [
  "https://roomnine-cdn.vercel.app/content/pictures/pic_DRuehg2DB4E_0.jpg",
  "https://roomnine-cdn.vercel.app/content/pictures/pic_DSu5UcAjMhM_0.jpg",
  "https://roomnine-cdn.vercel.app/content/jay/pictures/pic_DVwB7ctjPHD.jpg",
  "https://roomnine-cdn.vercel.app/content/pictures/pic_DQOkg-njYLg_0.jpg",
  "https://roomnine-cdn.vercel.app/content/pictures/pic_DNNpMyMMNrw_0.jpg",
  "https://roomnine-cdn.vercel.app/content/jay/pictures/pic_DVtdqnAjZm2.jpg",
  "https://roomnine-cdn.vercel.app/content/pictures/pic_DVwB7ctjPHD_0.jpg",
  "https://roomnine-cdn.vercel.app/content/pictures/pic_DMAhPmfotm9_0.jpg",
];

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Only pin on desktop (768px+)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const totalScroll = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      {/* Header label */}
      <div className="px-6 md:px-12 pt-10 md:pt-0 md:absolute md:top-8 md:left-12 z-10">
        <p className="text-white/25 text-xs font-mono tracking-[0.4em] uppercase">Featured Content</p>
      </div>

      {/* Mobile: horizontal scroll strip */}
      {/* Desktop: GSAP pinned horizontal scroll */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-5 px-6 md:p-8 pb-10 md:pb-8 items-center md:h-screen overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Title */}
        <div className="shrink-0 w-[60vw] md:w-[20vw] flex items-center py-10 md:py-0">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">
            Our<br />Visual<br />Work
          </h2>
        </div>

        {SHOWCASE_IMAGES.map((src, i) => (
          <div
            key={i}
            className="showcase-card shrink-0 w-[75vw] md:w-[35vw] lg:w-[28vw] h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative snap-center"
          >
            <Image
              src={src}
              alt={`Showcase ${i + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}

        <div className="shrink-0 w-6 md:w-[10vw]" />
      </div>
    </div>
  );
}
