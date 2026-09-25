import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes are our translation of the English edition (Crown, 2023).
const book = { label: '“The Coming Wave”' };

export const split = {
  id: 'two-roads',
  label: 'QUEM MANDA',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Então, quem manda?', accent: 'Dois caminhos.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Uma repartição pública abandonada: guichês fechados, cadeiras vazias, papéis pelo chão.',
    label: 'O Estado oco',
    text: 'Repartições e eleições continuam existindo, mas o Estado para de funcionar. Os serviços encolhem ao mínimo e o caos cresce.',
    quote: '“uma espécie de governo zumbi”',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Uma cidade à noite sob câmeras e drones que vasculham a multidão.',
    label: 'O Estado do controle total',
    text: 'Começa de forma inocente: câmeras por segurança, IA para pegar criminosos. Passo a passo, as autoridades passam a saber tudo sobre nós.',
    quote: '“À medida que se acumulam falhas tecnológicas de menor escala, aumentam os pedidos de controle.”',
  },
  path: { label: 'O caminho estreito', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Com o tempo, portanto, as implicações dessas tecnologias vão obrigar a humanidade a percorrer um caminho entre os polos da catástrofe e da distopia. Este é o dilema essencial da nossa era.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, cap. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'do PIB mundial - a receita somada das empresas da Global 500 da Fortune (cap. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Pessoas do mundo todo em volta de uma mesa redonda ao entardecer colocam anéis luminosos ao redor de um núcleo brilhante.',
  label: 'O QUE EU POSSO FAZER',
  title: { lead: 'Não pare o progresso.', accent: 'Ponha limites nele.' },
  quote: 'Você não usa o cinto porque sabe que vai bater. Você usa o cinto porque não sabe.',
  rules: { title: 'Como são boas regras', items: ['Testes independentes antes que a IA chegue a milhões de pessoas', 'Responsabilidade clara quando um sistema de IA causa danos', 'Ganhos da IA divididos de forma justa - por meio de impostos e de uma rede de proteção de verdade'] },
  actions: { title: 'O que você pode fazer', items: ['Compartilhe isto com uma pessoa que ainda não pensou no assunto', 'Pergunte aos seus representantes qual é a posição deles sobre regras para a IA', 'Quando empresas de IA publicarem planos de segurança, leia-os - e faça perguntas'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
