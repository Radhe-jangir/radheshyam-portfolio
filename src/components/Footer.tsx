import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative z-10 transition-colors w-full ${
      isDark ? 'border-neutral-800 bg-neutral-950 text-white' : 'border-neutral-200 bg-white text-neutral-950'
    }`}>
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 py-12">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <div className={`w-8 h-8 rounded border flex items-center justify-center font-bold text-xs ${
                isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
              }`}>
                RS
              </div>
              <span className="font-display font-bold text-base">
                Radheshyam Suthar
              </span>
            </div>
            <p className={`font-mono text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              AI/ML &amp; Data Analytics Developer • IGNTU
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className={`flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            <a href="#about" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>About</a>
            <a href="#skills" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Skills</a>
            <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Projects</a>
            <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Experience</a>
            <a href="#certifications" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Certifications</a>
            <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
              }`}
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
              }`}
              aria-label="Email Radheshyam"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-all ml-2 ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
              }`}
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-center sm:text-left ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          <div>
            &copy; {new Date().getFullYear()} Radheshyam Suthar. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered for AI Research &amp; Data Intelligence</span>
          </div>
        </div>
      </div>

      {/* Sub-footer Status Telemetry Bar */}
      <div className={`border-t px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between text-[10px] font-mono uppercase tracking-wider gap-2 ${
        isDark ? 'border-neutral-800 bg-neutral-950 text-neutral-400' : 'border-neutral-200 bg-neutral-50 text-neutral-600'
      }`}>
        <div>RADHESHYAM_SUTHAR // PORTFOLIO_MONOCHROME_V2</div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span>LATENCY: 14MS</span>
          <span>UPTIME: 99.9%</span>
          <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>LOC: AMARKANTAK, IN</span>
        </div>
      </div>
    </footer>
  );
};
