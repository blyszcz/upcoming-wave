import type { Content } from '@features/upcomingWave/content/pl';
import type { BandBlock, Source } from '@features/upcomingWave/types/scene.types';

export type SourceGroup = { id: string; title: string; sources: Source[] };

const blockSources = (block: BandBlock): Source[] => {
  switch (block.kind) {
    case 'stats':
    case 'evidence': return block.items.map((item) => item.source);
    case 'quote':
    case 'bars':
    case 'taxSplit': return [block.source];
    case 'timeline': return block.sources;
    default: return [];
  }
};

const sourceKey = (source: Source) => source.url ?? source.label;

// Every source in page order, grouped by section — powers footnote numbers and the sources page.
export const collectSources = (content: Content): SourceGroup[] => {
  const { voices, ui, story, scenes, acceleration, split, calm } = content;
  const groups: SourceGroup[] = [{ id: 'voices', title: `${ui.voices.titleLead} ${ui.voices.titleAccent}`, sources: voices.map((voice) => voice.source) }];

  story.forEach((item) => {
    if (item.kind === 'scene') {
      const scene = scenes.find((candidate) => candidate.id === item.id);
      if (scene?.band) groups.push({ id: scene.id, title: `${scene.title.lead} ${scene.title.accent}`, sources: scene.band.flatMap(blockSources) });
    }
    if (item.kind === 'acceleration') {
      groups.push({ id: acceleration.id, title: `${acceleration.title.lead} ${acceleration.title.accent}`, sources: [acceleration.chart.source, ...acceleration.evidence.items.map((entry) => entry.source), ...acceleration.quotes.map((quote) => quote.source)] });
    }
    if (item.kind === 'split') groups.push({ id: split.id, title: `${split.title.lead} ${split.title.accent}`, sources: split.band.flatMap(blockSources) });
    if (item.kind === 'calm') groups.push({ id: calm.id, title: `${calm.title.lead} ${calm.title.accent}`, sources: calm.blocks.flatMap(blockSources) });
  });

  return groups.map((group) => ({ ...group, sources: group.sources.filter((source, index, list) => list.findIndex((other) => sourceKey(other) === sourceKey(source)) === index) }));
};

const indexCache = new WeakMap<Content, Map<string, number>>();

// Footnote number per source, stable across the page (first appearance wins).
export const getSourceNumber = (content: Content, source: Source) => {
  let index = indexCache.get(content);
  if (!index) {
    index = new Map();
    for (const group of collectSources(content)) {
      for (const entry of group.sources) if (!index.has(sourceKey(entry))) index.set(sourceKey(entry), index.size + 1);
    }
    indexCache.set(content, index);
  }
  return index.get(sourceKey(source)) ?? 0;
};
