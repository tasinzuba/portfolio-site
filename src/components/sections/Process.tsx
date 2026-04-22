'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    badge: 'IDEATION',
    title: 'Idea Analysis',
    desc: 'We take your ideas and analyze them thoroughly based on our experience and existing market standards.',
  },
  {
    number: '02',
    badge: 'EDITING',
    title: 'Editing The Video',
    desc: 'We make the best quality videos using advanced motion graphics that bring your message to life.',
  },
  {
    number: '03',
    badge: 'THUMBNAIL',
    title: 'Creating Thumbnail',
    desc: 'We analyze other thumbnails in your niche and are able to replicate best performing results.',
  },
  {
    number: '04',
    badge: 'POST',
    title: 'Post The Video',
    desc: 'All thats left now is to post the video and start counting the leads that come in.',
  },
]

function Visual01() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Each tag spreads outward as scroll progresses
  const tlx = useTransform(scrollYProgress, [0, 0.6], [60, 0])   // top-left: moves left→final
  const tly = useTransform(scrollYProgress, [0, 0.6], [50, 0])
  const trx = useTransform(scrollYProgress, [0, 0.6], [-60, 0])  // top-right
  const try_ = useTransform(scrollYProgress, [0, 0.6], [50, 0])
  const blx = useTransform(scrollYProgress, [0, 0.6], [60, 0])   // bottom-left
  const bly = useTransform(scrollYProgress, [0, 0.6], [-50, 0])
  const brx = useTransform(scrollYProgress, [0, 0.6], [-60, 0])  // bottom-right
  const bry = useTransform(scrollYProgress, [0, 0.6], [-50, 0])

  const tagMotion = [
    { x: tlx, y: tly },
    { x: trx, y: try_ },
    { x: blx, y: bly },
    { x: brx, y: bry },
  ]

  const tags = [
    { label: 'Coaches',        rotate: -35, top: '5%',    left: '2%'   },
    { label: 'Personal Brand', rotate:  30, top: '8%',    right: '0%'  },
    { label: 'E-Commerce',     rotate:  28, bottom: '8%', left: '0%'   },
    { label: 'Fashion',        rotate: -28, bottom: '5%', right: '2%'  },
  ]

  return (
    <div ref={ref} className="relative h-[240px] w-full">
      {/* Center glow */}
      <div className="absolute pointer-events-none" style={{
        width: 200, height: 200,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(232,0,255,0.7) 28%, rgba(180,0,255,0.25) 58%, transparent 75%)',
        filter: 'blur(20px)',
        zIndex: 1,
      }} />

      {tags.map((t, i) => {
        const { rotate, ...pos } = t
        return (
          <motion.div key={t.label}
            className="absolute flex items-center justify-center px-6 py-3 text-white text-sm font-semibold whitespace-nowrap"
            style={{
              background: 'rgba(8,5,20,0.88)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999,
              rotate,
              zIndex: 2,
              boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
              x: tagMotion[i].x,
              y: tagMotion[i].y,
              ...pos,
            }}
          >
            {t.label}
          </motion.div>
        )
      })}
    </div>
  )
}

function Visual02() {
  return (
    <motion.div
      className="relative"
      style={{ height: 280 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Purple glow behind Pr */}
      <div className="absolute pointer-events-none" style={{
        width: 210, height: 210,
        top: -10, left: 55,
        background: 'radial-gradient(circle, rgba(232,0,255,0.5) 0%, rgba(150,0,255,0.25) 45%, transparent 70%)',
        filter: 'blur(28px)',
        zIndex: 1,
      }} />

      {/* Player card — behind toolbar (z:2) */}
      <div className="absolute" style={{ top: 140, left: 30, right: 0, zIndex: 2 }}>
        <Image
          src="/images/process/player.png"
          alt="Video player"
          width={400}
          height={135}
          className="w-full"
          style={{ height: 135, objectFit: 'fill' }}
        />
      </div>

      {/* Toolbar — overlaps player (z:4) */}
      <div className="absolute" style={{ left: 0, top: 20, zIndex: 4 }}>
        <Image
          src="/images/process/toolbar.png"
          alt="Toolbar"
          width={52}
          height={218}
          className="object-contain"
          style={{ width: 52, height: 218 }}
        />
      </div>

      {/* Premiere Pro — z:3 */}
      <div className="absolute" style={{ top: 5, left: 62, zIndex: 3 }}>
        <Image
          src="/images/process/premiere.png"
          alt="Premiere Pro"
          width={118}
          height={118}
          style={{ width: 118, height: 118 }}
        />
      </div>

      {/* After Effects — z:3 */}
      <div className="absolute" style={{ top: 65, right: 8, zIndex: 3 }}>
        <Image
          src="/images/process/aftereffects.png"
          alt="After Effects"
          width={76}
          height={76}
          style={{ width: 76, height: 76 }}
        />
      </div>
    </motion.div>
  )
}

const thumbnails = [
  '/images/process/thumb1.jpg',
  '/images/process/thumb2.jpg',
]

function Visual04() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // 0→0.5 = image 0, 0.5→1 = image 1
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setCurrent(v < 0.5 ? 0 : 1)
    })
  }, [scrollYProgress])

  return (
    <div ref={ref} className="relative h-[260px] w-full flex items-center justify-center">
      {/* Background glow — strong top */}
      <div className="absolute pointer-events-none" style={{
        width: 500, height: 160,
        top: -40, left: '50%',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse, rgba(232,0,255,1) 0%, rgba(200,0,255,0.7) 30%, rgba(150,0,230,0.3) 60%, transparent 80%)',
        filter: 'blur(30px)',
        zIndex: 0,
      }} />

      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{ width: 320, height: 200, border: '1px solid rgba(255,255,255,0.2)', rotate: -3, zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} viewport={{ once: true }}
      >
        {thumbnails.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const SvgYoutube = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const SvgTiktok = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

function Visual05() {
  // Circle: 260px (radius 130px), icons: 48px (radius 24px)
  // 4 icons spread around the circle edge
  const icons = [
    { Svg: SvgInstagram, style: { top: 'calc(50% - 154px)', left: 'calc(50% - 24px)' }, delay: 0.2 },
    { Svg: SvgYoutube,   style: { top: 'calc(50% - 24px)', left: 'calc(50% + 130px)' }, delay: 0.3 },
    { Svg: SvgTiktok,    style: { top: 'calc(50% + 106px)', left: 'calc(50% - 24px)' }, delay: 0.4 },
    { Svg: SvgFacebook,  style: { top: 'calc(50% - 24px)', left: 'calc(50% - 154px)' }, delay: 0.5 },
  ]
  return (
    <div className="relative h-[320px] w-full flex items-center justify-center">

      {/* Background glow */}
      <div className="absolute pointer-events-none" style={{
        width: 420, height: 420,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(232,0,255,0.75) 0%, rgba(180,0,255,0.45) 35%, rgba(124,58,237,0.2) 60%, transparent 75%)',
        filter: 'blur(25px)',
        zIndex: 0,
      }} />

      {/* Circle image — z:1 */}
      <motion.div
        style={{ position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <Image
          src="/images/process/circle-10x.png"
          alt="10x View Increased"
          width={260}
          height={260}
          style={{ width: 260, height: 260 }}
        />
      </motion.div>

      {/* SVG icons — at circle edge, z:2 */}
      {icons.map((item, i) => (
        <motion.div key={i}
          className="absolute w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(232,0,255,0.25)',
            border: '1px solid rgba(232,0,255,0.6)',
            boxShadow: '0 0 20px rgba(232,0,255,0.5)',
            zIndex: 2,
            top: item.style.top,
            left: item.style.left,
          }}
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: item.delay }} viewport={{ once: true }}>
          <item.Svg />
        </motion.div>
      ))}
    </div>
  )
}

const visuals = [Visual01, Visual02, Visual04, Visual05]

export default function Process() {
  return (
    <section className="py-24 relative" style={{ background: '#050510' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p className="text-sm font-medium text-white mb-3 inline-block px-5 py-2 rounded-[8px]" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.15)', letterSpacing: '0.01em' }}>OUR PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">Our Strategy To Get</span><br />
            <span className="text-white">You Leads With Content</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom,transparent,rgba(124,58,237,0.5) 8%,rgba(124,58,237,0.5) 92%,transparent)' }} />

          {steps.map((step, i) => {
            const isTextLeft = i % 2 === 0
            const VisualComp = visuals[i]
            return (
              <motion.div key={step.number}
                className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center gap-6 py-12"
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.25 }}>

                {/* Column A */}
                <div>
                  {isTextLeft
                    ? <TextBlock step={step} align="right" />
                    : <div className="hidden md:block"><VisualComp /></div>}
                </div>

                {/* Center circle */}
                <div className="flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: '#0d0820', border: '1px solid rgba(124,58,237,0.55)', boxShadow: '0 0 20px rgba(124,58,237,0.25)' }}>
                    {step.number}
                  </div>
                </div>

                {/* Column B */}
                <div>
                  {isTextLeft
                    ? <div className="hidden md:block"><VisualComp /></div>
                    : <TextBlock step={step} align="left" />}
                </div>

                {/* Mobile visual fallback */}
                <div className="md:hidden">
                  <VisualComp />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TextBlock({ step, align }: { step: typeof steps[0]; align: 'left' | 'right' }) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
      <span className="inline-block px-3 py-1 rounded text-xs font-bold tracking-widest text-white"
        style={{ background: '#4F46E5' }}>
        {step.badge}
      </span>
      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
      <p className="text-white/45 text-sm leading-relaxed max-w-xs">{step.desc}</p>
    </div>
  )
}
