import { motion } from 'framer-motion'
import { Globe2, Star, Target, Users } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const pillars = [
  {
    title: 'Student-Centric',
    description: 'Everything we do is built around students and their goals.',
    icon: Users,
    color: 'bg-teal text-navy',
  },
  {
    title: 'Opportunities',
    description: 'We surface the right competitions, MUNs, and experiences for you.',
    icon: Target,
    color: 'bg-coral text-white',
  },
  {
    title: 'Connect',
    description: 'A network that brings students, mentors, and partners together.',
    icon: Globe2,
    color: 'bg-navy text-white',
  },
  {
    title: 'Achieve',
    description: 'Empowering students to reach their full potential.',
    icon: Star,
    color: 'bg-gold text-navy',
  },
]

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title="About Co-Curricular Network"
          subtitle="We make meaningful student opportunities easier to find, access, and navigate. Students should not need insider connections to discover mentorship, competitions, research, and early career experiences."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-line bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.color}`}
              >
                <pillar.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
