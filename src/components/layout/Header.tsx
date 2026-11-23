import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks, PageId } from '../../data/content'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

interface HeaderProps {
  currentPage: PageId
  onNavigate: (page: PageId) => void
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleLinkClick = (page: PageId) => {
    onNavigate(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-soft backdrop-blur-md border-b border-line/50' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="text-left focus:outline-none"
          aria-label="Co-Curricular Network home"
        >
          <Logo />
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page
            return (
              <button
                key={link.page}
                type="button"
                onClick={() => handleLinkClick(link.page)}
                className={`rounded-xl px-4 py-2 font-heading text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-surface text-ink shadow-soft border border-line'
                    : 'text-ink/70 hover:bg-surface/50 hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="h-9 w-9" />
          <button
            type="button"
            className="rounded-xl p-2 text-ink hover:bg-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-line bg-cream lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page
                return (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => handleLinkClick(link.page)}
                    className={`rounded-xl px-4 py-3 text-left font-heading text-base font-semibold ${
                      isActive
                        ? 'bg-surface text-ink shadow-soft'
                        : 'text-ink/80 hover:bg-surface/60'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
