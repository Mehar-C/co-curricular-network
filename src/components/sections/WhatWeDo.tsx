import { whatWeDo } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { FeatureCard } from '../ui/FeatureCard'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatWeDo() {
  return (
    <AnimatedSection id="what-we-do" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our solution"
          title="Where do we come in?"
          subtitle="We act as a true one-stop resource hub to save you time. For every listed opportunity, we break down exactly what you need to act with confidence."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {whatWeDo.map((item, i) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
