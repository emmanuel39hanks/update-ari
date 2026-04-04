"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-black/30 text-xs font-mono tracking-[0.4em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              Ready to start
              <br />a project?
            </h2>
            <p className="mt-4 text-muted text-lg">
              Let&apos;s create something powerful together. Reach out directly or fill in the form.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/30 font-mono uppercase tracking-wider">Email</p>
                  <a href="mailto:ari@roomninestudios.com" className="text-sm text-black/70 hover:text-black transition-colors">ari@roomninestudios.com</a>
                  <br />
                  <a href="mailto:michael@roomninestudios.com" className="text-sm text-black/70 hover:text-black transition-colors">michael@roomninestudios.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/30 font-mono uppercase tracking-wider">Phone</p>
                  <a href="tel:+260774953092" className="text-sm text-black/70 hover:text-black transition-colors">+260 774 953 092</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black/30 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-sm text-black/70">Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-10 rounded-2xl bg-black/[0.03] border border-black/5">
            <h3 className="text-lg font-bold mb-6">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="text-xs font-mono text-black/40 uppercase tracking-wider">Name</label>
                <input id="name" type="text" className="w-full mt-2 bg-white border border-black/10 rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-black/30 transition-colors placeholder:text-black/25" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-black/40 uppercase tracking-wider">Email</label>
                <input id="email" type="email" className="w-full mt-2 bg-white border border-black/10 rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-black/30 transition-colors placeholder:text-black/25" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="service" className="text-xs font-mono text-black/40 uppercase tracking-wider">Service</label>
                <select id="service" className="w-full mt-2 bg-white border border-black/10 rounded-lg px-4 py-3 text-sm text-black/70 outline-none focus:border-black/30 transition-colors">
                  <option value="">Select a service</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="design">Visual Design</option>
                  <option value="audio">Audio & Video</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-black/40 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={4} className="w-full mt-2 bg-white border border-black/10 rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-black/30 transition-colors resize-none placeholder:text-black/25" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full py-3.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/85 transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
