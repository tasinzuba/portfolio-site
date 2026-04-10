export interface Project {
  id: string
  title: string
  category: 'Podcast' | 'Educational' | 'Business' | 'Reels' | 'Thumbnail'
  year: string
  thumbnail: string
  description: string
  featured?: boolean
  tags: string[]
  youtubeId?: string
  /** For Thumbnail/Graphic Design items — image path instead of video */
  imageSrc?: string
  link?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  quote: string
  rating: number
}

export interface Skill {
  name: string
  level: number
  color: string
  icon: string
}

export interface Service {
  number: string
  title: string
  description: string
}
