import React from 'react';
import { AboutContent } from '../types';
import { Monitor, Smartphone, Palette, Target, Users, TrendingUp, Download, ArrowRight, HelpCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Palette,
  Target,
  Users,
  TrendingUp,
};

interface AboutSectionProps {
  content: AboutContent;
  onHireClick: () => void;
}

export function AboutSection({ content, onHireClick }: AboutSectionProps) {
  const { ref, isInView } = useInView({ rootMargin: '-100px' });

  return (
    <section id="about" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5 max-w-2xl mx-auto">
            A bit about who I am and how I can help bring your product to life.
          </p>
          <div className="w-16 h-1 bg-[#020817] mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Two-column: photo left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Photo */}
          <div className="lg:col-span-5">
            {/* ponytail: mobile caps the portrait so it doesn't eat the screen; lg: restores the desktop size unchanged */}
            <div className="relative mx-auto w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[360px] aspect-[4/5] rounded-[8px] overflow-hidden border border-[#E5E7EB] bg-[#F8FAFC] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]">
              {/* Monogram fallback (shown until a real photo is added) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#020817] font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight select-none">AJ</span>
              </div>
              {/* Real photo: drop a file named profile.jpg into the public/ folder */}
              <img
                src="/profile.jpg"
                alt="Alfan Januar"
                loading="lazy"
                width={360}
                height={450}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                className="relative w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[#0F172A] text-lg leading-relaxed">
              {content.intro}
            </p>
            <p className="text-[#64748B] text-base leading-relaxed">
              {content.secondary}
            </p>

            {/* What I do */}
            <div className="space-y-3 pt-2">
              <span className="block text-[#64748B] text-[14px] font-semibold uppercase tracking-wider">
                What I do
              </span>
              <ul className="space-y-3">
                {content.whatIDo.map(({ icon, label }) => {
                  const Icon = iconMap[icon] ?? HelpCircle;
                  return (
                    <li key={label} className="flex items-center gap-3 text-[#0F172A] text-base">
                      <span className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onHireClick}
                className="hover-scale inline-flex items-center justify-center gap-2 bg-[#020817] text-white hover:bg-[#0F172A] active:bg-[#020817] active:text-[#E5E7EB] text-base font-medium px-6 py-3 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 cursor-pointer"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/cv-alfan-januar.pdf"
                download
                className="hover-scale inline-flex items-center justify-center gap-2 bg-white text-[#020817] border border-[#E5E7EB] hover:bg-[#F8FAFC] hover:border-[#64748B] active:bg-[#F1F5F9] text-base font-medium px-6 py-3 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
