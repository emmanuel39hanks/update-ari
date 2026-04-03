"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- ABOUT section: stagger reveal ---
      gsap.from("#about h2", {
        scrollTrigger: { trigger: "#about", start: "top 80%" },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from("#about > div > div:last-child p", {
        scrollTrigger: { trigger: "#about", start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from("#about .hover-lift", {
        scrollTrigger: { trigger: "#about .hover-lift", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
      });

      // --- SERVICES: cards stagger in ---
      gsap.from("#services h2", {
        scrollTrigger: { trigger: "#services", start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      const serviceCards = gsap.utils.toArray<HTMLElement>("#services [class*='border-white']");
      if (serviceCards.length > 0) {
        gsap.from(serviceCards, {
          scrollTrigger: { trigger: "#services", start: "top 60%" },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // --- WORK: scale-in cards ---
      const workCards = gsap.utils.toArray<HTMLElement>("#work .hover-lift");
      gsap.from(workCards, {
        scrollTrigger: { trigger: "#work", start: "top 70%" },
        scale: 0.85,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });

      // --- GALLERY: masonry fade in ---
      const galleryItems = gsap.utils.toArray<HTMLElement>("#gallery .hover-lift");
      galleryItems.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 92%" },
          y: 40 + (i % 3) * 15,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      // --- TEAM: bounce in ---
      const teamMembers = gsap.utils.toArray<HTMLElement>("#team .group");
      gsap.from(teamMembers, {
        scrollTrigger: { trigger: "#team", start: "top 70%" },
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.4)",
      });

      // --- CLIENTS: logo stagger ---
      const clientLogos = gsap.utils.toArray<HTMLElement>("#clients .hover-lift");
      gsap.from(clientLogos, {
        scrollTrigger: { trigger: "#clients", start: "top 75%" },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });

      // --- CONTACT: split reveal ---
      gsap.from("#contact h2", {
        scrollTrigger: { trigger: "#contact", start: "top 70%" },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from("#contact form", {
        scrollTrigger: { trigger: "#contact form", start: "top 80%" },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
