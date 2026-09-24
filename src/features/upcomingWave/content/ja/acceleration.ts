import type { HorizonPoint } from '@features/upcomingWave/content/pl/acceleration';
import type { EvidenceItem, SceneStatus, Source } from '@features/upcomingWave/types/scene.types';

const metr: Source = { label: 'METR Time Horizons', url: 'https://metr.org/time-horizons/' };

export const horizonPoints: HorizonPoint[] = [
  { model: 'GPT-3.5', date: '2022-03', minutes: 0.6 },
  { model: 'GPT-4', date: '2023-03', minutes: 4, milestone: { value: '4分', note: 'コーヒーを淹れる時間' } },
  { model: 'Claude 3.5 Sonnet', date: '2024-06', minutes: 11.4 },
  { model: 'o1-preview', date: '2024-09', minutes: 20.3 },
  { model: 'o1', date: '2024-12', minutes: 38.8 },
  { model: 'Claude 3.7 Sonnet', date: '2025-02', minutes: 60 },
  { model: 'o3', date: '2025-04', minutes: 120, milestone: { value: '2時間', note: '長い会議' } },
  { model: 'GPT-5', date: '2025-08', minutes: 203 },
  { model: 'Claude Opus 4.5', date: '2025-11', minutes: 293 },
  { model: 'GPT-5.2', date: '2025-12', minutes: 352 },
  { model: 'Claude Opus 4.6', date: '2026-02', minutes: 719, uncertain: true, milestone: { value: '12時間', note: '1日の勤務時間を超える' } },
  { model: 'Claude Mythos Preview', date: '2026-04', minutes: 1045, uncertain: true },
];

export const acceleration = {
  id: 'ai-builds-ai',
  label: '進歩の速さ',
  status: 'today' as SceneStatus,
  title: { lead: 'AIが、AIづくりを覚え始めた。', accent: 'しかも加速している。' },
  pond: {
    title: '池のなぞなぞ',
    copy: '池のスイレンは毎日2倍に増えます。30日で池全体を覆いました。では、池の半分を覆ったのは何日目でしょう？',
    answer: '29日目です。倍々で増えるとき、ほとんどの変化は最後の最後に起こります。',
  },
  chart: {
    title: 'AIが単独でこなせるタスクの長さ',
    subtitle: '2023年以降、約4か月ごとに倍増。',
    doublingMonths: 4.2,
    note: 'METRの測定：最先端のモデルが、試行の半数で単独で完了できるタスクの長さ（人間の作業時間に換算）。16時間を超える測定値は不確かです。テスト課題が短すぎるためです。破線は測定値ではなく、シナリオです。',
    source: metr,
  },
  evidence: {
    title: '自己改良はすでに始まっている',
    items: [
      { kicker: 'Anthropic · 2026年5月', value: '80%以上', text: '同社のコードのうち、今ではClaudeが書いている割合。2025年初めには数%でした。', source: { label: 'Anthropic', url: 'https://www.anthropic.com/institute/recursive-self-improvement' } },
      { kicker: 'OpenAI · 2026年9月', value: 'AIインターン', text: '同社は「AI研究インターン」を実現したと発表しています。2028年には自動化されたAI研究者を目指す計画です。', source: { label: 'Engadget', url: 'https://www.engadget.com/2251859/openai-says-it-reached-its-goal-of-creating-an-automated-research-intern/' } },
      { kicker: 'Epoch AI', value: '4〜5倍', text: '最先端モデルの訓練に使われる計算量の、1年あたりの伸び。', source: { label: 'Epoch AI', url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year' } },
    ] satisfies EvidenceItem[],
  },
  quotes: [
    { quote: 'この夏ごろから、AIは劇的に速く進歩している。その主な原動力は、次世代のAIを作るAI自身の能力の高まりだ。この力学は再帰的自己改良と呼ばれ、業界全体で起こり始めている。', person: 'ダリオ・アモデイ', role: 'Anthropic CEO · 2026年9月', source: { label: 'We Must Pace the Frontier', url: 'https://darioamodei.com/post/we-must-pace-the-frontier' } },
    { quote: '最初の超知能機械は、人類が作る必要のある最後の発明となる。ただし、その機械が、自らを制御下に置く方法を私たちに教えてくれるほど従順であればの話だが。', person: 'I・J・グッド', role: 'アラン・チューリングと共に働いた数学者 · 1965年', source: { label: 'Quote Investigator', url: 'https://quoteinvestigator.com/2022/01/04/ultraintelligent/' } },
  ],
};
