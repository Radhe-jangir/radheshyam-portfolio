import React, { useState } from 'react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Edit3, 
  Save, 
  X,
  MapPin,
  TrendingUp,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';
import { Card3D } from './Card3D';

export const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(EXPERIENCE_LIST);
  const [filterType, setFilterType] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'timeline' | 'matrix'>('timeline');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<ExperienceItem | null>(null);
  
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const types = ['ALL', 'Ambassador', 'Leadership', 'Fellowship', 'Internship'];

  const filteredExperiences = experiences.filter((exp) => {
    if (filterType === 'ALL') return true;
    return exp.type.toLowerCase() === filterType.toLowerCase();
  });

  const startEdit = (item: ExperienceItem) => {
    setEditingId(item.id);
    setEditFormData({ ...item });
  };

  const saveEdit = () => {
    if (!editFormData) return;
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === editFormData.id ? editFormData : exp))
    );
    setEditingId(null);
    setEditFormData(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditFormData(null);
  };

  return (
    <section id="experience" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-indigo-950/50 border-indigo-500/30 text-cyan-300' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-800'
            }`}>
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D CAREER MATRIX • LEADERSHIP &amp; EXPERIENCE</span>
            </div>
            <h2
              id="experience-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Professional Experience
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Authentic timeline of developer advocacy with Google, startup co-founding, academic research, and engineering internships.
            </p>
          </div>

          {/* View Modes */}
          <div className="flex flex-wrap items-center gap-3">
            <div className={`flex items-center p-1 rounded-xl border text-xs font-mono ${
              isDark ? 'bg-[#0d1122]/90 border-indigo-500/20' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                id="exp-viewmode-timeline"
                onClick={() => setViewMode('timeline')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold ${
                  viewMode === 'timeline'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Timeline</span>
              </button>

              <button
                id="exp-viewmode-matrix"
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold ${
                  viewMode === 'matrix'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Executive Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold border transition-all ${
                filterType === t
                  ? isDark 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30' 
                    : 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                  : isDark 
                    ? 'bg-[#0d1122]/70 border-indigo-500/15 text-slate-400 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-600 hover:text-black'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* 3D TIMELINE VIEW */}
        {viewMode === 'timeline' && (
          <div className={`relative border-l-2 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 max-w-5xl ${
            isDark ? 'border-indigo-500/20' : 'border-indigo-200'
          }`}>
            {filteredExperiences.map((item) => {
              const isEditing = editingId === item.id;

              return (
                <div
                  key={item.id}
                  id={`experience-item-${item.id}`}
                  className="relative group"
                >
                  {/* 3D Elevated Timeline Node */}
                  <div className={`absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${
                    isDark 
                      ? 'bg-[#070913] border-cyan-400 shadow-[0_0_12px_#22d3ee]' 
                      : 'bg-white border-indigo-600 shadow-[0_0_10px_#6366f1]'
                  }`}>
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                  </div>

                  {/* 3D Experience Card */}
                  <Card3D depth={25} intensity={12} className="w-full">
                    <div className={`rounded-3xl p-6 sm:p-8 border relative transition-all shadow-xl ${
                      isDark 
                        ? 'bg-[#0d1122]/90 backdrop-blur-xl border-indigo-500/25 text-white hover:border-cyan-400/50 shadow-black/40' 
                        : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-300 shadow-md'
                    }`}>
                      {isEditing && editFormData ? (
                        /* Inline Editing Mode */
                        <div className="space-y-4">
                          <div className={`flex items-center justify-between pb-2 border-b ${
                            isDark ? 'border-indigo-500/15' : 'border-slate-200'
                          }`}>
                            <span className="text-xs font-mono font-bold flex items-center gap-1.5">
                              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Edit Experience Entry</span>
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={saveEdit}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-mono font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm"
                              >
                                <Save className="w-3.5 h-3.5" />
                                <span>Save</span>
                              </button>
                              <button
                                onClick={cancelEdit}
                                className={`p-1 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                            <div>
                              <label className={`block mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Role Title</label>
                              <input
                                type="text"
                                value={editFormData.role}
                                onChange={(e) => setEditFormData({ ...editFormData, role: e.target.value })}
                                className={`w-full p-2 rounded border ${
                                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-black'
                                }`}
                              />
                            </div>
                            <div>
                              <label className={`block mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Organization</label>
                              <input
                                type="text"
                                value={editFormData.organization}
                                onChange={(e) => setEditFormData({ ...editFormData, organization: e.target.value })}
                                className={`w-full p-2 rounded border ${
                                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-black'
                                }`}
                              />
                            </div>
                            <div>
                              <label className={`block mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Period / Term</label>
                              <input
                                type="text"
                                value={editFormData.period}
                                onChange={(e) => setEditFormData({ ...editFormData, period: e.target.value })}
                                className={`w-full p-2 rounded border ${
                                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-black'
                                }`}
                              />
                            </div>
                          </div>

                          <div>
                            <label className={`block mb-1 font-mono text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Description</label>
                            <textarea
                              rows={2}
                              value={editFormData.description}
                              onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                              className={`w-full p-2 rounded border text-xs font-mono ${
                                isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-black'
                              }`}
                            />
                          </div>
                        </div>
                      ) : (
                        /* Display Mode */
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase border ${
                                isDark ? 'bg-indigo-950/60 border-indigo-500/30 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                              }`}>
                                {item.type}
                              </span>
                              <span className={`text-xs font-mono flex items-center gap-1.5 ${
                                isDark ? 'text-slate-400' : 'text-slate-600'
                              }`}>
                                <Calendar className="w-3.5 h-3.5 opacity-70" />
                                <span>{item.period}</span>
                              </span>
                              {item.location && (
                                <span className={`text-xs font-mono flex items-center gap-1.5 ${
                                  isDark ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                  <MapPin className="w-3.5 h-3.5 opacity-70" />
                                  <span>{item.location}</span>
                                </span>
                              )}
                            </div>

                            <button
                              onClick={() => startEdit(item)}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-black'
                              }`}
                              title="Edit record"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight">
                              {item.role}
                            </h3>
                            <p className="text-sm sm:text-base font-mono font-bold text-cyan-400">
                              {item.organization}
                            </p>
                          </div>

                          <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {item.description}
                          </p>

                          {/* Highlights / Deliverables */}
                          <div className="space-y-2 mb-6">
                            <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              Key Deliverables &amp; Impact
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-2 text-xs">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies Applied */}
                          <div className="flex flex-wrap gap-1.5">
                            {(item.technologies || item.skillsAcquired || []).map((t) => (
                              <span
                                key={t}
                                className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${
                                  isDark ? 'bg-indigo-950/40 border-indigo-500/20 text-indigo-200' : 'bg-indigo-50 border-indigo-100 text-indigo-800'
                                }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card3D>
                </div>
              );
            })}
          </div>
        )}

        {/* 3D EXECUTIVE MATRIX VIEW */}
        {viewMode === 'matrix' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((item) => (
              <Card3D key={item.id} depth={18} intensity={12} className="h-full">
                <div
                  id={`experience-matrix-${item.id}`}
                  className={`rounded-2xl p-6 border flex flex-col justify-between h-full transition-all ${
                    isDark 
                      ? 'bg-[#0d1122]/80 backdrop-blur-xl border-indigo-500/20 text-white hover:border-cyan-400/40 shadow-lg shadow-black/30' 
                      : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className={`flex items-center justify-between gap-2 mb-3 pb-2 border-b ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${
                        isDark ? 'bg-indigo-950/60 border-indigo-500/30 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      }`}>
                        {item.type}
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg mb-0.5">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono font-bold text-cyan-400 mb-3">
                      {item.organization}
                    </p>

                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {item.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-3 border-t border-inherit">
                    {(item.technologies || item.skillsAcquired || []).slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                          isDark ? 'bg-indigo-950/40 border-indigo-500/20 text-indigo-200' : 'bg-indigo-50 border-indigo-100 text-indigo-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
