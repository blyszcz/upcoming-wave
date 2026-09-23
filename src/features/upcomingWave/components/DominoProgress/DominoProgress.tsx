'use client';

import clsx from 'clsx';
import { useMemo } from 'react';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useActiveChainStep } from '@features/upcomingWave/hooks/useActiveChainStep';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';
import { paths } from '@routes/paths';

export const DominoProgress = () => {
  const { chain, ui } = useContent();
  const stepIds = useMemo(() => chain.map((step) => step.id), [chain]);
  const { activeIndex, isScrolled } = useActiveChainStep(stepIds);
  const current = chain[activeIndex] ?? chain[0];
  const shownIndex = activeIndex >= 0 ? activeIndex + 1 : 0;

  return (
    <nav className={clsx('uw-domino', isScrolled && 'is-visible')} aria-label={ui.dominoAria}>
      <ol>
        {chain.map((step, index) => (
          <li key={step.id} className={clsx(index < activeIndex && 'is-past', index === activeIndex && 'is-current')} aria-current={index === activeIndex ? 'step' : undefined}>
            <a href={paths.section(step.target)}>{step.label}</a>
          </li>
        ))}
      </ol>
      <p className="uw-domino-compact" aria-hidden="true">
        <span>{formatIndex(shownIndex)}/{chain.length}</span>{current.label}
        <i style={{ width: `${(shownIndex / chain.length) * 100}%` }} />
      </p>
    </nav>
  );
};
