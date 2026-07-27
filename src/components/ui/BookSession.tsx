import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import { siteConfig } from '../../data/content'

export function BookSession() {
  return (
    <motion.a
      href={siteConfig.forms.bookSession}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3.5 text-sm font-semibold text-white shadow-card ring-4 ring-coral/20 sm:bottom-8 sm:right-8"
      aria-label="Book a session"
    >
      <CalendarCheck className="h-5 w-5" aria-hidden />
      Book a Session
    </motion.a>
  )
}
