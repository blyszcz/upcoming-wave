export type SceneStatus = 'DZIŚ' | 'MOŻLIWY SCENARIUSZ' | 'MOŻLIWE SCENARIUSZE' | 'SKRAJNY SCENARIUSZ' | 'ODPOWIEDŹ';

export type ScenePanel = {
  image: string;
  label: string;
  alt: string;
  focus?: string;
};

export type ExplainStep = {
  image: string;
  alt: string;
  title: string;
  copy: string;
};

export type Scene = {
  id: string;
  number: string;
  label: string;
  status: SceneStatus;
  title: { lead: string; accent: string };
  panels: ScenePanel[];
  explain: ExplainStep[];
};
