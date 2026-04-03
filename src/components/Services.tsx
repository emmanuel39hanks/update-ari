const SERVICES = [
  {
    title: "Brand Content & Digital Marketing",
    desc: "Strategic storytelling, digital marketing content, and campaigns that connect brands with the right audiences.",
    items: ["Social media strategy & management", "Content creation & copywriting", "Paid digital advertising", "Brand positioning & messaging", "Campaign planning & execution", "Analytics & performance reporting"],
  },
  {
    title: "Visual & Graphic Design",
    desc: "Compelling visual identities and brand design systems crafted to elevate businesses across Zambia and beyond.",
    items: ["Brand identity & logo design", "Print & packaging design", "Presentation design", "Motion graphics & animation", "UI/UX design", "Environmental & signage design"],
  },
  {
    title: "Audio Production & Broadcast Media",
    desc: "Professional audio and broadcast media production — from jingles and sonic branding to full-scale video production.",
    items: ["Radio & TV commercial production", "Jingles & sonic branding", "Podcast production", "Voice-over recording", "Music production & licensing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-white/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            End-to-end creative
            <br />& strategic services
          </h2>
          <p className="mt-4 text-white/40 text-lg">
            From video production to digital marketing content — designed to elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-xs font-mono text-white/25 mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="text-sm text-white/50 flex items-start gap-2">
                    <span className="text-white/20 mt-1">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-white/8 text-center">
          <h3 className="text-lg font-bold mb-2">Have something unique in mind?</h3>
          <p className="text-white/40 text-sm">We offer tailored solutions for special projects.</p>
          <a href="#contact" className="inline-block mt-4 px-6 py-2.5 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-all">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
