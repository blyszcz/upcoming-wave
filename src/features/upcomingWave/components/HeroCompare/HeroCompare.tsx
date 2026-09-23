'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { CSSProperties, KeyboardEvent, PointerEvent } from 'react';

type HeroCompareProps = {
  darkImage: string;
  darkAlt: string;
  hopeImage: string;
  hopeAlt: string;
  darkLabel: string;
  hopeLabel: string;
  aria: string;
};

const MIN = 4;
const MAX = 96;
const KEY_STEP = 5;
const LABEL_EDGE = 26;
const INTRO_DELAY_MS = 900;
const INTRO_MS = 1600;
const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value));
const restingPosition = () => (window.matchMedia('(max-width: 820px)').matches ? 50 : 62);

// Two photos of the same wave: the dark future on the left of the handle, the hopeful one on the right.
export const HeroCompare = ({ darkImage, darkAlt, hopeImage, hopeAlt, darkLabel, hopeLabel, aria }: HeroCompareProps) => {
  const [position, setPosition] = useState(MAX);
  const dragging = useRef(false);
  const touched = useRef(false);
  const frame = useRef<number | null>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = restingPosition();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setPosition(target); return; }
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        if (touched.current) return;
        const t = Math.min(1, (now - start) / INTRO_MS);
        const eased = 1 - (1 - t) ** 3;
        setPosition(MAX - (MAX - target) * eased);
        if (t < 1) frame.current = requestAnimationFrame(tick);
      };
      frame.current = requestAnimationFrame(tick);
    }, INTRO_DELAY_MS);
    return () => { window.clearTimeout(timeout); if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  const moveTo = useCallback((clientX: number) => {
    const rect = dividerRef.current?.parentElement?.getBoundingClientRect();
    if (!rect) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    touched.current = true;
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => { if (dragging.current) moveTo(event.clientX); };
  const onPointerUp = () => { dragging.current = false; };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = { ArrowLeft: position - KEY_STEP, ArrowRight: position + KEY_STEP, Home: MIN, End: MAX };
    if (!(event.key in moves)) return;
    event.preventDefault();
    touched.current = true;
    setPosition(clamp(moves[event.key]));
  };

  const style = { '--pos': `${position}%` } as CSSProperties;

  return (
    <>
      <div className="uw-compare" style={style}>
        <img className="uw-hero-image" src={darkImage} alt={darkAlt} fetchPriority="high" />
        <img className="uw-hero-image uw-compare-hope" src={hopeImage} alt={hopeAlt} />
      </div>
      <div className="uw-hero-shade" aria-hidden="true" />
      <div ref={dividerRef} className="uw-compare-divider" style={style}>
        <span className="uw-compare-label is-dark" data-hidden={position < LABEL_EDGE} aria-hidden="true">{darkLabel}</span>
        <div
          className="uw-compare-handle"
          role="slider"
          tabIndex={0}
          aria-label={aria}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${darkLabel} ${Math.round(position)}% · ${hopeLabel} ${Math.round(100 - position)}%`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
        >
          <span aria-hidden="true">‹ ›</span>
        </div>
        <span className="uw-compare-label is-hope" data-hidden={position > 100 - LABEL_EDGE} aria-hidden="true">{hopeLabel}</span>
      </div>
    </>
  );
};
