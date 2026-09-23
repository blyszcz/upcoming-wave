import type { ChainStepId } from '@features/upcomingWave/types/scene.types';

export const chain: { id: ChainStepId; label: string; target: string }[] = [
  { id: 'work', target: 'who-will-resist', label: 'Work' },
  { id: 'income', target: 'become-a-plumber', label: 'Income' },
  { id: 'shopping', target: 'no-paycheck', label: 'Spending' },
  { id: 'taxes', target: 'state-lives-on-work', label: 'Taxes' },
  { id: 'trust', target: 'it-happened-before', label: 'Trust' },
  { id: 'ai', target: 'ai-builds-ai', label: 'AI builds AI' },
  { id: 'control', target: 'out-of-the-test', label: 'Control' },
  { id: 'people', target: 'not-needed', label: 'People' },
  { id: 'state', target: 'two-roads', label: 'The state' },
  { id: 'rules', target: 'rules', label: 'Rules' },
];
