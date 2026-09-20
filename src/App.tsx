import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Greeting } from './components/Greeting';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
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
      'skills',
      'education',
      'experience',
      'projects',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

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
    <div
      className={`min-h-screen antialiased transition-colors duration-150 ${
        isDark ? 'bg-[#171c28] text-white' : 'bg-white text-[#1d212a]'
      }`}
    >
      {/* Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content">
        <Greeting />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
