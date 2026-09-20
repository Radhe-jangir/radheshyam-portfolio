import React, { useState } from 'react';
import { contactConfig, socialMediaLinks } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-28 lg:py-32 transition-colors ${
        isDark ? 'bg-[#1b2232] text-white' : 'bg-[#f8fafc] text-[#1d212a]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            {contactConfig.title}
          </h2>

          <h3
            className="text-2xl sm:text-3xl font-bold mb-5"
            style={{ color: isDark ? '#38bdf8' : '#0077b6' }}
          >
            {contactConfig.ctaHeading}
          </h3>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed mb-8 ${
              isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
            }`}
          >
            {contactConfig.subtitle} {contactConfig.ctaSubtext}
          </p>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-mono mb-10 font-medium border-inherit">
            <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{contactConfig.location}</span>
          </div>

          {/* Direct Actions: Email Button & Copy Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12">
            <a
              href={`mailto:${contactConfig.email}`}
              className="px-7 py-3.5 rounded-md text-sm sm:text-base font-bold tracking-wide uppercase shadow-lg transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <button
              onClick={copyEmail}
              className={`px-6 py-3.5 rounded-md text-sm sm:text-base font-mono font-medium border transition-all duration-150 inline-flex items-center gap-2 ${
                isDark
                  ? 'border-[#39445a] bg-[#171c28] text-neutral-200 hover:bg-[#242c3d]'
                  : 'border-slate-300 bg-white text-neutral-700 hover:bg-slate-50'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-400">Copied Email</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 opacity-70" />
                  <span>{contactConfig.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-inherit">
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={`mailto:${contactConfig.email}`}
              className={`inline-flex items-center gap-2 text-sm sm:text-base font-medium transition-colors ${
                isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
