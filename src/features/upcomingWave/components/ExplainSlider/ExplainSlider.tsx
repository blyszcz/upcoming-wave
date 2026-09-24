'use client';

import clsx from 'clsx';
import { useRef } from 'react';

import type { ExplainSliderProps } from './ExplainSlider.types';

import { ResponsiveImage } from '@features/upcomingWave/components/ResponsiveImage/ResponsiveImage';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useSliderControls } from '@features/upcomingWave/hooks/useSliderControls';
import { formatIndex } from '@features/upcomingWave/utils/formatIndex';

export const ExplainSlider = ({ scene, onClose }: ExplainSliderProps) => {
  const { ui } = useContent();
  const dialogRef = useRef<HTMLDivElement>(null);
  const total = scene.explain.length;
  const { active, isFirst, isLast, goTo, handlePointerDown, handlePointerUp } = useSliderControls({ count: total, dialogRef, onClose });
  const titleId = `${scene.id}-explain-title`;

  return (
    <div ref={dialogRef} className="uw-explain" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      <div className="uw-explain-top">
        <p id={titleId} className="uw-eyebrow">{ui.explain.eyebrow} · {scene.title.lead} {scene.title.accent}</p>
        <button type="button" className="uw-round-button" onClick={onClose} aria-label={ui.explain.close}>×</button>
      </div>

      <div className="uw-explain-progress" aria-hidden="true">
        {scene.explain.map((step, index) => <span key={step.title} className={clsx(index <= active && 'is-done')} />)}
      </div>

      <div className="uw-explain-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {scene.explain.map((step, index) => (
          <article
            key={step.title}
            className={clsx('uw-explain-slide', index === active && 'is-active')}
            aria-hidden={index !== active}
            aria-roledescription={ui.explain.slide}
            aria-label={ui.explain.stepOf(index + 1, total)}
          >
            <div className="uw-explain-media"><ResponsiveImage src={step.image} alt={step.alt} sizes="(max-width: 820px) 100vw, 45vw" draggable={false} /></div>
            <div className="uw-explain-copy">
              <p className="uw-step-number">{ui.explain.step} {formatIndex(index + 1)}<span> / {formatIndex(total)}</span></p>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              <ol className="uw-chain" aria-label={ui.explain.chainAria}>
                {scene.explain.map((chainStep, chainIndex) => (
                  <li key={chainStep.label} className={clsx(chainIndex === index && 'is-current', chainIndex < index && 'is-past')}>{chainStep.label}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>

      <div className="uw-explain-controls">
        <button type="button" className="uw-round-button" onClick={() => goTo(active - 1)} disabled={isFirst} aria-label={ui.explain.prev}>←</button>
        <span aria-live="polite">{formatIndex(active + 1)} / {formatIndex(total)}</span>
        {isLast
          ? <button type="button" className="uw-pill-button" onClick={onClose}>{ui.explain.done} <span aria-hidden="true">↓</span></button>
          : <button type="button" className="uw-round-button is-primary" onClick={() => goTo(active + 1)} aria-label={ui.explain.next}>→</button>}
      </div>
    </div>
  );
};
