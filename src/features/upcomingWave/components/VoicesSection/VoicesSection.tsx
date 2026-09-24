'use client';

import { FactsDisclosure } from '@features/upcomingWave/components/FactsDisclosure/FactsDisclosure';
import { VoiceCard } from '@features/upcomingWave/components/VoiceCard/VoiceCard';
import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const VoicesSection = () => {
  const { voices, ui } = useContent();
  const featured = voices.filter((voice) => voice.featured);
  const more = voices.filter((voice) => !voice.featured);

  return (
    <section id="voices" className="uw-voices" aria-labelledby="voices-title">
      <header className="uw-voices-header">
        <p className="uw-eyebrow">{ui.voices.eyebrow}</p>
        <h2 id="voices-title" className="uw-title">{ui.voices.titleLead} <em>{ui.voices.titleAccent}</em></h2>
        <p>{ui.voices.text}</p>
      </header>
      {/* Phones show the cards as a swipeable row (responsive.css); the hint is visible only there. */}
      <p className="uw-voices-swipe" aria-hidden="true">{ui.voices.swipe}</p>
      <div className="uw-voices-grid">
        {featured.map((voice) => <VoiceCard key={voice.id} voice={voice} />)}
      </div>
      {more.length > 0 && (
        <div className="uw-voices-more">
          <FactsDisclosure label={ui.facts.moreVoices(more.length)} hideLabel={ui.facts.lessVoices}>
            <div className="uw-voices-grid">
              {more.map((voice) => <VoiceCard key={voice.id} voice={voice} />)}
            </div>
          </FactsDisclosure>
        </div>
      )}
    </section>
  );
};
