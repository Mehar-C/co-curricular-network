import { CheckCircle2, FileText, User } from 'lucide-react'

export function SessionWalkthrough() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold sm:text-sm">
            THE SESSION EXPERIENCE
          </span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          What a session looks like.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Copy: Before, During, After */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral">
                BEFORE
              </span>
              <p className="mt-2 text-base leading-relaxed text-body font-normal">
                Fill in the sign-up form: school, grade, interests, any awards, and what you want out of it. Someone from our Communications team is then informed and takes your session at a time of your convenience.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral">
                DURING
              </span>
              <p className="mt-2 text-base leading-relaxed text-body font-normal">
                Thirty minutes and one-on-one. We walk you through five or six opportunities picked for your interests and grade. We want you to choose at least two to go for.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral">
                AFTER
              </span>
              <p className="mt-2 text-base leading-relaxed text-body font-normal">
                You get a written plan with the opportunities you picked, the deadlines and first steps, and how each one adds to your profile. Possible to also set up follow up dates.
              </p>
            </div>
          </div>

          {/* Sliced Sample Report for "Student X" */}
          <div className="relative lg:col-span-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              Confidential Session Preview · Student X
            </p>

            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
              {/* Top half visible */}
              <div className="p-6">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-coral" />
                    <div>
                      <h4 className="font-heading text-sm font-bold text-ink">
                        Student X — Roadmap Report
                      </h4>
                      <p className="font-mono text-[11px] text-muted">Grade 11 · Gurugram</p>
                    </div>
                  </div>
                  <FileText className="h-5 w-5 text-muted" />
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <span className="font-mono text-xs font-semibold text-coral uppercase tracking-wide">
                      Opportunities Picked
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-body">
                      <li className="flex items-center gap-1.5 font-medium text-ink">
                        <CheckCircle2 className="h-3.5 w-3.5 text-coral flex-shrink-0" />
                        1. Conrad Challenge (Aerospace & Aviation)
                      </li>
                      <li className="flex items-center gap-1.5 font-medium text-ink">
                        <CheckCircle2 className="h-3.5 w-3.5 text-coral flex-shrink-0" />
                        2. Young CEO Programme (Case Study Track)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-semibold text-coral uppercase tracking-wide">
                      Next Steps & Key Dates
                    </span>
                    <div className="mt-2 rounded-xl border border-line bg-cream p-3 text-xs text-body space-y-1 font-mono">
                      <p className="text-ink font-semibold">• Nov 20: Registration Form Due</p>
                      <p>• Dec 04: Executive Summary Round</p>
                      <p>• Dec 18: CCN Mentor Strategy Check-in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagonal Cut Effect at the bottom */}
              <div className="relative h-24 bg-gradient-to-b from-transparent via-surface/80 to-surface">
                <div className="absolute inset-x-0 bottom-3 flex items-center justify-center">
                  <span className="rounded-full border border-line bg-cream px-3 py-1 font-mono text-[11px] font-medium text-muted shadow-soft">
                    [Remaining recommendations unlocked in session]
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
