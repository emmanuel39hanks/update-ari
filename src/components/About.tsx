export default function About() {
  const pillars = [
    { title: "Strategy-First", desc: "Every project begins with a clear strategic foundation — from brand content to digital marketing." },
    { title: "In-House Production", desc: "End-to-end creative and video production under one roof for consistency and quality." },
    { title: "Corporate Experience", desc: "Trusted by leading brands and institutions across Africa as a reliable creative agency." },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-black/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">About Us</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              A strategic content
              <br />& production agency
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted leading-relaxed text-lg">
              Room Nine Studios is a strategic content and production agency based in Lusaka, Zambia. We specialise in brand content, digital marketing, visual design, and audio production — helping businesses, organisations, and creatives tell their stories with clarity and impact.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              Founded on the belief that great content starts with great strategy, we work closely with our clients to develop concepts, campaigns, and assets that are not only visually striking but strategically effective.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl border border-black/6 hover-lift">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
