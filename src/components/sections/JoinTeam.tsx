import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'
import { hiringRoles, siteConfig } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function JoinTeam() {
  return (
    <AnimatedSection id="join-team" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Careers"
          title="We're hiring student leaders"
          subtitle="Co-Curricular Network is building a team of motivated students who want to help expand access to meaningful opportunities for others."
        />

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
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                {role.description}
              </p>
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

        <div className="mt-12 text-center">
          <Button href={siteConfig.forms.joinTeam} variant="cta">
            Apply to Join the Team
          </Button>
          <p className="mt-4 text-sm text-body">
            Applications are currently open for marketing, logistics, and research roles.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-dark">
              Follow us
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-coral hover:text-coral"
              >
                <Instagram className="h-4 w-4" aria-hidden />
                {siteConfig.social.instagram.handle}
              </a>
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal-dark"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                {siteConfig.social.linkedin.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
