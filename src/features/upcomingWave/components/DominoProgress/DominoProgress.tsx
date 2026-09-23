'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { useContent } from '@features/upcomingWave/content/ContentProvider';

const SHOW_AFTER_PX = 80;

export const DominoProgress = () => {
  const { chain, ui } = useContent();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);

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

    const onScroll = () => {
      setIsScrolled(window.scrollY > SHOW_AFTER_PX);
      if (nodes[0] && nodes[0].getBoundingClientRect().top > window.innerHeight / 2) setActiveIndex(-1);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [chain]);

  const current = chain[activeIndex];

  return (
    <nav className={clsx('uw-domino', isScrolled && 'is-visible')} aria-label={ui.dominoAria}>
      <ol>
        {chain.map((step, index) => (
          <li key={step.id} className={clsx(index < activeIndex && 'is-past', index === activeIndex && 'is-current')} aria-current={index === activeIndex ? 'step' : undefined}>
            <a href={`#${step.target}`}>{step.label}</a>
          </li>
        ))}
      </ol>
      <p className="uw-domino-compact" aria-hidden="true">
        {current ? <><span>{String(activeIndex + 1).padStart(2, '0')}/{chain.length}</span>{current.label}</> : <><span>00/{chain.length}</span>{chain[0].label}</>}
        <i style={{ width: `${((activeIndex + 1) / chain.length) * 100}%` }} />
      </p>
    </nav>
  );
};
