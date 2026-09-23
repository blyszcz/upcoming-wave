export type StoryItem =
  | { kind: 'scene'; id: string }
  | { kind: 'acceleration' }
  | { kind: 'split' }
  | { kind: 'finale' };

export const story: StoryItem[] = [
  { kind: 'scene', id: 'zagrozenia' },
  { kind: 'scene', id: 'praca' },
  { kind: 'scene', id: 'zawody' },
  { kind: 'scene', id: 'hydraulik' },
  { kind: 'scene', id: 'popyt' },
  { kind: 'scene', id: 'panstwo' },
  { kind: 'scene', id: 'historia' },
  { kind: 'acceleration' },
  { kind: 'scene', id: 'wyrwala' },
  { kind: 'scene', id: 'niepotrzebni' },
  { kind: 'split' },
  { kind: 'scene', id: 'druga-strona' },
  { kind: 'scene', id: 'zasady' },
  { kind: 'finale' },
];
