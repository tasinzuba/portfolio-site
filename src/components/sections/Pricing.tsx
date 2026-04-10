'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SpotlightCard from '@/components/ui/SpotlightCard'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for creators just getting started.',
    features: ['2 videos per month', 'Basic color grading', '1 revision round', '1080p delivery', '5-day turnaround'],
    cta: 'Get Started',
    ctaHref: '#contact',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/month',
    description: 'For brands who need consistent, high-quality content.',
    features: ['5 videos per month', 'Advanced color grading', 'Motion graphics included', 'Unlimited revisions', '4K delivery', '48h turnaround', 'Thumbnail design', 'Social media cuts'],
    cta: 'Get Started',
    ctaHref: '#contact',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-service for agencies and large brands.',
    features: ['Everything in Professional', 'Dedicated editor', 'Priority support', 'Brand strategy', 'Social media management', 'Monthly reports'],
    cta: 'Book a Call',
    ctaHref: 'https://cal.com/tasin-ahmed-61u67y/30min',
    featured: false,
  },
]

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: featured ? 'rgba(232,0,255,0.2)' : 'rgba(232,0,255,0.1)' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e800ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </div>
  )
}

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section id="pricing" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: '#050510' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" style={{ background: 'radial-gradient(circle, rgba(232,0,255,0.1) 0%, transparent 55%)', filter: 'blur(60px)' }} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle at 0% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(232,0,255,0.08) 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div className="text-center mb-16" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-xs font-bold tracking-[0.25em] text-white/35 uppercase mb-3">PRICING</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-white/40">Simple, Transparent</span><br />
            <span className="gradient-heading">Pricing Plans</span>
          </h2>
          <p className="text-white/30 text-base mt-4 max-w-md mx-auto">No hidden fees. Pick a plan that works for you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.featured ? 0 : (i === 0 ? 0.1 : 0.2) }}
              className={plan.featured ? 'lg:-mt-4 lg:-mb-4' : ''}
            >
              <SpotlightCard className="rounded-2xl h-full">
                {/* Card bg */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: plan.featured
                      ? 'rgba(255,255,255,0.04)'
                      : 'rgba(18,12,40,0.5)',
                    backdropFilter: plan.featured ? 'blur(20px)' : 'blur(12px)',
                    WebkitBackdropFilter: plan.featured ? 'blur(20px)' : 'blur(12px)',
                    border: `1px solid ${plan.featured ? 'rgba(232,0,255,0.25)' : 'rgba(255,255,255,0.06)'}`,
                    boxShadow: plan.featured ? '0 0 60px rgba(232,0,255,0.1), 0 0 120px rgba(232,0,255,0.05)' : 'none',
                  }}
                />

                {/* Neon top line for featured */}
                {plan.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px z-[3]" style={{ background: 'linear-gradient(90deg, transparent, #e800ff, transparent)' }} />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] pointer-events-none z-[3]" style={{ background: 'radial-gradient(ellipse, rgba(232,0,255,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
                  </>
                )}

                {/* Content */}
                <div className="relative z-[5] p-8 flex flex-col h-full">
                  {/* Badge — inside card, not overlapping */}
                  {plan.featured && (
                    <div className="mb-5">
                      <span className="inline-block px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase text-white" style={{ background: 'linear-gradient(135deg, #e800ff, #9b00cc)' }}>
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35 mb-4">{plan.name}</p>

                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-black text-white ${plan.featured ? 'text-5xl' : 'text-4xl'}`}>{plan.price}</span>
                    {plan.period && <span className="text-sm text-white/30 mb-1.5">{plan.period}</span>}
                  </div>

                  <p className="text-sm text-white/35 mb-6">{plan.description}</p>

                  <div className="h-px mb-6" style={{ background: plan.featured ? 'rgba(232,0,255,0.15)' : 'rgba(255,255,255,0.05)' }} />

                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon featured={plan.featured} />
                        <span className="text-sm text-white/50">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={plan.ctaHref}
                    target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                    rel={plan.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-full flex items-center justify-center py-3.5 rounded-full text-sm font-semibold transition-all duration-300 text-white"
                    style={
                      plan.featured
                        ? { background: 'linear-gradient(135deg, #e800ff, #9b00cc)', boxShadow: '0 0 20px rgba(232,0,255,0.2)' }
                        : { background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }
                    }
                    whileHover={
                      plan.featured
                        ? { boxShadow: '0 0 30px rgba(232,0,255,0.3)', scale: 1.02 }
                        : { borderColor: 'rgba(232,0,255,0.4)', color: '#ffffff' }
                    }
                    whileTap={{ scale: 0.97 }}
                    data-cursor="hover"
                  >
                    {plan.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </motion.a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
