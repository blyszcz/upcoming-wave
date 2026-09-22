'use client';

import { useCallback, useRef, useState } from 'react';

import { scenes } from '../../content/scenes';
import { ExplainSlider } from '../ExplainSlider/ExplainSlider';
import { HeroScene } from '../HeroScene/HeroScene';
import { StoryHeader } from '../StoryHeader/StoryHeader';
import { TriptychScene } from '../TriptychScene/TriptychScene';
import { VoicesSection } from '../VoicesSection/VoicesSection';

import type { Scene } from '../../types/scene.types';

export const UpcomingWaveExperience = () => {
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

  return (
    <main id="top" className="uw">
      <StoryHeader />
      <HeroScene />
      <VoicesSection />
      {scenes.map((scene) => <TriptychScene key={scene.id} scene={scene} onExplain={openExplain} />)}
      <footer className="uw-footer">
        <p>Dalej: <b>03 / Nie tylko kod</b> — w przygotowaniu</p>
        <p>Na podstawie książki „Nadchodząca fala” (M. Suleyman, M. Bhaskar). Scenariusze to możliwe ryzyka, nie prognozy.</p>
      </footer>
      {explainScene && <ExplainSlider scene={explainScene} onClose={closeExplain} />}
    </main>
  );
};
