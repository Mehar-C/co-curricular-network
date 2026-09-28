import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { BookConsultation } from './components/ui/BookConsultation'
import { About } from './components/sections/About'
import { CTA } from './components/sections/CTA'
import { JoinTeam } from './components/sections/JoinTeam'
import { Pathway } from './components/sections/Pathway'
import { PortalHero } from './components/sections/PortalHero'
import { Problem } from './components/sections/Problem'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <PortalHero />
        <Problem />
        <About />
        <Pathway />
        <JoinTeam />
        <CTA />
      </main>
      <Footer />
      <BookConsultation />
    </>
  )
}

export default App
