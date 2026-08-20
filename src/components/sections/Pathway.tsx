import { motion } from 'framer-motion'
import { pathwaySteps } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const colorMap = {
  teal: { chip: 'bg-teal text-navy', ring: 'ring-teal/25', step: 'text-teal-dark' },
  coral: { chip: 'bg-coral text-white', ring: 'ring-coral/25', step: 'text-coral' },
  gold: { chip: 'bg-gold text-navy', ring: 'ring-gold/30', step: 'text-gold' },
} as const

export function Pathway() {
  return (
    <AnimatedSection id="pathway" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From discovery to long-term growth"
          subtitle="We streamline the process by organizing the information you need — including deadlines and key requirements — so you can spend less time searching and more time focusing on your growth."
        />

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[4.5rem] hidden h-0.5 bg-gradient-to-r from-teal via-coral to-gold md:block"
          />
          {pathwaySteps.map((step, i) => {
            const c = colorMap[step.color]
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative rounded-3xl border border-line bg-surface p-8 shadow-soft"
              >
                <div
                  className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft ring-4 ring-surface ${c.chip}`}
                >
                  <step.icon className="h-7 w-7" aria-hidden />
                </div>
                <p className={`font-heading text-sm font-bold ${c.step}`}>{step.step}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{step.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
