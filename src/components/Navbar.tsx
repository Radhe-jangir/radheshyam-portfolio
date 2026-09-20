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
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Focus', href: '#focus' },
    { label: 'Why Me', href: '#whyme' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-18 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          id="nav-logo"
          href="#home"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm tracking-wider transition-all duration-200 ${
            isDark 
              ? 'bg-white text-black shadow-sm' 
              : 'bg-black text-white shadow-sm'
          }`}>
            RS
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className={`font-display font-bold text-sm tracking-tight transition-colors ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              {/* Status Dot */}
              <span className={`hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                isDark 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300' 
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Available
              </span>
            </div>
            <span className={`font-mono text-[9px] tracking-widest uppercase font-semibold ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              AI/ML • DATA SYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs font-semibold uppercase tracking-wider">
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
                      ? 'text-white font-bold underline underline-offset-8 decoration-white decoration-2'
                      : 'text-black font-bold underline underline-offset-8 decoration-black decoration-2'
                    : isDark
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-black'
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
            className={`p-2 rounded-lg border transition-all active:scale-95 flex items-center justify-center ${
              isDark 
                ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-700' 
                : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200'
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-white transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-black transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Quick Copy Email Button */}
          <button
            id="nav-copy-email-btn"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all active:scale-95 ${
              isDark 
                ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white' 
                : 'bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-black'
            }`}
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span className="text-[11px] font-bold text-white">Copied!</span>
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
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
              isDark
                ? 'bg-white text-black hover:bg-neutral-200 shadow-sm'
                : 'bg-black text-white hover:bg-neutral-800 shadow-sm'
            }`}
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
            className={`p-2 rounded-lg border transition-colors ${
              isDark 
                ? 'bg-neutral-900 border-neutral-800 text-white' 
                : 'bg-neutral-100 border-neutral-300 text-black'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-black" />}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-lg border transition-colors ${
              isDark 
                ? 'bg-neutral-900 border-neutral-800 text-white' 
                : 'bg-neutral-100 border-neutral-300 text-black'
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
            isDark ? 'bg-black/95 backdrop-blur-xl border-neutral-800 text-white' : 'bg-white/95 backdrop-blur-xl border-neutral-200 text-black'
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
                    ? isDark ? 'bg-neutral-900 text-white font-bold' : 'bg-neutral-100 text-black font-bold'
                    : isDark ? 'text-neutral-400 hover:bg-neutral-900' : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  handleCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-mono border flex items-center justify-center gap-2 ${
                  isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-200' : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                }`}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold text-center ${
                  isDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}
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
