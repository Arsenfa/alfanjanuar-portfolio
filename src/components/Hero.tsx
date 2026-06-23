import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { XIcon } from './XIcon';
import { Mode } from '../types';

interface HeroProps {
  mode: Mode;
  role: string;
  tagline: string;
  onModeChange: (mode: Mode) => void;
  onViewWorkClick: () => void;
  onGetInTouchClick: () => void;
}

const MODES: { id: Mode; label: string }[] = [
  { id: 'developer', label: 'Developer' },
  { id: 'sales', label: 'Sales' },
];

export function Hero({ mode, role, tagline, onModeChange, onViewWorkClick, onGetInTouchClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center select-none"
    >
      {/* Decorative floating accent */}
      <div className="absolute top-1/4 left-1/10 w-24 h-24 bg-[#E2E8F0]/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/10 w-32 h-32 bg-[#F1F5F9]/40 rounded-full blur-3xl -z-10"></div>

      {/* Mode toggle: Developer / Sales */}
      <div
        role="tablist"
        aria-label="Choose which portfolio to view"
        className="animate-fade-slide-up inline-flex items-center gap-1 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] p-1 mb-8"
        style={{ animationDelay: '0s' }}
      >
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => onModeChange(m.id)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 ${
              mode === m.id ? 'bg-[#020817] text-white' : 'text-[#64748B] hover:text-[#020817]'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Hero Headline Group */}
      <div className="max-w-[800px] flex flex-col gap-4">
        <h1
          className="animate-fade-slide-up text-[#020817] font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight md:leading-[1]"
          style={{ animationDelay: '0.1s' }}
        >
          Hi, I'm Alfan Januar
        </h1>

        <h2
          className="animate-fade-slide-up text-[#020817] text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight"
          style={{ animationDelay: '0.25s' }}
        >
          {role}
        </h2>

        <p
          className="animate-fade-slide-up text-[#64748B] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-4"
          style={{ animationDelay: '0.4s' }}
        >
          {tagline}
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        className="animate-fade-slide-up flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4"
        style={{ animationDelay: '0.55s' }}
      >
        <button
          onClick={onViewWorkClick}
          className="hover-scale bg-[#020817] text-white hover:bg-[#0F172A] active:bg-[#020817] active:text-[#E5E7EB] text-base font-medium px-6 py-3 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 cursor-pointer text-center"
        >
          View My Work
        </button>
        <button
          onClick={onGetInTouchClick}
          className="hover-scale bg-white text-[#020817] border border-[#E5E7EB] hover:bg-[#F8FAFC] hover:border-[#64748B] active:bg-[#F1F5F9] active:text-[#0F172A] text-base font-medium px-6 py-3 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 cursor-pointer text-center"
        >
          Get in Touch
        </button>
      </div>

      {/* Social Network Icons */}
      <div
        className="animate-fade-slide-up flex items-center gap-6 mt-12"
        style={{ animationDelay: '0.7s' }}
      >
        <a
          href="https://github.com/alfanjanuar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale-lg p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="GitHub Account"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://bit.ly/alfan-januar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale-lg p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/fanllyl/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale-lg p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="Instagram Profile"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/fanlleys"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-scale-lg p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="X Profile"
        >
          <XIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
