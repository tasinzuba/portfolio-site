'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        color: { value: '#ffffff' },
        links: {
          color: '#ffffff',
          distance: 120,
          enable: true,
          opacity: 0.04,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none' as const,
          random: true,
          straight: false,
          outModes: { default: 'out' as const },
        },
        number: {
          density: { enable: true, width: 900, height: 700 },
          value: 90,
        },
        opacity: {
          value: { min: 0.05, max: 0.3 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
          },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 0.8, max: 2 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.12,
              color: '#ffffff',
            },
          },
        },
      },
    }),
    []
  )

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 z-[1] pointer-events-auto"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  )
}
