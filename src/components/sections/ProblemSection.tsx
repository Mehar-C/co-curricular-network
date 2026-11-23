import { motion } from 'framer-motion'

const timelineDates = [
  {
    date: 'OCT 12',
    label: 'Early bird announced',
    status: 'passed',
  },
  {
    date: 'OCT 24',
    label: 'Eligibility guide published',
    status: 'passed',
  },
  {
    date: 'NOV 02',
    label: 'Instagram story expires',
    status: 'passed',
  },
  {
    date: 'NOV 10',
    label: 'Round 1 submissions',
    status: 'passed',
  },
  {
    date: 'NOV 18',
    label: 'Registrations closed',
    status: 'closed',
  },
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32 border-y border-line">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-coral font-semibold sm:text-sm">
            THE PROBLEM
          </span>
        </div>

        {/* Huge Left-Aligned Sentence (No cards, as requested) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          There&apos;s more out there for students.{' '}
          <span className="text-coral">It&apos;s time you found it.</span>
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-body sm:text-xl font-normal"
        >
          Competitions, internships, programmes. They&apos;re out there, just scattered across Instagram pages, school notice boards and websites nobody checks. Most of the time you hear about one after registrations close.
        </motion.p>

        {/* Mono dates flipping past as you scroll */}
        <div className="mt-16 border-t border-line pt-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
            The standard student discovery loop
          </p>
          
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {timelineDates.map((item, idx) => {
              const isClosed = item.status === 'closed'
              return (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col justify-between rounded-xl border p-4 font-mono transition-all ${
                    isClosed
                      ? 'border-coral/50 bg-coral/10 text-coral shadow-soft'
                      : 'border-line bg-cream text-ink'
                  }`}
                >
                  <span className="text-[11px] text-muted">{item.date}</span>
                  <div className="mt-4">
                    {isClosed ? (
                      <div className="space-y-1">
                        <span className="text-xs line-through opacity-70">
                          Final Deadline
                        </span>
                        <div className="inline-block rounded bg-coral px-2 py-0.5 text-xs font-bold text-white">
                          Registrations closed
                        </div>
                      </div>
                    ) : (
                      <span className="text-xs font-medium">{item.label}</span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
