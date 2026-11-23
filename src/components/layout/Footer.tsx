import { navLinks, siteConfig, PageId } from '../../data/content'
import { ConnectLinks } from '../ui/ConnectLinks'
import { Logo } from '../ui/Logo'

interface FooterProps {
  onNavigate: (page: PageId) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white">
      <div className="h-1.5 w-full bg-brand-gradient" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo variant="light" tagline />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              By students, for students. CCN helps high schoolers discover and sign up for competitions, MUNs, internships, and programmes in the fields they care about.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Pages</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.page)}
                    className="text-left text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Connect</p>
            <ConnectLinks variant="light" className="mt-4" />
            <p className="mt-4 text-xs text-white/60">
              Founded Jan 2026 · Gurugram, India
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. A student-led initiative.
        </div>
      </div>
    </footer>
  )
}
