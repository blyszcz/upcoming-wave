'use client';

import clsx from 'clsx';
import { useEffect, useMemo, useRef } from 'react';

import type { StoryModeProps } from './StoryMode.types';
import type { CSSProperties } from 'react';

import { STORY_SLIDE_MS } from '@/constants';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useSliderControls } from '@features/upcomingWave/hooks/useSliderControls';
import { buildStorySlides } from '@features/upcomingWave/utils/buildStorySlides';

// Full-screen "the whole page in ~30 seconds": auto-advancing headline + image slides.
export const StoryMode = ({ onClose }: StoryModeProps) => {
  const content = useContent();
  const { ui } = content;
  const slides = useMemo(() => buildStorySlides(content), [content]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { active, isLast, goTo } = useSliderControls({ count: slides.length, dialogRef, onClose });
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setTimeout(() => (isLast ? onClose() : goTo(active + 1)), STORY_SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, isLast, goTo, onClose]);

  return (
    <div ref={dialogRef} className="uw-story" role="dialog" aria-modal="true" aria-label={ui.stories.aria} tabIndex={-1} style={{ '--story-ms': `${STORY_SLIDE_MS}ms` } as CSSProperties}>
      <img key={slide.image} className="uw-story-image" src={slide.image} alt={slide.alt} />
      <div className="uw-story-shade" aria-hidden="true" />
      <div className="uw-story-progress" aria-hidden="true">
        {slides.map((item, index) => <span key={item.id} className={clsx(index < active && 'is-done', index === active && 'is-active')}><i key={index === active ? active : undefined} /></span>)}
      </div>
      <button type="button" className="uw-round-button uw-story-close" onClick={onClose} aria-label={ui.stories.close}>×</button>
      <h2 key={slide.id} className="uw-title uw-story-title" aria-live="polite">{slide.lead} <em>{slide.accent}</em></h2>
      <button type="button" className="uw-story-zone is-prev" onClick={() => goTo(active - 1)} aria-label={ui.explain.prev} />
      <button type="button" className="uw-story-zone is-next" onClick={() => (isLast ? onClose() : goTo(active + 1))} aria-label={ui.explain.next} />
    </div>
  );
};
