import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '“The Coming Wave”' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: 'TO BE FAIR',
  title: { lead: 'Are we exaggerating?', accent: 'Maybe. That’s why we buckle up.' },
  blocks: [
      { kind: 'quote', quote: 'If containing it proves impossible, the consequences for our species will be dramatic, perhaps even tragic. And yet without its benefits we are weak and defenceless.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 1', source: sources.book },
      {
        kind: 'evidence',
        title: 'The case for calm',
        items: [
          { kicker: 'Daron Acemoglu · MIT, Nobel laureate', value: '~1%', text: 'is his estimate of how much AI will add to GDP over 10 years — evolution, not revolution.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'New York Fed · 2026', text: 'AI is not yet the main driver of the slowdown in hiring.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: 'World Economic Forum', value: '+170 / −92M', text: 'jobs created and lost by 2030, according to an employer survey (all trends, not just AI).', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'Dario Amodei · 2026', text: '“If you automate 90% of the job, then everyone does the 10% of the job” — and that 10% expands to become the whole job.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'Mustafa Suleyman · ch. 12', text: '“Make no mistake: stagnation equals catastrophe.” The author stresses that technology’s benefits could far outweigh its costs.', source: sources.book },
          { kicker: 'Sam Altman · 2026', text: '“I’m delighted to be wrong about this” — fewer layoffs so far than he had predicted.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
      { kind: 'statement', text: 'Nobody knows for sure. You don’t buckle up because you know there will be a crash. You buckle up because you don’t know.' },
  ] satisfies BandBlock[],
};
