'use client';

import { useContent } from '../../content/ContentProvider';

export const FinaleSection = () => {
  const { finale, ui } = useContent();

  return (
    <section id={finale.id} data-chain="rules" className="uw-finale" aria-labelledby={`${finale.id}-title`}>
      <img className="uw-hero-image" src={finale.image} alt={finale.alt} loading="lazy" />
      <div className="uw-finale-shade" aria-hidden="true" />
      <div className="uw-finale-copy">
        <p className="uw-eyebrow">14 / {finale.label}<b>{ui.status.answer}</b></p>
        <h2 id={`${finale.id}-title`} className="uw-title">{finale.title.lead} <em>{finale.title.accent}</em></h2>
        <figure className="uw-finale-quote"><blockquote>{finale.quote}</blockquote><figcaption>{finale.quoteSource}</figcaption></figure>
      </div>
    </section>
  );
};
