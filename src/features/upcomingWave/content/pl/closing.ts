import type { BandBlock, SceneStatus } from '../../types/scene.types';

const book = { label: '„Nadchodząca fala”' };

export const split = {
  id: 'two-roads',
  number: '11',
  label: 'KTO WTEDY RZĄDZI',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Kto wtedy rządzi?', accent: 'Dwie drogi.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Opuszczony urząd: zamknięte okienka, puste krzesła, papiery na podłodze.',
    label: 'Puste państwo',
    text: 'Urzędy i wybory są, ale państwo przestaje działać. Usługi kurczą się do minimum, rośnie chaos.',
    quote: '„twory podobne do zombie”',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Miasto nocą pod kamerami i dronami, które skanują tłum.',
    label: 'Państwo pełnej kontroli',
    text: 'Zaczyna się niewinnie: kamery dla bezpieczeństwa, AI do łapania przestępców. Krok po kroku władza wie o nas wszystko.',
    quote: '„Mnożące się awarie technologii na mniejszą skalę pociągną za sobą apele o zacieśnienie nadzoru.”',
  },
  path: { label: 'Wąska ścieżka', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Z czasem skutki tych technologii popchną ludzkość w stan zawieszenia pomiędzy biegunami katastrofy i dystopii. Oto wielki dylemat naszych czasów.', person: 'Mustafa Suleyman', role: '„Nadchodząca fala”, rozdz. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'światowego PKB — tyle wynoszą łączne przychody firm z listy Fortune Global 500 (rozdz. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Ludzie z różnych stron świata stoją wokół okrągłego stołu o zmierzchu i układają świetliste pierścienie wokół jasnego rdzenia.',
  label: 'CO JA MOGĘ',
  title: { lead: 'Nie zatrzymać postępu.', accent: 'Ustalić granice.' },
  quote: '„To nie jej los właśnie się decyduje, tylko nasz.”',
  quoteSource: 'Mustafa Suleyman, „Nadchodząca fala”',
  follow: {
    lead: 'Chcesz wiedzieć, co dalej? Nowe dane, incydenty i zasady — piszę o tym na X.',
    label: 'Obserwuj @blyzbyte na X',
    href: 'https://x.com/blyzbyte',
  },
};
