export type StoryItem =
  | { kind: 'scene'; id: string }
  | { kind: 'acceleration' }
  | { kind: 'split' }
  | { kind: 'calm' }
  | { kind: 'finale' };

// Four chapters, each pairing a risk with what good rules change. Older section kinds stay
// supported so the dev-only archive keeps rendering.
export const story: StoryItem[] = [
  { kind: 'scene', id: 'the-stakes' },
  { kind: 'scene', id: 'who-will-resist' },
  { kind: 'scene', id: 'state-lives-on-work' },
  { kind: 'scene', id: 'out-of-the-test' },
  { kind: 'scene', id: 'not-needed' },
  { kind: 'scene', id: 'rules' },
  { kind: 'finale' },
];
