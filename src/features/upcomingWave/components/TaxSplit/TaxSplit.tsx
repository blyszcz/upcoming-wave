import clsx from 'clsx';

import type { TaxSplitProps } from './TaxSplit.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';



export const TaxSplit = ({ title, subtitle, parts, caption, countries, countriesLabel, source }: TaxSplitProps) => (
  <figure className="uw-tax">
    <figcaption>
      <h3 className="uw-growth-title">{title}</h3>
      <p className="uw-tax-sub">{subtitle}</p>
    </figcaption>
    <div className="uw-tax-bar" role="img" aria-label={parts.map((part) => `${part.label}: ${part.value}`).join(', ')}>
      {parts.map((part) => (
        <span key={part.label} className={clsx('uw-tax-seg', part.highlight && 'is-highlight')} style={{ flexGrow: part.value }}>
          <b>{part.value}</b>
        </span>
      ))}
    </div>
    <ul className="uw-tax-legend">
      {parts.map((part) => (
        <li key={part.label} className={clsx(part.highlight && 'is-highlight')} style={{ flexGrow: part.value }}>
          <i aria-hidden="true" />
          <span><b>{part.label}</b>{part.detail && <small>{part.detail}</small>}</span>
        </li>
      ))}
    </ul>
    <p className="uw-bars-caption">{caption}</p>
    <SourceLink source={source} />
    <p className="uw-tax-countries"><span>{countriesLabel}</span>{countries.map((country) => <b key={country.name}>{country.name} {country.value}</b>)}</p>
  </figure>
);
