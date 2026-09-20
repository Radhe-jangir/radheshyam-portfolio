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
      {/* Subtle Architectural Ambient Glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] rounded-full blur-[160px] pointer-events-none ${
        isDark ? 'bg-amber-500/[0.04]' : 'bg-amber-500/[0.03]'
      }`} />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Column: Hero Copy & Proof Strip */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Engineering Status Pill */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6 transition-all border ${
                isDark 
                  ? 'bg-[#121622] border-white/10 text-amber-400 shadow-sm' 
                  : 'bg-amber-50/80 border-amber-200 text-amber-800 shadow-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM ONLINE // BCA CS @ IGNTU • 8.8 MERIT</span>
            </div>

            {/* Main Punchy Engineering Headline */}
            <h1
              id="hero-title"
              className={`font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.07] mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Engineering <span className="gradient-text-amber">Intelligent</span> Systems. <br className="hidden sm:inline" />
              Extracting <span className="text-emerald-400">Signal</span> From Noise.
            </h1>

            {/* Supporting Bio Text */}
            <p
              id="hero-description"
              className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-normal transition-colors ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Hi, I&apos;m <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-950'}`}>Radheshyam Suthar</span> — an AI/ML and Data Analytics developer specialized in predictive machine learning models, statistical data analysis, and scalable full-stack applications with high-velocity execution.
            </p>

            {/* Proof-of-Work Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 w-full">
              <div className={`p-3 rounded-xl border transition-all ${
                isDark ? 'bg-[#0f131c]/80 border-white/[0.08] hover:border-amber-400/40' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Academic Merit</span>
                <span className="text-xl font-mono font-bold text-amber-400">8.8 / 10</span>
                <span className="text-[10px] text-slate-500 block truncate">IGNTU BCA CS</span>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${
                isDark ? 'bg-[#0f131c]/80 border-white/[0.08] hover:border-emerald-400/40' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Projects Built</span>
                <span className="text-xl font-mono font-bold text-emerald-400">10+ ML Builds</span>
                <span className="text-[10px] text-slate-500 block truncate">Full-Stack &amp; AI</span>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${
                isDark ? 'bg-[#0f131c]/80 border-white/[0.08] hover:border-sky-400/40' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Core Stack</span>
                <span className="text-xl font-mono font-bold text-sky-400">Python • ML</span>
                <span className="text-[10px] text-slate-500 block truncate">PyTorch • Scikit</span>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${
                isDark ? 'bg-[#0f131c]/80 border-white/[0.08] hover:border-emerald-400/40' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Availability</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>Open to Roles</span>
                </div>
                <span className="text-[10px] text-slate-500 block truncate mt-0.5">Internship / AI Roles</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                id="hero-explore-btn"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                id="hero-connect-btn"
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-bold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-[#121622] border-white/10 text-slate-200 hover:bg-[#181d2c] hover:border-amber-400/50 shadow-sm' 
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Contact Me</span>
              </a>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border font-mono font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-transparent border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20' 
                    : 'bg-transparent border-slate-200 text-slate-600 hover:text-black hover:border-slate-400'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Email Copied!</span>
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
            <div className="flex items-center gap-3">
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-[#121622] border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 shadow-sm' 
                    : 'bg-white border-slate-300 text-slate-700 hover:text-black hover:border-amber-500 shadow-sm'
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
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-[#121622] border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 shadow-sm' 
                    : 'bg-white border-slate-300 text-slate-700 hover:text-black hover:border-amber-500 shadow-sm'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-[#121622] border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 shadow-sm' 
                    : 'bg-white border-slate-300 text-slate-700 hover:text-black hover:border-amber-500 shadow-sm'
                }`}
                aria-label="Email Radheshyam"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Developer ID Card + Interactive AI Workbench */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 items-center w-full">
            {/* Developer Identifier Card */}
            <div className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#0f131c]/90 backdrop-blur-xl border-white/[0.08] text-white shadow-xl shadow-black/40' 
                : 'bg-white/95 backdrop-blur-xl border-slate-200 text-slate-900 shadow-md'
            }`}>
              <div className="flex items-center gap-3">
                {/* Profile Image / Placeholder */}
                <div className={`relative w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden shrink-0 ${
                  isDark ? 'bg-[#151a27] border-white/10 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
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
                    <div className="font-mono font-bold text-base tracking-wider text-amber-400">
                      RS
                    </div>
                  )}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm sm:text-base">{PERSONAL_INFO.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className={`font-mono text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    AI/ML &amp; Data Analytics Developer
                  </span>
                </div>
              </div>

              <a
                href="#about"
                className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-[#121622] border-white/10 text-amber-300 hover:text-white hover:border-amber-400' 
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:text-black hover:border-amber-500'
                }`}
              >
                <span>About</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Multi-Mode AI Workbench */}
            <HeroAiVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
};
