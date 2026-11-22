import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, GitBranch } from 'lucide-react';

export default function CurrentlyBuilding() {
  const cards = [
    {
      icon: <Cpu className="text-teal-500 w-6 h-6" />,
      tag: "AI Applications",
      title: "Auto-Agentic LLM Frameworks",
      desc: "Developing local-first agent interfaces that parse codebase ASTs to perform automated hot-fixes.",
      status: "In Development"
    },
    {
      icon: <Terminal className="text-slate-400 w-6 h-6" />,
      tag: "Full Stack MERN Projects",
      title: "Collaborative Real-time Canvas",
      desc: "Structuring WebSocket-based server architecture for syncing large React canvas documents concurrently.",
      status: "Beta testing"
    },
    {
      icon: <GitBranch className="text-emerald-400 w-6 h-6" />,
      tag: "Open Source Contributions",
      title: "LangChain Component Library",
      desc: "Optimizing memory adapters in JavaScript and contributing clean UI dashboard elements to main repo.",
      status: "Merging PRs"
    }
  ];

  return (
    <section className="relative py-16 border-t border-zinc-900/5 bg-card-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2">Ongoing Lab Experiments</h3>
            <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 font-light">Currently Building</h2>
          </div>
          <p className="text-zinc-600 text-xs md:text-sm mt-4 md:mt-0 max-w-sm">
            A real-time snapshot of engineering projects and open-source packages I am building right now.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-900/20 transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-400/10 rounded-full blur-2xl group-hover:bg-slate-500/20 transition-all duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-white/60 border border-slate-300 backdrop-blur-lg">
                    {c.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{c.status}</span>
                </div>

                <span className="text-[11px] font-semibold text-teal-500 uppercase tracking-wider block mb-2">{c.tag}</span>
                <h4 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-slate-300 transition-colors">{c.title}</h4>
                <p className="text-zinc-600 text-xs leading-relaxed">{c.desc}</p>
              </div>

              {/* Progress glowing line */}
              <div className="mt-8 h-1 w-full bg-black/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-teal-400 to-slate-400" 
                  initial={{ width: 0 }}
                  whileInView={{ width: i === 0 ? "75%" : i === 1 ? "45%" : "90%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
