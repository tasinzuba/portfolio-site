'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

const COMPARISON_PAIRS = [
  {
    type: 'Wedding Film',
    before: {
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['No Color Grade', 'Rough Audio', 'Basic Cut'],
    },
    after: {
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['Color Graded', 'Sound Design', 'Motion Graphics'],
    },
  },
  {
    type: 'Commercial',
    before: {
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['Flat Profile', 'No FX', 'Raw Audio'],
    },
    after: {
      youtubeId: 'dQw4w9WgXcQ',
      tags: ['Cinema Grade', 'VFX Added', 'Mixed & Mastered'],
    },
  },
]

function VideoCard({
  youtubeId,
  isAfter,
  tags,
}: {
  youtubeId: string
  isAfter: boolean
  tags: string[]
}) {
  const [playing, setPlaying] = useState(false)
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  return (
    <div className="relative flex-1">
      {/* Badge */}
      <div
        className={`absolute top-4 left-4 z-10 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase ${
          isAfter
            ? 'text-emerald-300'
            : 'text-red-300'
        }`}
        style={{
          background: isAfter ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
          border: `1px solid ${isAfter ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
        }}
      >
        {isAfter ? 'AFTER' : 'BEFORE'}
      </div>

      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(18,12,40,0.6)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Video area */}
        <div className="relative aspect-video">
          {playing ? (
            <>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm"
                data-cursor="hover"
              >
                ✕
              </button>
            </>
          ) : (
            <div className="relative w-full h-full group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbnail}
                alt={isAfter ? 'After' : 'Before'}
                className="w-full h-full object-cover"
                style={{ filter: isAfter ? 'none' : 'grayscale(40%) brightness(0.7)' }}
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-40"
                style={{
                  background: isAfter
                    ? 'linear-gradient(135deg, rgba(232,0,255,0.08) 0%, rgba(6,4,15,0.4) 100%)'
                    : 'rgba(6,4,15,0.5)',
                }}
              />
              <motion.button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                data-cursor="hover"
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                  }}
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: 'rgba(232,0,255,0.25)',
                    borderColor: '#e800ff',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          )}
        </div>

        {/* Bottom info */}
        <div className="p-4">
          <p className="text-sm font-medium text-white/80 mb-2">
            {isAfter ? 'Final Delivery' : 'Raw Footage'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded-full text-xs ${
                  isAfter
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ComparisonPair({
  pair,
  index,
}: {
  pair: (typeof COMPARISON_PAIRS)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-60, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.5], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const vsScale = useTransform(scrollYProgress, [0.15, 0.4], [0, 1])

  return (
    <div ref={ref} className="mb-20 last:mb-0">
      {/* Pair type label */}
      <motion.div
        style={{ opacity }}
        className="text-center mb-8"
      >
        <span
          className="inline-block px-4 py-1.5 rounded text-xs font-bold tracking-widest uppercase text-white"
          style={{ background: '#4F46E5' }}
        >
          {pair.type}
        </span>
      </motion.div>

      {/* Cards row */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 relative">
        <motion.div className="flex-1 w-full" style={{ x: leftX, opacity }}>
          <VideoCard
            youtubeId={pair.before.youtubeId}
            isAfter={false}
            tags={pair.before.tags}
          />
        </motion.div>

        {/* VS Badge */}
        <motion.div
          className="relative z-10 flex-shrink-0 mx-[-28px] md:mx-[-28px]"
          style={{ scale: vsScale, opacity }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-sm"
            style={{
              background: 'linear-gradient(135deg, #e800ff, #9b00cc)',
              boxShadow: '0 0 30px rgba(232,0,255,0.4)',
            }}
          >
            VS
          </div>
        </motion.div>

        <motion.div className="flex-1 w-full" style={{ x: rightX, opacity }}>
          <VideoCard
            youtubeId={pair.after.youtubeId}
            isAfter={true}
            tags={pair.after.tags}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: '#050510' }}
    >
      {/* Glow — center top */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header — same style as Process */}
        <motion.div
          className="text-center mb-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">THE TRANSFORMATION</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">From Raw Footage To</span><br />
            <span className="text-white">Cinematic Final Product</span>
          </h2>
        </motion.div>

        {/* Comparison Pairs */}
        {COMPARISON_PAIRS.map((pair, i) => (
          <ComparisonPair key={pair.type} pair={pair} index={i} />
        ))}
      </div>
    </section>
  )
}