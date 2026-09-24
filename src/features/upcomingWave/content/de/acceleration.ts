import type { HorizonPoint } from '@features/upcomingWave/content/pl/acceleration';
import type { EvidenceItem, SceneStatus, Source } from '@features/upcomingWave/types/scene.types';

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4 Minuten', note: 'Kaffee kochen' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2 Stunden', note: 'eine lange Besprechung' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12 Stunden', note: 'mehr als ein Arbeitstag' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'ai-builds-ai',
  label: 'WIE SCHNELL ES GEHT',
  status: 'today' as SceneStatus,
  title: { lead: 'KI lernt, KI zu bauen.', accent: 'Und sie wird schneller.' },
  pond: {
    title: 'Das Seerosen-Rätsel',
    copy: 'Seerosen auf einem Teich verdoppeln sich jeden Tag. Nach 30 Tagen bedecken sie den ganzen Teich. An welchem Tag war er zur Hälfte bedeckt?',
    answer: 'Am 29. Tag. Beim Verdoppeln passiert fast alles ganz am Ende.',
  },
  chart: {
    title: 'Wie lange KI allein an einer Aufgabe arbeiten kann',
    subtitle: 'Seit 2023: Verdopplung etwa alle 4 Monate.',
    doublingMonths: 4.2,
    note: 'METR-Messungen: die Länge einer Aufgabe (in menschlicher Arbeitszeit), die die besten Modelle in der Hälfte der Versuche allein erledigen. Messungen über 16 Stunden sind unsicher - die Testaufgaben sind zu kurz. Die gestrichelte Linie ist ein Szenario, keine Messung.',
    source: metr,
  },
  evidence: {
    title: 'Die Selbstverbesserung hat schon begonnen',
    items: [
      { kicker: 'Anthropic · Mai 2026', value: '80 %+', text: 'des Codes im Unternehmen schreibt inzwischen Claude. Anfang 2025 waren es wenige Prozent.', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · September 2026', value: 'KI-Praktikant', text: 'Das Unternehmen sagt, es habe einen KI-Forschungspraktikanten. Für 2028 plant es einen automatisierten KI-Forscher.', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4-5×', text: 'pro Jahr - so stark wächst die Rechenleistung, mit der die besten Modelle trainiert werden.', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'Seit etwa diesem Sommer entwickelt sich KI drastisch schneller, vor allem angetrieben von der wachsenden Fähigkeit der KI, die nächste Generation von KI zu bauen. Diese Dynamik nennt man rekursive Selbstverbesserung, und sie setzt gerade in der ganzen Branche ein.', person: 'Dario Amodei', role: 'CEO, Anthropic · September 2026', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: 'Die erste ultraintelligente Maschine ist die letzte Erfindung, die der Mensch je machen muss - vorausgesetzt, die Maschine ist fügsam genug, uns zu sagen, wie wir sie unter Kontrolle halten.', person: 'I. J. Good', role: 'Mathematiker, der mit Alan Turing zusammenarbeitete · 1965', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
