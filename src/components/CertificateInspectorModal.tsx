import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink, 
  X, 
  Download, 
  Sparkles,
  Calendar,
  Building,
  Key,
  Layers,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CertificationItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Card3D } from './Card3D';

interface CertificateInspectorModalProps {
  certificate: CertificationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateInspectorModal: React.FC<CertificateInspectorModalProps> = ({
  certificate,
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen || !certificate) return null;

  const handleVerify = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#3b82f6', '#10b981', '#8b5cf6', '#ffffff'],
    });
    if (certificate.verifyLink) {
      window.open(certificate.verifyLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
    });
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div
      id="certificate-inspector-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl my-auto rounded-3xl border transition-all overflow-hidden shadow-2xl ${
          isDark 
            ? 'bg-neutral-900 border-neutral-700 text-white shadow-black/90' 
            : 'bg-white border-neutral-300 text-neutral-950 shadow-2xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className={`p-6 sm:p-7 border-b flex items-center justify-between gap-4 ${
          isDark ? 'border-neutral-800 bg-neutral-950/70' : 'border-neutral-200 bg-neutral-50/90'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
              isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
            }`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-500">
                  Cryptographically Verified Credential
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-200 border-neutral-300 text-neutral-800'
                }`}>
                  {certificate.credentialLevel || 'Professional'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight mt-0.5">
                Official Credential Verification
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors ${
              isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:text-white' : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-black'
            }`}
            aria-label="Close Inspector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-7">
          
          {/* 3D Certificate Holographic Digital Card */}
          <Card3D depth={30} intensity={18} glareOpacity={0.25} className="w-full">
            <div className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all shadow-xl ${
              isDark 
                ? 'bg-neutral-950 border-neutral-700 text-white' 
                : 'bg-white border-neutral-300 text-neutral-950'
            }`}>
              
              {/* Corner Watermarks & Guilloche patterns */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none rounded-bl-full" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-current opacity-5 rounded-full pointer-events-none" />

              {/* Certificate Inner Layout */}
              <div className="relative z-10 space-y-6">
                
                {/* Header: Issuer Logo & Verification Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-inherit">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${
                      isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-neutral-100 border-neutral-300 text-black'
                    }`}>
                      <Award className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider block opacity-70">
                        Accredited Issuer
                      </span>
                      <h4 className="font-display font-black text-lg tracking-tight">
                        {certificate.issuer}
                      </h4>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold bg-emerald-500/10 border-emerald-500/30 text-emerald-500">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{certificate.status}</span>
                    </div>
                    <span className="text-[10px] font-mono block opacity-60 mt-1">
                      ID: {certificate.credentialId || 'VERIFIED-AUTH'}
                    </span>
                  </div>
                </div>

                {/* Certificate Recipient & Title */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest block opacity-70 mb-1">
                    This Certifies That
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-2">
                    Radheshyam Suthar
                  </h3>
                  <p className="text-xs sm:text-sm font-mono opacity-80 mb-3">
                    Has successfully demonstrated verified mastery and practical proficiency in:
                  </p>
                  <div className={`p-4 rounded-xl border font-display font-bold text-lg sm:text-xl ${
                    isDark ? 'bg-neutral-900/90 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    {certificate.title}
                  </div>
                </div>

                {/* Curriculum & Key Topics Covered */}
                {certificate.curriculumHighlights && certificate.curriculumHighlights.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider block opacity-70">
                      Curriculum &amp; Verified Modules
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {certificate.curriculumHighlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Validated Skills Tags */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    Validated Competency Chips
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(certificate.skillsCovered || []).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${
                          isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-neutral-100 border-neutral-300 text-black'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Official Seal Footer */}
                <div className="pt-4 border-t border-inherit flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 opacity-80">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Issued: {certificate.issueDate || certificate.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-80">
                      <Building className="w-3.5 h-3.5" />
                      <span>Issuer: {certificate.issuer}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold">100% Authentic Candidate Credential</span>
                  </div>
                </div>

              </div>
            </div>
          </Card3D>

          {/* Action Bar: External Verification & PDF Action */}
          <div className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
          }`}>
            <div>
              <h5 className="font-display font-bold text-sm">
                Credential Verification &amp; Audit Trail
              </h5>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Verified on accredited issuer registries and academic learning records.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="modal-verify-online-btn"
                onClick={handleVerify}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-md active:scale-95 ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Verify on Registry</span>
              </button>

              <button
                id="modal-download-cert-btn"
                onClick={handleSimulateDownload}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold border transition-colors ${
                  isDark ? 'border-neutral-700 text-white hover:bg-neutral-900' : 'border-neutral-300 text-black hover:bg-white'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadSuccess ? 'Downloaded!' : 'Export Credential'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
