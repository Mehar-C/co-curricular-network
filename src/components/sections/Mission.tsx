import { Heart } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'

export function Mission() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-coral/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/20 text-teal-light">
          <Heart className="h-7 w-7" aria-hidden />
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Our mission
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Co-Curricular Network exists to make meaningful experiences easier to find, access, and
          navigate. We help students connect their interests to real opportunities while supporting
          schools, families, and community partners in building stronger pathways.
        </p>
      </div>
    </AnimatedSection>
  )
}
