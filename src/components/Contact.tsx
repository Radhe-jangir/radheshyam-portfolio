import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  MessageSquare,
  FileCheck
} from 'lucide-react';
import { Card3D } from './Card3D';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage) return;

    // Compose mailto URI
    const subjectEncoded = encodeURIComponent(
      formSubject || `Portfolio Inquiry from ${formName}`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 xl:py-32 relative overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4 border font-semibold ${
            isDark 
              ? 'bg-neutral-900 border-neutral-700 text-neutral-200' 
              : 'bg-neutral-100 border-neutral-300 text-neutral-800'
          }`}>
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S COLLABORATE</span>
          </div>

          <h2
            id="contact-heading"
            className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-4 ${
              isDark ? 'text-white' : 'text-neutral-950'
            }`}
          >
            Have a problem <br />
            <span className={`underline decoration-2 underline-offset-8 ${
              isDark ? 'decoration-neutral-600' : 'decoration-neutral-400'
            }`}>
              worth solving?
            </span>
          </h2>

          <p className={`text-lg sm:text-xl lg:text-2xl font-medium ${
            isDark ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            Let&apos;s build something intelligent.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Links & Direct Email Copy Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card in 3D */}
            <Card3D depth={22} intensity={14}>
              <div
                id="contact-email-card"
                className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden transition-all shadow-xl ${
                  isDark 
                    ? 'bg-neutral-900/90 border-neutral-800 text-white' 
                    : 'bg-white border-neutral-200 text-neutral-950 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                    isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border font-semibold ${
                    isDark 
                      ? 'bg-neutral-950 border-neutral-800 text-neutral-300' 
                      : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                  }`}>
                    Direct Inbox
                  </span>
                </div>

                <span className={`text-xs font-mono uppercase tracking-wider block mb-1 font-semibold ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Official Email Address
                </span>
                <p className="font-mono text-sm sm:text-base font-bold break-all mb-4">
                  {PERSONAL_INFO.email}
                </p>

                {/* Copy Email Button */}
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold border transition-all active:scale-95 shadow-sm ${
                    isDark 
                      ? 'bg-white text-black border-white hover:bg-neutral-200' 
                      : 'bg-black text-white border-black hover:bg-neutral-800'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </Card3D>

            {/* Social Connect Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                id="contact-linkedin-card"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between group transition-all ${
                  isDark 
                    ? 'bg-neutral-900/80 border-neutral-800 text-white hover:border-neutral-700' 
                    : 'bg-white border-neutral-200 text-neutral-950 hover:border-neutral-400 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                    isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
                  }`}>
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-display font-bold text-xs">LinkedIn</span>
                    <span className={`block font-mono text-[10px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Professional</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                id="contact-github-card"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between group transition-all ${
                  isDark 
                    ? 'bg-neutral-900/80 border-neutral-800 text-white hover:border-neutral-700' 
                    : 'bg-white border-neutral-200 text-neutral-950 hover:border-neutral-400 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                    isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-100 border-neutral-300'
                  }`}>
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-display font-bold text-xs">GitHub</span>
                    <span className={`block font-mono text-[10px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Repositories</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Recruiter Quick Status */}
            <div className={`p-4 rounded-xl border text-xs font-mono space-y-1.5 ${
              isDark ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
            }`}>
              <div className="flex items-center gap-2 font-bold text-[11px]">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Recruiter Summary</span>
              </div>
              <p className={`text-[11px] leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Currently open for AI/ML Engineer roles, Data Analyst fellowships, and Python Machine Learning positions.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <Card3D depth={18} intensity={10}>
              <div
                id="contact-form-card"
                className={`rounded-3xl p-6 sm:p-8 border relative transition-all shadow-xl ${
                  isDark 
                    ? 'bg-neutral-900/85 border-neutral-800 text-white' 
                    : 'bg-white border-neutral-200 text-neutral-950 shadow-md'
                }`}
              >
                <div className={`flex items-center gap-2 pb-4 mb-6 border-b ${
                  isDark ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                  <MessageSquare className="w-4 h-4" />
                  <h3 className="font-display font-bold text-lg">
                    Send Direct Message
                  </h3>
                </div>

                {formSent ? (
                  <div className={`p-6 rounded-xl border text-center space-y-3 ${
                    isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto ${
                      isDark ? 'bg-neutral-800 border-neutral-700 text-white' : 'bg-neutral-200 border-neutral-300 text-black'
                    }`}>
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg">
                      Message Prepared!
                    </h4>
                    <p className={`text-xs font-mono ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      Your default mail client has opened with the draft. You can also reach Radheshyam directly at{' '}
                      <span className="font-bold underline">{PERSONAL_INFO.email}</span>.
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className={`px-4 py-2 rounded-lg border text-xs font-mono font-bold transition-colors ${
                        isDark ? 'bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700' : 'bg-neutral-100 border-neutral-300 text-black hover:bg-neutral-200'
                      }`}
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                          Your Name *
                        </label>
                        <input
                          id="contact-form-name"
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className={`w-full p-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                            isDark 
                              ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-white' 
                              : 'bg-white border-neutral-300 text-black placeholder-neutral-400 focus:border-black shadow-sm'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                          Your Email *
                        </label>
                        <input
                          id="contact-form-email"
                          type="email"
                          required
                          placeholder="sarah@company.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className={`w-full p-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                            isDark 
                              ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-white' 
                              : 'bg-white border-neutral-300 text-black placeholder-neutral-400 focus:border-black shadow-sm'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Subject / Opportunity Type
                      </label>
                      <input
                        id="contact-form-subject"
                        type="text"
                        placeholder="AI/ML Internship / Project Collaboration / Inquiry"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className={`w-full p-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                          isDark 
                            ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-white' 
                            : 'bg-white border-neutral-300 text-black placeholder-neutral-400 focus:border-black shadow-sm'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-mono mb-1.5 font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        Message *
                      </label>
                      <textarea
                        id="contact-form-message"
                        required
                        rows={4}
                        placeholder="Hi Radheshyam, I saw your work on SentiForge and Predictra AI..."
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className={`w-full p-3 rounded-xl border text-xs font-mono focus:outline-none transition-all ${
                          isDark 
                            ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500 focus:border-white' 
                            : 'bg-white border-neutral-300 text-black placeholder-neutral-400 focus:border-black shadow-sm'
                        }`}
                      />
                    </div>

                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide transition-all active:scale-98 shadow-md ${
                        isDark 
                          ? 'bg-white text-black hover:bg-neutral-200' 
                          : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to Radheshyam</span>
                    </button>
                  </form>
                )}
              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
