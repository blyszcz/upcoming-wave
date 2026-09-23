'use client';

import type { QuoteBandProps } from './QuoteBand.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';



export const QuoteBand = ({ quote, person, role, source }: QuoteBandProps) => {
  const { ui } = useContent();

  return (
  <figure className="uw-quote-band">
    <blockquote>{ui.quoteMarks.open}{quote}{ui.quoteMarks.close}</blockquote>
    <figcaption><b>{person}</b><span>{role}</span><SourceLink source={source} /></figcaption>
  </figure>
  );
};
