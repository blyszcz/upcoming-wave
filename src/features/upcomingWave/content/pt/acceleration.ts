import type { HorizonPoint } from '@features/upcomingWave/content/pl/acceleration';
import type { EvidenceItem, SceneStatus, Source } from '@features/upcomingWave/types/scene.types';

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4 minutos', note: 'fazer um café' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2 horas', note: 'uma reunião longa' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12 horas', note: 'mais que um dia de trabalho' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'ai-builds-ai',
  label: 'EM QUE VELOCIDADE',
  status: 'today' as SceneStatus,
  title: { lead: 'A IA está aprendendo a construir IA.', accent: 'E está acelerando.' },
  pond: {
    title: 'O enigma do lago',
    copy: 'As vitórias-régias de um lago dobram a cada dia. Depois de 30 dias, cobrem o lago inteiro. Em que dia cobriam a metade?',
    answer: 'No dia 29. Quando algo dobra, quase tudo acontece no finalzinho.',
  },
  chart: {
    title: 'Qual o tamanho da tarefa que a IA faz sozinha',
    subtitle: 'Desde 2023: dobra a cada 4 meses, aproximadamente.',
    doublingMonths: 4.2,
    note: 'Medições do METR: a duração da tarefa (em tempo de trabalho humano) que os melhores modelos concluem sozinhos em metade das tentativas. Medições acima de 16 horas são incertas - as tarefas do teste são curtas demais. A linha tracejada é um cenário, não uma medição.',
    source: metr,
  },
  evidence: {
    title: 'O autoaperfeiçoamento já começou',
    items: [
      { kicker: 'Anthropic · maio de 2026', value: '80%+', text: 'do código da empresa hoje é escrito pelo Claude. No início de 2025, eram alguns por cento.', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · setembro de 2026', value: 'Estagiário de IA', text: 'A empresa diz que já tem um estagiário de pesquisa de IA. Planeja um pesquisador de IA automatizado para 2028.', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4 – 5×', text: 'por ano - é o crescimento do poder computacional usado para treinar os melhores modelos.', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'Desde mais ou menos este verão, a IA vem avançando drasticamente mais rápido, impulsionada principalmente pela crescente capacidade da IA de construir a próxima geração de IA. Essa dinâmica se chama autoaperfeiçoamento recursivo, e está começando a acontecer em todo o setor.', person: 'Dario Amodei', role: 'CEO da Anthropic · setembro de 2026', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: 'A primeira máquina ultrainteligente é a última invenção que o homem precisará fazer, desde que a máquina seja dócil o bastante para nos dizer como mantê-la sob controle.', person: 'I. J. Good', role: 'matemático que trabalhou com Alan Turing · 1965', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
