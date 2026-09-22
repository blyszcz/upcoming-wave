'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import clsx from '../../lib/clsx';

import type { ExplainSliderProps } from './ExplainSlider.types';

const SWIPE_THRESHOLD_PX = 50;

export const ExplainSlider = ({ scene, onClose }: ExplainSliderProps) => {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const lastIndex = scene.explain.length - 1;

  const go = useCallback((index: number) => setActive(Math.min(Math.max(index, 0), lastIndex)), [lastIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setActive((index) => Math.min(index + 1, lastIndex));
      if (event.key === 'ArrowLeft') setActive((index) => Math.max(index - 1, 0));
      if (event.key === 'Home') setActive(0);
      if (event.key === 'End') setActive(lastIndex);
      if (event.key === 'Tab' && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>('button:not([disabled])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, lastIndex]);

  const onPointerUp = (clientX: number) => {
    if (pointerStartX.current === null) return;
    const delta = clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) go(active + (delta < 0 ? 1 : -1));
  };

  const titleId = `${scene.id}-explain-title`;

  return (
    <div
      ref={dialogRef}
      className="uw-explain"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      tabIndex={-1}
      onPointerDown={(event) => { pointerStartX.current = event.clientX; }}
      onPointerUp={(event) => onPointerUp(event.clientX)}
    >
      <div className="uw-explain-top">
        <p id={titleId} className="uw-eyebrow">Dlaczego? · {scene.title.lead} {scene.title.accent}</p>
        <button type="button" className="uw-round-button" onClick={onClose} aria-label="Zamknij wyjaśnienie">×</button>
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
            aria-roledescription="slajd"
            aria-label={`Krok ${index + 1} z ${scene.explain.length}`}
          >
            <div className="uw-explain-media"><img src={step.image} alt={step.alt} draggable={false} /></div>
            <div className="uw-explain-copy">
              <p className="uw-step-number">Krok {String(index + 1).padStart(2, '0')}<span> / {String(scene.explain.length).padStart(2, '0')}</span></p>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              <ol className="uw-chain" aria-label="Łańcuch przyczyn">
                {scene.panels.map((panel, chainIndex) => (
                  <li key={panel.label} className={clsx(chainIndex === index && 'is-current', chainIndex < index && 'is-past')}>{panel.label}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>

      <div className="uw-explain-controls">
        <button type="button" className="uw-round-button" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Poprzedni krok">←</button>
        <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(scene.explain.length).padStart(2, '0')}</span>
        {active < lastIndex
          ? <button type="button" className="uw-round-button is-primary" onClick={() => go(active + 1)} aria-label="Następny krok">→</button>
          : <button type="button" className="uw-pill-button" onClick={onClose}>Rozumiem <span aria-hidden="true">↓</span></button>}
      </div>
    </div>
  );
};
