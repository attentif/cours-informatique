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
    // nav: [
    sidebar: [
      {
        text: 'Les bases',
        items: [
          { text: 'Vie en classe', link: '/bases/vie-en-classe' },
          { text: 'Évaluation', link: '/bases/evaluation' },
          { text: 'Compte EEL', link: '/bases/compte-eel' },
          { text: 'Dossier ‘Échanges’', link: '/bases/dossier-echanges' },
          { text: 'Clé USB', link: '/bases/sauvegarde-cle-usb' }
        ]
      }
    ]
  }
};
