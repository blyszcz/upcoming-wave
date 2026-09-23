'use client';

import { useContent } from '../../content/ContentProvider';
import { SourceLink } from '../SceneBand/SourceLink';

import type { Source } from '../../types/scene.types';

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
