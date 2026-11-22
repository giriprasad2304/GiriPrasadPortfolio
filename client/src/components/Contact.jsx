import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/giriprasad2304' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/giri-prasad2304' }
  ];

  return (
    <section id="contact" className="py-24 border-t border-zinc-900/5 bg-card-dark/30 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute left-1/2 bottom-0 w-96 h-96 glow-bg-cyan -z-10 -translate-x-1/2 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 block mb-2">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 font-light tracking-wide mb-4">Let's build something extraordinary</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            I am currently searching for summer internship slots and junior full-stack developer positions. If you like my profile, feel free to reach out directly!
          </p>
        </div>

        {/* Centered Panel */}
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Email and Location Details */}
          <div className="glass-panel p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-400/10 border border-teal-400/20 text-teal-500 rounded-xl">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Email Address</h4>
                <a href="mailto:giriprasad2304@gmail.com" className="text-zinc-900 hover:text-slate-300 transition-colors text-sm">
                  giriprasad2304@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-slate-500/10 border border-slate-500/20 text-slate-400 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">Primary Location</h4>
                <p className="text-zinc-900 text-sm">Vishakhapatnam, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass-panel p-8 rounded-2xl flex items-center justify-between">
            <span className="text-xs text-zinc-600 font-semibold uppercase tracking-wider font-sans">Follow Me</span>
            <div className="flex space-x-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/60 border border-slate-300 backdrop-blur-lg hover:border-teal-400/40 hover:bg-black/10 text-zinc-600 hover:text-zinc-900 rounded-lg transition-all"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Grid dot aesthetic element */}
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center">
            <span className="text-[10px] text-slate-500 font-sans uppercase tracking-widest mb-3">System Node Diagnostics</span>
            <div className="grid grid-cols-12 gap-2 opacity-35">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className={`w-3.5 h-3.5 rounded-[2px] transition-all duration-300 hover:scale-125 hover:bg-slate-400 cursor-pointer ${i % 7 === 0 ? 'bg-teal-400' : i % 5 === 0 ? 'bg-slate-400' : 'bg-slate-300'}`}></div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
