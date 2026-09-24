import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: 'Em jogo' },
  { id: 'work', target: 'who-will-resist', label: 'Trabalho' },
  { id: 'money', target: 'state-lives-on-work', label: 'Dinheiro' },
  { id: 'speed', target: 'out-of-the-test', label: 'Velocidade' },
  { id: 'power', target: 'not-needed', label: 'Quem decide' },
  { id: 'rules', target: 'rules', label: 'Regras' },
];
