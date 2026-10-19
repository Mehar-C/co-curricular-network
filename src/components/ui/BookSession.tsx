import { CalendarCheck } from 'lucide-react'
import { siteConfig } from '../../data/content'

export function BookSession() {
  return (
    <a
      href={siteConfig.calendly.url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-40 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full bg-coral px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(242,95,115,0.55)] transition-all duration-200 hover:bg-coral-light hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:bottom-6 sm:right-6 sm:px-5 sm:text-base"
    >
      <CalendarCheck className="h-5 w-5 shrink-0" aria-hidden />
      <span>{siteConfig.calendly.label}</span>
    </a>
  )
}
