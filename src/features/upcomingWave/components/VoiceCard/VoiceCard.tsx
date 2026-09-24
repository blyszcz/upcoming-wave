'use client';

import clsx from 'clsx';

import type { VoiceCardProps } from './VoiceCard.types';

import { ResponsiveImage } from '@features/upcomingWave/components/ResponsiveImage/ResponsiveImage';
import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const VoiceCard = ({ voice }: VoiceCardProps) => {
  const { ui } = useContent();

  return (
  <article className={clsx('uw-voice', `is-${voice.variant}`)}>
    <div className="uw-voice-media"><ResponsiveImage src={voice.image} alt={voice.imageAlt} sizes="(max-width: 1000px) 100vw, 45vw" loading="lazy" /></div>
    <div className="uw-voice-body">
      <p className="uw-voice-context">{voice.context}</p>
      {voice.figure && (
        <div className="uw-voice-figure">
          <strong>{voice.figure}</strong>
          <p>{voice.figureCaption}</p>
        </div>
      )}
      <div className="uw-voice-quotes">
        {voice.quotes.map((quote) => <blockquote key={quote}>{ui.quoteMarks.open}{quote}{ui.quoteMarks.close}</blockquote>)}
      </div>
      {voice.signatories && (
        <div className="uw-signatories">
          <p>{ui.voices.signedBy}</p>
          <ul>{voice.signatories.map((name) => <li key={name}>{name}</li>)}</ul>
        </div>
      )}
      <footer className="uw-voice-person">
        <div><b>{voice.person}</b><span>{voice.role}</span></div>
        <SourceLink source={voice.source} />
      </footer>
    </div>
  </article>
  );
};
