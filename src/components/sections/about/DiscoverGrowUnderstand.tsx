import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sampleOpportunities } from '../../../data/content'

type CategoryFilter = 'All' | 'STEM' | 'Debate' | 'MUN' | 'Entrepreneurship'

export function DiscoverGrowUnderstand() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('STEM')

  const filteredOpportunities =
    activeFilter === 'All'
      ? sampleOpportunities.slice(0, 4)
      : sampleOpportunities.filter((item) => item.field === activeFilter)

  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24 border-y border-line">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="divide-y divide-line">
          
          {/* ROW 1: DISCOVER (Interactive with mini filter) */}
          <div className="py-12 sm:py-16">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  Discover
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-body sm:text-lg">
                  Checking one opportunity properly takes time: is it real, who can apply, when does it close, what does it cost. Our research team has done that for 150+ of them, so you start from a shortlist.
                </p>

                {/* Mini Filter */}
                <div className="mt-8 rounded-2xl border border-line bg-cream p-5 shadow-soft">
                  <div className="flex flex-wrap items-center gap-2">
                    {(['STEM', 'MUN', 'Debate', 'Entrepreneurship', 'All'] as CategoryFilter[]).map(
                      (cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setActiveFilter(cat)}
                          className={`rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
                            activeFilter === cat
                              ? 'bg-ink text-white shadow-soft dark:bg-white dark:text-navy'
                              : 'bg-surface text-ink/70 hover:bg-surface/80 hover:text-ink border border-line'
                          }`}
                        >
                          {cat}
                        </button>
                      )
                    )}
                  </div>

                  {/* Reshuffling list */}
                  <motion.div layout className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                      {filteredOpportunities.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="flex items-center justify-between rounded-xl border border-line bg-surface p-3"
                        >
                          <div className="min-w-0 pr-2">
                            <p className="truncate text-xs font-semibold text-ink sm:text-sm">
                              {item.name}
                            </p>
                            <p className="font-mono text-[11px] text-muted">
                              {item.eligibility} · {item.format}
                            </p>
                          </div>
                          <span className="flex-shrink-0 rounded bg-teal/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-teal-dark dark:text-teal">
                            {item.field}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: GROW (Static) */}
          <div className="py-12 sm:py-16">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  Grow
                </h2>
              </div>
              <div className="lg:col-span-8 flex items-center">
                <p className="text-base leading-relaxed text-body sm:text-lg">
                  Some of the best opportunities are a year away. In your session we note what&apos;s worth aiming for next, and we can set a follow-up for when it opens.
                </p>
              </div>
            </div>
          </div>

          {/* ROW 3: UNDERSTAND (Static) */}
          <div className="py-12 sm:py-16">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                  Understand
                </h2>
              </div>
              <div className="lg:col-span-8 flex items-center">
                <p className="text-base leading-relaxed text-body sm:text-lg">
                  Every opportunity comes broken down: who can apply, what it costs, when registrations close, whether there&apos;s a selection round, and what to prepare.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

