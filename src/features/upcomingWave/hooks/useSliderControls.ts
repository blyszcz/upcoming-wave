'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { PointerEvent, RefObject } from 'react';

import { SWIPE_THRESHOLD_PX } from '@/constants';

type SliderControlsOptions = { count: number; dialogRef: RefObject<HTMLDivElement | null>; onClose: () => void };

// Modal step slider: keyboard (arrows, Home/End, Escape), swipe, focus trap and scroll lock.
export const useSliderControls = ({ count, dialogRef, onClose }: SliderControlsOptions) => {
  const [active, setActive] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const lastIndex = count - 1;

  const goTo = useCallback((index: number) => setActive(Math.min(Math.max(index, 0), lastIndex)), [lastIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.focus();
    document.body.style.overflow = 'hidden';

    const trapFocus = (event: KeyboardEvent) => {
      if (!dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>('button:not([disabled])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setActive((index) => Math.min(index + 1, lastIndex));
      if (event.key === 'ArrowLeft') setActive((index) => Math.max(index - 1, 0));
      if (event.key === 'Home') setActive(0);
      if (event.key === 'End') setActive(lastIndex);
      if (event.key === 'Tab') trapFocus(event);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [dialogRef, onClose, lastIndex]);

  const handlePointerDown = (event: PointerEvent) => { pointerStartX.current = event.clientX; };
  const handlePointerUp = (event: PointerEvent) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) goTo(active + (delta < 0 ? 1 : -1));
  };

  return { active, isFirst: active === 0, isLast: active === lastIndex, goTo, handlePointerDown, handlePointerUp };
};
