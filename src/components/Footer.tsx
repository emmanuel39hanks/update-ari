"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const WORDS = ["ROOM NINE", "CREATE", "PRODUCE", "STRATEGY", "IMPACT", "STORIES"];

export default function Footer() {
  const textRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const morphText = () => {
      el.style.transition = "opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease";
      el.style.opacity = "0";
      el.style.filter = "blur(8px)";
      el.style.transform = "scaleX(1.2) scaleY(0.8)";

      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % WORDS.length;
        el.textContent = WORDS[indexRef.current];

        const sx = 0.85 + Math.random() * 0.3;
        const sy = 0.85 + Math.random() * 0.3;
        el.style.transform = `scaleX(${sx}) scaleY(${sy})`;
        el.style.opacity = "0";
        el.style.filter = "blur(4px)";

        void el.offsetHeight;

        el.style.transition = "opacity 0.8s ease, filter 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
        el.style.transform = "scaleX(1) scaleY(1)";
      }, 600);
    };

    const interval = setInterval(morphText, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Giant morphing text */}
      <div className="flex flex-col items-center justify-center py-20 md:py-32">
        <div
          ref={textRef}
          className="text-[14vw] md:text-[11vw] lg:text-[9vw] font-black tracking-tighter leading-none select-none text-center text-white"
          style={{ willChange: "transform, opacity, filter" }}
        >
          ROOM NINE
        </div>
        <p className="mt-4 text-white/25 text-xs font-mono tracking-[0.4em] uppercase">
          Creative Agency — Lusaka, Zambia
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/assets/logos/logo.png" alt="Room Nine" width={24} height={24} className="rounded-full opacity-40" unoptimized />
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Room Nine Studios. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/roomninestudios/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white transition-colors">Instagram</a>
            <a href="https://www.instagram.com/stiziyo/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white transition-colors">@stiziyo</a>
            <a href="https://www.instagram.com/jaytrigga_official/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white transition-colors">@jaytrigga_official</a>
            <a href="mailto:ari@roomninestudios.com" className="text-xs text-white/30 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
