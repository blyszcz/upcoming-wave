'use client';

import { useMemo } from 'react';

import type { UpcomingWaveArchiveProps, UpcomingWaveExperienceProps } from './UpcomingWaveExperience.types';
import type { StoryItem } from '@features/upcomingWave/content/pl/story';

import { AnalyticsConsent } from '@features/analytics/components/AnalyticsConsent/AnalyticsConsent';
import { AccelerationSection } from '@features/upcomingWave/components/AccelerationSection/AccelerationSection';
import { CalmSection } from '@features/upcomingWave/components/CalmSection/CalmSection';
import { ExplainSlider } from '@features/upcomingWave/components/ExplainSlider/ExplainSlider';
import { FinaleSection } from '@features/upcomingWave/components/FinaleSection/FinaleSection';
import { HeroScene } from '@features/upcomingWave/components/HeroScene/HeroScene';
import { SiteFooter } from '@features/upcomingWave/components/SiteFooter/SiteFooter';
import { SourcesPage } from '@features/upcomingWave/components/SourcesPage/SourcesPage';
import { SplitScene } from '@features/upcomingWave/components/SplitScene/SplitScene';
import { StoryHeader } from '@features/upcomingWave/components/StoryHeader/StoryHeader';
import { StoryScene } from '@features/upcomingWave/components/StoryScene/StoryScene';
import { VoicesSection } from '@features/upcomingWave/components/VoicesSection/VoicesSection';
import { WhyNote } from '@features/upcomingWave/components/WhyNote/WhyNote';
import { ContentProvider, useContent } from '@features/upcomingWave/content/ContentProvider';
import { archive } from '@features/upcomingWave/content/archive';
import { locales } from '@features/upcomingWave/content/locales';
import { ReadingModeProvider } from '@features/upcomingWave/context/ReadingModeContext';
import { useExplainDialog } from '@features/upcomingWave/hooks/useExplainDialog';
import { useSectionHash } from '@features/upcomingWave/hooks/useSectionHash';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';

const Story = () => {
  const { scenes, site, story, ui } = useContent();
  const sceneById = useMemo(() => new Map(scenes.map((scene) => [scene.id, scene])), [scenes]);
  const { explainScene, openExplain, closeExplain } = useExplainDialog();
  useSectionHash();

  const renderItem = (item: StoryItem, index: number) => {
    const number = formatIndex(index + 1);
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
      <WhyNote {...site.footer.why} />
      <SiteFooter />
      {explainScene && <ExplainSlider scene={explainScene} onClose={closeExplain} />}
      <AnalyticsConsent {...ui.consent} />
    </main>
  );
};

export const UpcomingWaveArchive = ({ locale = 'en' }: UpcomingWaveArchiveProps) => (
  <ContentProvider content={archive[locale]}>
    <ReadingModeProvider>
      <p className="uw-archive-banner">ARCHIVE — full pre-restructure page, not published</p>
      <Story />
    </ReadingModeProvider>
  </ContentProvider>
);

export const UpcomingWaveSources = ({ locale = 'en' }: UpcomingWaveExperienceProps) => (
  <ContentProvider content={locales[locale]}>
    <SourcesPage />
  </ContentProvider>
);

export const UpcomingWaveExperience = ({ locale = 'en' }: UpcomingWaveExperienceProps) => (
  <ContentProvider content={locales[locale]}>
    <ReadingModeProvider>
      <Story />
    </ReadingModeProvider>
  </ContentProvider>
);
