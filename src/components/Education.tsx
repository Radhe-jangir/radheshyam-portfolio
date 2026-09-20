import React from 'react';
import { degrees, certifications } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="education"
      className={`py-20 md:py-28 transition-colors ${
        isDark ? 'bg-[#171c28] text-white' : 'bg-white text-[#1d212a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            Education &amp; Qualifications
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wide uppercase ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Academic Foundation &amp; Professional Certifications
          </p>
        </div>

        {/* Degrees Subsection */}
        <div className="mb-20">
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight mb-8 flex items-center gap-2.5"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            <GraduationCap className="w-6 h-6 text-blue-500" />
            <span>Degrees Received</span>
          </h3>

          <div className="space-y-8">
            {degrees.degrees.map((degree) => (
              <div
                key={degree.title}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-[#1b2232] border-[#2d3748] shadow-md'
                    : 'bg-[#f8fafc] border-[#e2e8f0] shadow-sm'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
                      {degree.title}
                    </h4>
                    <p
                      className={`text-base sm:text-lg font-medium ${
                        isDark ? 'text-blue-400' : 'text-blue-700'
                      }`}
                    >
                      {degree.subtitle}
                    </p>
                    {degree.grade && (
                      <span className="inline-block mt-1 text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {degree.grade}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{degree.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {degree.descriptions.map((desc, i) => (
                    <li
                      key={i}
                      className={`text-sm sm:text-base leading-relaxed flex items-start gap-2.5 ${
                        isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
                      }`}
                    >
                      <span className="text-amber-500 select-none">⚡</span>
                      <span>{desc.replace('⚡ ', '')}</span>
                    </li>
                  ))}
                </ul>

                {degree.website_link && (
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold border transition-colors ${
                      isDark
                        ? 'border-blue-500/40 text-blue-400 hover:bg-blue-500/10'
                        : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span>Visit Institution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Certifications Subsection */}
        <div id="certifications">
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight mb-8 flex items-center gap-2.5"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            <Award className="w-6 h-6 text-emerald-500" />
            <span>Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.certifications.map((cert) => (
              <div
                key={cert.title}
                className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                  isDark
                    ? 'bg-[#1b2232] border-[#2d3748] hover:border-[#3b82f6]/50'
                    : 'bg-[#f8fafc] border-[#e2e8f0] hover:border-blue-400/60 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: cert.color_code }}
                    />
                    {cert.date && (
                      <span className="text-xs font-mono text-neutral-400">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold tracking-tight mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm mb-4 font-medium ${
                      isDark ? 'text-[#868e96]' : 'text-[#64748b]'
                    }`}
                  >
                    - {cert.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-inherit flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs font-mono text-emerald-500">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>

                  {cert.certificate_link ? (
                    <a
                      href={cert.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <span>Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-neutral-500">
                      Credential
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
