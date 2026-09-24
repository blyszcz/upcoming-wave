'use client';

import clsx from 'clsx';

import type { ScissorsProps } from './Scissors.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useInView } from '@features/upcomingWave/hooks/useInView';


export const Scissors = ({ title, income, spending, caption }: ScissorsProps) => {
  const { ui } = useContent();
  const { ref, isInView } = useInView<HTMLDivElement>(0.4);

  return (
    <figure ref={ref} className={clsx('uw-scissors', isInView && 'is-in-view')}>
      <h3 className="uw-growth-title">{title}</h3>
      <svg viewBox="0 0 600 260" role="img" aria-label={ui.scissorsAria(income, spending, caption)}>
        <line className="uw-baseline" x1="0" x2="600" y1="240" y2="240" />
        <line className="uw-scissors-shock" x1="220" x2="220" y1="20" y2="240" />
        <text className="uw-ref-text" x="228" y="34">{ui.scissorsShock}</text>
        <path className="uw-scissors-income" d="M0,110 L220,110 C300,112 380,170 590,210" pathLength={1} />
        <path className="uw-scissors-spending" d="M0,150 L220,150 C300,148 380,90 590,50" pathLength={1} />
        <text className="uw-scissors-label" x="590" y="236" textAnchor="end">{income} ↓</text>
        <text className="uw-scissors-label is-spending" x="590" y="36" textAnchor="end">{spending} ↑</text>
      </svg>
      <p className="uw-growth-note">{caption}</p>
    </figure>
  );
};
