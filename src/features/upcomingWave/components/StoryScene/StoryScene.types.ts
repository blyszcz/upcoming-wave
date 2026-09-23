import type { Scene } from '../../types/scene.types';

export type StorySceneProps = {
  scene: Scene;
  onExplain: (scene: Scene, trigger: HTMLButtonElement) => void;
};
