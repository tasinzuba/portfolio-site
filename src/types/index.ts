export interface Project {
  id: string
  title: string
  category: 'Commercials' | 'Music Videos' | 'Short Films' | 'Events'
  year: string
  thumbnail: string
  description: string
  featured?: boolean
  tags: string[]
  youtubeId?: string
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
