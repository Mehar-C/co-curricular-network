import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
  index?: number
}

export function FeatureCard({ title, description, icon: Icon, index = 0 }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal-dark transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
    </motion.article>
  )
}
