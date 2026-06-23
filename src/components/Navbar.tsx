import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + 100;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 70;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className="animate-fade-slide-down sticky top-0 z-50 w-full h-[65px] bg-[rgba(255,255,255,0.95)] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection('home')}
          className="hover-scale text-[#020817] font-bold text-lg select-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          Alfan Januar
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover-scale text-base font-normal py-2 select-none cursor-pointer transition-colors duration-200 border-b-2 hover:text-[#0F172A] ${
                activeSection === item.id
                  ? 'border-[#020817] text-[#020817]'
                  : 'border-transparent text-[#64748B]'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Email Shortcut Icon */}
          <button
            onClick={onContactClick}
            className="hover-scale p-2 text-[#020817] bg-[#F1F5F9] rounded-lg hover:bg-[#E5E7EB] active:bg-[#E2E8F0] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2"
            title="Send an email"
          >
            <Mail className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onContactClick}
            className="hover-scale p-1.5 text-[#020817] bg-[#F1F5F9] rounded-lg"
          >
            <Mail className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover-scale p-2 text-[#020817] hover:bg-[#F8FAFC] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-[65px] left-0 w-full bg-white border-b border-[#E2E8F0] py-4 px-6 flex flex-col gap-4 shadow-lg md:hidden animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover-scale text-left text-base font-medium py-2.5 px-4 rounded-lg select-none cursor-pointer transition-colors ${
                activeSection === item.id
                  ? 'bg-[#F1F5F9] text-[#020817]'
                  : 'text-[#64748B] hover:bg-[#F8FAFC]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
