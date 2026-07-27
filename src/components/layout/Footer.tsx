import { Instagram, Linkedin, Mail } from 'lucide-react'
import { navLinks, siteConfig } from '../../data/content'
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
              Connecting students to competitions, MUNs, hackathons, mentorship, and opportunities
              that shape their future.
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
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {siteConfig.email}
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" aria-hidden />
                {siteConfig.social.instagram.handle}
              </a>
              <a
                href={siteConfig.social.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                {siteConfig.social.linkedin.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
