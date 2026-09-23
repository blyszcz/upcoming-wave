'use client';

import { useCallback, useRef, useState } from 'react';

import type { Scene } from '@features/upcomingWave/types/scene.types';

// Which scene's "Why?" dialog is open, and returning focus to the button that opened it.
export const useExplainDialog = () => {
  const [explainScene, setExplainScene] = useState<Scene | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openExplain = useCallback((scene: Scene, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setExplainScene(scene);
  }, []);

  const closeExplain = useCallback(() => {
    setExplainScene(null);
    triggerRef.current?.focus();
  }, []);

  return { explainScene, openExplain, closeExplain };
};
