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
      className={`py-20 md:py-28 transition-colors ${
        isDark ? 'bg-[#1b2232] text-white' : 'bg-[#f8fafc] text-[#1d212a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            Experience
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wide uppercase ${
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
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-[#171c28] border-[#2d3748] shadow-md hover:border-[#3b82f6]/40'
                  : 'bg-white border-[#e2e8f0] shadow-sm hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl shrink-0 mt-1"
                    style={{
                      backgroundColor: isDark ? '#242c3d' : '#f1f5f9',
                      color: exp.color,
                    }}
                  >
                    <Briefcase className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {exp.title}
                    </h3>
                    <h4
                      className={`text-base sm:text-lg font-medium mt-0.5 ${
                        isDark ? 'text-blue-400' : 'text-blue-700'
                      }`}
                    >
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mt-1.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 shrink-0 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Description Paragraph */}
              <p
                className={`text-sm sm:text-base leading-relaxed mb-4 ${
                  isDark ? 'text-[#e2e8f0]' : 'text-[#334155]'
                }`}
              >
                {exp.description}
              </p>

              {/* Bulleted Highlights */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="space-y-2 pt-2 border-t border-inherit">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className={`text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${
                        isDark ? 'text-[#a1a1aa]' : 'text-[#64748b]'
                      }`}
                    >
                      <span className="text-blue-500 select-none">•</span>
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
