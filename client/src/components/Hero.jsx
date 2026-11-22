import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Tech items with floating animation delays
  const techBadges = [
    { name: 'React', color: 'text-slate-700 bg-white/80 border-slate-300 backdrop-blur-md', delay: 0, x: -140, y: -80 },
    { name: 'Node.js', color: 'text-emerald-700 bg-emerald-50/80 border-emerald-200 backdrop-blur-md', delay: 1, x: 140, y: -100 },
    { name: 'MongoDB', color: 'text-teal-700 bg-teal-50/80 border-teal-200 backdrop-blur-md', delay: 2, x: 130, y: 85 },
    { name: 'Express', color: 'text-zinc-700 bg-white/80 border-slate-300 backdrop-blur-md', delay: 1.5, x: -130, y: 90 },
    { name: 'OpenAI', color: 'text-teal-600 bg-teal-50/80 border-teal-200 backdrop-blur-md', delay: 2.5, x: 0, y: 160 },
    { name: 'LangChain', color: 'text-emerald-800 bg-emerald-50/85 border-emerald-300 backdrop-blur-md', delay: 1.8, x: 155, y: -5 },
    { name: 'LangGraph', color: 'text-indigo-700 bg-indigo-50/85 border-indigo-200 backdrop-blur-md', delay: 0.8, x: -15, y: -155 }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-bg-indigo -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-bg-cyan -z-10 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Intro Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-white/60 border border-slate-300 backdrop-blur-lg w-fit">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-ping"></span>
            <span className="text-xs uppercase tracking-widest text-zinc-700 font-semibold font-sans">Available for Internships & Full-Time Roles</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl font-light tracking-wide text-zinc-900 leading-tight"
          >
            Hi, I'm <span className="font-normal text-gradient-blue-purple font-serif">Giri Prasad</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-2xl text-zinc-700 font-sans tracking-wide leading-relaxed"
          >
            Full Stack MERN Developer <span className="text-teal-600 font-light">|</span> AI Enthusiast <span className="text-slate-500 font-light">|</span> Building Scalable Web Applications
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl font-sans"
          >
            Final-year Computer Science student specializing in engineering production-ready SaaS platforms.
            Blending solid database reliability of the MERN stack with modern generative AI architectures,
            optimized for blazing-fast startup environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            >
              <Briefcase size={16} />
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3 border border-zinc-900/20 hover:border-zinc-900/50 text-zinc-900 rounded-full bg-white/60 hover:bg-white/80 backdrop-blur-md transition-all duration-300 text-sm"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </a>

            <a
              href="/Giri_Prasad_Resume.pdf"
              download="Marpu_Giri_Prasad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 border border-teal-400/30 hover:border-teal-400/70 text-teal-500 rounded-full bg-teal-400/5 hover:bg-teal-400/10 transition-all duration-300 text-sm"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Panel */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            {/* Animated Ring */}
            <div className="absolute inset-0 animated-gradient-border opacity-70 blur-[1px]"></div>

            {/* Inner background and mask */}
            <div className="absolute inset-1 rounded-full bg-bg-dark flex items-center justify-center overflow-hidden">
              <img
                src="/Giri_img.jpeg"
                alt="Giri Prasad"
                className="w-full h-full object-cover opacity-90 contrast-110"
              />
            </div>

            {/* Orbiting / Floating Badges */}
            {techBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className={`absolute px-3 py-1 text-xs font-semibold rounded-full border shadow-lg cursor-pointer ${badge.color}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: badge.x,
                  y: badge.y,
                  translateY: [0, -10, 0]
                }}
                transition={{
                  opacity: { delay: 0.5 + index * 0.1 },
                  x: { duration: 0.5 },
                  y: { duration: 0.5 },
                  translateY: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: badge.delay
                  }
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                {badge.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Quote footer */}
      <div className="absolute bottom-4 left-0 w-full text-center text-slate-500 italic text-xs tracking-wider font-serif">
        "Precision in logic, elegance in form."
      </div>
    </section>
  );
}
