import type { StatRowProps } from './StatRow.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';


export const StatRow = ({ items }: StatRowProps) => (
  <dl className="uw-stats">
    {items.map((item) => (
      <div key={item.value + item.label} className="uw-stat">
        <dt>{item.value}</dt>
        <dd><span>{item.label}<SourceLink source={item.source} /></span></dd>
      </div>
    ))}
  </dl>
);
