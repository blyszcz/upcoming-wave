'use client';

import type { ExpandButtonProps } from './ExpandButton.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';

export const ExpandButton = ({ isOpen, controls, onToggle }: ExpandButtonProps) => {
  const { ui } = useContent();

  return (
    <button type="button" className="uw-disclosure-toggle uw-expand" aria-expanded={isOpen} aria-controls={controls} onClick={onToggle}>
      <span>{isOpen ? ui.showLess : ui.readMore}</span>
      <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
    </button>
  );
};
