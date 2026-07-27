import { whatWeDo } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { FeatureCard } from '../ui/FeatureCard'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatWeDo() {
  return (
    <AnimatedSection className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What we do"
          subtitle="We connect students to structured opportunities, mentorship, and skill-building experiences — and help partners create accessible pathways along the way."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
