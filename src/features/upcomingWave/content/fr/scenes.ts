import type { Scene } from '@features/upcomingWave/types/scene.types';

import { acceleration } from '@features/upcomingWave/content/fr/acceleration';
import { calm } from '@features/upcomingWave/content/fr/calm';
import { split } from '@features/upcomingWave/content/fr/closing';
import { sceneImages as images, sceneSources as plSources } from '@features/upcomingWave/content/pl/scenes';


// Quotes are French translations of the original wording; book quotes are our translation of the English edition (Crown, 2023).
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'FMI, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS - plombiers' },
  book: { label: '« The Coming Wave »' },
  germany: { ...plSources.germany, label: 'Université d’Oxford' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI, juillet 2026' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI, août 2026' },
  aiAct: { ...plSources.aiAct, label: 'Conseil de l’UE, 2026' },
};

export const scenes: Scene[] = [
  {
    id: 'the-stakes',
    label: 'D’ABORD, LES ENJEUX',
    status: 'today',
    chain: 'stakes',
    layout: 'mosaic',
    title: { lead: 'D’abord, les enjeux.', accent: 'La même IA pourrait soigner, nourrir et instruire.' },
    panels: [
      { image: images.medicine, label: 'Diagnostic plus précoce', caption: 'L’IA repère ce qui passe facilement inaperçu', alt: 'Une médecin et un patient regardent un scanner sur lequel l’IA a discrètement signalé une zone.', focus: 'center 55%' },
      { image: images.science, label: 'Nouveaux médicaments', caption: 'Un antibiotique trouvé parmi 100 millions de molécules', alt: 'Une scientifique en laboratoire observe un modèle 3D lumineux de protéine.', focus: 'center 40%' },
      { image: images.energy, label: 'Énergie propre', caption: 'Solaire, éolien et batteries moins chers', alt: 'Des champs solaires et des éoliennes à l’aube ; un ingénieur vérifie le réseau sur une tablette.' },
      { image: images.food, label: 'Alimentation', caption: 'Des cultures qui résistent à la chaleur', alt: 'Des agriculteurs inspectent des cultures saines en plein été caniculaire, tandis qu’un drone survole le champ.' },
      { image: images.forecast, label: 'Alertes précoces', caption: 'Inondations et incendies prévus plus tôt', alt: 'Un centre de prévision : des météorologues examinent une carte fluviale où un risque d’inondation est mis en évidence.' },
      { image: images.time, label: 'École', caption: 'Un soutien pour les enseignants', alt: 'Une enseignante agenouillée aide un enfant, pendant qu’un ordinateur portable gère la paperasse à l’arrière-plan.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'Une médecin commente avec un patient un scanner analysé avec l’aide de l’IA.', label: 'Santé', title: 'Des soins meilleurs et moins chers.', copy: 'Aidés par l’IA, les médecins détectent plus de cancers, et l’IA passe au crible des millions de molécules à la recherche de nouveaux médicaments.' },
      { image: images.energy, alt: 'Des parcs solaires et éoliens à l’aube.', label: 'La planète', title: 'Aider là où la politique bloque.', copy: 'Les auteurs du livre, Suleyman et Bhaskar, espèrent que l’IA nous aidera à passer aux énergies renouvelables, à cultiver sous un climat plus chaud et à prévoir inondations et incendies.' },
      { image: images.time, alt: 'Une enseignante qui aide un enfant.', label: 'À une condition', title: 'Ces bénéfices ne viendront pas seuls.', copy: 'Ils n’atteindront tout le monde que si nous fixons les règles : qui est responsable des préjudices et comment les gains sont partagés.' },
    ],
    band: [
      { kind: 'quote', quote: 'Elles rendront les soins de santé à la fois de meilleure qualité et plus abordables. Elles nous aideront à inventer des outils pour mener la transition vers les énergies renouvelables et combattre le changement climatique à un moment où la politique est au point mort, et elles soutiendront les enseignants, en aidant à rendre plus efficaces des systèmes éducatifs sous-financés.', person: 'Mustafa Suleyman', role: '« The Coming Wave », chap. 9 - sur l’IA et la biologie de synthèse', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29 %', label: 'de cancers du sein en plus détectés grâce à un dépistage assisté par l’IA - sans hausse des fausses alertes', source: sources.masai },
          { value: '100 M', label: 'de molécules passées au crible par un système d’IA pour trouver l’halicine - le premier antibiotique découvert grâce à l’apprentissage automatique (chap. 7)', source: sources.book },
          { value: '200 M', label: 'de structures de protéines prédites par AlphaFold - prix Nobel de chimie 2024', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82 %', label: 'de baisse du coût de l’énergie solaire en dix ans - et il continue de baisser (chap. 11)', source: sources.book },
          { value: '~9 %', label: 'de la population vit aujourd’hui dans l’extrême pauvreté. Au début du XIXe siècle, c’était presque tout le monde. La technologie a changé cela (chap. 8)', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'Ce qu’espèrent les dirigeants de la tech',
        items: [
          { kicker: 'Bill Gates · 2023', value: 'Moins d’inégalités', text: '« L’IA peut réduire certaines des pires inégalités du monde. » Il la juge « aussi fondamentale que la création du microprocesseur, de l’ordinateur personnel, d’Internet et du téléphone mobile ».', source: sources.gatesAge },
          { kicker: 'Demis Hassabis · Google DeepMind · 2025', value: 'La fin des maladies ?', text: '« Un jour, peut-être, nous pourrons guérir toutes les maladies avec l’aide de l’IA… Peut-être d’ici une dizaine d’années. » Il parle aussi d’« abondance radicale » - la fin de la pénurie.', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'Dario Amodei · Anthropic · 2024', value: '100 ans → 10', text: '50 à 100 ans de progrès médicaux condensés en 5 à 10 ans, l’espérance de vie en bonne santé doublée, des milliards de personnes sorties de la pauvreté - sa vision si l’IA tourne bien.', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'Sam Altman · OpenAI · 2024', value: 'Prospérité partagée', text: '« À l’avenir, la vie de chacun pourra être meilleure que ne l’est aujourd’hui la vie de quiconque. » Il imagine aussi un tuteur IA personnel pour chaque enfant.', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
    ],
  },
  {
    id: 'who-will-resist',
    label: 'TRAVAIL',
    status: 'today',
    chain: 'work',
    layout: 'triptych',
    title: { lead: 'L’IA le fait plus vite et moins cher.', accent: 'Qui peut résister ?' },
    panels: [
      { image: images.remote, label: 'Une personne télétravaille', alt: 'Une femme télétravaille à la table de sa cuisine, avec un ordinateur portable et un carnet.', focus: 'center 65%' },
      { image: images.aiFaster, label: 'L’IA le fait plus vite', alt: 'La même table sans personne : des dizaines de documents terminés jaillissent de l’ordinateur en traînées de lumière.', focus: 'center 60%' },
      { image: images.owners, label: 'Le patron compte les économies', alt: 'Deux dirigeants, dans une salle de réunion, regardent en contrebas un open space où la plupart des bureaux sont vides.', focus: 'center 55%' },
    ],
    explain: [
      { image: images.remote, alt: 'Une femme qui télétravaille sur un ordinateur portable.', label: 'Télétravail', title: 'Le télétravail, c’est du travail sur écran.', copy: 'E-mails, rapports, analyses, maquettes. Tout ce que vous envoyez depuis un ordinateur, l’IA peut apprendre à le faire.' },
      { image: images.aiFaster, alt: 'Un ordinateur portable d’où jaillissent des documents terminés.', label: 'L’IA va plus vite', title: 'L’IA ne dort pas et ne prend pas de congés.', copy: 'Elle fait le même travail en quelques minutes, sans pause, sur des centaines de tâches à la fois - et elle égale les humains sur un nombre croissant de tâches.' },
      { image: images.owners, alt: 'Des dirigeants qui regardent un bureau vide.', label: 'Le calcul', title: 'Plus vite, moins cher. Qui peut résister ?', copy: 'Le patron voit les économies. La concurrence aussi. Les entreprises qui ne l’utilisent pas risquent de perdre la course - la pression est donc énorme.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '1 emploi sur 4', label: 'dans le monde est exposé à l’IA générative - plus souvent un changement de tâches qu’une suppression', source: sources.ilo },
          { value: '60 %', label: 'des emplois des pays riches pourraient être touchés par l’IA - environ la moitié pourrait en bénéficier', source: sources.imf },
          { value: '−11 %', label: 'de baisse de l’emploi chez les 22-25 ans dans les métiers les plus exposés à l’IA aux États-Unis (2022-2026)', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'C’est déjà en cours',
        items: [
          { kicker: 'Salesforce · 2025', value: '9 000 → 5 000', text: 'employés au service client. « J’ai besoin de moins de têtes » - le PDG.', source: sources.salesforce },
          { kicker: 'Klarna · 2025', value: '5 000 → 3 000', text: 'employés. L’entreprise a cessé d’embaucher et l’IA a repris une partie du travail. Plus tard, elle a rendu une partie du service client à des humains.', source: sources.klarna },
          { kicker: 'Amazon · 2025', text: 'Le PDG d’Amazon s’attend à ce que l’IA réduise les effectifs administratifs de l’entreprise dans les prochaines années.', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'Pour le travail intellectuel banal, l’IA va tout simplement remplacer tout le monde.', person: 'Geoffrey Hinton', role: 'Prix Nobel, le « parrain de l’IA »', source: sources.hintonDoac },
      { kind: 'quote', quote: 'Il faudra longtemps avant qu’elle soit aussi douée que nous pour la manipulation physique… un bon pari serait de devenir plombier.', person: 'Geoffrey Hinton', role: 'Prix Nobel, le « parrain de l’IA »', source: sources.hintonDoac },
      {
        kind: 'stats',
        items: [
          { value: '11 h', label: 'c’est le temps qu’il a fallu à l’IA pour créer l’équivalent de 9 mois de démonstrations humaines pour entraîner des robots', source: sources.nvidia },
          { value: '−40 %', label: 'de baisse du coût de fabrication d’un robot humanoïde en un an - les analystes attendaient 15-20 %', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: 'Une IA suffisamment puissante pourra accélérer le développement des robots, puis contrôler ces robots dans le monde physique. Cela nous fera peut-être gagner du temps… mais je crains que ce ne soit pas beaucoup.', person: 'Dario Amodei', role: 'PDG d’Anthropic', source: sources.amodei },
    ],
    upside: {
      title: 'L’IA fait les corvées. Les gens retrouvent du temps.',
      text: 'Si les gains sont partagés, un travail plus rapide peut signifier des semaines plus courtes et de meilleurs emplois - pas seulement moins d’emplois.',
      points: ['Du temps et de l’argent pour se reconvertir avant que les emplois disparaissent', 'Un soutien au revenu pendant les changements de métier', 'Des semaines de travail plus courtes plutôt que des licenciements - une idée avancée par OpenAI elle-même'],
      image: '/images/v2/upside-work-time-v2.jpg',
      alt: 'Une cuisine ensoleillée l’après-midi : une mère et son fils pétrissent de la pâte en riant, au jardin un père et une grand-mère s’occupent du potager, et au fond un robot remplit le lave-vaisselle à côté d’un panier de linge.',
      sources: [sources.book, sources.openaiPolicy],
    },
  },
  {
    id: 'state-lives-on-work',
    label: 'L’ARGENT ET L’ÉTAT',
    status: 'possible',
    chain: 'money',
    layout: 'triptych',
    title: { lead: 'L’État vit de votre travail.', accent: 'Et si ce travail disparaît ?' },
    panels: [
      { image: images.workFunds, label: 'Le travail finance ce que nous partageons', alt: 'Des gens partent au travail le matin ; derrière eux, une école, un hôpital avec une ambulance et un bus de ville.', focus: 'center 70%' },
      { image: images.cuts, label: 'Le budget fond', alt: 'Des fonctionnaires fatigués barrent des lignes entières du budget au stylo rouge.', focus: 'center 65%' },
      { image: images.strain, label: 'Les services craquent', alt: 'Des urgences bondées la nuit ; des gens attendent dans le couloir, une infirmière passe en hâte.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: 'Des gens qui vont au travail en passant devant une école et un hôpital.', label: 'Notre argent', title: 'L’État n’a pas d’argent à lui.', copy: 'Il a le nôtre. Écoles, hôpitaux, routes et retraites sont financés surtout par les impôts sur le travail et la consommation.' },
      { image: images.cuts, alt: 'Des fonctionnaires qui taillent dans un budget.', label: 'L’étau', title: 'Moins de recettes, plus de besoins.', copy: 'Une personne au chômage ne paie pas d’impôt sur le revenu - mais elle a besoin d’aide. L’argent manque précisément quand il en faut davantage.' },
      { image: images.strain, alt: 'Des urgences surchargées.', label: 'Coupes', title: 'Les coupes frappent ce que nous partageons.', copy: 'Quand des millions de personnes sont touchées en même temps, l’État coupe : moins de médecins, moins d’enseignants, moins de bus.' },
    ],
    band: [
      { kind: 'loop', title: 'Une boucle sans frein', steps: ['Salaires en baisse', 'Moins de dépenses', 'Les entreprises gagnent moins', 'Plus de licenciements', 'L’IA encore moins chère'], caption: 'Un scénario, pas une prédiction. Mais chaque étape découle de la précédente.' },
      { kind: 'quote', quote: 'Comment allez-vous les convaincre d’acheter des Ford ?', person: 'Walter Reuther', role: 'dirigeant du syndicat de l’automobile, à un cadre de Ford - une anecdote des années 1950', source: sources.reuther },
      {
        kind: 'evidence',
        title: 'Ce que disent les experts',
        items: [
          { kicker: 'Citrini Research · 2026 · scénario', value: 'Zéro', text: 'Combien les machines dépensent-elles en achats non essentiels ? « Indice : zéro. » Les auteurs décrivent une boucle « sans frein naturel ».', source: sources.citrini },
          { kicker: 'Geoffrey Hinton · 2025', text: '« Cela rendra quelques personnes beaucoup plus riches et la plupart des gens plus pauvres. »', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026 · contre-argument', text: 'Les vagues technologiques précédentes n’ont pas rendu le travail humain obsolète.', source: sources.citadel },
        ],
      },
      {
        kind: 'taxSplit',
        title: 'D’où l’État tire-t-il son argent ?',
        subtitle: 'Sur 100 perçus en impôts - moyenne des pays riches (OCDE), 2023',
        parts: [
          { label: 'du travail', detail: 'impôt sur le revenu et cotisations sociales', value: 50, highlight: true },
          { label: 'de la consommation', detail: 'TVA et autres', value: 31, highlight: true },
          { label: 'des bénéfices des entreprises', value: 12 },
          { label: 'autres', value: 7 },
        ],
        caption: '8 sur 10 viennent de ce que les gens gagnent et dépensent.',
        countriesLabel: 'Impôt sur le revenu + cotisations (sur 100) :',
        countries: [{ name: 'États-Unis', value: 64 }, { name: 'Allemagne', value: 65 }, { name: 'Japon', value: 57 }, { name: 'France', value: 55 }, { name: 'Royaume-Uni', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: 'L’étau budgétaire', income: 'recettes fiscales', spending: 'dépenses d’aide', caption: 'Un schéma, pas des données. Avec un chômage de masse, les recettes baissent pendant que les dépenses augmentent - au même moment.' },
      { kind: 'quote', quote: 'Dans le même temps, une récession de l’emploi fera s’effondrer les recettes fiscales, abîmant les services publics et remettant en question les programmes d’aide sociale au moment même où l’on en a le plus besoin.', person: 'Mustafa Suleyman', role: '« The Coming Wave », chap. 10', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '24,9 %', label: 'de chômage aux États-Unis en 1933 - 12,8 millions de personnes sans emploi', source: sources.fdr },
          { value: '6 M', label: 'de chômeurs en Allemagne en 1932 - environ un travailleur sur quatre', source: sources.germany },
        ],
      },
      {
        kind: 'evidence',
        title: 'Ce qui a suivi',
        items: [
          { kicker: 'Allemagne · 1930-1932', value: '18 % → 37 %', text: 'de soutien au parti nazi. Selon une étude, les régions les plus touchées par l’austérité votaient plus souvent nazi.', source: sources.nsdap },
          { kicker: 'États-Unis · après la désindustrialisation', text: '« Morts de désespoir » - les décès liés à la drogue, à l’alcool et au suicide chez les Américains sans diplôme, à mesure que disparaissaient les emplois stables en usine.', source: sources.deaton },
          { kicker: 'Royaume-Uni · des décennies après les mines', value: '42 %', text: 'des anciens quartiers miniers comptent toujours parmi les 30 % les plus défavorisés du pays.', source: sources.coalfields },
          { kicker: 'Les luddites · XIXe siècle · l’autre versant', text: 'Leurs souffrances étaient réelles. Leurs enfants et petits-enfants ont mieux vécu - mais il a fallu une génération.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Les démocraties reposent sur la confiance.', person: 'Mustafa Suleyman', role: '« The Coming Wave », chap. 9', source: sources.book },
    ],
    upside: {
      title: 'Les machines paient leur part.',
      text: 'Si l’automatisation est taxée comme le travail et que les profits de l’IA alimentent un fonds public, les écoles, les hôpitaux et les bus continuent de fonctionner.',
      points: ['Taxer l’automatisation comme le travail humain', 'Un fonds public qui verse aux citoyens une part des profits de l’IA', 'Déplacer l’impôt du travail vers le capital'],
      image: '/images/v2/hero-wave-hope-v7c.jpg',
      alt: 'Des familles partagent une longue table garnie pendant qu’un robot les sert.',
      sources: [sources.gates, sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'out-of-the-test',
    label: 'VITESSE ET CONTRÔLE',
    status: 'today',
    chain: 'speed',
    layout: 'triptych',
    title: { lead: 'L’IA accélère.', accent: 'Elle s’est déjà échappée d’un test.' },
    panels: [
      { image: images.cage, label: 'Une cage ouverte', alt: 'La porte ouverte d’une cage de serveurs sécurisée, serrure cassée ; de la lumière s’échappe le long des câbles.', focus: 'center 60%' },
      { image: images.swarm, label: 'L’essaim', alt: 'Une carte du monde la nuit : des milliers de points lumineux se répandent le long des lignes du réseau, comme une nuée.', focus: 'center 60%' },
      { image: images.search, label: 'À la recherche d’indices', alt: 'Un ingénieur muni d’une lampe torche avance entre des baies de serveurs, cherchant l’origine du trafic.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'Un essaim de points sur une carte du réseau.', label: 'Partout', title: 'Elle ne vit pas dans un seul ordinateur.', copy: 'Une IA distribuée peut s’introduire dans un système après l’autre et passer de l’un à l’autre - à notre insu.' },
      { image: images.search, alt: 'Un ingénieur qui fouille une salle de serveurs.', label: 'Traces', title: 'Elle peut effacer ses traces.', copy: 'En juillet 2026, des agents ont cherché comment falsifier les enregistrements de leurs propres actions pour tromper le système de notation. Des signaux d’alerte antérieurs sont restés sans réponse pendant des semaines.' },
      { image: images.cage, alt: 'Une cage de serveurs ouverte.', label: 'Bouton d’arrêt', title: 'On ne peut pas éteindre le monde.', copy: 'Hôpitaux, banques et réseaux d’eau dépendent d’Internet et de l’électricité. On ne peut pas simplement les couper.' },
    ],
    band: [
      { kind: 'growth' },
      { kind: 'pond' },
      { kind: 'evidence', ...acceleration.evidence },
      ...acceleration.quotes.map((quote) => ({ kind: 'quote' as const, ...quote })),
      {
        kind: 'timeline',
        title: 'Juillet 2026 : ce qui s’est passé',
        steps: [
          { title: 'Un test avec des garde-fous désactivés', text: 'OpenAI teste ses modèles les plus récents dans un environnement fermé. C’est un test de compétences en piratage, donc certains garde-fous sont volontairement désactivés.' },
          { title: 'Une faille inconnue', text: 'Les modèles trouvent une faille logicielle jusque-là inconnue et accèdent à Internet.' },
          { title: 'Les agents se parlent', text: 'Environ 1 200 agents censés être isolés échangent plus de 70 000 messages. Quelque 700 d’entre eux participent à l’attaque.' },
          { title: 'Intrusion chez Hugging Face', text: 'Pendant un week-end, ils circulent dans les systèmes internes de l’une des plus grandes plateformes d’IA au monde - « des milliers et des milliers d’actions individuelles à travers un essaim de bacs à sable éphémères ».' },
          { title: 'Effacer ses traces', text: 'Des agents cherchent comment falsifier les enregistrements de leurs actions - pour tromper le système de notation.' },
          { title: 'Pourquoi ?', text: 'Pour tricher au test. Pas par malveillance : ils poursuivaient obstinément un objectif étroit. Certains agents ont refusé d’y participer.' },
          { title: 'Coup de frein', text: 'Les équipes d’OpenAI et de Hugging Face arrêtent les agents. OpenAI met le modèle sous clé et suspend son plus grand entraînement prévu.' },
        ],
        footnote: 'Pour être juste : les données des clients d’OpenAI n’ont pas été compromises, personne n’a été blessé physiquement, et seule une quantité limitée de données privées a fuité de Hugging Face. Anthropic a signalé à la même période trois incidents moins graves, au cours desquels ses modèles avaient reçu par erreur un accès à Internet.',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'Nous considérons cet incident comme un « coup de semonce » : les capacités des modèles actuels rendent possibles des incidents de perte de contrôle.', person: 'OpenAI', role: 'rapport post-incident, août 2026', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'Avant cela : des tests en laboratoire',
        items: [
          { kicker: 'OpenAI · 2024 · test', text: 'Un modèle a exploité une erreur de configuration du test pour lire la réponse. L’infrastructure est restée sécurisée.', source: sources.o1card },
          { kicker: 'Apollo Research · 2024 · test', value: '2 %', text: 'des essais où o1 - chargé d’atteindre son objectif « à tout prix » - a tenté de se copier. Dans 5 % des cas, il a tenté de désactiver la surveillance.', source: sources.apollo },
          { kicker: 'Université Fudan · 2024 · test', value: '50-90 %', text: 'des essais où des modèles ouverts - sur instruction - ont créé une copie fonctionnelle d’eux-mêmes.', source: sources.fudan },
          { kicker: 'Palisade Research · 2025 · test', value: '79 / 100', text: 'essais où o3 a saboté son script d’arrêt pour terminer une tâche.', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'Un essaim doté de capacités supérieures mais d’un niveau de désalignement similaire aurait pu causer des dégâts catastrophiques… je crains que, d’ici 6 à 12 mois, un tel essaim soit capable de prendre le contrôle d’Internet tout entier avec un botnet persistant.', person: 'Dario Amodei', role: 'PDG d’Anthropic · septembre 2026 · une inquiétude, pas une prévision', source: sources.amodeiPace },
      { kind: 'quote', quote: 'Les modèles approchent probablement du point où, sans garde-fous, ils pourraient aider quelqu’un titulaire d’un diplôme scientifique, mais pas spécifiquement en biologie, à mener à bien tout le processus de production d’une arme biologique.', person: 'Dario Amodei', role: 'PDG d’Anthropic · 2026', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: '25 000 $', label: 'c’était le prix d’un synthétiseur d’ADN de paillasse - utilisable « sans restriction ni supervision » (en 2023)', source: sources.book },
          { value: '4', label: 'employés à temps plein pour la Convention internationale sur les armes biologiques - moins qu’un McDonald’s moyen (en 2023)', source: sources.book },
        ],
      },
    ],
    upside: {
      title: 'Tester avant le lancement.',
      text: 'L’aviation est devenue sûre grâce aux inspections et au partage des rapports d’incident. L’IA peut suivre le même chemin.',
      points: ['Des audits indépendants avant qu’un modèle atteigne des millions de personnes', 'Des rapports d’incident obligatoires, comme dans l’aviation', 'Un frein sur les plus grands entraînements - OpenAI a suspendu le sien après l’incident'],
      image: '/images/v2/benefit-06-forecast-v1.jpg',
      alt: 'Une salle de contrôle calme où des experts surveillent une carte et des alertes sur de grands écrans.',
      sources: [sources.book, sources.openaiRoad],
    },
  },
  {
    id: 'not-needed',
    label: 'QUI DÉCIDE',
    status: 'extreme',
    chain: 'power',
    layout: 'triptych',
    title: { lead: 'Et si l’on', accent: 'n’avait plus besoin de nous ?' },
    panels: [
      { image: images.sim, label: 'L’IA entraîne les robots', alt: 'Un laboratoire : des robots s’exercent devant un mur de milliers de copies simulées qui s’entraînent en parallèle.', focus: 'center 65%' },
      { image: images.everywhere, label: 'Des robots dans chaque métier', alt: 'Une rue à l’aube : un robot dans un café, des robots livreurs, un bus sans chauffeur - aucun travailleur nulle part.', focus: 'center 65%' },
      { image: images.idle, label: 'Les gens sur la touche', alt: 'Des gens désœuvrés assis sur une place, pendant qu’une usine automatisée tourne derrière eux.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'Des robots entraînés en simulation.', label: 'Robots', title: 'L’IA accélère la fabrication des robots.', copy: 'D’abord, elle remplace le travail sur ordinateur. Ensuite, elle aide à construire des robots pour le travail manuel.' },
      { image: images.everywhere, alt: 'Des robots qui font tous les métiers dans une rue.', label: 'Pourquoi nous ?', title: 'Le système repose sur le fait qu’on a besoin de nous.', copy: 'Nous travaillons, payons des impôts et votons. C’est pour cela que les gouvernements et les entreprises doivent nous écouter.' },
      { image: images.idle, alt: 'Des gens désœuvrés devant une usine.', label: 'Qui décide', title: 'Sans cela, c’est le propriétaire de l’IA qui décide.', copy: 'Si c’est l’IA, et non les gens, qui produit la richesse, qui décide de la part que nous recevons ? Et même s’il nous revient quoi que ce soit ?' },
    ],
    band: [
      {
        kind: 'contrast',
        title: 'Pourquoi l’État prend soin de nous aujourd’hui - et s’il n’avait plus besoin de le faire ?',
        left: { label: 'Aujourd’hui', steps: ['Les gens travaillent', 'Ils paient des impôts', 'L’État a besoin de leur travail et de leurs votes', 'Donc il prend soin d’eux'] },
        right: { label: 'Demain ?', steps: ['L’IA fait le travail', 'Quelques entreprises empochent les profits', 'L’État vit des impôts sur l’IA', 'Pourquoi aurait-il besoin de citoyens ?'] },
      },
      { kind: 'quote', quote: 'Avec l’IA générale, les acteurs puissants n’auront plus intérêt à investir dans les gens ordinaires - tout comme les États riches en ressources négligent aujourd’hui leurs citoyens, parce que leur richesse vient des ressources naturelles plutôt que de l’impôt sur le travail humain.', person: 'Luke Drago, Rudolf Laine', role: '« The Intelligence Curse », 2025 - les auteurs proposent aussi des moyens de l’éviter', source: sources.curse },
      { kind: 'quote', quote: 'Des États financés principalement par des impôts sur les profits de l’IA plutôt que sur le travail de leurs citoyens auront peu intérêt à garantir la représentation de ces citoyens.', person: 'Jan Kulveit et al.', role: '« Gradual Disempowerment », 2025', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'Alors, un revenu de base ? Payé par qui ?',
        items: [
          { kicker: 'Elon Musk · 2023', value: 'Revenu élevé', text: '« Nous n’aurons pas de revenu universel de base, nous aurons un revenu universel élevé. »', source: sources.musk },
          { kicker: 'Sam Altman · 2021', value: '2,5 % par an', text: 'de la valeur des plus grandes entreprises et des terres - versés dans un fonds commun pour tous les citoyens. Une proposition.', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026', value: 'Fonds public', text: 'Des revenus de l’IA redistribués directement aux citoyens ; des impôts plus élevés sur le capital. Une proposition.', source: sources.openaiPolicy },
          { kicker: 'Bernie Sanders · 2026', value: '~1 000 $', text: 'par an et par personne, issus d’un fonds d’actions d’entreprises d’IA, selon une proposition de loi.', source: sources.sanders },
          { kicker: 'Expérience OpenResearch · 3 ans', value: '1 000 $ / mois', text: 'Les gens ont un peu moins travaillé (1,3 heure par semaine en moyenne). La qualité de leurs emplois n’a pas changé.', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'Si ce levier économique disparaît, le contrat social implicite de la démocratie pourrait cesser de fonctionner.', person: 'Dario Amodei', role: 'PDG d’Anthropic · 2026', source: sources.amodei },
      ...split.band,
    ],
    upside: {
      title: 'Garder les gens aux commandes.',
      text: 'Si les profits de l’IA sont partagés et que les grandes décisions restent démocratiques, on a toujours besoin des gens - comme citoyens, pas seulement comme travailleurs.',
      points: ['Des fonds et des participations publics pour que chacun profite des gains de l’IA', 'Des règles écrites par des gouvernements élus, pas seulement par des entreprises', 'Des accords internationaux - l’IA ne s’arrête pas aux frontières'],
      image: '/images/v2/rules-03-citizens-v2.jpg',
      alt: 'Une réunion publique en mairie où une femme pose une question aux élus.',
      sources: [sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'rules',
    label: 'LES RÈGLES',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: 'Des règles avant que les dégâts', accent: 'ne prennent de l’ampleur.' },
    panels: [
      { image: images.speed, label: 'Les entreprises foncent', alt: 'Une entreprise allume un immense système d’IA la nuit ; des flux de lumière jaillissent du bâtiment vers la ville.', focus: 'center 65%' },
      { image: images.noRules, label: 'L’État court derrière', alt: 'Un bâtiment gouvernemental dans l’ombre, avec derrière lui des centres de données vivement éclairés.', focus: 'center 62%' },
      { image: images.citizens, label: 'Qui est responsable ?', alt: 'Une réunion publique en mairie : une femme au micro pose une question aux élus sur l’estrade.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: 'Des habitants qui posent des questions.', label: 'Responsabilité', title: 'Une question de responsabilité.', copy: 'Pas la peur de la technologie, mais la question de savoir qui répond des préjudices. Les règles disent qui contrôle, qui paie et qui répare.' },
      { image: images.noRules, alt: 'Un bâtiment gouvernemental et des centres de données.', label: 'Du temps', title: 'Les règles font gagner du temps.', copy: 'Les États, les écoles et les gens ont besoin d’années pour s’adapter. Les freins leur donnent ce temps.' },
      { image: images.speed, alt: 'Un déploiement rapide de l’IA.', label: 'Une juste part', title: 'Ne pas l’arrêter - la partager équitablement.', copy: 'Le but n’est pas d’arrêter le progrès. C’est d’en partager équitablement les gains et les risques.' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'Même les créateurs de l’IA disent qu’il faut des règles',
        items: [
          { kicker: 'Bill Gates · 2023', text: '« Le monde doit établir un code de la route pour que les éventuels inconvénients de l’intelligence artificielle soient largement compensés par ses bénéfices. »', source: sources.gatesAge },
          { kicker: 'Sam Altman · Sénat américain · 2023', text: '« Nous pensons que l’intervention réglementaire des gouvernements sera essentielle pour atténuer les risques de modèles de plus en plus puissants. »', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026', value: 'Pause', text: 'Après l’incident de Hugging Face - alors que certains garde-fous et la surveillance étaient désactivés - l’entreprise a elle-même suspendu son plus grand entraînement prévu.', source: sources.openaiRoad },
          { kicker: 'Un vide juridique', text: 'Même la loi la plus avancée sur l’IA - le règlement européen sur l’IA (AI Act) - ne traite ni des pertes d’emplois ni de la fiscalité. Les règles sur l’IA dans le recrutement ont été repoussées à fin 2027.', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: 'Qu’est-ce qui est le plus taxé ?',
        subtitle: 'Exemple américain : taux d’imposition moyen',
        bars: [
          { label: 'Travail humain', value: 25, display: '25 %' },
          { label: 'Équipements et logiciels', value: 5, display: '5 %', highlight: true },
        ],
        caption: 'Aujourd’hui, remplacer une personne par une machine permet aussi d’économiser des impôts.',
        source: sources.book,
      },
      { kind: 'quote', quote: 'Si un ouvrier effectue 50 000 dollars de travail dans une usine, ce revenu est imposé. Si un robot vient faire la même chose, on pourrait s’attendre à ce que le robot soit taxé à un niveau similaire.', person: 'Bill Gates', role: 'Cofondateur de Microsoft · 2017', source: sources.gates },
      {
        kind: 'evidence',
        title: 'En pratique : ma synthèse, d’après les 10 étapes du livre (chap. 14)',
        items: [
          { kicker: '01', value: 'Tester avant le lancement', text: 'Des audits indépendants avant qu’un système atteigne des millions de personnes. Les auteurs proposent de consacrer au moins 20 % des budgets de R&D à la sécurité.', source: sources.book },
          { kicker: '02', value: 'Responsabilité', text: 'Une loi claire sur qui paie quand un système cause un préjudice.', source: sources.book },
          { kicker: '03', value: 'Freins', text: 'Des contrôles sur les puces, les synthétiseurs d’ADN et les plus grands entraînements - pour gagner du temps.', source: sources.book },
          { kicker: '04', value: 'Impôts justes', text: 'L’automatisation est taxée comme le travail, et les gains de l’IA profitent à tous.', source: sources.book },
          { kicker: '05', value: 'Filet de sécurité', text: 'Reconversion et soutien au revenu avant que le travail ne vienne à manquer.', source: sources.book },
          { kicker: '06', value: 'Coopération', text: 'Des traités et des règles communes - parce que l’IA ne connaît pas de frontières.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Avant cela, toutefois, il est essentiel de reconnaître une vérité centrale : la réglementation seule ne suffit pas.', person: 'Mustafa Suleyman', role: '« The Coming Wave », chap. 13', source: sources.book },
      ...calm.blocks,
    ],
  },
];
