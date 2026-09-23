import type { ChainStepId } from '../../types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'praca', target: 'praca', label: 'Praca' },
  { id: 'dochod', target: 'hydraulik', label: 'Dochód' },
  { id: 'zakupy', target: 'popyt', label: 'Zakupy' },
  { id: 'podatki', target: 'panstwo', label: 'Podatki' },
  { id: 'zaufanie', target: 'historia', label: 'Zaufanie' },
  { id: 'ai', target: 'przyspieszenie', label: 'AI buduje AI' },
  { id: 'kontrola', target: 'wyrwala', label: 'Kontrola' },
  { id: 'ludzie', target: 'niepotrzebni', label: 'Ludzie' },
  { id: 'panstwo', target: 'dwie-drogi', label: 'Państwo' },
  { id: 'zasady', target: 'zasady', label: 'Zasady' },
];
