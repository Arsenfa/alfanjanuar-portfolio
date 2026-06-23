import React, { useState, useCallback, lazy, Suspense, memo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AvailabilityCTA } from './components/AvailabilityCTA';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceSection as ExperienceSectionRaw } from './components/ExperienceSection';
import { TechStackSection as TechStackSectionRaw } from './components/TechStackSection';
import { ContactSection as ContactSectionRaw } from './components/ContactSection';
import { contentByMode } from './data';
import { Project, Mode, ProjectGroup } from './types';
import { Github, Linkedin, ArrowUp, Instagram } from 'lucide-react';
import { XIcon } from './components/XIcon';
import { useInView } from './hooks/useInView';

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal })),
);

const preloadModal = () => {
  import('./components/ProjectModal');
};

const ExperienceSection = memo(ExperienceSectionRaw);
const TechStackSection = memo(TechStackSectionRaw);
const ContactSection = memo(ContactSectionRaw);

const MODE_STORAGE_KEY = 'portfolio_mode';

function isMode(value: unknown): value is Mode {
  return value === 'developer' || value === 'sales';
}

function readInitialMode(): Mode {
  if (typeof window === 'undefined') return 'developer';
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('mode');
    if (isMode(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(MODE_STORAGE_KEY);
    if (isMode(stored)) return stored;
  } catch {
    // ignore storage/URL access errors
  }
  return 'developer';
}

interface ProjectGroupSectionProps {
  group: ProjectGroup;
  onDetailClick: (project: Project) => void;
  onHover: () => void;
  key?: React.Key;
}

function ProjectGroupSection({ group, onDetailClick, onHover }: ProjectGroupSectionProps) {
  const { ref, isInView } = useInView({ rootMargin: '-100px' });

  const gridCols =
    group.cols === 2
      ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div ref={ref} className={`reveal ${isInView ? 'visible' : ''} space-y-10`}>
      <div className="text-center">
        <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
          {group.heading}
        </h2>
        <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5 max-w-2xl mx-auto">
          {group.subtitle}
        </p>
        <div className="w-16 h-1 bg-[#020817] mt-4 rounded-full mx-auto"></div>
      </div>

      <div className={`grid ${gridCols} gap-8`}>
        {group.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetailClick={onDetailClick}
            onHover={onHover}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<Mode>(readInitialMode);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const content = contentByMode[mode];

  const changeMode = useCallback((next: Mode) => {
    setMode(next);
    try {
      localStorage.setItem(MODE_STORAGE_KEY, next);
      const url = new URL(window.location.href);
      url.searchParams.set('mode', next);
      window.history.replaceState({}, '', url);
    } catch {
      // ignore storage/URL access errors
    }
  }, []);

  const handleOpenModal = useCallback(
    (project: Project) => setSelectedProject(project),
    [],
  );

  const handleCloseModal = useCallback(() => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsModalClosing(false);
    }, 200);
  }, []);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }, []);

  const scrollToProjects = useCallback(() => {
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#020817] font-sans antialiased flex flex-col justify-between">
      {/* Sticky Header Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Container Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          mode={mode}
          role={content.hero.role}
          tagline={content.hero.tagline}
          onModeChange={changeMode}
          onViewWorkClick={scrollToProjects}
          onGetInTouchClick={scrollToContact}
        />

        {/* Divider standard spacing */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* About Section */}
        <AboutSection content={content.about} onHireClick={scrollToContact} />

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Projects Section */}
        <section id="projects" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-20">
          {content.projectGroups.map((group) => (
            <ProjectGroupSection
              key={group.id}
              group={group}
              onDetailClick={handleOpenModal}
              onHover={preloadModal}
            />
          ))}
        </section>

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Experience Section */}
        <ExperienceSection experiences={content.experiences} />

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Tech Stack / Skills Section */}
        <TechStackSection content={content.techStack} />

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Availability CTA band */}
        <AvailabilityCTA content={content.availability} onContactClick={scrollToContact} />

        {/* Get in Touch Section */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-[#E2E8F0] py-8 select-none">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright text */}
          <p className="text-[#64748B] text-[14px]">
            &copy; {new Date().getFullYear()} Alfan Januar. All rights reserved.
          </p>

          {/* Footer Navigation handles */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/alfanjanuar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale-lg p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://bit.ly/alfan-januar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale-lg p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fanllyl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale-lg p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/fanlleys"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale-lg p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on X"
            >
              <XIcon className="w-5 h-5" />
            </a>

            {/* Scroll back to Top trigger */}
            <button
              onClick={scrollToTop}
              className="hover-scale p-2 bg-[#F1F5F9] text-[#020817] hover:bg-[#E5E7EB] rounded-full transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

      {/* Detailed overlay modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
            isClosing={isModalClosing}
          />
        </Suspense>
      )}
    </div>
  );
}
