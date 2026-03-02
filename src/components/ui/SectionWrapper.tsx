'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function SectionWrapper({ children, className = '', id, delay = 0 }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
