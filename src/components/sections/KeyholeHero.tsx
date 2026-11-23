import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronDown, Lock, Sparkles } from 'lucide-react'
import { sampleOpportunities } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

interface KeyholeHeroProps {
  onNavigateAbout: () => void
}

export function KeyholeHero({ onNavigateAbout }: KeyholeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const keyholeRef = useRef<HTMLDivElement>(null)
  const colorPopRef = useRef<HTMLDivElement>(null)
  const databasePortalRef = useRef<HTMLDivElement>(null)
  const aboutLandRef = useRef<HTMLDivElement>(null)
  const scrollPromptRef = useRef<HTMLDivElement>(null)
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
      // Set initial states once cleanly for silky-smooth bidirectional scrub
      gsap.set(heroContentRef.current, { scale: 1, opacity: 1, y: 0 })
      gsap.set(keyholeRef.current, { scale: 1, transformOrigin: 'center center' })
      gsap.set(colorPopRef.current, { scale: 0.2, opacity: 0, transformOrigin: 'center center' })
      gsap.set(databasePortalRef.current, { scale: 0.85, opacity: 0 })
      gsap.set(aboutLandRef.current, { y: 35, opacity: 0 })
      gsap.set(scrollPromptRef.current, { opacity: 1, y: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.35, // Fast responsive scrub with zero sluggish trailing lag
          invalidateOnRefresh: true,
        },
      })

      // 1. Initial scroll prompt fades early
      tl.to(
        scrollPromptRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.12,
          ease: 'power1.out',
        },
        0
      )

      // 2. Hero typography expands and dissolves symmetrically
      tl.to(
        heroContentRef.current,
        {
          scale: 1.4,
          opacity: 0,
          y: -30,
          duration: 0.45,
          ease: 'power1.inOut',
        },
        0
      )

      // 3. Keyhole scales up smoothly from the center without resistance
      tl.to(
        keyholeRef.current,
        {
          scale: 60,
          duration: 0.52,
          ease: 'power1.inOut',
        },
        0
      )

      // 4. Color Pop Burst: expanding radiant coral iris ring from the keyhole center
      tl.to(
        colorPopRef.current,
        {
          scale: 3.2,
          opacity: 0.85,
          duration: 0.28,
          ease: 'power1.out',
        },
        0.16
      ).to(
        colorPopRef.current,
        {
          opacity: 0,
          duration: 0.22,
          ease: 'power1.out',
        },
        0.44
      )

      // 5. Database Portal reveals through the opening aperture
      tl.to(
        databasePortalRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: 'power1.inOut',
        },
        0.28
      )

      // 6. Database rows smoothly fade down as camera lands on About us
      tl.to(
        databasePortalRef.current,
        {
          opacity: 0.08,
          scale: 1.05,
          duration: 0.32,
          ease: 'power1.inOut',
        },
        0.65
      )

      // 7. Lands on Section 2: About us with smooth symmetric deceleration
      tl.to(
        aboutLandRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power1.out',
        },
        0.68
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
      <section className="relative min-h-screen bg-cream py-28 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 shadow-soft">
            <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              BY STUDENTS, FOR STUDENTS
            </span>
          </div>

          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-ink sm:text-7xl lg:text-8xl">
            Your future, <span className="inline-block whitespace-nowrap text-coral">unlocked.</span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg text-body font-normal">
            A student-led initiative centralizing verified competitions, MUNs, and programs.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-soft text-left">
            <p className="mb-4 text-xs font-mono uppercase text-muted tracking-wider">
              Live Opportunity Database Preview (Protected)
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sampleOpportunities.slice(0, 6).map((item) => (
                <div key={item.id} className="rounded-xl border border-line bg-cream p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink text-sm">{item.name}</span>
                    <span className="rounded bg-badge px-2 py-0.5 text-xs font-medium text-badgeText font-mono">
                      {item.field}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted blur-[4px] select-none font-mono">
                    <span>{item.deadline}</span>
                    <span>{item.fee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-line pt-16 text-left max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-coral">
              ABOUT US
            </span>
            <h2 className="mt-2 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              We do the searching for you.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg font-normal">
              CCN helps students find and sign up for competitions, MUNs, internships and programmes in the fields they care about. Our team spends the hours on research, so you get the deadlines, costs and venues in one free call.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={onNavigateAbout}
                className="group inline-flex items-center gap-2 text-base font-bold text-coral transition-colors hover:text-ink"
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
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* --- COLOR POP PORTAL IRIS (Blooms outward from the keyhole center on scroll) --- */}
        <div
          ref={colorPopRef}
          className="pointer-events-none absolute h-[70vw] w-[70vw] max-w-[850px] max-h-[850px] rounded-full opacity-0 will-change-transform z-10"
          style={{
            background: 'radial-gradient(circle, rgba(242,95,92,0.28) 0%, rgba(242,95,92,0.08) 45%, transparent 70%)',
            border: '2px solid rgba(242,95,92,0.5)',
            boxShadow: '0 0 80px rgba(242,95,92,0.3)',
          }}
          aria-hidden="true"
        />

        {/* --- PHASE 1: Centered Hero: Your future, unlocked --- */}
        <div
          ref={heroContentRef}
          className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center will-change-transform z-20 pointer-events-none"
        >
          {/* Centered Top Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 shadow-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              BY STUDENTS, FOR STUDENTS
            </span>
          </div>

          {/* Centered Headline with Focal Keyhole 'o' */}
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-ink sm:text-7xl lg:text-8xl leading-[1.1] max-w-4xl">
            <span>Your future, </span>
            <span className="inline-block whitespace-nowrap">
              unl
              <span className="relative inline-flex items-center justify-center align-baseline">
                <span
                  ref={keyholeRef}
                  className="pointer-events-none inline-flex h-12 w-12 items-center justify-center rounded-full border-[3.5px] border-coral bg-cream text-coral sm:h-16 sm:w-16 sm:border-[5px] lg:h-20 lg:w-20 shadow-soft"
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

          <p className="mt-6 max-w-xl mx-auto text-base text-body sm:text-lg font-normal leading-relaxed">
            Scroll to dive through the keyhole and unlock verified high school competitions, MUNs, and your tailored roadmap.
          </p>

          {/* Centered Scroll Hint */}
          <div
            ref={scrollPromptRef}
            className="mt-10 flex flex-col items-center gap-1.5 text-xs font-mono text-muted uppercase tracking-wider"
          >
            <span>Scroll to unlock</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-coral" />
          </div>
        </div>

        {/* --- PHASE 2: Database Glimpse (Infinite Slider + Progressive Blur) --- */}
        <div
          ref={databasePortalRef}
          className="pointer-events-none absolute inset-0 flex flex-col justify-center opacity-0 will-change-transform z-15"
          aria-hidden="true"
        >
          <div className="mx-auto mb-6 max-w-5xl px-4 text-center sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-surface px-5 py-2 shadow-card">
              <Sparkles className="h-4 w-4 text-coral" />
              <span className="font-mono text-xs font-bold text-ink tracking-wide">
                150+ OPPORTUNITIES UNLOCKED // LIVE REGISTRY PREVIEW
              </span>
              <Lock className="h-3.5 w-3.5 text-coral ml-1" />
            </div>
          </div>

          <div className="space-y-3.5 overflow-hidden py-2">
            {/* Row 1: Left */}
            <div className="animate-marquee-left">
              {row1.map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  className="mx-2.5 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-5 py-3 shadow-soft backdrop-blur-sm"
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="rounded-md bg-badge px-2.5 py-0.5 font-mono text-xs font-semibold text-badgeText">
                    {item.field}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted blur-[5px] select-none">
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
                  className="mx-2.5 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-5 py-3 shadow-soft backdrop-blur-sm"
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="rounded-md bg-badge px-2.5 py-0.5 font-mono text-xs font-semibold text-badgeText">
                    {item.field}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted blur-[5px] select-none">
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
                  className="mx-2.5 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-5 py-3 shadow-soft backdrop-blur-sm"
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="rounded-md bg-badge px-2.5 py-0.5 font-mono text-xs font-semibold text-badgeText">
                    {item.field}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted blur-[5px] select-none">
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

        {/* --- PHASE 3: Seamless Transition Landing on Section 2: About Us --- */}
        <div
          ref={aboutLandRef}
          className="absolute inset-x-0 bottom-12 mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center px-4 opacity-0 will-change-transform z-20 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <div className="mb-3">
              <span className="font-mono text-xs uppercase tracking-widest font-semibold text-coral">
                ABOUT US
              </span>
            </div>
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              We do the searching for you.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto">
              CCN helps students find and sign up for competitions, MUNs, internships and programmes in the fields they care about. Our team spends the hours on research, so you get the deadlines, costs and venues in one free call.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={onNavigateAbout}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-coral/40 bg-surface px-6 py-3.5 font-heading text-sm font-bold text-coral shadow-soft transition-all hover:bg-coral hover:text-white hover:shadow-card hover:-translate-y-0.5"
              >
                <span>More about us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
