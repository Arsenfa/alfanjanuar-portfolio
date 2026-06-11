import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Twitter, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [localMessages, setLocalMessages] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('alfan_portfolio_messages') || '[]');
    } catch {
      return [];
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate real mail transfer protocol or API gateway dispatch
    setTimeout(() => {
      const newMessage = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
      };

      const updated = [newMessage, ...localMessages];
      setLocalMessages(updated);
      localStorage.setItem('alfan_portfolio_messages', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to work together!
          </p>
          <div className="w-16 h-1 bg-[#020817] mt-3 rounded-full"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Span 7): Contact Form Panel */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-[8px] p-6 sm:p-8 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] space-y-6">
            <div className="space-y-1">
              <h3 className="text-[#020817] text-xl font-bold tracking-tight flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#64748B]" />
                Let's Talk
              </h3>
              <p className="text-[#64748B] text-[14px]">
                Fill out the form below or send an email, and I'll get back to you as soon as possible.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-[#F1F5F9] border border-[#E5E7EB] rounded-[6px] p-4 flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#020817] text-[14px] font-bold">Message Delivered Successfully!</h4>
                  <p className="text-[#64748B] text-[14px] mt-1">
                    Thank you for reaching out. Your message has been archived locally in this preview. I will reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-xs font-semibold text-[#020817] underline mt-2.5 cursor-pointer hover:opacity-80 block"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            {submitStatus !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-[#020817] text-[14px] font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[#020817] text-[16px] p-3 rounded-[6px] border border-[#E5E7EB] placeholder-[#64748B] focus:border-[#0F172A] focus:outline-hidden focus:ring-2 focus:ring-[#020817]/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-[#020817] text-[14px] font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[#020817] text-[16px] p-3 rounded-[6px] border border-[#E5E7EB] placeholder-[#64748B] focus:border-[#0F172A] focus:outline-hidden focus:ring-2 focus:ring-[#020817]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-[#020817] text-[14px] font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#020817] text-[16px] p-3 rounded-[6px] border border-[#E5E7EB] placeholder-[#64748B] focus:border-[#0F172A] focus:outline-hidden focus:ring-2 focus:ring-[#020817]/10 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-[#020817] text-[14px] font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    disabled={isSubmitting}
                    className="w-full min-h-[120px] bg-white text-[#020817] text-[16px] p-3 rounded-[6px] border border-[#E5E7EB] placeholder-[#64748B] focus:border-[#0F172A] focus:outline-hidden focus:ring-2 focus:ring-[#020817]/10 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="w-full sm:w-auto bg-[#020817] text-white hover:bg-[#0F172A] disabled:bg-[#64748B] disabled:cursor-not-allowed text-[16px] font-medium py-3 px-6 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send me an email</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {/* Local Simulated Inbox Container */}
            {localMessages.length > 0 && (
              <div className="pt-6 border-t border-[#E2E8F0] space-y-3">
                <span className="block text-[#64748B] text-[12px] font-bold uppercase tracking-wider">
                  Simulated Sent Inbox ({localMessages.length}) - Persistence test
                </span>
                <div className="max-h-[160px] overflow-y-auto space-y-2 pr-1">
                  {localMessages.map((msg) => (
                    <div key={msg.id} className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[6px] text-[13px] space-y-1">
                      <div className="flex justify-between items-start text-xs font-semibold text-[#020817]">
                        <span>{msg.name} ({msg.email})</span>
                        <span className="text-[#64748B] font-normal text-[11px]">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      {msg.subject && <div className="font-bold text-[#0F172A] italic">Sub: {msg.subject}</div>}
                      <p className="text-[#64748B] truncate">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Span 5): Connect / Channels Info */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-[8px] p-6 sm:p-8 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-[#020817] text-xl font-bold tracking-tight">
                Connect With Me
              </h3>
              <p className="text-[#64748B] text-[14px]">
                Find me on these platforms or reach out directly via email.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email link */}
              <a
                href="mailto:alfanjanuar50@gmail.com"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group select-text"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Direct Email</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">alfanjanuar50@gmail.com</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/alfanjanuar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">GitHub</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">github.com/alfanjanuar</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/alfanjanuar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">LinkedIn</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">linkedin.com/in/alfanjanuar</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/alfanjanuar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Instagram</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">instagram.com/alfanjanuar</span>
                </div>
              </a>

              {/* X */}
              <a
                href="https://x.com/alfanjanuar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-semibold uppercase tracking-wider">X / Twitter</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">x.com/alfanjanuar</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
