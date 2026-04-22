'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const BRANDS = [
  { name: 'GROWTH FORUM', bg: '#C8F135', color: '#000', weight: 800 },
  { name: 'HEY DIGITAL', bg: '#1DA1F2', color: '#fff', weight: 800 },
  { name: 'RATCLIFFE BROTHERS', bg: 'transparent', color: '#fff', weight: 600, border: true },
  { name: 'CeraVe', bg: '#003087', color: '#fff', weight: 700 },
  { name: 'Shield', bg: 'transparent', color: '#fff', weight: 600, border: true },
  { name: 'herodevs', bg: 'transparent', color: '#fff', weight: 500, border: true },
  { name: 'MoonPay', bg: 'transparent', color: '#fff', weight: 600, border: true },
  { name: 'noble', bg: '#111', color: '#fff', weight: 700, border: true },
  { name: 'Pavilion', bg: 'transparent', color: '#fff', weight: 600, border: true },
  { name: 'Outro', bg: 'transparent', color: '#00e5cc', weight: 700, border: true },
]

const PEOPLE = [
  'Lara Acosta',
  'Jasmin Alić',
  'Shadé Zahrai',
  'Sam Jacobs',
  'Sam Szuchan',
  'Christine Orchard',
  'Christian Payne',
  'Kelsi Cory',
  'Alex Colhoun',
  'Niall Ratcliffe',
  'Morgan J Ingram',
  'Rahul Jain',
  'Brian LaManna',
  'Melissa Gaglione',
  'Yasir Khan',
  'Pascalle Bergmans',
  'Richard van der Blom',
  'David Walsh',
  'Diandra Escobar',
]

const AVATAR_COLORS = [
  ['#e800ff', '#9b00cc'],
  ['#7c3aed', '#4f46e5'],
  ['#06b6d4', '#0891b2'],
  ['#f59e0b', '#d97706'],
  ['#10b981', '#059669'],
  ['#ef4444', '#dc2626'],
  ['#8b5cf6', '#7c3aed'],
  ['#ec4899', '#db2777'],
  ['#14b8a6', '#0d9488'],
  ['#f97316', '#ea580c'],
]

function PersonAvatar({ name, i }: { name: string; i: number }) {
  const colors = AVATAR_COLORS[i % AVATAR_COLORS.length]
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.03 }}
      className="flex items-center gap-2.5"
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm"
        style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
      >
        {name.charAt(0)}
      </div>
      <span className="text-sm text-white/70 whitespace-nowrap">{name}</span>
    </motion.div>
  )
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 0.25], [30, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(232,0,255,0.9) 0%, rgba(124,58,237,0.6) 50%, transparent 80%)',
          filter: 'blur(35px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* "You're in good hands" */}
        <motion.div className="text-center mb-10" style={{ y: headerY, opacity: headerOpacity }}>
          <p className="text-white mb-8" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '18px' }}>
            You&apos;re in good hands:
          </p>

          {/* Brand logos — row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-3">
            {BRANDS.slice(0, 5).map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-4 py-2 rounded-md text-sm font-bold tracking-wide"
                style={{
                  background: b.bg,
                  color: b.color,
                  fontWeight: b.weight,
                  border: b.border ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  backdropFilter: b.border ? 'blur(8px)' : 'none',
                }}
              >
                {b.name}
              </motion.div>
            ))}
          </div>

          {/* Brand logos — row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {BRANDS.slice(5).map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="px-4 py-2 rounded-md text-sm font-bold tracking-wide"
                style={{
                  background: b.bg,
                  color: b.color,
                  fontWeight: b.weight,
                  border: b.border ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  backdropFilter: b.border ? 'blur(8px)' : 'none',
                }}
              >
                {b.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* People grid */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white mb-8"
          style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '18px' }}
        >
          Wait, how could we not mention these amazing founders &amp; creators too?
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-5 mb-16">
          {PEOPLE.map((name, i) => (
            <PersonAvatar key={name} name={name} i={i} />
          ))}
        </div>


      </div>
    </section>
  )
}
