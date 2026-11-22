import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={14} />, url: 'https://github.com/giriprasad' },
    { name: 'LinkedIn', icon: <Linkedin size={14} />, url: 'https://linkedin.com/in/giriprasad' },
    { name: 'Twitter', icon: <Twitter size={14} />, url: 'https://twitter.com/giriprasad' }
  ];

  return (
    <footer className="py-12 border-t border-zinc-900/5 bg-card-dark text-slate-500 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-lg text-zinc-900 font-light tracking-wider">Giri Prasad</span>
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest mt-0.5">Developer Portfolio</span>
          <p className="text-[11px] text-zinc-600 mt-3">
            &copy; {currentYear} Giri Prasad. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-xs text-zinc-600">
          <a href="#home" className="hover:text-zinc-900 transition-colors uppercase tracking-wider">Home</a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors uppercase tracking-wider">Projects</a>
          <a href="#about-skills" className="hover:text-zinc-900 transition-colors uppercase tracking-wider">Skills</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors uppercase tracking-wider">Contact</a>
        </div>

        {/* Social Link Badges */}
        <div className="flex space-x-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/5 border border-zinc-900/5 text-slate-500 hover:text-zinc-900 rounded-full hover:bg-black/10 transition-all"
              title={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
