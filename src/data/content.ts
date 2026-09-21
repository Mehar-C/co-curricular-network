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
    linkedin: {
      handle: 'Co-Curricular Network',
      url: 'https://www.linkedin.com/company/co-curricular-network/',
    },
  },
  forms: {
    getInvolved: '#contact',
  },
  founders: [
    {
      name: 'Kabir Chandhok',
      handle: '@kabir.chandhok',
      instagram: 'https://instagram.com/kabir.chandhok',
      email: 'kabir@cocurricularnetwork.org',
    },
    {
      name: 'Aastha',
      handle: '@axsthax._',
      instagram: 'https://instagram.com/axsthax._',
      email: 'aastha@cocurricularnetwork.org',
    },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Pathway', href: '#pathway' },
  { label: 'Join Our Team', href: '#join-team' },
]

export const focusAreas = [
  { label: 'Debate', color: 'from-teal to-teal-dark', text: 'text-white' },
  { label: 'Model United Nations', color: 'from-violet-500 to-violet-700', text: 'text-white' },
  { label: 'Entrepreneurship', color: 'from-gold to-amber-500', text: 'text-navy' },
  { label: 'Social Initiatives', color: 'from-coral to-rose-500', text: 'text-white' },
  { label: 'STEM', color: 'from-navy to-navy-light', text: 'text-white' },
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
    title: 'Grow',
    description:
      'Track upcoming programs and build long-term competitive roadmaps across every stage of your journey.',
    icon: TrendingUp,
    color: 'gold' as const,
  },
  {
    step: '03',
    title: 'Understand',
    description:
      'Get registration pipelines, deadlines, and selection rounds broken down so you can act with confidence.',
    icon: Target,
    color: 'coral' as const,
  },
]

export type ServiceCard = {
  step: string
  title: string
  description: string
  icon: LucideIcon
  accent: 'teal' | 'coral' | 'gold'
}

export const whatWeDo: ServiceCard[] = [
  {
    step: '01',
    title: 'Context & Utility',
    description:
      'What the opportunity is and what skills it builds for your profile — so every listing comes with real meaning.',
    icon: Lightbulb,
    accent: 'teal',
  },
  {
    step: '02',
    title: 'Future Trajectories',
    description:
      'Tracking upcoming programs to help you build long-term competitive roadmaps and stay ahead of the curve.',
    icon: TrendingUp,
    accent: 'gold',
  },
  {
    step: '03',
    title: 'Complete Processes',
    description:
      'Registration pipelines, deadlines, and selection rounds — all in one place, so nothing slips through the cracks.',
    icon: Calendar,
    accent: 'coral',
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
