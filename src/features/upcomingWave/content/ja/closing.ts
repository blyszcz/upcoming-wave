import type { BandBlock, SceneStatus } from '@features/upcomingWave/types/scene.types';

// Book quotes are our Japanese translation of the English edition (Crown, 2023).
const book = { label: '『The Coming Wave』' };

export const split = {
  id: 'two-roads',
  label: '誰が舵を取るか',
  status: 'possibleMany' as SceneStatus,
  title: { lead: 'では、誰が舵を取る？', accent: '二つの道。' },
  left: {
    image: '/images/v2/split-zombie-v2.jpg',
    alt: '打ち捨てられた役所。窓口は閉まり、椅子は空っぽで、床には書類が散らばっている。',
    label: '空洞化した国家',
    text: '役所も選挙も残っていますが、国家は機能しなくなります。行政サービスは最低限まで縮み、混乱が広がります。',
    quote: '「一種のゾンビ政府」',
  },
  right: {
    image: '/images/v2/split-leviathan-v1.jpg',
    alt: '夜の都市。カメラとドローンが群衆をスキャンしている。',
    label: '全面監視の国家',
    text: '始まりは無害です。安全のためのカメラ、犯罪者を捕まえるためのAI。少しずつ、当局は私たちのすべてを知るようになります。',
    quote: '「小規模な技術の失敗が積み重なるにつれ、統制を求める声は強まる」',
  },
  path: { label: '狭い道', href: '#rules' },
  band: [
    { kind: 'quote', quote: 'したがって、時が経つにつれ、これらの技術がもたらす影響は、人類に破局とディストピアという両極の間の道を進むことを迫るだろう。これこそが、私たちの時代の本質的なジレンマである。', person: 'ムスタファ・スレイマン', role: '『The Coming Wave』第12章', source: book },
    {
      kind: 'stats',
      items: [
        { value: '44%', label: 'フォーチュン・グローバル500企業の売上高の合計が、世界のGDPに占める割合（第11章）', source: book },
      ],
    },
  ] satisfies BandBlock[],
};

export const finale = {
  id: 'finale',
  image: '/images/v2/finale-boundaries-v2.jpg',
  alt: '夕暮れ時、世界中から集まった人々が円卓を囲み、明るく輝く核の周りに光の輪を置いている。',
  label: '私にできること',
  title: { lead: '進歩は止めない。', accent: '限度を決める。' },
  quote: 'シートベルトを締めるのは、事故が起きると分かっているからではありません。分からないからです。',
  rules: { title: '良いルールとは', items: ['AIが何百万人もの人に届く前の、独立した検証', 'AIシステムが損害を与えたときの、明確な責任', '税と実効性のあるセーフティネットによる、AIの利益の公正な分配'] },
  actions: { title: 'あなたにできること', items: ['まだこのことを考えたことのない人に、一人だけでいいので共有する', 'あなたの代表である議員に、AIのルールについての立場を尋ねる', 'AI企業が安全計画を公表したら、読んで質問する'] },
  // Empty: the closing line is the page's own voice, not a quote.
  quoteSource: '',
};
