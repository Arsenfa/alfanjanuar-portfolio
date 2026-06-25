import React from 'react';
import { Education } from '../types';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  const { ref, isInView } = useInView({ rootMargin: '-100px' });

  return (
    <section id="education" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-[#020817] mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Education cards */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white border border-[#E5E7EB] rounded-[8px] p-6 md:p-8 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_12px_0px] transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="p-2.5 bg-[#F1F5F9] text-[#020817] rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-[#020817] text-xl md:text-2xl font-bold tracking-tight">
                      {edu.school}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#0F172A] font-medium text-[16px]">
                      <span>{edu.program}</span>
                      {edu.location && (
                        <span className="flex items-center gap-1.5 text-[#64748B]">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      )}
                    </div>
                    {edu.gpa && (
                      <span className="inline-flex items-center gap-1.5 text-[#0F172A] text-[14px] font-medium pt-1">
                        <Award className="w-4 h-4 text-[#64748B]" />
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Period */}
                <span className="text-[#64748B] text-[14px] font-medium flex items-center gap-1.5 whitespace-nowrap md:pt-1">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
