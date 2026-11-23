export const siteConfig = {
  name: 'Co-Curricular Network',
  shortName: 'CCN',
  tagline: 'Your future, unlocked.',
  email: 'cocurricular.net@gmail.com',
  calendly: {
    url: 'https://calendly.com/cocurricular-net/30min',
    label: 'Book a session',
  },
  applyFormUrl: 'https://forms.gle/ccn-team-application', // Application form
  social: {
    instagram: {
      handle: '@cocurricular_net',
      url: 'https://www.instagram.com/cocurricular_net/',
    },
    linkedin: {
      handle: 'Co-Curricular Network',
      url: 'https://www.linkedin.com/company/co-curricular-network/',
    },
  },
}

export type PageId = 'home' | 'about' | 'join'

export const navLinks = [
  { label: 'Home', page: 'home' as PageId },
  { label: 'About', page: 'about' as PageId },
  { label: 'Join our team', page: 'join' as PageId },
]

// Database opportunities preview (for infinite slider and discover filter)
export interface Opportunity {
  id: string
  name: string
  field: 'STEM' | 'Debate' | 'MUN' | 'Entrepreneurship' | 'Business' | 'Writing'
  eligibility: string
  fee: string
  deadline: string
  format: 'Online' | 'In-person' | 'Hybrid'
}

export const sampleOpportunities: Opportunity[] = [
  {
    id: 'mosmun',
    name: 'MOSMUN',
    field: 'MUN',
    eligibility: 'Grades 9–12',
    fee: '₹1,500',
    deadline: 'Oct 28',
    format: 'Hybrid',
  },
  {
    id: 'conrad',
    name: 'Conrad Challenge',
    field: 'STEM',
    eligibility: 'Ages 13–18',
    fee: 'Free entry round',
    deadline: 'Nov 15',
    format: 'Online',
  },
  {
    id: 'iris',
    name: 'IRIS National Fair',
    field: 'STEM',
    eligibility: 'Grades 8–12',
    fee: 'Free',
    deadline: 'Dec 05',
    format: 'In-person',
  },
  {
    id: 'blue-ocean',
    name: 'Blue Ocean Competition',
    field: 'Entrepreneurship',
    eligibility: 'High School',
    fee: 'Free',
    deadline: 'Jan 20',
    format: 'Online',
  },
  {
    id: 'young-ceo',
    name: 'Young CEO Programme',
    field: 'Business',
    eligibility: 'Grades 10–12',
    fee: 'Selective scholarship',
    deadline: 'Feb 10',
    format: 'Hybrid',
  },
  {
    id: 'ysj',
    name: 'Young Scientists Journal',
    field: 'STEM',
    eligibility: 'Ages 12–20',
    fee: 'Free submissions',
    deadline: 'Rolling',
    format: 'Online',
  },
  {
    id: 'harvard-essay',
    name: 'Harvard Crimson Global Essay',
    field: 'Writing',
    eligibility: 'Grades 9–12',
    fee: '$15 / waiver',
    deadline: 'Jan 15',
    format: 'Online',
  },
  {
    id: 'wharton-invest',
    name: 'Wharton Global High School Investment',
    field: 'Business',
    eligibility: 'Grades 9–12',
    fee: 'Free',
    deadline: 'Sep 18',
    format: 'Online',
  },
  {
    id: 'wsc',
    name: "World Scholar's Cup",
    field: 'Debate',
    eligibility: 'Junior & Senior',
    fee: 'Varies by round',
    deadline: 'Mar 12',
    format: 'In-person',
  },
  {
    id: 'stanford-mun',
    name: 'Stanford Model United Nations (SMUN)',
    field: 'MUN',
    eligibility: 'High School',
    fee: '$85 / delegate',
    deadline: 'Nov 30',
    format: 'Hybrid',
  },
  {
    id: 'diamond-challenge',
    name: 'Diamond Challenge for High School',
    field: 'Entrepreneurship',
    eligibility: 'Grades 9–12',
    fee: 'Free',
    deadline: 'Jan 08',
    format: 'Online',
  },
  {
    id: 'oxford-debate',
    name: 'Oxford Union Schools Debate',
    field: 'Debate',
    eligibility: 'Grades 9–12',
    fee: '£40 / team',
    deadline: 'Dec 10',
    format: 'Hybrid',
  },
]

// Stats Section data
export const statsData = [
  {
    value: 500,
    suffix: '+',
    label: 'students impacted',
    cycles: [
      'Grades 9 to 12 · from Gurugram to Bengaluru',
      'Over 25+ partner schools reached',
      '30-minute tailored 1-on-1 strategy calls',
    ],
  },
  {
    value: 150,
    suffix: '+',
    label: 'opportunities listed',
    cycles: [
      'MUN, debate, STEM, law, music, cricket and more',
      'Every listing verified for fees & eligibility',
      'Curated shortlists instead of infinite dead links',
    ],
  },
  {
    value: 20,
    suffix: '+',
    label: 'mentors and leaders',
    cycles: [
      'across Research, Communications, Tech and Marketing',
      'Student leads from top high schools',
      'Hands-on guidance and follow-up roadmaps',
    ],
  },
]

// Student Voices
export const studentVoices = [
  {
    quote: 'The meeting was very short and crisp.',
    author: 'Aaliya',
    classInfo: 'Class 11',
  },
  {
    quote: 'Found two STEM research competitions I had never heard of anywhere else.',
    author: 'Rohan',
    classInfo: 'Class 10',
  },
  {
    quote: 'Having the exact registration deadlines and costs in one place saved me weeks.',
    author: 'Diya',
    classInfo: 'Class 12',
  },
  {
    quote: 'Left with a clear action plan instead of the usual generic advice.',
    author: 'Kabir',
    classInfo: 'Class 11',
  },
]

// About Page: FAQs
export const aboutFaqs = [
  {
    question: 'Is this one-on-one, or an app?',
    answer: 'One-on-one. You talk to someone from our team on a call.',
  },
  {
    question: "Aren't there apps that already do this?",
    answer:
      "There are lists. We add the conversation: we ask what you're into, pick for your grade, and help you sign up.",
  },
  {
    question: 'Is it really free?',
    answer:
      'Yes. Some opportunities charge their own fees, and we tell you about those before you decide.',
  },
  {
    question: 'Do I get a certificate?',
    answer:
      "Not for the session itself. Many of the opportunities we suggest give one, and we'll tell you which.",
  },
  {
    question: 'Are sessions online?',
    answer:
      'Yes. The opportunities are a mix of online and in person, and we can stick to online ones if you prefer.',
  },
  {
    question: 'Can you help with college applications?',
    answer:
      "Co-curriculars matter for applications, and that's what we help with. We aren't admissions counsellors.",
  },
  {
    question: 'Who can sign up?',
    answer:
      "Students in Grades 9 to 12, from any school. Most so far are from Gurugram, and we've had sign-ups from Bengaluru too.",
  },
  {
    question: "My field isn't listed.",
    answer: "Tell us on the form and we'll do all the work for you.",
  },
  {
    question: 'What happens after the session?',
    answer:
      'You get a written plan, and we can set follow-up dates for the deadlines that matter.',
  },
]

// Join Our Team: Teams Data
export interface TeamInfo {
  id: string
  name: string
  weeklyTime: string
  interaction: string
  whatItDoes: string
  thisWeekYouMight: string[]
  goodFitIf: string
  hasHiringBadge?: boolean
  badgeText?: string
}

export const teamsData: TeamInfo[] = [
  {
    id: 'research',
    name: 'Research',
    weeklyTime: '3–4 hrs',
    interaction: 'Mostly the database, working with Communications',
    whatItDoes:
      "You find the opportunities and check them: dates, venues, fees, eligibility, whether it's legit. Everything students hear in a session comes from this team.",
    thisWeekYouMight: [
      'Add new opportunities to the database',
      'Write a detailed breakdown for a consultant',
      'Clear out events that have closed',
    ],
    goodFitIf: 'You like spreadsheets and the fine print',
  },
  {
    id: 'communications',
    name: 'Communications',
    weeklyTime: '4–5 hrs',
    interaction: 'Calls with students every week',
    whatItDoes:
      "You're who students talk to. You reach out after someone signs up, run their 30-minute session and write up their plan.",
    thisWeekYouMight: [
      'Book in new sign-ups',
      'Run a session with five or six picks',
      'Send a follow-up',
    ],
    goodFitIf: "You're fine on a call with someone you've never met",
  },
  {
    id: 'tech',
    name: 'Tech',
    weeklyTime: '3–5 hrs',
    interaction: 'Works with the team, rarely with students',
    whatItDoes:
      "You build and run the website, keep the ClickUp workspace in order, and work on tools that make sessions faster. The team is new, so you'd be shaping it.",
    thisWeekYouMight: [
      'Ship a change to the site',
      'Set up a ClickUp view',
      'Test an AI tool for session reports',
    ],
    goodFitIf: 'You code, or want to learn on something people actually use',
  },
  {
    id: 'marketing-network',
    name: 'Marketing: Network',
    weeklyTime: '3–4 hrs',
    interaction: 'Schools and other student groups',
    whatItDoes:
      "You grow CCN's reach: weekly posts, a reel every two weeks, and getting CCN in front of new schools.",
    thisWeekYouMight: [
      "Plan the week's posts",
      'Script a reel',
      'Set up a school presentation',
    ],
    goodFitIf: 'You know what makes people stop scrolling',
  },
  {
    id: 'marketing-design',
    name: 'Marketing: Design',
    weeklyTime: '3–4 hrs',
    interaction: 'Works with Network on posts and reels',
    whatItDoes:
      'You make CCN look like CCN: posts, reels, slides and the website.',
    thisWeekYouMight: ['Design a post', 'Cut a reel', 'Refresh a slide'],
    goodFitIf: 'You design or edit video, or want to',
    hasHiringBadge: true,
    badgeText: 'Now hiring: video editor',
  },
]

export const whatYouGetItems = [
  'Volunteer hours for your record.',
  'A real role and title. Our team already has Heads, Directors and Analysts.',
  'Hands-on time with the tools we run on: Google Sheets, ClickUp, Calendly and the site’s code.',
  'Credit for your work, on the site and on our Instagram.',
]

export const howToApplySteps = [
  {
    step: '01',
    title: 'Pick a team & apply',
    text: 'Fill in a five-minute form telling us about your interests and which team suits you.',
  },
  {
    step: '02',
    title: '15-minute chat',
    text: 'A friendly conversation with that team’s lead to align on goals and expectations.',
  },
  {
    step: '03',
    title: 'Small trial task',
    text: 'Research checks three opportunities, Comms runs a mock session, Network plans a week of posts, Design makes one post, or Tech fixes a small issue.',
  },
  {
    step: '04',
    title: "You're in",
    text: 'You get onboarded directly into ClickUp, get introduced to the squad, and start contributing.',
  },
]
