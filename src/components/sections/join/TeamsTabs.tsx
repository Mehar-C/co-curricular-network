import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { teamsData } from '../../../data/content'

interface TeamsTabsProps {
  selectedTeamId: string
  onSelectTeam: (teamId: string) => void
  onApplyForTeam: (teamName: string) => void
}

export function TeamsTabs({ selectedTeamId, onSelectTeam, onApplyForTeam }: TeamsTabsProps) {
  const currentTeam = teamsData.find((t) => t.id === selectedTeamId) || teamsData[0]

  return (
    <section id="team-panels" className="relative overflow-hidden bg-surface py-20 sm:py-28 border-y border-line">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Animated Tabs Header */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-line pb-1 gap-2">
          {teamsData.map((team) => {
            const isActive = team.id === currentTeam.id

            return (
              <button
                key={team.id}
                type="button"
                onClick={() => onSelectTeam(team.id)}
                className={`relative whitespace-nowrap px-4 py-3 font-heading text-sm font-semibold transition-colors sm:text-base ${
                  isActive ? 'text-teal-dark dark:text-teal' : 'text-muted hover:text-ink'
                }`}
              >
                <span>{team.name}</span>

                {/* Animated active indicator pill / underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeTeamTab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-teal"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Transition Panel */}
        <div className="mt-10 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTeam.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="rounded-3xl border border-line bg-cream p-6 shadow-soft sm:p-10"
            >
              {/* Header with Title and Optional Animated Border Trail Badge */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
                    {currentTeam.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted sm:text-sm">
                    Commitment: {currentTeam.weeklyTime}/week · {currentTeam.interaction}
                  </p>
                </div>

                {/* On the Design tab: single outlined badge with Border Trail */}
                {currentTeam.hasHiringBadge && (
                  <div className="border-trail-wrapper inline-flex self-start sm:self-center">
                    <div className="border-trail-glow" />
                    <div className="border-trail-content flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs font-semibold text-coral shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-coral animate-pulse" />
                      <span>{currentTeam.badgeText}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* What it does */}
              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted">
                  WHAT IT DOES
                </h4>
                <p className="mt-2 text-base leading-relaxed text-ink sm:text-lg">
                  {currentTeam.whatItDoes}
                </p>
              </div>

              {/* Grid: "This week you might" (Mono) + "Good fit if" */}
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-teal-dark dark:text-teal font-semibold">
                    THIS WEEK YOU MIGHT
                  </h4>
                  <ul className="mt-3 space-y-2 font-mono text-xs text-body sm:text-sm">
                    {currentTeam.thisWeekYouMight.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-teal font-bold">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-line bg-surface p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-coral font-semibold">
                      GOOD FIT IF
                    </h4>
                    <p className="mt-3 font-heading text-base font-semibold text-ink sm:text-lg">
                      {currentTeam.goodFitIf}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60">
                    <button
                      type="button"
                      onClick={() => onApplyForTeam(currentTeam.name)}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 font-heading text-sm font-semibold text-white transition-all hover:bg-navy-light dark:bg-white dark:text-navy dark:hover:bg-slate-100 shadow-soft"
                    >
                      <span>Apply for {currentTeam.name}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

