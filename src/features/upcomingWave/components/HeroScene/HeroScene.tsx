'use client';

import { useContent } from '../../content/ContentProvider';

export const HeroScene = () => {
  const { hero, ui } = useContent();

  return (
  <section id="start" className="uw-hero" aria-labelledby="hero-title">
    <img className="uw-hero-image" src={hero.image} alt={hero.alt} fetchPriority="high" />
    <div className="uw-hero-shade" aria-hidden="true" />
    <div className="uw-hero-copy">
      <p className="uw-eyebrow"><b className="is-alert">{hero.status}</b>{ui.heroBasis}</p>
      <h1 id="hero-title" className="uw-title uw-hero-title">{hero.title.lead} <em>{hero.title.accent}</em></h1>
      <div className="uw-hero-threats">
        <p>{hero.threatsLabel}:</p>
        <ol>
          {hero.threats.map((threat, index) => <li key={threat}><span>{String(index + 1).padStart(2, '0')}</span>{threat}</li>)}
        </ol>
      </div>
      <p className="uw-hero-closing">{hero.closing}</p>
      <a className="uw-cta" href={hero.cta.href}>{hero.cta.label} <span aria-hidden="true">↓</span></a>
    </div>
  </section>
  );
};
