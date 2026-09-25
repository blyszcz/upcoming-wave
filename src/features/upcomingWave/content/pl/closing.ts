import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

const book = { label: '„Nadchodząca fala”' };

export const split = {
  id: 'two-roads',
  label: 'KTO WTEDY RZĄDZI',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Kto wtedy rządzi?', accent: 'Dwie drogi.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Opuszczony urząd: zamknięte okienka, puste krzesła, papiery na podłodze.',
    label: 'Puste państwo',
    text: 'Urzędy i wybory wciąż są, ale państwo przestaje działać. Usługi kurczą się do minimum, rośnie chaos.',
    quote: '„twory podobne do zombie”',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Miasto nocą pod kamerami i dronami, które skanują tłum.',
    label: 'Państwo pełnej kontroli',
    text: 'Zaczyna się niewinnie: kamery dla bezpieczeństwa, AI do łapania przestępców. Krok po kroku władza dowiaduje się o nas wszystkiego.',
    quote: '„Mnożące się awarie technologii na mniejszą skalę pociągną za sobą apele o zacieśnienie nadzoru.”',
  },
  path: { label: 'Wąska ścieżka', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Z czasem skutki tych technologii popchną ludzkość w stan zawieszenia pomiędzy biegunami katastrofy i dystopii. Oto wielki dylemat naszych czasów.', person: 'Mustafa Suleyman', role: '„Nadchodząca fala”, rozdz. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'światowego PKB - tyle wynoszą już łączne przychody firm z listy Global 500 magazynu „Fortune” (rozdz. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Ludzie z różnych stron świata stoją wokół okrągłego stołu o zmierzchu i układają świetliste pierścienie wokół jasnego rdzenia.',
  label: 'CO MOGĘ ZROBIĆ',
  title: { lead: 'Nie zatrzymujmy postępu.', accent: 'Wyznaczmy mu granice.' },
  quote: 'Pasy zapinasz nie dlatego, że wiesz, że będzie wypadek. Zapinasz je, bo nie wiesz.',
  rules: { title: 'Jak wyglądają dobre zasady', items: ['Niezależne testy, zanim AI trafi do milionów ludzi', 'Jasna odpowiedzialność, gdy system AI wyrządzi szkodę', 'Uczciwy podział zysków z AI - przez podatki i prawdziwą siatkę bezpieczeństwa'] },
  actions: { title: 'Co możesz zrobić', items: ['Wyślij to jednej osobie, która jeszcze się nad tym nie zastanawiała', 'Zapytaj polityków, którzy cię reprezentują, jakie mają stanowisko w sprawie zasad dla AI', 'Gdy firmy AI publikują plany bezpieczeństwa - czytaj je i zadawaj pytania'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
