'use client'

import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'

// Place your video file in /public/videos/intro.mp4
const LOCAL_VIDEO_SRC = '/videos/intro.mp4'
// Thumbnail image (place in /public/images/hero-thumbnail.jpg), or leave empty to use gradient
const THUMBNAIL_SRC = '/images/hero-thumbnail.jpg'

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
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start"
      style={{ background: '#06040f' }}
    >
      {/* Glow overflow clip wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

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

      </div>{/* end glow clip wrapper */}

      {/* Noise grain subtle overlay */}
      <div className="noise-overlay" />

      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-12 pt-24 md:pt-28 pb-16"
      >
        {/* TOP — text left, card right */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10 items-center mb-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-white/80"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                Premium Video Production Agency
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-4 text-white"
            >
              We Create Content<br />
              That{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #e800ff, #9b00cc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Grows Your Brand
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-white/50 mb-7 leading-relaxed"
            >
              From short-form reels to long-form YouTube — we handle your entire content production so you can focus on growing your business.
            </motion.p>

            {/* Social proof pill */}
            <motion.div variants={itemVariants} className="mb-7">
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex -space-x-2">
                  {['#e800ff', '#9b00cc', '#7c3aed', '#4f46e5'].map((c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#06040f] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: c }}
                    >
                      {['L', 'J', 'S', 'M'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-white/70">
                  Trusted by <span className="text-white font-semibold">500+</span> Brands &amp; Creators
                </span>
              </div>
            </motion.div>

            {/* CTA button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://cal.com/tasin-ahmed-61u67y/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, rgba(232,0,255,0.7), rgba(155,0,204,0.7))',
                  boxShadow: '0 0 18px rgba(232,0,255,0.2)',
                }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 28px rgba(232,0,255,0.4)' }}
                whileTap={{ scale: 0.97, y: 0 }}
                data-cursor="hover"
              >
                Book A Free Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT — review cards, overflow visible so they dip into video below */}
          <motion.div
            className="hidden lg:flex flex-col justify-end overflow-visible"
            style={{ paddingTop: '80px', position: 'relative', zIndex: 5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col gap-4 w-[260px] ml-auto" style={{ marginBottom: '-255px' }}>
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: 'rgba(18,12,40,0.80)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(14px)',
                  transform: 'rotate(-3deg)',
                }}
              >
                <p className="text-white/75 text-sm leading-relaxed mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  &ldquo;Month one with TIZ: 6M views. They truly understood my voice and style and brought it to life.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e800ff] to-[#9b00cc] flex items-center justify-center text-xs font-bold text-white">J</div>
                  <div>
                    <p className="text-white/90 text-sm font-semibold">Jasmin Alić</p>
                    <p className="text-white/40 text-xs">300K+ LinkedIn followers</p>
                  </div>
                </div>
              </div>
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: 'rgba(18,12,40,0.5)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(14px)',
                  transform: 'rotate(-3deg)',
                }}
              >
                <p className="text-white/55 text-sm leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  &ldquo;Our first video got 80 thousand views, transforming my channel completely.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM — video full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          {/* Video wrapper */}
          <div className="relative">

          {/* Glow light above video */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-[80%] h-[120px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(232,0,255,0.25) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(232,0,255,0.25)',
              boxShadow: '0 0 80px rgba(232,0,255,0.15)',
            }}
          >
            {videoPlaying ? (
              <div className="relative">
                <video
                  src={LOCAL_VIDEO_SRC}
                  className="w-full"
                  style={{ aspectRatio: '16/9' }}
                  controls
                  autoPlay
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
              <div
                className="relative group"
                style={{
                  background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1057 40%, #0a0015 100%)',
                  aspectRatio: '16/9',
                }}
              >
                <img
                  src={THUMBNAIL_SRC}
                  alt="Intro video"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(232,0,255,0.1) 0%, rgba(6,4,15,0.45) 100%)' }}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-start p-8 z-10">
                  <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
                    TIZ<br />MEDIA
                  </h2>
                  <p className="text-white/50 text-sm mt-2 font-medium">Premium Video Agency</p>
                </div>
                <motion.button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center z-10"
                  data-cursor="hover"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg width="26" height="26" viewBox="0 0 22 22" fill="white">
                      <path d="M7 4l12 7-12 7V4z" />
                    </svg>
                  </motion.div>
                </motion.button>
                <div className="absolute bottom-6 left-8 z-10">
                  <span className="font-display font-black text-3xl text-white/70">TIZ</span>
                </div>

              </div>
            )}
          </div>
          </div>{/* end video wrapper */}
        </motion.div>
      </div>
    </section>
  )
}
