import React from 'react';
import { WHY_ME_ITEMS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Target, Hammer, Compass, CheckCircle2, Terminal } from 'lucide-react';
import { Card3D } from './Card3D';

export const WhyMe: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getIcon = (iconName: string) => {
    const iconClass = `w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`;
    switch (iconName) {
      case 'Target':
        return <Target className={iconClass} />;
      case 'Hammer':
        return <Hammer className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  return (
    <section id="whyme" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-neutral-900 border-neutral-700 text-neutral-200' 
                : 'bg-neutral-100 border-neutral-300 text-neutral-800'
            }`}>
              <Terminal className="w-3.5 h-3.5" />
              <span>3D VALUE PILLARS • RECRUITER PERSPECTIVE</span>
            </div>
            <h2
              id="whyme-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Why Radheshyam?
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-2xl ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Core engineering principles and work habits driving consistent, high-velocity output in AI/ML &amp; Data Analytics roles.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards in 3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_ME_ITEMS.map((item) => (
            <Card3D key={item.id} depth={25} intensity={15} className="h-full">
              <div
                id={`whyme-card-${item.id}`}
                className={`rounded-3xl p-7 sm:p-8 border flex flex-col justify-between h-full group relative overflow-hidden transition-all shadow-xl ${
                  isDark 
                    ? 'bg-neutral-900/85 border-neutral-800 text-white' 
                    : 'bg-white border-neutral-200 text-neutral-950 shadow-md'
                }`}
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                      isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
                    }`}>
                      {getIcon(item.iconName)}
                    </div>
                    <span className={`font-mono text-3xl font-extrabold ${
                      isDark ? 'text-neutral-700' : 'text-neutral-300'
                    }`}>
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">
                    {item.title}
                  </h3>

                  {/* Main Quote / Philosophy */}
                  <p className={`text-sm sm:text-base font-medium leading-relaxed mb-4 ${
                    isDark ? 'text-neutral-200' : 'text-neutral-800'
                  }`}>
                    &ldquo;{item.description}&rdquo;
                  </p>

                  {/* Detail */}
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {item.detail}
                  </p>
                </div>

                {/* Bottom Marker */}
                <div className={`mt-6 pt-4 border-t flex items-center gap-2 text-[11px] font-mono ${
                  isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-600'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Practiced Daily in Projects</span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};
