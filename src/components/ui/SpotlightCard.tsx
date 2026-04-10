'use client'

import { useRef, useState, useCallback } from 'react'

export default function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, opacity: 0 }))
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      data-cursor="hover"
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300 z-[2]"
        style={{
          width: 280,
          height: 280,
          left: spotlight.x - 140,
          top: spotlight.y - 140,
          opacity: spotlight.opacity,
          background: 'radial-gradient(circle, rgba(232,0,255,0.15) 0%, rgba(232,0,255,0.05) 40%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
      <div
        className="absolute pointer-events-none transition-opacity duration-300 z-[1]"
        style={{
          width: 200,
          height: 200,
          left: spotlight.x - 100,
          top: spotlight.y - 100,
          opacity: spotlight.opacity * 0.6,
          background: 'radial-gradient(circle, rgba(232,0,255,0.3) 0%, transparent 60%)',
          filter: 'blur(25px)',
        }}
      />
      {children}
    </div>
  )
}
