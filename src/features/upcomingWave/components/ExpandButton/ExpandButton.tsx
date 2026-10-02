'use client';

import clsx from 'clsx';

import type { ExpandButtonProps } from './ExpandButton.types';

import { useContent } from '@features/upcomingWave/content/ContentProvider';

// "Read more" says how much is inside; the primary variant is the solid call to action under a chapter's photos.
export const ExpandButton = ({ isOpen, controls, onToggle, count, variant }: ExpandButtonProps) => {
  const { ui } = useContent();

  return (
    <button type="button" className={clsx('uw-disclosure-toggle uw-expand', !isOpen && 'is-closed', variant === 'primary' && 'is-primary')} aria-expanded={isOpen} aria-controls={controls} onClick={onToggle}>
      <span>{isOpen ? ui.showLess : ui.readMore}</span>
      {!isOpen && count ? <small>{ui.factsCount(count)}</small> : null}
      <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
    </button>
  );
};
