import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'stakes', target: 'the-stakes', label: '懸かるもの' },
  { id: 'work', target: 'who-will-resist', label: '仕事' },
  { id: 'money', target: 'state-lives-on-work', label: 'お金' },
  { id: 'speed', target: 'out-of-the-test', label: 'スピード' },
  { id: 'power', target: 'not-needed', label: '誰が決めるか' },
  { id: 'rules', target: 'rules', label: 'ルール' },
];
