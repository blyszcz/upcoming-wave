'use client';

import type { FoldableSectionProps } from '@features/upcomingWave/types/section.types';

import { FoldedBlocks } from '@features/upcomingWave/components/SceneBand/SceneBand';
import { SectionAnchor } from '@features/upcomingWave/components/SectionAnchor/SectionAnchor';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const CalmSection = ({ number, featured }: FoldableSectionProps) => {
  const { calm } = useContent();

  return (
    <section id={calm.id} className="uw-band uw-acceleration" aria-labelledby={`${calm.id}-title`}>
      <header className="uw-band-header">
        <p className="uw-eyebrow"><SectionAnchor sectionId={calm.id} />{number} / {calm.label}</p>
        <h2 id={`${calm.id}-title`} className="uw-title">{calm.title.lead} <em>{calm.title.accent}</em></h2>
      </header>
      <FoldedBlocks blocks={calm.blocks} featured={featured} />
    </section>
  );
};
