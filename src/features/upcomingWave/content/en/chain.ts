import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: 'Stakes' },
  { id: 'work', target: 'who-will-resist', label: 'Work' },
  { id: 'money', target: 'state-lives-on-work', label: 'Money' },
  { id: 'speed', target: 'out-of-the-test', label: 'Speed' },
  { id: 'power', target: 'not-needed', label: 'Who decides' },
  { id: 'rules', target: 'rules', label: 'Rules' },
];
