// `featured` lists which fact-band blocks stay visible in the short version; the rest fold away.
export type StoryItem =
  | { kind: 'scene'; id: string; featured?: number[] }
  | { kind: 'acceleration' }
  | { kind: 'split'; featured?: number[] }
  | { kind: 'calm'; featured?: number[] }
  | { kind: 'finale' };

export const story: StoryItem[] = [
  { kind: 'scene', id: 'the-stakes', featured: [1] },
  { kind: 'scene', id: 'three-risks' },
  { kind: 'scene', id: 'who-will-resist' },
  { kind: 'scene', id: 'not-just-code', featured: [0] },
  { kind: 'scene', id: 'become-a-plumber', featured: [1] },
  { kind: 'scene', id: 'no-paycheck', featured: [0] },
  { kind: 'scene', id: 'state-lives-on-work', featured: [0] },
  { kind: 'scene', id: 'it-happened-before', featured: [0] },
  { kind: 'acceleration' },
  { kind: 'scene', id: 'out-of-the-test', featured: [0, 2] },
  { kind: 'scene', id: 'not-needed', featured: [0] },
  { kind: 'split', featured: [0] },
  { kind: 'calm', featured: [2] },
  { kind: 'scene', id: 'rules', featured: [3] },
  { kind: 'finale' },
];
