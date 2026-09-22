import type { Scene } from '../../types/scene.types';

export type TriptychSceneProps = {
  scene: Scene;
  onExplain: (scene: Scene, trigger: HTMLButtonElement) => void;
};
