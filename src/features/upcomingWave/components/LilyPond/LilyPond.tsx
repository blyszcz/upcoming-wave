'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useInView } from '@features/upcomingWave/hooks/useInView';

type LilyPondProps = { title: string; copy: string; answer: string };

const DAYS = 30;
const CELLS = 256;
const DAY_MS = 260;

const coveredCells = (day: number) => Math.min(CELLS, Math.floor(CELLS * 2 ** (day - DAYS)));

export const LilyPond = ({ title, copy, answer }: LilyPondProps) => {
  const { ui } = useContent();
  const { ref, isInView } = useInView<HTMLDivElement>(0.5);
  const [day, setDay] = useState(0);
  const timer = useRef<number | null>(null);

  const play = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setDay(DAYS); return; }
    setDay(1);
    timer.current = window.setInterval(() => {
      setDay((current) => {
        if (current >= DAYS) { if (timer.current) window.clearInterval(timer.current); return current; }
        return current + 1;
      });
    }, DAY_MS);
  }, []);

  useEffect(() => { if (isInView) play(); }, [isInView, play]);
  useEffect(() => () => { if (timer.current) window.clearInterval(timer.current); }, []);

  const covered = coveredCells(day);
  const percent = day === 0 ? 0 : (2 ** (day - DAYS)) * 100;

  return (
    <div ref={ref} className="uw-pond">
      <div className="uw-pond-copy">
        <h3 className="uw-block-title">{title}</h3>
        <p className="uw-pond-question">{copy}</p>
        <p className="uw-pond-answer" data-visible={day >= DAYS - 1}>{answer}</p>
        <button type="button" className="uw-text-button" onClick={play}>{ui.pond.replay}</button>
      </div>
      <figure className="uw-pond-figure" aria-label={ui.pond.aria(day, percent < 1 ? ui.pond.lessThanOne : String(Math.round(percent)))}>
        <div className="uw-pond-grid" aria-hidden="true">
          {Array.from({ length: CELLS }, (_, index) => <span key={index} className={index < covered ? 'is-on' : undefined} />)}
        </div>
        <figcaption>
          <b>{ui.pond.day} {String(day).padStart(2, '0')}</b>
          <span>{percent < 1 ? ui.pond.nothing : ui.pond.percentOfPond(Math.round(percent))}</span>
        </figcaption>
      </figure>
    </div>
  );
};
