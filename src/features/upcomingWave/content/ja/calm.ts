import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '『The Coming Wave』' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: '公平を期して',
  title: { lead: '大げさでは？', accent: 'かもしれない。だからシートベルトを。' },
  blocks: [
      { kind: 'quote', quote: '封じ込めが不可能なら、人類にとっての帰結は劇的なものになり、悲惨なものにさえなりうる。同様に、その果実がなければ、私たちは無防備で不安定な状態に置かれる。', person: 'ムスタファ・スレイマン', role: '『The Coming Wave』第1章', source: sources.book },
      {
        kind: 'evidence',
        title: '冷静でいられる根拠',
        items: [
          { kicker: 'ダロン・アセモグル · MIT、ノーベル賞受賞者', value: '約1%', text: '今後10年でAIがGDPを押し上げる幅の、彼の推計。革命ではなく進化だといいます。', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'ニューヨーク連銀 · 2026年', text: '採用の鈍化の主な要因は、まだAIではありません。', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: '世界経済フォーラム', value: '+1億7,000万 / −9,200万', text: '2030年までに生まれる仕事と失われる仕事の数。雇用主への調査に基づきます（AIに限らず、すべての潮流を含む）。', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'ダリオ・アモデイ · 2026年', text: '「仕事の90%を自動化すれば、誰もが残りの10%をやることになる」。そしてその10%が広がって、仕事全体になるといいます。', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'ムスタファ・スレイマン · 第12章', text: '「誤解しないでほしい。停滞それ自体が災厄を意味する」。技術の約束とは、「生活を向上させ、その恩恵がコストや弊害をはるかに上回ること」だと彼は書いています。', source: sources.book },
          { kicker: 'サム・アルトマン · 2026年', text: '「これについては、間違っていてうれしい」。これまでの解雇は、彼の予想より少なかったのです。', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
  ] satisfies BandBlock[] as BandBlock[],
};
