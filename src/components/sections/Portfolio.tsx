'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'

const categories = ['All', 'Commercials', 'Short Films', 'Events']
const ITEMS_PER_PAGE = 5

function ProjectCard({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false)

  const thumbnailUrl = project.youtubeId
    ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`
    : null

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`glass-card overflow-hidden group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Video / Thumbnail area — full card, no text below */}
      <div className={`relative ${project.featured ? 'h-72 md:h-80' : 'h-60'} bg-[#0d0d0d] overflow-hidden`}>
        {playing && project.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            {thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-opacity duration-500"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
                }}
              />
            ) : (
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(232,0,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Play button */}
            <motion.button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              data-cursor="hover"
            >
              <motion.div
                className="w-16 h-16 rounded-full border-2 border-[#e800ff] bg-[rgba(232,0,255,0.1)] flex items-center justify-center"
                whileHover={{
                  scale: 1.15,
                  backgroundColor: 'rgba(232,0,255,0.25)',
                  boxShadow: '0 0 30px rgba(232,0,255,0.7)',
                }}
                transition={{ duration: 0.2 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#e800ff" className="ml-1">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </motion.div>
            </motion.button>

            {/* Category badge — bottom left */}
            <div className="absolute bottom-3 left-3 z-10">
              <span className="px-3 py-1 rounded-full text-xs border border-[rgba(232,0,255,0.5)] text-[#e800ff] bg-[rgba(0,0,0,0.75)]">
                {project.category}
              </span>
            </div>

            {/* Year — bottom right */}
            <div className="absolute bottom-3 right-3 z-10">
              <span className="text-white/40 text-xs font-mono">{project.year}</span>
            </div>

            {/* Title overlay on hover */}
            <div className="absolute inset-x-0 top-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-display font-bold text-base text-white drop-shadow-lg">{project.title}</h3>
            </div>
          </>
        )}

        {/* Close button when playing */}
        {playing && (
          <button
            onClick={() => setPlaying(false)}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            data-cursor="hover"
          >
            ✕
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const filtered =
    activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <section id="portfolio" className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[#e800ff] text-sm uppercase tracking-widest mb-4">My Work</p>
        <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[#555] mt-4 text-lg max-w-xl mx-auto">
          Click the play button to watch each project directly.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-[#e800ff] text-white font-bold shadow-[0_0_20px_rgba(232,0,255,0.5)] border-transparent'
                : 'border border-[rgba(255,255,255,0.08)] text-[#555] hover:border-[rgba(232,0,255,0.35)] hover:text-[#e800ff]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-cursor="hover"
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More */}
      {hasMore && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-[rgba(232,0,255,0.4)] hover:border-[rgba(232,0,255,0.8)] transition-all duration-300"
            style={{ background: 'rgba(232,0,255,0.06)' }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 24px rgba(232,0,255,0.35)',
            }}
            whileTap={{ scale: 0.97 }}
            data-cursor="hover"
          >
            Load More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 8l5 5 5-5" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </section>
  )
}
