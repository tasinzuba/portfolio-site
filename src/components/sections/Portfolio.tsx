'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'
import SpotlightCard from '@/components/ui/SpotlightCard'

const TABS = ['All', 'Podcast', 'Educational', 'Business', 'Reels', 'Thumbnail'] as const
const TAB_LABELS: Record<string, string> = {
  All: 'All', Podcast: 'Podcast', Educational: 'Educational', Business: 'Business', Reels: 'Reels', Thumbnail: 'Thumbnail / Graphic Design',
}
const ITEMS_PER_PAGE = 6
const LOAD_MORE_COUNT = 3

function PlayButton() {
  return (
    <motion.div
      className="w-16 h-16 rounded-full flex items-center justify-center"
      style={{ background: 'rgba(232,0,255,0.2)', backdropFilter: 'blur(12px)', border: '2px solid rgba(232,0,255,0.6)', boxShadow: '0 0 30px rgba(232,0,255,0.4)' }}
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5,3 19,12 5,21" /></svg>
    </motion.div>
  )
}

function VideoCard({ project, index }: { project: Project; index: number }) {
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const thumbnailUrl = project.youtubeId ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg` : null

  return (
    <motion.div layout initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <SpotlightCard className="rounded-2xl group">
        <div className="absolute inset-0 rounded-2xl" style={{ background: '#0a0a14', border: '1px solid rgba(255,255,255,0.06)' }} />
        <div className="relative z-[5] aspect-video overflow-hidden rounded-2xl">
          {playing && project.youtubeId ? (
            <>
              <iframe src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`} className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
              <button onClick={() => setPlaying(false)} className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm" data-cursor="hover">✕</button>
            </>
          ) : (
            <>
              {thumbnailUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={thumbnailUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" onError={(e) => { ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg` }} />
              )}
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-50" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', opacity: 0.8 }} />
              <motion.button onClick={() => setPlaying(true)} className="absolute inset-0 flex items-center justify-center" data-cursor="hover">
                <AnimatePresence>{hovered && <PlayButton />}</AnimatePresence>
              </motion.button>
            </>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

function ThumbnailCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.5, delay: index * 0.06 }}>
      <SpotlightCard className="rounded-2xl group">
        <div className="absolute inset-0 rounded-2xl" style={{ background: '#0a0a14', border: '1px solid rgba(255,255,255,0.06)' }} />
        <div className="relative z-[5] overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.imageSrc || project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" onError={(e) => { ;(e.target as HTMLImageElement).style.display = 'none' }} />
          <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(to top, rgba(232,0,255,0.12) 0%, transparent 50%)' }} />
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('All')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  const filtered = activeTab === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab)
  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const allLoaded = !hasMore && filtered.length > 0

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#050510' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.2) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle at 0% 100%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div className="text-center mb-14" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">OUR WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">A Showcase Of</span><br />
            <span className="gradient-heading">Selected Projects</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2.5 mb-12 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {TABS.map((tab) => (
            <motion.button key={tab} onClick={() => { setActiveTab(tab); setVisibleCount(ITEMS_PER_PAGE) }}
              className="relative px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300"
              style={{
                background: activeTab === tab ? 'linear-gradient(135deg, #e800ff 0%, #9b00cc 100%)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeTab === tab ? 'rgba(232,0,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: activeTab === tab ? '0 0 16px rgba(232,0,255,0.15)' : 'none',
                color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.4)',
              }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} data-cursor="hover"
            >{TAB_LABELS[tab]}</motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => project.category === 'Thumbnail' ? <ThumbnailCard key={project.id} project={project} index={i} /> : <VideoCard key={project.id} project={project} index={i} />)}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20"><p className="text-white/30 text-lg">No projects in this category yet.</p></motion.div>}

        <div className="flex justify-center mt-12">
          {hasMore && (
            <motion.button onClick={() => { setLoading(true); setTimeout(() => { setVisibleCount((c) => c + LOAD_MORE_COUNT); setLoading(false) }, 600) }} disabled={loading}
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #e800ff, #9b00cc)', boxShadow: '0 0 20px rgba(232,0,255,0.2)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(232,0,255,0.3)' }} whileTap={{ scale: 0.97 }} data-cursor="hover"
            >
              {loading ? <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }} /><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.4s' }} /></span> : 'Load More'}
            </motion.button>
          )}
          {allLoaded && <span className="text-sm text-white/25">That&apos;s all for now!</span>}
        </div>
      </div>
    </section>
  )
}
