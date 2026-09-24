import type { HorizonPoint } from '@features/upcomingWave/content/pl/acceleration';
import type { EvidenceItem, SceneStatus, Source } from '@features/upcomingWave/types/scene.types';

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4 minutos', note: 'preparar un café' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2 horas', note: 'una reunión larga' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12 horas', note: 'más de una jornada laboral' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'ai-builds-ai',
  label: 'A QUÉ VELOCIDAD AVANZA',
  status: 'today' as SceneStatus,
  title: { lead: 'La IA aprende a crear IA.', accent: 'Y cada vez más rápido.' },
  pond: {
    title: 'El acertijo del estanque',
    copy: 'Los nenúfares de un estanque se duplican cada día. A los 30 días cubren todo el estanque. ¿Qué día cubrían la mitad?',
    answer: 'El día 29. Cuando algo se duplica, casi todo ocurre al final.',
  },
  chart: {
    title: 'Cuánto puede durar una tarea que la IA hace sola',
    subtitle: 'Desde 2023: se duplica aproximadamente cada 4 meses.',
    doublingMonths: 4.2,
    note: 'Mediciones de METR: la duración de la tarea (en tiempo de trabajo humano) que los mejores modelos completan solos en la mitad de los intentos. Las mediciones por encima de 16 horas son inciertas: las tareas de prueba son demasiado cortas. La línea discontinua es un escenario, no una medición.',
    source: metr,
  },
  evidence: {
    title: 'La automejora ya ha empezado',
    items: [
      { kicker: 'Anthropic · mayo de 2026', value: '80%+', text: 'del código de la empresa ya lo escribe Claude. A principios de 2025 era apenas un pequeño porcentaje.', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · septiembre de 2026', value: 'Becario de IA', text: 'La empresa dice que ya tiene un becario de investigación basado en IA. Planea un investigador de IA automatizado para 2028.', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4-5×', text: 'al año: así crece la potencia de cálculo usada para entrenar los mejores modelos.', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'Aproximadamente desde este verano, la IA avanza drásticamente más rápido, impulsada sobre todo por la creciente capacidad de la IA para construir la siguiente generación de IA. Esta dinámica se llama automejora recursiva y está empezando a darse en todo el sector.', person: 'Dario Amodei', role: 'CEO de Anthropic · septiembre de 2026', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: 'La primera máquina ultrainteligente es el último invento que el hombre necesitará hacer jamás, siempre que la máquina sea lo bastante dócil como para decirnos cómo mantenerla bajo control.', person: 'I. J. Good', role: 'matemático que trabajó con Alan Turing · 1965', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
