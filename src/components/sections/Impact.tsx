import { motion } from 'framer-motion'
import { impactMetrics } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function Impact() {
  return (
    <AnimatedSection className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our impact" title="What success looks like" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-line bg-cream p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <p className="font-heading text-4xl font-bold text-teal-dark sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium text-body">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-body/70">
          * Impact numbers are placeholders and can be updated with real data.
        </p>
      </div>
    </AnimatedSection>
  )
}
