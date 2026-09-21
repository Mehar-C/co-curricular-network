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
      <img
        src="/logo.png"
        alt="Co-Curricular Network logo"
        className="h-11 w-auto shrink-0 object-contain"
        width={44}
        height={44}
      />
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
    <img
      src="/logo.png"
      alt="Co-Curricular Network logo"
      className={`object-contain ${className}`}
      width={44}
      height={44}
    />
  )
}
