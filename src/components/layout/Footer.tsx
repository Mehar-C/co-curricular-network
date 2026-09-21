import { navLinks, siteConfig } from '../../data/content'
import { ConnectLinks } from '../ui/ConnectLinks'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="h-1.5 w-full bg-brand-gradient" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo variant="light" tagline />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A student-led co-curricular forum centralizing vetted opportunities in debate, MUN,
              entrepreneurship, social initiatives, and STEM.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Connect</p>
            <ConnectLinks variant="light" className="mt-4" />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
