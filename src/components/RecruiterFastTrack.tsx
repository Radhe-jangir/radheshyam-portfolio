import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  ArrowRight, 
  FileText, 
  Mail, 
  Send, 
  X, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RECRUITER_ROLES, PERSONAL_INFO, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Card3D } from './Card3D';

interface RecruiterFastTrackProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const RecruiterFastTrack: React.FC<RecruiterFastTrackProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedRoleId, setSelectedRoleId] = useState<string>('aiml-engineer');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentRole = RECRUITER_ROLES.find((r) => r.id === selectedRoleId) || RECRUITER_ROLES[0];
  const matchedProjectsData = PROJECTS.filter((p) => currentRole.recommendedProjects.includes(p.id));

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: isDark ? ['#ffffff', '#a3a3a3', '#737373'] : ['#000000', '#525252', '#a3a3a3'],
    });
  };

  const copyExecutiveSummary = () => {
    const text = `Candidate: ${PERSONAL_INFO.name} (${PERSONAL_INFO.headline})\n` +
      `Target Role Match: ${currentRole.title} (${currentRole.fitScore}% Match)\n` +
      `Education: ${PERSONAL_INFO.education.degree}, ${PERSONAL_INFO.education.institution}\n` +
      `Key Strengths:\n${currentRole.keyStrengths.map(s => `- ${s}`).join('\n')}\n` +
      `Contact: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.githubUrl}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    triggerCelebration();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="recruiter-fast-track-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl my-auto rounded-3xl border transition-all overflow-hidden shadow-2xl ${
          isDark 
            ? 'bg-neutral-900 border-neutral-700 text-white shadow-black/80' 
            : 'bg-white border-neutral-300 text-neutral-950 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top 3D Header Bar */}
        <div className={`p-6 sm:p-8 border-b flex items-center justify-between flex-wrap gap-4 ${
          isDark ? 'border-neutral-800 bg-neutral-950/70' : 'border-neutral-200 bg-neutral-50/90'
        }`}>
          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-md ${
              isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
            }`}>
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
                  isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-200 border-neutral-300 text-neutral-800'
                }`}>
                  3D Recruiter Cockpit
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-500">Available Immediately</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight mt-0.5">
                Hiring Manager Fast Track
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="copy-summary-btn"
              onClick={copyExecutiveSummary}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all active:scale-95 ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700' 
                  : 'bg-neutral-100 border-neutral-300 text-black hover:bg-neutral-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>{copied ? 'Summary Copied!' : 'Copy Evaluation'}</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white' : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black'
              }`}
              aria-label="Close Cockpit"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          
          {/* Target Role Selector Tabs */}
          <div>
            <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-3 ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              1. Select Open Role For Candidate Fit Assessment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {RECRUITER_ROLES.map((role) => {
                const isSelected = selectedRoleId === role.id;
                return (
                  <button
                    key={role.id}
                    id={`role-select-${role.id}`}
                    onClick={() => {
                      setSelectedRoleId(role.id);
                      triggerCelebration();
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                      isSelected
                        ? isDark
                          ? 'bg-white text-black border-white shadow-lg'
                          : 'bg-black text-white border-black shadow-lg'
                        : isDark
                          ? 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-80">
                        Match Score
                      </span>
                      <span className={`text-xs font-mono font-black px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? isDark ? 'bg-black text-white' : 'bg-white text-black'
                          : isDark ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-black'
                      }`}>
                        {role.fitScore}%
                      </span>
                    </div>
                    <div className="font-display font-bold text-sm leading-snug">
                      {role.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Role Fit Assessment Card */}
          <Card3D depth={25} intensity={10} className="w-full">
            <div className={`p-6 sm:p-7 rounded-2xl border ${
              isDark 
                ? 'bg-neutral-950/90 border-neutral-800 text-white' 
                : 'bg-neutral-50 border-neutral-200 text-neutral-950'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-inherit">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
                      Evaluated Role Fit: {currentRole.fitScore}% Compatible
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-black tracking-tight mt-1">
                    {currentRole.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20for%20${encodeURIComponent(currentRole.title)}&body=Hi%20Radheshyam,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20are%20impressed%20by%20your%20projects.%20We%20would%20love%20to%20schedule%20a%20technical%20interview%20for%20the%20${encodeURIComponent(currentRole.title)}%20position.`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md active:scale-95 ${
                      isDark 
                        ? 'bg-white text-black hover:bg-neutral-200' 
                        : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Interview Invite</span>
                  </a>
                </div>
              </div>

              {/* Assessment Narrative */}
              <p className={`text-xs sm:text-sm leading-relaxed my-4 ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {currentRole.readinessSummary}
              </p>

              {/* Key Strengths & Matched Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
                <div className="space-y-2">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Demonstrated Competencies
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {currentRole.keyStrengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Verified Stack Match
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentRole.matchedSkills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${
                          isDark 
                            ? 'bg-neutral-900 border-neutral-700 text-white' 
                            : 'bg-white border-neutral-300 text-black'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Recommended Relevant Projects for this role */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                2. Recommended Work Samples &amp; Architectures
              </label>
              <span className={`text-[11px] font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {matchedProjectsData.length} Relevant Systems
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchedProjectsData.map((project) => (
                <div
                  key={project.id}
                  className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    isDark 
                      ? 'bg-neutral-950 border-neutral-800 text-white hover:border-neutral-700' 
                      : 'bg-neutral-50 border-neutral-200 text-neutral-950 hover:border-neutral-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono opacity-70 mb-1">
                      <span>PROJECT {project.number}</span>
                      <span className="font-bold">{project.categories[0]}</span>
                    </div>
                    <h5 className="font-display font-bold text-base mb-1">
                      {project.title}
                    </h5>
                    <p className={`text-xs line-clamp-2 leading-relaxed mb-3 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-inherit">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[11px] font-mono font-semibold inline-flex items-center gap-1 hover:underline ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      <span>Inspect Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    {onSelectProject && (
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProject(project.id);
                        }}
                        className={`text-[11px] font-mono font-bold px-2 py-1 rounded border transition-colors ${
                          isDark 
                            ? 'bg-white text-black border-white' 
                            : 'bg-black text-white border-black'
                        }`}
                      >
                        Deep Dive
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Credentials Overview */}
          <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-5 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-100 border-neutral-300'
          }`}>
            <div>
              <h5 className="font-display font-bold text-lg">
                Ready for Technical Interviews &amp; Rapid Onboarding
              </h5>
              <p className={`text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Email directly at <strong className={isDark ? 'text-white' : 'text-black'}>{PERSONAL_INFO.email}</strong> • Responds within 24 hours.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20from%20Portfolio`}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md active:scale-95 ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                Direct Email
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border transition-colors ${
                  isDark ? 'border-neutral-700 text-white hover:bg-neutral-900' : 'border-neutral-300 text-black hover:bg-white'
                }`}
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
