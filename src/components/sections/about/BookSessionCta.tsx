import { Calendar, ArrowRight } from 'lucide-react'
import { siteConfig } from '../../../data/content'

export function BookSessionCta() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
          Book your session.
        </h2>

        <p className="mt-4 font-mono text-base uppercase tracking-wider text-muted sm:text-lg">
          30 minutes, online, free.
        </p>

        {/* Big Coral Button */}
        <div className="mt-10 flex justify-center">
          <a
            href={siteConfig.calendly.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-coral px-8 py-5 font-heading text-lg font-bold text-white shadow-soft transition-all duration-300 hover:bg-coral-light hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="h-6 w-6" />
            <span>Book a session</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}

