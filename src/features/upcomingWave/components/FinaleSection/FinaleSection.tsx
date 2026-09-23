'use client';

import { useState } from 'react';

import { useContent } from '../../content/ContentProvider';

export const FinaleSection = () => {
  const { finale, ui } = useContent();
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <section id={finale.id} data-chain="rules" className="uw-finale" aria-labelledby={`${finale.id}-title`}>
      <img className="uw-hero-image" src={finale.image} alt={finale.alt} loading="lazy" />
      <div className="uw-finale-shade" aria-hidden="true" />
      <div className="uw-finale-copy">
        <p className="uw-eyebrow">14 / {finale.label}<b>{ui.status.answer}</b></p>
        <h2 id={`${finale.id}-title`} className="uw-title">{finale.title.lead} <em>{finale.title.accent}</em></h2>
        <figure className="uw-finale-quote"><blockquote>{finale.quote}</blockquote><figcaption>{finale.quoteSource}</figcaption></figure>
        <p className="uw-finale-lead">{finale.newsletter.lead}</p>
        <form className="uw-newsletter" onSubmit={(event) => { event.preventDefault(); setIsSubscribed(true); }}>
          <input type="email" required aria-label={finale.newsletter.placeholder} placeholder={finale.newsletter.placeholder} disabled={isSubscribed} />
          <button type="submit" className="uw-cta" disabled={isSubscribed}>{isSubscribed ? finale.newsletter.done : finale.newsletter.button} {!isSubscribed && <span aria-hidden="true">→</span>}</button>
        </form>
      </div>
    </section>
  );
};
