"use client";

export interface VideoItem {
  src: string;
  title: string;
  description: string;
}

export default function VideoShowcase({ videos }: { videos: VideoItem[] }) {
  return (
    <section id="videos" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-black/40 text-sm font-mono tracking-[0.3em] uppercase mb-4">
            Motion
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">
            Video Content
          </h2>
          <p className="mt-4 text-muted max-w-lg">
            Moving stories that capture attention and inspire action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-surface-light hover-lift"
            >
              <div className="relative aspect-[9/16] bg-black">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:opacity-0 transition-opacity">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-sm text-muted mt-1">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
