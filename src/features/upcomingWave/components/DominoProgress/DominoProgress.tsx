'use client';

import { useEffect, useState } from 'react';

import clsx from '../../lib/clsx';
import { chain } from '../../content/pl/chain';

export const DominoProgress = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-chain]'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = (entry.target as HTMLElement).dataset.chain;
        setActiveIndex(chain.findIndex((step) => step.id === id));
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    nodes.forEach((node) => observer.observe(node));

    const hideAbove = () => { if (nodes[0] && nodes[0].getBoundingClientRect().top > window.innerHeight / 2) setActiveIndex(-1); };
    window.addEventListener('scroll', hideAbove, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', hideAbove); };
  }, []);

  const current = chain[activeIndex];

  return (
    <nav className={clsx('uw-domino', activeIndex >= 0 && 'is-visible')} aria-label="Łańcuch skutków">
      <ol>
        {chain.map((step, index) => (
          <li key={step.id} className={clsx(index < activeIndex && 'is-past', index === activeIndex && 'is-current')} aria-current={index === activeIndex ? 'step' : undefined}>
            <a href={`#${step.target}`}>{step.label}</a>
          </li>
        ))}
      </ol>
      <p className="uw-domino-compact" aria-hidden="true">
        {current && <><span>{String(activeIndex + 1).padStart(2, '0')}/{chain.length}</span>{current.label}</>}
        <i style={{ width: `${((activeIndex + 1) / chain.length) * 100}%` }} />
      </p>
    </nav>
  );
};
