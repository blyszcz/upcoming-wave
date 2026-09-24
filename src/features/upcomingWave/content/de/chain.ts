import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: 'Worum es geht' },
  { id: 'work', target: 'who-will-resist', label: 'Arbeit' },
  { id: 'money', target: 'state-lives-on-work', label: 'Geld' },
  { id: 'speed', target: 'out-of-the-test', label: 'Tempo' },
  { id: 'power', target: 'not-needed', label: 'Wer entscheidet' },
  { id: 'rules', target: 'rules', label: 'Regeln' },
];
