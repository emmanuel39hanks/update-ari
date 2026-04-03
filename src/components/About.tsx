import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface-light relative">
              <Image
                src="/content/pictures/profile_pic.jpg"
                alt="Ari - @stiziyo"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 min-w-[180px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5">
              <p className="text-3xl font-black text-black">Verified</p>
              <p className="text-sm text-muted mt-1">Creator & Artist</p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-black/40 text-sm font-mono tracking-[0.3em] uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-black">
              The Creative
              <br />
              Behind the Lens
            </h2>
            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              <p>
                <span className="text-black font-bold text-lg">ARI</span> is a
                verified creative force on Instagram as{" "}
                <span className="text-black font-medium">@stiziyo</span>. Founder
                of{" "}
                <a href="https://instagram.com/roomninestudios" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors">
                  @roomninestudios
                </a>{" "}
                and{" "}
                <a href="https://instagram.com/letsgetlayzee" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors">
                  @letsgetlayzee
                </a>
                , Ari brings a distinct visual style and authentic storytelling
                approach to every project.
              </p>
              <p>
                From striking photography to dynamic video content, every piece is
                crafted with intention — blending artistry with authenticity to
                build brands that stand out.
              </p>
              <p>
                Whether it&apos;s event coverage, brand partnerships, or creative
                projects, Ari brings a unique perspective that elevates every concept
                and captivates audiences.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-black text-black">63</p>
                <p className="text-sm text-muted mt-1">Posts</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">9.9K</p>
                <p className="text-sm text-muted mt-1">Followers</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">&#10003;</p>
                <p className="text-sm text-muted mt-1">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
