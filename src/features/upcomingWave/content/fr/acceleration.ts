import type { HorizonPoint } from '@features/upcomingWave/content/pl/acceleration';
import type { EvidenceItem, SceneStatus, Source } from '@features/upcomingWave/types/scene.types';

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4 minutes', note: 'faire un café' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2 heures', note: 'une longue réunion' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12 heures', note: 'plus d’une journée de travail' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'ai-builds-ai',
  label: 'À QUEL RYTHME',
  status: 'today' as SceneStatus,
  title: { lead: 'L’IA apprend à construire l’IA.', accent: 'Et ça s’accélère.' },
  pond: {
    title: 'L’énigme de l’étang',
    copy: 'Sur un étang, les nénuphars doublent chaque jour. Au bout de 30 jours, ils couvrent tout l’étang. Quel jour en couvraient-ils la moitié ?',
    answer: 'Le 29e jour. Quand la surface double chaque jour, l’essentiel se joue à la toute fin.',
  },
  chart: {
    title: 'La durée des tâches que l’IA réalise seule',
    subtitle: 'Depuis 2023 : un doublement environ tous les 4 mois.',
    doublingMonths: 4.2,
    note: 'Mesures du METR : la longueur de tâche (en temps de travail humain) que les meilleurs modèles accomplissent seuls dans la moitié des essais. Les mesures au-delà de 16 heures sont incertaines - les tâches du test sont trop courtes. La ligne en pointillés est un scénario, pas une mesure.',
    source: metr,
  },
  evidence: {
    title: 'L’auto-amélioration a déjà commencé',
    items: [
      { kicker: 'Anthropic · mai 2026', value: 'Plus de 80 %', text: 'du code de l’entreprise est désormais écrit par Claude. Début 2025, c’était quelques pour cent.', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · septembre 2026', value: 'Stagiaire IA', text: 'L’entreprise dit disposer d’un stagiaire de recherche IA. Elle prévoit un chercheur IA automatisé pour 2028.', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4-5×', text: 'par an - la croissance de la puissance de calcul utilisée pour entraîner les meilleurs modèles.', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'Depuis cet été environ, l’IA progresse radicalement plus vite, principalement parce qu’elle est de plus en plus capable de construire la génération suivante d’IA. Cette dynamique s’appelle l’auto-amélioration récursive, et elle commence à se produire dans tout le secteur.', person: 'Dario Amodei', role: 'PDG d’Anthropic · septembre 2026', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: 'La première machine ultra-intelligente est la dernière invention que l’homme aura jamais besoin de faire, pourvu que la machine soit assez docile pour nous dire comment la garder sous contrôle.', person: 'I. J. Good', role: 'mathématicien qui a travaillé avec Alan Turing · 1965', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
