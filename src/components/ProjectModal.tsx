import React from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { CheckCircle2, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isClosing?: boolean;
}

export function ProjectModal({ project, onClose, isClosing }: ProjectModalProps) {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  // Custom metadata for each project to present beautiful line gaps and specific high-contrast icon boxes
  const projectMeta = {
    warehouse: {
      brTitle: (
        <>
          Warehouse<br />Management<br />System
        </>
      ),
      icon: (
        <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
    },
    checkout: {
      brTitle: (
        <>
          Self<br />Checkout
        </>
      ),
      icon: (
        <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    'steam-rider': {
      brTitle: (
        <>
          Steam<br />Rider
        </>
      ),
      icon: (
        <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    'telegram-ai': {
      brTitle: (
        <>
          Telegram<br />AI Bot
        </>
      ),
      icon: (
        <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    'linux-rice': {
      brTitle: (
        <>
          KDE Plasma<br />Ricing
        </>
      ),
      icon: (
        <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  };

  const meta = projectMeta[project.id as keyof typeof projectMeta] || {
    brTitle: (
      <>
        {project.title}
      </>
    ),
    icon: (
      <svg className="h-5 w-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-black/50 flex p-4 sm:p-6 lg:p-8 select-none transition-opacity duration-200 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={onClose}
    >
      {/* Modal Container */}
      <main
        onClick={(e) => e.stopPropagation()}
        className={`modal-content ${isClosing ? 'closing' : ''} bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[8px] border border-[#E5E7EB] shadow-[rgba(0,0,0,0.15)_0px_8px_24px_0px] relative custom-scrollbar flex flex-col p-[24px] md:p-[32px] m-auto`}
        style={{ margin: 'auto' }}
        data-purpose="modal-container"
      >
        {/* Close Icon (Top Right) */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#64748B] hover:text-[#020817] transition-colors z-20 cursor-pointer"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>

        {/* BEGIN: Top Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start mb-10" data-purpose="hero-section">
          {/* Left: Title and Icon */}
          <div className="w-full md:w-1/3 pt-4">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] w-10 h-10 rounded-[8px] flex items-center justify-center mb-4 shadow-[rgba(0,0,0,0.02)_0px_1px_2px_0px]">
              {meta.icon}
            </div>
            <h2 className="text-2xl font-bold text-[#020817] leading-tight tracking-tight">
              {meta.brTitle}
            </h2>
          </div>

          {/* Right: Dashboard Image */}
          <div className="w-full md:w-2/3">
            <div className="rounded-[8px] overflow-hidden shadow-sm border border-[#E5E7EB] aspect-video w-full h-[240px] sm:h-[280px]">
              {project.id === 'warehouse' ? (
                <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center p-4">
                  <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="380" height="30" rx="4" fill="#020817" />
                    <rect x="20" y="20" width="60" height="10" rx="2" fill="#64748B" />
                    <rect x="10" y="50" width="90" height="50" rx="4" fill="#6366F1" opacity="0.15" />
                    <rect x="110" y="50" width="90" height="50" rx="4" fill="#10B981" opacity="0.15" />
                    <rect x="210" y="50" width="90" height="50" rx="4" fill="#3B82F6" opacity="0.15" />
                    <rect x="310" y="50" width="80" height="50" rx="4" fill="#8B5CF6" opacity="0.15" />
                    <rect x="20" y="65" width="50" height="6" rx="1" fill="#020817" />
                    <rect x="20" y="78" width="30" height="10" rx="1" fill="#020817" fontWeight="bold" />
                    <text x="20" y="87" fontSize="10" fontFamily="monospace" fill="#020817" fontWeight="bold">94.8%</text>
                    <text x="120" y="87" fontSize="10" fontFamily="monospace" fill="#020817" fontWeight="bold">1,402</text>
                    <text x="220" y="87" fontSize="10" fontFamily="monospace" fill="#020817" fontWeight="bold">287</text>
                    <text x="320" y="87" fontSize="10" fontFamily="monospace" fill="#020817" fontWeight="bold">12</text>
                    <rect x="10" y="110" width="250" height="120" rx="4" fill="#F8FAFC" stroke="#E5E7EB" />
                    <rect x="20" y="120" width="230" height="8" rx="1" fill="#E2E8F0" />
                    <rect x="20" y="138" width="230" height="6" rx="1" fill="#F1F5F9" />
                    <rect x="20" y="150" width="200" height="6" rx="1" fill="#F1F5F9" />
                    <rect x="20" y="162" width="220" height="6" rx="1" fill="#F1F5F9" />
                    <rect x="20" y="174" width="180" height="6" rx="1" fill="#F1F5F9" />
                    <rect x="20" y="186" width="210" height="6" rx="1" fill="#F1F5F9" />
                    <rect x="20" y="198" width="190" height="6" rx="1" fill="#F1F5F9" />
                    <rect x="270" y="110" width="120" height="120" rx="4" fill="#F8FAFC" stroke="#E5E7EB" />
                    <circle cx="330" cy="170" r="40" fill="none" stroke="#6366F1" strokeWidth="8" strokeDasharray="180 70" />
                    <circle cx="330" cy="170" r="40" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="50 200" strokeDashoffset="-180" />
                  </svg>
                </div>
              ) : (
                <ProjectMockup type={project.mockupType} minimal={true} title={project.title} />
              )}
            </div>
          </div>
        </section>
        {/* END: Top Section */}

        {/* BEGIN: Content Section */}
        <section data-purpose="project-details" className="flex flex-col">
          {/* Header with Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#E2E8F0]">
            <div>
              <h1 className="text-3xl font-bold text-[#020817] tracking-tight">{project.title}</h1>
              {/* Gap between title and company name: 4px */}
              <p className="text-[#64748B] font-medium mt-[4px]">{project.subtitle}</p>
            </div>
            <span className="px-4 py-1 bg-white border border-[#E5E7EB] text-[#64748B] text-[14px] font-medium rounded-full shadow-[rgba(0,0,0,0.02)_0px_1px_2px_0px] whitespace-nowrap">
              {project.badgeLabel ?? (project.isInternship ? 'Internship Work' : 'Side Project')}
            </span>
          </div>

          {/* Overview */}
          {/* Gap between company name and PROJECT OVERVIEW: 24px */}
          <div className="mt-[24px]">
            {/* Section titles (PROJECT OVERVIEW, etc): font-size 12px, font-weight 600, letter-spacing 0.05em, color #64748B, text-transform uppercase */}
            <h3 className="text-[12px] font-semibold tracking-[0.05em] text-[#64748B] uppercase font-sans">Project Overview</h3>
            {/* Gap between PROJECT OVERVIEW title and paragraph: 12px */}
            <p className="text-[#0F172A] leading-relaxed text-[14px] font-normal mt-[12px]">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Grid: Challenges & Results */}
          {/* Gap between paragraph and two-column cards: 24px */}
          {/* Gap between the two cards (Key Engineering / Key Deliverables): 16px */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[24px]">
            {/* Engineering Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              /* Inner card padding: 24px */
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] p-[24px] shadow-[rgba(0,0,0,0.02)_0px_1px_2px_0px]">
                {/* Section titles (PROJECT OVERVIEW, etc): font-size 12px, font-weight 600, letter-spacing 0.05em, color #64748B, text-transform uppercase */}
                <h4 className="text-[12px] font-semibold tracking-[0.05em] text-[#64748B] uppercase mb-[16px] font-sans">{project.challengesLabel ?? 'Key Engineering Challenges'}</h4>
                {/* Gap between card title and bullet list: 16px, gap between each bullet item: 12px */}
                <ul className="space-y-[12px] mt-[16px]">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#64748B] mt-0.5">•</span>
                      <p className="text-[14px] text-[#0F172A] leading-normal">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Deliverables & Results */}
            {project.achievements && project.achievements.length > 0 && (
              /* Inner card padding: 24px */
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] p-[24px] shadow-[rgba(0,0,0,0.02)_0px_1px_2px_0px]">
                {/* Section titles (PROJECT OVERVIEW, etc): font-size 12px, font-weight 600, letter-spacing 0.05em, color #64748B, text-transform uppercase */}
                <h4 className="text-[12px] font-semibold tracking-[0.05em] text-[#64748B] uppercase mb-[16px] font-sans">{project.achievementsLabel ?? 'Key Deliverables & Results'}</h4>
                {/* Gap between card title and bullet list: 16px, gap between each bullet item: 12px */}
                <ul className="space-y-[12px] mt-[16px]">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 bg-white border border-[#E5E7EB] rounded-full p-0.5 shadow-[rgba(0,0,0,0.02)_0px_1px_2px_0px]">
                        <CheckCircle2 className="h-3 w-3 text-[#64748B]" />
                      </div>
                      <p className="text-[14px] text-[#0F172A] leading-normal">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          {/* Gap between cards section and INTEGRATED TECH STACK: 24px */}
          <div className="mt-[24px]">
            {/* Section titles (PROJECT OVERVIEW, etc): font-size 12px, font-weight 600, letter-spacing 0.05em, color #64748B, text-transform uppercase */}
            <h3 className="text-[12px] font-semibold tracking-[0.05em] text-[#64748B] uppercase font-sans">{project.tagsLabel ?? 'Integrated Tech Stack'}</h3>
            {/* Gap between tech stack title and tags: 12px */}
            <div className="flex flex-wrap gap-2 mt-[12px]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#F1F5F9] text-[#020817] text-[14px] font-medium rounded-full border border-[#E5E7EB] select-none whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
        {/* END: Content Section */}

        {/* Footer: external links + Close Details button */}
        {/* Gap between tags and footer: 32px */}
        <div className="mt-[32px] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale inline-flex items-center justify-center gap-2 bg-white text-[#020817] border border-[#E5E7EB] hover:border-[#64748B] hover:bg-[#F8FAFC] text-[14px] font-semibold py-3 px-6 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale inline-flex items-center justify-center gap-2 bg-white text-[#020817] border border-[#E5E7EB] hover:border-[#64748B] hover:bg-[#F8FAFC] text-[14px] font-semibold py-3 px-6 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="hover-scale bg-[#020817] hover:opacity-90 text-white text-[14px] font-semibold py-3 px-8 rounded-[6px] transition-all cursor-pointer shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
          >
            Close Details
          </button>
        </div>
      </main>
    </div>
  );
}
