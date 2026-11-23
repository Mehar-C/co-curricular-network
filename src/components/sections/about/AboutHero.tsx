export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Label */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm font-semibold">
            ABOUT CCN
          </span>
        </div>

        {/* Lead Title */}
        <h1 className="max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.15]">
          The Co-Curricular Network
        </h1>

        {/* Explanatory Paragraph in comfortable editorial weight */}
        <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-body sm:text-xl">
          A platform that helps students discover and sign up for EOCs in their fields of interests such as Entrepreneurship, Debate, Sports etc without having to do hours of research finding the ones tailored for you.
        </p>

        {/* Highlighted punchline badge */}
        <div className="mt-6 inline-flex items-center rounded-xl border border-coral/30 bg-coral/10 px-4 py-2 font-heading text-base font-bold text-coral sm:text-lg">
          From deadlines to costs to venues, we do it all!
        </div>

        {/* Mono facts row directly underneath */}
        <div className="mt-10 border-t border-line pt-6">
          <p className="font-mono text-xs tracking-wider text-muted sm:text-sm">
            Founded Jan 2026 · Gurugram · Free · Online sessions
          </p>
        </div>

      </div>
    </section>
  )
}
