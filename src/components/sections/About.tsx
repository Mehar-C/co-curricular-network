import { motion } from 'framer-motion'
import { focusAreas, whatWeDo } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const accentStyles = {
  teal: {
    chip: 'bg-teal/15 text-teal-dark',
    number: 'text-teal-dark',
    bar: 'bg-teal',
  },
  coral: {
    chip: 'bg-coral/15 text-coral',
    number: 'text-coral',
    bar: 'bg-coral',
  },
  gold: {
    chip: 'bg-gold/20 text-amber-700',
    number: 'text-gold',
    bar: 'bg-gold',
  },
} as const

export function About() {
  return (
    <AnimatedSection id="about" className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-teal/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-coral/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What are we?"
          title="The Co-Curricular Network"
          subtitle="A student-led co-curricular forum that centralizes credible opportunities — so you spend less time searching and more time competing, building, and leading."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {focusAreas.map((area, i) => (
            <motion.span
              key={area.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`rounded-2xl bg-gradient-to-br px-5 py-3 text-sm font-semibold shadow-soft ${area.color} ${area.text}`}
            >
              {area.label}
            </motion.span>
          ))}
        </div>

        <p className="mb-10 text-center text-sm text-body">
          A student-led hub by Kabir and Aastha.
        </p>

        <SectionHeading
          eyebrow="Our solution"
          title="Where do we come in?"
          subtitle="We act as a true one-stop resource hub. For every listed opportunity, we break down exactly what you need to act with confidence."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {whatWeDo.map((item, i) => {
            const style = accentStyles[item.accent]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-line bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${style.bar}`} />
                <p className={`font-heading text-4xl font-bold ${style.number}`}>{item.step}</p>
                <div
                  className={`mt-4 flex h-12 w-12 items-center justify-center rounded-2xl ${style.chip}`}
                >
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
