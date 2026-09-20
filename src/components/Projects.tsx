import React from 'react';
import { projects } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Github, ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg font-mono tracking-wider font-semibold uppercase ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Open-Source Applications &amp; Machine Learning Systems
          </p>
        </div>

        {/* Project Cards Grid (Full-Wide 2-Column Responsive Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.data.map((project) => (
            <div
              key={project.id}
              className={`p-7 sm:p-9 md:p-10 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-[#1b2232] border-[#2d3748] shadow-md hover:border-blue-500/50'
                  : 'bg-[#f8fafc] border-[#e2e8f0] shadow-sm hover:border-blue-400/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="w-7 h-7 text-blue-500 shrink-0" />
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${project.name}`}
                        className={`p-2.5 rounded-full transition-all ${
                          isDark
                            ? 'hover:bg-[#242c3d] text-neutral-300 hover:text-white hover:scale-110'
                            : 'hover:bg-slate-200 text-neutral-600 hover:text-black hover:scale-110'
                        }`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.name}`}
                        className={`p-2.5 rounded-full transition-all ${
                          isDark
                            ? 'hover:bg-[#242c3d] text-neutral-300 hover:text-white hover:scale-110'
                            : 'hover:bg-slate-200 text-neutral-600 hover:text-black hover:scale-110'
                        }`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p
                  className={`text-base sm:text-lg leading-relaxed mb-6 ${
                    isDark ? 'text-[#a1a1aa]' : 'text-[#4b5563]'
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div>
                {/* Language / Tech tags with color dots */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-5 border-t border-inherit">
                  {project.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-xs sm:text-sm font-mono font-medium">
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 mt-6">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow transition-all"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                        isDark
                          ? 'border-[#39445a] text-neutral-300 hover:bg-[#242c3d] hover:text-white'
                          : 'border-slate-300 text-neutral-700 hover:bg-slate-100 hover:text-black'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
