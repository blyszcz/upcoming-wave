'use client';

import { useEffect, useState } from 'react';

import { LOOP_STEP_MS, REDUCED_MOTION_QUERY } from '@/constants';

// Cycles through loop steps while visible.
export const useLoopTicker = (count: number, isActive: boolean) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isActive || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % count), LOOP_STEP_MS);
    return () => window.clearInterval(timer);
  }, [isActive, count]);

  return active;
};
