'use client';

import { useContent } from '../../content/ContentProvider';
import { BandBlocks } from '../SceneBand/SceneBand';
import { SectionAnchor } from '../SectionAnchor/SectionAnchor';

export const CalmSection = ({ number }: { number: string }) => {
  const { calm } = useContent();

  return (
    <section id={calm.id} className="uw-band uw-acceleration" aria-labelledby={`${calm.id}-title`}>
      <header className="uw-band-header">
        <p className="uw-eyebrow"><SectionAnchor sectionId={calm.id} />{number} / {calm.label}</p>
        <h2 id={`${calm.id}-title`} className="uw-title">{calm.title.lead} <em>{calm.title.accent}</em></h2>
      </header>
      <BandBlocks blocks={calm.blocks} />
    </section>
  );
};
