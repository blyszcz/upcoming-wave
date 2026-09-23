import clsx from '../../lib/clsx';
import { voices } from '../../content/pl/voices';

import type { Voice } from '../../types/voice.types';

const VoiceCard = ({ voice }: { voice: Voice }) => (
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
        {voice.quotes.map((quote) => <blockquote key={quote}>„{quote}”</blockquote>)}
      </div>
      {voice.signatories && (
        <div className="uw-signatories">
          <p>Podpisali m.in.</p>
          <ul>{voice.signatories.map((name) => <li key={name}>{name}</li>)}</ul>
        </div>
      )}
      <footer className="uw-voice-person">
        <div><b>{voice.person}</b><span>{voice.role}</span></div>
        {voice.source.url
          ? <a href={voice.source.url} target="_blank" rel="noopener noreferrer">Źródło: {voice.source.label} ↗</a>
          : <span className="uw-voice-source">Źródło: {voice.source.label}</span>}
      </footer>
    </div>
  </article>
);

export const VoicesSection = () => (
  <section id="glosy" className="uw-voices" aria-labelledby="voices-title">
    <header className="uw-voices-header">
      <p className="uw-eyebrow">Głosy · to nie są aktywiści</p>
      <h2 id="voices-title" className="uw-title">To nie my to mówimy. <em>Mówią to oni.</em></h2>
      <p>Szefowie firm, które budują AI, i naukowcy, którzy ją wymyślili. Każdy cytat ma link do źródła.</p>
    </header>
    <div className="uw-voices-grid">
      {voices.map((voice) => <VoiceCard key={voice.id} voice={voice} />)}
    </div>
  </section>
);
