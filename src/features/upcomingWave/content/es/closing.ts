import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes are our Spanish translation of the English edition (Crown, 2023).
const book = { label: '«The Coming Wave»' };

export const split = {
  id: 'two-roads',
  label: 'QUIÉN MANDA',
  status: 'possibleMany' as SceneStatus,
  title: { lead: '¿Y entonces quién manda?', accent: 'Dos caminos.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Una oficina pública abandonada: ventanillas cerradas, sillas vacías y papeles por el suelo.',
    label: 'El Estado vacío',
    text: 'Las oficinas y las elecciones siguen existiendo, pero el Estado deja de funcionar. Los servicios se reducen al mínimo y crece el caos.',
    quote: '«una especie de gobierno zombi»',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Una ciudad de noche bajo cámaras y drones que escanean a la multitud.',
    label: 'El Estado del control total',
    text: 'Empieza de forma inocente: cámaras por seguridad, IA para atrapar delincuentes. Paso a paso, las autoridades llegan a saberlo todo de nosotros.',
    quote: '«A medida que se acumulan los fallos tecnológicos a menor escala, aumentan las demandas de control».',
  },
  path: { label: 'El camino estrecho', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Con el tiempo, por tanto, las implicaciones de estas tecnologías empujarán a la humanidad a abrirse camino entre los polos de la catástrofe y la distopía. Este es el dilema esencial de nuestra época.', person: 'Mustafa Suleyman', role: '«The Coming Wave», cap. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'del PIB mundial: lo que ya representan las empresas del Fortune Global 500 (cap. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Personas de todo el mundo alrededor de una mesa redonda al anochecer colocan anillos luminosos en torno a un núcleo brillante.',
  label: 'QUÉ PUEDO HACER',
  title: { lead: 'No frenemos el progreso.', accent: 'Pongámosle límites.' },
  quote: 'No te abrochas el cinturón porque sepas que habrá un accidente. Te lo abrochas porque no lo sabes.',
  rules: { title: 'Cómo son las buenas reglas', items: ['Pruebas independientes antes de que la IA llegue a millones de personas', 'Responsabilidad clara cuando un sistema de IA causa daños', 'Que las ganancias de la IA se repartan de forma justa: con impuestos y una red de protección real'] },
  actions: { title: 'Qué puedes hacer tú', items: ['Compártelo con una persona que aún no haya pensado en esto', 'Pregunta a tus representantes qué opinan de las reglas para la IA', 'Cuando las empresas de IA publiquen sus planes de seguridad, léelos y haz preguntas'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
