import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { XIcon } from './XIcon';
import { useInView } from '../hooks/useInView';

// Get your free access key at https://web3forms.com (it is tied to the email
// that will receive the messages, so it is safe to expose in the client).
const WEB3FORMS_ACCESS_KEY = '1e040d40-d5f3-4113-9c73-8b1e49a60aa0';
const COOLDOWN_MS = 60_000; // one message per minute
const LAST_SENT_KEY = 'contact_last_sent';

export function ContactSection() {
  const { ref, isInView } = useInView({ rootMargin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [cooldownMsg, setCooldownMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (cooldownMsg) setCooldownMsg('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Honeypot: bots fill hidden fields. If it has a value, silently bail out.
    const honeypot = (e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement | null)?.value;
    if (honeypot) return;

    // Rate limit: one message per minute (survives reload via localStorage).
    const lastSent = Number(localStorage.getItem(LAST_SENT_KEY) || 0);
    const remaining = COOLDOWN_MS - (Date.now() - lastSent);
    if (remaining > 0) {
      setCooldownMsg(`Please wait ${Math.ceil(remaining / 1000)}s before sending another message.`);
      return;
    }
    setCooldownMsg('');

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New portfolio message from ${formData.name}`,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem(LAST_SENT_KEY, String(Date.now()));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[#020817] text-3xl sm:text-4xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[#64748B] text-[16px] font-normal leading-[24px] mt-1.5 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to work together!
          </p>
          <div className="w-16 h-1 bg-[#020817] mt-4 rounded-full mx-auto"></div>
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

            <div role="status" aria-live="polite">
              {submitStatus === 'success' && (
                <div className="bg-[#F1F5F9] border border-[#E5E7EB] rounded-[6px] p-4 flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#020817] text-[14px] font-bold">Message sent successfully!</h4>
                    <p className="text-[#64748B] text-[14px] mt-1">
                      Thanks for reaching out. Your message is on its way to my inbox and I'll get back to you as soon as I can.
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
            </div>

            {submitStatus !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot anti-spam field, hidden from real users */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {cooldownMsg && (
                  <div role="status" className="bg-[#F1F5F9] border border-[#E5E7EB] rounded-[6px] p-3 text-[14px] text-[#020817] animate-fade-in">
                    {cooldownMsg}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div role="alert" className="bg-red-50 border border-red-200 rounded-[6px] p-4 flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#020817] text-[14px] font-bold">Something went wrong</h4>
                      <p className="text-[#64748B] text-[14px] mt-1">
                        Your message couldn't be sent. Please try again, or email me directly at alfanjanuar.work@gmail.com.
                      </p>
                    </div>
                  </div>
                )}

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
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="hover-scale w-full sm:w-auto bg-[#020817] text-white hover:bg-[#0F172A] disabled:bg-[#64748B] disabled:cursor-not-allowed text-[16px] font-medium py-3 px-6 rounded-[6px] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#020817] focus:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer"
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
                </button>
              </form>
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
                href="mailto:alfanjanuar.work@gmail.com"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group select-text"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Direct Email</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">alfanjanuar.work@gmail.com</span>
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
                href="https://bit.ly/alfan-januar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">LinkedIn</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">bit.ly/alfan-januar</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/fanllyl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Instagram</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">instagram.com/fanllyl</span>
                </div>
              </a>

              {/* X */}
              <a
                href="https://x.com/fanlleys"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border border-[#E5E7EB] hover:border-[#64748B] bg-white rounded-[6px] hover:bg-[#F8FAFC] text-[#020817] transition-all group"
              >
                <div className="p-2 bg-[#F1F5F9] text-[#020817] rounded-lg">
                  <XIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[12px] text-[#64748B] font-semibold uppercase tracking-wider">X</span>
                  <span className="block text-[14px] sm:text-[16px] font-medium truncate">x.com/fanlleys</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
