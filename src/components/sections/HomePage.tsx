import { KeyholeHero } from './KeyholeHero'
import { ProblemSection } from './ProblemSection'
import { HowItWorksSection } from './HowItWorksSection'
import { StatsSection } from './StatsSection'
import { StudentVoicesSection } from './StudentVoicesSection'

interface HomePageProps {
  onNavigateAbout: () => void
}

export function HomePage({ onNavigateAbout }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <KeyholeHero onNavigateAbout={onNavigateAbout} />
      <ProblemSection />
      <HowItWorksSection />
      <StatsSection />
      <StudentVoicesSection />
    </div>
  )
}

