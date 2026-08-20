import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Trophy, CheckCircle2, Award } from 'lucide-react';
import { Card3D } from './Card3D';

export const Achievements: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="achievements" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-neutral-900 border-neutral-700 text-neutral-200' 
                : 'bg-neutral-100 border-neutral-300 text-neutral-800'
            }`}>
              <Trophy className="w-3.5 h-3.5" />
              <span>3D RECOGNITION VAULT • KEY MILESTONES</span>
            </div>
            <h2
              id="achievements-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Milestones &amp; Highlights
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-2xl ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Authentic milestones across developer advocacy, startup leadership, community growth, and academic accomplishments.
            </p>
          </div>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <Card3D key={item.id} depth={20} intensity={12} className="h-full">
              <div
                id={`achievement-${item.id}`}
                className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between h-full transition-all shadow-lg ${
                  isDark 
                    ? 'bg-neutral-900/85 border-neutral-800 text-white' 
                    : 'bg-white border-neutral-200 text-neutral-950 shadow-sm'
                }`}
              >
                <div>
                  <div className={`flex items-center justify-between gap-2 mb-4 pb-3 border-b ${
                    isDark ? 'border-neutral-800' : 'border-neutral-200'
                  }`}>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border font-semibold ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 text-neutral-300' 
                        : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                    }`}>
                      {item.category}
                    </span>
                    <span className={`text-xs font-mono font-medium ${
                      isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl mb-2">
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[10px] font-mono ${
                  isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-600'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Verified Milestone</span>
                  </div>
                  <Award className="w-3.5 h-3.5 opacity-60" />
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
