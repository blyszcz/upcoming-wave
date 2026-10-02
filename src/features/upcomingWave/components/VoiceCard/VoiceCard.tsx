'use client';

import clsx from 'clsx';

import type { VoiceCardProps } from './VoiceCard.types';

import { ResponsiveImage } from '@features/upcomingWave/components/ResponsiveImage/ResponsiveImage';
import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

// Short by default: one quote and who said it. The figure, other quotes, signatories and source open under "More".
export const VoiceCard = ({ voice }: VoiceCardProps) => {
  const { ui } = useContent();
  const [lead, ...rest] = voice.quotes;

  return (
  <article className={clsx('uw-voice', `is-${voice.variant}`)}>
    <div className="uw-voice-media"><ResponsiveImage src={voice.image} alt={voice.imageAlt} sizes="(max-width: 1000px) 100vw, 45vw" loading="lazy" /></div>
    <div className="uw-voice-body">
      <div className="uw-voice-quotes">
        <blockquote>{ui.quoteMarks.open}{lead}{ui.quoteMarks.close}</blockquote>
      </div>
      <footer className="uw-voice-person">
        <div><b>{voice.person}</b><span>{voice.role}</span></div>
        <details className="uw-voice-more">
          <summary>{ui.voices.more}</summary>
          <div className="uw-voice-more-body">
            <p className="uw-voice-context">{voice.context}</p>
            {voice.figure && (
              <div className="uw-voice-figure">
                <strong>{voice.figure}</strong>
                <p>{voice.figureCaption}</p>
              </div>
            )}
            {rest.map((quote) => <blockquote key={quote}>{ui.quoteMarks.open}{quote}{ui.quoteMarks.close}</blockquote>)}
            {voice.signatories && (
              <div className="uw-signatories">
                <p>{ui.voices.signedBy}</p>
                <ul>{voice.signatories.map((name) => <li key={name}>{name}</li>)}</ul>
              </div>
            )}
            <SourceLink source={voice.source} />
          </div>
        </details>
      </footer>
    </div>
  </article>
  );
};
