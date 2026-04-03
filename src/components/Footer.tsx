"use client";

import { useEffect, useRef } from "react";

const WORDS = ["ARI", "CREATE", "VISION", "STIZIYO", "DREAM", "BUILD"];

export default function Footer() {
  const textRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const morphText = () => {
      // Transition out
      el.style.transition = "opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease";
      el.style.opacity = "0";
      el.style.filter = "blur(8px)";
      el.style.transform = "scaleX(1.3) scaleY(0.7)";

      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % WORDS.length;
        el.textContent = WORDS[indexRef.current];

        // Random transform for variety
        const scaleX = 0.8 + Math.random() * 0.4;
        const scaleY = 0.85 + Math.random() * 0.3;
        el.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
        el.style.opacity = "0";
        el.style.filter = "blur(4px)";

        // Force reflow
        void el.offsetHeight;

        // Transition in
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
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Huge morphing text */}
      <div className="flex flex-col items-center justify-center py-24 md:py-40">
        <div
          ref={textRef}
          className="text-[18vw] md:text-[15vw] lg:text-[12vw] font-black tracking-tighter leading-none select-none text-center"
          style={{ willChange: "transform, opacity, filter" }}
        >
          ARI
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-white/40 text-sm font-mono tracking-[0.3em] uppercase">
          @stiziyo
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Ari. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/stiziyo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://instagram.com/roomninestudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Room Nine
            </a>
            <a
              href="https://instagram.com/letsgetlayzee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Layzee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
