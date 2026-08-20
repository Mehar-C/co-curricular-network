import { motion } from 'framer-motion'
import { problemCards } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function Problem() {
  return (
    <AnimatedSection className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The problem"
          title="Talented students lack awareness of the opportunities that matter."
          subtitle="Impactful extracurricular programs could strengthen portfolios and profiles — but data is scattered across dozens of platforms, and elite global competitions are frequently discovered only after deadlines have closed."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {problemCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-3xl border border-line bg-cream p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                <card.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
