"use client";

import { useState } from "react";
import Image from "next/image";

export interface GalleryItem {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-black/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">Content</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Visual Stories</h2>
            </div>
            <p className="text-muted max-w-sm">
              A curated collection of content from Ari & Jay — the creative force behind Room Nine.
            </p>
          </div>

          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid group cursor-pointer hover-lift rounded-xl overflow-hidden"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className={`relative bg-surface-light ${item.span === "tall" ? "aspect-[3/4]" : item.span === "wide" ? "aspect-[4/3]" : "aspect-square"}`}>
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 cursor-pointer" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={() => setSelectedImage(null)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full animate-scale-in">
            <Image src={selectedImage} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}
    </>
  );
}
