'use client'

import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'

// Replace with your actual intro YouTube video ID
const INTRO_VIDEO_ID = 'dQw4w9WgXcQ'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#06040f' }}
    >
      {/* Purple glow background — center top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.35) 0%, transparent 70%)',
        }}
      />
      {/* Side glows */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(232,0,255,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(232,0,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Noise grain subtle overlay */}
      <div className="noise-overlay" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white/80"
                style={{
                  background: 'rgba(232,0,255,0.18)',
                  border: '1px solid rgba(232,0,255,0.35)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d78] animate-pulse" />
                Alex Morrison 2.0
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-5xl md:text-6xl lg:text-[64px] leading-[1.05] mb-5 text-white"
            >
              Learn Viral Editing<br />
              Styles &amp; Earn{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #ff2d78, #ff6ba8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                $2,000/Month
              </span>
              <br />
              In 90 Days
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/50 mb-8 max-w-md leading-relaxed"
            >
              Learn Viral 2026 Editing Styles &amp; Make $2,000/mo with Video Editing in just 90
              days without watching boring editing tutorials
            </motion.p>

            {/* Social proof pill */}
            <motion.div variants={itemVariants} className="mb-8">
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Avatars */}
                <div className="flex -space-x-2">
                  {['#ff2d78', '#e800ff', '#00d4ff', '#ff9900'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#06040f] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: c }}
                    >
                      {['A', 'M', 'J', 'K'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-white/70">
                  More Than <span className="text-white font-semibold">670</span> Viral Editors!
                </span>
              </div>
            </motion.div>

            {/* CTA button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #e800ff, #c500d9)',
                  boxShadow: '0 0 30px rgba(232,0,255,0.5)',
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 50px rgba(232,0,255,0.7)',
                }}
                whileTap={{ scale: 0.97 }}
                data-cursor="hover"
              >
                Get Access
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT — video + floating testimonial cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Floating testimonial — top right */}
            <motion.div
              className="absolute -top-6 right-0 z-20 w-64 p-4 rounded-2xl text-sm"
              style={{
                background: 'rgba(18,12,40,0.9)',
                border: '1px solid rgba(232,0,255,0.25)',
                backdropFilter: 'blur(12px)',
              }}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-white/80 text-xs leading-relaxed mb-3">
                &ldquo;all comes down to Ultimate Editor&apos;s Advantage. Thanks a lot to @Joseph Eid and all UE members&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff2d78] to-[#e800ff] flex items-center justify-center text-[10px] font-bold text-white">A</div>
                <div>
                  <p className="text-white text-xs font-semibold">Anas Kdr</p>
                  <p className="text-white/40 text-[10px]">First 1k per month</p>
                </div>
              </div>
            </motion.div>

            {/* Floating testimonial — bottom right */}
            <motion.div
              className="absolute -bottom-6 right-0 z-20 w-60 p-3.5 rounded-2xl text-xs"
              style={{
                background: 'rgba(18,12,40,0.9)',
                border: '1px solid rgba(232,0,255,0.25)',
                backdropFilter: 'blur(12px)',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="text-white/70 leading-relaxed">
                &ldquo;If I had told myself 3 months ago I&apos;d be earning this...&rdquo;
              </p>
            </motion.div>

            {/* Video card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(232,0,255,0.3)',
                boxShadow: '0 0 60px rgba(232,0,255,0.2)',
              }}
            >
              {videoPlaying ? (
                /* YouTube embed */
                <div className="relative" style={{ minHeight: '380px' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    className="w-full"
                    style={{ minHeight: '380px', aspectRatio: '16/9' }}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setVideoPlaying(false)}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm"
                    data-cursor="hover"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                /* Thumbnail / placeholder */
                <div
                  className="relative flex items-end justify-start p-6 group"
                  style={{
                    background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1057 40%, #0a0015 100%)',
                    minHeight: '380px',
                    aspectRatio: '16/9',
                  }}
                >
                  {/* YouTube thumbnail if available */}
                  <img
                    src={`https://img.youtube.com/vi/${INTRO_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Intro video"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(232,0,255,0.2) 0%, rgba(6,4,15,0.6) 100%)',
                    }}
                  />

                  {/* Title overlay */}
                  <div className="absolute inset-0 flex flex-col items-start justify-start p-6 z-10">
                    <h2
                      className="font-display font-black text-5xl text-white leading-tight"
                      style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
                    >
                      ULTIMATE<br />EDITORS 2.0
                    </h2>
                    <div className="flex gap-2 mt-3">
                      {[{ label: 'Pr', bg: '#9999FF' }, { label: 'Ae', bg: '#9999FF' }].map((s) => (
                        <div
                          key={s.label}
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: s.bg }}
                        >
                          {s.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Play button */}
                  <motion.button
                    onClick={() => setVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center z-10"
                    data-cursor="hover"
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(232,0,255,0.15)',
                        border: '2px solid rgba(232,0,255,0.7)',
                        backdropFilter: 'blur(8px)',
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: '0 0 30px rgba(232,0,255,0.7)',
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="#e800ff">
                        <path d="M7 4l12 7-12 7V4z" />
                      </svg>
                    </motion.div>
                  </motion.button>

                  {/* Bottom logo */}
                  <div className="absolute bottom-4 left-6 z-10">
                    <span className="font-display font-black text-2xl text-white/80" style={{ letterSpacing: '-0.02em' }}>
                      AM
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
