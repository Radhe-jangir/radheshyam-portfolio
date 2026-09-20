import React from 'react';
import { greeting, socialMediaLinks } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

export const Greeting: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className={`pt-32 pb-20 md:pt-40 md:pb-28 transition-colors ${
        isDark ? 'bg-[#171c28] text-white' : 'bg-white text-[#1d212a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Greeting & Summary */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3"
              style={{ color: isDark ? '#ffffff' : '#001c55' }}
            >
              Hi all, I&apos;m {greeting.title}{' '}
              <span className="inline-block animate-bounce origin-bottom">👋</span>
            </h1>

            <h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: isDark ? '#38bdf8' : '#0077b6' }}
            >
              {greeting.subTitle}
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-2xl ${
                isDark ? 'text-[#a1a1aa]' : 'text-[#4a5568]'
              }`}
            >
              {greeting.summary}
            </p>

            {/* Social Media Links Row */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-3 rounded-full transition-all duration-200 ${
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
                className={`p-3 rounded-full transition-all duration-200 ${
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
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDark
                    ? 'bg-[#242c3d] text-[#ea4335] hover:bg-[#ea4335] hover:text-white hover:scale-110'
                    : 'bg-[#f1f3f5] text-[#ea4335] hover:bg-[#ea4335] hover:text-white hover:scale-110'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md text-sm font-semibold tracking-wide uppercase shadow-md transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Me
              </a>

              <a
                href="#contact"
                className={`px-6 py-3 rounded-md text-sm font-semibold tracking-wide uppercase border transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? 'border-[#4a5568] text-white hover:bg-[#242c3d]'
                    : 'border-[#cbd5e1] text-[#1d212a] hover:bg-[#f8fafc]'
                }`}
              >
                See My Resume
              </a>
            </div>
          </div>

          {/* Right Column: Developer Vector Artwork */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <svg
              className="w-full max-w-[460px] h-auto drop-shadow-md"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Floor and Desk Base */}
              <ellipse cx="400" cy="530" rx="350" ry="40" fill={isDark ? '#232b3b' : '#e2e8f0'} />
              <rect x="220" y="380" width="360" height="22" rx="6" fill={isDark ? '#3b4861' : '#cbd5e1'} />
              <rect x="260" y="402" width="16" height="120" fill={isDark ? '#2a3447' : '#94a3b8'} />
              <rect x="524" y="402" width="16" height="120" fill={isDark ? '#2a3447' : '#94a3b8'} />

              {/* Monitor / Laptop */}
              <rect x="300" y="240" width="200" height="130" rx="10" fill={isDark ? '#111827' : '#1e293b'} stroke="#60a5fa" strokeWidth="4" />
              <rect x="312" y="252" width="176" height="106" rx="4" fill={isDark ? '#0f172a' : '#0f172a'} />
              {/* Screen Code Lines */}
              <rect x="325" y="268" width="50" height="6" rx="3" fill="#60a5fa" />
              <rect x="382" y="268" width="70" height="6" rx="3" fill="#34d399" />
              <rect x="335" y="284" width="90" height="6" rx="3" fill="#f472b6" />
              <rect x="335" y="300" width="110" height="6" rx="3" fill="#38bdf8" />
              <rect x="345" y="316" width="65" height="6" rx="3" fill="#fbbf24" />
              <rect x="325" y="332" width="40" height="6" rx="3" fill="#a78bfa" />
              {/* Laptop Base */}
              <path d="M280 370 L520 370 L500 380 L300 380 Z" fill={isDark ? '#374151' : '#64748b'} />

              {/* Coffee Cup */}
              <rect x="535" y="345" width="24" height="35" rx="3" fill="#f97316" />
              <path d="M559 353 C566 353 566 367 559 367" stroke="#f97316" strokeWidth="4" fill="none" />

              {/* Plant Pot */}
              <path d="M235 345 L255 345 L250 380 L240 380 Z" fill="#10b981" />
              <circle cx="245" cy="335" r="14" fill="#059669" />
              <circle cx="236" cy="328" r="10" fill="#34d399" />
              <circle cx="254" cy="328" r="10" fill="#34d399" />

              {/* Developer Body */}
              <circle cx="400" cy="180" r="42" fill="#fed7aa" />
              {/* Hair */}
              <path d="M365 175 C365 140 435 140 435 175 C420 160 380 160 365 175 Z" fill="#451a03" />
              {/* Torso / Hoodie */}
              <path d="M340 260 C340 222 460 222 460 260 L445 370 L355 370 Z" fill="#2563eb" />
              {/* Arms Typing */}
              <path d="M350 250 L315 320 L355 340" stroke="#1d4ed8" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M450 250 L485 320 L445 340" stroke="#1d4ed8" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              {/* Floating Tech Clouds */}
              <g transform="translate(180, 150)">
                <rect width="70" height="42" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#3b82f6" strokeWidth="2" />
                <text x="35" y="26" fill={isDark ? '#93c5fd' : '#1e40af'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AI / ML</text>
              </g>

              <g transform="translate(540, 160)">
                <rect width="80" height="42" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#10b981" strokeWidth="2" />
                <text x="40" y="26" fill={isDark ? '#6ee7b7' : '#065f46'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Python</text>
              </g>

              <g transform="translate(480, 60)">
                <rect width="75" height="42" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#f59e0b" strokeWidth="2" />
                <text x="37" y="26" fill={isDark ? '#fde68a' : '#b45309'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FastAPI</text>
              </g>

              <g transform="translate(240, 70)">
                <rect width="75" height="42" rx="8" fill={isDark ? '#1e293b' : '#ffffff'} stroke="#8b5cf6" strokeWidth="2" />
                <text x="37" y="26" fill={isDark ? '#ddd6fe' : '#5b21b6'} fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle">React</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
