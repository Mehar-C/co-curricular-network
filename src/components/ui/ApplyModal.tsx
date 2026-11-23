import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Send } from 'lucide-react'
import { teamsData } from '../../data/content'

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  initialTeam?: string
}

export function ApplyModal({ isOpen, onClose, initialTeam }: ApplyModalProps) {
  const [selectedTeam, setSelectedTeam] = useState(initialTeam || 'Research')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '10',
    school: '',
    whyJoin: '',
  })

  useEffect(() => {
    if (initialTeam) {
      setSelectedTeam(initialTeam)
    }
  }, [initialTeam])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 text-muted hover:bg-cream hover:text-ink transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal-dark dark:text-teal mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink">
                  Application Received!
                </h3>
                <p className="mt-2 text-sm text-body">
                  Thank you for applying to the <span className="font-semibold text-ink">{selectedTeam}</span> team. Our team lead will review your submission and reach out within 48 hours for your 15-minute chat!
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl bg-ink px-6 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-navy-light dark:bg-white dark:text-navy dark:hover:bg-slate-100"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-teal-dark dark:text-teal">
                  STUDENT TEAM APPLICATION
                </span>
                <h3 className="mt-1 font-heading text-2xl font-bold text-ink">
                  Join the Co-Curricular Network
                </h3>
                <p className="mt-1 text-xs text-muted">
                  Open to students from any school, Grades 9 to 12.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block font-mono text-xs font-semibold text-ink">
                      SELECT TEAM
                    </label>
                    <select
                      value={selectedTeam}
                      onChange={(e) => setSelectedTeam(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    >
                      {teamsData.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name} ({t.weeklyTime}/wk)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-xs font-semibold text-ink">
                        FULL NAME
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs font-semibold text-ink">
                        EMAIL
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@school.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-xs font-semibold text-ink">
                        GRADE
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs font-semibold text-ink">
                        SCHOOL & CITY
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. DPS, Gurugram"
                        value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-ink">
                      WHY THIS TEAM? (2-3 sentences)
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="What makes you a good fit for this role?"
                      value={formData.whyJoin}
                      onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-coral py-3.5 font-heading text-sm font-bold text-white shadow-soft transition-all hover:bg-coral-light hover:shadow-card"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

