import React, { useState } from 'react';
import { CURRENT_FOCUS_TOPICS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Compass, 
  Activity, 
  Terminal, 
  ArrowRight
} from 'lucide-react';
import { Card3D } from './Card3D';

export const CurrentFocus: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<string>(CURRENT_FOCUS_TOPICS[0].id);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const selectedItem = CURRENT_FOCUS_TOPICS.find((t) => t.id === activeTopic) || CURRENT_FOCUS_TOPICS[0];

  return (
    <section id="focus" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-neutral-900 border-neutral-700 text-neutral-200' 
                : 'bg-neutral-100 border-neutral-300 text-neutral-800'
            }`}>
              <Compass className="w-3.5 h-3.5" />
              <span>3D RADAR • ACTIVE EXPLORATION</span>
            </div>
            <h2
              id="focus-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Always Learning. Always Building.
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-2xl ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              An active radar of research tracks, mathematical concepts, and modern AI engineering paradigms currently under active study and prototyping.
            </p>
          </div>
        </div>

        {/* 2-Column Interactive Exploration Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Topics Selector Cards */}
          <div className="lg:col-span-5 2xl:col-span-4 space-y-3">
            {CURRENT_FOCUS_TOPICS.map((topic) => {
              const isSelected = topic.id === activeTopic;
              return (
                <div
                  key={topic.id}
                  id={`focus-topic-${topic.id}`}
                  onClick={() => setActiveTopic(topic.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? isDark 
                        ? 'bg-neutral-900 border-white text-white shadow-lg' 
                        : 'bg-neutral-100 border-black text-black shadow-md font-semibold'
                      : isDark 
                        ? 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white' 
                        : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-black shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full shrink-0 transition-all ${
                        isSelected 
                          ? isDark ? 'bg-white shadow-[0_0_8px_#fff]' : 'bg-black shadow-[0_0_8px_#000]' 
                          : 'bg-neutral-600'
                      }`}
                    />
                    <div>
                      <h3 className={`font-display font-bold text-sm sm:text-base ${
                        isSelected ? (isDark ? 'text-white' : 'text-black') : ''
                      }`}>
                        {topic.title}
                      </h3>
                      <span className={`font-mono text-[11px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        {topic.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                      isDark 
                        ? 'bg-neutral-950 border-neutral-800 text-neutral-300' 
                        : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                    }`}>
                      {topic.status}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'translate-x-1 opacity-100' : 'opacity-30'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Spotlight Card with 3D Depth */}
          <div className="lg:col-span-7 2xl:col-span-8">
            <Card3D depth={22} intensity={12}>
              <div
                id="focus-deep-dive-card"
                className={`rounded-3xl p-6 sm:p-8 2xl:p-10 border relative overflow-hidden transition-all shadow-2xl ${
                  isDark 
                    ? 'bg-neutral-900/90 border-neutral-800 text-white' 
                    : 'bg-white border-neutral-200 text-neutral-950 shadow-lg'
                }`}
              >
                <div className={`flex items-center justify-between pb-4 border-b mb-6 ${
                  isDark ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                      isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
                    }`}>
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>
                        Active Investigation
                      </span>
                      <span className="font-display font-bold text-base">
                        {selectedItem.category}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-mono px-3 py-1 rounded-md border font-semibold ${
                    isDark 
                      ? 'bg-neutral-800 text-white border-neutral-700' 
                      : 'bg-neutral-100 text-black border-neutral-300'
                  }`}>
                    {selectedItem.status}
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                  {selectedItem.title}
                </h4>

                <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {selectedItem.description}
                </p>

                {/* Exploration Sub-Tracks */}
                <div className="mb-8">
                  <span className={`text-[11px] font-mono uppercase tracking-wider block mb-3 font-semibold ${
                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Key Focus Areas &amp; Sub-modules
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono border font-medium ${
                          isDark 
                            ? 'bg-neutral-950 text-neutral-200 border-neutral-800' 
                            : 'bg-neutral-100 text-neutral-800 border-neutral-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Research Methodology Note */}
                <div className={`p-5 rounded-xl border space-y-2 ${
                  isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold">
                    <Terminal className="w-4 h-4" />
                    <span>Learning Through Rigorous Code Prototyping</span>
                  </div>
                  <p className={`text-xs sm:text-sm font-mono leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Every concept begins with theoretical foundation, progresses to isolated Scikit-learn/PyTorch/Pandas experiments, and culminates in a deployable interactive prototype.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
