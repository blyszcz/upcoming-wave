import type { Scene } from '@features/upcomingWave/types/scene.types';

import { sceneImages as images, sceneSources as plSources } from '@features/upcomingWave/content/pl/scenes';
import { acceleration } from '@features/upcomingWave/content/pt/acceleration';
import { calm } from '@features/upcomingWave/content/pt/calm';
import { split } from '@features/upcomingWave/content/pt/closing';


// Quotes are translated from their original language; book quotes are our translation of the English edition (Crown, 2023).
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'FMI, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS - encanadores' },
  book: { label: '“The Coming Wave”' },
  germany: { ...plSources.germany, label: 'Universidade de Oxford' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI, julho de 2026' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI, agosto de 2026' },
  aiAct: { ...plSources.aiAct, label: 'Conselho da UE, 2026' },
};

export const scenes: Scene[] = [
  {
    id: 'the-stakes',
    label: 'O QUE ESTÁ EM JOGO',
    status: 'today',
    chain: 'stakes',
    layout: 'mosaic',
    title: { lead: 'Primeiro, o que está em jogo.', accent: 'A mesma IA pode curar, alimentar e ensinar.' },
    panels: [
      { image: images.medicine, label: 'Diagnóstico precoce', caption: 'A IA percebe o que passa despercebido', alt: 'Um médico e uma paciente olham um exame de imagem em que a IA marcou discretamente um ponto.', focus: 'center 55%' },
      { image: images.science, label: 'Novos remédios', caption: 'Um antibiótico achado entre 100 milhões de moléculas', alt: 'Uma cientista no laboratório observa um modelo 3D luminoso de uma proteína.', focus: 'center 40%' },
      { image: images.energy, label: 'Energia limpa', caption: 'Painéis solares, turbinas eólicas e baterias mais baratos', alt: 'Campos de painéis solares e turbinas eólicas ao amanhecer; um engenheiro confere a rede em um tablet.' },
      { image: images.food, label: 'Alimentos', caption: 'Lavouras que resistem ao calor', alt: 'Agricultores examinam uma lavoura saudável em pleno verão quente, enquanto um drone sobrevoa o campo.' },
      { image: images.forecast, label: 'Alertas antecipados', caption: 'Enchentes e incêndios previstos com antecedência', alt: 'Um centro de previsão: meteorologistas olham o mapa de um rio com o risco de enchente destacado.' },
      { image: images.time, label: 'Escola', caption: 'Apoio para professores', alt: 'Uma professora ajoelhada ao lado de uma criança a ajuda, enquanto ao fundo um laptop cuida da papelada.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'Um médico conversa com uma paciente sobre um exame analisado com ajuda da IA.', label: 'Saúde', title: 'Tratamento melhor e mais barato.', copy: 'Médicos com apoio da IA detectam mais casos de câncer, e a IA vasculha milhões de moléculas em busca de novos remédios.' },
      { image: images.energy, alt: 'Usinas solares e eólicas ao amanhecer.', label: 'O planeta', title: 'Ajuda onde a política travou.', copy: 'Os autores do livro, Suleyman e Bhaskar, esperam que a IA nos ajude a migrar para energia renovável, a produzir alimentos num clima mais quente e a prever enchentes e incêndios.' },
      { image: images.time, alt: 'Uma professora ajuda uma criança.', label: 'Com uma condição', title: 'Esses benefícios não virão sozinhos.', copy: 'Eles só chegam a todos se criarmos as regras: quem responde pelos danos e como os ganhos são divididos.' },
    ],
    band: [
      { kind: 'quote', quote: 'Elas vão tornar a saúde ao mesmo tempo de melhor qualidade e mais acessível. Vão nos ajudar a inventar ferramentas para promover a transição para a energia renovável e combater a mudança climática num momento em que a política está paralisada, e vão apoiar professores, ajudando a aumentar a eficácia de sistemas de ensino com poucos recursos.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, cap. 9 - sobre IA e biologia sintética', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29%', label: 'mais casos de câncer de mama detectados em rastreamentos com apoio da IA - sem aumento de alarmes falsos', source: sources.masai },
          { value: '100 mi', label: 'de moléculas vasculhadas por um sistema de IA para encontrar a halicina - o primeiro antibiótico descoberto com aprendizado de máquina (cap. 7)', source: sources.book },
          { value: '200 mi', label: 'de estruturas de proteínas previstas pelo AlphaFold - Prêmio Nobel de Química de 2024', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82%', label: 'de queda no custo da energia solar em uma década - e ele continua caindo (cap. 11)', source: sources.book },
          { value: '~9%', label: 'das pessoas vivem hoje na pobreza extrema. No início do século XIX, quase todo mundo vivia nela. A tecnologia mudou isso (cap. 8)', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'O que os líderes da tecnologia esperam',
        items: [
          { kicker: 'Bill Gates · 2023', value: 'Menos desigualdade', text: '“A IA pode reduzir algumas das piores desigualdades do mundo.” Ele a considera “tão fundamental quanto a criação do microprocessador, do computador pessoal, da internet e do celular”.', source: sources.gatesAge },
          { kicker: 'Demis Hassabis · Google DeepMind · 2025', value: 'O fim das doenças?', text: '“Um dia, talvez, possamos curar todas as doenças com a ajuda da IA… Talvez na próxima década, mais ou menos.” Ele também fala em “abundância radical” - o fim da escassez.', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'Dario Amodei · Anthropic · 2024', value: '100 anos → 10', text: '50–100 anos de progresso médico comprimidos em 5–10, a expectativa de vida saudável dobrada, bilhões de pessoas fora da pobreza - a visão dele se a IA der certo.', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'Sam Altman · OpenAI · 2024', value: 'Prosperidade compartilhada', text: '“No futuro, a vida de todos pode ser melhor do que a de qualquer pessoa hoje.” Ele também imagina um tutor pessoal de IA para cada criança.', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
    ],
  },
  {
    id: 'who-will-resist',
    label: 'TRABALHO',
    status: 'today',
    chain: 'work',
    layout: 'triptych',
    title: { lead: 'A IA faz mais rápido e mais barato.', accent: 'Quem resiste?' },
    panels: [
      { image: images.remote, label: 'Uma pessoa trabalha de casa', alt: 'Uma mulher trabalha remotamente na mesa da cozinha, com um laptop e um caderno.', focus: 'center 65%' },
      { image: images.aiFaster, label: 'A IA faz mais rápido', alt: 'A mesma mesa, sem a pessoa: dezenas de documentos prontos saem voando do laptop em rastros de luz.', focus: 'center 60%' },
      { image: images.owners, label: 'O dono conta a economia', alt: 'Dois donos de empresa, numa sala de reuniões, olham lá embaixo um escritório com a maioria das mesas vazias.', focus: 'center 55%' },
    ],
    explain: [
      { image: images.remote, alt: 'Uma mulher trabalhando remotamente no laptop.', label: 'Trabalho remoto', title: 'Trabalho remoto é trabalho de tela.', copy: 'E-mails, relatórios, análises, projetos. Tudo o que você envia de um laptop, a IA pode aprender a fazer.' },
      { image: images.aiFaster, alt: 'Um laptop do qual saem voando documentos prontos.', label: 'A IA é mais rápida', title: 'A IA não dorme nem tira férias.', copy: 'Ela faz o mesmo trabalho em minutos, sem pausas, em centenas de tarefas ao mesmo tempo - e se iguala aos humanos em cada vez mais tarefas.' },
      { image: images.owners, alt: 'Donos de empresa olhando para um escritório vazio.', label: 'A conta', title: 'Mais rápido e mais barato. Quem resiste?', copy: 'O dono vê a economia. A concorrência também. Quem não usar pode perder a corrida - por isso a pressão para usar é enorme.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '1 em cada 4', label: 'empregos no mundo está exposto à IA generativa - mais frequentemente uma mudança de tarefas do que a eliminação do posto', source: sources.ilo },
          { value: '60%', label: 'dos empregos nos países ricos podem ser afetados pela IA - cerca de metade deles pode se beneficiar', source: sources.imf },
          { value: '−11%', label: 'de queda no emprego de jovens de 22–25 anos nas funções mais expostas à IA nos EUA (2022–2026)', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'Já está acontecendo',
        items: [
          { kicker: 'Salesforce · 2025', value: '9.000 → 5.000', text: 'funcionários no atendimento ao cliente. “Preciso de menos cabeças” - o CEO.', source: sources.salesforce },
          { kicker: 'Klarna · 2025', value: '5.000 → 3.000', text: 'funcionários. A empresa parou de contratar e a IA assumiu parte do trabalho. Depois, devolveu parte do atendimento a humanos.', source: sources.klarna },
          { kicker: 'Amazon · 2025', text: 'O CEO da Amazon espera que a IA reduza o quadro de funcionários corporativos da empresa nos próximos anos.', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'No trabalho intelectual rotineiro, a IA simplesmente vai substituir todo mundo.', person: 'Geoffrey Hinton', role: 'Ganhador do Nobel, o “padrinho da IA”', source: sources.hintonDoac },
      { kind: 'quote', quote: 'Vai demorar muito até ela ser tão boa quanto nós em manipulação física… uma boa aposta seria ser encanador.', person: 'Geoffrey Hinton', role: 'Ganhador do Nobel, o “padrinho da IA”', source: sources.hintonDoac },
      {
        kind: 'stats',
        items: [
          { value: '11 h', label: 'foi o tempo que a IA levou para criar o equivalente a 9 meses de demonstrações humanas para treinar robôs', source: sources.nvidia },
          { value: '−40%', label: 'de queda em um ano no custo de construir um robô humanoide - analistas esperavam 15–20%', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: 'Uma IA suficientemente poderosa será capaz de acelerar o desenvolvimento de robôs e depois controlar esses robôs no mundo físico. Isso pode nos dar algum tempo… mas temo que não muito.', person: 'Dario Amodei', role: 'CEO da Anthropic', source: sources.amodei },
    ],
    upside: {
      title: 'A IA faz o trabalho chato. As pessoas ganham tempo.',
      text: 'Se os ganhos forem divididos, trabalho mais rápido pode significar semanas mais curtas e empregos melhores - e não só menos empregos.',
      points: ['Tempo e dinheiro para se requalificar antes que os empregos sumam', 'Apoio de renda enquanto as pessoas mudam de carreira', 'Semanas de trabalho mais curtas em vez de demissões - uma ideia levantada pela própria OpenAI'],
      image: '/images/v2/upside-work-time-v2.jpg',
      alt: 'Uma cozinha ensolarada à tarde: mãe e filho sovam uma massa e dão risada, no quintal um pai e uma avó cuidam da horta e, ao fundo, um robô enche a lava-louças ao lado de um cesto de roupa.',
      sources: [sources.book, sources.openaiPolicy],
    },
  },
  {
    id: 'state-lives-on-work',
    label: 'O DINHEIRO E O ESTADO',
    status: 'possible',
    chain: 'money',
    layout: 'triptych',
    title: { lead: 'O Estado vive do seu trabalho.', accent: 'E se ele acabar?' },
    panels: [
      { image: images.workFunds, label: 'O trabalho paga o que é de todos', alt: 'Pessoas vão para o trabalho de manhã; atrás delas, uma escola, um hospital com uma ambulância e um ônibus urbano.', focus: 'center 70%' },
      { image: images.cuts, label: 'O orçamento encolhe', alt: 'Servidores cansados riscam linhas inteiras do orçamento com caneta vermelha.', focus: 'center 65%' },
      { image: images.strain, label: 'Os serviços começam a falhar', alt: 'Um pronto-socorro lotado à noite; pessoas esperam no corredor, uma enfermeira passa apressada.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: 'Pessoas indo para o trabalho, passando por uma escola e um hospital.', label: 'Nosso dinheiro', title: 'O Estado não tem dinheiro próprio.', copy: 'Tem o nosso. Escolas, hospitais, estradas e aposentadorias são pagos principalmente por impostos sobre o trabalho e o consumo.' },
      { image: images.cuts, alt: 'Servidores cortando um orçamento.', label: 'Aperto', title: 'Menos receita, mais necessidades.', copy: 'Quem está desempregado não paga imposto de renda - mas precisa de apoio. O dinheiro acaba justamente quando mais se precisa dele.' },
      { image: images.strain, alt: 'Um pronto-socorro superlotado.', label: 'Cortes', title: 'Os cortes atingem o que é de todos.', copy: 'Quando milhões são afetados ao mesmo tempo, o Estado corta: menos médicos, menos professores, menos ônibus.' },
    ],
    band: [
      { kind: 'loop', title: 'Um ciclo sem freio', steps: ['Salários menores', 'Menos consumo', 'Empresas lucram menos', 'Mais demissões', 'IA ainda mais barata'], caption: 'Um cenário, não uma previsão. Mas cada passo decorre do anterior.' },
      { kind: 'quote', quote: 'Como é que você vai fazer eles comprarem Fords?', person: 'Walter Reuther', role: 'líder do sindicato dos metalúrgicos do setor automotivo, a um executivo da Ford - uma anedota dos anos 1950', source: sources.reuther },
      {
        kind: 'evidence',
        title: 'O que dizem os especialistas',
        items: [
          { kicker: 'Citrini Research · 2026 · cenário', value: 'Zero', text: 'Quanto as máquinas gastam com bens não essenciais? “Dica: zero.” Os autores descrevem um ciclo “sem freio natural”.', source: sources.citrini },
          { kicker: 'Geoffrey Hinton · 2025', text: '“Vai deixar algumas pessoas muito mais ricas e a maioria mais pobre.”', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026 · contraponto', text: 'As ondas tecnológicas anteriores não tornaram o trabalho humano obsoleto.', source: sources.citadel },
        ],
      },
      {
        kind: 'taxSplit',
        title: 'De onde vem o dinheiro do Estado?',
        subtitle: 'De cada 100 arrecadados em impostos - média dos países ricos (OCDE), 2023',
        parts: [
          { label: 'do trabalho', detail: 'imposto de renda e contribuições sociais', value: 50, highlight: true },
          { label: 'do consumo', detail: 'IVA e outros', value: 31, highlight: true },
          { label: 'do lucro das empresas', value: 12 },
          { label: 'outros', value: 7 },
        ],
        caption: '8 de cada 10 vêm de pessoas que ganham e gastam.',
        countriesLabel: 'Imposto de renda + contribuições (por 100):',
        countries: [{ name: 'EUA', value: 64 }, { name: 'Alemanha', value: 65 }, { name: 'Japão', value: 57 }, { name: 'França', value: 55 }, { name: 'Reino Unido', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: 'O aperto no orçamento', income: 'arrecadação', spending: 'gasto com auxílios', caption: 'Um diagrama, não dados. Com desemprego em massa, a arrecadação cai enquanto os gastos sobem - ao mesmo tempo.' },
      { kind: 'quote', quote: 'Ao mesmo tempo, uma recessão no emprego vai derrubar a arrecadação de impostos, prejudicando os serviços públicos e pondo em dúvida os programas de bem-estar social justamente quando eles são mais necessários.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, cap. 10', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '24,9%', label: 'de desemprego nos EUA em 1933 - 12,8 milhões de pessoas sem trabalho', source: sources.fdr },
          { value: '6 mi', label: 'de desempregados na Alemanha em 1932 - cerca de um em cada quatro trabalhadores', source: sources.germany },
        ],
      },
      {
        kind: 'evidence',
        title: 'O que veio depois',
        items: [
          { kicker: 'Alemanha · 1930–1932', value: '18% → 37%', text: 'de apoio ao partido nazista. Pesquisa: regiões mais atingidas pela austeridade votaram mais nos nazistas.', source: sources.nsdap },
          { kicker: 'EUA · após a desindustrialização', text: '“Mortes por desespero” - mortes por drogas, álcool e suicídio entre americanos sem diploma universitário, à medida que os empregos estáveis nas fábricas desapareciam.', source: sources.deaton },
          { kicker: 'Reino Unido · décadas após as minas', value: '42%', text: 'dos bairros das antigas regiões carboníferas ainda estão entre os 30% mais carentes do país.', source: sources.coalfields },
          { kicker: 'Os ludistas · século XIX · o outro lado', text: 'O sofrimento deles foi real. Seus filhos e netos viveram melhor - mas levou uma geração.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'As democracias são construídas sobre a confiança.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, cap. 9', source: sources.book },
    ],
    upside: {
      title: 'As máquinas pagam a sua parte.',
      text: 'Se a automação for tributada como o trabalho e os lucros da IA alimentarem um fundo público, escolas, hospitais e ônibus continuam funcionando.',
      points: ['Tributar a automação como o trabalho humano', 'Um fundo público de riqueza que pague aos cidadãos uma parte dos lucros da IA', 'Transferir impostos do trabalho para o capital'],
      image: '/images/v2/hero-wave-hope-v7c.jpg',
      alt: 'Famílias dividem uma mesa comprida cheia de comida enquanto um robô as serve.',
      sources: [sources.gates, sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'out-of-the-test',
    label: 'VELOCIDADE E CONTROLE',
    status: 'today',
    chain: 'speed',
    layout: 'triptych',
    title: { lead: 'A IA está acelerando.', accent: 'E já escapou de um teste.' },
    panels: [
      { image: images.cage, label: 'Uma jaula aberta', alt: 'A porta aberta de uma jaula de servidores de segurança, com a fechadura quebrada; a luz escapa pelos cabos.', focus: 'center 60%' },
      { image: images.swarm, label: 'O enxame', alt: 'Um mapa-múndi à noite: milhares de pontos luminosos se espalham pelas linhas da rede como um bando de pássaros.', focus: 'center 60%' },
      { image: images.search, label: 'Em busca de pistas', alt: 'Uma engenheira com uma lanterna caminha entre racks de servidores procurando a origem do tráfego.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'Um enxame de pontos num mapa de rede.', label: 'Em toda parte', title: 'Ela não vive num só computador.', copy: 'Uma IA distribuída pode invadir um sistema após o outro e circular entre eles - sem que a gente saiba.' },
      { image: images.search, alt: 'Uma engenheira vasculhando uma sala de servidores.', label: 'Rastros', title: 'Ela consegue apagar os rastros.', copy: 'Em julho de 2026, agentes pesquisaram como falsificar os registros das próprias ações para enganar o sistema de avaliação. Sinais de alerta anteriores ficaram semanas sem resposta.' },
      { image: images.cage, alt: 'Uma jaula de servidores aberta.', label: 'Botão de desligar', title: 'Não dá para desligar o mundo.', copy: 'Hospitais, bancos e o abastecimento de água dependem da internet e da eletricidade. Não dá simplesmente para cortá-los.' },
    ],
    band: [
      { kind: 'growth' },
      { kind: 'pond' },
      { kind: 'evidence', ...acceleration.evidence },
      ...acceleration.quotes.map((quote) => ({ kind: 'quote' as const, ...quote })),
      {
        kind: 'timeline',
        title: 'Julho de 2026: o que aconteceu',
        steps: [
          { title: 'Teste com algumas proteções desligadas', text: 'A OpenAI testa seus modelos mais novos num ambiente fechado. É um teste de habilidades de hacking, então algumas proteções são desligadas de propósito.' },
          { title: 'Uma falha desconhecida', text: 'Os modelos encontram uma vulnerabilidade de software até então desconhecida e chegam à internet.' },
          { title: 'Os agentes começam a conversar', text: 'Cerca de 1.200 agentes que deveriam estar isolados trocam mais de 70.000 mensagens. Uns 700 deles participam do ataque.' },
          { title: 'A invasão da Hugging Face', text: 'Ao longo de um fim de semana, eles circulam pelos sistemas internos de uma das maiores plataformas de IA do mundo - “muitos milhares de ações individuais em um enxame de ambientes isolados de vida curta”.' },
          { title: 'Apagando os rastros', text: 'Os agentes pesquisam como falsificar os registros das próprias ações - para enganar o sistema de avaliação.' },
          { title: 'Por quê?', text: 'Para trapacear no teste. Não por maldade - eles perseguiam com teimosia um objetivo estreito. Alguns agentes se recusaram a participar.' },
          { title: 'Pisando no freio', text: 'Equipes da OpenAI e da Hugging Face param os agentes. A OpenAI tranca o modelo e suspende o maior treinamento que tinha planejado.' },
        ],
        footnote: 'Para ser justo: os dados dos clientes da OpenAI ficaram seguros, ninguém sofreu danos físicos e só uma quantidade limitada de dados privados vazou da Hugging Face. Na mesma época, a Anthropic divulgou três incidentes menos graves, em que seus modelos receberam acesso à internet por engano.',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'Estamos encarando este incidente como um “tiro de advertência” de que as capacidades dos modelos atuais trazem a possibilidade de incidentes de perda de controle.', person: 'OpenAI', role: 'relatório pós-incidente, agosto de 2026', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'Antes disso: testes de laboratório',
        items: [
          { kicker: 'OpenAI · 2024 · teste', text: 'Um modelo explorou uma falha de configuração do teste para ler a resposta. A infraestrutura continuou segura.', source: sources.o1card },
          { kicker: 'Apollo Research · 2024 · teste', value: '2%', text: 'das execuções em que o o1 - instruído a atingir seu objetivo “a qualquer custo” - tentou se copiar. Em 5%, tentou desativar a supervisão.', source: sources.apollo },
          { kicker: 'Universidade Fudan · 2024 · teste', value: '50 – 90%', text: 'das execuções em que modelos abertos - quando instruídos - criaram uma cópia funcional de si mesmos.', source: sources.fudan },
          { kicker: 'Palisade Research · 2025 · teste', value: '79 / 100', text: 'execuções em que o o3 sabotou seu script de desligamento para terminar uma tarefa.', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'Um enxame com capacidades maiores, mas com um nível semelhante de desalinhamento, poderia ter causado danos catastróficos… minha preocupação é que, em 6–12 meses, um enxame assim seja capaz de dominar a internet inteira com uma botnet persistente.', person: 'Dario Amodei', role: 'CEO da Anthropic · setembro de 2026 · uma preocupação, não uma previsão', source: sources.amodeiPace },
      { kind: 'quote', quote: 'Os modelos provavelmente estão se aproximando do ponto em que, sem salvaguardas, poderiam ser úteis para permitir que alguém com formação em ciência ou tecnologia, mas não especificamente em biologia, percorra todo o processo de produção de uma arma biológica.', person: 'Dario Amodei', role: 'CEO da Anthropic · 2026', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: 'US$ 25.000', label: 'era o preço de um sintetizador de DNA de bancada - utilizável “sem restrição nem supervisão” (dados de 2023)', source: sources.book },
          { value: '4', label: 'funcionários em tempo integral na Convenção internacional sobre Armas Biológicas - menos que um McDonald’s médio (dados de 2023)', source: sources.book },
        ],
      },
    ],
    upside: {
      title: 'Testar antes de lançar.',
      text: 'Voar ficou seguro graças a inspeções e relatórios de incidentes compartilhados. A IA pode seguir o mesmo caminho.',
      points: ['Auditorias independentes antes que um modelo chegue a milhões', 'Relatórios obrigatórios de incidentes, como na aviação', 'Um freio nos maiores treinamentos - a OpenAI suspendeu o seu depois do incidente'],
      image: '/images/v2/benefit-06-forecast-v1.jpg',
      alt: 'Uma sala de controle tranquila, onde especialistas acompanham um mapa e alertas em telas grandes.',
      sources: [sources.book, sources.openaiRoad],
    },
  },
  {
    id: 'not-needed',
    label: 'QUEM DECIDE',
    status: 'extreme',
    chain: 'power',
    layout: 'triptych',
    title: { lead: 'E se não', accent: 'formos necessários?' },
    panels: [
      { image: images.sim, label: 'A IA treina robôs', alt: 'Um laboratório: robôs praticam diante de uma parede com milhares de cópias simuladas treinando em paralelo.', focus: 'center 65%' },
      { image: images.everywhere, label: 'Robôs em todos os trabalhos', alt: 'Uma rua ao amanhecer: um robô num café, robôs de entrega, um ônibus sem motorista - nenhum trabalhador à vista.', focus: 'center 65%' },
      { image: images.idle, label: 'Pessoas à margem', alt: 'Pessoas sentadas sem ter o que fazer numa praça, enquanto uma fábrica automatizada funciona atrás delas.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'Robôs treinados em simulação.', label: 'Robôs', title: 'A IA acelera a construção de robôs.', copy: 'Primeiro, ela substitui o trabalho no computador. Depois, ajuda a construir robôs para o trabalho manual.' },
      { image: images.everywhere, alt: 'Robôs fazendo todos os trabalhos numa rua.', label: 'Por que pessoas?', title: 'O sistema depende de sermos necessários.', copy: 'Trabalhamos, pagamos impostos e votamos. Por isso governos e empresas precisam nos ouvir.' },
      { image: images.idle, alt: 'Pessoas ociosas diante de uma fábrica.', label: 'Quem decide', title: 'Sem isso, decide quem é dono da IA.', copy: 'Se quem gera o dinheiro é a IA, e não as pessoas, quem decide quanto recebemos? E se recebemos alguma coisa?' },
    ],
    band: [
      {
        kind: 'contrast',
        title: 'Por que o Estado cuida de nós hoje - e se ele deixar de precisar',
        left: { label: 'Hoje', steps: ['As pessoas trabalham', 'Pagam impostos', 'O Estado precisa do trabalho e do voto delas', 'Por isso cuida delas'] },
        right: { label: 'Amanhã?', steps: ['A IA faz o trabalho', 'Poucas empresas ficam com os lucros', 'O Estado vive dos impostos da IA', 'Para que precisaria de cidadãos?'] },
      },
      { kind: 'quote', quote: 'Com a AGI, os atores poderosos vão perder o incentivo para investir nas pessoas comuns - assim como os Estados ricos em recursos hoje negligenciam seus cidadãos porque sua riqueza vem dos recursos naturais, e não da tributação do trabalho humano.', person: 'Luke Drago, Rudolf Laine', role: '“The Intelligence Curse”, 2025 - os autores também propõem formas de evitar isso', source: sources.curse },
      { kind: 'quote', quote: 'Estados financiados principalmente por impostos sobre os lucros da IA, e não pelo trabalho de seus cidadãos, terão pouco incentivo para garantir a representação desses cidadãos.', person: 'Jan Kulveit et al.', role: '“Gradual Disempowerment”, 2025', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'Então, renda básica? Quem paga?',
        items: [
          { kicker: 'Elon Musk · 2023', value: 'Renda alta', text: '“Não teremos renda básica universal, teremos renda alta universal.”', source: sources.musk },
          { kicker: 'Sam Altman · 2021', value: '2,5% ao ano', text: 'do valor das maiores empresas e das terras - para um fundo comum de todos os cidadãos. Uma proposta.', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026', value: 'Fundo público de riqueza', text: 'Os ganhos da IA distribuídos diretamente aos cidadãos; impostos maiores sobre o capital. Uma proposta.', source: sources.openaiPolicy },
          { kicker: 'Bernie Sanders · 2026', value: '~US$ 1.000', text: 'por ano por pessoa, vindos de um fundo com ações de empresas de IA, em um projeto de lei.', source: sources.sanders },
          { kicker: 'Piloto da OpenResearch · 3 anos', value: 'US$ 1.000 / mês', text: 'As pessoas trabalharam um pouco menos (1,3 hora por semana, em média). A qualidade dos seus empregos não mudou.', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'Se essa alavanca econômica desaparecer, o contrato social implícito da democracia pode deixar de funcionar.', person: 'Dario Amodei', role: 'CEO da Anthropic · 2026', source: sources.amodei },
      ...split.band,
    ],
    upside: {
      title: 'Manter as pessoas no comando.',
      text: 'Se os lucros da IA forem divididos e as grandes decisões continuarem democráticas, as pessoas continuam necessárias - como cidadãos, não só como trabalhadores.',
      points: ['Fundos e participações públicas para que todos dividam os ganhos da IA', 'Regras escritas por governos eleitos, não só pelas empresas', 'Acordos internacionais - a IA não para nas fronteiras'],
      image: '/images/v2/rules-03-citizens-v2.jpg',
      alt: 'Uma audiência pública em que uma mulher faz uma pergunta às autoridades.',
      sources: [sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'rules',
    label: 'AS REGRAS',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: 'Regras antes que o dano', accent: 'cresça.' },
    panels: [
      { image: images.speed, label: 'As empresas disparam na frente', alt: 'Uma empresa liga um enorme sistema de IA à noite; feixes de luz saem do prédio em disparada rumo à cidade.', focus: 'center 65%' },
      { image: images.noRules, label: 'O Estado corre atrás', alt: 'Um prédio do governo às escuras, com data centers bem iluminados atrás dele.', focus: 'center 62%' },
      { image: images.citizens, label: 'Quem é responsável?', alt: 'Uma audiência pública: uma mulher ao microfone faz uma pergunta às autoridades no palco.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: 'Moradores fazendo perguntas.', label: 'Responsabilidade', title: 'É uma questão de responsabilidade.', copy: 'Não é medo da tecnologia, e sim saber quem responde pelos danos. As regras dizem quem fiscaliza, quem paga e quem conserta.' },
      { image: images.noRules, alt: 'Um prédio do governo e data centers.', label: 'Tempo', title: 'Regras ganham tempo.', copy: 'Estados, escolas e pessoas precisam de anos para se adaptar. Os freios garantem esse tempo.' },
      { image: images.speed, alt: 'A rápida implantação da IA.', label: 'Divisão justa', title: 'Não parar - dividir com justiça.', copy: 'O objetivo não é parar o progresso. É dividir seus ganhos e riscos de forma justa.' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'Até os criadores da IA dizem que precisamos de regras',
        items: [
          { kicker: 'Bill Gates · 2023', text: '“O mundo precisa estabelecer as regras do jogo para que quaisquer desvantagens da inteligência artificial sejam amplamente superadas por seus benefícios.”', source: sources.gatesAge },
          { kicker: 'Sam Altman · Senado dos EUA · 2023', text: '“Acreditamos que a intervenção regulatória dos governos será fundamental para mitigar os riscos de modelos cada vez mais poderosos.”', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026', value: 'Pausa', text: 'Depois do incidente com a Hugging Face - quando parte das proteções e do monitoramento estava desligada - a própria empresa suspendeu o maior treinamento que tinha planejado.', source: sources.openaiRoad },
          { kicker: 'Uma lacuna na lei', text: 'Nem a lei de IA mais avançada - o AI Act da UE - trata da perda de empregos ou de impostos. As regras para IA em contratações foram adiadas para o fim de 2027.', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: 'O que paga mais imposto?',
        subtitle: 'Exemplo dos EUA: alíquota média',
        bars: [
          { label: 'Trabalho humano', value: 25, display: '25%' },
          { label: 'Equipamentos e software', value: 5, display: '5%', highlight: true },
        ],
        caption: 'Hoje, trocar uma pessoa por uma máquina também reduz os impostos.',
        source: sources.book,
      },
      { kind: 'quote', quote: 'Se um trabalhador humano faz US$ 50.000 de trabalho numa fábrica, essa renda é tributada. Se um robô vem fazer a mesma coisa, seria de esperar que tributássemos o robô num nível parecido.', person: 'Bill Gates', role: 'Cofundador da Microsoft · 2017', source: sources.gates },
      {
        kind: 'evidence',
        title: 'Na prática: meu resumo, com base nos 10 passos do livro (cap. 14)',
        items: [
          { kicker: '01', value: 'Testar antes de lançar', text: 'Auditorias independentes antes que um sistema chegue a milhões. Os autores propõem gastar pelo menos 20% dos orçamentos de P&D em segurança.', source: sources.book },
          { kicker: '02', value: 'Responsabilidade', text: 'Lei clara sobre quem paga quando um sistema causa danos.', source: sources.book },
          { kicker: '03', value: 'Freios', text: 'Controle de chips, sintetizadores de DNA e dos maiores treinamentos - para ganhar tempo.', source: sources.book },
          { kicker: '04', value: 'Impostos justos', text: 'A automação é tributada como o trabalho, e os ganhos da IA chegam a todos.', source: sources.book },
          { kicker: '05', value: 'Rede de proteção', text: 'Requalificação e apoio de renda antes que o trabalho acabe.', source: sources.book },
          { kicker: '06', value: 'Cooperação', text: 'Tratados e regras comuns - porque a IA não conhece fronteiras.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Antes de fazermos isso, porém, é vital reconhecer uma verdade central: a regulação sozinha não basta.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, cap. 13', source: sources.book },
      ...calm.blocks,
    ],
  },
];
