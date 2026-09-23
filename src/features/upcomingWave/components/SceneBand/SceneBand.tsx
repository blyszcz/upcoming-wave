'use client';

import type { BandBlock, ChainStepId } from '@features/upcomingWave/types/scene.types';

import { BarCompare } from '@features/upcomingWave/components/BarCompare/BarCompare';
import { Contrast } from '@features/upcomingWave/components/Contrast/Contrast';
import { EvidenceGrid } from '@features/upcomingWave/components/EvidenceGrid/EvidenceGrid';
import { LoopDiagram } from '@features/upcomingWave/components/LoopDiagram/LoopDiagram';
import { QuoteBand } from '@features/upcomingWave/components/QuoteBand/QuoteBand';
import { Scissors } from '@features/upcomingWave/components/Scissors/Scissors';
import { StatRow } from '@features/upcomingWave/components/StatRow/StatRow';
import { TaxSplit } from '@features/upcomingWave/components/TaxSplit/TaxSplit';
import { Timeline } from '@features/upcomingWave/components/Timeline/Timeline';
import { useContent } from '@features/upcomingWave/content/ContentProvider';


type SceneBandProps = { id: string; chain?: ChainStepId; blocks: BandBlock[] };

export const BandBlocks = ({ blocks }: { blocks: BandBlock[] }) => (
  <>{blocks.map((block, index) => <div key={`${block.kind}-${index}`} className={`uw-block is-${block.kind}`}>{renderBlock(block)}</div>)}</>
);

const renderBlock = (block: BandBlock) => {
  switch (block.kind) {
    case 'stats': return <StatRow items={block.items} />;
    case 'evidence': return <EvidenceGrid title={block.title} items={block.items} />;
    case 'quote': return <QuoteBand {...block} />;
    case 'loop': return <LoopDiagram {...block} />;
    case 'bars': return <BarCompare {...block} />;
    case 'taxSplit': return <TaxSplit {...block} />;
    case 'scissors': return <Scissors {...block} />;
    case 'timeline': return <Timeline {...block} />;
    case 'contrast': return <Contrast {...block} />;
    case 'statement': return <p className="uw-statement">{block.text}</p>;
  }
};

export const SceneBand = ({ id, chain, blocks }: SceneBandProps) => {
  const { ui } = useContent();

  return (
  <section id={id} data-chain={chain} className="uw-band" aria-label={ui.factsAria}>
    <BandBlocks blocks={blocks} />
  </section>
  );
};
