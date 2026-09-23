'use client';

import clsx from 'clsx';

import type { FoldableSectionProps } from '@features/upcomingWave/types/section.types';

import { SceneBand } from '@features/upcomingWave/components/SceneBand/SceneBand';
import { SectionAnchor } from '@features/upcomingWave/components/SectionAnchor/SectionAnchor';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
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

export const SplitScene = ({ number, featured }: FoldableSectionProps) => {
  const { split, ui } = useContent();
  const { ref, isInView } = useInView<HTMLElement>(0.25);

  return (
    <>
      <section ref={ref} id={split.id} data-chain="state" className={clsx('uw-split', isInView && 'is-in-view')} aria-labelledby={`${split.id}-title`}>
        <div className="uw-split-copy">
          <p className="uw-eyebrow"><SectionAnchor sectionId={split.id} />{number} / {split.label}<b>{ui.status[split.status]}</b></p>
          <h2 id={`${split.id}-title`} className="uw-title">{split.title.lead} <em>{split.title.accent}</em></h2>
        </div>
        <div className="uw-split-halves">
          <Half side={split.left} align="left" />
          <Half side={split.right} align="right" />
          <a className="uw-split-path" href={split.path.href}><span>{split.path.label}</span> ↓</a>
        </div>
      </section>
      <SceneBand id={`${split.id}-facts`} chain="state" blocks={split.band} featured={featured} />
    </>
  );
};
