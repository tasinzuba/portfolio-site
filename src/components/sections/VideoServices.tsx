'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const YT = 'dQw4w9WgXcQ'

const YT_POOL     = Array(12).fill(YT)
const SHORT_POOL  = Array(9).fill(YT)
const PORT_POOL   = Array(9).fill(YT)
const POD_POOL    = Array(6).fill(YT)

function PlayBtn({ size = 44 }: { size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        border: '2px solid rgba(255,255,255,0.3)',
      }}
    >
      <svg width={size * 0.35} height={size * 0.35} viewBox="0 0 24 24" fill="white" className="ml-0.5">
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </div>
  )
}

function ThumbVideo({ youtubeId, aspect = '16/9', className = '' }: { youtubeId: string; aspect?: string; className?: string }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  return (
    <div className={`relative overflow-hidden rounded-xl group/tv ${className}`} style={{ aspectRatio: aspect }}>
      {playing ? (
        <>
          <iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`} className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
          <button onClick={() => setPlaying(false)} className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white text-xs" data-cursor="hover">✕</button>
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={thumb} alt="Video" className="w-full h-full object-cover transition-transform duration-500 group-hover/tv:scale-[1.04]" onError={(e) => { ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` }} />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />
          <button onClick={() => setPlaying(true)} className="absolute inset-0 flex items-center justify-center" data-cursor="hover">
            <PlayBtn />
          </button>
        </>
      )}
    </div>
  )
}

function ExploreBtn() {
  return (
    <motion.a href="#contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white" style={{ background: 'linear-gradient(135deg, rgba(232,0,255,0.7), rgba(155,0,204,0.7))', boxShadow: '0 0 12px rgba(232,0,255,0.2)' }} whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 24px rgba(232,0,255,0.35)' }} whileTap={{ scale: 0.97, y: 0 }} data-cursor="hover">
      Explore pricing
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </motion.a>
  )
}

function LoadMoreBtn({ onClick, less = false }: { onClick: () => void; less?: boolean }) {
  return (
    <motion.button
      onClick={onClick}
      className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold"
      style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.55)' }}
      whileHover={{ scale: 1.03, borderColor: 'rgba(232,0,255,0.4)', color: '#fff' }}
      whileTap={{ scale: 0.97 }}
      data-cursor="hover"
    >
      {less ? 'Load Less' : 'Load More'}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {less
          ? <path d="M12 19V5M5 12l7-7 7 7" />
          : <path d="M12 5v14M5 12l7 7 7-7" />}
      </svg>
    </motion.button>
  )
}

const CARD_BASE = {
  background: 'rgba(10,8,22,0.75)',
  border: '1px solid rgba(255,255,255,0.07)',
  backdropFilter: 'blur(16px)',
}

function GlowCard({ children, className = '', style = {}, glowLeft = false }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; glowLeft?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ ...CARD_BASE, ...style }}>
      <div
        className={`absolute top-0 pointer-events-none ${glowLeft ? 'left-0' : 'right-0'}`}
        style={{
          width: '60%',
          height: '60%',
          background: glowLeft
            ? 'radial-gradient(ellipse at 0% 0%, rgba(232,0,255,0.45) 0%, rgba(155,0,204,0.2) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at 100% 0%, rgba(232,0,255,0.45) 0%, rgba(155,0,204,0.2) 40%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />
      {children}
    </div>
  )
}

export default function VideoServices({ isProjectsPage = false }: { isProjectsPage?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.2], [30, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1])

  const [ytCount, setYtCount]       = useState(4)
  const [shortCount, setShortCount] = useState(3)
  const [portCount, setPortCount]   = useState(3)
  const [podCount, setPodCount]     = useState(2)

  return (
    <section id="video-services" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#000000', fontFamily: "'Satoshi', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-14" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-sm font-medium text-white mb-3 inline-block px-5 py-2 rounded-[8px]" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.15)', letterSpacing: '0.01em' }}>SERVICES</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
            <span className="text-white">How can we help </span>
            <span className="gradient-heading italic">you?</span>
          </h2>
          <p className="text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
            From short-form videos, to long-form videos, to ad creatives, and VSLs, we&apos;ve got you covered on every front.
          </p>
        </motion.div>

        {/* ── YouTube Videos ── */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mb-4">
          <GlowCard className="rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-1">YouTube Videos</h3>
            <p className="text-sm text-white/40 mb-4 max-w-sm mx-auto">YouTube videos need to be more engaging than ever for longer watch time and more subscribers.</p>
            <div className="mb-5"><ExploreBtn /></div>
            <div className="grid grid-cols-2 gap-3">
              {YT_POOL.slice(0, ytCount).map((id, i) => <ThumbVideo key={i} youtubeId={id} aspect="16/9" />)}
            </div>
            {isProjectsPage && (
              <div className="flex justify-center">
                {ytCount < YT_POOL.length
                  ? <LoadMoreBtn onClick={() => setYtCount(c => Math.min(c + 4, YT_POOL.length))} />
                  : <LoadMoreBtn less onClick={() => setYtCount(4)} />}
              </div>
            )}
          </GlowCard>
        </motion.div>

        {/* ── Short Form Videos ── */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }} className="mb-4">
          <GlowCard className="rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-1">Short Form Videos</h3>
            <p className="text-sm text-white/40 mb-4 max-w-sm mx-auto">Nail your Reels, TikToks, LinkedIn and YouTube shorts to optimize engagement and shareability.</p>
            <div className="mb-5"><ExploreBtn /></div>
            <div className="grid grid-cols-3 gap-3">
              {SHORT_POOL.slice(0, shortCount).map((id, i) => <ThumbVideo key={i} youtubeId={id} aspect="9/16" />)}
            </div>
          </GlowCard>
        </motion.div>

        {/* ── Portrait videos row ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mb-4">
          <div className="grid grid-cols-3 gap-3">
            {PORT_POOL.slice(0, portCount).map((id, i) => <ThumbVideo key={i} youtubeId={id} aspect="9/16" className="rounded-2xl" />)}
          </div>
          {isProjectsPage && (
            <div className="flex justify-center">
              {portCount < PORT_POOL.length
                ? <LoadMoreBtn onClick={() => setPortCount(c => Math.min(c + 3, PORT_POOL.length))} />
                : <LoadMoreBtn less onClick={() => setPortCount(3)} />}
            </div>
          )}
        </motion.div>

        {/* ── Bento: Podcast (left tall) + 3 text cards (right) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

          {/* Left tall — Podcast Editing */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
            <GlowCard className="rounded-2xl p-6 flex flex-col">
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-white mb-1">Podcast Editing</h3>
                <p className="text-sm text-white/40 mb-4">Podcasts edited to perfection for clear sound, engaging flow, and a loyal audience.</p>
                <ExploreBtn />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {POD_POOL.slice(0, podCount).map((id, i) => <ThumbVideo key={i} youtubeId={id} aspect="16/9" />)}
              </div>
              {isProjectsPage && (
                <div className="flex justify-center mt-4">
                  {podCount < POD_POOL.length
                    ? <LoadMoreBtn onClick={() => setPodCount(c => Math.min(c + 2, POD_POOL.length))} />
                    : <LoadMoreBtn less onClick={() => setPodCount(2)} />}
                </div>
              )}
            </GlowCard>
          </motion.div>

          {/* Right — 3 text cards */}
          <div className="flex flex-col gap-4">
            {[
              { title: 'Ad Creatives & VSLs', desc: 'High-converting ad creatives and VSLs crafted to grab attention, drive action, and boost sales.' },
              { title: 'Explainers', desc: 'Engaging explainer videos tailored for SaaS/AI, turning complex features into compelling stories that convert.' },
              { title: 'LinkedIn Videos', desc: 'We interview you once and turn it into 12 punchy LinkedIn videos that build trust, authority, and inbound leads.' },
            ].map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.12 + i * 0.07 }} className="flex-1">
                <GlowCard glowLeft className="rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed flex-1 max-w-xs">{card.desc}</p>
                  <ExploreBtn />
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* and more — links to projects page on homepage, hidden on projects page */}
        {!isProjectsPage && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
            <Link
              href="/projects"
              className="text-sm text-white/30 hover:text-white/60 transition-colors underline underline-offset-4"
              data-cursor="hover"
            >
              and more...
            </Link>
          </motion.div>
        )}

      </div>

      {/* Bottom blend — only on homepage */}
      {!isProjectsPage && (
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(6,4,15,0.4) 40%, rgba(6,4,15,0.8) 70%, #06040f 100%)' }}
        />
      )}
    </section>
  )
}
