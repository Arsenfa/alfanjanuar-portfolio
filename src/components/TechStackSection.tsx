import React from 'react';
import { techStackData } from '../data';
import { Monitor, Palette, Code2, GitFork, Smartphone, Cpu, HelpCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Palette,
  Code2,
  GitFork,
  Smartphone,
  Cpu,
};

export function TechStackSection() {
  return (
    <section id="skills" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16 bg-[#F8FAFC]">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div>
          <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5">
            Technologies, tools, and AI workflows I use to build responsive web and mobile applications.
          </p>
          <div className="w-16 h-1 bg-[#020817] mt-3 rounded-full"></div>
        </div>

        {/* Categories Grid - Responsive layout */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techStackData.map((category) => {
            // Resolve icon from explicit map to preserve tree-shaking
            const IconComponent = iconMap[category.icon] ?? HelpCircle;

            return (
              <motion.div
                key={category.id}
                whileHover={{ borderColor: "#64748B" }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#E5E7EB] rounded-[8px] p-6 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] hover:border-[#64748B] hover:shadow-[rgba(0,0,0,0.08)_0px_4px_12px_0px] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Title Row with Icon */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#F1F5F9] text-[#020817] rounded-lg">
                      <IconComponent className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <h3 className="text-[#020817] text-[18px] font-bold tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Subtext description */}
                  <p className="text-[#64748B] text-[14px] font-normal leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Specific skills layout */}
                <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-[#E2E8F0]">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F1F5F9] text-[#020817] text-[14px] font-normal px-2.5 py-1 rounded-full whitespace-nowrap select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
