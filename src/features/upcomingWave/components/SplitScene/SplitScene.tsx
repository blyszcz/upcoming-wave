'use client';

import clsx from 'clsx';

import type { NumberedSectionProps } from '@features/upcomingWave/types/section.types';

import { ExpandButton } from '@features/upcomingWave/components/ExpandButton/ExpandButton';
import { SceneBand } from '@features/upcomingWave/components/SceneBand/SceneBand';
import { SectionAnchor } from '@features/upcomingWave/components/SectionAnchor/SectionAnchor';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useDisclosure } from '@features/upcomingWave/hooks/useDisclosure';
import { useInView } from '@features/upcomingWave/hooks/useInView';

type Side = { image: string; alt: string; label: string; text: string; quote: string };

const Half = ({ side, align }: { side: Side; align: 'left' | 'right' }) => (
  <figure className={clsx('uw-split-half', `is-${align}`)}>
    <img src={side.image} alt={side.alt} loading="lazy" />
    <figcaption>
      <b>{side.label}</b>
      <p>{side.text}</p>
      <q>{side.quote}</q>
    </figcaption>
  </figure>
);

export const SplitScene = ({ number }: NumberedSectionProps) => {
  const { split, ui } = useContent();
  const { ref, isInView } = useInView<HTMLElement>(0.25);
  const { isOpen, toggle } = useDisclosure();
  const factsId = `${split.id}-facts`;

  return (
    <>
      <section ref={ref} id={split.id} data-chain="state" className={clsx('uw-split', isInView && 'is-in-view', !isOpen && 'is-collapsed')} aria-labelledby={`${split.id}-title`}>
        <div className="uw-split-copy">
          <p className="uw-eyebrow"><SectionAnchor sectionId={split.id} />{number} / {split.label}<b>{ui.status[split.status]}</b></p>
          <h2 id={`${split.id}-title`} className="uw-title">{split.title.lead} <em>{split.title.accent}</em></h2>
          <ExpandButton isOpen={isOpen} controls={factsId} onToggle={toggle} />
        </div>
        <div className="uw-split-halves">
          <Half side={split.left} align="left" />
          <Half side={split.right} align="right" />
          <a className="uw-split-path" href={split.path.href}><span>{split.path.label}</span> ↓</a>
        </div>
      </section>
      {isOpen && <SceneBand id={factsId} chain="state" blocks={split.band} />}
    </>
  );
};
