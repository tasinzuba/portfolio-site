'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '200', suffix: '%', label: 'More Engagement', sub: 'Viral Edits' },
  { value: '5', suffix: 'X', label: 'More Reach', sub: 'Strategic Distribution' },
  { value: '50', suffix: '%', label: 'More Leads', sub: 'Automated Systems' },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const l1x = useTransform(scrollYProgress, [0, 0.55], [-80, 0])
  const l2x = useTransform(scrollYProgress, [0, 0.55], [-80, 0])
  const r1x = useTransform(scrollYProgress, [0, 0.55], [80, 0])
  const r2x = useTransform(scrollYProgress, [0, 0.55], [80, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const textY = useTransform(scrollYProgress, [0, 0.4], [30, 0])

  return (
    <section className="py-20 relative" style={{ background: '#050510' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Headline + floating tags */}
        <div ref={ref} className="relative flex items-center justify-center" style={{ minHeight: 220 }}>

          {/* Left tags — desktop only */}
          <div className="absolute hidden md:flex flex-col gap-4" style={{ left: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #e800ff 0%, #9b00cc 100%)',
                boxShadow: '0 4px 24px rgba(232,0,255,0.4)',
                rotate: -6,
                x: l1x,
                opacity,
              }}
            >
              🎙 Podcast Editing
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #e800ff 0%, #9b00cc 100%)',
                boxShadow: '0 4px 24px rgba(232,0,255,0.4)',
                rotate: 4,
                marginLeft: 16,
                x: l2x,
                opacity,
              }}
            >
              📄 Ad Creatives &amp; VSL
            </motion.div>
          </div>

          {/* Center heading */}
          <motion.div
            className="text-center z-10 w-full px-4 md:px-0"
            style={{ paddingLeft: 'clamp(0px, 20%, 220px)', paddingRight: 'clamp(0px, 20%, 220px)', opacity, y: textY }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
              Tired of boring video content that don&apos;t stand out? It&apos;s time to upgrade{' '}
              <span style={{ color: '#e800ff' }}>the game with us!</span>
            </h2>
          </motion.div>

          {/* Right tags — desktop only */}
          <div className="absolute hidden md:flex flex-col gap-4 items-end" style={{ right: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #9b00cc 0%, #e800ff 100%)',
                boxShadow: '0 4px 24px rgba(232,0,255,0.4)',
                rotate: 5,
                x: r1x,
                opacity,
              }}
            >
              📱 Short Form Content
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #9b00cc 0%, #e800ff 100%)',
                boxShadow: '0 4px 24px rgba(232,0,255,0.4)',
                rotate: -4,
                marginRight: 16,
                x: r2x,
                opacity,
              }}
            >
              ▶ Youtube Videos
            </motion.div>
          </div>
        </div>

        {/* Mobile tags — shown below heading on small screens */}
        <motion.div
          className="flex md:hidden flex-wrap justify-center gap-3 mt-4 mb-2"
          style={{ opacity, y: textY }}
        >
          {['🎙 Podcast Editing', '📄 Ad Creatives & VSL', '📱 Short Form Content', '▶ Youtube Videos'].map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-semibold"
              style={{ background: 'linear-gradient(135deg, #e800ff 0%, #9b00cc 100%)', boxShadow: '0 2px 12px rgba(232,0,255,0.35)' }}>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mt-10 border-t border-white/10 pt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="flex items-end gap-0.5">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/50 mb-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/70 mt-1">{stat.label}</p>
              <p className="text-[10px] sm:text-xs text-white/30 mt-2 uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
