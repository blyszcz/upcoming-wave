'use client';

import { useContent } from '../../content/ContentProvider';

export const HeroScene = () => {
  const { hero } = useContent();

  return (
  <section id="start" className="uw-hero" aria-labelledby="hero-title">
    <img className="uw-hero-image" src={hero.image} alt={hero.alt} fetchPriority="high" />
    <div className="uw-hero-shade" aria-hidden="true" />
    <div className="uw-hero-copy">
      <h1 id="hero-title" className="uw-title uw-hero-title">{hero.title.lead} <em>{hero.title.accent}</em></h1>
      <div className="uw-hero-threats">
        <p>{hero.threatsLabel}:</p>
        <ol>
          {hero.threats.map((threat, index) => <li key={threat}><span>{String(index + 1).padStart(2, '0')}</span>{threat}</li>)}
        </ol>
      </div>
      <p className="uw-hero-closing">{hero.closing}</p>
      <div className="uw-hero-actions">
        <a className="uw-cta" href={hero.cta.href}>{hero.cta.label} <span aria-hidden="true">↓</span></a>
        <p className="uw-hero-note">{hero.note} <a href={hero.noteLink.href}>{hero.noteLink.label} →</a></p>
      </div>
    </div>
  </section>
  );
};
