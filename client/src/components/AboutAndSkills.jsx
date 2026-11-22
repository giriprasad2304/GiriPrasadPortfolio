import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code, Database, Cpu, Wrench } from 'lucide-react';

export default function AboutAndSkills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "15+", label: "Technologies Used" },
    { value: "MERN", label: "Stack Internship" }
  ];

  const skillCategories = [
    { id: 'frontend', name: 'Frontend Development', icon: <Code size={18} /> },
    { id: 'backend', name: 'Backend & APIs', icon: <Terminal size={18} /> },
    { id: 'database', name: 'Databases & Storage', icon: <Database size={18} /> },
    { id: 'ai-tools', name: 'AI & Engineering Tools', icon: <Cpu size={18} /> }
  ];

  const skills = [
    // Frontend
    { name: "React", level: 92, category: "frontend" },
    { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "CSS/HTML5", level: 90, category: "frontend" },

    // Backend
    { name: "Node.js", level: 88, category: "backend" },
    { name: "Express.js", level: 90, category: "backend" },
    { name: "REST APIs", level: 92, category: "backend" },
    { name: "JWT Authentication", level: 85, category: "backend" },

    // Database
    { name: "MongoDB", level: 90, category: "database" },
    { name: "SQL", level: 75, category: "database" },

    // AI & Tools
    { name: "OpenAI API Integration", level: 85, category: "ai-tools" },
    { name: "LangChain Framework", level: 80, category: "ai-tools" },
    { name: "LangGraph", level: 82, category: "ai-tools" },
    { name: "Docker", level: 70, category: "ai-tools" },
    { name: "Git & GitHub", level: 90, category: "ai-tools" },
    { name: "Postman API Client", level: 85, category: "ai-tools" }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="about-skills" className="py-24 border-t border-zinc-900/5 bg-card-dark/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-80 h-80 glow-bg-purple -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Profile Bio & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">

          {/* Bio text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-2 block">About Giri Prasad</span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 font-light mb-6">Architect of Digital Logic</h2>

            <div className="space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed">
              <p>
                I am a final-year Computer Science engineering student with a deep focus on crafting professional Full Stack applications.
                My development journey is characterized by translating complex architectural problems into clean, modular code.
              </p>
              <p>
                Specializing in the <span className="text-zinc-900 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js),
                I focus heavily on building clean, RESTful services and highly interactive, state-driven interfaces.
                Lately, I've been integrating LLMs and generative agents using LangChain, LangGraph, and OpenAI’s API.
              </p>
              <p>
                My professional experience includes executing an intensive Full Stack internship,
                freelancing on client projects, and delivering open-source feature increments.
              </p>
            </div>
          </motion.div>

          {/* Stats on the right */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="glass-panel p-6 rounded-2xl flex flex-col justify-center text-center hover:border-teal-400/30 transition-all duration-300">
                <span className="font-serif text-3xl md:text-4xl text-gradient-purple-cyan font-bold tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 font-sans tracking-wide uppercase font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Technical Arsenal Grid */}
        <div className="border-t border-zinc-900/5 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2 block">Technical Arsenal</span>
            <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 font-light">Engineered Skillsets</h3>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === 'all' ? 'bg-zinc-900 text-white font-semibold' : 'bg-black/5 text-zinc-600 border border-zinc-900/5 hover:bg-black/10'}`}
            >
              All Skills
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id ? 'bg-teal-500 text-zinc-900 shadow-lg shadow-teal-500/20' : 'bg-black/5 text-zinc-600 border border-zinc-900/5 hover:bg-black/10'}`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Skill Cards grid with meters */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            layout
          >
            {filteredSkills.map((s, idx) => (
              <motion.div
                key={s.name}
                layout
                className="glass-panel p-5 rounded-xl flex flex-col justify-between hover:border-zinc-900/20 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-zinc-900">{s.name}</span>
                  {/* <span className="text-xs font-semibold text-teal-500 font-sans">{s.level}%</span> */}
                </div>

                {/* Meter progress bar */}
                {/* <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </div> */}
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
