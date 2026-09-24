import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes: our French translation of the English edition (Crown, 2023).
const book = { label: '« The Coming Wave »' };

export const split = {
  id: 'two-roads',
  label: 'QUI COMMANDE',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Qui commande, alors ?', accent: 'Deux voies.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Un bureau administratif abandonné : guichets fermés, chaises vides, papiers par terre.',
    label: 'L’État fantôme',
    text: 'Les administrations et les élections existent toujours, mais l’État cesse de fonctionner. Les services se réduisent au strict minimum et le chaos grandit.',
    quote: '« une sorte de gouvernement zombie »',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Une ville la nuit, sous des caméras et des drones qui scrutent la foule.',
    label: 'L’État du contrôle total',
    text: 'Tout commence innocemment : des caméras pour la sécurité, l’IA pour attraper les criminels. Peu à peu, les autorités finissent par tout savoir de nous.',
    quote: '« À mesure que les défaillances technologiques de moindre ampleur se multiplient, les appels au contrôle s’intensifient. »',
  },
  path: { label: 'La voie étroite', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Avec le temps, les implications de ces technologies pousseront donc l’humanité à tracer un chemin entre deux pôles, la catastrophe et la dystopie. C’est le dilemme essentiel de notre époque.', person: 'Mustafa Suleyman', role: '« The Coming Wave », chap. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44 %', label: 'du PIB mondial - c’est déjà le poids des entreprises du Fortune Global 500 (chap. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Des gens du monde entier, autour d’une table ronde au crépuscule, posent des anneaux lumineux autour d’un noyau brillant.',
  label: 'QUE PUIS-JE FAIRE',
  title: { lead: 'N’arrêtons pas le progrès.', accent: 'Fixons-lui des limites.' },
  quote: 'Vous n’attachez pas votre ceinture parce que vous savez qu’il y aura un accident. Vous l’attachez parce que vous ne le savez pas.',
  rules: { title: 'À quoi ressemblent de bonnes règles', items: ['Des tests indépendants avant que l’IA n’atteigne des millions de personnes', 'Une responsabilité claire quand un système d’IA cause un préjudice', 'Des gains de l’IA partagés équitablement - par l’impôt et un vrai filet de sécurité'] },
  actions: { title: 'Ce que vous pouvez faire', items: ['Partagez ceci avec une personne qui n’y a pas encore réfléchi', 'Demandez à vos élus quelle est leur position sur les règles de l’IA', 'Quand les entreprises d’IA publient leurs plans de sécurité, lisez-les - et posez des questions'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
