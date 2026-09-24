'use client';

import type { UpsideStripProps } from './UpsideStrip.types';

import { ResponsiveImage } from '@features/upcomingWave/components/ResponsiveImage/ResponsiveImage';
import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

// The hopeful half of every chapter: what changes if we set the right rules.
export const UpsideStrip = ({ upside }: UpsideStripProps) => {
  const { ui } = useContent();

  return (
    <aside className="uw-upside" aria-label={ui.upside.label}>
      <div className="uw-upside-media"><ResponsiveImage src={upside.image} alt={upside.alt} sizes="(max-width: 820px) 100vw, 38vw" loading="lazy" /></div>
      <div className="uw-upside-copy">
        <p className="uw-upside-label"><span aria-hidden="true" />{ui.upside.label}</p>
        <h3>{upside.title}</h3>
        <p className="uw-upside-text">{upside.text}</p>
        <ul>
          {upside.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="uw-source-list">{upside.sources.map((source) => <SourceLink key={source.url ?? source.label} source={source} />)}</div>
      </div>
    </aside>
  );
};
