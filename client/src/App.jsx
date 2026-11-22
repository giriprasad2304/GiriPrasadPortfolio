import React from 'react';
import FloatingParticles from './components/FloatingParticles';
import Header from './components/Header';
import Hero from './components/Hero';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Projects from './components/Projects';
import AboutAndSkills from './components/AboutAndSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-zinc-900 selection:bg-teal-500/30 selection:text-zinc-900">
      {/* Dynamic Background Elements */}
      <FloatingParticles />

      {/* Sticky Header */}
      <Header />

      {/* Main Container */}
      <main>
        {/* Hero Area */}
        <Hero />

        {/* Currently Building */}
        <CurrentlyBuilding />

        {/* Projects Engineering Section */}
        <Projects />

        {/* About Biography & Interactive Skills Section */}
        <AboutAndSkills />

        {/* Glassmorphism Contact Form */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
