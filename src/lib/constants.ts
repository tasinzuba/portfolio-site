import type { Project, Testimonial, Skill, Service } from '@/types'

// Replace youtubeId values with your actual YouTube video IDs
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Dreams',
    category: 'Short Films',
    year: '2024',
    thumbnail: '/images/project-1.jpg',
    description: 'A cinematic short film with vibrant neon aesthetics and dynamic motion graphics.',
    featured: true,
    tags: ['After Effects', 'Color Grade', 'VFX'],
    youtubeId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
  },
  {
    id: '2',
    title: 'Urban Stories',
    category: 'Short Films',
    year: '2024',
    thumbnail: '/images/project-2.jpg',
    description: 'Documentary-style short film capturing raw city life with cinematic color grading.',
    tags: ['DaVinci Resolve', 'Color Grade'],
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'TechVision Ad',
    category: 'Commercials',
    year: '2023',
    thumbnail: '/images/project-3.jpg',
    description: 'High-energy product commercial with seamless transitions and motion design.',
    tags: ['Premiere Pro', 'Motion Graphics'],
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Midnight Pulse',
    category: 'Commercials',
    year: '2023',
    thumbnail: '/images/project-4.jpg',
    description: 'High-energy commercial featuring abstract visuals and synchronized dynamic cuts.',
    tags: ['After Effects', 'VFX', 'Color Grade'],
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '5',
    title: 'Dream Wedding',
    category: 'Events',
    year: '2024',
    thumbnail: '/images/project-5.jpg',
    description: 'Cinematic wedding film with emotional storytelling and elegant visual style.',
    tags: ['Premiere Pro', 'LUT Design'],
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '6',
    title: 'Brand Identity Film',
    category: 'Commercials',
    year: '2023',
    thumbnail: '/images/project-6.jpg',
    description: 'Corporate brand film blending storytelling with sleek motion graphics.',
    tags: ['Premiere Pro', 'After Effects'],
    youtubeId: 'dQw4w9WgXcQ',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    company: 'Luminos Records',
    role: 'Creative Director',
    quote: 'The color grading on our music video was absolutely phenomenal. The final product exceeded all our expectations and blew up on social media.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Williams',
    company: 'TechVision Inc.',
    role: 'Marketing Manager',
    quote: 'Delivered the commercial on time and the quality was incredible. The motion graphics perfectly captured our brand identity.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    company: 'Indie Films Co.',
    role: 'Film Director',
    quote: 'Working with this editor transformed my short film into something truly cinematic. The attention to detail in every cut was remarkable.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Park',
    company: 'Nova Brands',
    role: 'CEO',
    quote: 'Our brand film resonated deeply with our audience. The storytelling through editing was next level. Will definitely work together again.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Emma Rodriguez',
    company: 'Soundwave Music',
    role: 'Artist Manager',
    quote: 'Three music videos done and each one better than the last. This editor understands the vision and brings it to life brilliantly.',
    rating: 5,
  },
]

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', level: 98, color: '#9999FF', icon: 'Pr' },
  { name: 'After Effects', level: 95, color: '#9999FF', icon: 'Ae' },
  { name: 'DaVinci Resolve', level: 90, color: '#FF6B35', icon: 'DR' },
  { name: 'Cinema 4D', level: 80, color: '#5CFF85', icon: 'C4D' },
  { name: 'Adobe Photoshop', level: 85, color: '#31A8FF', icon: 'Ps' },
  { name: 'Final Cut Pro', level: 78, color: '#E8E8E8', icon: 'FCP' },
  { name: 'Audition', level: 82, color: '#00E4BB', icon: 'Au' },
  { name: 'Lightroom', level: 88, color: '#31A8FF', icon: 'Lr' },
]

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Video Editing & Post-Production',
    description: 'Complete post-production workflow from rough cut to final delivery, ensuring a polished and professional result.',
  },
  {
    number: '02',
    title: 'Color Grading & Correction',
    description: 'Transform your footage with cinematic color palettes, mood-enhancing LUTs, and precise color science.',
  },
  {
    number: '03',
    title: 'Motion Graphics & VFX',
    description: 'Dynamic motion graphics, visual effects, and animated titles that elevate your visual storytelling.',
  },
  {
    number: '04',
    title: 'Social Media Content',
    description: 'Optimized short-form content for Instagram Reels, TikTok, and YouTube Shorts with maximum impact.',
  },
  {
    number: '05',
    title: 'Wedding & Event Films',
    description: 'Cinematic wedding and event films that capture every emotion with artistic precision.',
  },
  {
    number: '06',
    title: 'Corporate Video Production',
    description: 'Professional corporate films, product demos, and brand stories that drive results.',
  },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]
