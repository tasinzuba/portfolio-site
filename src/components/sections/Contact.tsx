'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import NeonButton from '@/components/ui/NeonButton'
import SectionWrapper from '@/components/ui/SectionWrapper'

const socialLinks = [
  {
    name: 'YouTube',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    href: '#',
    color: '#e800ff',
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: '#',
    color: '#e800ff',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: '#',
    color: '#e800ff',
  },
  {
    name: 'Behance',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.686-8h4.965v1.5h-4.965V9zM8.361 12.174c1.27-.5 1.918-1.5 1.918-2.757C10.279 7.42 8.84 6 5.963 6H0v12h6.195c3.21 0 5.2-1.625 5.2-4.028 0-1.4-.557-2.445-3.034-1.798zM2.493 8.5h3.164c1.15 0 1.718.5 1.718 1.427 0 .967-.64 1.506-1.873 1.506H2.493V8.5zm0 7v-2.406h3.342c1.31 0 2.002.551 2.002 1.61 0 1.022-.794 1.795-2.16 1.795H2.493v-1z" />
      </svg>
    ),
    href: '#',
    color: '#e800ff',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', projectType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="contact" className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Heading + info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#e800ff] text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight mb-6">
            Let&apos;s Create<br />
            <span className="gradient-text">Something Epic</span>
          </h2>
          <p className="text-[#666] text-lg leading-relaxed mb-10">
            Have a project in mind? Whether it&apos;s a music video, commercial, or passion project
            — I&apos;d love to hear about it. Let&apos;s talk about how we can bring your vision to life.
          </p>

          {/* Contact info */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(232,0,255,0.08)] border border-[rgba(232,0,255,0.2)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5">
                  <path d="M3 8l7.89 4.74a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[#888]">hello@alexmorrison.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(232,0,255,0.08)] border border-[rgba(232,0,255,0.2)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span className="text-[#888]">Remote · Worldwide</span>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-[#555] text-xs uppercase tracking-widest mb-4">Find Me On</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center transition-colors duration-300"
                  style={{ color: '#666' }}
                  whileHover={{ scale: 1.1, color: social.color }}
                  data-cursor="hover"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[rgba(232,0,255,0.1)] border border-[rgba(232,0,255,0.4)] flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">Message Sent!</h3>
              <p className="text-[#666]">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[#f0f0f0] placeholder-[#444] text-sm outline-none transition-all duration-300 focus:border-[rgba(232,0,255,0.5)] focus:shadow-[0_0_20px_rgba(232,0,255,0.1)]"
                  />
                </div>
                <div>
                  <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[#f0f0f0] placeholder-[#444] text-sm outline-none transition-all duration-300 focus:border-[rgba(232,0,255,0.5)] focus:shadow-[0_0_20px_rgba(232,0,255,0.1)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">Project Type</label>
                <select
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[#f0f0f0] text-sm outline-none transition-all duration-300 focus:border-[rgba(232,0,255,0.5)] focus:shadow-[0_0_20px_rgba(232,0,255,0.1)] appearance-none"
                  style={{ cursor: 'none' }}
                >
                  <option value="" className="bg-[#111]">Select a project type</option>
                  <option value="music-video" className="bg-[#111]">Music Video</option>
                  <option value="commercial" className="bg-[#111]">Commercial</option>
                  <option value="short-film" className="bg-[#111]">Short Film</option>
                  <option value="wedding" className="bg-[#111]">Wedding / Event</option>
                  <option value="corporate" className="bg-[#111]">Corporate</option>
                  <option value="other" className="bg-[#111]">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#555] text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[#f0f0f0] placeholder-[#444] text-sm outline-none transition-all duration-300 focus:border-[rgba(232,0,255,0.5)] focus:shadow-[0_0_20px_rgba(232,0,255,0.1)] resize-none"
                />
              </div>

              <NeonButton variant="pink-filled" size="lg" className="w-full justify-center">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </NeonButton>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
