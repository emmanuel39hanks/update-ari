import Image from "next/image";

const PROJECTS = [
  { title: "Ecobank Campaign", category: "Digital Marketing", image: "/content/pictures/pic_DUqZUifjMiP_0.jpg" },
  { title: "Nandos Rebrand", category: "Visual Design", image: "/content/pictures/pic_DSu5UcAjMhM_0.jpg" },
  { title: "GIZ Documentary", category: "Audio & Video", image: "/content/pictures/pic_DRuehg2DB4E_0.jpg" },
  { title: "Amarula Launch", category: "Brand Content", image: "/content/pictures/pic_DNdYp5osLuB_0.jpg" },
  { title: "Cremosa", category: "Digital Marketing", image: "/content/pictures/pic_DRH41ygDM0D_0.jpg" },
  { title: "Daytona SA", category: "Visual Design", image: "/content/pictures/pic_DVwB7ctjPHD_0.jpg" },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-black/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Our Work</h2>
          </div>
          <p className="text-muted max-w-sm">
            A selection of brand content and video production projects we&apos;ve brought to life from Lusaka, Zambia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden hover-lift cursor-pointer">
              <div className="relative aspect-[4/3] bg-surface-light overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-mono tracking-wider uppercase">{project.category}</p>
                  <h3 className="text-white font-bold text-lg mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
