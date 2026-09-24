import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: 'En juego' },
  { id: 'work', target: 'who-will-resist', label: 'Trabajo' },
  { id: 'money', target: 'state-lives-on-work', label: 'Dinero' },
  { id: 'speed', target: 'out-of-the-test', label: 'Velocidad' },
  { id: 'power', target: 'not-needed', label: 'Quién decide' },
  { id: 'rules', target: 'rules', label: 'Reglas' },
];
