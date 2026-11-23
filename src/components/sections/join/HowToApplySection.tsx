import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const applicationSteps = [
  {
    step: '01',
    title: 'Pick a team & fill in the form',
    desc: 'A quick five-minute form telling us about your background, interests, and which team you want to join.',
  },
  {
    step: '02',
    title: '15-minute chat with lead',
    desc: 'A brief, informal discussion with that team’s lead to align on expectations and working rhythm.',
  },
  {
    step: '03',
    title: 'Small trial task',
    desc: 'Research checks three opportunities in one field, Communications runs a mock session, Network plans a week of posts, Design makes one post, Tech fixes a small issue on the site.',
  },
  {
    step: '04',
    title: "You're in",
    desc: 'You get added to our ClickUp workspace, paired with an onboarding buddy, and jump straight into projects.',
  },
]

interface HowToApplySectionProps {
  onOpenApply: () => void
}

export function HowToApplySection({ onOpenApply }: HowToApplySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 35%'],
  })

  // Same filling line as Home's How it works
  const lineWidth = useTransform(scrollYProgress, [0, 0.85], ['0%', '100%'])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-surface py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-dark dark:text-teal sm:text-sm">
            HOW TO APPLY
          </span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Four steps from application to squad.
        </h2>

        {/* Scroll Progress Line (matching Home's How it works) */}
        <div className="relative mt-16 mb-12 hidden md:block">
          <div className="h-1 w-full rounded-full bg-line" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-1 rounded-full bg-gradient-to-r from-teal to-coral"
          />
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applicationSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-cream p-5 shadow-soft"
            >
              <div>
                <span className="font-mono text-xs font-bold text-teal-dark dark:text-teal">
                  STEP {step.step}
                </span>
                <h3 className="mt-2 font-heading text-base font-bold text-ink">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-body">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line and Apply button */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-line bg-cream p-8 sm:flex-row sm:p-10">
          <div>
            <h4 className="font-heading text-xl font-bold text-ink sm:text-2xl">
              Ready to shape the network?
            </h4>
            <p className="mt-1 font-mono text-sm text-muted">
              Open to students from any school, Grades 9 to 12.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenApply}
            className="group inline-flex items-center gap-2 rounded-xl bg-coral px-8 py-4 font-heading text-base font-bold text-white shadow-soft transition-all duration-300 hover:bg-coral-light hover:shadow-card hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0"
          >
            <span>Apply</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  )
}

