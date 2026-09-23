export type StoryItem =
  | { kind: 'scene'; id: string }
  | { kind: 'acceleration' }
  | { kind: 'split' }
  | { kind: 'calm' }
  | { kind: 'finale' };

export const story: StoryItem[] = [
  { kind: 'scene', id: 'the-stakes' },
  { kind: 'scene', id: 'three-risks' },
  { kind: 'scene', id: 'who-will-resist' },
  { kind: 'scene', id: 'not-just-code' },
  { kind: 'scene', id: 'become-a-plumber' },
  { kind: 'scene', id: 'no-paycheck' },
  { kind: 'scene', id: 'state-lives-on-work' },
  { kind: 'scene', id: 'it-happened-before' },
  { kind: 'acceleration' },
  { kind: 'scene', id: 'out-of-the-test' },
  { kind: 'scene', id: 'not-needed' },
  { kind: 'split' },
  { kind: 'calm' },
  { kind: 'scene', id: 'rules' },
  { kind: 'finale' },
];
