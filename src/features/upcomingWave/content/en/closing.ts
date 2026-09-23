import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes below are translated from the Polish edition — verify against the English edition before publishing.
const book = { label: '“The Coming Wave”' };

export const split = {
  id: 'two-roads',
  label: 'WHO RULES THEN',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Who rules then?', accent: 'Two roads.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'An abandoned government office: closed counters, empty chairs, papers on the floor.',
    label: 'The hollow state',
    text: 'Offices and elections still exist, but the state stops working. Services shrink to a minimum and chaos grows.',
    quote: '“zombie-like” states',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'A city at night under cameras and drones scanning the crowd.',
    label: 'The total-control state',
    text: 'It starts innocently: cameras for safety, AI to catch criminals. Step by step the authorities know everything about us.',
    quote: '“A proliferation of smaller-scale technology failures will lead to calls for tighter surveillance.”',
  },
  path: { label: 'The narrow path', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Over time, these technologies will push humanity into a place between the poles of catastrophe and dystopia. This is the great dilemma of our age.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'of world GDP — the combined revenue of the Fortune Global 500 companies (ch. 11)', source: book },
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
  quote: '“It is not its fate that is being decided, but ours.”',
  quoteSource: 'Mustafa Suleyman, “The Coming Wave”',
};
