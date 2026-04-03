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
import { CDN } from "@/lib/cdn";

const GALLERY_ITEMS: GalleryItem[] = [
  { src: `${CDN}/content/pictures/pic_C2c1mYBIMbe.jpg`, alt: "Room Nine Studios", span: "tall" },
  { src: `${CDN}/content/pictures/pic_C35knXSIpTy_0.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/jay/pictures/pic_DVtdqnAjZm2.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_C5gzJe4oMi2.jpg`, alt: "Room Nine Studios", span: "wide" },
  { src: `${CDN}/content/pictures/pic_C82PXTOoh3X.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/jay/pictures/pic_DVwB7ctjPHD.jpg`, alt: "Room Nine Studios", span: "tall" },
  { src: `${CDN}/content/pictures/pic_C8fJEJkoxc3_0.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_CmOsXc8IX6P.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_CqGs1k6ou9i.jpg`, alt: "Room Nine Studios", span: "wide" },
  { src: `${CDN}/content/pictures/pic_DIzRigaouSo.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_DKzu5aUoFgS.jpg`, alt: "Room Nine Studios", span: "tall" },
  { src: `${CDN}/content/pictures/pic_DKsWN_3Ib-E.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_DO6XP-VjOux.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_DSc5kveDOIr.jpg`, alt: "Room Nine Studios", span: "wide" },
  { src: `${CDN}/content/pictures/pic_DSfcg0wDSMz.jpg`, alt: "Room Nine Studios", span: "normal" },
  { src: `${CDN}/content/pictures/pic_DSm320djHNK.jpg`, alt: "Room Nine Studios", span: "tall" },
];

export default function Home() {
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
        <Gallery items={GALLERY_ITEMS} />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
