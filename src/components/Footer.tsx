import React from 'react';
import { greeting, socialMediaLinks } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-10 border-t transition-colors ${
        isDark ? 'bg-[#171c28] border-[#2d3748]' : 'bg-white border-[#e2e8f0]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono">
        <div className="text-center sm:text-left">
          <p className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
            Made with <span className="text-red-500">❤️</span> by {greeting.title}
          </p>
          <p className={`text-xs mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
            {greeting.subTitle}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            GitHub
          </a>
          <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
          <a
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            LinkedIn
          </a>
          <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
          <a
            href={`mailto:${socialMediaLinks.gmail}`}
            className={`transition-colors ${
              isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            Email
          </a>
          <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
