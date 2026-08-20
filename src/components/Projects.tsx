import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { useTheme } from '../context/ThemeContext';
import { 
  ArrowUpRight, 
  Github, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Sliders,
  Layers,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Star
} from 'lucide-react';
import { Card3D } from './Card3D';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'3d-showroom' | 'grid'>('3d-showroom');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const categories: ProjectCategory[] = [
    'ALL',
    'AI / ML',
    'DATA ANALYTICS',
    'FULL STACK',
    'PYTHON',
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    return p.categories.includes(selectedCategory as any);
  });

  const nextSlide = () => {
    if (filteredProjects.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] pointer-events-none ${
        isDark ? 'bg-indigo-600/10' : 'bg-indigo-300/10'
      }`} />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-indigo-950/50 border-indigo-500/30 text-cyan-300' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-800'
            }`}>
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D SPATIAL SHOWROOM • ENGINEERED SYSTEMS</span>
            </div>
            <h2
              id="projects-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Featured Projects &amp; Architectures
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-3xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Comprehensive end-to-end applications demonstrating machine learning pipelines, automated dataset intelligence, and full-stack system architectures.
            </p>
          </div>

          {/* View Mode Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className={`flex items-center p-1 rounded-xl border text-xs font-mono ${
              isDark ? 'bg-[#0d1122]/90 border-indigo-500/20' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                id="projects-viewmode-showroom"
                onClick={() => setViewMode('3d-showroom')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold ${
                  viewMode === '3d-showroom'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Showroom</span>
              </button>

              <button
                id="projects-viewmode-grid"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Grid ({PROJECTS.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                setSelectedCategory(cat);
                setCarouselIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider font-semibold transition-all border ${
                selectedCategory === cat
                  ? isDark
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : isDark
                    ? 'bg-[#0d1122]/70 text-slate-400 hover:text-white border-indigo-500/15 hover:border-cyan-500/40'
                    : 'bg-white text-slate-600 hover:text-black border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D SPATIAL SHOWROOM CAROUSEL */}
        {viewMode === '3d-showroom' && filteredProjects.length > 0 && (
          <div className="relative py-6 mb-12">
            <div className="max-w-4xl mx-auto">
              {filteredProjects[carouselIndex] && (
                <Card3D depth={35} intensity={18} glareOpacity={0.22} className="w-full">
                  <div
                    className={`rounded-3xl p-7 sm:p-10 border relative overflow-hidden transition-all shadow-2xl ${
                      isDark 
                        ? 'bg-[#0d1122]/90 backdrop-blur-xl border-indigo-500/25 text-white shadow-indigo-950/50 hover:border-cyan-500/40' 
                        : 'bg-white/95 backdrop-blur-xl border-slate-200 text-slate-950 shadow-xl hover:border-indigo-300'
                    }`}
                  >
                    {/* Top Row */}
                    <div className={`flex items-center justify-between gap-4 pb-4 border-b ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                          isDark ? 'bg-indigo-950/60 border-indigo-500/40 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        }`}>
                          PROJECT {filteredProjects[carouselIndex].number}
                        </span>
                        <span className={`text-xs font-mono font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {filteredProjects[carouselIndex].categories.join(' • ')}
                        </span>
                      </div>

                      {filteredProjects[carouselIndex].playgroundType && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Interactive Playground</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div className="py-6">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight mb-2">
                        {filteredProjects[carouselIndex].title}
                      </h3>
                      <p className={`text-sm sm:text-base font-mono mb-4 ${isDark ? 'text-cyan-300' : 'text-indigo-600'}`}>
                        {filteredProjects[carouselIndex].tagline}
                      </p>
                      <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {filteredProjects[carouselIndex].description}
                      </p>

                      {/* Capabilities Grid */}
                      <div className="mb-6 space-y-2">
                        <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Core Capabilities
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {(filteredProjects[carouselIndex].features || []).slice(0, 4).map((f, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {(filteredProjects[carouselIndex].tech || []).map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold border ${
                              isDark ? 'bg-indigo-950/40 border-indigo-500/20 text-indigo-200' : 'bg-indigo-50/80 border-indigo-100 text-indigo-800'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Bottom Bar */}
                    <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <button
                        onClick={() => setActiveModalProject(filteredProjects[carouselIndex])}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold border transition-all active:scale-95 ${
                          isDark 
                            ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-400' 
                            : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                        }`}
                      >
                        <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Inspect Architecture &amp; Simulation</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={filteredProjects[carouselIndex].githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`p-2.5 rounded-xl border transition-all ${
                            isDark ? 'bg-slate-900 border-slate-800 text-white hover:border-indigo-500' : 'bg-slate-100 border-slate-300 text-black hover:border-indigo-400'
                          }`}
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>

                        <a
                          href={filteredProjects[carouselIndex].liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/25 active:scale-95 transition-all"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card3D>
              )}
            </div>

            {/* Showroom Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                id="project-prev-btn"
                onClick={prevSlide}
                className={`p-3 rounded-full border transition-all active:scale-95 ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-white hover:border-cyan-400' : 'bg-white border-slate-300 text-black hover:border-indigo-400 shadow-sm'
                }`}
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      carouselIndex === idx 
                        ? 'w-8 bg-gradient-to-r from-indigo-500 to-cyan-400'
                        : isDark ? 'w-2.5 bg-slate-800' : 'w-2.5 bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="project-next-btn"
                onClick={nextSlide}
                className={`p-3 rounded-full border transition-all active:scale-95 ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-white hover:border-cyan-400' : 'bg-white border-slate-300 text-black hover:border-indigo-400 shadow-sm'
                }`}
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ENGINEERED GRID VIEW (ALL PROJECTS) */}
        {(viewMode === 'grid' || filteredProjects.length === 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card3D key={project.id} depth={20} intensity={14} className="h-full">
                <div
                  id={`project-card-${project.id}`}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden border transition-all ${
                    isDark 
                      ? 'bg-[#0d1122]/80 backdrop-blur-xl border-indigo-500/20 text-white hover:border-cyan-400/50 shadow-lg shadow-black/30' 
                      : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-400/60 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Project Card Header */}
                    <div className={`flex items-center justify-between gap-2 mb-3 pb-3 border-b ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-tight ${
                          isDark ? 'text-cyan-300' : 'text-indigo-600'
                        }`}>
                          {project.tagline.split('—')[0] || `PROJECT ${project.number}`}
                        </span>
                        {project.playgroundType && (
                          <span className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                            isDark 
                              ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/30' 
                              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          }`}>
                            <Sparkles className="w-3 h-3 text-emerald-400" />
                            <span>Interactive</span>
                          </span>
                        )}
                      </div>
                      <span className={`text-[10px] font-mono uppercase tracking-widest truncate max-w-[150px] text-right ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {project.categories.slice(0, 2).join(' • ')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="mb-6 space-y-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 font-semibold ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Key Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(project.features || []).slice(0, 4).map((feature, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-2 text-xs font-mono ${
                              isDark ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2 leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {(project.tech || []).map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded text-[10px] font-medium border ${
                            isDark 
                              ? 'bg-indigo-950/40 text-indigo-200 border-indigo-500/20' 
                              : 'bg-indigo-50/70 text-indigo-800 border-indigo-100'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                    isDark ? 'border-indigo-500/15' : 'border-slate-200'
                  }`}>
                    <button
                      id={`view-details-${project.id}`}
                      onClick={() => setActiveModalProject(project)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold border transition-all active:scale-95 ${
                        isDark 
                          ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-400' 
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                      }`}
                    >
                      <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Inspect</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        id={`github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-lg border transition-all ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500' 
                            : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-black hover:border-indigo-400'
                        }`}
                        aria-label={`GitHub repo for ${project.title}`}
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <a
                        id={`live-demo-link-${project.id}`}
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-mono font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-sm"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

      </div>

      {/* Details & Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
