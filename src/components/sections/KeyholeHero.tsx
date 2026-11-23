import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Lock } from 'lucide-react'
import { sampleOpportunities } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

interface KeyholeHeroProps {
  onNavigateAbout: () => void
}

export function KeyholeHero({ onNavigateAbout }: KeyholeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const keyholeRef = useRef<HTMLDivElement>(null)
  const databasePortalRef = useRef<HTMLDivElement>(null)
  const aboutLandRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      // Phase 1: Zoom in through the "o" keyhole (0% to 50% scroll)
      tl.to(
        heroContentRef.current,
        {
          scale: 1.8,
          opacity: 0,
          y: -50,
          duration: 0.45,
          ease: 'power2.in',
        },
        0
      )

      tl.to(
        keyholeRef.current,
        {
          scale: 45,
          duration: 0.5,
          ease: 'power2.in',
        },
        0
      )

      // Phase 2: Reveal the blurred database rows (25% to 75% scroll)
      tl.fromTo(
        databasePortalRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power1.out',
        },
        0.25
      )

      // Database rows slowly blur out / fade down as we land on About (65% to 90%)
      tl.to(
        databasePortalRef.current,
        {
          opacity: 0.15,
          scale: 1.05,
          duration: 0.35,
          ease: 'power1.inOut',
        },
        0.65
      )

      // Phase 3: Land cleanly on About Us (65% to 100% scroll)
      tl.fromTo(
        aboutLandRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        0.7
      )
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  // Split opportunities into three marquee rows
  const row1 = [...sampleOpportunities, ...sampleOpportunities]
  const row2 = [...sampleOpportunities.slice().reverse(), ...sampleOpportunities.slice().reverse()]
  const row3 = [...sampleOpportunities.slice(3), ...sampleOpportunities.slice(0, 3), ...sampleOpportunities]

  if (prefersReducedMotion) {
    return (
      <section className="relative min-h-screen bg-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-dark dark:text-teal">
              BY STUDENTS, FOR STUDENTS
            </span>
          </div>
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-ink sm:text-7xl">
            Your future, <span className="inline-block whitespace-nowrap">unlocked.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-body">
            A student-led initiative centralizing verified competitions, MUNs, and programs.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-soft">
            <p className="mb-4 text-xs font-mono uppercase text-muted">
              Live Opportunity Database Preview (Protected)
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sampleOpportunities.slice(0, 6).map((item) => (
                <div key={item.id} className="rounded-xl border border-line bg-cream p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">{item.name}</span>
                    <span className="rounded bg-teal/15 px-2 py-0.5 text-xs font-medium text-teal-dark dark:text-teal">
                      {item.field}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted blur-[4px] select-none">
                    <span>{item.deadline}</span>
                    <span>{item.fee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-line pt-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              We do the searching for you.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-body sm:text-xl">
              CCN helps students find and sign up for competitions, MUNs, internships and programmes in the fields they care about. Our team spends the hours on research, so you get the deadlines, costs and venues in one free call.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={onNavigateAbout}
                className="group inline-flex items-center gap-2 text-base font-semibold text-teal-dark transition-colors hover:text-ink dark:text-teal dark:hover:text-white"
              >
                More about us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative min-h-[220vh] bg-cream">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* Subtle background ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-teal/10 blur-[120px]" />
          <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-coral/10 blur-[130px]" />
        </div>

        {/* --- PHASE 1: Hero: Your future, unlocked --- */}
        <div
          ref={heroContentRef}
          className="relative mx-auto flex w-full max-w-5xl flex-col items-start justify-center will-change-transform"
        >
          <div className="mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-dark dark:text-teal sm:text-sm">
              BY STUDENTS, FOR STUDENTS
            </span>
          </div>

          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-ink sm:text-7xl lg:text-8xl">
            <span>Your future, </span>
            <span className="inline-block whitespace-nowrap">
              unl
              <span className="relative inline-flex items-center justify-center align-baseline">
                <span
                  ref={keyholeRef}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3.5px] border-teal-dark bg-transparent text-teal-dark dark:border-teal dark:text-teal sm:h-16 sm:w-16 sm:border-[5px] lg:h-20 lg:w-20"
                  style={{ verticalAlign: 'middle', transformOrigin: 'center center' }}
                  aria-label="unlocked"
                >
                  {/* SVG Keyhole shape inside the 'o' */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="9" r="4" />
                    <path d="M10 12 L14 12 L15 20 L9 20 Z" />
                  </svg>
                </span>
              </span>
              cked.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-body sm:text-lg">
            Scroll to unlock vetted opportunities, competitions, and your tailored plan.
          </p>
        </div>

        {/* --- PHASE 2: Database Glimpse (Infinite Slider + Progressive Blur) --- */}
        <div
          ref={databasePortalRef}
          className="pointer-events-none absolute inset-0 flex flex-col justify-center opacity-0 will-change-transform"
          aria-hidden="true"
        >
          <div className="mx-auto mb-6 max-w-5xl px-4 text-center sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 backdrop-blur-md shadow-soft">
              <Lock className="h-3.5 w-3.5 text-coral" />
              <span className="font-mono text-xs font-medium text-ink">
                150+ opportunities listed · details unlocked during session
              </span>
            </div>
          </div>

          <div className="space-y-4 overflow-hidden py-2">
            {/* Row 1: Left */}
            <div className="animate-marquee-left">
              {row1.map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  className="mx-2.5 flex items-center gap-3 rounded-2xl border border-line bg-surface/90 px-5 py-3 shadow-soft backdrop-blur-md"
                >
                  <span className="font-heading text-sm font-semibold text-ink sm:text-base">
                    {item.name}
                  </span>
                  <span className="rounded-lg bg-teal/15 px-2.5 py-0.5 text-xs font-semibold text-teal-dark dark:text-teal">
                    {item.field}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-xs text-muted blur-[6px] select-none">
                    <span>{item.fee}</span>
                    <span>•</span>
                    <span>{item.deadline}</span>
                    <span>•</span>
                    <span>Apply Link</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Right */}
            <div className="animate-marquee-right">
              {row2.map((item, idx) => (
                <div
                  key={`r2-${item.id}-${idx}`}
                  className="mx-2.5 flex items-center gap-3 rounded-2xl border border-line bg-surface/90 px-5 py-3 shadow-soft backdrop-blur-md"
                >
                  <span className="font-heading text-sm font-semibold text-ink sm:text-base">
                    {item.name}
                  </span>
                  <span className="rounded-lg bg-coral/15 px-2.5 py-0.5 text-xs font-semibold text-coral">
                    {item.field}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-xs text-muted blur-[6px] select-none">
                    <span>{item.fee}</span>
                    <span>•</span>
                    <span>{item.deadline}</span>
                    <span>•</span>
                    <span>Apply Link</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: Left */}
            <div className="animate-marquee-left">
              {row3.map((item, idx) => (
                <div
                  key={`r3-${item.id}-${idx}`}
                  className="mx-2.5 flex items-center gap-3 rounded-2xl border border-line bg-surface/90 px-5 py-3 shadow-soft backdrop-blur-md"
                >
                  <span className="font-heading text-sm font-semibold text-ink sm:text-base">
                    {item.name}
                  </span>
                  <span className="rounded-lg bg-gold/20 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-gold">
                    {item.field}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-xs text-muted blur-[6px] select-none">
                    <span>{item.fee}</span>
                    <span>•</span>
                    <span>{item.deadline}</span>
                    <span>•</span>
                    <span>Apply Link</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PHASE 3: Lands on Section 2: About us --- */}
        <div
          ref={aboutLandRef}
          className="absolute inset-x-0 bottom-12 mx-auto flex w-full max-w-5xl flex-col items-start justify-center px-4 opacity-0 will-change-transform sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              We do the searching for you.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg lg:text-xl">
              CCN helps students find and sign up for competitions, MUNs, internships and programmes in the fields they care about. Our team spends the hours on research, so you get the deadlines, costs and venues in one free call.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={onNavigateAbout}
                className="group inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-3 font-heading text-sm font-semibold text-teal-dark shadow-soft border border-line transition-all hover:border-teal/40 hover:text-ink hover:shadow-card dark:text-teal dark:hover:text-white"
              >
                More about us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

