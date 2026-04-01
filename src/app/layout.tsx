import type { Metadata } from 'next'
import { Poppins, Space_Mono } from 'next/font/google'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import WhatsAppWidget from '@/components/widgets/WhatsAppWidget'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'TIZ | Cinematic Video Editor',
  description: 'Professional video editor specializing in viral editing styles, color grading, and motion design. Learn to earn $2,000/month in 90 days.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceMono.variable}`}>
      <body
        className="overflow-x-hidden"
        style={{ backgroundColor: '#000000', color: '#f0f0f0', fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        <SmoothScrollProvider>
          <NoiseOverlay />
          <CustomCursor />
          <Navbar />
          {children}
          <WhatsAppWidget />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
