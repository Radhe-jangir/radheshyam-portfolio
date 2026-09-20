import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroAiVisualizer } from './HeroAiVisualizer';
import { useTheme } from '../context/ThemeContext';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  Github, 
  Linkedin,
  CheckCircle,
  Copy,
  Check,
  Code2,
  Terminal,
  Activity
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-28 xl:pt-40 xl:pb-32 flex items-center justify-center overflow-hidden w-full"
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Column: Hero Copy & Proof Strip */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Engineering Status Pill */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-6 transition-all border ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300' 
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>RADHESHYAM_SUTHAR // BCA_CS_IGNTU • CGPA_8.8</span>
            </div>

            {/* Main Punchy Engineering Headline */}
            <h1
              id="hero-title"
              className={`font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Engineering Intelligent Systems. <br className="hidden sm:inline" />
              <span className={isDark ? 'text-neutral-400' : 'text-neutral-500'}>
                Extracting Signal From Noise.
              </span>
            </h1>

            {/* Supporting Bio Text */}
            <p
              id="hero-description"
              className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-normal transition-colors ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Hi, I&apos;m <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-950'}`}>Radheshyam Suthar</span> — an AI/ML and Data Analytics developer specialized in machine learning pipelines, predictive modeling, and scalable full-stack data applications.
            </p>

            {/* Proof-of-Work Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 w-full">
              <div className={`p-3 rounded-lg border transition-all ${
                isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700' : 'bg-white border-neutral-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-0.5">Academic Merit</span>
                <span className="text-xl font-mono font-bold text-white">8.8 / 10</span>
                <span className="text-[10px] text-neutral-400 block truncate">IGNTU BCA CS</span>
              </div>

              <div className={`p-3 rounded-lg border transition-all ${
                isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700' : 'bg-white border-neutral-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-0.5">Projects Built</span>
                <span className="text-xl font-mono font-bold text-white">10+ ML Builds</span>
                <span className="text-[10px] text-neutral-400 block truncate">Full-Stack &amp; AI</span>
              </div>

              <div className={`p-3 rounded-lg border transition-all ${
                isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700' : 'bg-white border-neutral-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-0.5">Core Stack</span>
                <span className="text-xl font-mono font-bold text-white">Python • ML</span>
                <span className="text-[10px] text-neutral-400 block truncate">PyTorch • Scikit</span>
              </div>

              <div className={`p-3 rounded-lg border transition-all ${
                isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700' : 'bg-white border-neutral-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-0.5">Availability</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Open to Roles</span>
                </div>
                <span className="text-[10px] text-neutral-400 block truncate mt-0.5">Internship &amp; Roles</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                id="hero-explore-btn"
                href="#projects"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-xs transition-all active:scale-[0.98] ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-connect-btn"
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border font-bold text-xs transition-all active:scale-[0.98] ${
                  isDark 
                    ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700' 
                    : 'bg-white border-neutral-300 text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </a>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border font-mono font-semibold text-xs transition-all active:scale-[0.98] ${
                  isDark 
                    ? 'bg-transparent border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600' 
                    : 'bg-transparent border-neutral-300 text-neutral-600 hover:text-black hover:border-neutral-400'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span className="text-white font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-70" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Quick Access Strip */}
            <div className="flex items-center gap-2.5">
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                    : 'bg-white border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
                }`}
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                    : 'bg-white border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-2.5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                    : 'bg-white border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
                }`}
                aria-label="Email Radheshyam"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Developer ID Card + Monochrome Developer Console */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 items-center w-full">
            {/* Developer Identifier Card */}
            <div className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all ${
              isDark 
                ? 'bg-neutral-950 border-neutral-800 text-white shadow-xl shadow-black' 
                : 'bg-white border-neutral-300 text-neutral-900 shadow-sm'
            }`}>
              <div className="flex items-center gap-3">
                {/* Profile Image / Placeholder */}
                <div className={`relative w-12 h-12 rounded-lg border flex items-center justify-center overflow-hidden shrink-0 ${
                  isDark ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-neutral-100 border-neutral-300 text-black'
                }`}>
                  {!imgError ? (
                    <img
                      src="/assets/profile.jpg"
                      alt="Radheshyam Suthar"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="font-mono font-bold text-base tracking-wider text-white">
                      RS
                    </div>
                  )}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-white border-2 border-black" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm sm:text-base">{PERSONAL_INFO.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className={`font-mono text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    AI/ML &amp; Data Analytics Developer
                  </span>
                </div>
              </div>

              <a
                href="#about"
                className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1.5 rounded-md border transition-all ${
                  isDark 
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600' 
                    : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-400'
                }`}
              >
                <span>About</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Monochrome 2D Developer Console */}
            <HeroAiVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
};
