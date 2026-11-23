import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { BookSession } from './components/ui/BookSession'
import { HomePage } from './components/sections/HomePage'
import { AboutPage } from './components/sections/AboutPage'
import { JoinPage } from './components/sections/JoinPage'
import { PageId } from './data/content'

function getPageFromHash(): PageId {
  const hash = window.location.hash.toLowerCase()
  if (hash.includes('about')) return 'about'
  if (hash.includes('join')) return 'join'
  return 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (page: PageId) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : `#${page}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header currentPage={currentPage} onNavigate={navigateTo} />

      <main id="main-content">
        {currentPage === 'home' && (
          <HomePage onNavigateAbout={() => navigateTo('about')} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'join' && <JoinPage />}
      </main>

      <Footer onNavigate={navigateTo} />
      <BookSession />
    </>
  )
}

export default App
