import React from 'react';
import { greeting, socialMediaLinks } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Mail, Star, FileText } from 'lucide-react';

export const Greeting: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className={`pt-32 pb-16 md:pt-44 md:pb-24 lg:pt-48 lg:pb-32 transition-colors ${
        isDark ? 'bg-[#171c28] text-white' : 'bg-white text-[#1d212a]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Greeting, Titles, Summary & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4"
              style={{ color: isDark ? '#ffffff' : '#001c55' }}
            >
              Hi all, I&apos;m {greeting.title}{' '}
              <span className="inline-block animate-bounce origin-bottom select-none">👋</span>
            </h1>

            <h2
              className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6 tracking-tight"
              style={{ color: isDark ? '#38bdf8' : '#0077b6' }}
            >
              {greeting.subTitle}
            </h2>

            <p
              className={`text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl font-normal ${
                isDark ? 'text-[#a1a1aa]' : 'text-[#4a5568]'
              }`}
            >
              {greeting.summary}
            </p>

            {/* Social Media Links Row */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-10">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-3.5 rounded-full transition-all duration-200 shadow-sm ${
                  isDark
                    ? 'bg-[#242c3d] text-white hover:bg-black hover:scale-110'
                    : 'bg-[#f1f3f5] text-[#333333] hover:bg-black hover:text-white hover:scale-110'
                }`}
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-3.5 rounded-full transition-all duration-200 shadow-sm ${
                  isDark
                    ? 'bg-[#242c3d] text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:scale-110'
                    : 'bg-[#f1f3f5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:scale-110'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${socialMediaLinks.gmail}`}
                aria-label="Send Email"
                className={`p-3.5 rounded-full transition-all duration-200 shadow-sm ${
                  isDark
                    ? 'bg-[#242c3d] text-[#ea4335] hover:bg-[#ea4335] hover:text-white hover:scale-110'
                    : 'bg-[#f1f3f5] text-[#ea4335] hover:bg-[#ea4335] hover:text-white hover:scale-110'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* MasterPortfolio Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-md text-sm sm:text-base font-bold tracking-wide uppercase shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Me
              </a>

              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm sm:text-base font-bold tracking-wide uppercase border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? 'border-[#4a5568] bg-[#242c3d]/60 text-white hover:bg-[#242c3d]'
                    : 'border-[#cbd5e1] bg-slate-50 text-[#1d212a] hover:bg-slate-100'
                }`}
              >
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Star on GitHub</span>
              </a>

              <a
                href="#contact"
                className={`w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm sm:text-base font-medium tracking-wide uppercase border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? 'border-[#4a5568] text-neutral-300 hover:text-white hover:bg-[#242c3d]'
                    : 'border-[#cbd5e1] text-neutral-700 hover:text-black hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>See My Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vector Developer Artwork (Responsive & Fluid) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="w-full max-w-[560px] relative">
              <svg
                className="w-full h-auto drop-shadow-md select-none"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Atmosphere Circle */}
                <circle cx="400" cy="300" r="260" fill={isDark ? '#1f2737' : '#f1f5f9'} opacity="0.6" />

                {/* Desk Shadow & Stand */}
                <ellipse cx="400" cy="535" rx="360" ry="35" fill={isDark ? '#232b3b' : '#e2e8f0'} />
                <rect x="200" y="385" width="400" height="20" rx="6" fill={isDark ? '#3b4861' : '#cbd5e1'} />
                <rect x="250" y="405" width="16" height="120" fill={isDark ? '#2a3447' : '#94a3b8'} />
                <rect x="534" y="405" width="16" height="120" fill={isDark ? '#2a3447' : '#94a3b8'} />

                {/* Main Computer Monitor */}
                <rect x="280" y="210" width="240" height="160" rx="12" fill={isDark ? '#111827' : '#1e293b'} stroke="#60a5fa" strokeWidth="4" />
                <rect x="294" y="224" width="212" height="132" rx="6" fill="#0f172a" />
                
                {/* Screen Syntax Lines */}
                <rect x="310" y="240" width="55" height="7" rx="3" fill="#60a5fa" />
                <rect x="372" y="240" width="85" height="7" rx="3" fill="#34d399" />
                <rect x="320" y="258" width="110" height="7" rx="3" fill="#f472b6" />
                <rect x="320" y="276" width="130" height="7" rx="3" fill="#38bdf8" />
                <rect x="335" y="294" width="80" height="7" rx="3" fill="#fbbf24" />
                <rect x="310" y="312" width="60" height="7" rx="3" fill="#a78bfa" />
                <rect x="378" y="312" width="95" height="7" rx="3" fill="#34d399" />
                
                {/* Monitor Stand */}
                <rect x="388" y="370" width="24" height="25" fill={isDark ? '#4b5563' : '#64748b'} />
                <rect x="360" y="392" width="80" height="8" rx="4" fill={isDark ? '#374151' : '#475569'} />

                {/* Desk Lamp */}
                <path d="M570 385 L570 310 L540 280" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M525 295 L555 265 L575 285 Z" fill="#f59e0b" />
                <polygon points="520,300 450,420 570,420" fill="#fef08a" opacity="0.18" />

                {/* Coffee Mug */}
                <rect x="235" y="348" width="26" height="37" rx="4" fill="#f97316" />
                <path d="M261 356 C270 356 270 372 261 372" stroke="#f97316" strokeWidth="4" fill="none" />
                {/* Steam */}
                <path d="M243 340 Q240 330 245 320" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M251 340 Q254 330 249 320" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />

                {/* Potted Indoor Plant */}
                <path d="M545 350 L570 350 L565 385 L550 385 Z" fill="#10b981" />
                <circle cx="558" cy="336" r="16" fill="#059669" />
                <circle cx="548" cy="328" r="12" fill="#34d399" />
                <circle cx="568" cy="328" r="12" fill="#34d399" />

                {/* Floating Tech Badges (MasterPortfolio Style) */}
                <g transform="translate(130, 140)">
                  <rect width="88" height="46" rx="10" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#3b82f6" strokeWidth="2.5" />
                  <text x="44" y="28" fill={isDark ? '#93c5fd' : '#1e40af'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AI / ML</text>
                </g>

                <g transform="translate(590, 150)">
                  <rect width="96" height="46" rx="10" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#10b981" strokeWidth="2.5" />
                  <text x="48" y="28" fill={isDark ? '#6ee7b7' : '#065f46'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Python</text>
                </g>

                <g transform="translate(520, 50)">
                  <rect width="90" height="46" rx="10" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="45" y="28" fill={isDark ? '#fde68a' : '#b45309'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FastAPI</text>
                </g>

                <g transform="translate(200, 60)">
                  <rect width="86" height="46" rx="10" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#8b5cf6" strokeWidth="2.5" />
                  <text x="43" y="28" fill={isDark ? '#ddd6fe' : '#5b21b6'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">React</text>
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
