export const site = {
  // Page titles, descriptions and link-preview text (used by src/app metadata).
  meta: {
    siteName: 'Upcoming Wave',
    home: {
      title: 'Quem paga as escolas quando a IA faz o trabalho?',
      description: 'Um guia visual de 5 minutos baseado em “The Coming Wave”: o que a IA pode consertar, o que ela pode fazer com os empregos e os orçamentos públicos, o que um teste da OpenAI em julho de 2026 revelou e as regras que decidem qual futuro teremos. Todos os fatos têm fonte.',
    },
    sources: {
      title: 'Fontes e método - Upcoming Wave',
      description: 'Todas as fontes por trás dos números e citações do Upcoming Wave, e como as verifico.',
    },
    card: { lead: 'Quem paga as escolas', accent: 'quando a IA faz o trabalho?' },
    ogAlt: 'Quem paga as escolas quando a IA faz o trabalho? A mesma onda, dois futuros: escura sobre uma cidade, dourada sobre um parque.',
  },
  sourcesPage: {
    title: 'Fontes e método',
    lead: 'Cada número e cada citação da página têm nota com a fonte. Aqui está a lista completa, na ordem em que aparecem.',
    methodTitle: 'Como eu trabalho',
    method: [
      'Todo fato tem uma fonte. Confiro as citações na fonte primária; quando ela não está acessível, me baseio em veículos respeitáveis que as publicaram.',
      'Os rótulos das seções dizem o que cada coisa é: “hoje” - já está acontecendo; “história” - já aconteceu antes; “incidente” - um fato real; “possível” e “cenário extremo” - riscos, não previsões.',
      'Testes de laboratório aparecem identificados como testes e nunca se misturam com incidentes reais.',
      'As citações de “The Coming Wave” são tradução nossa da edição em inglês (Crown, 2023). As demais citações foram traduzidas do idioma original.',
      'Mostro também o outro lado: os benefícios da IA e os argumentos de que os riscos podem estar exagerados.',
    ],
    listTitle: 'Todas as fontes',
    updated: 'Última atualização: setembro de 2026.',
    correction: 'Encontrou um erro? Me avise no X:',
    correctionAlt: 'ou abra uma issue no GitHub',
    back: '← Voltar para a página',
    noLink: 'livro - sem link',
  },
  footer: {
    sourcesLink: 'Fontes e método',
    code: { label: 'GitHub', issue: 'Reportar um erro' },
    why: { title: 'Por que esta página?', text: 'Converso muito com as pessoas sobre IA e vejo sempre a mesma coisa: o que falta não são opiniões, é contexto - entender o que realmente está em jogo. Então decidi fazer algo a respeito e explicar isso de forma simples, com imagens.' },
    sources: 'Cada fato tem link para a fonte. Cenários são riscos, não previsões.',
    independence: 'Projeto independente e sem fins comerciais, sem vínculo com empresas de IA, autores ou editoras.',
    author: { label: 'Feito por', handle: '@blyzbyte', url: 'https://x.com/blyzbyte', with: '' },
  },
};
