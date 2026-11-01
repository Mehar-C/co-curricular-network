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
        <Instagram className="h-4 w-4 shrink-0 text-coral" aria-hidden />
        {siteConfig.social.instagram.handle}
      </a>
      <a href={siteConfig.social.linkedin.url} target="_blank" rel="noreferrer" className={linkClass}>
        <Linkedin className="h-4 w-4 shrink-0 text-teal-dark" aria-hidden />
        {siteConfig.social.linkedin.handle}
      </a>
      <a href={`mailto:${siteConfig.email}`} className={linkClass}>
        <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden />
        {siteConfig.email}
      </a>
    </div>
  )
}
