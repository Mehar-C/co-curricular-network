import { motion } from 'framer-motion'
import { focusAreas, siteConfig } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What are we?"
          title="The Co-Curricular Network"
          subtitle="We are a co-curricular forum established to centrally identify and disseminate credible opportunities in debate, Model United Nations, entrepreneurship, social initiatives, and STEM — enabling informed and structured student participation across every stage of your academic journey."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto -mt-6 mb-10 max-w-3xl text-center text-lg leading-relaxed text-body"
        >
          Every opportunity is vetted, contextualized, and delivered with clarity — so you spend less
          time searching and more time competing, building, and leading.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {focusAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-soft"
            >
              {area}
            </motion.span>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-body">
          A student-led hub by{' '}
          {siteConfig.founders.map((founder, i) => (
            <span key={founder.handle}>
              {i > 0 && ' and '}
              <a
                href={founder.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-teal-dark hover:text-teal"
              >
                {founder.handle}
              </a>
            </span>
          ))}
          .
        </p>
      </div>
    </AnimatedSection>
  )
}
