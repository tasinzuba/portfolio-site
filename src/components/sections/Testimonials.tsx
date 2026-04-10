'use client'

import { motion, useScroll, useTransform, animate } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { TESTIMONIALS } from '@/lib/constants'
import SpotlightCard from '@/components/ui/SpotlightCard'

/* ─── Video testimonials ─── */
const VIDEO_TESTIMONIALS = [
  { id: 'v1', name: 'Alex Johnson', role: 'YouTuber / 500K Subs', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'v2', name: 'Maria Santos', role: 'Brand Owner', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'v3', name: 'James Lee', role: 'Course Creator', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'v4', name: 'Sophie Clark', role: 'Podcast Host', youtubeId: 'dQw4w9WgXcQ' },
]

/* ─── Written reviews — pick 4 ─── */
const WRITTEN_REVIEWS = TESTIMONIALS.slice(0, 4)

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 9l-3.09 1.51.59-3.44L2 4.635l3.455-.505L7 1z" fill={i < rating ? '#FFD700' : 'rgba(255,215,0,0.15)'} />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  return (
    <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: size, height: size, background: 'linear-gradient(135deg, #e800ff, #9b00cc)', boxShadow: '0 0 12px rgba(232,0,255,0.3)' }}>
      <span className="font-bold text-white" style={{ fontSize: size * 0.35 }}>{name.charAt(0)}</span>
    </div>
  )
}

/* ─── Video Card ─── */
function VideoTestimonialCard({ item }: { item: (typeof VIDEO_TESTIMONIALS)[0] }) {
  const [playing, setPlaying] = useState(false)
  const thumbnail = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`

  return (
    <SpotlightCard className="rounded-2xl group">
      <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(18,12,40,0.7)', border: '1px solid rgba(255,255,255,0.06)' }} />
      <div className="relative z-[5]">
        <div className="relative aspect-[9/16] sm:aspect-video overflow-hidden rounded-t-2xl">
          {playing ? (
            <>
              <iframe src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`} className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
              <button onClick={() => setPlaying(false)} className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm" data-cursor="hover">✕</button>
            </>
          ) : (
            <div className="relative w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={thumbnail} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" onError={(e) => { ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg` }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
              <motion.button onClick={() => setPlaying(true)} className="absolute inset-0 flex items-center justify-center" data-cursor="hover">
                <motion.div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(232,0,255,0.2)', backdropFilter: 'blur(12px)', border: '2px solid rgba(232,0,255,0.5)', boxShadow: '0 0 20px rgba(232,0,255,0.25)' }} whileHover={{ scale: 1.1 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="ml-0.5"><polygon points="5,3 19,12 5,21" /></svg>
                </motion.div>
              </motion.button>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold text-white/80">{item.name}</p>
          <p className="text-xs text-white/35">{item.role}</p>
        </div>
      </div>
    </SpotlightCard>
  )
}

/* ─── Written Review Carousel ─── */
function ReviewCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = WRITTEN_REVIEWS.length

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, 5000)
  }, [total])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  const goTo = (i: number) => {
    setCurrent(i)
    startTimer()
  }

  const t = WRITTEN_REVIEWS[current]

  return (
    <div className="relative">
      <SpotlightCard className="rounded-2xl">
        <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(18,12,40,0.6)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }} />
        <div className="absolute top-0 left-0 right-0 h-px z-[3]" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,0,255,0.3), transparent)' }} />

        <div className="relative z-[5] p-8 md:p-10">
          {/* Quote */}
          <div className="relative min-h-[120px]">
            <span className="absolute -top-2 -left-1 text-5xl font-serif leading-none" style={{ color: '#e800ff', opacity: 0.12 }}>&ldquo;</span>
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-base md:text-lg text-white/60 italic leading-relaxed pl-6"
            >
              &ldquo;{t.quote}&rdquo;
            </motion.p>
          </div>

          {/* Client + dots */}
          <div className="flex items-center justify-between mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <motion.div
              key={`info-${current}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <Avatar name={t.name} size={44} />
              <div>
                <p className="text-sm font-semibold text-white/80">{t.name}</p>
                <p className="text-xs text-white/30">{t.role}, {t.company}</p>
              </div>
            </motion.div>

            {/* Stars + dots */}
            <div className="flex flex-col items-end gap-3">
              <StarRating rating={t.rating} />
              <div className="flex gap-2">
                {WRITTEN_REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: i === current ? '#e800ff' : 'rgba(255,255,255,0.1)',
                      boxShadow: i === current ? '0 0 8px rgba(232,0,255,0.4)' : 'none',
                    }}
                    data-cursor="hover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#06040f' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px]" style={{ background: 'radial-gradient(ellipse, rgba(232,0,255,0.1) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
      </div>

      {/* Header */}
      <motion.div className="text-center mb-16 px-4 relative z-10" style={{ y: headerY, opacity: headerOpacity }}>
        <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">CLIENT LOVE</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          <span className="text-white/40">What My Clients</span><br />
          <span className="gradient-heading">Have To Say</span>
        </h2>
      </motion.div>

      <div className="mx-auto px-6 md:px-12 relative z-10" style={{ maxWidth: '1200px' }}>
        {/* 2 column: video grid left, written carousel right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">

          {/* LEFT — Video testimonials */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-white/20 uppercase mb-5">VIDEO REVIEWS</p>
            <div className="grid grid-cols-2 gap-4">
              {VIDEO_TESTIMONIALS.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <VideoTestimonialCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Written review carousel */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-white/20 uppercase mb-5">WRITTEN REVIEWS</p>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <ReviewCarousel />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
