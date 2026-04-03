import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import VideoShowcase, { type VideoItem } from "@/components/VideoShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function getHeroImages(): string[] {
  const dir = path.join(process.cwd(), "public/content/pictures");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .filter((f) => !f.startsWith("placeholder") && !f.startsWith("profile_pic"));

  // Pick a few standout images — first image from different posts
  const firsts = files.filter(
    (f) => f.endsWith("_0.jpg") || !/_\d+\.jpg$/.test(f)
  );

  return firsts.slice(0, 5).map((f) => `/content/pictures/${f}`);
}

function getGalleryItems(): GalleryItem[] {
  const dir = path.join(process.cwd(), "public/content/pictures");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .filter((f) => !f.startsWith("placeholder"))
    .filter((f) => !f.startsWith("profile_pic"));

  // Pick a curated set — one image per post for variety (use _0 or standalone)
  const curated = files.filter(
    (f) => f.endsWith("_0.jpg") || !/_\d+\.jpg$/.test(f)
  );

  const spans: Array<"tall" | "wide" | "normal"> = [
    "tall", "normal", "normal", "wide", "normal", "tall",
    "normal", "normal", "wide", "normal", "tall", "normal",
  ];

  return curated.slice(0, 18).map((file, i) => ({
    src: `/content/pictures/${file}`,
    alt: `Ari @stiziyo - ${file.replace(/pic_|\.jpg/g, "")}`,
    span: spans[i % spans.length],
  }));
}

function getVideoItems(): VideoItem[] {
  const dir = path.join(process.cwd(), "public/content/videos");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.mp4$/i.test(f))
    .filter((f) => !f.startsWith("placeholder"));

  // Load post metadata for captions
  let posts: Array<{
    shortcode: string;
    caption: string;
    media_type: number;
  }> = [];
  try {
    const postsPath = path.join(process.cwd(), "content/posts.json");
    posts = JSON.parse(fs.readFileSync(postsPath, "utf-8"));
  } catch {
    // no metadata available
  }

  // Pick the 6 best standalone videos (not carousel fragments)
  const standalone = files.filter((f) => !/_\d+\.mp4$/.test(f));

  return standalone.slice(0, 6).map((file) => {
    const shortcode = file.replace(/^video_/, "").replace(/\.mp4$/, "");
    const post = posts.find((p) => p.shortcode === shortcode);
    const caption = post?.caption || "";
    const title = caption.split("\n")[0]?.slice(0, 50) || "Video";
    const description =
      caption.split("\n").slice(1).join(" ").slice(0, 80) || "By Ari @stiziyo";

    return { src: `/content/videos/${file}`, title, description };
  });
}

export default function Home() {
  const heroImages = getHeroImages();
  const galleryItems = getGalleryItems();
  const videoItems = getVideoItems();

  return (
    <>
      <Navbar />
      <main>
        <Hero images={heroImages} />
        <Gallery items={galleryItems} />
        <VideoShowcase videos={videoItems} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
