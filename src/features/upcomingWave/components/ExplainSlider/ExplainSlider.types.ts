import type { Scene } from '@features/upcomingWave/types/scene.types';

export type ExplainSliderProps = {
  scene: Scene;
  onClose: () => void;
  startStep?: number;
};
