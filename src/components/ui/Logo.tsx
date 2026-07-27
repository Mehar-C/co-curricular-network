type LogoProps = {
  className?: string
  showWordmark?: boolean
  variant?: 'dark' | 'light'
  tagline?: boolean
}

export function Logo({
  className = '',
  showWordmark = true,
  variant = 'dark',
  tagline = false,
}: LogoProps) {
  const wordColor = variant === 'light' ? 'text-white' : 'text-ink'
  const tagColor = variant === 'light' ? 'text-white/70' : 'text-teal-dark'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-heading text-lg font-bold tracking-tight ${wordColor}`}>
            Co-Curricular <span className="text-teal-dark">Network</span>
          </span>
          {tagline && (
            <span className={`mt-1 text-[11px] font-medium tracking-wide ${tagColor}`}>
              Discover. Connect. Achieve.
            </span>
          )}
        </span>
      )}
    </span>
  )
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="cn-logo" x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B2545" />
          <stop offset="0.5" stopColor="#24C8B8" />
          <stop offset="1" stopColor="#F25F73" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="#0B2545" />
      {/* upward swoosh — growth / achievement */}
      <path
        d="M34 15.5c-7-3.2-15 0.6-16.7 8-1.5 6.2 2 12.2 8.2 13.6-3.4-3.2-4.2-8-1.6-11.9 2.7-4.1 8.1-5.5 12.5-3.3L34 15.5z"
        fill="url(#cn-logo)"
      />
      {/* connecting node */}
      <circle cx="19" cy="30" r="2.4" fill="#4FD8CA" />
      {/* achievement star */}
      <path
        d="M35 12.2l1 2.6 2.8 0.3-2.1 1.9 0.6 2.7-2.3-1.4-2.3 1.4 0.6-2.7-2.1-1.9 2.8-0.3z"
        fill="#F6B93B"
      />
    </svg>
  )
}
