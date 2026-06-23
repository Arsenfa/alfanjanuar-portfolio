import React from 'react';
import { Experience } from '../types';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { ref, isInView } = useInView({ rootMargin: '-100px' });

  return (
    <section id="experience" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-[#020817] mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Experience Timeline Grid container */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-[#E5E7EB] rounded-[8px] p-6 md:p-8 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] space-y-6 hover:shadow-[rgba(0,0,0,0.08)_0px_4px_12px_0px] transition-shadow duration-300"
            >
              {/* Title / Meta Info Row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                <div className="space-y-1.5">
                  <h3 className="text-[#020817] text-xl md:text-2xl font-bold tracking-tight">
                    {exp.role}
                  </h3>

                  {/* Organization and location info */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#0F172A] font-medium text-[16px]">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#64748B]" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#64748B]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Period / Type Tag group */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2.5">
                  <span className="bg-[#F1F5F9] text-[#020817] text-[14px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.type}
                  </span>
                  <span className="text-[#64748B] text-[14px] font-medium flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet achievements and details */}
              <div className="space-y-4">
                <h4 className="text-[#020817] text-[16px] font-semibold">
                  {exp.descriptionTitle}
                </h4>

                <ul className="space-y-3 pl-1.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-[#0F172A] text-[16px] font-normal leading-[24px]">
                      <span className="text-[#64748B] font-semibold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies utilized labels */}
              <div className="space-y-2.5 pt-2">
                <span className="block text-[#64748B] text-[14px] font-semibold uppercase tracking-wider">
                  Skills & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F1F5F9] text-[#020817] text-[14px] font-normal px-3 py-1.5 rounded-full whitespace-nowrap select-none border border-[#E2E8F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
