'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 md:max-w-6xl md:mx-auto md:px-12 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="font-display font-black text-2xl text-white leading-none"
          whileHover={{ scale: 1.05 }}
          data-cursor="hover"
        >
          TIZ
        </motion.a>

        {/* Desktop nav — pill */}
        <div
          className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-[#aaa] hover:text-white transition-colors duration-200"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              data-cursor="hover"
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger — right side */}
        <div className="flex items-center">
          {/* Desktop CTA */}
          <motion.a
            href="mailto:hello@tiz.com"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #e800ff, #c500d9)',
              boxShadow: '0 0 20px rgba(232,0,255,0.4)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(232,0,255,0.6)' }}
            data-cursor="hover"
          >
            Hire Me
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 py-1"
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor="hover"
          >
            <motion.span className="w-6 h-0.5 bg-white block rounded-full"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.3 }} />
            <motion.span className="w-6 h-0.5 bg-white block rounded-full"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }} />
            <motion.span className="w-6 h-0.5 bg-white block rounded-full"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="mt-3 mx-4 rounded-2xl px-4 py-4 flex flex-col gap-1"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-[#aaa] hover:text-white text-base font-medium transition-colors duration-200 px-3 py-2 rounded-xl hover:bg-white/5"
              initial={{ opacity: 0, x: -16 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.06 }}
            >
              {link.label}
            </motion.button>
          ))}
          <div className="pt-2 mt-1 border-t border-white/10">
            <a
              href="mailto:hello@tiz.com"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white w-full"
              style={{ background: 'linear-gradient(135deg, #e800ff, #c500d9)' }}
            >
              Hire Me →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
