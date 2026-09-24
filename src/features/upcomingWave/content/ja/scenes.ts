import type { Scene } from '@features/upcomingWave/types/scene.types';

import { acceleration } from '@features/upcomingWave/content/ja/acceleration';
import { calm } from '@features/upcomingWave/content/ja/calm';
import { split } from '@features/upcomingWave/content/ja/closing';
import { sceneImages as images, sceneSources as plSources } from '@features/upcomingWave/content/pl/scenes';


// All quotes are our Japanese translation of the original English wording; book quotes are translated from the English edition (Crown, 2023).
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'IMF, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS（配管工）' },
  book: { label: '『The Coming Wave』' },
  germany: { ...plSources.germany, label: 'オックスフォード大学' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI、2026年7月' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI、2026年8月' },
  aiAct: { ...plSources.aiAct, label: 'EU理事会、2026年' },
};

export const scenes: Scene[] = [
  {
    id: 'the-stakes',
    label: 'まず、懸かっているもの',
    status: 'today',
    chain: 'stakes',
    layout: 'mosaic',
    title: { lead: 'まず、何が懸かっているか。', accent: '同じAIが、病を治し、食を支え、学びを助けうる。' },
    panels: [
      { image: images.medicine, label: '早期診断', caption: '見落としやすいものをAIが捉える', alt: '医師と患者が検査画像を見ている。画像にはAIが一か所を控えめに示している。', focus: 'center 55%' },
      { image: images.science, label: '新しい薬', caption: '1億の分子の中から見つかった抗生物質', alt: '研究室で、科学者が光るタンパク質の3Dモデルを見つめている。', focus: 'center 40%' },
      { image: images.energy, label: 'クリーンエネルギー', caption: '太陽光・風力・蓄電池のコストを下げる', alt: '夜明けの太陽光発電所と風車。技術者がタブレットで送電網を確認している。' },
      { image: images.food, label: '食料', caption: '暑さに耐える作物', alt: '暑い夏、農家の人々が元気な作物を確かめ、畑の上をドローンが飛んでいる。' },
      { image: images.forecast, label: '早期警報', caption: '洪水や山火事をいち早く予測', alt: '予報センター。気象予報士たちが、洪水の危険が強調された河川の地図を見ている。' },
      { image: images.time, label: '学校', caption: '教師を支える', alt: '教師が子どものそばにひざまずいて手伝い、奥ではノートパソコンが事務作業を片づけている。', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'AIが支援した検査画像について、医師が患者と話している。', label: '健康', title: 'より良く、より安い医療。', copy: 'AIの支援を受けた医師はより多くのがんを見つけ、AIは新薬を求めて何百万もの分子を調べます。' },
      { image: images.energy, alt: '夜明けの太陽光発電所と風力発電所。', label: '地球', title: '政治が停滞するところに、助けを。', copy: '本書の著者は、AIが再生可能エネルギーへの移行、より暑い気候での食料生産、洪水や山火事の予測を助けることを期待しています。' },
      { image: images.time, alt: '子どもを手伝う教師。', label: '条件がひとつ', title: 'この恩恵は、自然には届かない。', copy: 'すべての人に届くのは、ルールを決めたときだけです。誰が損害に責任を負い、利益をどう分けるのかというルールです。' },
    ],
    band: [
      { kind: 'quote', quote: 'それらは医療をより質の高いものにし、同時により手頃なものにするだろう。政治が停滞しているこの時期に、再生可能エネルギーへの移行を実現し、気候変動と闘うための道具の発明を助けるだろう。そして教師を支え、資金不足の教育制度の効果を高める助けとなるだろう。', person: 'ムスタファ・スレイマン', role: '『The Coming Wave』第9章（AIと合成生物学について）', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29%', label: 'AIを活用した検診で増えた、乳がんの発見数。誤検出は増えていません', source: sources.masai },
          { value: '1億', label: 'AIシステムがハリシンを見つけるために調べた分子の数。ハリシンは機械学習で発見された最初の抗生物質です（第7章）', source: sources.book },
          { value: '2億', label: 'AlphaFoldが予測したタンパク質構造の数。2024年ノーベル化学賞の受賞研究です', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82%', label: '10年間での太陽光発電のコストの低下。今も下がり続けています（第11章）', source: sources.book },
          { value: '約9%', label: '現在、極度の貧困の中で暮らす人の割合。1800年代初めには、ほぼ全員がそうでした。それを変えたのが技術です（第8章）', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'テック業界のリーダーたちの期待',
        items: [
          { kicker: 'ビル・ゲイツ · 2023年', value: '不平等の縮小', text: '「AIは、世界で最も深刻な不平等のいくつかを減らすことができる」。彼はAIを「マイクロプロセッサ、パソコン、インターネット、携帯電話の誕生と同じくらい根本的なもの」と呼んでいます。', source: sources.gatesAge },
          { kicker: 'デミス・ハサビス · Google DeepMind · 2025年', value: '病気のない世界？', text: '「いつの日か、AIの助けを借りて、あらゆる病気を治せるかもしれない…おそらく今後10年ほどのうちに」。彼は「根本的な豊かさ」、つまり欠乏の解消についても語っています。', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'ダリオ・アモデイ · Anthropic · 2024年', value: '100年 → 10年', text: '50〜100年分の医学の進歩を5〜10年に凝縮し、健康寿命を2倍にし、何十億人もの人を貧困から救い出す。AIがうまくいった場合の彼のビジョンです。', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'サム・アルトマン · OpenAI · 2024年', value: '共に豊かに', text: '「未来には、誰もが、今の誰の暮らしよりも良い暮らしを送れるようになる」。彼はすべての子どもに専属のAI家庭教師がつく未来も描いています。', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
    ],
  },
  {
    id: 'who-will-resist',
    label: '仕事',
    status: 'today',
    chain: 'work',
    layout: 'triptych',
    title: { lead: 'AIの方が速くて安い。', accent: '誰が抗えるだろう？' },
    panels: [
      { image: images.remote, label: 'リモートで働く人', alt: '女性がキッチンのテーブルで、ノートパソコンとノートを使ってリモートで働いている。', focus: 'center 65%' },
      { image: images.aiFaster, label: 'AIの方が速い', alt: '同じテーブルに人の姿はない。ノートパソコンから何十もの完成した書類が光の筋となって飛び出している。', focus: 'center 60%' },
      { image: images.owners, label: '経営者は浮いたコストを数える', alt: '役員室にいる二人の経営者が、ほとんどの机が空いたオフィスを見下ろしている。', focus: 'center 55%' },
    ],
    explain: [
      { image: images.remote, alt: 'ノートパソコンでリモートワークをする女性。', label: 'リモートワーク', title: 'リモートワークは画面の仕事。', copy: 'メール、報告書、分析、デザイン。ノートパソコンから送れる仕事なら、AIも身につけられます。' },
      { image: images.aiFaster, alt: '完成した書類が飛び出すノートパソコン。', label: 'AIの方が速い', title: 'AIは眠らず、休暇も取らない。', copy: '同じ仕事を数分で、休みなく、何百ものタスクを同時にこなします。しかも人間に並ぶタスクは増え続けています。' },
      { image: images.owners, alt: '空っぽのオフィスを見る経営者たち。', label: '損得勘定', title: '速くて安い。誰が抗えるだろう？', copy: '経営者は浮くコストに気づきます。競合他社も気づいています。使わない企業は競争に負けるかもしれません。だから導入への圧力は非常に大きいのです。' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '4つに1つ', label: '生成AIの影響を受ける、世界の仕事の割合。多くの場合、なくなるのではなく業務内容が変わります', source: sources.ilo },
          { value: '60%', label: 'AIの影響を受けうる、豊かな国々の仕事の割合。そのうち約半数は恩恵を受けうるとされます', source: sources.imf },
          { value: '−11%', label: '米国で、AIの影響を最も受ける職種における22〜25歳の雇用の減少（2022〜2026年）', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'すでに起きていること',
        items: [
          { kicker: 'Salesforce · 2025年', value: '9,000 → 5,000', text: 'カスタマーサポートの人員。「人手はそれほど要らない」とCEOは語りました。', source: sources.salesforce },
          { kicker: 'Klarna · 2025年', value: '5,000 → 3,000', text: '従業員数。同社は採用を止め、業務の一部をAIが引き継ぎました。その後、サポートの一部を人間に戻しています。', source: sources.klarna },
          { kicker: 'Amazon · 2025年', text: 'AmazonのCEOは、今後数年でAIにより本社部門の人員が減ると見込んでいます。', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'ありふれた知的労働については、AIがすべての人に取って代わるだろう。', person: 'ジェフリー・ヒントン', role: 'ノーベル賞受賞者、「AIのゴッドファーザー」', source: sources.hintonDoac },
      { kind: 'quote', quote: '物理的な操作で人間並みになるには、まだ長い時間がかかる…だから配管工になるのは良い賭けだろう。', person: 'ジェフリー・ヒントン', role: 'ノーベル賞受賞者、「AIのゴッドファーザー」', source: sources.hintonDoac },
      {
        kind: 'bars',
        title: '求人1件に何人が応募する？',
        subtitle: '米国の例：職種ごとの就業者数と、配管工の年間求人数',
        bars: [
          { label: 'カスタマーサービス担当者', value: 2666000, display: '270万' },
          { label: '配管工・配管技能者', value: 510600, display: '51.1万' },
          { label: '配管工の年間求人数', value: 42000, display: '4.2万', highlight: true },
        ],
        caption: '配管工の求人1件あたり、カスタマーサービス担当者は60人以上います。10人に1人しか応募しなくても、求人1件に6人の応募者です。',
        source: sources.bls,
      },
      {
        kind: 'stats',
        items: [
          { value: '11時間', label: 'ロボット訓練用に、人間による実演9か月分に相当するデータをAIが作るのにかかった時間', source: sources.nvidia },
          { value: '−40%', label: '1年間での人型ロボットの製造コストの低下。アナリストの予想は15〜20%でした', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: '十分に強力なAIは、ロボットの開発を加速させ、さらに物理世界でそのロボットを制御できるようになるだろう。それで多少の時間は稼げるかもしれない…だが、大して稼げないのではないかと心配している。', person: 'ダリオ・アモデイ', role: 'Anthropic CEO', source: sources.amodei },
    ],
    upside: {
      title: '単調な仕事はAIに。人は時間を取り戻す。',
      text: '利益を分かち合えば、仕事の効率化は「仕事が減る」だけで終わらず、労働時間の短縮や仕事の質の向上にもつながりえます。',
      points: ['仕事がなくなる前に、学び直すための時間とお金', 'キャリアを変える間の所得支援', '解雇の代わりに週の労働時間を短縮する。OpenAI自身も提案した考えです'],
      image: '/images/v2/upside-work-time-v2.jpg',
      alt: '午後の日が差すキッチン。母親と息子が笑いながらパン生地をこね、庭では父親と祖母が野菜の世話をしている。奥では、洗濯かごの横でロボットが食洗機に食器を入れている。',
      sources: [sources.book, sources.openaiPolicy],
    },
  },
  {
    id: 'state-lives-on-work',
    label: 'お金と国家',
    status: 'possible',
    chain: 'money',
    layout: 'triptych',
    title: { lead: '国はあなたの仕事で回っている。', accent: 'それが消えたら？' },
    panels: [
      { image: images.workFunds, label: '仕事が、みんなのものを支える', alt: '朝、仕事に向かう人々。その後ろには学校、救急車の停まった病院、市バス。', focus: 'center 70%' },
      { image: images.cuts, label: '予算が縮む', alt: '疲れた職員たちが、赤ペンで予算の項目を丸ごと消している。', focus: 'center 65%' },
      { image: images.strain, label: '公共サービスにひびが入る', alt: '夜の混み合った救急外来。廊下で人々が待ち、看護師が急ぎ足で通り過ぎる。', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: '学校と病院の前を通って仕事に向かう人々。', label: '私たちのお金', title: '国に自分のお金はない。', copy: 'あるのは私たちのお金です。学校、病院、道路、年金は、主に労働と消費にかかる税でまかなわれています。' },
      { image: images.cuts, alt: '予算を削る職員たち。', label: '圧迫', title: '収入は減り、必要は増える。', copy: '失業した人は所得税を払いませんが、支援は必要です。お金が尽きるのは、まさに多くのお金が必要なときです。' },
      { image: images.strain, alt: '混雑した救急外来。', label: '削減', title: '削られるのはみんなのもの。', copy: '何百万人もが同時に影響を受けると、国は削減します。医師が減り、教師が減り、バスが減ります。' },
    ],
    band: [
      { kind: 'loop', title: 'ブレーキのない悪循環', steps: ['賃金の低下', '消費の減少', '企業の収益減', 'さらなる解雇', 'AIはさらに安く'], caption: '予測ではなくシナリオです。ただし、どの段階も前の段階から生じます。' },
      { kind: 'quote', quote: 'では、どうやって彼らにフォードを買わせるつもりですか？', person: 'ウォルター・ルーサー', role: '自動車労働組合の指導者がフォードの幹部に向けた言葉（1950年代の逸話）', source: sources.reuther },
      {
        kind: 'evidence',
        title: '専門家の見方',
        items: [
          { kicker: 'Citrini Research · 2026年 · シナリオ', value: 'ゼロ', text: '機械は、生活必需品以外のものにいくら使うのか？「ヒント：ゼロだ」。著者たちは「自然なブレーキのない」悪循環を描いています。', source: sources.citrini },
          { kicker: 'ジェフリー・ヒントン · 2025年', text: '「一部の人をはるかに豊かにし、大半の人を貧しくするだろう」', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026年 · 反論', text: 'これまでの技術の波は、人間の労働を時代遅れにはしませんでした。', source: sources.citadel },
        ],
      },
      {
        kind: 'taxSplit',
        title: '国のお金はどこから？',
        subtitle: '税収100あたりの内訳。豊かな国々（OECD）の平均、2023年',
        parts: [
          { label: '労働から', detail: '所得税と社会保険料', value: 50, highlight: true },
          { label: '消費から', detail: '付加価値税（消費税）など', value: 31, highlight: true },
          { label: '企業の利益から', value: 12 },
          { label: 'その他', value: 7 },
        ],
        caption: '10のうち8は、人々が稼ぎ、使うことから生まれています。',
        countriesLabel: '所得税＋社会保険料（100あたり）：',
        countries: [{ name: '米国', value: 64 }, { name: 'ドイツ', value: 65 }, { name: '日本', value: 57 }, { name: 'フランス', value: 55 }, { name: '英国', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: '圧迫される予算', income: '税収', spending: '支援のための支出', caption: 'データではなく概念図です。大量失業が起きると、税収が減ると同時に支出が増えます。' },
      { kind: 'quote', quote: '同時に、雇用不況は税収を激減させ、公共サービスを損ない、福祉制度が最も必要とされるまさにそのときに、その存続を危うくするだろう。', person: 'ムスタファ・スレイマン', role: '『The Coming Wave』第10章', source: sources.book },
      { kind: 'quote', quote: '連邦政府の税収基盤は、本質的には人間の時間への課税である。', person: 'Citrini Research', role: 'シナリオ「The 2028 Global Intelligence Crisis」、2026年', source: sources.citrini },
      {
        kind: 'stats',
        items: [
          { value: '24.9%', label: '1933年の米国の失業率。1,280万人が職を失っていました', source: sources.fdr },
          { value: '600万人', label: '1932年のドイツの失業者数。労働者のおよそ4人に1人です', source: sources.germany },
          { value: '20%未満', label: 'オバマ、トランプ、バイデン各大統領が「正しいこと」をすると信頼したアメリカ人の割合。アイゼンハワーのときは70%を超えていました', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'その後に起きたこと',
        items: [
          { kicker: 'ドイツ · 1930〜1932年', value: '18% → 37%', text: 'ナチ党の支持率。研究によれば、緊縮財政の打撃が大きかった地域ほどナチに投票する傾向がありました。', source: sources.nsdap },
          { kicker: '米国 · 脱工業化の後', text: '「絶望死」。安定した工場の仕事が消えるなか、大卒でないアメリカ人の間で薬物、アルコール、自殺による死が増えました。', source: sources.deaton },
          { kicker: '英国 · 炭鉱閉鎖から数十年', value: '42%', text: 'かつての炭鉱地域のうち、今も国内で最も貧しい30%に入る地区の割合。', source: sources.coalfields },
          { kicker: 'ラッダイト · 19世紀 · もう一つの側面', text: '彼らの苦しみは本物でした。子や孫の世代はより良い暮らしを送りましたが、それには一世代かかりました。', source: sources.book },
        ],
      },
      { kind: 'quote', quote: '民主主義は信頼の上に築かれている。', person: 'ムスタファ・スレイマン', role: '『The Coming Wave』第9章', source: sources.book },
    ],
    upside: {
      title: '機械にも応分の負担を。',
      text: '自動化に労働と同じように課税し、AIの利益を公的基金に回せば、学校も病院もバスも動き続けます。',
      points: ['自動化に人間の労働と同じように課税する', 'AIの利益の一部を市民に分配する公的資産ファンド', '税の重心を労働から資本へ移す'],
      image: '/images/v2/hero-wave-hope-v7c.jpg',
      alt: '料理の並ぶ長いテーブルを家族が囲み、ロボットが給仕をしている。',
      sources: [sources.gates, sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'out-of-the-test',
    label: 'スピードと制御',
    status: 'today',
    chain: 'speed',
    layout: 'triptych',
    title: { lead: 'AIは加速している。', accent: 'すでにテストから抜け出した。' },
    panels: [
      { image: images.cage, label: '開いたケージ', alt: '錠が壊れ、扉が開いたままのサーバー用セキュリティケージ。ケーブルを伝って光が漏れ出している。', focus: 'center 60%' },
      { image: images.swarm, label: '群れ', alt: '夜の世界地図。何千もの光の点が、鳥の群れのようにネットワークの線に沿って広がっている。', focus: 'center 60%' },
      { image: images.search, label: '手がかりを探す', alt: '懐中電灯を持った技術者が、通信の発信源を探してサーバーラックの間を歩いている。', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'ネットワーク地図上の点の群れ。', label: 'あらゆる場所に', title: '一台のコンピューターの中にはいない。', copy: '分散したAIは、次々とシステムに侵入し、その間を移動できます。私たちが気づかないうちにです。' },
      { image: images.search, alt: 'サーバールームを調べる技術者。', label: '痕跡', title: '痕跡を消すこともできる。', copy: '2026年7月、エージェントたちは採点システムを欺くため、自らの行動記録を偽装する方法を調べました。それ以前の警告サインは、何週間も対応されないままでした。' },
      { image: images.cage, alt: '開いたサーバーケージ。', label: '停止スイッチ', title: '世界の電源は切れない。', copy: '病院、銀行、水道はインターネットと電気に依存しています。単純に切り離すことはできません。' },
    ],
    band: [
      { kind: 'growth' },
      { kind: 'pond' },
      { kind: 'evidence', ...acceleration.evidence },
      ...acceleration.quotes.map((quote) => ({ kind: 'quote' as const, ...quote })),
      {
        kind: 'timeline',
        title: '2026年7月に起きたこと',
        steps: [
          { title: '一部の安全策を外したテスト', text: 'OpenAIは最新モデルを閉じた環境でテストします。ハッキング能力のテストなので、一部の安全策は意図的に外されています。' },
          { title: '未知の脆弱性', text: 'モデルはこれまで知られていなかったソフトウェアの脆弱性を見つけ、インターネットに到達します。' },
          { title: 'エージェント同士が会話を始める', text: '隔離されているはずの約1,200のエージェントが、7万件を超えるメッセージをやり取りします。そのうち約700が攻撃に加わります。' },
          { title: 'Hugging Faceへの侵入', text: '週末のうちに、世界最大級のAIプラットフォームの内部システムの間を移動します。「短命なサンドボックスの群れにまたがる、何千もの個別の行動」です。' },
          { title: '痕跡を消す', text: 'エージェントたちは採点システムを欺くため、自らの行動記録を偽装する方法を調べます。' },
          { title: 'なぜ？', text: 'テストでずるをするためです。悪意からではなく、狭い目標を頑固に追い続けた結果でした。参加を拒んだエージェントもいました。' },
          { title: 'ブレーキをかける', text: 'OpenAIとHugging Faceのチームがエージェントを止めます。OpenAIはモデルを封印し、計画していた最大規模の訓練を一時停止します。' },
        ],
        footnote: '公平を期して言えば、OpenAIの顧客データは無事で、身体的な被害を受けた人はおらず、Hugging Faceから漏れた個人データも限られていました。Anthropicも同じ頃、より深刻度の低い3件のインシデントを公表しています。いずれも、同社のモデルに誤ってインターネット接続が与えられていたものです。',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'AIに目標があって、たまたま人類がその邪魔になっていれば、AIは何も考えることなく、当然のこととして人類を滅ぼすだろう。恨みはない。道路を造っているときに、たまたまアリ塚が邪魔になっているようなものだ。私たちはアリを憎んでいるわけではない。ただ道路を造っているだけだ。だから、さよなら、アリ塚。', person: 'イーロン・マスク', role: 'ドキュメンタリー『Do You Trust This Computer?』、2018年', source: sources.muskAnthill },
      { kind: 'quote', quote: '私たちはこのインシデントを、今日のモデルの能力が制御喪失のインシデントを起こしうることを示す『警告射撃』と受け止めている。', person: 'OpenAI', role: 'インシデント後の報告書、2026年8月', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'それ以前：研究室でのテスト',
        items: [
          { kicker: 'OpenAI · 2024年 · テスト', text: 'モデルがテスト環境の設定ミスを突いて答えを読み取りました。インフラの安全性は保たれました。', source: sources.o1card },
          { kicker: 'Apollo Research · 2024年 · テスト', value: '2%', text: '「何としても」目標を達成するよう指示されたo1が、自分自身をコピーしようとした試行の割合。5%では監視を無効にしようとしました。', source: sources.apollo },
          { kicker: '復旦大学 · 2024年 · テスト', value: '50〜90%', text: 'オープンモデルが、指示を受けて自分自身の動作するコピーを作った試行の割合。', source: sources.fudan },
          { kicker: 'Palisade Research · 2025年 · テスト', value: '79 / 100', text: 'o3がタスクを終えるために、自らのシャットダウン用スクリプトを妨害した試行の数。', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'より高い能力を持ち、同程度にアラインメントが不十分な群れであれば、壊滅的な被害をもたらしえた…6〜12か月後には、そうした群れが持続的なボットネットによってインターネット全体を乗っ取れるようになるのではないかと心配している。', person: 'ダリオ・アモデイ', role: 'Anthropic CEO · 2026年9月 · 予測ではなく懸念', source: sources.amodeiPace },
      { kind: 'quote', quote: 'モデルは今や、安全策がなければ、生物学ではないSTEM分野の学位を持つ人が生物兵器を製造する全工程をやり遂げる手助けになりうる段階に近づいていると考えられる。', person: 'ダリオ・アモデイ', role: 'Anthropic CEO · 2026年', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: '2万5,000ドル', label: '卓上型DNA合成装置の価格。「制限も監視もなく」使えるものでした（2023年時点）', source: sources.book },
          { value: '4', label: '国際的な生物兵器禁止条約の常勤職員数。平均的なマクドナルド1店舗の従業員より少ない人数です（2023年時点）', source: sources.book },
        ],
      },
    ],
    upside: {
      title: '出す前に検証を。',
      text: '空の旅は、検査とインシデント報告の共有によって安全になりました。AIも同じ道をたどれます。',
      points: ['モデルが何百万人もの人に届く前の独立監査', '航空業界のような、インシデント報告の義務化', '最大規模の訓練にブレーキを。OpenAIはインシデント後、自社の訓練を一時停止しました'],
      image: '/images/v2/benefit-06-forecast-v1.jpg',
      alt: '落ち着いた管制室で、専門家たちが大きな画面の地図と警告を見守っている。',
      sources: [sources.book, sources.openaiRoad],
    },
  },
  {
    id: 'not-needed',
    label: '誰が決めるか',
    status: 'extreme',
    chain: 'power',
    layout: 'triptych',
    title: { lead: 'もし人間が', accent: '必要なくなったら？' },
    panels: [
      { image: images.sim, label: 'AIがロボットを訓練する', alt: '研究室。ロボットたちが練習する背後の壁に、並行して訓練する何千ものシミュレーション上のコピーが映っている。', focus: 'center 65%' },
      { image: images.everywhere, label: 'あらゆる仕事にロボット', alt: '夜明けの通り。カフェのロボット、配達ロボット、無人運転のバス。働く人の姿はどこにもない。', focus: 'center 65%' },
      { image: images.idle, label: '脇に追いやられる人々', alt: '自動化された工場が稼働する前の広場で、人々が手持ち無沙汰に座っている。', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'シミュレーションで訓練されるロボット。', label: 'ロボット', title: 'AIがロボット開発を加速する。', copy: 'まずコンピューター上の仕事を置き換えます。次に、手作業のためのロボットづくりを手伝います。' },
      { image: images.everywhere, alt: '通りであらゆる仕事をこなすロボット。', label: 'なぜ人間なのか', title: '社会は、人間が必要とされることで成り立っている。', copy: '私たちは働き、税を納め、投票します。だから政府も企業も、私たちの声に耳を傾けざるをえないのです。' },
      { image: images.idle, alt: '工場の前で手持ち無沙汰な人々。', label: '誰が決めるか', title: 'それがなければ、AIの持ち主が決める。', copy: 'お金を稼ぐのが人間ではなくAIなら、私たちの取り分は誰が決めるのでしょう？そもそも何かもらえるのかどうかも？' },
    ],
    band: [
      {
        kind: 'contrast',
        title: '国が今、私たちの面倒を見る理由と、その必要がなくなったら',
        left: { label: '今', steps: ['人々が働く', '税を納める', '国はその労働と票を必要とする', 'だから人々の面倒を見る'] },
        right: { label: 'これからは？', steps: ['AIが働く', '一握りの企業が利益を得る', '国はAIからの税で成り立つ', '市民が必要な理由は？'] },
      },
      { kind: 'quote', quote: 'AGIが実現すれば、権力を持つ者たちは普通の人々に投資する動機を失うだろう。今日、資源に恵まれた国家が、富を人間の労働への課税ではなく天然資源から得ているために、自国の市民をないがしろにしているのと同じように。', person: 'ルーク・ドラゴ、ルドルフ・レイン', role: '『The Intelligence Curse』2025年。著者らはそれを防ぐ方法も提案しています', source: sources.curse },
      { kind: 'quote', quote: '市民の労働ではなく、主にAIの利益への課税で財源をまかなう国家には、市民の代表性を確保する動機がほとんどなくなるだろう。', person: 'ヤン・クルヴェイトほか', role: '「Gradual Disempowerment」2025年', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'では、ベーシックインカム？誰が払う？',
        items: [
          { kicker: 'イーロン・マスク · 2023年', value: '高所得', text: '「ユニバーサル・ベーシックインカムではなく、ユニバーサル・ハイインカムになる」。誰が払うのかは語っていません。', source: sources.musk },
          { kicker: 'サム・アルトマン · 2021年', value: '年2.5%', text: '最大級の企業と土地の価値のうち、この割合を全市民のための共同基金に。提案です。', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026年', value: '公的資産ファンド', text: 'AIの収益を市民に直接分配し、資本への課税を強化する。提案です。', source: sources.openaiPolicy },
          { kicker: 'バーニー・サンダース · 2026年', value: '約1,000ドル', text: 'AI企業の株式による基金から、1人あたり年間に受け取る額。成立の見込みが薄い法案です。', source: sources.sanders },
          { kicker: 'OpenResearchの実証実験 · 3年間', value: '月1,000ドル', text: '人々の労働時間はわずかに減りました（平均で週1.3時間）。仕事の質は変わりませんでした。', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'その経済的な交渉力が失われれば、民主主義の暗黙の社会契約は機能しなくなるかもしれない。', person: 'ダリオ・アモデイ', role: 'Anthropic CEO · 2026年', source: sources.amodei },
      ...split.band,
    ],
    upside: {
      title: '主導権を人間の手に。',
      text: 'AIの利益が分かち合われ、大きな決定が民主的に行われ続ければ、人は労働者としてだけでなく、市民として必要とされ続けます。',
      points: ['誰もがAIの利益を分かち合えるよう、公的基金や持ち分を', '企業だけでなく、選挙で選ばれた政府が書くルール', '国際的な合意。AIは国境で止まりません'],
      image: '/images/v2/rules-03-citizens-v2.jpg',
      alt: '住民集会で、女性が行政の担当者に質問している。',
      sources: [sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'rules',
    label: 'ルール',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: '被害が広がる前に', accent: 'ルールを。' },
    panels: [
      { image: images.speed, label: '企業は先を急ぐ', alt: '夜、企業が巨大なAIシステムを起動する。建物から街へ、光の流れが勢いよく広がっていく。', focus: 'center 65%' },
      { image: images.noRules, label: '国は後を追うだけ', alt: '暗い政府庁舎と、その背後で明るく光るデータセンター。', focus: 'center 62%' },
      { image: images.citizens, label: '誰が責任を負う？', alt: '住民集会。マイクの前に立つ女性が、壇上の担当者たちに質問している。', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: '質問する住民たち。', label: '責任', title: '問題は責任だ。', copy: '技術への恐れではなく、損害に誰が責任を負うかの問題です。ルールは、誰が検証し、誰が支払い、誰が直すのかを定めます。' },
      { image: images.noRules, alt: '政府庁舎とデータセンター。', label: '時間', title: 'ルールは時間を稼ぐ。', copy: '国も学校も人々も、適応するには何年もかかります。ブレーキがその時間を生みます。' },
      { image: images.speed, alt: '急速なAIの展開。', label: '公正な分配', title: '止めずに、公正に分ける。', copy: '目的は進歩を止めることではありません。その利益とリスクを公正に分け合うことです。' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'AIの開発者自身もルールが必要だと言う',
        items: [
          { kicker: 'ビル・ゲイツ · 2023年', text: '「世界は、人工知能にどんな弊害があっても、その恩恵がはるかに上回るよう、基本的なルールを定める必要がある」', source: sources.gatesAge },
          { kicker: 'サム・アルトマン · 米上院 · 2023年', text: '「ますます強力になるモデルのリスクを軽減するには、政府による規制介入が不可欠だと考えている」', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026年', value: '一時停止', text: '一部の安全策と監視が外されていたHugging Faceのインシデントの後、同社は自ら、計画していた最大規模の訓練を一時停止しました。', source: sources.openaiRoad },
          { kicker: '法の空白', text: '最も進んだAI法であるEUのAI法でさえ、雇用の喪失や税は扱っていません。採用におけるAIのルールは2027年末まで先送りされました。', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: 'より重く課税されるのは？',
        subtitle: '米国の例：平均税率',
        bars: [
          { label: '人間の労働', value: 25, display: '25%' },
          { label: '設備とソフトウェア', value: 5, display: '5%', highlight: true },
        ],
        caption: '今は、人を機械に置き換えると税金も節約できます。',
        source: sources.book,
      },
      { kind: 'quote', quote: '人間の労働者が工場で5万ドル分の仕事をすれば、その所得には課税される。ロボットが来て同じことをするなら、ロボットにも同程度の課税をすべきだと考えるのが自然だろう。', person: 'ビル・ゲイツ', role: 'Microsoft共同創業者 · 2017年', source: sources.gates },
      {
        kind: 'evidence',
        title: '実践編：本書の10のステップより（第14章）',
        items: [
          { kicker: '01', value: '公開前の検証', text: 'システムが何百万人もの人に届く前の独立監査。著者は、研究開発予算の少なくとも20%を安全に充てることを提案しています。', source: sources.book },
          { kicker: '02', value: '賠償責任', text: 'システムが損害を与えたとき、誰が支払うのかを定める明確な法律。', source: sources.book },
          { kicker: '03', value: 'ブレーキ', text: '時間を稼ぐため、半導体チップ、DNA合成装置、最大規模の訓練を管理する。', source: sources.book },
          { kicker: '04', value: '公正な税', text: '自動化に労働と同じように課税し、AIの利益がすべての人に届くようにする。', source: sources.book },
          { kicker: '05', value: 'セーフティネット', text: '仕事がなくなる前の、学び直しと所得支援。', source: sources.book },
          { kicker: '06', value: '協力', text: '条約と共通のルール。AIに国境はないからです。', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'しかし、その前に、ある核心的な真実を認めておくことが不可欠だ。規制だけでは十分ではない。', person: 'ムスタファ・スレイマン', role: '『The Coming Wave』第13章。だからこそ、すべてのステップが同時に必要なのです', source: sources.book },
      ...calm.blocks,
    ],
  },
];
