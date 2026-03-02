'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'outline' | 'filled' | 'pink' | 'pink-filled'
  size?: 'sm' | 'md' | 'lg'
}

export default function NeonButton({ children, href, onClick, className = '', variant = 'outline', size = 'md' }: Props) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonContent = (
    <motion.div
      className={cn(
        'neon-button inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300',
        // Magenta filled
        variant === 'filled' && 'bg-[#e800ff] text-white border-none font-bold hover:bg-[#ee33ff] hover:shadow-[0_0_30px_rgba(232,0,255,0.6)]',
        // Magenta outline
        variant === 'pink' && '!border-[rgba(232,0,255,0.5)] !text-[#e800ff] hover:!border-[rgba(232,0,255,0.9)] hover:!shadow-[0_0_20px_rgba(232,0,255,0.3)]',
        // Magenta filled (alt)
        variant === 'pink-filled' && 'bg-[#e800ff] text-white border-none font-bold hover:bg-[#ee33ff] hover:shadow-[0_0_30px_rgba(232,0,255,0.6)]',
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      data-cursor="hover"
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <a href={href}>{buttonContent}</a>
  }

  return <button onClick={onClick}>{buttonContent}</button>
}
