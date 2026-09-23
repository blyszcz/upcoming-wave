'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { useInView } from '@features/upcomingWave/hooks/useInView';

type LoopDiagramProps = { title: string; steps: string[]; caption: string };

const STEP_MS = 1400;
const RADIUS = 42;

export const LoopDiagram = ({ title, steps, caption }: LoopDiagramProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.4);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isInView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % steps.length), STEP_MS);
    return () => window.clearInterval(timer);
  }, [isInView, steps.length]);

  return (
    <div ref={ref} className="uw-loop">
      <div className="uw-loop-copy">
        <h3 className="uw-block-title">{title}</h3>
        <ol>
          {steps.map((step, index) => <li key={step} className={clsx(index === active && 'is-active')}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}
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
