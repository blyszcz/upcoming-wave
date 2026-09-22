'use client';

import clsx from '../../lib/clsx';
import { useInView } from '../../hooks/useInView';

import type { TriptychSceneProps } from './TriptychScene.types';

export const TriptychScene = ({ scene, onExplain }: TriptychSceneProps) => {
  const { ref, isInView } = useInView<HTMLElement>(0.2);

  return (
    <section ref={ref} id={scene.id} className={clsx('uw-scene', isInView && 'is-in-view')} aria-labelledby={`${scene.id}-title`}>
      <div className="uw-scene-copy">
        <p className="uw-eyebrow">{scene.number} / {scene.label}<b>{scene.status}</b></p>
        <h2 id={`${scene.id}-title`} className="uw-title">
          {scene.title.lead} <em>{scene.title.accent}</em>
        </h2>
        <button type="button" className="uw-explain-button" onClick={(event) => onExplain(scene, event.currentTarget)}>
          Dlaczego? <span aria-hidden="true">→</span>
        </button>
      </div>

      <ol className="uw-panels" aria-label="Co się dzieje, krok po kroku">
        {scene.panels.map((panel, index) => (
          <li key={panel.image} className="uw-panel" style={{ '--i': index } as React.CSSProperties}>
            <div className="uw-panel-media"><img src={panel.image} alt={panel.alt} loading="lazy" style={panel.focus ? { objectPosition: panel.focus } : undefined} /></div>
            <p className="uw-panel-label"><span>{String(index + 1).padStart(2, '0')}</span>{panel.label}</p>
            {index < scene.panels.length - 1 && <span className="uw-arrow" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
    </section>
  );
};
