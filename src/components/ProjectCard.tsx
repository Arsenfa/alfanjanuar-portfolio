import React from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onDetailClick: (project: Project) => void;
  key?: React.Key;
}

export function ProjectCard({ project, onDetailClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-[8px] border border-[#E5E7EB] hover:border-[#64748B] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden h-full"
    >
      {/* Visual Mockup Banner Container */}
      <div className="relative aspect-video w-full h-[220px] overflow-hidden border-b border-[#E5E7EB]">
        <ProjectMockup type={project.mockupType} />
      </div>

      {/* Card Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Header Row: Title and Project Category Indicator */}
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h4 id={`project-title-${project.id}`} className="text-[#020817] font-semibold text-[20px] leading-[28px]">
              {project.title}
            </h4>
            
            {/* Category tag */}
            <span className="bg-[#F1F5F9] text-[#020817] text-[14px] font-medium px-3 py-1 rounded-full whitespace-nowrap select-none">
              {project.isInternship ? 'Internship Project' : 'Personal Project'}
            </span>
          </div>

          {/* Description summary */}
          <p className="text-[#0F172A] text-[16px] font-normal leading-[24px]">
            {project.description}
          </p>

          {/* Tech stack badges wrapping list */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#F1F5F9] text-[#020817] text-[14px] font-normal px-3 py-1 rounded-full whitespace-nowrap select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Details Primary Trigger Button */}
        <div className="pt-6 mt-auto">
          <motion.button
            onClick={() => onDetailClick(project)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="w-full bg-[#020817] text-white hover:bg-[#0F172A] active:bg-[#020817] active:text-[#E5E7EB] text-[16px] font-medium py-3 px-6 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer"
            aria-labelledby={`project-title-${project.id}`}
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
