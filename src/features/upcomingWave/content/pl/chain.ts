import type { ChainStepId } from '../../types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'work', target: 'who-will-resist', label: 'Praca' },
  { id: 'income', target: 'become-a-plumber', label: 'Dochód' },
  { id: 'shopping', target: 'no-paycheck', label: 'Zakupy' },
  { id: 'taxes', target: 'state-lives-on-work', label: 'Podatki' },
  { id: 'trust', target: 'it-happened-before', label: 'Zaufanie' },
  { id: 'ai', target: 'ai-builds-ai', label: 'AI buduje AI' },
  { id: 'control', target: 'out-of-the-test', label: 'Kontrola' },
  { id: 'people', target: 'not-needed', label: 'Ludzie' },
  { id: 'state', target: 'two-roads', label: 'Państwo' },
  { id: 'rules', target: 'rules', label: 'Zasady' },
];
