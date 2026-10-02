import type { BandBlock } from '@features/upcomingWave/types/scene.types';

// How much is behind "Read more": each stat, evidence item and quote counts once, each chart or timeline once.
export const countFacts = (blocks: BandBlock[] = []) => blocks.reduce((total, block) => {
  if (block.kind === 'stats' || block.kind === 'evidence') return total + block.items.length;
  if (block.kind === 'statement') return total;
  return total + 1;
}, 0);
