import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Calendar,
  Compass,
  Lightbulb,
  Map,
  Megaphone,
  Route,
  Target,
  TrendingUp,
} from 'lucide-react'

export const siteConfig = {
  name: 'Co-Curricular Network',
  tagline: 'Discover. Connect. Achieve.',
  email: 'hello@cocurricularnetwork.org',
  social: {
    instagram: { handle: '@cocurricular_net', url: 'https://www.instagram.com/cocurricular_net/' },
    linkedin: { handle: 'Co-Curricular Network', url: 'https://linkedin.com/company/cocurricularnetwork' },
  },
  forms: {
    getInvolved: '#contact',
  },
  founders: [
    { name: 'Kabir Chandhok', handle: '@kabir.chandhok', url: 'https://instagram.com/kabir.chandhok' },
    { name: 'Axsthax', handle: '@axsthax._', url: 'https://instagram.com/axsthax._' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Pathway', href: '#pathway' },
  { label: 'Join Our Team', href: '#join-team' },
]

export const focusAreas = [
  'Debate',
  'Model United Nations',
  'Entrepreneurship',
  'Social Initiatives',
  'STEM',
]

export const problemCards = [
  {
    title: 'Scattered Information',
    description:
      'Opportunities live across dozens of platforms with no central access point — students waste hours searching instead of preparing.',
    icon: Map,
  },
  {
    title: 'Missed Deadlines',
    description:
      'Elite global programs are discovered too late, closing doors before students even know they existed.',
    icon: Calendar,
  },
  {
    title: 'No Structured Path',
    description:
      'Without a clear roadmap, growth and exposure become a fragmented guessing game rather than a deliberate strategy.',
    icon: Route,
  },
]

export const pathwaySteps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Explore vetted opportunities in debate, MUN, entrepreneurship, social initiatives, and STEM — all in one place.',
    icon: Compass,
    color: 'teal' as const,
  },
  {
    step: '02',
    title: 'Understand',
    description:
      'Get registration pipelines, deadlines, and selection rounds broken down so you can act with confidence.',
    icon: Target,
    color: 'coral' as const,
  },
  {
    step: '03',
    title: 'Grow',
    description:
      'Track upcoming programs and build long-term competitive roadmaps across every stage of your journey.',
    icon: TrendingUp,
    color: 'gold' as const,
  },
]

export type ServiceCard = {
  title: string
  description: string
  icon: LucideIcon
}

export const whatWeDo: ServiceCard[] = [
  {
    title: 'Context & Utility',
    description:
      'What the opportunity is and what skills it builds for your profile — so every listing comes with real meaning.',
    icon: Lightbulb,
  },
  {
    title: 'Complete Processes',
    description:
      'Registration pipelines, deadlines, and selection rounds — all in one place, so nothing slips through the cracks.',
    icon: Calendar,
  },
  {
    title: 'Future Trajectories',
    description:
      'Tracking upcoming programs to help you build long-term competitive roadmaps and stay ahead of the curve.',
    icon: TrendingUp,
  },
]

export const hiringRoles = [
  {
    title: 'Marketing Team',
    description:
      'Help build awareness for Co-Curricular Network through social media, campaigns, storytelling, outreach, design, and student engagement.',
    interests: [
      'Marketing',
      'Communications',
      'Social media',
      'Graphic design',
      'Brand strategy',
      'Content creation',
    ],
    icon: Megaphone,
  },
  {
    title: 'Logistics Team',
    description:
      'Support the planning and coordination of events, mentorship sessions, workshops, partner meetings, student onboarding, and day-to-day operations.',
    interests: [
      'Event planning',
      'Operations',
      'Project coordination',
      'Community engagement',
      'Administration',
      'Partnerships',
    ],
    icon: Calendar,
  },
  {
    title: 'Research Team',
    description:
      'Help identify student opportunities, research potential partners, analyze student needs, build resource lists, and support evidence-based program development.',
    interests: [
      'Research',
      'Policy',
      'Education',
      'Data collection',
      'Community needs',
      'Program design',
    ],
    icon: BarChart3,
  },
]
