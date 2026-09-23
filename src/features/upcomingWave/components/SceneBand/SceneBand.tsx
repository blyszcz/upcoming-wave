'use client';

import { useContent } from '../../content/ContentProvider';
import { BarCompare } from '../BarCompare/BarCompare';
import { Contrast } from '../Contrast/Contrast';
import { EvidenceGrid } from '../EvidenceGrid/EvidenceGrid';
import { LoopDiagram } from '../LoopDiagram/LoopDiagram';
import { QuoteBand } from '../QuoteBand/QuoteBand';
import { Scissors } from '../Scissors/Scissors';
import { StatRow } from '../StatRow/StatRow';
import { TaxSplit } from '../TaxSplit/TaxSplit';
import { Timeline } from '../Timeline/Timeline';

import type { BandBlock, ChainStepId } from '../../types/scene.types';

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
