'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'

/* ─── Us vs Others data ─── */
const ourBenefits = [
  'In-house team of 40+ Experts',
  'Results oriented',
  'Experience with 500+ Clients',
  'Proven DFY Content Funnel',
  'Personalized CRM',
  '24/7 Support, Anytime You Need Us',
]

const otherAgencies = [
  'Unreliable Freelancers with slow turnarounds.',
  'Edits that fail to convert or perform.',
  'Weak thumbnails and titles with no CTR strategy.',
  'Lack of proper distribution systems.',
  'No expertise in funnels or lead capture systems.',
  'Limited revisions with no client-focused approach.',
  'Guesswork instead of data-driven decisions.',
]

const bonuses = [
  'Free Go High Level Subscription',
  'Free 1-on-1 Consultancy',
]

/* ─── Bento services — row 1: 4 cards, row 2: 2 cards ─── */
const bentoRow1 = [
  {
    title: 'Video Editing',
    desc: 'Complete post-production from rough cut to final delivery. High-energy cuts and pacing.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4v16M17 4v16M3 8h4M17 8h4M3 12h18M3 16h4M17 16h4" /></svg>,
  },
  {
    title: 'Motion Graphics',
    desc: 'Dynamic titles, visual effects, lower-thirds, and kinetic typography.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 3.8L17.8 8l-3.3 2.7.8 4.3L12 13l-3.3 2 .8-4.3L6.2 8l4.3-1.2L12 3z" /></svg>,
  },
  {
    title: 'Thumbnail Design',
    desc: 'High-CTR YouTube thumbnails, social media graphics, and carousel designs.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>,
  },
  {
    title: 'Color Grading',
    desc: 'Cinematic color palettes, custom LUTs, and precise color science.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 0 20" fill="rgba(232,0,255,0.12)" /></svg>,
  },
]

const bentoRow2 = [
  {
    title: 'Digital Marketing',
    desc: 'Paid ads, SEO, and social media management that drives real leads and conversions.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  },
  {
    title: 'Web Design & Development',
    desc: 'Modern, conversion-focused websites built with Next.js and Framer. Fast, responsive, built to convert.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  },
]

/* ─── Icons ─── */
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,0,255,0.15)' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </div>
  )
}
function XIcon() {
  return (
    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(239,68,68,0.12)' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </div>
  )
}
function BonusDot() {
  return <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#e800ff', boxShadow: '0 0 8px rgba(232,0,255,0.6)' }} />
}

const ALL_SERVICES = [...bentoRow1, ...bentoRow2]
const LOOPED = [...ALL_SERVICES, ...ALL_SERVICES]

function CarouselCard({ service }: { service: typeof ALL_SERVICES[0] }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-7 flex flex-col items-center text-center"
      style={{
        width: '340px',
        background: 'rgba(12,10,24,0.85)',
        border: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(232,0,255,0.15))', border: '1px solid rgba(124,58,237,0.2)' }}>
        {service.icon}
      </div>
      <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
    </div>
  )
}

function ServicesCarousel() {
  return (
    <div className="relative rounded-3xl py-16" style={{ background: '#000000' }}>
      <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 65%)' }} />

      <motion.div className="text-center mb-12 relative z-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-medium text-white mb-3 inline-block px-5 py-2 rounded-[8px]" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.15)', letterSpacing: '0.01em' }}>CORE SERVICES</p>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          <span className="text-white/50">Types Of Work</span><br />
          <span className="text-white font-extrabold">We Do</span>
        </h2>
      </motion.div>

      {/* Infinite scroll rows */}
      <div
        className="overflow-hidden relative z-10 flex flex-col gap-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
      >
        {/* Row 1 — left */}
        <motion.div
          className="flex gap-4"
          style={{ width: 'max-content' }}
          animate={{ x: '-50%' }}
          initial={{ x: '0%' }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          {LOOPED.map((service, i) => (
            <CarouselCard key={`a-${service.title}-${i}`} service={service} />
          ))}
        </motion.div>

        {/* Row 2 — right */}
        <motion.div
          className="flex gap-4"
          style={{ width: 'max-content' }}
          animate={{ x: '0%' }}
          initial={{ x: '-50%' }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        >
          {LOOPED.map((service, i) => (
            <CarouselCard key={`b-${service.title}-${i}`} service={service} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function ServiceGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1])

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Neon glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.18) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]" style={{ background: 'radial-gradient(circle at 0% 100%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle at 100% 50%, rgba(232,0,255,0.08) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ═══ WHY CHOOSE US ═══ */}
        <motion.div className="text-center mb-16" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-sm font-medium text-white mb-3 inline-block px-5 py-2 rounded-[8px]" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.15)', letterSpacing: '0.01em' }}>WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">Know What</span><br />
            <span className="gradient-heading">We Do Differently</span>
          </h2>
        </motion.div>

        {/* Comparison — Glassy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-28">
          {/* LEFT — Others */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="rounded-2xl p-7 md:p-8 h-full">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'rgba(0,0,0,0.75)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(232,0,255,0.35)',
                }}
              />

              <div className="relative z-[5]">
                <h3 className="text-xl font-bold text-white/50 mb-7">Other Agencies</h3>
                <ul className="space-y-5">
                  {otherAgencies.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5"><XIcon /></div>
                      <span className="text-sm text-white/35 leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* RIGHT — Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SpotlightCard className="rounded-2xl p-7 md:p-8 h-full">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'rgba(0,0,0,0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(232,0,255,0.35)',
                }}
              />
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 pointer-events-none rounded-2xl z-[2]"
                style={{
                  width: '60%',
                  height: '60%',
                  background: 'radial-gradient(ellipse at 100% 0%, rgba(232,0,255,0.45) 0%, rgba(155,0,204,0.2) 40%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />

              <div className="relative z-[5]">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e800ff, #9b00cc)', boxShadow: '0 0 16px rgba(232,0,255,0.4)' }}>
                    <span className="text-white font-black text-sm">TIZ</span>
                  </div>
                  <span className="text-white font-bold text-lg">TIZ MEDIA</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {ourBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bonuses */}
                <div className="rounded-xl p-5" style={{ background: 'rgba(232,0,255,0.04)', border: '1px solid rgba(232,0,255,0.08)' }}>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Bonuses you get with us:</p>
                  <ul className="space-y-3">
                    {bonuses.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <BonusDot />
                        <span className="text-sm text-white/60">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center -mt-16 mb-24"
        >
          <motion.a
            href="https://cal.com/tasin-ahmed-61u67y/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, rgba(232,0,255,0.7), rgba(155,0,204,0.7))', boxShadow: '0 0 18px rgba(232,0,255,0.2)' }}
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 28px rgba(232,0,255,0.4)' }}
            whileTap={{ scale: 0.97, y: 0 }}
            data-cursor="hover"
          >
            Book A 30-Min Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </motion.a>
        </motion.div>

        {/* ═══ OUR SERVICES — Carousel ═══ */}
        <ServicesCarousel />
      </div>
    </section>
  )
}
