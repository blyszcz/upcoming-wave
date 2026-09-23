import type { TimelineProps } from './Timeline.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';

export const Timeline = ({ title, steps, footnote, sources }: TimelineProps) => (
  <div className="uw-timeline">
    <h3 className="uw-growth-title">{title}</h3>
    <ol>
      {steps.map((step, index) => (
        <li key={step.title}>
          <span className="uw-timeline-dot" aria-hidden="true">{formatIndex(index + 1)}</span>
          <div><b>{step.title}</b><p>{step.text}</p></div>
        </li>
      ))}
    </ol>
    <p className="uw-growth-note">{footnote} {sources.map((source) => <SourceLink key={source.label} source={source} />)}</p>
  </div>
);
