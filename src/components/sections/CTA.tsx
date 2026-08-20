import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'

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
            Your strengths deserve to be showcased.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            We&apos;re here to help you find the right stage to shine. Follow us on Instagram at{' '}
            <a
              href="https://www.instagram.com/cocurricular_net/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white underline underline-offset-4 hover:text-white/90"
            >
              @cocurricular_net
            </a>{' '}
            for the latest vetted opportunities, deadlines, and updates.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
