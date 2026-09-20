import React from 'react';
import { skills, groupedSkills } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Brain, Layers, Database, Code2, Wrench, Sparkles, Cpu } from 'lucide-react';

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
      className={`py-20 md:py-28 lg:py-32 transition-colors ${
        isDark ? 'bg-[#1b2232] text-white' : 'bg-[#f8fafc] text-[#1d212a]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* MasterPortfolio Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ color: isDark ? '#ffffff' : '#001c55' }}
          >
            What I Do?
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wider font-semibold uppercase ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Crazy AI/ML Developer Who Wants to Explore Every Tech Stack
          </p>
        </div>

        {/* Domain 1: Data Science & AI/ML (Vector Artwork Left, Skills Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center mb-24">
          {/* Data Science Vector Graphic */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[480px]">
              <svg
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-md select-none"
              >
                {/* Background Analytics Canvas */}
                <rect x="50" y="40" width="500" height="360" rx="20" fill={isDark ? '#171c28' : '#ffffff'} stroke={isDark ? '#2d3748' : '#e2e8f0'} strokeWidth="3" />
                
                {/* Neural Network Nodes & Links */}
                <g transform="translate(90, 80)">
                  {/* Layer 1 */}
                  <circle cx="40" cy="50" r="16" fill="#3b82f6" />
                  <circle cx="40" cy="110" r="16" fill="#3b82f6" />
                  <circle cx="40" cy="170" r="16" fill="#3b82f6" />
                  {/* Layer 2 */}
                  <circle cx="140" cy="80" r="16" fill="#8b5cf6" />
                  <circle cx="140" cy="140" r="16" fill="#8b5cf6" />
                  {/* Layer 3 */}
                  <circle cx="230" cy="110" r="18" fill="#10b981" />

                  {/* Synapses */}
                  <line x1="56" y1="50" x2="124" y2="80" stroke="#60a5fa" strokeWidth="2.5" opacity="0.6" />
                  <line x1="56" y1="50" x2="124" y2="140" stroke="#60a5fa" strokeWidth="2.5" opacity="0.4" />
                  <line x1="56" y1="110" x2="124" y2="80" stroke="#60a5fa" strokeWidth="2.5" opacity="0.6" />
                  <line x1="56" y1="110" x2="124" y2="140" stroke="#60a5fa" strokeWidth="2.5" opacity="0.6" />
                  <line x1="56" y1="170" x2="124" y2="80" stroke="#60a5fa" strokeWidth="2.5" opacity="0.4" />
                  <line x1="56" y1="170" x2="124" y2="140" stroke="#60a5fa" strokeWidth="2.5" opacity="0.6" />
                  <line x1="156" y1="80" x2="212" y2="110" stroke="#a78bfa" strokeWidth="2.5" opacity="0.7" />
                  <line x1="156" y1="140" x2="212" y2="110" stroke="#a78bfa" strokeWidth="2.5" opacity="0.7" />
                </g>

                {/* Statistical Bar & Line Charts */}
                <g transform="translate(360, 100)">
                  <rect x="0" y="0" width="160" height="110" rx="8" fill={isDark ? '#242c3d' : '#f1f5f9'} />
                  {/* Bars */}
                  <rect x="20" y="55" width="16" height="40" rx="3" fill="#3b82f6" />
                  <rect x="45" y="35" width="16" height="60" rx="3" fill="#10b981" />
                  <rect x="70" y="20" width="16" height="75" rx="3" fill="#f59e0b" />
                  <rect x="95" y="45" width="16" height="50" rx="3" fill="#8b5cf6" />
                  <rect x="120" y="30" width="16" height="65" rx="3" fill="#ec4899" />
                  {/* Trend Line */}
                  <path d="M 28 50 L 53 30 L 78 15 L 103 40 L 128 25" stroke="#ef4444" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Python / Pandas Data Tensor Matrix */}
                <g transform="translate(100, 270)">
                  <rect x="0" y="0" width="400" height="90" rx="10" fill={isDark ? '#1f2937' : '#f8fafc'} stroke={isDark ? '#374151' : '#cbd5e1'} strokeWidth="2" />
                  <rect x="20" y="20" width="70" height="22" rx="4" fill="#3b82f6" opacity="0.2" />
                  <text x="55" y="36" fill="#3b82f6" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Dataset</text>
                  <rect x="105" y="20" width="70" height="22" rx="4" fill="#10b981" opacity="0.2" />
                  <text x="140" y="36" fill="#10b981" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Features</text>
                  <rect x="190" y="20" width="70" height="22" rx="4" fill="#f59e0b" opacity="0.2" />
                  <text x="225" y="36" fill="#f59e0b" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Modeling</text>
                  <rect x="275" y="20" width="105" height="22" rx="4" fill="#8b5cf6" opacity="0.2" />
                  <text x="327" y="36" fill="#8b5cf6" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Evaluation R²</text>

                  {/* Flow Arrow */}
                  <path d="M 30 62 L 370 62" stroke="#60a5fa" strokeWidth="3" strokeDasharray="6 6" />
                </g>
              </svg>
            </div>
          </div>

          {/* Data Science Text & Skills */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            <h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: isDark ? '#ffffff' : '#001c55' }}
            >
              {skills.data[0].title}
            </h3>

            {/* Software Framework Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
              {skills.data[0].softwareSkills.map((item) => (
                <span
                  key={item.skillName}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    isDark
                      ? 'bg-[#242c3d] border-[#39445a] text-[#e2e8f0]'
                      : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#334155]'
                  }`}
                >
                  {item.skillName}
                </span>
              ))}
            </div>

            {/* Bulleted Capabilities with ⚡ */}
            <ul className="space-y-3.5">
              {skills.data[0].skills.map((skill, i) => (
                <li
                  key={i}
                  className={`text-base sm:text-lg leading-relaxed flex items-start gap-3 ${
                    isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
                  }`}
                >
                  <span className="text-amber-500 font-bold select-none text-xl leading-none">⚡</span>
                  <span>{skill.replace('⚡ ', '')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Domain 2: Full Stack & Web Development (Skills Left, Vector Graphic Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center mb-28">
          {/* Full Stack Text & Skills */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: isDark ? '#ffffff' : '#001c55' }}
            >
              {skills.data[1].title}
            </h3>

            {/* Software Framework Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
              {skills.data[1].softwareSkills.map((item) => (
                <span
                  key={item.skillName}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                    isDark
                      ? 'bg-[#242c3d] border-[#39445a] text-[#e2e8f0]'
                      : 'bg-[#f1f5f9] border-[#cbd5e1] text-[#334155]'
                  }`}
                >
                  {item.skillName}
                </span>
              ))}
            </div>

            {/* Bulleted Capabilities with ⚡ */}
            <ul className="space-y-3.5">
              {skills.data[1].skills.map((skill, i) => (
                <li
                  key={i}
                  className={`text-base sm:text-lg leading-relaxed flex items-start gap-3 ${
                    isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
                  }`}
                >
                  <span className="text-amber-500 font-bold select-none text-xl leading-none">⚡</span>
                  <span>{skill.replace('⚡ ', '')}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Stack Vector Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[480px]">
              <svg
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-md select-none"
              >
                {/* Browser Window Frame */}
                <rect x="60" y="50" width="480" height="340" rx="16" fill={isDark ? '#171c28' : '#ffffff'} stroke={isDark ? '#2d3748' : '#e2e8f0'} strokeWidth="3" />
                {/* Browser Controls */}
                <circle cx="90" cy="76" r="6" fill="#ef4444" />
                <circle cx="110" cy="76" r="6" fill="#f59e0b" />
                <circle cx="130" cy="76" r="6" fill="#10b981" />
                <rect x="160" y="66" width="350" height="20" rx="6" fill={isDark ? '#242c3d' : '#f1f5f9'} />
                
                {/* Code Editor Screen & Components */}
                <rect x="85" y="110" width="220" height="250" rx="10" fill="#0f172a" />
                {/* Code Lines */}
                <rect x="105" y="130" width="70" height="7" rx="3" fill="#60a5fa" />
                <rect x="105" y="148" width="120" height="7" rx="3" fill="#a78bfa" />
                <rect x="120" y="166" width="90" height="7" rx="3" fill="#34d399" />
                <rect x="120" y="184" width="140" height="7" rx="3" fill="#f472b6" />
                <rect x="120" y="202" width="100" height="7" rx="3" fill="#fbbf24" />
                <rect x="105" y="220" width="60" height="7" rx="3" fill="#38bdf8" />
                
                {/* Mobile Screen Preview */}
                <rect x="330" y="130" width="110" height="200" rx="14" fill={isDark ? '#1e293b' : '#334155'} stroke="#60a5fa" strokeWidth="3" />
                <rect x="342" y="150" width="86" height="150" rx="6" fill={isDark ? '#0f172a' : '#ffffff'} />
                <rect x="352" y="165" width="66" height="18" rx="4" fill="#3b82f6" />
                <rect x="352" y="195" width="66" height="8" rx="3" fill="#94a3b8" />
                <rect x="352" y="210" width="50" height="8" rx="3" fill="#94a3b8" />
                <rect x="352" y="235" width="66" height="24" rx="4" fill="#10b981" />

                {/* Database Server Cylinder */}
                <g transform="translate(460, 200)">
                  <ellipse cx="40" cy="20" rx="35" ry="12" fill="#6366f1" />
                  <rect x="5" y="20" width="70" height="35" fill="#4f46e5" />
                  <ellipse cx="40" cy="55" rx="35" ry="12" fill="#4338ca" />
                  <rect x="5" y="55" width="70" height="35" fill="#3730a3" />
                  <ellipse cx="40" cy="90" rx="35" ry="12" fill="#312e81" />
                  {/* Status LED */}
                  <circle cx="58" cy="35" r="3" fill="#10b981" />
                  <circle cx="58" cy="70" r="3" fill="#10b981" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Categorized Skills Directory (Full Wide, No Percentage Bars) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
              style={{ color: isDark ? '#ffffff' : '#001c55' }}
            >
              Technical Skill Set
            </h3>
            <p className={`text-sm sm:text-base ${isDark ? 'text-[#868e96]' : 'text-[#64748b]'}`}>
              Organized technical competencies across programming, artificial intelligence, and deployment workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groupedSkills.map((group) => (
              <div
                key={group.category}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-[#171c28] border-[#2d3748] shadow-md hover:border-blue-500/50'
                    : 'bg-white border-[#e2e8f0] shadow-sm hover:border-blue-400/60'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-inherit">
                  {getCategoryIcon(group.category)}
                  <h4 className="text-base font-bold tracking-tight">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-colors ${
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
