'use client';

import clsx from 'clsx';

import type { StorySceneProps } from './StoryScene.types';
import type { ScenePanel } from '@features/upcomingWave/types/scene.types';
import type { CSSProperties } from 'react';

import { SceneBand } from '@features/upcomingWave/components/SceneBand/SceneBand';
import { SectionAnchor } from '@features/upcomingWave/components/SectionAnchor/SectionAnchor';
import { useContent } from '@features/upcomingWave/content/ContentProvider';
import { useInView } from '@features/upcomingWave/hooks/useInView';


const PanelImage = ({ panel }: { panel: ScenePanel }) => (
  <div className="uw-panel-media">
    <img src={panel.image} alt={panel.alt} loading="lazy" style={panel.focus ? { objectPosition: panel.focus } : undefined} />
  </div>
);

export const StoryScene = ({ scene, number, onExplain }: StorySceneProps) => {
  const { ui } = useContent();
  const { ref, isInView } = useInView<HTMLElement>(0.2);
  const isMosaic = scene.layout === 'mosaic';

  return (
    <>
      <section ref={ref} id={scene.id} data-chain={scene.chain} className={clsx('uw-scene', isMosaic && 'is-mosaic', isInView && 'is-in-view')} aria-labelledby={`${scene.id}-title`}>
        <div className="uw-scene-copy">
          <p className="uw-eyebrow"><SectionAnchor sectionId={scene.id} />{number} / {scene.label}<b>{ui.status[scene.status]}</b></p>
          <h2 id={`${scene.id}-title`} className="uw-title">{scene.title.lead} <em>{scene.title.accent}</em></h2>
          <button type="button" className="uw-explain-button" onClick={(event) => onExplain(scene, event.currentTarget)}>
            {ui.why} <span aria-hidden="true">→</span>
          </button>
        </div>

        {isMosaic ? (
          <ul className="uw-mosaic">
            {scene.panels.map((panel, index) => (
              <li key={panel.image} className="uw-panel uw-tile" style={{ '--i': index } as CSSProperties}>
                <PanelImage panel={panel} />
                <p className="uw-tile-label"><b>{panel.label}</b>{panel.caption && <span>{panel.caption}</span>}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ol className="uw-panels" aria-label={ui.stepsAria}>
            {scene.panels.map((panel, index) => (
              <li key={panel.image} className="uw-panel" style={{ '--i': index } as CSSProperties}>
                <PanelImage panel={panel} />
                <p className="uw-panel-label"><span>{String(index + 1).padStart(2, '0')}</span>{panel.label}</p>
                {index < scene.panels.length - 1 && <span className="uw-arrow" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        )}
      </section>
      {scene.band && <SceneBand id={`${scene.id}-facts`} chain={scene.chain} blocks={scene.band} />}
    </>
  );
};
