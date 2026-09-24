'use client';

import { useEffect, useState } from 'react';

import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

import { DOMINO_SHOW_AFTER_PX } from '@/constants';

// Which domino step is in the middle of the screen, and whether the reader has started scrolling.
// Queries `[data-chain]` on every frame so fact bands mounted later (after "Read more") count too.
export const useActiveChainStep = (stepIds: ChainStepId[]) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let current: ChainStepId | undefined;
      document.querySelectorAll<HTMLElement>('[data-chain]').forEach((node) => {
        if (node.getBoundingClientRect().top <= middle) current = node.dataset.chain as ChainStepId;
      });
      setIsScrolled(window.scrollY > DOMINO_SHOW_AFTER_PX);
      setActiveIndex(current ? stepIds.indexOf(current) : -1);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [stepIds]);

  return { activeIndex, isScrolled };
};
