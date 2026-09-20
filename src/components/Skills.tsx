import React from 'react';
import { skills, groupedSkills } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Brain, Layers, Database, Code2, Wrench, Sparkles, Cpu, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-4 h-4 text-blue-500" />;
      case 'Data & Analytics':
        return <Database className="w-4 h-4 text-emerald-500" />;
      case 'Machine Learning':
        return <Brain className="w-4 h-4 text-purple-500" />;
      case 'AI / GenAI':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Web Development':
        return <Layers className="w-4 h-4 text-cyan-500" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-indigo-500" />;
      case 'Tools & DevOps':
        return <Wrench className="w-4 h-4 text-rose-500" />;
      default:
        return <Cpu className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 md:py-28 transition-colors ${
        isDark ? 'bg-[#1b2232] text-white' : 'bg-[#f8fafc] text-[#1d212a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            What I Do?
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wide uppercase ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Building AI/ML Applications, Scalable APIs &amp; Data-Driven Products
          </p>
        </div>

        {/* Domain Breakdown */}
        <div className="space-y-16 mb-20">
          {skills.data.map((domain, index) => (
            <div
              key={domain.title}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-[#171c28] border-[#2d3748] shadow-lg'
                  : 'bg-white border-[#e2e8f0] shadow-sm'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        index === 0
                          ? isDark
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-blue-50 text-blue-600'
                          : isDark
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      {index === 0 ? (
                        <Brain className="w-6 h-6" />
                      ) : (
                        <Layers className="w-6 h-6" />
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {domain.title}
                    </h3>
                  </div>

                  {/* Bulleted Capabilities with Lightning Bolt ⚡ */}
                  <ul className="space-y-3 mb-8">
                    {domain.skills.map((skill, i) => (
                      <li
                        key={i}
                        className={`text-sm sm:text-base leading-relaxed flex items-start gap-2.5 ${
                          isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
                        }`}
                      >
                        <span className="text-amber-500 select-none">⚡</span>
                        <span>{skill.replace('⚡ ', '')}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Software Skills Badges */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 font-semibold">
                      Featured Frameworks &amp; Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {domain.softwareSkills.map((item) => (
                        <span
                          key={item.skillName}
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
                            isDark
                              ? 'bg-[#242c3d] border-[#39445a] text-[#e2e8f0]'
                              : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#334155]'
                          }`}
                        >
                          {item.skillName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grouped Skills Matrix (Strictly No Percentage Bars) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-2"
              style={{ color: isDark ? '#ffffff' : '#001c55' }}
            >
              Technical Skill Set
            </h3>
            <p className={`text-sm sm:text-base ${isDark ? 'text-[#868e96]' : 'text-[#64748b]'}`}>
              Comprehensive directory of programming languages, machine learning toolkits, and web frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groupedSkills.map((group) => (
              <div
                key={group.category}
                className={`p-5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-[#171c28] border-[#2d3748] hover:border-[#3b82f6]/50'
                    : 'bg-white border-[#e2e8f0] hover:border-blue-400/60 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-inherit">
                  {getCategoryIcon(group.category)}
                  <h4 className="text-sm font-bold tracking-tight">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                        isDark
                          ? 'bg-[#202736] border-[#323d52] text-neutral-300'
                          : 'bg-[#f8fafc] border-[#e2e8f0] text-neutral-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
