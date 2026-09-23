import type { StatItem } from '@features/upcomingWave/types/scene.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';


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
