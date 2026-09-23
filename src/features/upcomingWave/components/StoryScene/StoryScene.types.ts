import type { Scene } from '@features/upcomingWave/types/scene.types';

export type StorySceneProps = {
  scene: Scene;
  number: string;
  onExplain: (scene: Scene, trigger: HTMLButtonElement) => void;
};
