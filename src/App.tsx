import React, { useState, useEffect } from 'react';
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
    <div className={`relative min-h-screen antialiased overflow-x-hidden transition-colors duration-200 ${
      isDark 
        ? 'bg-[#000000] text-white selection:bg-neutral-800 selection:text-white bg-engineer-grid-dark' 
        : 'bg-[#ffffff] text-neutral-900 selection:bg-neutral-200 selection:text-black bg-engineer-grid-light'
    }`}>


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
