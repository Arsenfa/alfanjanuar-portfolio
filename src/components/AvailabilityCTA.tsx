import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AvailabilityContent } from '../types';
import { useInView } from '../hooks/useInView';

interface AvailabilityCTAProps {
  content: AvailabilityContent;
  onContactClick: () => void;
}

export function AvailabilityCTA({ content, onContactClick }: AvailabilityCTAProps) {
  const { ref, isInView } = useInView({ rootMargin: '-100px' });

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div
        ref={ref}
        className={`reveal ${isInView ? 'visible' : ''} relative overflow-hidden rounded-[8px] bg-[#020817] text-white px-6 py-14 sm:px-10 sm:py-16 md:px-16`}
      >
        {/* Soft light for depth against the otherwise all-white page (not a gradient blob) */}
        <div className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full bg-white/[0.06] blur-3xl"></div>

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-center">
          {/* Left: message */}
          <div className="lg:col-span-8">
            {/* Availability: a single, semantic status indicator */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-zinc-200">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              {content.headline}
            </h2>
            <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {content.subtext}
            </p>
          </div>

          {/* Right: action */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onContactClick}
              className="hover-scale inline-flex items-center justify-center gap-2 bg-white text-[#020817] hover:bg-zinc-100 active:bg-zinc-200 text-base font-semibold px-7 py-3.5 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#020817] cursor-pointer"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
