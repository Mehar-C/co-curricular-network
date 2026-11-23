import { Clock, Users } from 'lucide-react'
import { teamsData, TeamInfo } from '../../../data/content'

interface JoinHeroPickerProps {
  selectedTeamId: string
  onSelectTeam: (teamId: string) => void
}

export function JoinHeroPicker({ selectedTeamId, onSelectTeam }: JoinHeroPickerProps) {
  const handlePick = (team: TeamInfo) => {
    onSelectTeam(team.id)
    const element = document.getElementById('team-panels')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Label */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold sm:text-sm">
            JOIN CCN
          </span>
        </div>

        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
          Build the student network with us.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-body sm:text-lg font-normal">
          Select a team to explore weekly commitments, live responsibilities, and how you fit in.
        </p>

        {/* The Picker (Hero) */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {teamsData.map((team) => {
            const isSelected = selectedTeamId === team.id

            return (
              <button
                key={team.id}
                type="button"
                onClick={() => handlePick(team)}
                className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-coral bg-surface shadow-card ring-1 ring-coral -translate-y-0.5'
                    : 'border-line bg-surface hover:border-muted hover:-translate-y-0.5 shadow-soft'
                }`}
              >
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink sm:text-base">
                    {team.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-xs text-muted">
                    <Clock className="h-3 w-3 text-coral" />
                    <span>{team.weeklyTime}</span>
                  </div>
                </div>

                <div className="mt-4 border-t border-line pt-3">
                  <div className="flex items-start gap-1.5 text-xs text-body">
                    <Users className="h-3.5 w-3.5 mt-0.5 text-muted flex-shrink-0" />
                    <span className="line-clamp-2">{team.interaction}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
