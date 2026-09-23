import type { BarItem, Source } from '@features/upcomingWave/types/scene.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';


type BarCompareProps = { title: string; subtitle: string; bars: BarItem[]; caption: string; source: Source };

export const BarCompare = ({ title, subtitle, bars, caption, source }: BarCompareProps) => {
  const max = Math.max(...bars.map((bar) => bar.value));

  return (
    <figure className="uw-bars">
      <figcaption>
        <h3 className="uw-block-title">{title}</h3>
        <p>{subtitle}</p>
      </figcaption>
      <ul>
        {bars.map((bar) => (
          <li key={bar.label} className={bar.highlight ? 'is-highlight' : undefined} title={`${bar.label}: ${bar.display}`}>
            <span className="uw-bar-label">{bar.label}</span>
            <span className="uw-bar-track">
              <span className="uw-bar-fill" style={{ width: `max(4px, calc((100% - 90px) * ${bar.value / max}))` }} />
              <span className="uw-bar-value">{bar.display}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="uw-bars-caption">{caption}</p>
      <SourceLink source={source} />
    </figure>
  );
};
