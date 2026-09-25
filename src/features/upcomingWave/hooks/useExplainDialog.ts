'use client';

import { useCallback, useRef, useState } from 'react';

import type { Scene } from '@features/upcomingWave/types/scene.types';

// Which scene's "Why?" dialog is open, and returning focus to the button that opened it.
export const useExplainDialog = () => {
  const [explainScene, setExplainScene] = useState<Scene | null>(null);
  const [startStep, setStartStep] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openExplain = useCallback((scene: Scene, trigger: HTMLButtonElement, step = 0) => {
    triggerRef.current = trigger;
    setStartStep(step);
    setExplainScene(scene);
  }, []);

  const closeExplain = useCallback(() => {
    setExplainScene(null);
    triggerRef.current?.focus();
  }, []);

  return { explainScene, startStep, openExplain, closeExplain };
};
