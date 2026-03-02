'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

// Replace these YouTube IDs with your actual before/after video IDs
const BEFORE_VIDEO_ID = 'dQw4w9WgXcQ'
const AFTER_VIDEO_ID = 'dQw4w9WgXcQ'

function VideoCard({
  youtubeId,
  label,
  isAfter,
  delay,
}: {
  youtubeId: string
  label: string
  isAfter: boolean
  delay: number
}) {
  const [playing, setPlaying] = useState(false)
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {/* Label */}
      <div className="text-center mb-4">
        {isAfter ? (
          <span
            className="font-display font-black text-2xl tracking-widest uppercase"
            style={{
              background: 'linear-gradient(135deg, #e800ff, #c500d9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {label}
          </span>
        ) : (
          <span className="font-display font-black text-2xl tracking-widest uppercase text-white/30">
            {label}
          </span>
        )}
      </div>

      {/* Video card */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: isAfter
            ? '1px solid rgba(232,0,255,0.35)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: isAfter
            ? '0 0 40px rgba(232,0,255,0.2)'
            : 'none',
        }}
      >
        {playing ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full aspect-video"
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
          <div className="relative aspect-video group">
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt={label}
              className="w-full h-full object-cover"
              style={{ filter: isAfter ? 'none' : 'grayscale(60%) brightness(0.6)' }}
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
              }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
              style={{
                background: isAfter
                  ? 'linear-gradient(135deg, rgba(232,0,255,0.15) 0%, rgba(0,0,0,0.5) 100%)'
                  : 'rgba(0,0,0,0.55)',
              }}
            />

            {/* Play button */}
            <motion.button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              data-cursor="hover"
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  border: isAfter ? '2px solid #e800ff' : '2px solid rgba(255,255,255,0.4)',
                  background: isAfter ? 'rgba(232,0,255,0.15)' : 'rgba(255,255,255,0.1)',
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: isAfter ? '0 0 30px rgba(232,0,255,0.6)' : '0 0 20px rgba(255,255,255,0.3)',
                }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill={isAfter ? '#e800ff' : 'white'}
                  className="ml-1"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function BeforeAfter() {
  return (
    <SectionWrapper id="before-after" className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-white/70 mb-6"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          Transformation
        </span>
        <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4">
          See the <span className="gradient-text">Difference</span>
        </h2>
        <p className="text-white/50 text-lg max-w-md mx-auto">
          This is what your editing looks like before vs after working with me
        </p>
      </motion.div>

      {/* Video grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <VideoCard
          youtubeId={BEFORE_VIDEO_ID}
          label="Before"
          isAfter={false}
          delay={0.1}
        />
        <VideoCard
          youtubeId={AFTER_VIDEO_ID}
          label="After"
          isAfter={true}
          delay={0.25}
        />
      </div>

      {/* Replace hint */}
      <p className="text-center text-[#333] text-xs mt-10">
        Replace <code className="text-[#e800ff]">BEFORE_VIDEO_ID</code> and{' '}
        <code className="text-[#e800ff]">AFTER_VIDEO_ID</code> in{' '}
        <code className="text-[#e800ff]">BeforeAfter.tsx</code> with your actual YouTube video IDs
      </p>
    </SectionWrapper>
  )
}
