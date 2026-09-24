import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '„The Coming Wave“' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: 'FAIRERWEISE',
  title: { lead: 'Übertreiben wir?', accent: 'Vielleicht. Deshalb schnallen wir uns an.' },
  blocks: [
      { kind: 'quote', quote: 'Wenn es unmöglich ist, sie einzudämmen, sind die Folgen für unsere Spezies dramatisch, möglicherweise verheerend. Doch ebenso gilt: Ohne ihre Früchte sind wir schutzlos und in einer prekären Lage.', person: 'Mustafa Suleyman', role: '„The Coming Wave“, Kap. 1', source: sources.book },
      {
        kind: 'evidence',
        title: 'Was für Gelassenheit spricht',
        items: [
          { kicker: 'Daron Acemoglu · MIT, Nobelpreisträger', value: '~1 %', text: 'So viel wird KI laut seiner Schätzung in 10 Jahren zum BIP beitragen - Evolution, keine Revolution.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'New York Fed · 2026', text: 'KI ist noch nicht der Hauptgrund dafür, dass weniger eingestellt wird.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: 'Weltwirtschaftsforum', value: '+170 / −92 Mio.', text: 'Jobs entstehen bzw. verschwinden bis 2030, laut einer Umfrage unter Arbeitgebern (alle Trends, nicht nur KI).', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'Dario Amodei · 2026', text: '„Wenn man 90 % des Jobs automatisiert, dann machen alle die 10 % des Jobs“ - und diese 10 % wachsen, bis sie der ganze Job sind.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'Mustafa Suleyman · Kap. 12', text: '„Machen wir uns nichts vor: Stillstand an sich bedeutet die Katastrophe.“ Das Versprechen der Technologie sei, schreibt er, dass „sie das Leben verbessert und der Nutzen die Kosten und Nachteile bei Weitem überwiegt“.', source: sources.book },
          { kicker: 'Sam Altman · 2026', text: '„Ich bin froh, hier falschzuliegen“ - bisher gab es weniger Entlassungen, als er vorhergesagt hatte.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
  ] satisfies BandBlock[] as BandBlock[],
};
