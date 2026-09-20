import React from 'react';
import { experiences } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="experience"
      className={`py-20 md:py-28 lg:py-32 transition-colors ${
        isDark ? 'bg-[#1b2232] text-white' : 'bg-[#f8fafc] text-[#1d212a]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            Experience
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wider font-semibold uppercase ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Work Experience &amp; Internships
          </p>
        </div>

        {/* Work Experience Cards */}
        <div className="space-y-8">
          {experiences.sections[0].experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#171c28] border-[#2d3748] shadow-md hover:border-blue-500/40'
                  : 'bg-white border-[#e2e8f0] shadow-sm hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className="p-3 sm:p-3.5 rounded-2xl shrink-0 mt-1"
                    style={{
                      backgroundColor: isDark ? '#242c3d' : '#f1f5f9',
                      color: exp.color,
                    }}
                  >
                    <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                      {exp.title}
                    </h3>
                    <h4
                      className={`text-base sm:text-lg md:text-xl font-medium mt-1 ${
                        isDark ? 'text-blue-400' : 'text-blue-700'
                      }`}
                    >
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-neutral-400 mt-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400 shrink-0 self-start md:self-auto">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Description Paragraph */}
              <p
                className={`text-base sm:text-lg leading-relaxed mb-5 ${
                  isDark ? 'text-[#e2e8f0]' : 'text-[#334155]'
                }`}
              >
                {exp.description}
              </p>

              {/* Bulleted Highlights */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="space-y-2.5 pt-4 border-t border-inherit">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className={`text-sm sm:text-base leading-relaxed flex items-start gap-3 ${
                        isDark ? 'text-[#a1a1aa]' : 'text-[#64748b]'
                      }`}
                    >
                      <span className="text-blue-500 select-none font-bold text-lg leading-none">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
