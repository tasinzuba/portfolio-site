'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 80, suffix: '+', label: 'Projects Done' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: 'M+', label: 'Views Generated' },
]

const timelineItems = [
  { year: '2024', title: 'Founder — Ultimate Editors 2.0', company: 'Online Course / 670+ Students' },
  { year: '2022', title: 'Senior Video Editor', company: 'Freelance / Global Brands' },
  { year: '2021', title: 'Content Creator & Editor', company: 'Social Media / YouTube' },
  { year: '2019', title: 'Video Editor', company: 'Digital Agency' },
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
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref} className="gradient-text">{count}{suffix}</span>
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#050510' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(232,0,255,0.15) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(124,58,237,0.12) 0%, transparent 60%)', filter: 'blur(40px)' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(232,0,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <motion.div style={{ y: headerY, opacity: headerOpacity }}>
              <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                <span className="text-white/40">The Editor Behind</span><br />
                <span className="gradient-heading">Every Viral Edit</span>
              </h2>
            </motion.div>

            <p className="text-white/45 text-base leading-relaxed mb-5">
              I&apos;m TIZ — a professional video editor with 5+ years of experience creating viral content for brands, creators, and businesses. I specialize in high-energy cuts, cinematic color grading, and motion graphics that get results.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-10">
              I&apos;ve helped 670+ editors learn the exact system I use to consistently earn $2,000/month — through my course Ultimate Editors 2.0.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <SpotlightCard className="rounded-2xl p-5 h-full">
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(18,12,40,0.6)', border: '1px solid rgba(255,255,255,0.06)' }} />
                    <div className="relative z-[5]">
                      <div className="font-display font-black text-3xl mb-1"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                      <div className="text-white/30 text-sm">{stat.label}</div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}>
            <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-8">Experience</p>
            <div className="relative">
              <div className="absolute left-[52px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #e800ff, rgba(124,58,237,0.4), transparent)', boxShadow: '0 0 8px rgba(232,0,255,0.3)' }} />
              <div className="space-y-8">
                {timelineItems.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="flex items-start gap-5">
                    <span className="font-mono text-sm w-12 shrink-0 pt-0.5" style={{ color: '#e800ff' }}>{item.year}</span>
                    <div className="relative shrink-0 mt-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: '#e800ff', boxShadow: '0 0 12px rgba(232,0,255,0.8), 0 0 24px rgba(232,0,255,0.4)' }} />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="text-white/80 font-semibold text-base leading-snug mb-0.5">{item.title}</div>
                      <div className="text-white/30 text-sm">{item.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
