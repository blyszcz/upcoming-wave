import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes use the English edition's wording (Crown, 2023), checked via Google Books.
const book = { label: '“The Coming Wave”' };

export const split = {
  id: 'two-roads',
  label: 'WHO’S IN CHARGE',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Who’s in charge then?', accent: 'Two roads.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'An abandoned government office: closed counters, empty chairs, papers on the floor.',
    label: 'The hollow state',
    text: 'Offices and elections still exist, but the state stops working. Services shrink to the bare minimum and chaos grows.',
    quote: '“a kind of zombie government”',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'A city at night under cameras and drones scanning the crowd.',
    label: 'The total-control state',
    text: 'It starts innocently: cameras for safety, AI to catch criminals. Step by step, the authorities come to know everything about us.',
    quote: '“As smaller-scale technology failures mount, calls for control increase.”',
  },
  path: { label: 'The narrow path', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Over time, then, the implications of these technologies will push humanity to navigate a path between the poles of catastrophe and dystopia. This is the essential dilemma of our age.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'of world GDP - the combined revenue of Fortune’s Global 500 companies (ch. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'People from around the world stand around a round table at dusk, placing glowing rings around a bright core.',
  label: 'WHAT CAN I DO',
  title: { lead: 'Don’t stop progress.', accent: 'Set its limits.' },
  quote: 'You don’t buckle up because you know there will be a crash. You buckle up because you don’t know.',
  rules: { title: 'What good rules look like', items: ['Independent testing before AI reaches millions of people', 'Clear responsibility when an AI system causes harm', 'AI’s gains shared fairly - through taxes and a real safety net'] },
  actions: { title: 'What you can do', items: ['Share this with one person who hasn’t thought about it yet', 'Ask the people who represent you where they stand on AI rules', 'When AI companies publish safety plans, read them - and ask questions'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
