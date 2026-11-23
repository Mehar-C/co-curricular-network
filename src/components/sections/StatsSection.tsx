import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { statsData } from '../../data/content'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 1600
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out cubic
      const current = Math.round(value * (1 - Math.pow(1 - progress, 3)))
      setDisplayValue(current)

      if (frame >= totalFrames) {
        setDisplayValue(value)
        clearInterval(counter)
      }
    }, frameRate)

    return () => clearInterval(counter)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-heading font-extrabold tracking-tight">
      {displayValue}
      {suffix}
    </span>
  )
}

function TextLoop({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="relative h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="text-xs font-mono text-muted sm:text-sm"
        >
          {items[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="flex flex-col text-left"
            >
              <div className="text-4xl text-ink sm:text-5xl lg:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="mt-2 font-heading text-base font-semibold text-ink sm:text-lg">
                {stat.label}
              </div>

              <div className="mt-2">
                <TextLoop items={stat.cycles} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
