import React, { useState, useEffect } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { CurrentFocus } from './components/CurrentFocus';
import { WhyMe } from './components/WhyMe';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'certifications',
      'focus',
      'whyme',
      'achievements',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen antialiased overflow-x-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-[#090b10] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 bg-engineer-grid-dark' 
        : 'bg-[#f8fafc] text-slate-900 selection:bg-amber-500/30 selection:text-amber-900 bg-engineer-grid-light'
    }`}>
      {/* Interactive 3D WebGL Multi-Color Background Particles */}
      <BackgroundParticles />

      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <CurrentFocus />
        <WhyMe />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
