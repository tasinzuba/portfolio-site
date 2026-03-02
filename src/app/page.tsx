import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Portfolio from '@/components/sections/Portfolio'
import Skills from '@/components/sections/Skills'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <BeforeAfter />
      <div className="section-divider" />
      <Portfolio />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  )
}
