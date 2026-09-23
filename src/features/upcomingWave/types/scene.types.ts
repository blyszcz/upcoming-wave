export type SceneStatus = 'today' | 'history' | 'incident' | 'possible' | 'possibleMany' | 'extreme' | 'answer';

export type ChainStepId = 'work' | 'income' | 'shopping' | 'taxes' | 'trust' | 'ai' | 'control' | 'people' | 'state' | 'rules';

export type Source = { label: string; url?: string };

export type ScenePanel = {
  image: string;
  label: string;
  alt: string;
  caption?: string;
  focus?: string;
};

export type ExplainStep = {
  image: string;
  alt: string;
  label: string;
  title: string;
  copy: string;
};

export type StatItem = { value: string; label: string; source: Source };
export type EvidenceItem = { kicker: string; value?: string; text: string; source: Source };
export type BarItem = { label: string; value: number; display: string; highlight?: boolean };
export type TaxPart = { label: string; detail?: string; value: number; highlight?: boolean };
export type TimelineStep = { title: string; text: string };

type BandBlockBody =
  | { kind: 'stats'; items: StatItem[] }
  | { kind: 'evidence'; title: string; items: EvidenceItem[] }
  | { kind: 'quote'; quote: string; person: string; role: string; source: Source }
  | { kind: 'loop'; title: string; steps: string[]; caption: string }
  | { kind: 'bars'; title: string; subtitle: string; bars: BarItem[]; caption: string; source: Source }
  | { kind: 'taxSplit'; title: string; subtitle: string; parts: TaxPart[]; caption: string; countries: { name: string; value: number }[]; countriesLabel: string; source: Source }
  | { kind: 'scissors'; title: string; income: string; spending: string; caption: string }
  | { kind: 'timeline'; title: string; steps: TimelineStep[]; footnote: string; sources: Source[] }
  | { kind: 'contrast'; title: string; left: { label: string; steps: string[] }; right: { label: string; steps: string[] } }
  | { kind: 'statement'; text: string };

export type BandBlock = BandBlockBody;

export type Scene = {
  id: string;
  label: string;
  status: SceneStatus;
  chain?: ChainStepId;
  layout: 'triptych' | 'mosaic';
  title: { lead: string; accent: string };
  panels: ScenePanel[];
  explain: ExplainStep[];
  band?: BandBlock[];
};
