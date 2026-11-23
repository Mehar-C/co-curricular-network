import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { aboutFaqs } from '../../../data/content'

export function AboutFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  // Split FAQs into two columns for desktop layout
  const col1 = aboutFaqs.slice(0, Math.ceil(aboutFaqs.length / 2))
  const col2 = aboutFaqs.slice(Math.ceil(aboutFaqs.length / 2))

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28 border-t border-line">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold sm:text-sm">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Everything you need to know.
        </h2>

        {/* 2 columns on desktop (Watermelon UI style) */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:items-start sm:gap-6">
          
          {/* Column 1 */}
          <div className="space-y-4">
            {col1.map((faq, i) => {
              const globalIdx = i
              const isOpen = openIndex === globalIdx

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-line bg-cream transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(globalIdx)}
                    className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-semibold text-ink sm:text-lg"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-coral' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-5 pt-3 pb-5 text-sm leading-relaxed text-body sm:text-base font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {col2.map((faq, i) => {
              const globalIdx = i + col1.length
              const isOpen = openIndex === globalIdx

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-line bg-cream transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(globalIdx)}
                    className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-semibold text-ink sm:text-lg"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-coral' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-5 pt-3 pb-5 text-sm leading-relaxed text-body sm:text-base font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
