"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`nav-pill transition-all duration-500 px-2 flex items-center gap-1 ${
          scrolled ? "py-1.5" : "py-2"
        }`}
      >
        {/* Logo pill */}
        <Link
          href="/"
          className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-bold tracking-tight hover:bg-black/80 transition-colors"
        >
          ARI
        </Link>

        {/* Nav pills — desktop */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="#gallery"
            className="px-4 py-2.5 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all"
          >
            Gallery
          </a>
          <a
            href="#videos"
            className="px-4 py-2.5 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all"
          >
            Videos
          </a>
          <a
            href="#about"
            className="px-4 py-2.5 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
          >
            Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden px-3 py-2.5 rounded-full hover:bg-black/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 md:hidden nav-pill p-3 flex flex-col gap-1">
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all">
            Gallery
          </a>
          <a href="#videos" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all">
            Videos
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-full text-sm text-muted hover:bg-black/5 hover:text-black transition-all">
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-full bg-black text-white text-sm font-medium text-center">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
