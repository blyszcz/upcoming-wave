'use client';

import clsx from 'clsx';

import type { LoopDiagramProps } from './LoopDiagram.types';

import { useInView } from '@features/upcomingWave/hooks/useInView';
import { useLoopTicker } from '@features/upcomingWave/hooks/useLoopTicker';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';

const RADIUS = 42;

export const LoopDiagram = ({ title, steps, caption }: LoopDiagramProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.4);
  const active = useLoopTicker(steps.length, isInView);

  return (
    <div ref={ref} className="uw-loop">
      <div className="uw-loop-copy">
        <h3 className="uw-block-title">{title}</h3>
        <ol>
          {steps.map((step, index) => <li key={step} className={clsx(index === active && 'is-active')}><span>{formatIndex(index + 1)}</span>{step}</li>)}
        </ol>
        <p>{caption}</p>
      </div>
      <div className="uw-loop-ring" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={RADIUS} className="uw-loop-track" />
          <circle cx="50" cy="50" r={RADIUS} className="uw-loop-arc" style={{ transform: `rotate(${(active / steps.length) * 360 - 90}deg)` }} pathLength={steps.length} />
        </svg>
        {steps.map((step, index) => {
          const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <span key={step} className={clsx('uw-loop-node', index === active && 'is-active')} style={{ left: `${50 + RADIUS * Math.cos(angle)}%`, top: `${50 + RADIUS * Math.sin(angle)}%` }}>
              {step}
            </span>
          );
        })}
      </div>
    </div>
  );
};
