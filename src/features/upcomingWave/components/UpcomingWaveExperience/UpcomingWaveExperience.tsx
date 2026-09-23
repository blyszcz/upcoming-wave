'use client';

import { useCallback, useRef, useState } from 'react';

import { scenes } from '../../content/pl/scenes';
import { story } from '../../content/pl/story';
import { AccelerationSection } from '../AccelerationSection/AccelerationSection';
import { CounterpointSection } from '../CounterpointSection/CounterpointSection';
import { ExplainSlider } from '../ExplainSlider/ExplainSlider';
import { FinaleSection } from '../FinaleSection/FinaleSection';
import { HeroScene } from '../HeroScene/HeroScene';
import { SplitScene } from '../SplitScene/SplitScene';
import { StoryHeader } from '../StoryHeader/StoryHeader';
import { StoryScene } from '../StoryScene/StoryScene';
import { VoicesSection } from '../VoicesSection/VoicesSection';

import type { StoryItem } from '../../content/pl/story';
import type { Scene } from '../../types/scene.types';

const sceneById = new Map(scenes.map((scene) => [scene.id, scene]));

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

  const renderItem = (item: StoryItem) => {
    switch (item.kind) {
      case 'scene': {
        const scene = sceneById.get(item.id);
        return scene ? <StoryScene key={scene.id} scene={scene} onExplain={openExplain} /> : null;
      }
      case 'acceleration': return <AccelerationSection key="acceleration" />;
      case 'split': return <SplitScene key="split" />;
      case 'counterpoint': return <CounterpointSection key="counterpoint" />;
      case 'finale': return <FinaleSection key="finale" />;
    }
  };

  return (
    <main id="top" className="uw">
      <StoryHeader />
      <HeroScene />
      <VoicesSection />
      {story.map(renderItem)}
      <footer className="uw-footer">
        <p>Na podstawie książki „Nadchodząca fala” (M. Suleyman, M. Bhaskar) oraz wypowiedzi i danych, do których linki podajemy przy każdym fakcie.</p>
        <p>Scenariusze to możliwe ryzyka, nie prognozy.</p>
      </footer>
      {explainScene && <ExplainSlider scene={explainScene} onClose={closeExplain} />}
    </main>
  );
};
