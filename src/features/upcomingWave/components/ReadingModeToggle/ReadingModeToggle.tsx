'use client';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useReadingMode } from '@features/upcomingWave/context/ReadingModeContext';

export const ReadingModeToggle = () => {
  const { ui } = useContent();
  const { isFull, toggle } = useReadingMode();

  return (
    <button type="button" className="uw-mode-toggle" aria-pressed={isFull} aria-label={ui.readingMode.aria} onClick={toggle}>
      <span className={isFull ? undefined : 'is-active'}>{ui.readingMode.toShort}</span>
      <span className={isFull ? 'is-active' : undefined}>{ui.readingMode.toFull}</span>
    </button>
  );
};
