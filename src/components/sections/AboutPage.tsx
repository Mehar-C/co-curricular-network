import { AboutHero } from './about/AboutHero'
import { DiscoverGrowUnderstand } from './about/DiscoverGrowUnderstand'
import { SessionWalkthrough } from './about/SessionWalkthrough'
import { AboutFaqs } from './about/AboutFaqs'
import { BookSessionCta } from './about/BookSessionCta'

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <DiscoverGrowUnderstand />
      <SessionWalkthrough />
      <AboutFaqs />
      <BookSessionCta />
    </div>
  )
}

