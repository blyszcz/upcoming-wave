'use client';

import { useCallback, useRef, useState } from 'react';

import type { Locale } from '@features/upcomingWave/content/locales';
import type { StoryItem } from '@features/upcomingWave/content/pl/story';
import type { Scene } from '@features/upcomingWave/types/scene.types';

import { AccelerationSection } from '@features/upcomingWave/components/AccelerationSection/AccelerationSection';
import { CalmSection } from '@features/upcomingWave/components/CalmSection/CalmSection';
import { ExplainSlider } from '@features/upcomingWave/components/ExplainSlider/ExplainSlider';
import { FinaleSection } from '@features/upcomingWave/components/FinaleSection/FinaleSection';
import { HeroScene } from '@features/upcomingWave/components/HeroScene/HeroScene';
import { SplitScene } from '@features/upcomingWave/components/SplitScene/SplitScene';
import { StoryHeader } from '@features/upcomingWave/components/StoryHeader/StoryHeader';
import { StoryScene } from '@features/upcomingWave/components/StoryScene/StoryScene';
import { VoicesSection } from '@features/upcomingWave/components/VoicesSection/VoicesSection';
import { ContentProvider, useContent } from '@features/upcomingWave/content/ContentProvider';
import { locales } from '@features/upcomingWave/content/locales';
import { useSectionHash } from '@features/upcomingWave/hooks/useSectionHash';


const Story = () => {
  const { scenes, site, story } = useContent();
  const sceneById = new Map(scenes.map((scene) => [scene.id, scene]));
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

  const renderItem = (item: StoryItem, index: number) => {
    const number = String(index + 1).padStart(2, '0');
    switch (item.kind) {
      case 'scene': {
        const scene = sceneById.get(item.id);
        return scene ? <StoryScene key={scene.id} scene={scene} number={number} onExplain={openExplain} /> : null;
      }
      case 'acceleration': return <AccelerationSection key="acceleration" number={number} />;
      case 'split': return <SplitScene key="split" number={number} />;
      case 'calm': return <CalmSection key="calm" number={number} />;
      case 'finale': return <FinaleSection key="finale" number={number} />;
    }
  };


  return (
    <main id="top" className="uw">
      <StoryHeader />
      <HeroScene />
      <VoicesSection />
      {story.map(renderItem)}
      <aside className="uw-why" aria-labelledby="why-title">
        <h2 id="why-title">{site.footer.why.title}</h2>
        <p>{site.footer.why.text}</p>
      </aside>
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

export const UpcomingWaveExperience = ({ locale = 'en' }: { locale?: Locale }) => (
  <ContentProvider content={locales[locale]}>
    <Story />
  </ContentProvider>
);
