import type { ChainStepId } from '../../types/scene.types';

export const chain: { id: ChainStepId; label: string }[] = [
  { id: 'praca', label: 'Praca' },
  { id: 'dochod', label: 'Dochód' },
  { id: 'zakupy', label: 'Zakupy' },
  { id: 'podatki', label: 'Podatki' },
  { id: 'zaufanie', label: 'Zaufanie' },
  { id: 'ai', label: 'AI buduje AI' },
  { id: 'kontrola', label: 'Kontrola' },
  { id: 'ludzie', label: 'Ludzie' },
  { id: 'panstwo', label: 'Państwo' },
  { id: 'zasady', label: 'Zasady' },
];
