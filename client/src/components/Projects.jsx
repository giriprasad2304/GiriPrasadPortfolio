import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, RefreshCw } from 'lucide-react';
import { fetchProjects } from '../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadData() {
      const data = await fetchProjects();
      if (active) {
        setProjects(data);
        setLoading(false);
      }
    }
    loadData();
    return () => { active = false; };
  }, []);

  return (
    <section id="projects" className="py-24 border-t border-zinc-900/5 bg-card-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 block mb-2">Portfolio of Giri Prasad</span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 font-light tracking-wide mb-4">Featured Engineering</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Detailed showcase of my design, freelance, and full-stack projects. Each project is validation of technical rigor, clean APIs, and minimalist startup-inspired user interfaces.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <RefreshCw className="animate-spin text-teal-500 w-8 h-8" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p._id || p.title}
                className="glass-panel rounded-2xl overflow-hidden group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Image Container with Hover zoom */}
                <div className="h-56 md:h-64 w-full overflow-hidden relative border-b border-zinc-900/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10 opacity-60"></div>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                    {p.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md text-zinc-700 border border-zinc-900/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-slate-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>
                    
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {p.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] text-zinc-600 bg-black/5 border border-zinc-900/5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-zinc-700 hover:text-zinc-900 transition-colors py-2 border-b border-transparent hover:border-zinc-900/50"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>
                    
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-teal-500 hover:text-slate-300 transition-colors py-2 border-b border-transparent hover:border-slate-300"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Footer */}
        <div className="mt-16 text-center border-t border-zinc-900/5 pt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <span className="text-sm text-zinc-600 font-sans">Have a custom enterprise application in mind?</span>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:shadow-lg shadow-teal-500/20 transition-all rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-900"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
