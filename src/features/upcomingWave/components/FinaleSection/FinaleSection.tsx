'use client';

import type { NumberedSectionProps } from '@features/upcomingWave/types/section.types';

import { ResponsiveImage } from '@features/upcomingWave/components/ResponsiveImage/ResponsiveImage';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const FinaleSection = ({ number }: NumberedSectionProps) => {
  const { finale, ui } = useContent();

  return (
    <section id={finale.id} data-chain="rules" className="uw-finale" aria-labelledby={`${finale.id}-title`}>
      <ResponsiveImage className="uw-hero-image" src={finale.image} alt={finale.alt} sizes="100vw" loading="lazy" />
      <div className="uw-finale-shade" aria-hidden="true" />
      <div className="uw-finale-copy">
        <p className="uw-eyebrow">{number} / {finale.label}<b>{ui.status.answer}</b></p>
        <h2 id={`${finale.id}-title`} className="uw-title">{finale.title.lead} <em>{finale.title.accent}</em></h2>
        <figure className="uw-finale-quote"><blockquote>{finale.quote}</blockquote><figcaption>{finale.quoteSource}</figcaption></figure>
        <div className="uw-finale-lists">
          {[finale.rules, finale.actions].map((list) => (
            <div key={list.title}>
              <h3>{list.title}</h3>
              <ol>{list.items.map((item) => <li key={item}>{item}</li>)}</ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
