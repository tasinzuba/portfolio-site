'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { TESTIMONIALS } from '@/lib/constants'

const VIDEO_TESTIMONIALS = [
  {
    id: 'v1',
    name: 'Alex Johnson',
    role: 'YouTuber / 500K Subs',
    youtubeId: 'dQw4w9WgXcQ',
    quote: "I wouldn't have even started my YouTube journey if it wasn't for TIZ. Their work literally speaks for itself.",
  },
  {
    id: 'v2',
    name: 'Maria Santos',
    role: 'Brand Owner',
    youtubeId: 'dQw4w9WgXcQ',
    quote: "I knew I'd hire TIZ one day — and once I started creating videos, they were the only choice. Month one: 6M views. They truly understood my voice and brought it to life.",
  },
  {
    id: 'v3',
    name: 'James Lee',
    role: 'Course Creator',
    youtubeId: 'dQw4w9WgXcQ',
    quote: "The quality of editing TIZ delivers is on another level. My course sales doubled after the rebrand. Absolutely worth every penny.",
  },
]

function PlayIcon() {
  return (
    <motion.div
      className="w-14 h-14 rounded-full flex items-center justify-center"
      style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(12px)',
        border: '2px solid rgba(255,255,255,0.4)',
      }}
      whileHover={{ scale: 1.1 }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="ml-1">
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </motion.div>
  )
}

function Avatar({ name, size = 44 }: { name: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #e800ff, #9b00cc)',
        boxShadow: '0 0 12px rgba(232,0,255,0.3)',
      }}
    >
      <span className="font-bold text-white" style={{ fontSize: size * 0.36 }}>
        {name.charAt(0)}
      </span>
    </div>
  )
}

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof VIDEO_TESTIMONIALS)[0]
  index: number
}) {
  const [playing, setPlaying] = useState(false)
  const reversed = index % 2 === 1
  const thumbnail = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`

  const videoBlock = (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
      {playing ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full"
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
        <div className="relative w-full h-full group/video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-[1.04]"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
          <motion.button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
            data-cursor="hover"
          >
            <PlayIcon />
          </motion.button>
        </div>
      )}
    </div>
  )

  const textBlock = (
    <div className="flex flex-col justify-center py-2">
      <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-8">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Avatar name={item.name} size={48} />
        <div>
          <p className="text-sm font-semibold text-white">{item.name}</p>
          <p className="text-xs text-white/40">{item.role}</p>
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      style={{
        background: 'rgba(14,10,30,0.7)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {reversed ? (
        <>
          <div className="p-8 md:p-10">{textBlock}</div>
          <div className="p-4 md:p-6 flex items-center">{videoBlock}</div>
        </>
      ) : (
        <>
          <div className="p-4 md:p-6 flex items-center">{videoBlock}</div>
          <div className="p-8 md:p-10">{textBlock}</div>
        </>
      )}
    </motion.div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#06040f' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,0,255,0.08) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-16 px-4 relative z-10"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">
          CLIENT LOVE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          <span className="text-white">Hear it directly from </span>
          <span className="gradient-heading italic">our clients.</span>
        </h2>
        <p className="text-sm text-white/35 mt-4 max-w-md mx-auto leading-relaxed">
          Hear what our clients have to say. Our testimonials reflect the satisfaction our clients have in our services.
        </p>
      </motion.div>

      <div className="mx-auto px-6 md:px-12 relative z-10" style={{ maxWidth: '1100px' }}>
        <div className="flex flex-col gap-5">
          {VIDEO_TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
