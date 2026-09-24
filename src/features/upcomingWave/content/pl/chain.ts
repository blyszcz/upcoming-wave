import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: 'Stawka' },
  { id: 'work', target: 'who-will-resist', label: 'Praca' },
  { id: 'money', target: 'state-lives-on-work', label: 'Pieniądze' },
  { id: 'speed', target: 'out-of-the-test', label: 'Tempo' },
  { id: 'power', target: 'not-needed', label: 'Kto decyduje' },
  { id: 'rules', target: 'rules', label: 'Zasady' },
];
