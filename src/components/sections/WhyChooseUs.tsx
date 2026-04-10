'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const OUR_ADVANTAGES = [
  'Dedicated Editor with 5+ Years Experience',
  'Results-Oriented — Edits That Convert',
  'Experience with 500+ Projects Delivered',
  'Proven Workflow from Raw to Final Cut',
  'Personalized Revisions Until You\'re Happy',
  '24/7 Support, Anytime You Need Us',
]

const BONUSES = [
  'Free Color Grading Consultation',
  'Free Thumbnail Design per Project',
]

const OTHER_PROBLEMS = [
  'Unreliable freelancers with slow turnarounds',
  'Edits that fail to convert or perform',
  'Weak thumbnails and titles with no CTR strategy',
  'Lack of proper revision systems',
  'No expertise in pacing or storytelling',
  'Limited revisions with no client-focused approach',
  'Guesswork instead of data-driven decisions',
  'Delayed responses and poor communication',
]

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="rgba(124,58,237,0.25)" />
      <path d="M8 12.5l2.5 2.5 5-5" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M8 8l8 8M16 8l-8 8" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BonusCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <circle cx="12" cy="12" r="10" fill="#4F46E5" />
      <path d="M8 12.5l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: '#050510' }}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 left-0 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at 0% 50%, rgba(232,0,255,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">Know What</span><br />
            <span className="text-white">We Do Differently</span>
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left — Our Card (highlighted) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl p-7 lg:p-8 relative overflow-hidden"
            style={{
              background: 'rgba(18,12,40,0.7)',
              border: '1px solid rgba(124,58,237,0.25)',
              backdropFilter: 'blur(14px)',
            }}
          >
            {/* Subtle top glow inside card */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[120px] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)',
              }}
            />

            {/* Brand header */}
            <div className="flex items-center gap-3 mb-7 relative">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #e800ff, #7000ff)',
                  boxShadow: '0 0 20px rgba(232,0,255,0.3)',
                }}
              >
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide">JESAN</h3>
                <div className="w-2 h-2 rounded-full bg-[#4F46E5] -mt-0.5 ml-0.5" />
              </div>
            </div>

            {/* Advantages list */}
            <ul className="space-y-4 relative mb-8">
              {OUR_ADVANTAGES.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckIcon />
                  <span className="text-sm text-white/80 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bonuses box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="rounded-xl p-5 relative"
              style={{
                background: 'rgba(8,5,20,0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">
                Bonuses you get with us:
              </p>
              <ul className="space-y-2.5">
                {BONUSES.map((bonus, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <BonusCheckIcon />
                    <span className="text-sm text-white/70 font-medium">{bonus}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right — Other Agencies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl p-7 lg:p-8"
            style={{
              background: 'rgba(12,8,28,0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <h3 className="text-white font-bold text-xl mb-7">Other Agencies</h3>

            <ul className="space-y-5">
              {OTHER_PROBLEMS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <XIcon />
                  <span className="text-sm text-white/40">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-14"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: '#4F46E5',
              boxShadow: '0 0 25px rgba(79,70,229,0.4)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(79,70,229,0.55)' }}
            whileTap={{ scale: 0.97 }}
            data-cursor="hover"
          >
            Book A 30-Min Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
