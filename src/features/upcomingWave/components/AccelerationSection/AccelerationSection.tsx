import { acceleration, horizonPoints } from '../../content/pl/acceleration';
import { EvidenceGrid } from '../EvidenceGrid/EvidenceGrid';
import { GrowthChart } from '../GrowthChart/GrowthChart';
import { LilyPond } from '../LilyPond/LilyPond';
import { QuoteBand } from '../QuoteBand/QuoteBand';

export const AccelerationSection = () => (
  <section id={acceleration.id} data-chain="ai" className="uw-band uw-acceleration" aria-labelledby={`${acceleration.id}-title`}>
    <header className="uw-band-header">
      <p className="uw-eyebrow">{acceleration.number} / {acceleration.label}<b>{acceleration.status}</b></p>
      <h2 id={`${acceleration.id}-title`} className="uw-title">{acceleration.title.lead} <em>{acceleration.title.accent}</em></h2>
    </header>
    <div className="uw-block"><LilyPond {...acceleration.pond} /></div>
    <div className="uw-block"><GrowthChart {...acceleration.chart} points={horizonPoints} /></div>
    <div className="uw-block"><EvidenceGrid {...acceleration.evidence} /></div>
    {acceleration.quotes.map((quote) => <div key={quote.person} className="uw-block"><QuoteBand {...quote} /></div>)}
  </section>
);
