import { BarCompare } from '../BarCompare/BarCompare';
import { EvidenceGrid } from '../EvidenceGrid/EvidenceGrid';
import { LoopDiagram } from '../LoopDiagram/LoopDiagram';
import { QuoteBand } from '../QuoteBand/QuoteBand';
import { StatRow } from '../StatRow/StatRow';

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
  }
};

export const SceneBand = ({ id, chain, blocks }: SceneBandProps) => (
  <section id={id} data-chain={chain} className="uw-band" aria-label="Fakty i źródła">
    <BandBlocks blocks={blocks} />
  </section>
);
