import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Clock, FileText, Target, Calendar } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: "Tell us what you're into.",
    desc: 'A two-minute form: your grade, your interests, what you want out of it.',
  },
  {
    num: '02',
    title: 'Talk to one of us.',
    desc: 'A 30-minute call. We bring five or six opportunities picked for you, with dates, fees and who can apply.',
  },
  {
    num: '03',
    title: 'Leave with a plan.',
    desc: 'A written summary of what to register for first, the deadlines, and what to prepare. We check in after.',
  },
]

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 35%'],
  })

  // Clean solid line that fills with scroll
  const lineWidth = useTransform(scrollYProgress, [0, 0.85], ['0%', '100%'])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold sm:text-sm">
            HOW IT WORKS
          </span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Three steps to a personalized roadmap.
        </h2>

        {/* Horizontal line that fills as you scroll */}
        <div className="relative mt-16 mb-12 hidden md:block">
          <div className="h-0.5 w-full bg-line" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-0.5 bg-coral"
          />
        </div>

        {/* 3 Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="relative flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-coral">
                  STEP {step.num}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-cream text-xs font-semibold text-ink font-mono">
                  {idx + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body font-normal">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Step 3: Mock of the written plan sliding in */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-14 rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-line pb-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-cream text-ink">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Official Session Output
                </p>
                <h4 className="font-heading text-base font-bold text-ink sm:text-lg">
                  Personalized Roadmap Summary — Sample Report
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-line bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink">
                Delivered post-session
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Box 1: Opportunities Picked */}
            <div className="rounded-2xl border border-line bg-cream p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                <Target className="h-4 w-4 text-coral" />
                Opportunities Picked
              </div>
              <ul className="mt-3 space-y-2 text-xs text-body">
                <li className="flex items-start gap-1.5 font-medium text-ink">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-coral flex-shrink-0" />
                  <span>Conrad Challenge (STEM Innovation)</span>
                </li>
                <li className="flex items-start gap-1.5 font-medium text-ink">
                  <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-coral flex-shrink-0" />
                  <span>MOSMUN 2026 (Economic & Social Council)</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Next Steps */}
            <div className="rounded-2xl border border-line bg-cream p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                <Clock className="h-4 w-4 text-coral" />
                Next Steps & Deadlines
              </div>
              <ul className="mt-3 space-y-2 text-xs text-body font-mono">
                <li>• Nov 15: Abstract draft submission</li>
                <li>• Nov 28: Delegate position paper due</li>
                <li>• Dec 05: Follow-up check-in call with CCN mentor</li>
              </ul>
            </div>

            {/* Box 3: Long-term Goals */}
            <div className="rounded-2xl border border-line bg-cream p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink">
                <Calendar className="h-4 w-4 text-coral" />
                Long-Term Goals
              </div>
              <p className="mt-3 text-xs leading-relaxed text-body">
                Build verifiable competition credentials in Q1 & Q2 to anchor the student&apos;s senior profile in economics and policy research.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
