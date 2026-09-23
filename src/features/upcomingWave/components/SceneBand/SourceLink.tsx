import type { Source } from '@features/upcomingWave/types/scene.types';

export const SourceLink = ({ source }: { source: Source }) => (
  source.url
    ? <a className="uw-source" href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
    : <span className="uw-source">{source.label}</span>
);
