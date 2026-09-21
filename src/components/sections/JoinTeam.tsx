import { motion } from 'framer-motion'
import { hiringRoles } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ConnectLinks } from '../ui/ConnectLinks'
import { SectionHeading } from '../ui/SectionHeading'

export function JoinTeam() {
  return (
    <AnimatedSection id="join-team" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Careers" title="We're hiring student leaders" />

        <div className="grid gap-8 lg:grid-cols-3">
          {hiringRoles.map((role, i) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-3xl border border-line bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-gold">
                <role.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">{role.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{role.description}</p>
              <div className="mt-5 border-t border-navy/8 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                  Ideal for students interested in
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {role.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-body"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-dark">
            Connect with us
          </p>
          <ConnectLinks />
        </div>
      </div>
    </AnimatedSection>
  )
}
