import type { BandBlock, EvidenceItem } from '../../types/scene.types';

const book = { label: '„Nadchodząca fala”' };

export const split = {
  id: 'dwie-drogi',
  number: '11',
  label: 'KTO WTEDY RZĄDZI',
  status: 'SKRAJNY SCENARIUSZ',
  title: { lead: 'Kto wtedy rządzi?', accent: 'Dwie drogi.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Opuszczony urząd: zamknięte okienka, puste krzesła, papiery na podłodze.',
    label: 'Puste państwo',
    text: 'Urzędy i wybory niby są, ale nic od nich nie zależy. Naprawdę decydują ci, którzy mają AI.',
    quote: '„twory podobne do zombie”',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Miasto nocą pod kamerami i dronami, które skanują tłum.',
    label: 'Państwo pełnej kontroli',
    text: 'Władza utrzymuje porządek, śledząc każdego z nas. Kamery i AI na każdym kroku.',
    quote: '„władza poza najbardziej drastyczne rządy totalitarne w historii”',
  },
  path: { label: 'Wąska ścieżka', href: '#zasady' },
  band: [
    { kind: 'quote', quote: 'Skutki tych technologii popchną ludzkość w stan zawieszenia pomiędzy biegunami katastrofy i dystopii. Oto wielki dylemat naszych czasów.', person: 'Mustafa Suleyman', role: '„Nadchodząca fala”, rozdz. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'światowego PKB — tyle wynoszą łączne przychody 500 największych firm świata', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const counterpoint = {
  id: 'kontrapunkt',
  number: '12',
  label: 'UCZCIWIE',
  title: { lead: 'A może przesadzamy?', accent: 'Może. I właśnie dlatego.' },
  evidence: {
    title: 'Argumenty za spokojem',
    items: [
      { kicker: 'Daron Acemoglu · MIT, noblista', value: '~1%', text: 'tyle AI doda do PKB w ciągu 10 lat — ewolucja, nie rewolucja.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
      { kicker: 'Nowojorski Fed · 2026', text: 'AI nie jest na razie głównym powodem słabszych rekrutacji.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
      { kicker: 'Światowe Forum Ekonomiczne', value: '+170 / −92 mln', text: 'miejsc pracy do 2030 r. — nowe i utracone, według badania pracodawców.', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
      { kicker: 'Sam Altman · 2026', text: '„Cieszę się, że się myliłem” — zwolnień jest na razie mniej, niż sam przewidywał.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
    ] satisfies EvidenceItem[],
  },
  statement: 'Nikt nie wie na pewno. Pasy zapinasz nie dlatego, że wiesz, że będzie wypadek. Zapinasz, bo nie wiesz.',
};

export const finale = {
  id: 'final',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Ludzie z różnych stron świata stoją wokół okrągłego stołu o zmierzchu i układają świetliste pierścienie wokół jasnego rdzenia.',
  label: 'CO JA MOGĘ',
  title: { lead: 'Nie zatrzymać postępu.', accent: 'Ustalić granice.' },
  quote: '„To nie jej los właśnie się decyduje, tylko nasz.”',
  quoteSource: 'Mustafa Suleyman, „Nadchodząca fala”',
  newsletter: {
    lead: 'Raz w miesiącu, 5 minut czytania: co ważnego zmieniło się w AI i jakie zasady powstają. Bez spamu, wypiszesz się jednym kliknięciem.',
    placeholder: 'Twój e-mail',
    button: 'Zapisz mnie',
    done: 'Zapisano ✓',
  },
};
