import { whatYouGetItems } from '../../../data/content'

export function WhatYouGetSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-dark dark:text-teal sm:text-sm">
            BENEFITS
          </span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
          What you get.
        </h2>

        {/* Plain list in large type. No icons. */}
        <div className="mt-12 divide-y divide-line border-y border-line">
          {whatYouGetItems.map((item, idx) => (
            <div key={idx} className="py-6 sm:py-8">
              <p className="font-heading text-xl font-medium tracking-tight text-ink sm:text-2xl lg:text-3xl leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

