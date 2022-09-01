export default {
  lang: 'fr-CH',
  title: 'Informatique',
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
    //   { text: 'Les bases', link: '/bases' },
    //   {
    //     text: 'Dropdown Menu',
    //     items: [
    //       { text: 'Item A', link: '/item-1' },
    //       { text: 'Item B', link: '/item-2' },
    //       { text: 'Item C', link: '/item-3' }
    //     ]
    //   }
    // ]
    sidebar: [
      {
        text: 'Les bases',
        items: [
          { text: 'Vie en classe', link: '/vie-en-classe' },
          { text: 'Évaluation', link: '/evaluation' },
          { text: 'Compte EEL', link: '/compte-eel' },
          { text: 'Clé USB', link: '/sauvegarde-cle-usb' }
        ]
      }
    ]
  }
};
