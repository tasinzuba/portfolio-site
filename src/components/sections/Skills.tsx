'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SKILLS, SERVICES } from '@/lib/constants'
import SectionWrapper from '@/components/ui/SectionWrapper'

function SkillBar({ name, level, color, icon, index }: { name: string; level: number; color: string; icon: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
          style={{ background: `${color}18`, color, border: `1px solid ${color}40` }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[#f0f0f0] text-sm font-medium">{name}</span>
            <span className="text-[#555] text-xs font-mono">{level}%</span>
          </div>
          <div className="h-1.5 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
            <motion.div
              className="skill-bar-fill"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: index * 0.08 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[#e800ff] text-sm uppercase tracking-widest mb-4">Expertise</p>
        <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
          Skills & <span className="gradient-text">Services</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Skills */}
        <div>
          <h3 className="text-[#888] text-sm uppercase tracking-widest mb-6">Tools I Use</h3>
          <div className="grid grid-cols-1 gap-3">
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* Right: Services */}
        <div>
          <h3 className="text-[#888] text-sm uppercase tracking-widest mb-6">What I Offer</h3>
          <div className="space-y-0">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group py-6 border-b border-[rgba(255,255,255,0.06)] last:border-b-0 cursor-pointer"
                data-cursor="hover"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[#e800ff] text-sm opacity-60 mt-1 w-8 shrink-0">{service.number}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display font-bold text-lg text-[#f0f0f0] group-hover:text-[#e800ff] transition-colors duration-300">
                        {service.title}
                      </h4>
                      <motion.div
                        className="text-[#333] group-hover:text-[#e800ff] transition-colors duration-300"
                        whileHover={{ x: 4 }}
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-[#555] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                {/* Hover line */}
                <motion.div
                  className="h-px bg-gradient-to-r from-[#e800ff] to-transparent mt-4"
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
