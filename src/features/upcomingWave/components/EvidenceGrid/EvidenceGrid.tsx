import type { EvidenceGridProps } from './EvidenceGrid.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';


export const EvidenceGrid = ({ title, items }: EvidenceGridProps) => (
  <div className="uw-evidence">
    <h3 className="uw-block-title">{title}</h3>
    <ul data-count={items.length}>
      {items.map((item) => (
        <li key={item.kicker}>
          <p className="uw-evidence-kicker">{item.kicker}</p>
          {item.value && <strong>{item.value}</strong>}
          <p>{item.text}<SourceLink source={item.source} /></p>
        </li>
      ))}
    </ul>
  </div>
);
