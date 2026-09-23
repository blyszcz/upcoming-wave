'use client';

import type { Source } from '@features/upcomingWave/types/scene.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';


type QuoteBandProps = { quote: string; person: string; role: string; source: Source };

export const QuoteBand = ({ quote, person, role, source }: QuoteBandProps) => {
  const { ui } = useContent();

  return (
  <figure className="uw-quote-band">
    <blockquote>{ui.quoteMarks.open}{quote}{ui.quoteMarks.close}</blockquote>
    <figcaption><b>{person}</b><span>{role}</span><SourceLink source={source} /></figcaption>
  </figure>
  );
};
