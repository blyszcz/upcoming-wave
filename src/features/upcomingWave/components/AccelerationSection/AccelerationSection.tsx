'use client';

import type { NumberedSectionProps } from '@features/upcomingWave/types/section.types';

import { EvidenceGrid } from '@features/upcomingWave/components/EvidenceGrid/EvidenceGrid';
import { ExpandButton } from '@features/upcomingWave/components/ExpandButton/ExpandButton';
import { GrowthChart } from '@features/upcomingWave/components/GrowthChart/GrowthChart';
import { LilyPond } from '@features/upcomingWave/components/LilyPond/LilyPond';
import { QuoteBand } from '@features/upcomingWave/components/QuoteBand/QuoteBand';
import { SectionAnchor } from '@features/upcomingWave/components/SectionAnchor/SectionAnchor';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useDisclosure } from '@features/upcomingWave/hooks/useDisclosure';

export const AccelerationSection = ({ number }: NumberedSectionProps) => {
  const { acceleration, horizonPoints, ui } = useContent();
  const { isOpen, toggle } = useDisclosure();
  const bodyId = `${acceleration.id}-body`;

  return (
  <section id={acceleration.id} data-chain="ai" className="uw-band uw-acceleration" aria-labelledby={`${acceleration.id}-title`}>
    <header className="uw-band-header">
      <p className="uw-eyebrow"><SectionAnchor sectionId={acceleration.id} />{number} / {acceleration.label}<b>{ui.status[acceleration.status]}</b></p>
      <h2 id={`${acceleration.id}-title`} className="uw-title">{acceleration.title.lead} <em>{acceleration.title.accent}</em></h2>
    </header>
    <div className="uw-block"><GrowthChart {...acceleration.chart} points={horizonPoints} /></div>
    <ExpandButton isOpen={isOpen} controls={bodyId} onToggle={toggle} />
    {isOpen && (
      <div id={bodyId} className="uw-disclosure-body">
        <div className="uw-block"><LilyPond {...acceleration.pond} /></div>
        <div className="uw-block"><EvidenceGrid {...acceleration.evidence} /></div>
        {acceleration.quotes.map((quote) => <div key={quote.person} className="uw-block"><QuoteBand {...quote} /></div>)}
      </div>
    )}
  </section>
  );
};
