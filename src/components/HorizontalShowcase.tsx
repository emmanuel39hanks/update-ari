"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_IMAGES = [
  "/content/pictures/pic_DRuehg2DB4E_0.jpg",
  "/content/pictures/pic_DSu5UcAjMhM_0.jpg",
  "/content/jay/pictures/pic_DVwB7ctjPHD.jpg",
  "/content/pictures/pic_DQOkg-njYLg_0.jpg",
  "/content/pictures/pic_DNNpMyMMNrw_0.jpg",
  "/content/jay/pictures/pic_DVtdqnAjZm2.jpg",
  "/content/pictures/pic_DVwB7ctjPHD_0.jpg",
  "/content/pictures/pic_DMAhPmfotm9_0.jpg",
];

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth;

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

      // Parallax on each card
      const cards = track.querySelectorAll(".showcase-card");
      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.3 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: gsap.getById?.("horizontal") || undefined,
                start: "left right",
                end: "right left",
                scrub: 1,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      {/* Header */}
      <div className="absolute top-8 left-6 md:left-12 z-10">
        <p className="text-white/25 text-xs font-mono tracking-[0.4em] uppercase">Featured Content</p>
      </div>

      <div ref={trackRef} className="flex gap-5 p-8 items-center h-screen">
        {/* Leading spacer */}
        <div className="shrink-0 w-[20vw] flex items-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight whitespace-nowrap">
            Our<br />Visual<br />Work
          </h2>
        </div>

        {SHOWCASE_IMAGES.map((src, i) => (
          <div
            key={i}
            className="showcase-card shrink-0 w-[70vw] md:w-[40vw] lg:w-[30vw] h-[70vh] rounded-2xl overflow-hidden relative"
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

        {/* Trailing spacer */}
        <div className="shrink-0 w-[20vw]" />
      </div>
    </div>
  );
}
