import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Award, GraduationCap, Sparkles, Trophy, Users } from 'lucide-react'
import { siteConfig } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

const dashboardCards = [
  {
    label: 'Competitions',
    value: '120+ live',
    hint: 'Hackathons · MUNs · Olympiads',
    icon: Trophy,
    iconWrap: 'bg-teal/15 text-teal-dark',
    preview: 'from-teal/20 to-teal/5',
    bar: 'bg-teal',
  },
  {
    label: 'Mentors',
    value: '45+ pros',
    hint: 'Guidance from people who’ve done it',
    icon: Users,
    iconWrap: 'bg-violet-500/15 text-violet-600',
    preview: 'from-violet-500/20 to-violet-500/5',
    bar: 'bg-violet-500',
  },
  {
    label: 'Scholarships',
    value: '$2M+ tracked',
    hint: 'Funding & awards, curated for you',
    icon: Award,
    iconWrap: 'bg-coral/15 text-coral',
    preview: 'from-coral/20 to-coral/5',
    bar: 'bg-coral',
  },
]

export function PortalHero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const envelopeRef = useRef<HTMLDivElement>(null)
  const flapRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const title1Ref = useRef<HTMLDivElement>(null)
  const title2Ref = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(gridRef.current, { scale: 0.55, opacity: 0, filter: 'blur(8px)' })
      gsap.set(title2Ref.current, { opacity: 0, y: 40 })

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      // Phase 1 (0 – 0.35): open the flap, then slide the letter up and out
      tl.to(flapRef.current, { rotateX: -158, duration: 0.16, ease: 'power2.inOut' }, 0)
        .to(letterRef.current, { y: -230, duration: 0.24, ease: 'power2.out' }, 0.14)

      // Phase 2 (0.30 – 0.70): zoom into the portal + fade envelope out
      tl.to(envelopeRef.current, { scale: 9.5, duration: 0.4, ease: 'power1.in' }, 0.3)
        .to(envelopeRef.current, { opacity: 0, duration: 0.22 }, 0.52)
        .to(title1Ref.current, { opacity: 0, y: -50, duration: 0.2 }, 0.5)
        .to(hintRef.current, { opacity: 0, duration: 0.15 }, 0.4)

      // Phase 3 (0.70 – 1.0): dashboard grid snaps into focus
      tl.to(
        gridRef.current,
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' },
        0.68,
      ).to(title2Ref.current, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0.72)
    }, trackRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={trackRef} className="relative min-h-[320vh] bg-cream">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* soft ambient light glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-teal/20 blur-[130px]" />
          <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-400/15 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-coral/15 blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(11,37,69,0.06)_1px,transparent_1px)] [background-size:26px_26px]" />
        </div>

        {/* ===== Layer A: Envelope ===== */}
        <div
          ref={envelopeRef}
          className="absolute z-20 flex flex-col items-center"
          style={{ perspective: 1400 }}
        >
          <div
            className="relative h-64 w-[22rem] max-w-[86vw]"
            style={{ perspective: 1200 }}
          >
            {/* envelope back panel (deepest layer) */}
            <div className="absolute inset-0 z-0 rounded-2xl border border-line bg-surface shadow-[0_30px_70px_-24px_rgba(11,37,69,0.35)]" />

            {/* interior (revealed when the flap opens) */}
            <div
              className="absolute inset-x-0 top-0 z-[1] h-[58%]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, rgba(11,37,69,0.30), rgba(11,37,69,0.06))',
              }}
            />

            {/* flap — sits behind the letter, opens up and back on scroll */}
            <div
              ref={flapRef}
              className="absolute inset-x-0 top-0 z-[2] h-[55%] origin-top"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* outer face */}
              <div
                className="absolute inset-0 bg-brand-gradient shadow-lg"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backfaceVisibility: 'hidden' }}
              />
              {/* inner lining face (shows once opened) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transform: 'rotateX(180deg)',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(180deg, #EAF6F4, #D6ECE9)',
                }}
              />
            </div>

            {/* letter mask — clips the letter to the envelope's bottom edge while
                leaving the top open, so it stays fully hidden until it rises out */}
            <div
              className="absolute inset-0 z-[3]"
              style={{ clipPath: 'inset(-1200px 0px 0px 0px)' }}
            >
              {/* acceptance letter — tucked inside, slides up and out on scroll */}
              <div
                ref={letterRef}
                className="absolute left-1/2 top-[68%] w-[18rem] max-w-[78vw] -translate-x-1/2 rounded-xl border border-line bg-surface px-5 pb-5 pt-5 text-center shadow-2xl"
              >
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-dark">
                  Co-Curricular Network
                </p>
                <h3 className="mt-1 font-heading text-xl font-bold leading-tight text-ink">
                  Congratulations,
                  <br />
                  you’re in!
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-body">
                  Your spot in the network is confirmed. Time to discover, connect, and achieve.
                </p>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-teal/15 px-3 py-1 text-[11px] font-semibold text-teal-dark">
                  <Sparkles className="h-3 w-3" /> Opportunity unlocked
                </div>
              </div>
            </div>

            {/* envelope front pocket (shallow V) — hides the letter until it rises */}
            <div
              className="absolute inset-0 z-[4] rounded-2xl border border-line bg-gradient-to-br from-surface to-cream"
              style={{ clipPath: 'polygon(0 45%, 50% 58%, 100% 45%, 100% 100%, 0 100%)' }}
            />
            {/* gradient seam accent along the pocket edge */}
            <div
              className="absolute inset-0 z-[5]"
              style={{
                clipPath: 'polygon(0 43%, 50% 56%, 100% 43%, 100% 45%, 50% 58%, 0 45%)',
                background: 'linear-gradient(90deg,#24C8B8,#F25F73)',
                opacity: 0.9,
              }}
            />
          </div>
        </div>

        {/* ===== Phase 1 headline (over the envelope) ===== */}
        <div
          ref={title1Ref}
          className="pointer-events-none absolute inset-x-0 top-[14vh] z-30 flex flex-col items-center px-6 text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal-dark">
            <Sparkles className="h-4 w-4" /> {siteConfig.tagline}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            Your Future, <span className="text-gradient">Unlocked.</span>
          </h1>
        </div>

        {/* ===== Phase 3 reveal: heading + buttons + dashboard grid (single column) ===== */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6 py-24">
          <div ref={title2Ref} className="flex flex-col items-center text-center">
            <h2 className="max-w-3xl font-heading text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              Connect with Top <span className="text-gradient">Competitions</span> & Non-Profits.
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.forms.bookSession}
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-105"
              >
                Book a Session <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.forms.joinTeam}
                className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface/70 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal-dark"
              >
                Join Our Team
              </a>
            </div>
          </div>

          <div
            ref={gridRef}
            className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {dashboardCards.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-line bg-surface p-6 shadow-card"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconWrap}`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-muted">{card.label}</p>
                <p className="mt-1 font-heading text-2xl font-bold text-ink">{card.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">{card.hint}</p>
                <div className={`mt-5 h-24 overflow-hidden rounded-2xl bg-gradient-to-br ${card.preview}`}>
                  <div className="flex h-full items-end gap-1.5 p-3">
                    {[45, 70, 40, 85, 60, 95].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t ${card.bar} opacity-70`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div ref={hintRef} className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-ink/40">Scroll to open</p>
          <div className="mx-auto mt-3 flex h-9 w-5 justify-center rounded-full border border-ink/25 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-ink/50" />
          </div>
        </div>

        {/* seamless blend into sections below */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-b from-transparent to-surface" />
      </div>
    </section>
  )
}
