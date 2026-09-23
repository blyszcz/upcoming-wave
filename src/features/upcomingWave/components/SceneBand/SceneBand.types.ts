import type { BandBlock, ChainStepId } from '@features/upcomingWave/types/scene.types';

export type SceneBandProps = { id: string; chain?: ChainStepId; blocks: BandBlock[] };

export type BandBlocksProps = { blocks: BandBlock[] };
