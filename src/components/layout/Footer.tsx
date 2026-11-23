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
    <footer className="bg-[#141618] text-[#EDEAE4]">
      <div className="h-0.5 w-full bg-coral" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo variant="light" tagline />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#EDEAE4]/70 font-normal">
              By students, for students. CCN helps high schoolers discover and sign up for competitions, MUNs, internships, and programmes in the fields they care about.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-coral">Pages</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.page)}
                    className="text-left text-sm text-[#EDEAE4]/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-coral">Connect</p>
            <ConnectLinks variant="light" className="mt-4" />
            <p className="mt-4 text-xs font-mono text-[#EDEAE4]/60">
              Founded Jan 2026 · Gurugram, India
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#272A2F] pt-8 text-center text-xs font-mono text-[#EDEAE4]/40">
          © {new Date().getFullYear()} {siteConfig.name}. A student-led initiative.
        </div>
      </div>
    </footer>
  )
}
