import { motion } from 'framer-motion'
import { siteConfig } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function CTA() {
  return (
    <AnimatedSection id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-8 py-16 text-center text-white shadow-card sm:px-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl"
          />

          <h2 className="relative font-heading text-3xl font-bold text-white sm:text-4xl">
            Help students find their next opportunity.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Whether you are a student, parent, educator, mentor, employer, researcher, community
            organization, or future team member, there is a place for you in Co-Curricular Network.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.forms.bookSession}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-soft transition-transform hover:scale-105"
            >
              Book a Session
            </a>
            <Button
              href={siteConfig.forms.joinTeam}
              variant="outline"
              className="!border-white/40 !bg-transparent !text-white hover:!border-white hover:!text-white"
            >
              Apply to Join the Team
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
