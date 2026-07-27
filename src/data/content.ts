import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  FlaskConical,
  HandHeart,
  Map,
  Megaphone,
  Network,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
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
    bookSession: '#contact',
    getInvolved: '#contact',
    joinTeam: '#join-team',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Pathway', href: '#pathway' },
  { label: 'Team', href: '#team' },
  { label: 'Join Our Team', href: '#join-team' },
]

export const problemCards = [
  {
    title: 'Lack of Access',
    description:
      'Many students do not know where to find quality competitions, mentorship, research exposure, or leadership opportunities — especially outside their immediate circle.',
    icon: Map,
  },
  {
    title: 'Limited Guidance',
    description:
      'Students are often told to get involved, but receive little help navigating options, building a pathway, or understanding what experiences matter for their goals.',
    icon: Compass,
  },
  {
    title: 'Unequal Networks',
    description:
      'Opportunity often depends on who you know. Without structured access and support, students with fewer connections are left behind.',
    icon: Network,
  },
]

export const pathwaySteps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Explore competitions, MUNs, hackathons, and opportunities matched to your interests and goals.',
    icon: Compass,
    color: 'teal' as const,
  },
  {
    step: '02',
    title: 'Connect',
    description:
      'Get linked with mentors, teammates, and experiences that turn curiosity into real skills.',
    icon: Users,
    color: 'coral' as const,
  },
  {
    step: '03',
    title: 'Achieve',
    description:
      'Build a track record of growth, confidence, and momentum that shapes what comes next.',
    icon: TrendingUp,
    color: 'gold' as const,
  },
]

export const founders = [
  {
    name: 'Founder Name',
    role: 'Co-Founder',
    bio: 'Add a short founder bio here focused on why they helped build Co-Curricular Network.',
    initials: 'F1',
  },
  {
    name: 'Founder Name',
    role: 'Co-Founder',
    bio: 'Add a short founder bio here focused on their background, interests, and commitment to student access.',
    initials: 'F2',
  },
]

export const teamMembers = [
  { name: 'Team Member', role: 'Marketing', initials: 'M1', color: 'teal' as const },
  { name: 'Team Member', role: 'Marketing', initials: 'M2', color: 'coral' as const },
  { name: 'Team Member', role: 'Logistics', initials: 'L1', color: 'gold' as const },
  { name: 'Team Member', role: 'Logistics', initials: 'L2', color: 'teal' as const },
  { name: 'Team Member', role: 'Research', initials: 'R1', color: 'coral' as const },
  { name: 'Team Member', role: 'Research', initials: 'R2', color: 'gold' as const },
]

export type ServiceCard = {
  title: string
  description: string
  icon: LucideIcon
}

export const whatWeDo: ServiceCard[] = [
  {
    title: 'Opportunity Matching',
    description:
      'We help students discover structured opportunities aligned with their interests, goals, and availability.',
    icon: Target,
  },
  {
    title: 'Mentorship Connections',
    description:
      'Students connect with mentors who offer guidance, perspective, and support as they explore new paths.',
    icon: UserCheck,
  },
  {
    title: 'Volunteer & Community Projects',
    description:
      'Hands-on community experiences that build empathy, teamwork, and real-world impact.',
    icon: HandHeart,
  },
  {
    title: 'Leadership Development',
    description:
      'Roles and programs that help students practice initiative, communication, and responsibility.',
    icon: TrendingUp,
  },
  {
    title: 'Research Exposure',
    description:
      'Pathways to explore research interests, build skills, and learn how academic inquiry works in practice.',
    icon: FlaskConical,
  },
  {
    title: 'Career Exploration',
    description:
      'Early exposure to careers, workplaces, and professionals across diverse fields.',
    icon: Briefcase,
  },
  {
    title: 'Application & Portfolio Support',
    description:
      'Guidance on reflecting experiences, building portfolios, and presenting growth authentically.',
    icon: BookOpen,
  },
  {
    title: 'Skill-Building Workshops',
    description:
      'Practical sessions on communication, project planning, teamwork, and professional readiness.',
    icon: Wrench,
  },
  {
    title: 'School & Partner Programs',
    description:
      'Collaborative programs that connect schools, students, and community partners in structured ways.',
    icon: Building2,
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

export const impactMetrics = [
  { label: 'Students supported', value: '500+' },
  { label: 'Opportunities listed', value: '120+' },
  { label: 'Mentors engaged', value: '45+' },
  { label: 'Community projects launched', value: '18+' },
]
