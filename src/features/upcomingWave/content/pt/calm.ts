import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '“The Coming Wave”' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: 'PARA SER JUSTO',
  title: { lead: 'Estamos exagerando?', accent: 'Talvez. Por isso usamos o cinto.' },
  blocks: [
      { kind: 'quote', quote: 'Se contê-la for impossível, as consequências para a nossa espécie serão dramáticas, potencialmente terríveis. Da mesma forma, sem os seus frutos ficamos expostos e vulneráveis.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, cap. 1', source: sources.book },
      {
        kind: 'evidence',
        title: 'Argumentos pela calma',
        items: [
          { kicker: 'Daron Acemoglu · MIT, ganhador do Nobel', value: '~1%', text: 'é a estimativa dele de quanto a IA vai somar ao PIB em 10 anos - evolução, não revolução.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'Fed de Nova York · 2026', text: 'A IA ainda não é o principal motivo da desaceleração das contratações.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: 'Fórum Econômico Mundial', value: '+170 / −92 mi', text: 'empregos criados e perdidos até 2030, segundo uma pesquisa com empregadores (todas as tendências, não só a IA).', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'Dario Amodei · 2026', text: '“Se você automatiza 90% do trabalho, todo mundo passa a fazer os 10% restantes” - e esses 10% crescem até virar o trabalho inteiro.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'Mustafa Suleyman · cap. 12', text: '“Não se engane: a estagnação, por si só, significa desastre.” A promessa da tecnologia, escreve ele, é que “ela melhora vidas, com benefícios muito maiores que os custos e as desvantagens”.', source: sources.book },
          { kicker: 'Sam Altman · 2026', text: '“Fico muito feliz em estar errado sobre isso” - até agora houve menos demissões do que ele havia previsto.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
  ] satisfies BandBlock[] as BandBlock[],
};
