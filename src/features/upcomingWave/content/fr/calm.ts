import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '« The Coming Wave »' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: 'POUR ÊTRE HONNÊTE',
  title: { lead: 'Exagérons-nous ?', accent: 'Peut-être. C’est pour ça qu’on attache sa ceinture.' },
  blocks: [
      { kind: 'quote', quote: 'S’il est impossible de l’endiguer, les conséquences pour notre espèce sont dramatiques, potentiellement terribles. Mais sans ses fruits, nous sommes tout aussi exposés et vulnérables.', person: 'Mustafa Suleyman', role: '« The Coming Wave », chap. 1', source: sources.book },
      {
        kind: 'evidence',
        title: 'Des raisons de rester calme',
        items: [
          { kicker: 'Daron Acemoglu · MIT, prix Nobel', value: '~1 %', text: 'c’est son estimation de ce que l’IA ajoutera au PIB en 10 ans - une évolution, pas une révolution.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'Fed de New York · 2026', text: 'L’IA n’est pas encore le principal moteur du ralentissement des embauches.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: 'Forum économique mondial', value: '+170 / −92 M', text: 'emplois créés et supprimés d’ici 2030, selon une enquête auprès des employeurs (toutes tendances confondues, pas seulement l’IA).', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'Dario Amodei · 2026', text: '« Si vous automatisez 90 % d’un métier, alors tout le monde fait les 10 % restants » - et ces 10 % s’étendent jusqu’à devenir le métier entier.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'Mustafa Suleyman · chap. 12', text: '« Ne vous y trompez pas : l’immobilisme, en soi, est synonyme de désastre. » La promesse de la technologie, écrit-il, est qu’« elle améliore la vie, les bénéfices l’emportant de loin sur les coûts et les inconvénients ».', source: sources.book },
          { kicker: 'Sam Altman · 2026', text: '« Je suis ravi d’avoir tort sur ce point » - jusqu’ici, moins de licenciements qu’il ne l’avait prédit.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
  ] satisfies BandBlock[] as BandBlock[],
};
