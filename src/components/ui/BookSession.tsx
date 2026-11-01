import { CalendarCheck } from 'lucide-react'
import { siteConfig } from '../../data/content'

export function BookSession() {
  return (
    <a
      href={siteConfig.calendly.url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-5 z-40 inline-flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-full bg-coral px-6 py-3.5 text-base font-bold text-white shadow-[0_12px_36px_-6px_rgba(242,95,115,0.7)] ring-2 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-coral-light hover:shadow-[0_20px_48px_-4px_rgba(242,95,115,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral active:scale-95 sm:bottom-8 sm:right-8 sm:px-8 sm:py-4 sm:text-lg"
      aria-label={siteConfig.calendly.label}
    >
      <CalendarCheck className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden />
      <span className="tracking-tight">{siteConfig.calendly.label}</span>
    </a>
  )
}
