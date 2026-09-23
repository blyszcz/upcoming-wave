'use client';

import type { NumberedSectionProps } from '@features/upcomingWave/types/section.types';

import { ExpandButton } from '@features/upcomingWave/components/ExpandButton/ExpandButton';
import { BandBlocks } from '@features/upcomingWave/components/SceneBand/SceneBand';
import { SectionAnchor } from '@features/upcomingWave/components/SectionAnchor/SectionAnchor';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useDisclosure } from '@features/upcomingWave/hooks/useDisclosure';

export const CalmSection = ({ number }: NumberedSectionProps) => {
  const { calm } = useContent();
  const { isOpen, toggle } = useDisclosure();
  const bodyId = `${calm.id}-body`;
  const statement = calm.blocks.filter((block) => block.kind === 'statement');
  const rest = calm.blocks.filter((block) => block.kind !== 'statement');

  return (
    <section id={calm.id} className="uw-band uw-acceleration" aria-labelledby={`${calm.id}-title`}>
      <header className="uw-band-header">
        <p className="uw-eyebrow"><SectionAnchor sectionId={calm.id} />{number} / {calm.label}</p>
        <h2 id={`${calm.id}-title`} className="uw-title">{calm.title.lead} <em>{calm.title.accent}</em></h2>
      </header>
      <BandBlocks blocks={statement} />
      <ExpandButton isOpen={isOpen} controls={bodyId} onToggle={toggle} />
      {isOpen && <div id={bodyId} className="uw-disclosure-body"><BandBlocks blocks={rest} /></div>}
    </section>
  );
};
