'use client';

import clsx from 'clsx';

import type { Voice } from '@features/upcomingWave/types/voice.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';


const VoiceCard = ({ voice }: { voice: Voice }) => {
  const { ui } = useContent();

  return (
  <article className={clsx('uw-voice', `is-${voice.variant}`)}>
    <div className="uw-voice-media"><img src={voice.image} alt={voice.imageAlt} loading="lazy" /></div>
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
        {voice.source.url
          ? <a href={voice.source.url} target="_blank" rel="noopener noreferrer">{ui.voices.source} {voice.source.label} ↗</a>
          : <span className="uw-voice-source">{ui.voices.source} {voice.source.label}</span>}
      </footer>
    </div>
  </article>
  );
};

export const VoicesSection = () => {
  const { voices, ui } = useContent();

  return (
  <section id="voices" className="uw-voices" aria-labelledby="voices-title">
    <header className="uw-voices-header">
      <p className="uw-eyebrow">{ui.voices.eyebrow}</p>
      <h2 id="voices-title" className="uw-title">{ui.voices.titleLead} <em>{ui.voices.titleAccent}</em></h2>
      <p>{ui.voices.text}</p>
    </header>
    <div className="uw-voices-grid">
      {voices.map((voice) => <VoiceCard key={voice.id} voice={voice} />)}
    </div>
  </section>
  );
};
