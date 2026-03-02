'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import SectionWrapper from '@/components/ui/SectionWrapper'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 9l-3.09 1.51.59-3.44L2 4.635l3.455-.505L7 1z"
            fill={i < rating ? '#e800ff' : 'rgba(232,0,255,0.2)'}
          />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="glass-card p-6 min-w-[340px] max-w-[340px] shrink-0">
      <StarRating rating={testimonial.rating} />
      <p className="text-[#aaa] text-sm leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[rgba(232,0,255,0.1)] border border-[rgba(232,0,255,0.3)] flex items-center justify-center">
          <span className="font-bold text-[#e800ff] text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-[#f0f0f0] font-medium text-sm">{testimonial.name}</div>
          <div className="text-[#555] text-xs">{testimonial.role} · {testimonial.company}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <SectionWrapper id="testimonials" className="py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-4"
      >
        <p className="text-[#e800ff] text-sm uppercase tracking-widest mb-4">Social Proof</p>
        <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
          Client <span className="gradient-text">Love</span>
        </h2>
        <p className="text-[#666] mt-4 text-lg max-w-xl mx-auto">
          Don&apos;t take my word for it — here&apos;s what clients say about working with me.
        </p>
      </motion.div>

      {/* Marquee row 1 */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard key={`rev-${t.id}-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
