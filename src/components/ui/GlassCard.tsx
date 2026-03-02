'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export default function GlassCard({ children, className = '', hoverable = true }: Props) {
  return (
    <motion.div
      className={cn('glass-card p-6', className)}
      whileHover={hoverable ? {
        scale: 1.02,
        borderColor: 'rgba(0, 212, 255, 0.4)',
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
