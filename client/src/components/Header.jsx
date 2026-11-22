import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About & Skills', href: '#about-skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel-heavy backdrop-blur-md bg-bg-dark/70' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className="font-serif text-2xl tracking-wide font-light text-zinc-900 hover:text-gradient-purple-cyan transition-all">
            Giri Prasad
          </span>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest -mt-1 font-sans">
            Developer
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-200 uppercase tracking-wider font-sans"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="/Giri_Prasad_Resume.pdf"
            download="Marpu_Giri_Prasad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 hover:text-zinc-900 border border-zinc-900/15 rounded-full hover:bg-black/5 transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full hover:shadow-lg shadow-teal-500/20 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel-heavy border-t border-zinc-900/10"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-zinc-700 hover:text-zinc-900 transition-colors py-2 border-b border-zinc-900/5 uppercase tracking-wider font-sans"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Giri_Prasad_Resume.pdf"
                download="Marpu_Giri_Prasad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold uppercase tracking-widest text-zinc-700 border border-zinc-900/15 rounded-lg hover:bg-black/5 transition-all"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold uppercase tracking-widest text-zinc-900 bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg hover:brightness-110 transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
