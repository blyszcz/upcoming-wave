import type { Scene } from '../types/scene.types';

const images = {
  layoffs: '/images/v2/threat-02-layoffs-v1.jpg',
  aiRules: '/images/v2/threat-02-ai-rules-v1.jpg',
  bio: '/images/v2/threat-03-bio-v1.jpg',
  remote: '/images/v2/work-01-remote-v1.jpg',
  aiFaster: '/images/v2/work-02-ai-faster-v2.jpg',
  owners: '/images/v2/work-03-owners-v1.jpg',
};

export const scenes: Scene[] = [
  {
    id: 'zagrozenia',
    number: '01',
    label: 'CO MOŻE PÓJŚĆ NIE TAK',
    status: 'MOŻLIWE SCENARIUSZE',
    title: { lead: 'Trzy ryzyka.', accent: 'Żadnego hamulca.' },
    panels: [
      {
        image: images.layoffs,
        label: 'Fala zwolnień',
        alt: 'Długa kolejka pracowników biurowych wychodzi w deszczu z biurowca, niosąc kartony z rzeczami.',
        focus: 'center 70%',
      },
      {
        image: images.aiRules,
        label: 'AI przejmuje kontrolę',
        alt: 'Tysiące ludzi stoją w równych rzędach na placu pod ogromną maszyną, która skanuje ich wiązkami światła.',
        focus: 'center 60%',
      },
      {
        image: images.bio,
        label: 'Wirus z laboratorium',
        alt: 'Puste laboratorium: automatyczne ramię trzyma świecącą fiolkę, nad stołem model wirusa i przepisywanej helisy DNA.',
        focus: 'center 60%',
      },
    ],
    explain: [
      {
        image: images.layoffs,
        alt: 'Zwolnieni pracownicy wychodzą z biurowca z kartonami.',
        title: 'Praca znika szybciej, niż powstaje nowa.',
        copy: 'Jeśli AI robi to samo taniej, firmy mogą potrzebować mniej ludzi. Przebranżowienie trwa latami, rachunki przychodzą co miesiąc.',
      },
      {
        image: images.aiRules,
        alt: 'Ludzie w rzędach pod maszyną, która ich skanuje.',
        title: 'Decyzje przechodzą do maszyn.',
        copy: 'Kredyt, praca, leczenie, bezpieczeństwo. Im więcej decyzji oddajemy systemom, których nie rozumiemy, tym trudniej je potem odebrać.',
      },
      {
        image: images.bio,
        alt: 'Automatyczne laboratorium z modelem wirusa.',
        title: 'Projektowanie życia tanieje.',
        copy: 'AI przyspiesza badania nad lekami — ale te same narzędzia mogą pomóc stworzyć groźny patogen. Wystarczy jeden błąd albo jedna zła intencja.',
      },
    ],
  },
  {
    id: 'praca',
    number: '02',
    label: 'JAK TO SIĘ ZACZYNA',
    status: 'DZIŚ',
    title: { lead: 'AI robi to szybciej i\u00a0taniej.', accent: 'Kto się oprze?' },
    panels: [
      {
        image: images.remote,
        label: 'Człowiek pracuje zdalnie',
        alt: 'Kobieta pracuje zdalnie przy kuchennym stole z laptopem i notatnikiem.',
        focus: 'center 65%',
      },
      {
        image: images.aiFaster,
        label: 'AI robi to szybciej',
        alt: 'Ten sam stół bez człowieka: z laptopa wylatują dziesiątki gotowych dokumentów w smugach światła.',
        focus: 'center 60%',
      },
      {
        image: images.owners,
        label: 'Właściciel liczy zysk',
        alt: 'Dwóch właścicieli firmy w sali zarządu patrzy z góry na biuro, w którym większość biurek jest pusta.',
        focus: 'center 55%',
      },
    ],
    explain: [
      {
        image: images.remote,
        alt: 'Kobieta pracuje zdalnie przy laptopie.',
        title: 'Praca zdalna to praca na ekranie.',
        copy: 'Maile, raporty, analizy, projekty. Wszystko, co wysyłasz przez laptopa, AI może nauczyć się robić.',
      },
      {
        image: images.aiFaster,
        alt: 'Laptop, z którego wylatują gotowe dokumenty.',
        title: 'AI nie śpi i nie bierze urlopu.',
        copy: 'Robi to samo w minuty, bez przerw, przy setkach zadań naraz — i w coraz większej liczbie zadań na poziomie człowieka.',
      },
      {
        image: images.owners,
        alt: 'Właściciele firmy patrzą na puste biuro.',
        title: 'Szybciej i taniej. Kto się oprze?',
        copy: 'Właściciel widzi oszczędność. Konkurencja też ją widzi. Firma, która nie skorzysta, przegra wyścig — więc skorzystają prawie wszyscy.',
      },
    ],
  },
];
