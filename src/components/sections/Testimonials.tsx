'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const SINGLE_CARDS = [
  {
    id: 's1',
    name: 'Lara Acosta',
    role: 'Founder, Literally Academy',
    youtubeId: 'dQw4w9WgXcQ',
    quote: "I wouldn't have even started my LinkedIn and YouTube video journey if it wasn't for TIZ. Their work literally speaks for itself.",
    videoLeft: true,
  },
  {
    id: 's2',
    name: 'Jasmin Alić',
    role: '300K+ followers on LinkedIn',
    youtubeId: 'dQw4w9WgXcQ',
    quote: "I knew I'd hire TIZ one day — and once I started LinkedIn videos, they were the only choice. Month one: 6M views. They truly understood my voice and style, and brought it to life.",
    videoLeft: false,
  },
]

const DOUBLE_LEFT = {
  name: 'Jimmy Conover',
  role: 'Founder @ Scale Video Agency',
  youtubeId: 'dQw4w9WgXcQ',
  quote: "I've used TIZ and his team for 2–3 months, creating 40–50 amazing videos. They handle everything efficiently and communicate well.",
}

const DOUBLE_RIGHT_TEXT = {
  name: 'Yasir Khan',
  role: 'Speaking Coach',
  quote: 'I struggled with video editors until I found TIZ. Our first video got 80 thousand views, transforming my channel.',
}

const DOUBLE_RIGHT_VIDEO = 'dQw4w9WgXcQ'

const CARD_STYLE = {
  background: 'rgba(0,0,0,0.75)',
  border: '1px solid rgba(255,255,255,0.09)',
  backdropFilter: 'blur(20px)',
}

const QUOTE_STYLE: React.CSSProperties = {
  fontFamily: "'Satoshi', sans-serif",
  fontSize: '21px',
  fontWeight: 400,
  lineHeight: '1.4',
}

function Avatar({ name, size = 40 }: { name: string; size?: number }) {
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

function PersonInfo({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={name} size={42} />
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-white/40">{role}</p>
      </div>
    </div>
  )
}

function VideoEmbed({ youtubeId }: { youtubeId: string }) {
  const [playing, setPlaying] = useState(false)
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16/10' }}>
      {playing ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
          <button
            onClick={() => setPlaying(false)}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm"
            data-cursor="hover"
          >✕</button>
        </>
      ) : (
        <div className="relative w-full h-full group/vid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt="Testimonial"
            className="w-full h-full object-cover transition-transform duration-700 group-hover/vid:scale-[1.03]"
            onError={(e) => { ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />
          <motion.button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
            data-cursor="hover"
          >
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.35)' }}
              whileHover={{ scale: 1.1 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      )}
    </div>
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
      style={{ background: '#000000' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse, rgba(232,0,255,0.08) 0%, transparent 60%)', filter: 'blur(60px)' }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-16 px-4 relative z-10"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <p className="text-sm font-medium text-white mb-3 inline-block px-5 py-2 rounded-[8px]" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.15)', letterSpacing: '0.01em' }}>Our Clients</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          <span className="text-white">Hear it directly from </span>
          <span className="gradient-heading italic">our clients.</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '20px', fontFamily: "'Satoshi', sans-serif" }}>
          Hear what our clients have to say. Our testimonials reflect the satisfaction our clients have in our services.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-4">

          {/* First two — full width horizontal cards */}
          {SINGLE_CARDS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center"
              style={CARD_STYLE}
            >
              {t.videoLeft ? (
                <>
                  <VideoEmbed youtubeId={t.youtubeId} />
                  <div className="flex flex-col gap-4">
                    <p className="text-white/85 leading-relaxed" style={QUOTE_STYLE}>&ldquo;{t.quote}&rdquo;</p>
                    <PersonInfo name={t.name} role={t.role} />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    <p className="text-white/85 leading-relaxed" style={QUOTE_STYLE}>&ldquo;{t.quote}&rdquo;</p>
                    <PersonInfo name={t.name} role={t.role} />
                  </div>
                  <VideoEmbed youtubeId={t.youtubeId} />
                </>
              )}
            </motion.div>
          ))}

          {/* Last row — two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Left col */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={CARD_STYLE}
            >
              <VideoEmbed youtubeId={DOUBLE_LEFT.youtubeId} />
              <p className="text-white/85 leading-relaxed" style={QUOTE_STYLE}>&ldquo;{DOUBLE_LEFT.quote}&rdquo;</p>
              <PersonInfo name={DOUBLE_LEFT.name} role={DOUBLE_LEFT.role} />
            </motion.div>

            {/* Right col */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={CARD_STYLE}
            >
              <p className="text-white/85 leading-relaxed" style={QUOTE_STYLE}>&ldquo;{DOUBLE_RIGHT_TEXT.quote}&rdquo;</p>
              <PersonInfo name={DOUBLE_RIGHT_TEXT.name} role={DOUBLE_RIGHT_TEXT.role} />
              <VideoEmbed youtubeId={DOUBLE_RIGHT_VIDEO} />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
