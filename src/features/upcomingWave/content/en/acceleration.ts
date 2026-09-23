import type { HorizonPoint } from '../pl/acceleration';
import type { EvidenceItem, SceneStatus, Source } from '../../types/scene.types';

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4 minutes', note: 'making a coffee' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2 hours', note: 'a long meeting' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12 hours', note: 'more than a working day' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'ai-builds-ai',
  label: 'HOW FAST IS IT MOVING',
  status: 'today' as SceneStatus,
  title: { lead: 'AI is learning to build AI.', accent: 'And it’s speeding up.' },
  pond: {
    title: 'The pond riddle',
    copy: 'Lilies on a pond double every day. After 30 days they cover the whole pond. On which day did they cover half of it?',
    answer: 'Day 29. With doubling, almost everything happens at the very end.',
  },
  chart: {
    title: 'How long a task AI can do on its own',
    subtitle: 'Since 2023: twice as long roughly every 4 months.',
    doublingMonths: 4.2,
    note: 'METR measurements: how long a task (measured in human working time) the best models complete on their own in half of attempts. Measurements above 16 hours are uncertain — the test tasks are too short. The dashed line is a scenario, not a measurement.',
    source: metr,
  },
  evidence: {
    title: 'Self-improvement has already started',
    items: [
      { kicker: 'Anthropic · May 2026', value: '80%+', text: 'of the company’s code is now written by Claude. In early 2025 it was a few percent.', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · September 2026', value: 'AI intern', text: 'The company says it has an AI research intern. It plans an automated AI researcher for 2028.', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4 – 5×', text: 'per year — the growth of computing power used to train the best models.', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'Since roughly this summer, AI has been advancing drastically faster, driven primarily by AI’s growing ability to build the next generation of AI. This dynamic is called recursive self-improvement, and it is starting to happen across the industry.', person: 'Dario Amodei', role: 'CEO, Anthropic · September 2026', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: 'The first ultraintelligent machine is the last invention that man need ever make, provided that the machine is docile enough to tell us how to keep it under control.', person: 'I. J. Good', role: 'mathematician, Alan Turing’s colleague · 1965', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
