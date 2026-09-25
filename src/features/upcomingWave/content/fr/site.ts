export const site = {
  // Page titles, descriptions and link-preview text (used by src/app metadata).
  meta: {
    siteName: 'Upcoming Wave',
    home: {
      title: 'L’IA va changer votre travail. Qui décide comment ?',
      description: 'Un guide visuel de 5 minutes : ce que l’IA pourrait réparer, ce qu’elle pourrait faire à l’emploi et aux budgets publics, et les règles qui décideront de notre avenir.',
    },
    sources: {
      title: 'Sources et méthode - Upcoming Wave',
      description: 'Toutes les sources des chiffres et des citations d’Upcoming Wave, et la façon dont je les vérifie.',
    },
    card: { lead: 'L’IA va changer votre travail.', accent: 'Qui décide comment ?' },
    ogAlt: 'L’IA va changer votre travail. Qui décide comment ? Deux avenirs : un bureau vidé par l’automatisation, et une famille qui retrouve du temps pendant qu’un robot fait les tâches ménagères.',
  },
  sourcesPage: {
    title: 'Sources et méthode',
    lead: 'Chaque chiffre et chaque citation de la page renvoie à une note. Voici la liste complète, dans l’ordre d’apparition.',
    methodTitle: 'Ma méthode',
    method: [
      'Chaque fait a une source. Je vérifie les citations à la source primaire ; quand elle n’est pas accessible, je m’appuie sur des médias fiables qui les rapportent.',
      'Les étiquettes des sections disent de quoi il s’agit : « aujourd’hui » - c’est déjà en cours ; « scénario possible » et « scénario extrême » - des risques, pas des prévisions ; « une voie à suivre » - des solutions proposées.',
      'Les tests en laboratoire sont présentés comme des tests et jamais mélangés avec des incidents réels.',
      'Les citations de « The Coming Wave » sont ma traduction de l’édition anglaise (Crown, 2023). Les autres citations sont traduites de leur langue d’origine.',
      'Je montre aussi l’autre versant : les bénéfices de l’IA et les arguments selon lesquels les risques pourraient être surestimés.',
    ],
    listTitle: 'Toutes les sources',
    updated: 'Dernière mise à jour : septembre 2026.',
    correction: 'Vous avez repéré une erreur ? Dites-le-moi sur X :',
    correctionAlt: 'ou ouvrez une issue sur GitHub',
    back: '← Retour à la page',
    noLink: 'livre - sans lien',
  },
  footer: {
    sourcesLink: 'Sources et méthode',
    code: { label: 'GitHub', issue: 'Signaler une erreur' },
    why: { title: 'Pourquoi cette page ?', text: 'Je parle beaucoup d’IA avec les gens, et je constate toujours la même chose : ce qui manque, ce ne sont pas les opinions, c’est le contexte - comprendre ce qui est réellement en jeu. J’ai donc décidé d’agir et de l’expliquer simplement, en images.' },
    sources: 'Chaque fait renvoie à sa source. Les scénarios sont des risques, pas des prévisions.',
    independence: 'Projet indépendant et non commercial - sans lien avec aucune entreprise d’IA, aucun auteur ni éditeur.',
    author: { label: 'Réalisé par', handle: '@blyzbyte', url: 'https://x.com/blyzbyte', with: '' },
  },
};
