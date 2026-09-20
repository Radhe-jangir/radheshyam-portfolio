import React, { useState, useEffect } from 'react';
import { greeting } from '../portfolio';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? isDark
            ? 'bg-[#171c28]/95 backdrop-blur-md border-b border-[#2d3748] py-3 shadow-md'
            : 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] py-3 shadow-sm'
          : isDark
          ? 'bg-[#171c28] py-4'
          : 'bg-[#ffffff] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="font-mono text-lg sm:text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          style={{ color: isDark ? '#ffffff' : '#1d212a' }}
        >
          {greeting.logo_name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-500 font-semibold'
                    : isDark
                    ? 'text-[#868e96] hover:text-white'
                    : 'text-[#555555] hover:text-black'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition-colors ${
              isDark
                ? 'bg-[#242c3d] border-[#39445a] text-[#ffd700] hover:bg-[#2e384d]'
                : 'bg-[#f1f3f5] border-[#e9ecef] text-[#495057] hover:bg-[#e9ecef]'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-1.5 rounded-full border transition-colors ${
              isDark
                ? 'bg-[#242c3d] border-[#39445a] text-[#ffd700]'
                : 'bg-[#f1f3f5] border-[#e9ecef] text-[#495057]'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className={`p-1.5 rounded-md ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className={`md:hidden border-b px-4 py-4 ${
            isDark ? 'bg-[#171c28] border-[#2d3748]' : 'bg-white border-[#e2e8f0]'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium py-1 ${
                  activeSection === item.id
                    ? 'text-blue-500 font-semibold'
                    : isDark
                    ? 'text-[#868e96] hover:text-white'
                    : 'text-[#555555] hover:text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
