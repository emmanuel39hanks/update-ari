import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PinnedReveal from "@/components/PinnedReveal";
import Services from "@/components/Services";
import Work from "@/components/Work";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

function getGalleryItems(): GalleryItem[] {
  const ariDir = path.join(process.cwd(), "public/content/pictures");
  const jayDir = path.join(process.cwd(), "public/content/jay/pictures");

  const ariFiles = fs.existsSync(ariDir)
    ? fs.readdirSync(ariDir)
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .filter((f) => !f.startsWith("placeholder") && !f.startsWith("profile_pic"))
        .filter((f) => f.endsWith("_0.jpg") || !/_\d+\.jpg$/.test(f))
    : [];

  const jayFiles = fs.existsSync(jayDir)
    ? fs.readdirSync(jayDir)
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .filter((f) => !f.startsWith("profile_pic"))
    : [];

  const spans: Array<"tall" | "wide" | "normal"> = [
    "tall", "normal", "normal", "wide", "normal", "tall",
    "normal", "normal", "wide", "normal", "tall", "normal",
  ];

  const ariItems: GalleryItem[] = ariFiles.slice(0, 12).map((f, i) => ({
    src: `/content/pictures/${f}`,
    alt: `Ari @stiziyo - Room Nine Studios`,
    span: spans[i % spans.length],
  }));

  const jayItems: GalleryItem[] = jayFiles.slice(0, 4).map((f, i) => ({
    src: `/content/jay/pictures/${f}`,
    alt: `Jay @jaytrigga_official - Room Nine Studios`,
    span: spans[(i + 3) % spans.length],
  }));

  const mixed: GalleryItem[] = [];
  let ai = 0, ji = 0;
  for (let i = 0; i < ariItems.length + jayItems.length; i++) {
    if (i % 4 === 2 && ji < jayItems.length) {
      mixed.push(jayItems[ji++]);
    } else if (ai < ariItems.length) {
      mixed.push(ariItems[ai++]);
    } else if (ji < jayItems.length) {
      mixed.push(jayItems[ji++]);
    }
  }

  return mixed;
}

export default function Home() {
  const galleryItems = getGalleryItems();

  return (
    <>
      <Navbar />
      <ScrollAnimations />
      <main>
        <Hero />
        <About />
        <PinnedReveal />
        <Services />
        <Work />
        <HorizontalShowcase />
        <Gallery items={galleryItems} />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
