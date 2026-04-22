import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import VideoServices from '@/components/sections/VideoServices'
import ServiceGrid from '@/components/sections/ServiceGrid'
import Testimonials from '@/components/sections/Testimonials'
import SocialProof from '@/components/sections/SocialProof'
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

      {/* 4. Video Services — bento layout */}
      <VideoServices />

      {/* 5. Why Choose Us + Bento Services */}
      <ServiceGrid />

      {/* 6. Testimonials — video + written carousel */}
      <Testimonials />

      {/* 8. Social Proof — brands + people */}
      <SocialProof />

      {/* 9. Contact — Cal.com embed */}
      <Contact />

      {/* 10. Footer */}
      <Footer />
    </main>
  )
}
