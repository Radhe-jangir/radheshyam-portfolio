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
      className={`py-20 md:py-28 lg:py-32 transition-colors ${
        isDark ? 'bg-[#171c28] text-white' : 'bg-white text-[#1d212a]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            Education &amp; Qualifications
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wider font-semibold uppercase ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Academic Foundation &amp; Professional Certifications
          </p>
        </div>

        {/* Degrees Subsection */}
        <div className="mb-24">
          <h3
            className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8 flex items-center gap-3"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            <GraduationCap className="w-7 h-7 text-blue-500" />
            <span>Degrees Received</span>
          </h3>

          <div className="space-y-8">
            {degrees.degrees.map((degree) => (
              <div
                key={degree.title}
                className={`p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#1b2232] border-[#2d3748] shadow-md hover:border-blue-500/40'
                    : 'bg-[#f8fafc] border-[#e2e8f0] shadow-sm hover:border-blue-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1.5">
                      {degree.title}
                    </h4>
                    <p
                      className={`text-base sm:text-lg md:text-xl font-medium ${
                        isDark ? 'text-blue-400' : 'text-blue-700'
                      }`}
                    >
                      {degree.subtitle}
                    </p>
                    {degree.grade && (
                      <span className="inline-block mt-2 text-xs sm:text-sm font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {degree.grade}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400 shrink-0 self-start md:self-auto">
                    <Calendar className="w-4 h-4" />
                    <span>{degree.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {degree.descriptions.map((desc, i) => (
                    <li
                      key={i}
                      className={`text-sm sm:text-base leading-relaxed flex items-start gap-3 ${
                        isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
                      }`}
                    >
                      <span className="text-amber-500 select-none text-lg">⚡</span>
                      <span>{desc.replace('⚡ ', '')}</span>
                    </li>
                  ))}
                </ul>

                {degree.website_link && (
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border transition-colors ${
                      isDark
                        ? 'border-blue-500/40 text-blue-400 hover:bg-blue-500/10'
                        : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <span>Visit Institution</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Certifications Subsection */}
        <div id="certifications">
          <h3
            className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8 flex items-center gap-3"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            <Award className="w-7 h-7 text-emerald-500" />
            <span>Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.certifications.map((cert) => (
              <div
                key={cert.title}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#1b2232] border-[#2d3748] shadow-md hover:border-blue-500/50'
                    : 'bg-[#f8fafc] border-[#e2e8f0] shadow-sm hover:border-blue-400/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: cert.color_code }}
                    />
                    {cert.date && (
                      <span className="text-xs font-mono text-neutral-400">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold tracking-tight mb-1.5 leading-snug">
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

                <div className="pt-3.5 border-t border-inherit flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified</span>
                  </div>

                  {cert.certificate_link ? (
                    <a
                      href={cert.certificate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <span>Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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
