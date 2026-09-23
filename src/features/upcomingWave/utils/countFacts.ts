import type { BandBlock } from '@features/upcomingWave/types/scene.types';

// A card grid counts each card; any other block counts as one fact.
export const countFacts = (blocks: BandBlock[]) =>
  blocks.reduce((total, block) => total + (block.kind === 'stats' || block.kind === 'evidence' ? block.items.length : 1), 0);
