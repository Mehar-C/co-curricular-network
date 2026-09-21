import { Instagram, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../../data/content'

type ConnectLinksProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function ConnectLinks({ variant = 'dark', className = '' }: ConnectLinksProps) {
  const linkClass =
    variant === 'light'
      ? 'flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white'
      : 'inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal-dark'

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <a href={siteConfig.social.instagram.url} target="_blank" rel="noreferrer" className={linkClass}>
        <Instagram className="h-4 w-4 shrink-0" aria-hidden />
        {siteConfig.social.instagram.handle}
      </a>
      <a href={siteConfig.social.linkedin.url} target="_blank" rel="noreferrer" className={linkClass}>
        <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
        {siteConfig.social.linkedin.handle}
      </a>
      <a href={`mailto:${siteConfig.email}`} className={linkClass}>
        <Mail className="h-4 w-4 shrink-0" aria-hidden />
        {siteConfig.email}
      </a>

      {siteConfig.founders.map((founder) => (
        <div key={founder.name} className="mt-1 flex flex-col gap-1.5 border-t border-line/60 pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">{founder.name}</p>
          <a href={founder.instagram} target="_blank" rel="noreferrer" className={linkClass}>
            <Instagram className="h-4 w-4 shrink-0" aria-hidden />
            {founder.handle}
          </a>
          <a href={`mailto:${founder.email}`} className={linkClass}>
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            {founder.email}
          </a>
        </div>
      ))}
    </div>
  )
}
