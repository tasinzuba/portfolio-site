import VideoServices from '@/components/sections/VideoServices'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Projects | TIZ Media',
  description: 'All our video production and content services.',
}

export default function ProjectsPage() {
  return (
    <main style={{ background: '#000000' }}>
      <VideoServices isProjectsPage />
      <Footer />
    </main>
  )
}
