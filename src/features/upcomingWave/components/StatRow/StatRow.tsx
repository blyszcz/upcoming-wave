import { SourceLink } from '../SceneBand/SourceLink';

import type { StatItem } from '../../types/scene.types';

export const StatRow = ({ items }: { items: StatItem[] }) => (
  <dl className="uw-stats">
    {items.map((item) => (
      <div key={item.value + item.label} className="uw-stat">
        <dt>{item.value}</dt>
        <dd>{item.label}<SourceLink source={item.source} /></dd>
      </div>
    ))}
  </dl>
);
