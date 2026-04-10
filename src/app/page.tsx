import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import ServiceGrid from '@/components/sections/ServiceGrid'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      {/* 1. Hero — intro + video */}
      <Hero />

      {/* 2. Services — stats + floating tags */}
      <Services />

      {/* 3. Process — 4-step zigzag timeline */}
      <Process />

      {/* 4. About — bio + stats + experience timeline */}
      <About />

      {/* 5. Why Choose Us + Bento Services */}
      <ServiceGrid />

      {/* 6. Portfolio — tabbed video/thumbnail grid */}
      <Portfolio />

      {/* 7. Pricing — 3 plans */}
      <Pricing />

      {/* 8. Testimonials — video + written carousel */}
      <Testimonials />

      {/* 9. Contact — Cal.com embed */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  )
}
