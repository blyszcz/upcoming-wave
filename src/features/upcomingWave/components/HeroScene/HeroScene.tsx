'use client';

import { useContent } from '../../content/ContentProvider';
import { HeroCompare } from '../HeroCompare/HeroCompare';

export const HeroScene = () => {
  const { hero } = useContent();

  return (
  <section id="start" className="uw-hero" aria-labelledby="hero-title">
    <HeroCompare
      darkImage={hero.image}
      darkAlt={hero.alt}
      hopeImage={hero.compare.image}
      hopeAlt={hero.compare.alt}
      darkLabel={hero.compare.darkLabel}
      hopeLabel={hero.compare.hopeLabel}
      aria={hero.compare.aria}
    />
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
