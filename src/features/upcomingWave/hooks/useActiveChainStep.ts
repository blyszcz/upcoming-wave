'use client';

import { useEffect, useState } from 'react';

import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

import { DOMINO_SHOW_AFTER_PX } from '@/constants';

// Which domino step is in the middle of the screen, and whether the reader has started scrolling.
export const useActiveChainStep = (stepIds: ChainStepId[]) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-chain]'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveIndex(stepIds.indexOf((entry.target as HTMLElement).dataset.chain as ChainStepId));
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    nodes.forEach((node) => observer.observe(node));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > DOMINO_SHOW_AFTER_PX);
      if (nodes[0] && nodes[0].getBoundingClientRect().top > window.innerHeight / 2) setActiveIndex(-1);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, [stepIds]);

  return { activeIndex, isScrolled };
};
