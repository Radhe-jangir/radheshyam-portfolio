import React from 'react';
import { PERSONAL_INFO, ABOUT_HIGHLIGHTS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Brain, 
  BarChart3, 
  Code2, 
  Layers, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Sparkles,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { Card3D } from './Card3D';

export const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
            isDark 
              ? 'bg-indigo-950/50 border-indigo-500/30 text-cyan-300' 
              : 'bg-indigo-50 border-indigo-200 text-indigo-800'
          }`}>
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>3D SPATIAL OVERVIEW • ABOUT RADHESHYAM</span>
          </div>
          <h2
            id="about-heading"
            className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            {PERSONAL_INFO.about.heading}
          </h2>
        </div>

        {/* Grid: Main Narrative + Academic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 mb-14">
          
          {/* Main Story Paragraphs */}
          <div className={`lg:col-span-7 xl:col-span-7 flex flex-col gap-5 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {PERSONAL_INFO.about.bio.map((paragraph, index) => (
              <p 
                key={index} 
                className={`border-l-2 pl-4 py-2 rounded-r-xl transition-colors ${
                  isDark 
                    ? 'border-indigo-500/40 bg-[#0d1122]/60 text-slate-300' 
                    : 'border-indigo-300 bg-white/70 text-slate-800'
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {['#MachineLearning', '#DataAnalytics', '#GenerativeAI', '#PythonDevelopment', '#TensorFlow', '#ScikitLearn'].map((tag) => (
                <span 
                  key={tag}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border ${
                    isDark 
                      ? 'bg-indigo-950/40 border-indigo-500/20 text-cyan-300' 
                      : 'bg-indigo-50 border-indigo-100 text-indigo-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Background Card with 3D Depth */}
          <div className="lg:col-span-5 xl:col-span-5">
            <Card3D depth={25} intensity={14} className="h-full">
              <div
                id="about-education-card"
                className={`h-full rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative overflow-hidden transition-all shadow-xl ${
                  isDark 
                    ? 'bg-[#0d1122]/90 backdrop-blur-xl border-indigo-500/25 text-white hover:border-cyan-400/40' 
                    : 'bg-white border-slate-200 text-slate-950 shadow-md hover:border-indigo-300'
                }`}
              >
                <div>
                  <div className={`flex items-center justify-between gap-2 mb-4 pb-3 border-b ${
                    isDark ? 'border-indigo-500/15' : 'border-slate-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider">
                        Academic Background
                      </span>
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border font-semibold ${
                      isDark 
                        ? 'bg-indigo-950/60 text-cyan-300 border-indigo-500/30' 
                        : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                    }`}>
                      Active Student
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className={`font-medium text-sm sm:text-base mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {PERSONAL_INFO.education.institution}
                  </p>

                  <div className={`space-y-2.5 text-xs sm:text-sm font-mono mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0 text-cyan-400 opacity-70" />
                      <span>{PERSONAL_INFO.education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 shrink-0 text-cyan-400 opacity-70" />
                      <span>Current: {PERSONAL_INFO.education.status}</span>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border text-xs space-y-1.5 ${
                  isDark 
                    ? 'bg-slate-900/60 border-indigo-500/15 text-slate-300' 
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className="flex items-center gap-2 font-bold font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Curriculum Focus</span>
                  </div>
                  <p className={`leading-relaxed text-[11px] sm:text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Data Structures, Algorithms, Relational Databases, Applied Machine Learning, Software Architecture, and Mathematical Modeling.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>

        </div>

        {/* 4 Highlight Cards in 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <Card3D key={item.id} depth={16} intensity={10} className="h-full">
              <div
                id={`about-highlight-${item.id}`}
                className={`rounded-2xl p-6 border flex flex-col justify-between h-full transition-all group ${
                  isDark 
                    ? 'bg-[#0d1122]/80 backdrop-blur-xl border-indigo-500/20 text-white hover:border-cyan-400/50 shadow-lg shadow-black/30' 
                    : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-colors ${
                    isDark 
                      ? 'bg-indigo-950/50 border-indigo-500/30' 
                      : 'bg-indigo-50 border-indigo-200'
                  }`}>
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl mb-1">
                    {item.title}
                  </h3>
                  <span className={`block font-mono text-[11px] mb-3 font-semibold ${
                    isDark ? 'text-cyan-300' : 'text-indigo-600'
                  }`}>
                    {item.tagline}
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
