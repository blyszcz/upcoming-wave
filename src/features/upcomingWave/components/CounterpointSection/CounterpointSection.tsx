import { counterpoint } from '../../content/pl/closing';
import { EvidenceGrid } from '../EvidenceGrid/EvidenceGrid';

export const CounterpointSection = () => (
  <section id={counterpoint.id} className="uw-band uw-counterpoint" aria-labelledby={`${counterpoint.id}-title`}>
    <header className="uw-band-header">
      <p className="uw-eyebrow">{counterpoint.number} / {counterpoint.label}</p>
      <h2 id={`${counterpoint.id}-title`} className="uw-title">{counterpoint.title.lead} <em>{counterpoint.title.accent}</em></h2>
    </header>
    <div className="uw-block"><EvidenceGrid {...counterpoint.evidence} /></div>
    <div className="uw-block"><p className="uw-statement">{counterpoint.statement}</p></div>
  </section>
);
