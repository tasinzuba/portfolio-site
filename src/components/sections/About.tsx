'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 80, suffix: '+', label: 'Projects Completed' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: 'M+', label: 'Views Generated' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = (value / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="gradient-text">
      {count}{suffix}
    </span>
  )
}

const timelineItems = [
  { year: '2024', title: 'Founder — Ultimate Editors 2.0', company: 'Online Course / 670+ Students' },
  { year: '2022', title: 'Senior Video Editor', company: 'Freelance / Global Brands' },
  { year: '2021', title: 'Content Creator & Editor', company: 'Social Media / YouTube' },
  { year: '2019', title: 'Video Editor', company: 'Digital Agency' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  return (
    <SectionWrapper id="about" className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — text + stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#e800ff] text-sm uppercase tracking-widest mb-4">About Me</p>
          <h2 className="font-display font-black text-5xl md:text-6xl mb-6 leading-tight">
            Viral Edits That<br />
            <span className="gradient-text">Stop the Scroll</span>
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            I&apos;m TIZ — a professional video editor with 5+ years of experience creating viral content
            for brands, creators, and businesses. I specialize in high-energy cuts, cinematic color
            grading, and motion graphics that get results.
          </p>
          <p className="text-[#888888] text-lg leading-relaxed mb-10">
            I&apos;ve helped 670+ editors learn the exact system I use to consistently earn $2,000/month
            — through my course Ultimate Editors 2.0. Every frame is intentional, every edit is
            designed to keep viewers watching.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-4">
                <div className="font-display font-black text-4xl mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#555] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        >
          <p className="text-[#555] text-xs uppercase tracking-widest mb-8">Experience</p>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[52px] top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, rgba(232,0,255,0.4), transparent)' }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start gap-5"
                >
                  {/* Year */}
                  <span className="font-mono text-[#e800ff] text-sm w-12 shrink-0 pt-0.5">
                    {item.year}
                  </span>

                  {/* Dot */}
                  <div className="relative shrink-0 mt-1.5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: '#e800ff',
                        boxShadow: '0 0 8px rgba(232,0,255,0.7)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="text-[#f0f0f0] font-semibold text-base leading-snug mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-[#555] text-sm">{item.company}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
