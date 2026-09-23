import { SourceLink } from '../SceneBand/SourceLink';

import type { EvidenceItem } from '../../types/scene.types';

export const EvidenceGrid = ({ title, items }: { title: string; items: EvidenceItem[] }) => (
  <div className="uw-evidence">
    <h3 className="uw-block-title">{title}</h3>
    <ul data-count={items.length}>
      {items.map((item) => (
        <li key={item.kicker}>
          <p className="uw-evidence-kicker">{item.kicker}</p>
          {item.value && <strong>{item.value}</strong>}
          <p>{item.text}</p>
          <SourceLink source={item.source} />
        </li>
      ))}
    </ul>
  </div>
);
