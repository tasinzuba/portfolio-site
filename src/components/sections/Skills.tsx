'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SKILLS } from '@/lib/constants'

const EXPERTISE_AREAS = [
  {
    title: 'Video Editing & Post-Production',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4v16M17 4v16M3 8h4M17 8h4M3 12h18M3 16h4M17 16h4M7 2v4M17 2v4" />
      </svg>
    ),
    skills: ['Precision Cuts & Transitions', 'Pacing & Rhythm', 'Multi-cam Editing', 'Audio Sync & Mixing'],
  },
  {
    title: 'Motion Graphics & VFX',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 3.8L17.8 8l-3.3 2.7.8 4.3L12 13l-3.3 2 .8-4.3L6.2 8l4.3-1.2L12 3z" />
        <path d="M5 19l1-2.5L8.5 16M19 19l-1-2.5L15.5 16" />
      </svg>
    ),
    skills: ['Motion Graphics & Titles', 'Compositing & Green Screen', '3D Integration', 'Particle Effects'],
  },
  {
    title: 'Color Science & Finishing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20" fill="rgba(232,0,255,0.15)" />
        <path d="M12 7a5 5 0 0 1 0 10" fill="rgba(232,0,255,0.25)" />
      </svg>
    ),
    skills: ['Cinematic Color Grading', 'Custom LUT Creation', 'HDR Workflow', 'Final Mastering & Delivery'],
  },
]

const MARQUEE_TOOLS = [
  'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D',
  'Photoshop', 'Final Cut Pro', 'Audition', 'Lightroom',
  'Blender', 'Nuke', 'Mocha Pro', 'Red Giant',
]

function ToolCard({
  name,
  level,
  color,
  icon,
  index,
}: {
  name: string
  level: number
  color: string
  icon: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-5 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(18,12,40,0.6)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(14px)',
      }}
      data-cursor="hover"
    >
      {/* Icon area */}
      <div
        className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-2"
        style={{ background: `${color}15` }}
      >
        <span className="font-mono text-lg font-bold" style={{ color }}>
          {icon}
        </span>
      </div>

      {/* Tool name */}
      <p className="text-sm font-medium text-white/80 mt-2">{name}</p>

      {/* Proficiency bar */}
      <div className="h-1.5 w-full rounded-full mt-3 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
        />
      </div>
      <p className="text-xs text-white/30 mt-1 text-right">{level}%</p>
    </motion.div>
  )
}

function ExpertiseCard({
  area,
  index,
}: {
  area: (typeof EXPERTISE_AREAS)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
      style={{
        background: 'rgba(18,12,40,0.6)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(14px)',
      }}
      data-cursor="hover"
    >
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
        {area.icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-4">{area.title}</h3>
      <ul className="space-y-3">
        {area.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#e800ff', boxShadow: '0 0 6px rgba(232,0,255,0.5)' }}
            />
            <span className="text-sm text-white/45">{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  const marqueeItems = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS]

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#050510' }}>
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Side glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header — Process style */}
        <motion.div className="text-center mb-16" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">The Tools Behind</span><br />
            <span className="text-white">Every Great Edit</span>
          </h2>
        </motion.div>

        {/* Part 1: Tool Proficiency Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {SKILLS.map((skill, i) => (
            <ToolCard key={skill.name} {...skill} index={i} />
          ))}
        </div>

        {/* Part 2: Expertise Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {EXPERTISE_AREAS.map((area, i) => (
            <ExpertiseCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>

      {/* Part 3: Tools Marquee */}
      <div className="space-y-4">
        {/* Row 1: left to right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-left w-max">
            {marqueeItems.map((tool, i) => (
              <span
                key={`r1-${i}`}
                className="px-4 py-2 rounded-full text-sm text-white/40 whitespace-nowrap transition-all duration-300 hover:text-white/80"
                style={{
                  background: 'rgba(8,5,20,0.88)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: right to left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 marquee-right w-max">
            {[...marqueeItems].reverse().map((tool, i) => (
              <span
                key={`r2-${i}`}
                className="px-4 py-2 rounded-full text-sm text-white/40 whitespace-nowrap transition-all duration-300 hover:text-white/80"
                style={{
                  background: 'rgba(8,5,20,0.88)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
