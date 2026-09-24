'use client';

import type { SourceLinkProps } from './SourceLink.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { getSourceNumber } from '@features/upcomingWave/utils/collectSources';
import { paths } from '@routes/paths';

// Small source caption: opens the source itself, or its entry on the sources page when there is no URL (the book).
export const SourceLink = ({ source }: SourceLinkProps) => {
  const content = useContent();
  const locale = content.ui.lang === 'pl' ? 'pl' : 'en';

  return source.url
    ? <a className="uw-source" href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
    : <a className="uw-source" href={`${paths.sources(locale)}${paths.sourceAnchor(getSourceNumber(content, source))}`}>{source.label}</a>;
};
