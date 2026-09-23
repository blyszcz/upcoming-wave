'use client';

import type { TimelineProps } from './Timeline.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useDisclosure } from '@features/upcomingWave/hooks/useDisclosure';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';

export const Timeline = ({ title, steps, footnote, sources, highlights }: TimelineProps) => {
  const { ui } = useContent();
  const { isOpen, toggle } = useDisclosure();
  const isCompact = Boolean(highlights) && !isOpen;
  const shown = steps.map((step, index) => ({ step, index })).filter(({ index }) => !isCompact || highlights?.includes(index));

  return (
    <div className="uw-timeline">
      <h3 className="uw-growth-title">{title}</h3>
      <ol>
        {shown.map(({ step, index }) => (
          <li key={step.title}>
            <span className="uw-timeline-dot" aria-hidden="true">{formatIndex(index + 1)}</span>
            <div><b>{step.title}</b><p>{step.text}</p></div>
          </li>
        ))}
      </ol>
      {highlights && (
        <button type="button" className="uw-text-button uw-timeline-toggle" aria-expanded={isOpen} onClick={toggle}>
          {isOpen ? ui.facts.fewerSteps : ui.facts.allSteps(steps.length)}
        </button>
      )}
      <p className="uw-growth-note">{footnote} {sources.map((source) => <SourceLink key={source.label} source={source} />)}</p>
    </div>
  );
};
