'use client';

import { useCallback, useRef, useState } from 'react';

import { scenes } from '../../content/pl/scenes';
import { site } from '../../content/pl/site';
import { story } from '../../content/pl/story';
import { AccelerationSection } from '../AccelerationSection/AccelerationSection';
import { ExplainSlider } from '../ExplainSlider/ExplainSlider';
import { FinaleSection } from '../FinaleSection/FinaleSection';
import { HeroScene } from '../HeroScene/HeroScene';
import { SplitScene } from '../SplitScene/SplitScene';
import { StoryHeader } from '../StoryHeader/StoryHeader';
import { StoryScene } from '../StoryScene/StoryScene';
import { VoicesSection } from '../VoicesSection/VoicesSection';
import { useSectionHash } from '../../hooks/useSectionHash';

import type { StoryItem } from '../../content/pl/story';
import type { Scene } from '../../types/scene.types';

const sceneById = new Map(scenes.map((scene) => [scene.id, scene]));

export const UpcomingWaveExperience = () => {
  const [explainScene, setExplainScene] = useState<Scene | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useSectionHash();

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
        <div>
          <p>{site.footer.sources}</p>
          <p>{site.footer.independence}</p>
        </div>
        <p className="uw-footer-author">
          {site.footer.author.label} <a href={site.footer.author.url} target="_blank" rel="noopener noreferrer">{site.footer.author.handle} ↗</a>
        </p>
      </footer>
      {explainScene && <ExplainSlider scene={explainScene} onClose={closeExplain} />}
    </main>
  );
};
