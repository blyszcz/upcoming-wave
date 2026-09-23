'use client';

import clsx from 'clsx';
import { useMemo, useState } from 'react';

import type { GrowthChartProps } from './GrowthChart.types';

import { SourceLink } from '@features/upcomingWave/components/SceneBand/SourceLink';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useElementWidth } from '@features/upcomingWave/hooks/useElementWidth';
import { useInView } from '@features/upcomingWave/hooks/useInView';
import { formatMinutes as formatDuration } from '@features/upcomingWave/utils/formatMinutes';
import { toYear } from '@features/upcomingWave/utils/toYear';


const START = 2022;
const END = 2027.25;
const MAX_HOURS = 46;
const MARGIN = { top: 28, right: 20, bottom: 40, left: 20 };

export const GrowthChart = ({ title, subtitle, note, source, points, doublingMonths }: GrowthChartProps) => {
  const { ui } = useContent();
  const formatMinutes = (minutes: number) => formatDuration(minutes, ui.chart.decimal);
  const references = [{ hours: 8, label: ui.chart.day }, { hours: 40, label: ui.chart.week }];
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);
  const { ref: plotRef, width } = useElementWidth<HTMLDivElement>(900);
  const [hovered, setHovered] = useState<number | null>(null);

  const isNarrow = width < 600;
  const height = isNarrow ? 380 : 480;
  const innerW = width - MARGIN.left - MARGIN.right;
  const innerH = height - MARGIN.top - MARGIN.bottom;
  const baseline = MARGIN.top + innerH;
  const x = (year: number) => MARGIN.left + ((year - START) / (END - START)) * innerW;
  const y = (minutes: number) => baseline - (Math.min(minutes / 60, MAX_HOURS) / MAX_HOURS) * innerH;

  const last = points[points.length - 1];
  const scenario = useMemo(() => {
    const out: { year: number; minutes: number }[] = [];
    for (let month = 0; toYear(last.date) + month / 12 <= END; month += 0.5) {
      out.push({ year: toYear(last.date) + month / 12, minutes: last.minutes * 2 ** (month / doublingMonths) });
    }
    return out;
  }, [last, doublingMonths]);

  const line = (list: { year: number; minutes: number }[]) => list.map((point, index) => `${index ? 'L' : 'M'}${x(point.year).toFixed(1)},${y(point.minutes).toFixed(1)}`).join('');
  const measured = points.map((point) => ({ year: toYear(point.date), minutes: point.minutes }));
  const measuredPath = line(measured);
  const areaPath = `${measuredPath}L${x(toYear(last.date)).toFixed(1)},${baseline}L${x(measured[0].year).toFixed(1)},${baseline}Z`;
  const exit = scenario.find((point) => point.minutes / 60 >= MAX_HOURS);
  const active = hovered !== null ? points[hovered] : null;

  return (
    <figure ref={ref} className={clsx('uw-growth', isInView && 'is-in-view')}>
      <figcaption className="uw-growth-head">
        <h3 className="uw-growth-title">{title}</h3>
        <p>{subtitle}</p>
      </figcaption>

      <div ref={plotRef} className="uw-growth-plot" onMouseLeave={() => setHovered(null)}>
        <svg width={width} height={height} role="img" aria-label={ui.chart.aria(title, formatMinutes(last.minutes), subtitle)}>
          <clipPath id="uw-growth-clip"><rect x={MARGIN.left} y={MARGIN.top} width={innerW} height={innerH} /></clipPath>
          {references.map((reference) => (
            <g key={reference.label} className="uw-ref">
              <line x1={MARGIN.left} x2={width - MARGIN.right} y1={y(reference.hours * 60)} y2={y(reference.hours * 60)} />
              <text x={MARGIN.left} y={y(reference.hours * 60) - 10}>{reference.label}</text>
            </g>
          ))}
          <line className="uw-baseline" x1={MARGIN.left} x2={width - MARGIN.right} y1={baseline} y2={baseline} />
          {Array.from({ length: Math.floor(END) - START + 1 }, (_, index) => START + index).map((year) => (
            <text key={year} className="uw-axis-label" x={x(year)} y={height - 12} textAnchor={year === START ? 'start' : 'middle'}>{year}</text>
          ))}

          <path className="uw-growth-area" d={areaPath} />
          <path className="uw-growth-line" d={measuredPath} pathLength={1} />
          <path className="uw-growth-scenario" d={line(scenario)} clipPath="url(#uw-growth-clip)" />
          {exit && <text className="uw-exit-label" x={x(exit.year) - 12} y={MARGIN.top + 16} textAnchor="end">{ui.chart.ifContinues}</text>}

          {points.map((point, index) => {
            const cx = x(toYear(point.date));
            const cy = y(point.minutes);
            const isRight = cx > width * 0.6;
            return (
              <g key={point.model}>
                {point.milestone && (
                  <g className="uw-milestone" transform={`translate(${isRight ? cx - 16 : cx}, ${cy - (isRight ? 8 : 26)})`}>
                    <text className="uw-milestone-year" y={-44} textAnchor={isRight ? 'end' : 'middle'}>{point.date.slice(0, 4)}</text>
                    <text className="uw-milestone-value" y={-18} textAnchor={isRight ? 'end' : 'middle'}>{point.milestone.value}</text>
                    {!isNarrow && <text className="uw-milestone-note" y={2} textAnchor={isRight ? 'end' : 'middle'}>{point.milestone.note}</text>}
                  </g>
                )}
                <circle className={clsx('uw-point', point.milestone && 'is-milestone', point.uncertain && 'is-uncertain', hovered === index && 'is-hovered')} cx={cx} cy={cy} r={point.milestone ? 6 : 3.5} />
                <circle
                  className="uw-hit"
                  cx={cx}
                  cy={cy}
                  r={14}
                  tabIndex={0}
                  aria-label={`${point.model}, ${point.date}: ${formatMinutes(point.minutes)}${point.uncertain ? `, ${ui.chart.uncertain}` : ''}`}
                  onMouseEnter={() => setHovered(index)}
                  onFocus={() => setHovered(index)}
                  onBlur={() => setHovered(null)}
                />
              </g>
            );
          })}
        </svg>

        {active && (
          <div className="uw-tooltip" style={{ left: x(toYear(active.date)), top: y(active.minutes) }}>
            <b>{active.model}</b>
            <span>{active.date.replace('-', '.')} · {formatMinutes(active.minutes)}</span>
            {active.uncertain && <em>{ui.chart.uncertain}</em>}
          </div>
        )}
      </div>

      <p className="uw-growth-note">{note}</p>
      <details className="uw-growth-table">
        <summary>{ui.chart.showAll}</summary>
        <table>
          <thead><tr>{ui.chart.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>{points.map((point) => <tr key={point.model}><td>{point.model}</td><td>{point.date}</td><td>{formatMinutes(point.minutes)}{point.uncertain ? ' *' : ''}</td></tr>)}</tbody>
        </table>
      </details>
      <SourceLink source={source} />
    </figure>
  );
};
