"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-white/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              Ready to start
              <br />a project?
            </h2>
            <p className="mt-4 text-white/40 text-lg">
              Let&apos;s create something powerful together. Reach out directly or fill in the form.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/30">Email</p>
                  <a href="mailto:ari@roomninestudios.com" className="text-sm text-white/70 hover:text-white transition-colors">ari@roomninestudios.com</a>
                  <br />
                  <a href="mailto:michael@roomninestudios.com" className="text-sm text-white/70 hover:text-white transition-colors">michael@roomninestudios.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/30">Phone</p>
                  <a href="tel:+260774953092" className="text-sm text-white/70 hover:text-white transition-colors">+260 774 953 092</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/30">Location</p>
                  <p className="text-sm text-white/70">Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-white/8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="text-xs font-mono text-white/30 uppercase tracking-wider">Name</label>
                <input id="name" type="text" className="w-full mt-2 bg-transparent border-b border-white/10 pb-3 text-sm text-white outline-none focus:border-white/40 transition-colors placeholder:text-white/15" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-white/30 uppercase tracking-wider">Email</label>
                <input id="email" type="email" className="w-full mt-2 bg-transparent border-b border-white/10 pb-3 text-sm text-white outline-none focus:border-white/40 transition-colors placeholder:text-white/15" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="service" className="text-xs font-mono text-white/30 uppercase tracking-wider">Service</label>
                <select id="service" className="w-full mt-2 bg-transparent border-b border-white/10 pb-3 text-sm text-white/70 outline-none focus:border-white/40 transition-colors">
                  <option value="" className="bg-black">Select a service</option>
                  <option value="digital" className="bg-black">Digital Marketing</option>
                  <option value="design" className="bg-black">Visual Design</option>
                  <option value="audio" className="bg-black">Audio & Video</option>
                  <option value="other" className="bg-black">Other / Custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-white/30 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={4} className="w-full mt-2 bg-transparent border-b border-white/10 pb-3 text-sm text-white outline-none focus:border-white/40 transition-colors resize-none placeholder:text-white/15" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all mt-4">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
