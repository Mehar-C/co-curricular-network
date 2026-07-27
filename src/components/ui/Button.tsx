import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'cta'
  className?: string
  onClick?: () => void
}

const variants = {
  primary: 'bg-navy text-white hover:bg-navy-light shadow-soft hover:shadow-card',
  secondary: 'bg-teal text-navy hover:bg-teal-light shadow-soft hover:shadow-glow',
  cta: 'bg-coral text-white hover:bg-coral-light shadow-soft hover:shadow-card',
  outline: 'border-2 border-line text-ink hover:border-teal hover:text-teal-dark bg-surface/70',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
