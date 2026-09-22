export type VoiceSource = { label: string; url?: string };

export type Voice = {
  id: string;
  variant: 'statement' | 'figure' | 'wide' | 'plain';
  image: string;
  imageAlt: string;
  figure?: string;
  figureCaption?: string;
  quotes: string[];
  // English originals are kept for fact-checking and future translations; they are not rendered.
  originals?: string[];
  person: string;
  role: string;
  context: string;
  source: VoiceSource;
  signatories?: string[];
};
