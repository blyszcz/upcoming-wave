import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: 'Enjeux' },
  { id: 'work', target: 'who-will-resist', label: 'Travail' },
  { id: 'money', target: 'state-lives-on-work', label: 'Argent' },
  { id: 'speed', target: 'out-of-the-test', label: 'Vitesse' },
  { id: 'power', target: 'not-needed', label: 'Qui décide' },
  { id: 'rules', target: 'rules', label: 'Règles' },
];
