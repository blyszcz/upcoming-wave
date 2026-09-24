'use client';

import type { HeroCompareProps } from './HeroCompare.types';
import type { CSSProperties } from 'react';

import { COMPARE_LABEL_EDGE, COMPARE_MAX, COMPARE_MIN, COMPARE_TEXT_COLUMN, MOBILE_QUERY } from '@/constants';
import { ResponsiveImage } from '@features/upcomingWave/components/ResponsiveImage/ResponsiveImage';
import { useCompareSlider } from '@features/upcomingWave/hooks/useCompareSlider';
import { useMediaQuery } from '@features/upcomingWave/hooks/useMediaQuery';

// Two photos of the same wave: the dark future left of the handle, the hopeful one to the right.
export const HeroCompare = ({ darkImage, darkAlt, hopeImage, hopeAlt, darkLabel, hopeLabel, aria }: HeroCompareProps) => {
  const { position, isReady, trackRef, handlePointerDown, handlePointerMove, handlePointerUp, handleKeyDown } = useCompareSlider();
  const isNarrow = useMediaQuery(MOBILE_QUERY);
  // Labels would cover the headline while the handle sits over the text column.
  const isOverText = position < COMPARE_TEXT_COLUMN && !isNarrow;
  const rounded = Math.round(position);
  const style = isReady ? ({ '--pos': `${position}%` } as CSSProperties) : undefined;

  return (
    <>
      <div className="uw-compare" style={style}>
        <ResponsiveImage className="uw-hero-image" src={darkImage} alt={darkAlt} sizes="100vw" fetchPriority="high" />
        <ResponsiveImage className="uw-hero-image uw-compare-hope" src={hopeImage} alt={hopeAlt} sizes="100vw" fetchPriority="high" />
      </div>
      <div className="uw-hero-shade" aria-hidden="true" />
      <div ref={trackRef} className="uw-compare-divider" style={style}>
        <span className="uw-compare-label is-dark" data-hidden={position < COMPARE_LABEL_EDGE || isOverText} aria-hidden="true">{darkLabel}</span>
        <div
          className="uw-compare-handle"
          role="slider"
          tabIndex={0}
          aria-label={aria}
          aria-valuemin={COMPARE_MIN}
          aria-valuemax={COMPARE_MAX}
          aria-valuenow={rounded}
          aria-valuetext={`${darkLabel} ${rounded}% · ${hopeLabel} ${100 - rounded}%`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          <span aria-hidden="true">‹ ›</span>
        </div>
        <span className="uw-compare-label is-hope" data-hidden={position > 100 - COMPARE_LABEL_EDGE || isOverText} aria-hidden="true">{hopeLabel}</span>
      </div>
    </>
  );
};
