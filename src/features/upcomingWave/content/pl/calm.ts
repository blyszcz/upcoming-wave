import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '„Nadchodząca fala”' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: 'UCZCIWIE MÓWIĄC',
  title: { lead: 'A może przesadzamy?', accent: 'Może. Dlatego zapinamy pasy.' },
  blocks: [
      { kind: 'quote', quote: 'Jeśli jej powstrzymanie okaże się niemożliwe, konsekwencje dla naszego gatunku będą dramatyczne, a nawet być może tragiczne. Zarazem jednak bez jej dobrodziejstw jesteśmy słabi i bezbronni.', person: 'Mustafa Suleyman', role: '„Nadchodząca fala”, rozdz. 1', source: sources.book },
      {
        kind: 'evidence',
        title: 'Argumenty za spokojem',
        items: [
          { kicker: 'Daron Acemoglu · MIT, noblista', value: '~1%', text: 'tyle jego zdaniem AI doda do PKB w ciągu 10 lat - ewolucja, nie rewolucja.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'Nowojorski Fed · 2026', text: 'AI nie jest na razie główną przyczyną tego, że firmy mniej zatrudniają.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: 'Światowe Forum Ekonomiczne', value: '+170 / −92 mln', text: 'miejsc pracy do 2030 r. - nowe i utracone, według badania pracodawców (wszystkie trendy, nie tylko AI).', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'Dario Amodei · 2026', text: '„Jeśli zautomatyzujesz 90% pracy, wszyscy robią pozostałe 10%” - a te 10% rozrasta się, aż staje się całą pracą.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'Mustafa Suleyman · rozdz. 12', text: '„Nie łudźmy się: zastój równa się katastrofie.” Obietnicą technologii - pisze - jest to, że poprawia życie, a korzyści daleko przewyższają koszty i minusy.', source: sources.book },
          { kicker: 'Sam Altman · 2026', text: '„Cieszę się, że się myliłem” - zwolnień jest na razie mniej, niż sam przewidywał.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
  ] satisfies BandBlock[] as BandBlock[],
};
