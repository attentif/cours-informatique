export default {
  lang: 'fr-CH',
  title: 'Cours d’informatique',
  description: 'Partage des cours d’informatique de Simon Goumaz, pour les élèves.',
  lastUpdated: true,
  cleanUrls: 'with-subfolders',

  themeConfig: {
    outlineTitle: 'Sur cette page:',
    lastUpdatedText: 'Dernière mise à jour',
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },
    nav: [
      {
        text: 'À propos de ces pages',
        link: '/a-propos'
      }
    ],
    sidebar: [
      {
        text: 'Cadre de cours',
        items: [
          { text: 'Introduction', link: '/cadre/introduction' },
          { text: 'Vie en classe', link: '/cadre/vie-en-classe' },
          { text: 'Évaluation', link: '/cadre/evaluation' }
        ]
      },
      {
        text: 'Environnement informatique',
        items: [
          { text: 'Premières bases', link: '/environnement/bases' }
        ]
      },
      {
        text: 'Machines, systèmes, réseaux',
        items: []
      },
      {
        text: 'Utilisation des outils',
        items: []
      },
      {
        text: 'Recherche, communication & coopération',
        items: []
      },
      {
        text: 'Information & données',
        items: [
          { text: 'Numérisation de l’information', link: '/information-donnees/numerisation-information' }
        ]
      },
      {
        text: 'Algorithmes & programmation',
        items: []
      }
    ]
  }
};
