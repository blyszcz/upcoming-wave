'use client';

import type { SourceLinkProps } from './SourceLink.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { getSourceNumber } from '@features/upcomingWave/utils/collectSources';
import { paths } from '@routes/paths';

// Footnote marker: the number links to the source itself, or to the sources page when there is no URL.
export const SourceLink = ({ source }: SourceLinkProps) => {
  const content = useContent();
  const number = getSourceNumber(content, source);
  const locale = content.ui.lang === 'pl' ? 'pl' : 'en';
  const label = `${content.ui.voices.source} ${source.label}`;

  return (
    <sup className="uw-fn">
      {source.url
        ? <a href={source.url} target="_blank" rel="noopener noreferrer" title={source.label} aria-label={label}>{number}</a>
        : <a href={`${paths.sources(locale)}${paths.sourceAnchor(number)}`} title={source.label} aria-label={label}>{number}</a>}
    </sup>
  );
};
