"use client";

import { useState } from "react";
import Image from "next/image";
import { CDN } from "@/lib/cdn";

const BOOTH_IMAGES = [
  `${CDN}/content/pictures/pic_DRuehg2DB4E_0.jpg`,
  `${CDN}/content/pictures/pic_DSu5UcAjMhM_0.jpg`,
  `${CDN}/content/pictures/pic_DVwB7ctjPHD_0.jpg`,
  `${CDN}/content/pictures/pic_DNdYp5osLuB_0.jpg`,
  `${CDN}/content/pictures/pic_DMAhPmfotm9_0.jpg`,
  `${CDN}/content/pictures/pic_DQOkg-njYLg_0.jpg`,
  `${CDN}/content/jay/pictures/pic_DVtdqnAjZm2.jpg`,
];

const SERVICES = [
  {
    title: "Brand Content & Digital Marketing",
    desc: "Strategic storytelling, digital marketing content, and campaigns that connect brands with the right audiences.",
    items: ["Social media strategy & management", "Content creation & copywriting", "Paid digital advertising", "Brand positioning & messaging", "Campaign planning & execution", "Analytics & performance reporting"],
  },
  {
    title: "Visual & Graphic Design",
    desc: "Compelling visual identities and brand design systems crafted to elevate businesses across Zambia and beyond.",
    items: ["Brand identity & logo design", "Print & packaging design", "Presentation design", "Motion graphics & animation", "UI/UX design", "Environmental & signage design"],
  },
  {
    title: "Audio Production & Broadcast Media",
    desc: "Professional audio and broadcast media production — from jingles and sonic branding to full-scale video production.",
    items: ["Radio & TV commercial production", "Jingles & sonic branding", "Podcast production", "Voice-over recording", "Music production & licensing"],
  },
];

function PhotoBooth() {
  const [stack, setStack] = useState(BOOTH_IMAGES);

  const handleClick = () => {
    setStack((prev) => {
      const next = [...prev];
      const top = next.shift()!;
      next.push(top);
      return next;
    });
  };

  return (
    <div
      className="relative w-full aspect-[3/4] max-w-sm mx-auto cursor-pointer"
      onClick={handleClick}
    >
      {stack.slice(0, 5).map((src, i) => {
        const isTop = i === 0;
        const rotation = [0, -6, 4, -3, 7][i];
        const offsetX = [0, -12, 8, -5, 15][i];
        const offsetY = [0, 6, 12, 18, 24][i];
        const scale = 1 - i * 0.03;

        return (
          <div
            key={src}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              transform: `rotate(${rotation}deg) translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale})`,
              zIndex: 10 - i,
              transition: isTop ? "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" : "all 0.4s ease",
            }}
          >
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            {!isTop && (
              <div className="absolute inset-0 bg-black/10" />
            )}
          </div>
        );
      })}
      <p className="absolute -bottom-8 left-0 right-0 text-center text-white/20 text-xs font-mono">
        Click to shuffle
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with photo booth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <p className="text-white/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              End-to-end creative
              <br />& strategic services
            </h2>
            <p className="mt-4 text-white/40 text-lg">
              From video production to digital marketing content — designed to elevate your brand.
            </p>

            {/* Quick stats */}
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-black">3</p>
                <p className="text-xs text-white/25 font-mono uppercase mt-1">Core Services</p>
              </div>
              <div>
                <p className="text-2xl font-black">20+</p>
                <p className="text-xs text-white/25 font-mono uppercase mt-1">Capabilities</p>
              </div>
              <div>
                <p className="text-2xl font-black">100%</p>
                <p className="text-xs text-white/25 font-mono uppercase mt-1">In-House</p>
              </div>
            </div>
          </div>

          {/* Photo booth stack */}
          <div className="flex items-center justify-center py-8">
            <PhotoBooth />
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-xs font-mono text-white/25 mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="text-sm text-white/50 flex items-start gap-2">
                    <span className="text-white/20 mt-1">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-white/8 text-center">
          <h3 className="text-lg font-bold mb-2">Have something unique in mind?</h3>
          <p className="text-white/40 text-sm">We offer tailored solutions for special projects.</p>
          <a href="#contact" className="inline-block mt-4 px-6 py-2.5 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
