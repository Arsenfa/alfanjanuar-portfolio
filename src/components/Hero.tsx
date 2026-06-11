import React from 'react';
import { Github, Linkedin, Instagram, Twitter, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onViewWorkClick: () => void;
  onGetInTouchClick: () => void;
}

export function Hero({ onViewWorkClick, onGetInTouchClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center select-none"
    >
      {/* Decorative floating accent */}
      <div className="absolute top-1/4 left-1/10 w-24 h-24 bg-[#E2E8F0]/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/10 w-32 h-32 bg-[#F1F5F9]/40 rounded-full blur-3xl -z-10"></div>

      {/* Hero Headline Group */}
      <div className="max-w-[800px] flex flex-col gap-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-[#020817] font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight md:leading-[1]"
        >
          Hi, I'm Alfan Januar
        </motion.h1>
        
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="text-[#020817] text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Frontend & Mobile Developer
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-[#64748B] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-4"
        >
          A frontend & mobile developer focused on building clean, performant, and user-friendly interfaces for web and mobile. I turn UI/UX designs into production-ready frontends with modern technologies.
        </motion.p>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4"
      >
        <motion.button
          onClick={onViewWorkClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="bg-[#020817] text-white hover:bg-[#0F172A] active:bg-[#020817] active:text-[#E5E7EB] text-base font-medium px-6 py-3 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 cursor-pointer text-center"
        >
          View My Work
        </motion.button>
        <motion.button
          onClick={onGetInTouchClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="bg-white text-[#020817] border border-[#E5E7EB] hover:bg-[#F8FAFC] hover:border-[#64748B] active:bg-[#F1F5F9] active:text-[#0F172A] text-base font-medium px-6 py-3 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 cursor-pointer text-center"
        >
          Get in Touch
        </motion.button>
      </motion.div>

      {/* Social Network Icons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        className="flex items-center gap-6 mt-12"
      >
        <motion.a
          href="https://github.com/alfanjanuar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="GitHub Account"
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
          className="p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="LinkedIn Profile"
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
          className="p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="Instagram Profile"
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
          className="p-2 text-[#020817] hover:bg-[#F8FAFC] hover:text-[#0F172A] active:bg-[#F1F5F9] rounded-[6px] transition-colors"
          title="X (Twitter) Profile"
        >
          <Twitter className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Chevron down arrow indicator linking to next container */}
      <motion.button
        onClick={onViewWorkClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="mt-16 text-[#64748B] hover:text-[#020817] transition-colors duration-200 cursor-pointer animate-bounce"
        aria-label="Scroll context down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
