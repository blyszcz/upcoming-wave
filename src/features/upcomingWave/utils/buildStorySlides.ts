import type { Content } from '@features/upcomingWave/content/pl';

export type StorySlide = { id: string; image: string; alt: string; lead: string; accent: string };

// One slide per section that has a picture: headline + first image, in page order.
export const buildStorySlides = ({ hero, story, scenes, split, finale }: Content): StorySlide[] => {
  const slides: StorySlide[] = [{ id: 'start', image: hero.image, alt: hero.alt, lead: hero.title.lead, accent: hero.title.accent }];
  story.forEach((item) => {
    if (item.kind === 'scene') {
      const scene = scenes.find((candidate) => candidate.id === item.id);
      const panel = scene?.panels[0];
      if (scene && panel) slides.push({ id: scene.id, image: panel.image, alt: panel.alt, lead: scene.title.lead, accent: scene.title.accent });
    }
    if (item.kind === 'split') slides.push({ id: split.id, image: split.left.image, alt: split.left.alt, lead: split.title.lead, accent: split.title.accent });
    if (item.kind === 'finale') slides.push({ id: finale.id, image: finale.image, alt: finale.alt, lead: finale.title.lead, accent: finale.title.accent });
  });
  return slides;
};
