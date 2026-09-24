'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { KeyboardEvent, PointerEvent } from 'react';

import {
  COMPARE_HINT_DELAY_MS,
  COMPARE_HINT_MS,
  COMPARE_HINT_SWING,
  COMPARE_KEY_STEP,
  COMPARE_MAX,
  COMPARE_MIN,
  COMPARE_REST_DESKTOP,
  COMPARE_REST_MOBILE,
  MOBILE_QUERY,
  REDUCED_MOTION_QUERY,
} from '@/constants';

const clamp = (value: number) => Math.min(COMPARE_MAX, Math.max(COMPARE_MIN, value));

// Position of the before/after divider: both photos visible from the first paint, one small nudge
// to show the handle moves, then pointer drag and keyboard.
export const useCompareSlider = () => {
  const [position, setPosition] = useState(COMPARE_REST_DESKTOP);
  // Until mounted the CSS default (--pos, with a mobile override) places the divider, so there is no jump.
  const [isReady, setIsReady] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const rest = window.matchMedia(MOBILE_QUERY).matches ? COMPARE_REST_MOBILE : COMPARE_REST_DESKTOP;
    setPosition(rest);
    setIsReady(true);
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
    let frame = 0;
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        if (hasInteracted.current) return;
        const progress = Math.min(1, (now - start) / COMPARE_HINT_MS);
        setPosition(rest - COMPARE_HINT_SWING * Math.sin(progress * Math.PI));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, COMPARE_HINT_DELAY_MS);
    return () => { window.clearTimeout(timeout); cancelAnimationFrame(frame); };
  }, []);

  const moveTo = useCallback((clientX: number) => {
    const rect = trackRef.current?.parentElement?.getBoundingClientRect();
    if (rect) setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    hasInteracted.current = true;
    isDragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
  };
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => { if (isDragging.current) moveTo(event.clientX); };
  const handlePointerUp = () => { isDragging.current = false; };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const moves: Record<string, number> = { ArrowLeft: position - COMPARE_KEY_STEP, ArrowRight: position + COMPARE_KEY_STEP, Home: COMPARE_MIN, End: COMPARE_MAX };
    if (!(event.key in moves)) return;
    event.preventDefault();
    hasInteracted.current = true;
    setPosition(clamp(moves[event.key]));
  };

  return { position, isReady, trackRef, handlePointerDown, handlePointerMove, handlePointerUp, handleKeyDown };
};
