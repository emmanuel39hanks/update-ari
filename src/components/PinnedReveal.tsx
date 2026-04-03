"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const words = text.querySelectorAll(".reveal-word");

    const ctx = gsap.context(() => {
      // Pin the section while we reveal words
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${window.innerHeight * 2.5}`,
          pin: true,
          scrub: 1,
        },
      });

      // Reveal each word from blurred/transparent to sharp/visible
      words.forEach((word, i) => {
        tl.fromTo(
          word,
          { opacity: 0.08, filter: "blur(10px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 1 },
          i * 0.5
        );
      });

      // After all words revealed, scale down and fade
      tl.to(text, {
        scale: 0.92,
        opacity: 0.6,
        duration: 1,
      });

      // Counter animation
      const counters = section.querySelectorAll(".counter-value");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-value") || "0");
        gsap.fromTo(
          counter,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-snug">
          <span className="reveal-word inline-block mr-[0.3em]">We</span>
          <span className="reveal-word inline-block mr-[0.3em]">don&apos;t</span>
          <span className="reveal-word inline-block mr-[0.3em]">just</span>
          <span className="reveal-word inline-block mr-[0.3em]">create</span>
          <span className="reveal-word inline-block mr-[0.3em]">content.</span>
          <br className="hidden md:block" />
          <span className="reveal-word inline-block mr-[0.3em]">We</span>
          <span className="reveal-word inline-block mr-[0.3em]">build</span>
          <span className="reveal-word inline-block mr-[0.3em] text-white/40">brand</span>
          <span className="reveal-word inline-block">ecosystems.</span>
        </div>

        {/* Stats that count up */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <p className="counter-value text-4xl md:text-6xl font-black" data-value="63">0</p>
            <p className="text-xs text-white/30 font-mono tracking-wider mt-2 uppercase">Projects</p>
          </div>
          <div>
            <p className="counter-value text-4xl md:text-6xl font-black" data-value="11">0</p>
            <p className="text-xs text-white/30 font-mono tracking-wider mt-2 uppercase">Clients</p>
          </div>
          <div>
            <p className="counter-value text-4xl md:text-6xl font-black" data-value="3">0</p>
            <p className="text-xs text-white/30 font-mono tracking-wider mt-2 uppercase">Creatives</p>
          </div>
        </div>
      </div>
    </div>
  );
}
