import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { CTA } from './components/sections/CTA'
import { Impact } from './components/sections/Impact'
import { JoinTeam } from './components/sections/JoinTeam'
import { Mission } from './components/sections/Mission'
import { Pathway } from './components/sections/Pathway'
import { PortalHero } from './components/sections/PortalHero'
import { Problem } from './components/sections/Problem'
import { Team } from './components/sections/Team'
import { WhatWeDo } from './components/sections/WhatWeDo'
import { BookSession } from './components/ui/BookSession'

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
        <Mission />
        <WhatWeDo />
        <Pathway />
        <Team />
        <JoinTeam />
        <Impact />
        <CTA />
      </main>
      <Footer />
      <BookSession />
    </>
  )
}

export default App
