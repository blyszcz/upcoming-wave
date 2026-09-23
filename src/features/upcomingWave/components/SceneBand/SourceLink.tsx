import type { SourceLinkProps } from './SourceLink.types';

export const SourceLink = ({ source }: SourceLinkProps) => (
  source.url
    ? <a className="uw-source" href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
    : <span className="uw-source">{source.label}</span>
);
