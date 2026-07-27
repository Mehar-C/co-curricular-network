import { motion } from 'framer-motion'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-dark ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-body leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
