import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Edit3, 
  X, 
  Sparkles, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Search, 
  Eye 
} from 'lucide-react';
import { Card3D } from './Card3D';
import { CertificateInspectorModal } from './CertificateInspectorModal';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<CertificationItem[]>(CERTIFICATIONS);
  const [activeIssuerFilter, setActiveIssuerFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCertForModal, setSelectedCertForModal] = useState<CertificationItem | null>(null);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'3d-carousel' | 'grid'>('3d-carousel');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Editable states
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<CertificationItem | null>(null);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filteredCerts = certs.filter((cert) => {
    const matchesIssuer = activeIssuerFilter === 'ALL' || cert.issuer.toLowerCase().includes(activeIssuerFilter.toLowerCase()) || (activeIssuerFilter === 'Google' && cert.issuer.includes('Google'));
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skillsCovered.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIssuer && matchesSearch;
  });

  const handleOpenInspector = (cert: CertificationItem) => {
    setSelectedCertForModal(cert);
    setIsInspectorOpen(true);
  };

  const nextSlide = () => {
    if (filteredCerts.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % filteredCerts.length);
  };

  const prevSlide = () => {
    if (filteredCerts.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + filteredCerts.length) % filteredCerts.length);
  };

  const startEdit = (cert: CertificationItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingCertId(cert.id);
    setEditFormData({ ...cert });
  };

  const saveEdit = () => {
    if (!editFormData) return;
    setCerts((prev) => prev.map((c) => (c.id === editFormData.id ? editFormData : c)));
    setEditingCertId(null);
    setEditFormData(null);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18">
        
        {/* Section Header with View Modes */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold ${
              isDark 
                ? 'bg-indigo-950/50 border-indigo-500/30 text-cyan-300' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-800'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D HOLOGRAPHIC VAULT • VERIFIED CREDENTIALS</span>
            </div>
            <h2
              id="certifications-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Certifications &amp; Credentials
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg mt-2 max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Verified credentials from industry leaders including Google, Microsoft, DeepLearning.AI, and LLM Security Institutes. Click any credential to inspect curriculum.
            </p>
          </div>

          {/* View Mode & Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className={`flex items-center p-1 rounded-xl border text-xs font-mono ${
              isDark ? 'bg-[#0d1122]/90 border-indigo-500/20' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                id="cert-viewmode-carousel"
                onClick={() => setViewMode('3d-carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold ${
                  viewMode === '3d-carousel'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Vault Carousel</span>
              </button>

              <button
                id="cert-viewmode-grid"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-bold ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Grid ({certs.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className={`p-4 rounded-2xl border mb-10 flex flex-wrap items-center justify-between gap-4 ${
          isDark ? 'bg-[#0d1122]/80 border-indigo-500/20 backdrop-blur-xl' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {/* Issuer Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className={`font-bold mr-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Issuer:</span>
            {['ALL', 'Google', 'Microsoft', 'LLM Security', 'DeepLearning.AI', 'Postman'].map((name) => {
              const isActive = activeIssuerFilter.toLowerCase().includes(name.toLowerCase()) || (name === 'ALL' && activeIssuerFilter === 'ALL');
              return (
                <button
                  key={name}
                  onClick={() => setActiveIssuerFilter(name === 'LLM Security' ? 'LLM Security Institute' : name)}
                  className={`px-3 py-1 rounded-lg border transition-all font-semibold ${
                    isActive
                      ? isDark
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                      : isDark
                        ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-black'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[220px]">
            <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`} />
            <input
              type="text"
              placeholder="Search skill, title or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-400' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500'
              }`}
            />
          </div>
        </div>

        {/* 3D Interactive Carousel View */}
        {viewMode === '3d-carousel' && filteredCerts.length > 0 && (
          <div className="relative py-6">
            {/* Active 3D Slide */}
            <div className="max-w-3xl mx-auto">
              {filteredCerts[carouselIndex] && (
                <Card3D depth={35} intensity={20} glareOpacity={0.25} className="w-full">
                  <div
                    onClick={() => handleOpenInspector(filteredCerts[carouselIndex])}
                    className={`rounded-3xl p-7 sm:p-10 border relative overflow-hidden cursor-pointer transition-all shadow-2xl ${
                      isDark 
                        ? 'bg-[#0d1122]/90 backdrop-blur-xl border-indigo-500/25 text-white hover:border-cyan-400/50 shadow-indigo-950/40' 
                        : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-300 shadow-xl'
                    }`}
                  >
                    {/* Top Row */}
                    <div className={`flex items-center justify-between gap-4 pb-5 border-b ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                          isDark ? 'bg-indigo-950/60 border-indigo-500/30 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                        }`}>
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider block opacity-70">
                            {filteredCerts[carouselIndex].issuer}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${
                            isDark ? 'bg-indigo-950/40 border-indigo-500/20 text-indigo-300' : 'bg-indigo-50 border-indigo-100 text-indigo-800'
                          }`}>
                            {filteredCerts[carouselIndex].credentialLevel || 'Professional'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{filteredCerts[carouselIndex].status}</span>
                        </span>
                      </div>
                    </div>

                    {/* Certificate Main Title */}
                    <div className="py-6">
                      <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight mb-3">
                        {filteredCerts[carouselIndex].title}
                      </h3>
                      <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {filteredCerts[carouselIndex].description}
                      </p>

                      {/* Validated Skills Chips */}
                      <div className="space-y-2">
                        <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Validated Competencies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {(filteredCerts[carouselIndex]?.skillsCovered || []).map((skill) => (
                            <span
                              key={skill}
                              className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                                isDark 
                                  ? 'bg-indigo-950/40 text-cyan-300 border-indigo-500/20' 
                                  : 'bg-indigo-50 text-indigo-900 border-indigo-100'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA bar */}
                    <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2 text-xs font-mono opacity-80">
                        <span>Issued: {filteredCerts[carouselIndex].year}</span>
                        <span>•</span>
                        <span>ID: {filteredCerts[carouselIndex].credentialId?.substring(0, 14)}...</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenInspector(filteredCerts[carouselIndex]);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/25"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Verification</span>
                      </button>
                    </div>
                  </div>
                </Card3D>
              )}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className={`p-3 rounded-full border transition-all active:scale-95 ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-white hover:border-cyan-400' : 'bg-white border-slate-300 text-black hover:border-indigo-400 shadow-sm'
                }`}
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {filteredCerts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      carouselIndex === idx 
                        ? 'w-8 bg-gradient-to-r from-indigo-500 to-cyan-400'
                        : isDark ? 'w-2.5 bg-slate-800' : 'w-2.5 bg-slate-300'
                    }`}
                    aria-label={`Certificate ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className={`p-3 rounded-full border transition-all active:scale-95 ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-white hover:border-cyan-400' : 'bg-white border-slate-300 text-black hover:border-indigo-400 shadow-sm'
                }`}
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Grid View */}
        {(viewMode === 'grid' || filteredCerts.length === 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <Card3D key={cert.id} depth={16} intensity={12} className="h-full">
                <div
                  id={`cert-card-${cert.id}`}
                  onClick={() => handleOpenInspector(cert)}
                  className={`rounded-2xl p-6 border flex flex-col justify-between h-full cursor-pointer transition-all ${
                    isDark 
                      ? 'bg-[#0d1122]/80 backdrop-blur-xl border-indigo-500/20 text-white hover:border-cyan-400/50 shadow-lg shadow-black/25' 
                      : 'bg-white border-slate-200 text-slate-950 hover:border-indigo-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className={`flex items-center justify-between gap-2 mb-4 pb-3 border-b ${
                      isDark ? 'border-indigo-500/15' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                          isDark ? 'bg-indigo-950/60 border-indigo-500/30 text-cyan-300' : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                        }`}>
                          <Award className="w-4 h-4" />
                        </div>
                        <span className={`font-mono text-xs font-semibold ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {cert.issuer}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1 font-semibold ${
                          isDark 
                            ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400' 
                            : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        }`}>
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span>{cert.status}</span>
                        </span>
                        <button
                          onClick={(e) => startEdit(cert, e)}
                          className={`p-1 rounded transition-colors ${
                            isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-black'
                          }`}
                          title="Edit credential details"
                        >
                          <Edit3 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl mb-2">
                      {cert.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>

                    {/* Competencies Validated */}
                    <div className="space-y-2">
                      <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Competencies Validated
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {(cert.skillsCovered || []).map((skill) => (
                          <span
                            key={skill}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                              isDark 
                                ? 'bg-indigo-950/40 text-cyan-300 border-indigo-500/20' 
                                : 'bg-indigo-50 text-indigo-900 border-indigo-100'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom status */}
                  <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    isDark ? 'border-indigo-500/15 text-slate-400' : 'border-slate-200 text-slate-600'
                  }`}>
                    <span>Term: {cert.year}</span>
                    <span className="font-bold flex items-center gap-1 text-cyan-400">
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

      </div>

      {/* 3D Certificate Inspection Modal */}
      <CertificateInspectorModal
        certificate={selectedCertForModal}
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />
    </section>
  );
};
