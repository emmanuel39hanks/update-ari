import Image from "next/image";

const TEAM = [
  {
    name: "Aristaeus Chronis",
    role: "Managing Director",
    bio: "A visionary leader with deep expertise in strategic content and brand development. Ari drives Room Nine's creative direction and business growth.",
    photo: "/assets/team/ari.jpg",
    instagram: "https://www.instagram.com/stiziyo/",
    handle: "@stiziyo",
  },
  {
    name: "Jay",
    role: "Director & Creative Lead",
    bio: "Jay brings raw energy and creative vision to every production, pushing boundaries in content creation and videography.",
    photo: "/content/jay/pictures/profile_pic.jpg",
    instagram: "https://www.instagram.com/jaytrigga_official/",
    handle: "@jaytrigga_official",
  },
  {
    name: "Colleen Gander",
    role: "Creative Strategy Lead",
    bio: "Colleen leads creative strategy at Room Nine Studios, shaping compelling narratives and innovative approaches for every project.",
    photo: "/assets/team/colleen.jpg",
    instagram: null,
    handle: null,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-black/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">The Team</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">The people behind Room Nine</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-surface-light">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-muted mt-1">{member.role}</p>
              <p className="text-sm text-muted mt-3 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-mono text-black/40 hover:text-black transition-colors"
                >
                  {member.handle}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
