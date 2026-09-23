'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { POND_DAY_MS, POND_DAYS, REDUCED_MOTION_QUERY } from '@/constants';

// Counts days 1→30 once started; covered share doubles every day.
export const useDoublingAnimation = (shouldStart: boolean) => {
  const [day, setDay] = useState(0);
  const timer = useRef<number | null>(null);

  const stop = () => { if (timer.current) window.clearInterval(timer.current); };

  const play = useCallback(() => {
    stop();
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) { setDay(POND_DAYS); return; }
    setDay(1);
    timer.current = window.setInterval(() => {
      setDay((current) => {
        if (current >= POND_DAYS) { stop(); return current; }
        return current + 1;
      });
    }, POND_DAY_MS);
  }, []);

  useEffect(() => { if (shouldStart) play(); }, [shouldStart, play]);
  useEffect(() => stop, []);

  const percent = day === 0 ? 0 : 2 ** (day - POND_DAYS) * 100;
  return { day, percent, isComplete: day >= POND_DAYS - 1, play };
};
