import React, { useState, useCallback, useMemo, lazy, Suspense, memo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceSection as ExperienceSectionRaw } from './components/ExperienceSection';
import { TechStackSection as TechStackSectionRaw } from './components/TechStackSection';
import { ContactSection as ContactSectionRaw } from './components/ContactSection';
import { projectsData } from './data';
import { Project } from './types';
import { Github, Linkedin, ArrowUp, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal })),
);

const preloadModal = () => {
  import('./components/ProjectModal');
};

const ExperienceSection = memo(ExperienceSectionRaw);
const TechStackSection = memo(TechStackSectionRaw);
const ContactSection = memo(ContactSectionRaw);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const realProjects = useMemo(
    () => projectsData.filter((p) => p.category === 'real'),
    [],
  );
  const portfolioProjects = useMemo(
    () => projectsData.filter((p) => p.category === 'portfolio'),
    [],
  );

  const handleOpenModal = useCallback(
    (project: Project) => setSelectedProject(project),
    [],
  );

  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

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
        <Hero onViewWorkClick={scrollToProjects} onGetInTouchClick={scrollToContact} />

        {/* Divider standard spacing */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Projects Section */}
        <section id="projects" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16 space-y-20">
          
          {/* Sub-section 1: Real Projects */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
                Real Projects
              </h2>
              <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5">
                Real projects I built during my internship at PT Akur Pratama (Yogya Center).
              </p>
              <div className="w-16 h-1 bg-[#020817] mt-3 rounded-full"></div>
            </div>

            {/* Grid Layout (2 projects mapped) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {realProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onDetailClick={handleOpenModal}
                  onHover={preloadModal}
                />
              ))}
            </div>
          </motion.div>

          {/* Sub-section 2: Portfolio Projects */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
                Portfolio Projects
              </h2>
              <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5">
                Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn and grow as a developer.
              </p>
              <div className="w-16 h-1 bg-[#020817] mt-3 rounded-full"></div>
            </div>

            {/* Grid Layout (3 projects mapped) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onDetailClick={handleOpenModal}
                  onHover={preloadModal}
                />
              ))}
            </div>
          </motion.div>

        </section>

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

        {/* Tech Stack Skills Section */}
        <TechStackSection />

        {/* Divider */}
        <hr className="max-w-[1440px] mx-auto border-[#E2E8F0]" />

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
            <motion.a
              href="https://github.com/alfanjanuar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/alfanjanuar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com/alfanjanuar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://x.com/alfanjanuar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="p-1.5 text-[#64748B] hover:text-[#020817] transition-colors"
              title="Alfan on X"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            
            {/* Scroll back to Top trigger */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="p-2 bg-[#F1F5F9] text-[#020817] hover:bg-[#E5E7EB] rounded-full transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>
      </footer>

      {/* Detailed overlay modal */}
      <AnimatePresence>
        {selectedProject && (
          <Suspense fallback={null}>
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}
