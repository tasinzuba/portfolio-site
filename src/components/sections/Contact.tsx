'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'

const CAL_URL = 'https://cal.com/tasin-ahmed-61u67y/30min'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const embedRef = useRef<HTMLDivElement>(null)
  const isEmbedInView = useInView(embedRef, { once: true, margin: '200px' })
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#050510' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.15) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px]" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(124,58,237,0.15) 0%, transparent 55%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SpotlightCard className="rounded-3xl">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'rgba(18,12,40,0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-px z-[3] rounded-t-3xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,0,255,0.4), transparent)' }} />

            <div className="relative z-[5]">
              <motion.div className="text-center pt-12 pb-8 px-6" style={{ y: headerY, opacity: headerOpacity }}>
                <p className="text-xs font-bold tracking-[0.3em] text-white/35 uppercase mb-4">WORK WITH US</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                  <span className="text-white/40 italic font-light">Let&apos;s Level Up</span><br />
                  <span className="text-white font-bold">Your Business!</span>
                </h2>
              </motion.div>

              {/* Cal embed — lazy loaded when near viewport */}
              <div ref={embedRef} className="relative mx-4 md:mx-8 mb-6 rounded-2xl overflow-hidden" style={{ background: 'rgba(10,10,20,0.6)', minHeight: '660px' }}>
                {!isEmbedInView ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/20 text-sm">Scroll to load calendar</p>
                  </div>
                ) : (
                  <>
                    {!iframeLoaded && (
                      <div className="absolute inset-0 z-[2] flex items-center justify-center" style={{ background: 'rgba(10,10,20,0.9)' }}>
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#e800ff] animate-spin" />
                          <p className="text-white/30 text-sm">Loading calendar...</p>
                        </div>
                      </div>
                    )}
                    <iframe
                      src={`${CAL_URL}?embed=true&theme=dark&hideEventTypeDetails=false`}
                      className="w-full relative z-[1]"
                      style={{ height: '660px', border: 'none', background: 'transparent', colorScheme: 'dark', opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
                      onLoad={() => setIframeLoaded(true)}
                      loading="lazy"
                      allowFullScreen
                    />
                  </>
                )}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
