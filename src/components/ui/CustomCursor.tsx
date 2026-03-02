'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }
    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const hoverables = document.querySelectorAll('a, button, [data-cursor="hover"]')
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Inner dot — instant follow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#ff2d78',
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'rgba(0, 212, 255, 0.6)',
        }}
        animate={{
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          backgroundColor: isHovering ? 'rgba(255, 45, 120, 0.08)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 45, 120, 0.9)' : 'rgba(0, 212, 255, 0.5)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
