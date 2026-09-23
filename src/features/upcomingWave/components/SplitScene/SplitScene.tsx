'use client';

import clsx from '../../lib/clsx';
import { useContent } from '../../content/ContentProvider';
import { useInView } from '../../hooks/useInView';
import { SceneBand } from '../SceneBand/SceneBand';
import { ShareButton } from '../ShareButton/ShareButton';

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

export const SplitScene = () => {
  const { split, ui } = useContent();
  const { ref, isInView } = useInView<HTMLElement>(0.25);

  return (
    <>
      <section ref={ref} id={split.id} data-chain="panstwo" className={clsx('uw-split', isInView && 'is-in-view')} aria-labelledby={`${split.id}-title`}>
        <div className="uw-split-copy">
          <p className="uw-eyebrow">{split.number} / {split.label}<b>{ui.status[split.status]}</b></p>
          <h2 id={`${split.id}-title`} className="uw-title">{split.title.lead} <em>{split.title.accent}</em></h2>
          <ShareButton sectionId={split.id} title={`${split.title.lead} ${split.title.accent}`} />
        </div>
        <div className="uw-split-halves">
          <Half side={split.left} align="left" />
          <Half side={split.right} align="right" />
          <a className="uw-split-path" href={split.path.href}><span>{split.path.label}</span> ↓</a>
        </div>
      </section>
      <SceneBand id={`${split.id}-fakty`} chain="panstwo" blocks={split.band} />
    </>
  );
};
