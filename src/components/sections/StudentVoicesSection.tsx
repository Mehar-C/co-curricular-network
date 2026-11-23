import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { studentVoices } from '../../data/content'

export function StudentVoicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studentVoices.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const current = studentVoices[currentIndex]

  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-6 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-dark dark:text-teal sm:text-sm">
            STUDENT VOICES
          </span>
        </div>

        {/* Large Quote Container - No Cards, No Stars */}
        <div className="min-h-[180px] sm:min-h-[220px] flex flex-col justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <blockquote className="font-heading text-2xl font-bold leading-relaxed text-ink sm:text-4xl lg:text-5xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="font-mono text-sm uppercase tracking-wider text-muted sm:text-base">
                — {current.author}, {current.classInfo}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle timer indicators */}
        <div className="mt-12 flex justify-center gap-2">
          {studentVoices.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 bg-teal-dark dark:bg-teal'
                  : 'w-2 bg-line hover:bg-muted'
              }`}
              aria-label={`View quote ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

