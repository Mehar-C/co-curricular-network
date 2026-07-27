import { motion } from 'framer-motion'
import { founders, teamMembers } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const avatarColor = {
  teal: 'bg-teal text-navy',
  coral: 'bg-coral text-white',
  gold: 'bg-gold text-navy',
} as const

export function Team() {
  return (
    <AnimatedSection id="team" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our people"
          title="Meet the team"
          subtitle="A student-led team building access to opportunities for others. (Names and roles are placeholders — swap in the real team any time.)"
        />

        <h3 className="text-center font-heading text-sm font-bold uppercase tracking-widest text-teal-dark">
          Founders
        </h3>
        <div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
          {founders.map((founder, i) => (
            <motion.article
              key={founder.initials}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-line bg-cream p-8 text-center shadow-soft"
            >
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-2xl font-bold text-white"
                aria-hidden
              >
                {founder.initials}
              </div>
              <h4 className="mt-5 font-heading text-lg font-bold text-ink">{founder.name}</h4>
              <p className="text-sm font-medium text-coral">{founder.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-body">{founder.bio}</p>
            </motion.article>
          ))}
        </div>

        <h3 className="mt-16 text-center font-heading text-sm font-bold uppercase tracking-widest text-teal-dark">
          Team Members
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.article
              key={`${member.initials}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-2xl border border-line bg-cream p-5 shadow-soft"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarColor[member.color]}`}
                aria-hidden
              >
                {member.initials}
              </div>
              <div>
                <p className="font-heading font-semibold text-ink">{member.name}</p>
                <p className="text-sm text-body">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
