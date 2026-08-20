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
  FileCode,
  Layers
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-28 xl:pt-40 xl:pb-32 flex items-center justify-center overflow-hidden w-full"
    >
      {/* Subtle Background Radial Ambient Glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15' : 'bg-gradient-to-tr from-indigo-400/10 via-sky-400/10 to-purple-300/10'
      }`} />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div
              id="hero-badge"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6 transition-all border ${
                isDark 
                  ? 'bg-indigo-950/40 border-indigo-500/30 text-cyan-300 shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                  : 'bg-indigo-50/80 border-indigo-200 text-indigo-800 shadow-sm'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{PERSONAL_INFO.badge}</span>
            </div>

            {/* Main Cinematic Heading with Luminous Gradient Accent */}
            <h1
              id="hero-title"
              className={`font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[1.06] mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Turning Data Into <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent underline decoration-2 underline-offset-8 decoration-cyan-400/30">
                Intelligence.
              </span>
            </h1>

            {/* Supporting Bio Text */}
            <p
              id="hero-description"
              className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-8 font-normal transition-colors ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Hi, I&apos;m <span className={`font-semibold ${isDark ? 'text-cyan-300' : 'text-indigo-900'}`}>Radheshyam Suthar</span> — an AI/ML and Data Analytics developer building practical machine learning systems, intelligent applications, and data-driven solutions.
            </p>

            {/* Call to Actions (No recruiter button) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                id="hero-explore-btn"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore 3D Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-connect-btn"
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-bold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-indigo-400/50 shadow-md' 
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                id="hero-skills-btn"
                href="#skills"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border font-mono font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isDark 
                    ? 'bg-transparent border-slate-800 text-slate-400 hover:text-white hover:border-slate-600' 
                    : 'bg-transparent border-slate-200 text-slate-600 hover:text-black hover:border-slate-400'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>View Tech Stack</span>
              </a>
            </div>

            {/* Secondary Status Badge & Education Meta */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t w-full ${
              isDark ? 'border-slate-800/80' : 'border-slate-200'
            }`}>
              <div className={`inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span>AI/ML Research &amp; Applied Data Engineering</span>
              </div>

              <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-mono sm:ml-auto ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <GraduationCap className="w-4 h-4 shrink-0 text-indigo-400" />
                <span className="truncate">IGNTU • 3rd Year BCA CS</span>
              </div>
            </div>

            {/* Social Links Quick Access */}
            <div className="flex items-center gap-3 mt-6">
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]' 
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-black hover:border-indigo-400'
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
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]' 
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-black hover:border-cyan-500'
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
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.2)]' 
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-black hover:border-purple-400'
                }`}
                aria-label="Email Radheshyam"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive AI 3D Neural Visualizer & Developer Identifier */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 items-center w-full">
            {/* Developer Identifier Card */}
            <div className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all ${
              isDark 
                ? 'bg-[#0d1122]/80 backdrop-blur-xl border-indigo-500/20 text-white shadow-lg shadow-black/40' 
                : 'bg-white/90 backdrop-blur-xl border-slate-200 text-slate-900 shadow-md'
            }`}>
              <div className="flex items-center gap-3">
                {/* Profile Image / Placeholder */}
                <div className={`relative w-12 h-12 rounded-xl border flex items-center justify-center overflow-hidden shrink-0 ${
                  isDark ? 'bg-indigo-950/60 border-indigo-500/30 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
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
                    <div className="font-display font-bold text-base tracking-wider bg-gradient-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                      RS
                    </div>
                  )}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm sm:text-base">{PERSONAL_INFO.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className={`font-mono text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    BCA Computer Science • IGNTU
                  </span>
                </div>
              </div>

              <a
                href="#about"
                className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all ${
                  isDark 
                    ? 'bg-indigo-950/40 border-indigo-500/30 text-indigo-300 hover:text-white hover:border-cyan-400' 
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:text-black hover:border-indigo-400'
                }`}
              >
                <span>Profile</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* 3D Neural Net Visualizer */}
            <HeroAiVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
};
