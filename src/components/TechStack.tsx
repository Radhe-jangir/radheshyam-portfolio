import React, { useState } from 'react';
import { TECH_CATEGORIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Code, 
  Database, 
  Cpu, 
  Sparkles, 
  Server, 
  Layout, 
  Wrench, 
  Search,
  CheckCircle2,
  Terminal,
  Layers,
  BarChart2
} from 'lucide-react';
import { Card3D } from './Card3D';

export const TechStack: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-sky-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-rose-400" />;
      default:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = TECH_CATEGORIES.filter((cat) => {
    if (selectedFilter !== 'all' && cat.id !== selectedFilter) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const catMatch = cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
      const skillMatch = cat.skills.some((s) => s.name.toLowerCase().includes(q));
      return catMatch || skillMatch;
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-indigo-950/50 border-indigo-500/30 text-cyan-300' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-800'
            }`}>
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D INTERACTIVE MATRIX • TECHNICAL REPERTOIRE</span>
            </div>
            <h2
              id="skills-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Skills &amp; Technologies
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Production toolset covering machine learning pipelines, predictive modeling, backend microservices, database architectures, and reactive frontends.
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="relative w-full md:w-80">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`} />
            <input
              id="tech-search-input"
              type="text"
              placeholder="Search skill (e.g. Pandas, PyTorch, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none transition-all ${
                isDark 
                  ? 'bg-[#0d1122]/90 border-indigo-500/25 text-white placeholder-slate-500 focus:border-cyan-400 shadow-md' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          <button
            id="filter-all-skills"
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
              selectedFilter === 'all'
                ? isDark
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                : isDark
                  ? 'bg-[#0d1122]/70 text-slate-400 hover:text-white border-indigo-500/15'
                  : 'bg-white text-slate-600 hover:text-black border-slate-200'
            }`}
          >
            All Categories ({TECH_CATEGORIES.length})
          </button>

          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`filter-skills-${cat.id}`}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 border ${
                selectedFilter === cat.id
                  ? isDark
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                  : isDark
                    ? 'bg-[#0d1122]/70 text-slate-400 hover:text-white border-indigo-500/15'
                    : 'bg-white text-slate-600 hover:text-black border-slate-200'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <Card3D key={category.id} depth={18} intensity={12} className="h-full">
              <div
                id={`tech-card-${category.id}`}
                className={`rounded-2xl p-6 border flex flex-col justify-between h-full transition-all ${
                  isDark 
                    ? 'bg-[#0d1122]/80 backdrop-blur-xl border-indigo-500/20 text-white hover:border-cyan-400/40 shadow-lg shadow-black/30' 
                    : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-400/50 shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className={`flex items-center justify-between gap-3 pb-3 mb-3 border-b ${
                    isDark ? 'border-indigo-500/15' : 'border-slate-200'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg border ${
                        isDark ? 'bg-indigo-950/60 border-indigo-500/30' : 'bg-slate-100 border-slate-200'
                      }`}>
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="font-mono font-bold text-sm sm:text-base tracking-wide">
                        {category.name}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded border font-semibold ${
                      isDark ? 'bg-indigo-950/40 border-indigo-500/20 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    }`}>
                      {category.skills.length} tools
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm mb-4 leading-normal ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {category.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                          skill.isPrimary
                            ? isDark
                              ? 'bg-indigo-950/70 text-cyan-300 border-indigo-500/40 font-bold shadow-sm'
                              : 'bg-indigo-50 text-indigo-900 border-indigo-200 font-bold shadow-sm'
                            : isDark
                              ? 'bg-slate-900/60 text-slate-300 border-slate-800'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent indicator */}
                <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[10px] font-mono ${
                  isDark ? 'border-indigo-500/15 text-slate-400' : 'border-slate-200 text-slate-600'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Production Verified</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">High Proficiency</span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
