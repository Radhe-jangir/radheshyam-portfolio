import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Sparkles,
  Terminal,
  Code2
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#skills' },
    { label: '3D Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Focus', href: '#focus' },
    { label: 'Why Me', href: '#whyme' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#070913]/85 backdrop-blur-xl border-b border-indigo-500/15 py-3 shadow-2xl shadow-black/60'
            : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md shadow-slate-200/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          id="nav-logo"
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm tracking-wider transition-all duration-300 group-hover:scale-105 ${
            isDark 
              ? 'bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
              : 'bg-gradient-to-tr from-indigo-600 to-cyan-600 text-white shadow-md'
          }`}>
            RS
          </div>

          <div className="flex flex-col">
            <span className={`font-display font-bold text-sm tracking-tight transition-colors ${
              isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-indigo-600'
            }`}>
              {PERSONAL_INFO.name}
            </span>
            <span className={`font-mono text-[9px] tracking-widest uppercase font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              AI/ML • DATA ANALYTICS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs font-semibold uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                id={`nav-link-${link.href.substring(1)}`}
                href={link.href}
                className={`transition-all py-1 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? isDark
                      ? 'text-cyan-400 font-bold underline underline-offset-8 decoration-cyan-400 decoration-2'
                      : 'text-indigo-600 font-bold underline underline-offset-8 decoration-indigo-600 decoration-2'
                    : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            className={`p-2 rounded-xl border transition-all active:scale-95 flex items-center justify-center ${
              isDark 
                ? 'bg-slate-900/80 border-slate-800 text-amber-300 hover:bg-slate-800 hover:border-amber-400/40 shadow-sm' 
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 hover:border-slate-400 shadow-sm'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-900 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Quick Copy Email Button */}
          <button
            id="nav-copy-email-btn"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono border transition-all active:scale-95 ${
              isDark 
                ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-white' 
                : 'bg-white border-slate-300 text-slate-700 hover:border-indigo-400 hover:text-black shadow-sm'
            }`}
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-70" />
                <span className="text-[11px]">Copy Email</span>
              </>
            )}
          </button>

          {/* Connect CTA Button */}
          <a
            id="nav-connect-btn"
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/20 transition-all active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            id="mobile-theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl border transition-colors ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-amber-300' 
                : 'bg-slate-100 border-slate-300 text-slate-800'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-900" />}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-xl border transition-colors ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-white' 
                : 'bg-slate-100 border-slate-300 text-black'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className={`xl:hidden fixed inset-x-0 top-[60px] p-6 border-b shadow-2xl transition-all ${
            isDark ? 'bg-[#070913]/95 backdrop-blur-2xl border-indigo-500/20 text-white' : 'bg-white/95 backdrop-blur-2xl border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeSection === link.href.substring(1)
                    ? isDark ? 'bg-indigo-950/60 text-cyan-400' : 'bg-indigo-50 text-indigo-600'
                    : isDark ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  handleCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono border flex items-center justify-center gap-2 ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-800'
                }`}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-md"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
