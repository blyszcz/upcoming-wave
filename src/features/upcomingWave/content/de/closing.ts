import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes are our German translation of the English edition (Crown, 2023), checked via Google Books.
const book = { label: '„The Coming Wave“' };

export const split = {
  id: 'two-roads',
  label: 'WER HAT DAS SAGEN',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'Wer hat dann das Sagen?', accent: 'Zwei Wege.' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: 'Ein verlassenes Amt: geschlossene Schalter, leere Stühle, Papiere auf dem Boden.',
    label: 'Der ausgehöhlte Staat',
    text: 'Ämter und Wahlen gibt es noch, aber der Staat funktioniert nicht mehr. Leistungen schrumpfen aufs Nötigste, das Chaos wächst.',
    quote: '„eine Art Zombie-Regierung“',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: 'Eine Stadt bei Nacht unter Kameras und Drohnen, die die Menge scannen.',
    label: 'Der Überwachungsstaat',
    text: 'Es beginnt harmlos: Kameras für die Sicherheit, KI, um Kriminelle zu fassen. Schritt für Schritt wissen die Behörden alles über uns.',
    quote: '„Je mehr kleinere technische Pannen sich häufen, desto lauter wird der Ruf nach Kontrolle.“',
  },
  path: { label: 'Der schmale Pfad', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'Mit der Zeit werden die Folgen dieser Technologien die Menschheit also zwingen, einen Weg zwischen den Polen Katastrophe und Dystopie zu finden. Das ist das grundlegende Dilemma unserer Zeit.', person: 'Mustafa Suleyman', role: '„The Coming Wave“, Kap. 12', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44 %', label: 'der weltweiten Wirtschaftsleistung - so viel machen die Global-500-Konzerne von Fortune bereits aus (Kap. 11)', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: 'Menschen aus aller Welt stehen in der Abenddämmerung um einen runden Tisch und legen leuchtende Ringe um einen hellen Kern.',
  label: 'WAS KANN ICH TUN',
  title: { lead: 'Fortschritt nicht stoppen.', accent: 'Ihm Grenzen setzen.' },
  quote: 'Man schnallt sich nicht an, weil man weiß, dass es kracht. Man schnallt sich an, weil man es nicht weiß.',
  rules: { title: 'So sehen gute Regeln aus', items: ['Unabhängige Tests, bevor KI Millionen Menschen erreicht', 'Klare Verantwortung, wenn ein KI-System Schaden anrichtet', 'Faire Verteilung der KI-Gewinne - über Steuern und ein echtes soziales Netz'] },
  actions: { title: 'Was du tun kannst', items: ['Teile das mit einer Person, die noch nicht darüber nachgedacht hat', 'Frag deine gewählten Vertreter, wie sie zu Regeln für KI stehen', 'Wenn KI-Firmen Sicherheitspläne veröffentlichen, lies sie - und stell Fragen'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
