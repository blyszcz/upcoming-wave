'use client';

import type { LilyPondProps } from './LilyPond.types';

import { POND_CELLS } from '@/constants';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useDoublingAnimation } from '@features/upcomingWave/hooks/useDoublingAnimation';
import { useInView } from '@features/upcomingWave/hooks/useInView';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';

export const LilyPond = ({ title, copy, answer }: LilyPondProps) => {
  const { ui } = useContent();
  const { ref, isInView } = useInView<HTMLDivElement>(0.5);
  const { day, percent, isComplete, play } = useDoublingAnimation(isInView);
  const covered = Math.min(POND_CELLS, Math.floor((POND_CELLS * percent) / 100));
  const percentLabel = percent < 1 ? ui.pond.lessThanOne : String(Math.round(percent));

  return (
    <div ref={ref} className="uw-pond">
      <div className="uw-pond-copy">
        <h3 className="uw-block-title">{title}</h3>
        <p className="uw-pond-question">{copy}</p>
        <p className="uw-pond-answer" data-visible={isComplete}>{answer}</p>
        <button type="button" className="uw-text-button" onClick={play}>{ui.pond.replay}</button>
      </div>
      <figure className="uw-pond-figure" aria-label={ui.pond.aria(day, percentLabel)}>
        <div className="uw-pond-grid" aria-hidden="true">
          {Array.from({ length: POND_CELLS }, (_, index) => <span key={index} className={index < covered ? 'is-on' : undefined} />)}
        </div>
        <figcaption>
          <b>{ui.pond.day} {formatIndex(day)}</b>
          <span>{percent < 1 ? ui.pond.nothing : ui.pond.percentOfPond(Math.round(percent))}</span>
        </figcaption>
      </figure>
    </div>
  );
};
