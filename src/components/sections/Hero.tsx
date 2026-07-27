import { motion } from 'framer-motion'
import { ArrowRight, Award, Code2, Gavel, Sparkles, Trophy } from 'lucide-react'
import { siteConfig } from '../../data/content'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* soft gradient glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-coral/15 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal-dark"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {siteConfig.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl"
            >
              Opportunities that <span className="text-gradient">shape your future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-body"
            >
              We connect students to competitions, MUNs, hackathons, mentorship, and experiences
              that build real skills — no insider network required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href={siteConfig.forms.bookSession} variant="cta">
                Book a Session
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={siteConfig.forms.joinTeam} variant="outline">
                Join Our Team
              </Button>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

const tiles = [
  { label: 'Competitions', icon: Trophy, color: 'bg-teal text-navy' },
  { label: 'MUNs', icon: Gavel, color: 'bg-navy text-white' },
  { label: 'Hackathons', icon: Code2, color: 'bg-coral text-white' },
  { label: 'Awards', icon: Award, color: 'bg-gold text-navy' },
]

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-8 shadow-card">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]" />
        <p className="relative text-sm font-medium uppercase tracking-widest text-white/70">
          Discover
        </p>
        <p className="relative mt-1 font-heading text-2xl font-bold text-white">
          Your next opportunity
        </p>

        <div className="relative mt-6 grid grid-cols-2 gap-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className={`flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-sm font-semibold shadow-soft ${tile.color}`}
            >
              <tile.icon className="h-5 w-5 shrink-0" aria-hidden />
              {tile.label}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        aria-hidden
        className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-white px-4 py-3 shadow-card"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <p className="text-xs font-medium text-muted">Students supported</p>
        <p className="font-heading text-xl font-bold text-navy">500+</p>
      </motion.div>
    </motion.div>
  )
}
