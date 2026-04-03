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
      gsap.from("#about p", {
        scrollTrigger: { trigger: "#about", start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      // About pillars stagger
      gsap.from("#about .hover-lift", {
        scrollTrigger: { trigger: "#about .hover-lift", start: "top 85%" },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
      });

      // --- SERVICES section: PIN & horizontal reveal ---
      const serviceCards = gsap.utils.toArray<HTMLElement>("#services .group, #services [class*='border-white']");
      if (serviceCards.length > 0) {
        gsap.from(serviceCards, {
          scrollTrigger: {
            trigger: "#services",
            start: "top 60%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // --- SERVICES pinned text reveal ---
      const servicesSection = document.querySelector("#services");
      if (servicesSection) {
        ScrollTrigger.create({
          trigger: "#services",
          start: "top top",
          end: "bottom bottom",
          pin: "#services h2",
          pinSpacing: false,
        });
      }

      // --- WORK section: scale-in cards ---
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
          scrollTrigger: { trigger: item, start: "top 90%" },
          y: 50 + (i % 3) * 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      // --- TEAM: circular reveals ---
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

      // --- CLIENTS: logo marquee stagger ---
      const clientLogos = gsap.utils.toArray<HTMLElement>("#clients [class*='aspect-']");
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
        scrollTrigger: { trigger: "#contact", start: "top 60%" },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // --- Horizontal line that grows across sections ---
      const sections = gsap.utils.toArray<HTMLElement>("section");
      sections.forEach((section) => {
        const heading = section.querySelector("h2");
        if (heading) {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            clipPath: "inset(0 100% 0 0)",
            duration: 1.2,
            ease: "power4.inOut",
          });
        }
      });

      // --- Parallax on hero ---
      gsap.to(".hero-parallax", {
        scrollTrigger: {
          trigger: ".hero-parallax",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 150,
        scale: 1.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
