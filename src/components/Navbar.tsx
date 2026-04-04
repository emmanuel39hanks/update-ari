"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#team", label: "Team" },
    { href: "#clients", label: "Clients" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:flex md:justify-center">
      {/* Top bar */}
      <div
        className={`nav-pill transition-all duration-500 w-full md:w-auto px-5 md:px-4 flex items-center justify-between md:justify-start gap-2 ${
          scrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="https://roomnine-cdn.vercel.app/assets/logos/header_logo.png"
            alt="Room Nine Studios"
            width={36}
            height={36}
            className="object-contain"
            unoptimized
          />
          <span className="text-sm font-bold tracking-tight">Room Nine</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5 ml-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2.5 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors ml-1"
          >
            Start a Project
          </a>
        </div>

        <button
          className="md:hidden p-2 hover:bg-black/5 transition-colors rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white z-[60] flex flex-col">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
              <Image
                src="https://roomnine-cdn.vercel.app/assets/logos/header_logo.png"
                alt="Room Nine Studios"
                width={32}
                height={32}
                className="object-contain"
                unoptimized
              />
              <span className="text-sm font-bold tracking-tight">Room Nine</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center px-6 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-3xl font-black tracking-tight text-black hover:text-black/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 pb-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-4 bg-black text-white text-base font-medium text-center rounded-xl"
            >
              Start a Project
            </a>
            <p className="text-center text-xs text-muted mt-3">ari@roomninestudios.com</p>
          </div>
        </div>
      )}
    </nav>
  );
}
