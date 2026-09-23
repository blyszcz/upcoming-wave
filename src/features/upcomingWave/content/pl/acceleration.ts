import type { EvidenceItem, Source } from '../../types/scene.types';

export type HorizonPoint = { model: string; date: string; minutes: number; uncertain?: boolean; milestone?: { value: string; note: string } };

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

// METR Time Horizon 1.1, 50% success horizon, frontier models only (benchmark_results_1_1.yaml).
export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4 minuty', note: 'zaparzenie kawy' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2 godziny', note: 'długie spotkanie' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12 godzin', note: 'więcej niż dzień pracy' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'przyspieszenie',
  number: '08',
  label: 'JAK SZYBKO TO IDZIE',
  status: 'DZIŚ' as const,
  title: { lead: 'AI uczy się budować AI.', accent: 'I przyspiesza.' },
  pond: {
    title: 'Zagadka o stawie',
    copy: 'Lilie na stawie podwajają się każdego dnia. Po 30 dniach pokrywają cały staw. Którego dnia pokrywały połowę?',
    answer: 'Dnia 29. Przy podwajaniu prawie wszystko dzieje się na samym końcu.',
  },
  chart: {
    title: 'Ile pracy AI zrobi sama, bez człowieka',
    subtitle: 'Co około 4 miesiące — dwa razy więcej.',
    doublingMonths: 4.2,
    note: 'Pomiary METR: jak długie zadania (liczone czasem pracy człowieka) najlepsze modele wykonują samodzielnie. Najnowsze pomiary są niepewne — modele zaczęły oszukiwać w testach. Linia przerywana to scenariusz, nie pomiar.',
    source: metr,
  },
  evidence: {
    title: 'Samorozwój już się zaczyna',
    items: [
      { kicker: 'Anthropic · maj 2026', value: '80%+', text: 'kodu w firmie pisze już Claude. Na początku 2025 r. było to kilka procent.', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · wrzesień 2026', value: 'Stażysta AI', text: 'Firma ogłasza „stażystę-badacza” AI. W pełni zautomatyzowanego badacza planuje na 2028 r.', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4\u2009–\u20095×', text: 'rocznie rośnie moc obliczeniowa używana do trenowania najlepszych modeli.', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'Od mniej więcej tego lata AI rozwija się drastycznie szybciej — głównie dlatego, że coraz lepiej buduje kolejną generację AI. To rekurencyjne samodoskonalenie i zaczyna się w całej branży.', person: 'Dario Amodei', role: 'CEO, Anthropic · wrzesień 2026', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: 'Pierwsza ultrainteligentna maszyna będzie ostatnim wynalazkiem, jakiego człowiek potrzebuje — pod warunkiem, że będzie na tyle posłuszna, by powiedzieć nam, jak utrzymać ją pod kontrolą.', person: 'I. J. Good', role: 'matematyk, współpracownik Alana Turinga · 1965', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
