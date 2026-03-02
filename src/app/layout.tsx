import type { Metadata } from 'next'
import { Syne, Inter, Space_Mono } from 'next/font/google'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Alex Morrison | Cinematic Video Editor',
  description: 'Professional video editor specializing in color grading, motion design, and post-production. Based remotely, serving clients worldwide.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body
        className="overflow-x-hidden"
        style={{ backgroundColor: '#000000', color: '#f0f0f0', fontFamily: 'var(--font-inter), sans-serif' }}
      >
        <SmoothScrollProvider>
          <NoiseOverlay />
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
