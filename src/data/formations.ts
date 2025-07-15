export interface Formation {
  id: number;
  title: string;
  description: string;
  duration: string;
  chapters: number;
  level: string;
  image: string;
  highlights: string[];
  category: string;
  detailedDescription?: string;
  objectives?: string[];
  prerequisites?: string[];
  program?: {
    title: string;
    content: string[];
  }[];
  instructor?: {
    name: string;
    bio: string;
    avatar: string;
  };
}

export const formations: Formation[] = [
  {
    id: 1,
    title: "Formation : Prise de parole en public",
    description: "Développez votre confiance et vos compétences pour captiver votre audience lors de présentations, réunions et événements professionnels.",
    duration: "20h",
    chapters: 8,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Gestion du stress et du trac",
      "Techniques de communication orale",
      "Structuration d'un discours",
      "Langage corporel et présence scénique"
    ],
    category: "Bien-être et performance"
  },
  {
    id: 2,
    title: "Formation : Qualité de vie au travail",
    description: "Améliorez votre bien-être professionnel en apprenant à créer un environnement de travail sain, équilibré et épanouissant.",
    duration: "20h",
    chapters: 14,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Équilibre vie pro/vie perso",
      "Prévention du burn-out",
      "Aménagement de l'espace de travail",
      "Relations interpersonnelles saines"
    ],
    category: "Bien-être et performance",
    program: [
      {
        title: "Test de positionnement - Qualité de vie au travail",
        content: []
      },
      {
        title: "Module 1 : QVT et performance : où en sommes-nous en France ?",
        content: []
      },
      {
        title: "Module 2 : QVT et performance : plus rentable que contraignant",
        content: []
      },
      {
        title: "Module 3 : Comment amener l'approche de la Qualité de Vie au Travail ?",
        content: []
      },
      {
        title: "Module 4 : Questions sur la QVT",
        content: []
      },
      {
        title: "Module 5 : Risques psychosociaux (RPS)",
        content: []
      },
      {
        title: "Module 6 : Gestion du stress",
        content: []
      },
      {
        title: "Test de satisfaction - Qualité de vie au travail",
        content: []
      }
    ]
  },
  {
    id: 3,
    title: "Formation : Gestes et postures au travail",
    description: "Prévenez les troubles musculo-squelettiques et adoptez les bonnes postures pour préserver votre santé physique au travail.",
    duration: "13h",
    chapters: 16,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Prévention des TMS",
      "Ergonomie du poste de travail",
      "Exercices d'étirement et renforcement",
      "Postures correctes selon l'activité"
    ],
    category: "Bien-être et performance",
    program: [
      {
        title: "Test de positionnement - Gestes et postures au travail",
        content: []
      },
      {
        title: "MODULE N°1 - Données épidémiologiques et législation",
        content: []
      },
      {
        title: "Test de satisfaction - Gestes et postures au travail",
        content: []
      }
    ]
  },
  {
    id: 4,
    title: "Formation : Gestion des conflits",
    description: "Apprenez à identifier, prévenir et résoudre les conflits professionnels pour maintenir un climat de travail serein et productif.",
    duration: "9h",
    chapters: 13,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Identification des sources de conflit",
      "Techniques de médiation",
      "Communication non-violente",
      "Négociation et résolution"
    ],
    category: "Bien-être et performance",
    program: [
      {
        title: "Test de positionnement - Gestion des conflits",
        content: [
          
        ]
      },
      {
        title: "Module 1 : La gestion des conflits au sein d'une entreprise",
        content: [
          
        ]
      },
      {
        title: "Module 2 : Comment appréhender le conflit ?",
        content: [
          
        ]
      },
      {
        title: "Module 3 : Développer une intelligence relationnelle",
        content: [
          
        ]
      },
      {
        title: "Module 4 : Résoudre un conflit ouvert",
        content: [
          
        ]
      },
      {
        title: "Module 5 : Adopter une attitude constructive dans le conflit",
        content: [
          
        ]
      },
      {
        title: "Module 6 : Arbitre au médiateur - Gérer un conflit en tant que tiers",
        content: [
          
        ]
      },
      {
        title: "Module 7 : créer un environnement de travail plus collaboratif",
        content: [
          
        ]
      },
      {
        title: "Module 8 : Ouvrir des paradigmes au-delà du conflit",
        content: [
          
        ]
      },
      {
        title: "Test de satisfaction - Gestion des conflits",
        content: [
          
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Formation : Gestion du stress",
    description: "Maîtrisez les techniques de gestion du stress pour améliorer votre performance, votre bien-être et votre qualité de vie professionnelle.",
    duration: "10h30",
    chapters: 17,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Identification des sources de stress",
      "Techniques de relaxation",
      "Gestion émotionnelle",
      "Stratégies de coping"
    ],
    category: "Bien-être et performance",
    program: [
      {
        title: "Test de positionnement - Gestion du stress",
        content: []
      },
      {
        title: "MODULE 1 : Généralités sur le stress",
        content: []
      },
      {
        title: "MODULE 2 : Gérer le stress et les situations difficiles",
        content: []
      },
      {
        title: "MODULE 3 : Techniques de relaxation",
        content: []
      },
      {
        title: "MODULE 4 : Prévenir le stress",
        content: []
      },
      {
        title: "MODULE 5 : Gérer son temps au travail pour diminuer son stress",
        content: []
      },
      {
        title: "MODULE 6 : La gestion des conflits au sein d'une entreprise",
        content: []
      },
      {
        title: "MODULE 7 : Sophrologie au travail - Partie 1",
        content: []
      },
      {
        title: "MODULE 8 : Sophrologie au travail - Partie 2",
        content: []
      },
      {
        title: "Test de satisfaction - Gestion du stress",
        content: []
      }
    ]
  },
  {
    id: 7,
    title: "Formation : Excel - Pack complet",
    description: "Devenez expert Excel en maîtrisant toutes les fonctionnalités, des bases aux techniques avancées d'analyse de données et d'automatisation.",
    duration: "12h40",
    chapters: 8,
    level: "Débutant à Avancé",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Formules et fonctions avancées",
      "Tableaux croisés dynamiques",
      "Macros et automatisation VBA",
      "Analyse de données et graphiques"
    ],
    category: "Bureaucratique"
  },
  {
    id: 8,
    title: "Formation : Word - Pack complet",
    description: "Maîtrisez Microsoft Word de A à Z pour créer des documents professionnels impeccables et optimiser votre productivité rédactionnelle.",
    duration: "13h15",
    chapters: 7,
    level: "Débutant à Avancé",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Mise en forme professionnelle",
      "Styles et modèles avancés",
      "Publipostage et automatisation",
      "Collaboration et révision"
    ],
    category: "Bureaucratique"
  },
  {
    id: 9,
    title: "Formation : PowerPoint – Pack complet",
    description: "Créez des présentations percutantes et professionnelles avec PowerPoint. Maîtrisez le design, les animations et les techniques de présentation.",
    duration: "6h15",
    chapters: 5,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Design professionnel et impactant",
      "Animations et transitions fluides",
      "Intégration multimédia avancée",
      "Techniques de présentation efficaces"
    ],
    category: "Bureaucratique"
  },
  {
    id: 10,
    title: "Formation : Initiation informatique sous Mac",
    description: "Découvrez l'univers Mac et maîtrisez macOS pour optimiser votre productivité sur les ordinateurs Apple.",
    duration: "6h15",
    chapters: 19,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Navigation et interface macOS",
      "Applications natives essentielles",
      "Gestion des fichiers et dossiers",
      "Personnalisation et optimisation"
    ],
    category: "Bureaucratique",
    program: [
      {
        title: "Test de positionnement - Initiation informatique sur MAC",
        content: []
      },
      {
        title: "Module 1 : Présentation du MacBook Air",
        content: []
      },
      {
        title: "Module 2 : Présentation du MacBook Pro",
        content: []
      },
      {
        title: "Module 3 : Configurer et prendre en main son MacBook",
        content: []
      },
      {
        title: "Module 4 : Nouvelles fonctionnalités sur le MacBook",
        content: []
      },
      {
        title: "Module 5 : Utiliser le MacBook avec d'autres appareils",
        content: []
      },
      {
        title: "Module 6 : Applications",
        content: []
      },
      {
        title: "Module 7 : Trouver des réponses",
        content: []
      },
      {
        title: "Module 8 : Sécurité, manipulation et informations réglementaires",
        content: []
      },
      {
        title: "Quiz final",
        content: []
      },
      {
        title: "Test de satisfaction - Initiation informatique sur MAC",
        content: []
      }
    ]
  },
  {
    id: 11,
    title: "Formation : WhatsApp Business",
    description: "Exploitez le potentiel de WhatsApp Business pour développer votre activité, automatiser vos communications et fidéliser vos clients.",
    duration: "3h30",
    chapters: 4,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Configuration professionnelle complète",
      "Automatisation des réponses",
      "Catalogue produits intégré",
      "Stratégies de communication client"
    ],
    category: "Bureaucratique"
  },
  {
    id: 12,
    title: "Formation : Adobe Photoshop",
    description: "Maîtrisez Adobe Photoshop pour créer, retoucher et optimiser vos visuels professionnels avec les techniques des experts.",
    duration: "7h45",
    chapters: 6,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Retouche photo professionnelle",
      "Création de visuels impactants",
      "Maîtrise des calques et masques",
      "Optimisation pour le web et l'impression"
    ],
    category: "Communication",
    detailedDescription: "Formation complète pour maîtriser Adobe Photoshop, l'outil de référence en retouche photo et création graphique. Apprenez les techniques professionnelles pour créer des visuels de qualité.",
    objectives: [
      "Maîtriser l'interface et les outils Photoshop",
      "Réaliser des retouches photo professionnelles",
      "Créer des compositions graphiques complexes",
      "Optimiser vos images pour différents supports",
      "Développer un workflow efficace"
    ],
    prerequisites: [
      "Connaissances de base en informatique",
      "Accès à Adobe Photoshop",
      "Sens artistique et créativité"
    ],
    program: [
      {
        title: "Interface et outils de base",
        content: [
          "Découverte de l'interface",
          "Outils de sélection",
          "Calques et masques",
          "Réglages de base"
        ]
      },
      {
        title: "Retouche photo",
        content: [
          "Correction des défauts",
          "Ajustements colorimétriques",
          "Techniques de détourage",
          "Retouche beauté et portrait"
        ]
      },
      {
        title: "Création graphique",
        content: [
          "Compositions et montages",
          "Effets et filtres",
          "Typographie et texte",
          "Export et optimisation"
        ]
      }
    ],
    instructor: {
      name: "Lucas Créatif",
      bio: "Graphiste professionnel et formateur Photoshop certifié Adobe. 10 ans d'expérience en agence de communication et formation.",
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 12,
    title: "Formation : Première Pro",
    description: "Apprenez le montage vidéo professionnel avec Adobe Premiere Pro pour créer des contenus vidéo de qualité cinématographique.",
    duration: "7h",
    chapters: 5,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Montage vidéo professionnel",
      "Étalonnage et correction colorimétrique",
      "Effets visuels et transitions",
      "Export optimisé multi-formats"
    ],
    category: "Communication"
  },
  {
    id: 13,
    title: "Formation : After Effects",
    description: "Créez des animations et effets visuels spectaculaires avec Adobe After Effects pour donner vie à vos projets créatifs.",
    duration: "7h",
    chapters: 15,
    level: "Intermédiaire à Avancé",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Animation 2D et motion design",
      "Effets visuels cinématographiques",
      "Compositing et incrustation",
      "Animation de texte et logos"
    ],
    category: "Communication",
    program: [
      {
        title: "Test de positionnement - After Effects",
        content: []
      },
      {
        title: "Module 1 : Définir les champs d'application d'After effects dans l'univers de l'animation graphique",
        content: []
      },
      {
        title: "Module 2 : Appréhender le logiciel",
        content: []
      },
      {
        title: "Module 3 : Utiliser les outils fondamentaux",
        content: []
      },
      {
        title: "Module 4 : Gestion de la transparence",
        content: []
      },
      {
        title: "Module 5 : Points clés, compositions et vélocité",
        content: []
      },
      {
        title: "Module 6 : Les effets",
        content: []
      },
      {
        title: "Module 7 : Animation de texte",
        content: []
      },
      {
        title: "Module 8 : Animation avancée",
        content: []
      },
      {
        title: "Module 9 : Exportation",
        content: []
      },
      {
        title: "Quiz Final",
        content: []
      },
      {
        title: "Test de satisfaction - After Effects",
        content: []
      }
    ]
  },
  {
    id: 14,
    title: "Formation : Canva",
    description: "Créez des visuels professionnels facilement avec Canva. Maîtrisez tous les outils pour concevoir des designs impactants sans compétences techniques.",
    duration: "10h",
    chapters: 11,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Design graphique accessible",
      "Templates et personnalisation",
      "Création de contenus multi-formats",
      "Collaboration et partage d'équipe"
    ],
    category: "Communication",
    program: [
      {
        title: "Test de positionnement - Canva",
        content: []
      },
      {
        title: "Module 1 : Canva, un outil de création visuel intuitif et professionnel",
        content: []
      },
      {
        title: "Module 2 : Vos premiers pas sur canva",
        content: []
      },
      {
        title: "Module 3 : L'importance d'avoir une image professionnelle dans votre communication digitale",
        content: []
      },
      {
        title: "Module 4 : Personal branding - construire une marque personnelle avec canva",
        content: []
      },
      {
        title: "Quiz final",
        content: []
      },
      {
        title: "Test de satisfaction - Canva",
        content: []
      }
    ]
  },
  {
    id: 16,
    title: "Formation : Création d'entreprise",
    description: "Apprenez toutes les étapes pour créer votre entreprise avec succès, de l'idée à la mise en œuvre, en passant par les démarches administratives.",
    duration: "24h30",
    chapters: 20,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Validation d'idée et étude de marché",
      "Choix du statut juridique optimal",
      "Business plan et prévisionnel financier",
      "Démarches administratives complètes"
    ],
    category: "La boîte à outils de l'entrepreneur",
    program: [
      {
        title: "Test de postionnement - Création d'entreprise",
        content: []
      },
      {
        title: "Module d'introduction",
        content: []
      },
      {
        title: "Module 1 : Comment créer une entreprise",
        content: []
      },
      {
        title: "Module 2 : L'état d'esprit et les compétences de l'entrepreneur",
        content: []
      },
      {
        title: "Module 3 : La rentabilité pour l'entrepreneur",
        content: []
      },
      {
        title: "Module 4 : L'analyse SWOT",
        content: []
      },
      {
        title: "Module 5 : Les 4 P - Positionner votre offre sur le marché",
        content: []
      },
      {
        title: "Module 6 : Le Bilan",
        content: []
      },
      {
        title: "Module 7 : Etude de cas d'un Bilan",
        content: []
      },
      {
        title: "Module 8 : Le plan de trésorerie",
        content: []
      },
      {
        title: "Module 9 : Le business plan",
        content: []
      },
      {
        title: "Module 10 : Gestion simplifié de la comptabilité",
        content: []
      },
      {
        title: "Module 11 : L'organisation de votre temps",
        content: []
      },
      {
        title: "Module 12 : Quel type d'entreprise choisir ?",
        content: []
      },
      {
        title: "Module 13 : Apprendre à déléguer",
        content: []
      },
      {
        title: "Module 14 : Les outils de l'entrepreneur",
        content: []
      },
      {
        title: "Module 15 : Création d'entreprise",
        content: []
      },
      {
        title: "Quiz Evaluation Final",
        content: []
      },
      {
        title: "Test de satisfaction - Création d'entreprise",
        content: []
      }
    ]
  },
  {
    id: 17,
    title: "Formation : Document unique obligatoire en entreprise",
    description: "Maîtrisez la création et la gestion du Document Unique d'Évaluation des Risques Professionnels (DUERP) pour assurer la sécurité en entreprise.",
    duration: "6h",
    chapters: 8,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Obligations légales et réglementaires",
      "Méthodologie d'évaluation des risques",
      "Rédaction et mise à jour du DUERP",
      "Plan d'actions préventives"
    ],
    category: "La boîte à outils de l'entrepreneur",
    program: [
      {
        title: "Test de positionnement - Document unique obligatoire en entreprise",
        content: []
      },
      {
        title: "Module 1 : Les obligations de l'employeur en matière de formation, d'information et de prévention des risques professionnels ?",
        content: []
      },
      {
        title: "Module 2 : la politique QSEH",
        content: []
      },
      {
        title: "Module 3 : le document unique : santé et sécurité au travail, zoom sur deux volets importants de la gestion QHSE",
        content: []
      },
      {
        title: "Test de satisfaction - Document unique obligatoire en entreprise",
        content: []
      }
    ]
  },
  {
    id: 18,
    title: "Formation : Management (Manitude)",
    description: "Développez vos compétences managériales avec la méthode Manitude pour diriger efficacement vos équipes et créer un environnement de travail performant.",
    duration: "15h",
    chapters: 34,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Leadership et motivation d'équipe",
      "Communication managériale efficace",
      "Gestion des performances",
      "Développement des collaborateurs"
    ],
    category: "Management et vente",
    program: [
      {
        title: "Test de positionnement - Management ( Manitude )",
        content: []
      },
      {
        title: "Module 1 : Manager une mission, une posture",
        content: []
      },
      {
        title: "Module 2 : individualiser les stratégies de motivation du manager",
        content: []
      },
      {
        title: "Module 3 : Le management situationnel",
        content: []
      },
      {
        title: "Module 4 : Apprendre à déléguer",
        content: []
      },
      {
        title: "Module 5 : Mener des entretiens avec ses collaborateurs",
        content: []
      },
      {
        title: "Module 6 : Appréhender le leadership",
        content: []
      },
      {
        title: "Module 7 : Manager le changement",
        content: []
      },
      {
        title: "Module 8 : Animer une réunion",
        content: []
      },
      {
        title: "Module 9 : Comment appréhender le conflit ?",
        content: []
      },
      {
        title: "Module 10 : Développer une intelligence relationnelle",
        content: []
      },
      {
        title: "Module 11 : Résoudre un conflit ouvert",
        content: []
      },
      {
        title: "Module 12 : Adopter une attitude constructive dans le conflit",
        content: []
      },
      {
        title: "Module 13 : Arbitre au médiateur - Gérer un conflit en tant que tiers",
        content: []
      },
      {
        title: "Module 14 : Créer un environnement de travail plus collaboratif",
        content: []
      },
      {
        title: "Module 15 : Ouvrir des paradigmes au-delà du conflit",
        content: []
      },
      {
        title: "Module 16 : Communiquer dans le désaccord",
        content: []
      },
      {
        title: "Module 17 : Améliorer ses talents relationnels",
        content: []
      },
      {
        title: "Module 18 : Management à distance",
        content: []
      },
      {
        title: "Module 19 : Gestion du stress",
        content: []
      },
      {
        title: "Quiz final",
        content: []
      },
      {
        title: "Test de satisfaction - Management ( Manitude )",
        content: []
      }
    ]
  },
  {
    id: 19,
    title: "Formation : Techniques de vente - Omnicanal RS5068",
    description: "Maîtrisez les techniques de vente modernes et l'approche omnicanale pour maximiser vos performances commerciales sur tous les canaux.",
    duration: "19h",
    chapters: 25,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Techniques de vente avancées",
      "Stratégie omnicanale",
      "Négociation et closing",
      "Relation client digitale"
    ],
    category: "Management et vente",
    program: [
      {
        title: "Test de positionnement - Techniques de vente - Omnical RS5068",
        content: []
      },
      {
        title: "Module 1 : La compréhension basique du processus de vente",
        content: []
      },
      {
        title: "Module 2 : 7 étapes de ventes",
        content: []
      },
      {
        title: "Module 3 : Les techniques de vente",
        content: []
      },
      {
        title: "Module 4 : La négociation",
        content: []
      },
      {
        title: "Module 5 : Encaissement",
        content: []
      },
      {
        title: "Module 6 : Les bases du RGPD pour créer une fiche client",
        content: []
      },
      {
        title: "Module 7 : Conseiller à distance",
        content: []
      },
      {
        title: "Module 8 : L'après-vente et la fidélisation",
        content: []
      },
      {
        title: "Module 9 : Les fondamentaux pour communiquer sur les réseaux sociaux",
        content: []
      },
      {
        title: "Module 10 : Mettre en ligne des photos avec Canva",
        content: []
      },
      {
        title: "Module 11 : Utiliser les réseaux sociaux comme levier de communication et outils de vente",
        content: []
      },
      {
        title: "Module 12 : Comprendre son environnement de vente",
        content: []
      },
      {
        title: "Module 13 : La prospection omnicanal et la découverte client",
        content: []
      },
      {
        title: "Module 14 : La prospection téléphonique dans une démarche omnicanal",
        content: []
      },
      {
        title: "Test de satisfaction - Techniques de vente - Omnical RS5068",
        content: []
      }
    ]
  },
  {
    id: 20,
    title: "Formation : Gestion de projet",
    description: "Apprenez à planifier, organiser et mener à bien vos projets avec les méthodologies et outils de gestion de projet les plus efficaces.",
    duration: "9h",
    chapters: 18,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Méthodologies de gestion de projet",
      "Planification et suivi",
      "Gestion des équipes projet",
      "Outils collaboratifs modernes"
    ],
    category: "Management et vente",
    program: [
      {
        title: "Test de positionnement - Gestion de projet",
        content: []
      },
      {
        title: "Gestion de projet",
        content: []
      },
      {
        title: "Test de satisfaction - Gestion de projet",
        content: []
      }
    ]
  },
  {
    id: 21,
    title: "Formation : Communication",
    description: "Développez vos compétences en communication professionnelle pour améliorer vos relations interpersonnelles et votre efficacité au travail.",
    duration: "16h",
    chapters: 8,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Communication interpersonnelle efficace",
      "Techniques d'écoute active",
      "Communication écrite professionnelle",
      "Gestion des situations difficiles"
    ],
    category: "Communication"
  },
  {
    id: 23,
    title: "Formation : SketchUp",
    description: "Maîtrisez SketchUp pour créer des modèles 3D professionnels, des plans architecturaux et des visualisations pour vos projets créatifs et techniques.",
    duration: "15h",
    chapters: 40,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Modélisation 3D professionnelle",
      "Plans et coupes techniques",
      "Rendu et visualisation",
      "Extensions et plugins utiles"
    ],
    category: "Communication",
    program: [
      {
        title: "Test de positionnement - SketchUp",
        content: []
      },
      {
        title: "Module 1 : Les fondamentaux de SketchUp",
        content: []
      },
      {
        title: "Module 2 : Paramétrer le modèle SketchUp",
        content: []
      },
      {
        title: "Module 3 : Se déplacer dans le modèle",
        content: []
      },
      {
        title: "Module 4 : Les outils de base",
        content: []
      },
      {
        title: "Module 5 : Les outils d'édition et de construction",
        content: []
      },
      {
        title: "Module 6 : Modéliser avec précision",
        content: []
      },
      {
        title: "Module 7 : Les textures et matières",
        content: []
      },
      {
        title: "Module 8 : Créer une bibliothèque",
        content: []
      },
      {
        title: "Module 9 : Les informations du modèle",
        content: []
      },
      {
        title: "Module 10 : Les lumières dans SketchUp",
        content: []
      },
      {
        title: "Module 11 : Présenter son projet",
        content: []
      },
      {
        title: "Module 12 : Animer son projet",
        content: []
      },
      {
        title: "Module 13 : Présenter avec LayOut",
        content: []
      },
      {
        title: "Module 14 : Créer un style avec Stylebuilder",
        content: []
      },
      {
        title: "Module 15 : Le langage visuel du design",
        content: []
      },
      {
        title: "Module 16 : L'histoire de l'architecture et des styles",
        content: []
      },
      {
        title: "Module 17 : Les styles de décorations d'intérieur",
        content: []
      },
      {
        title: "Module 18 : Aménagement de l'espace",
        content: []
      },
      {
        title: "Module 19 : L'histoire du mobilier",
        content: []
      },
      {
        title: "Test de satisfaction - SketchUp",
        content: []
      }
    ]
  },
  {
    id: 24,
    title: "Formation : Marketing e-commerce et réseaux sociaux",
    description: "Développez votre activité e-commerce grâce aux stratégies marketing digital et à la puissance des réseaux sociaux.",
    duration: "26h",
    chapters: 17,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Stratégies e-commerce performantes",
      "Marketing des réseaux sociaux",
      "Publicité Facebook et Instagram Ads",
      "Conversion et fidélisation client"
    ],
    category: "Communication",
    program: [
      {
        title: "Test de positionnement - Marketer l'e-Commerce, Réseaux Sociaux",
        content: []
      },
      {
        title: "Module 1 - Les fondamentaux du Community Manager",
        content: []
      },
      {
        title: "Module 2 - La base des réseaux sociaux",
        content: []
      },
      {
        title: "Module 3 - Cerner les enjeux comportementaux des internautes pour construire votre projet social media",
        content: []
      },
      {
        title: "Module 4 - Mettre en place une stratégie Social Média",
        content: []
      },
      {
        title: "Module 5 - Pinterest Ads",
        content: []
      },
      {
        title: "Module 6 - TikTok Ads",
        content: []
      },
      {
        title: "Module 7 - SnapChat Ads",
        content: []
      },
      {
        title: "Module 8 - Le référencement",
        content: []
      },
      {
        title: "Test de satisfaction - Marketer l'e-Commerce, Réseaux Sociaux",
        content: []
      }
    ]
  },
  {
    id: 25,
    title: "Formation : Cybersécurité",
    description: "Maîtrisez les fondamentaux de la cybersécurité pour protéger les systèmes d'information et développer une expertise recherchée.",
    duration: "22h",
    chapters: 10,
    level: "Intermédiaire à Avancé",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Sécurité des réseaux et systèmes",
      "Détection et prévention des menaces",
      "Audit et conformité sécuritaire",
      "Gestion des incidents de sécurité"
    ],
    category: "Bureaucratique"
  },
  {
    id: 26,
    title: "Formation : Influence Marketing",
    description: "Apprenez à développer votre influence en ligne et à créer des campagnes marketing d'influence efficaces pour booster votre business.",
    duration: "14h",
    chapters: 7,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Stratégies d'influence marketing",
      "Création de contenu viral",
      "Partenariats avec les influenceurs",
      "Mesure du ROI des campagnes"
    ],
    category: "Communication"
  },
  {
    id: 27,
    title: "Formation : Réseaux sociaux - Community Manager",
    description: "Devenez expert en gestion de communautés et maîtrisez tous les aspects du community management professionnel.",
    duration: "16h",
    chapters: 8,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Stratégie de contenu social media",
      "Animation et engagement communauté",
      "Gestion de crise et e-réputation",
      "Analytics et reporting"
    ],
    category: "Communication"
  },
  {
    id: 28,
    title: "Formation : Esthétique",
    description: "Maîtrisez les techniques esthétiques professionnelles et lancez votre activité dans le secteur de la beauté et du bien-être.",
    duration: "20h",
    chapters: 9,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Techniques de soins du visage",
      "Protocoles de beauté professionnels",
      "Hygiène et sécurité en institut",
      "Création d'un institut de beauté"
    ],
    category: "Bien-être et performance"
  },
  {
    id: 29,
    title: "Formation : Gestion Locative",
    description: "Apprenez à gérer efficacement un patrimoine immobilier locatif et optimisez vos revenus immobiliers.",
    duration: "12h",
    chapters: 6,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Sélection et acquisition de biens",
      "Gestion locative et administrative",
      "Optimisation fiscale immobilière",
      "Relation propriétaire-locataire"
    ],
    category: "La boîte à outils de l'entrepreneur"
  },
{
  id: 30,
  title: "Formation : Langue des signes française - A1",
  description: "Apprenez les bases de la langue des signes française pour communiquer efficacement avec la communauté sourde et malentendante.",
  duration: "20h",
  chapters: 12,
  level: "Débutant",
  image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Alphabet et chiffres en LSF",
    "Vocabulaire de base du quotidien",
    "Grammaire et syntaxe LSF",
    "Communication pratique et expressions"
  ],
  category: "Communication",
  program: [
    {
      title: "Test positionnement - Langue des signes française",
      content: []
    },
    {
      title: "Module 1",
      content: [
        "Quiz Module 1"
      ]
    },
    {
      title: "Module 2", 
      content: [
        "Quiz Module 2"
      ]
    },
    {
      title: "Module 3",
      content: [
        "Quiz Module 3"
      ]
    },
    {
      title: "Module 4",
      content: [
        "Quiz Module 4"
      ]
    },
    {
      title: "Module 5",
      content: [
        "Quiz Module 5"
      ]
    },
    {
      title: "Test de satisfaction - Langue des signes française",
      content: []
    }
  ]
},
{
  id: 31,
  title: "Formation : Sophrologie",
  description: "Découvrez les techniques de sophrologie pour gérer le stress, améliorer votre bien-être et développer vos capacités de relaxation et de concentration.",
  duration: "7h40",
  chapters: 21,
  level: "Débutant",
  image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Techniques de respiration et relaxation",
    "Gestion du stress et des émotions",
    "Exercices de visualisation positive",
    "Applications pratiques au quotidien"
  ],
  category: "Bien-être et performance",
  program: [
    {
      title: "Test de positionnement - Sophrologie",
      content: []
    },
    {
      title: "Module 1 : Stress et Travail font-ils bon ménage ?",
      content: []
    },
    {
      title: "Module 2 : Le travail c'est la sante ?",
      content: []
    },
    {
      title: "Module 3 : Face au stress, adoptez la double approche",
      content: []
    },
    {
      title: "Module 4 : Affronter sereinement une surcharge de travail",
      content: []
    },
    {
      title: "Module 5 : Doper son énergie",
      content: []
    },
    {
      title: "Module 6 : Se sentir à la hauteur",
      content: []
    },
    {
      title: "Module 7 : Créer des relations satisfaisantes",
      content: []
    },
    {
      title: "Module 8 : Concilier vie professionnelle et vie privée",
      content: []
    },
    {
      title: "Module 9 : Retrouver du sens et de la motivation",
      content: []
    },
    {
      title: "Module 10 : Passer un pacte de zénitude avec soi-même",
      content: []
    },
    {
      title: "Test de satisfaction - Sophrologie",
      content: []
    }
  ]
},
{
  id: 32,
  title: "Formation : TRACFIN",
  description: "Maîtrisez les obligations de déclaration TRACFIN pour la lutte contre le blanchiment d'argent et le financement du terrorisme.",
  duration: "7h45",
  chapters: 5,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Réglementation anti-blanchiment",
    "Détection des opérations suspectes",
    "Procédures de déclaration TRACFIN",
    "Obligations légales et sanctions"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 33,
  title: "Formation : TikTok Ads",
  description: "Maîtrisez la publicité sur TikTok pour toucher une audience jeune et dynamique avec des campagnes créatives et performantes.",
  duration: "1h16",
  chapters: 3,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/7887807/pexels-photo-7887807.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Création de campagnes TikTok Ads",
    "Ciblage et audiences TikTok",
    "Formats publicitaires créatifs",
    "Optimisation et performance"
  ],
  category: "Communication"
},
{
  id: 34,
  title: "Formation : Leader emblématique",
  description: "Développez votre leadership charismatique et apprenez à inspirer, motiver et diriger efficacement vos équipes vers l'excellence.",
  duration: "31h",
  chapters: 12,
  level: "Avancé",
  image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Leadership inspirant et vision",
    "Communication charismatique",
    "Influence et persuasion",
    "Gestion d'équipes haute performance"
  ],
  category: "Management et vente"
},
{
  id: 35,
  title: "Formation : Décoration d'intérieur et SketchUp",
  description: "Apprenez l'art de la décoration d'intérieur et maîtrisez SketchUp pour créer des espaces harmonieux et des visualisations 3D professionnelles.",
  duration: "25h",
  chapters: 10,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Principes de décoration d'intérieur",
    "Couleurs, matériaux et textures",
    "Modélisation 3D avec SketchUp",
    "Création d'espaces fonctionnels et esthétiques"
  ],
  category: "Communication"
},
{
  id: 36,
  title: "Formation : Acquisition de leads",
  description: "Maîtrisez les techniques d'acquisition de prospects qualifiés pour développer votre pipeline commercial et augmenter vos ventes.",
  duration: "7h",
  chapters: 5,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Stratégies de génération de leads",
    "Marketing automation et nurturing",
    "Optimisation des tunnels de conversion",
    "Qualification et scoring des prospects"
  ],
  category: "Communication"
},
{
  id: 37,
  title: "Formation : Initiation à l'informatique sous Windows",
  description: "Découvrez les bases de l'informatique sous Windows pour maîtriser votre ordinateur et gagner en autonomie numérique.",
  duration: "9h30",
  chapters: 6,
  level: "Débutant",
  image: "https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Navigation et interface Windows",
    "Gestion des fichiers et dossiers",
    "Applications essentielles",
    "Sécurité et maintenance de base"
  ],
  category: "Bureaucratique"
},
{
  id: 38,
  title: "Formation : LinkedIn",
  description: "Optimisez votre profil LinkedIn et développez votre réseau professionnel pour booster votre carrière et votre business.",
  duration: "8h",
  chapters: 5,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Optimisation du profil LinkedIn",
    "Stratégies de networking efficaces",
    "Publication de contenu engageant",
    "Prospection et développement commercial"
  ],
  category: "Communication"
},
{
  id: 39,
  title: "Formation : RGPD pour vous",
  description: "Maîtrisez le Règlement Général sur la Protection des Données pour assurer la conformité de votre entreprise et protéger les données personnelles.",
  duration: "12h40",
  chapters: 7,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Principes fondamentaux du RGPD",
    "Droits des personnes concernées",
    "Obligations des responsables de traitement",
    "Mise en conformité pratique"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 40,
  title: "Formation : Word – Perfectionnement",
  description: "Perfectionnez vos compétences Word pour créer des documents complexes et professionnels avec les fonctionnalités avancées.",
  duration: "5h20",
  chapters: 4,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Styles et modèles avancés",
    "Tableaux et graphiques complexes",
    "Fusion et publipostage",
    "Révision et collaboration"
  ],
  category: "Bureaucratique"
},
{
  id: 41,
  title: "Formation : Word – Initiation",
  description: "Apprenez les bases de Microsoft Word pour créer et mettre en forme vos premiers documents professionnels.",
  duration: "21h",
  chapters: 8,
  level: "Débutant",
  image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Interface et navigation Word",
    "Saisie et mise en forme de texte",
    "Insertion d'éléments graphiques",
    "Impression et partage de documents"
  ],
  category: "Bureaucratique"
},
{
  id: 42,
  title: "Formation : Excel - Fonction",
  description: "Maîtrisez les fonctions Excel essentielles pour automatiser vos calculs et analyses de données efficacement.",
  duration: "6h50",
  chapters: 5,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Fonctions de calcul avancées",
    "Fonctions logiques et conditionnelles",
    "Fonctions de recherche et référence",
    "Fonctions de date et texte"
  ],
  category: "Bureaucratique"
},
{
  id: 43,
  title: "Formation : Excel – Base de données",
  description: "Apprenez à utiliser Excel comme base de données pour organiser, filtrer et analyser efficacement vos informations.",
  duration: "9h40",
  chapters: 6,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Structure et organisation des données",
    "Tri et filtrage avancé",
    "Tableaux croisés dynamiques",
    "Requêtes et validation de données"
  ],
  category: "Bureaucratique"
},
{
  id: 44,
  title: "Formation : Excel – Initiation",
  description: "Découvrez les bases d'Excel pour créer vos premiers tableaux, effectuer des calculs simples et présenter vos données.",
  duration: "7h30",
  chapters: 5,
  level: "Débutant",
  image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Interface et navigation Excel",
    "Saisie et mise en forme des données",
    "Calculs et formules de base",
    "Création de graphiques simples"
  ],
  category: "Bureaucratique"
},
{
  id: 45,
  title: "Formation : PowerPoint – Initiation",
  description: "Apprenez les bases de PowerPoint pour créer vos premières présentations professionnelles et captivantes.",
  duration: "7h30",
  chapters: 5,
  level: "Débutant",
  image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Interface et création de diapositives",
    "Mise en forme et design de base",
    "Insertion d'éléments multimédias",
    "Transitions et animations simples"
  ],
  category: "Bureaucratique"
},
{
  id: 46,
  title: "Formation : PowerPoint – Perfectionnement",
  description: "Perfectionnez vos compétences PowerPoint pour créer des présentations professionnelles avec des animations et effets avancés.",
  duration: "13h15",
  chapters: 7,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Design avancé et modèles personnalisés",
    "Animations complexes et interactions",
    "Intégration multimédia professionnelle",
    "Techniques de présentation efficaces"
  ],
  category: "Bureaucratique"
},
{
  id: 47,
  title: "Formation : Communication de crise",
  description: "Maîtrisez les techniques de communication de crise pour protéger votre réputation et gérer efficacement les situations difficiles.",
  duration: "23h30",
  chapters: 10,
  level: "Avancé",
  image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Anticipation et prévention des crises",
    "Stratégies de communication d'urgence",
    "Gestion des médias et réseaux sociaux",
    "Préservation de l'image et réputation"
  ],
  category: "Communication"
},
{
  id: 48,
  title: "Formation : Pack office Initiation",
  description: "Découvrez les bases de la suite Microsoft Office (Word, Excel, PowerPoint) pour une productivité bureautique optimale.",
  duration: "30h30",
  chapters: 12,
  level: "Débutant",
  image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Bases de Word, Excel et PowerPoint",
    "Création de documents professionnels",
    "Calculs et tableaux simples",
    "Présentations efficaces"
  ],
  category: "Bureaucratique"
},
{
  id: 49,
  title: "Formation : Pack office Perfectionnement",
  description: "Perfectionnez votre maîtrise de Microsoft Office avec les fonctionnalités avancées pour une efficacité professionnelle maximale.",
  duration: "49h40",
  chapters: 15,
  level: "Intermédiaire à Avancé",
  image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Fonctionnalités avancées Office",
    "Automatisation et macros",
    "Collaboration et partage",
    "Intégration entre applications"
  ],
  category: "Bureaucratique"
},
{
  id: 50,
  title: "Formation : Pack office Complète",
  description: "Formation complète Microsoft Office couvrant tous les niveaux pour devenir expert sur l'ensemble de la suite bureautique.",
  duration: "40h37",
  chapters: 16,
  level: "Débutant à Avancé",
  image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Maîtrise complète de la suite Office",
    "De l'initiation à l'expertise",
    "Productivité maximale",
    "Certification professionnelle"
  ],
  category: "Bureaucratique"
},
{
  id: 51,
  title: "Formation : Réseaux sociaux - L'intégrale",
  description: "Formation complète sur tous les réseaux sociaux pour développer votre présence digitale et votre stratégie social media.",
  duration: "5h",
  chapters: 4,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Stratégie multi-réseaux sociaux",
    "Création de contenu engageant",
    "Analyse des performances",
    "Publicité sur les réseaux sociaux"
  ],
  category: "Communication"
},
{
  id: 52,
  title: "Formation : Excel intéractif - Initiation",
  description: "Découvrez Excel de manière interactive avec des exercices pratiques pour maîtriser rapidement les fonctionnalités de base.",
  duration: "5h50",
  chapters: 4,
  level: "Débutant",
  image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Apprentissage interactif et pratique",
    "Exercices guidés step-by-step",
    "Manipulation de données en temps réel",
    "Progression personnalisée"
  ],
  category: "Bureaucratique"
},
{
  id: 53,
  title: "Formation : Metaverse",
  description: "Explorez l'univers du métavers et apprenez à naviguer dans cette nouvelle dimension digitale pour vos projets personnels et professionnels.",
  duration: "5h40",
  chapters: 4,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Comprendre les concepts du métavers",
    "Plateformes et technologies VR/AR",
    "Opportunités business dans le métavers",
    "Création d'expériences immersives"
  ],
  category: "Communication"
},
{
  id: 54,
  title: "Formation : Tout savoir sur la gestion d'une SCI",
  description: "Maîtrisez tous les aspects de la création et gestion d'une Société Civile Immobilière pour optimiser votre investissement immobilier.",
  duration: "15h",
  chapters: 8,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Création et statuts de la SCI",
    "Gestion fiscale et comptable",
    "Transmission et succession",
    "Optimisation patrimoniale"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 55,
  title: "Formation : La copropriété pour tous",
  description: "Comprenez les règles et enjeux de la copropriété pour mieux gérer votre bien immobilier et vos relations avec le syndic.",
  duration: "5h",
  chapters: 4,
  level: "Débutant",
  image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Fonctionnement de la copropriété",
    "Droits et devoirs des copropriétaires",
    "Assemblées générales et votes",
    "Gestion des charges et travaux"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 56,
  title: "Formation : Crédit immobilier",
  description: "Maîtrisez tous les aspects du crédit immobilier pour optimiser votre financement et négocier les meilleures conditions.",
  duration: "7h",
  chapters: 5,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Types de crédits immobiliers",
    "Conditions d'obtention et garanties",
    "Négociation des taux et conditions",
    "Assurance emprunteur et frais annexes"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 57,
  title: "Formation : Communication immobilière",
  description: "Développez vos compétences en communication spécialisée dans l'immobilier pour mieux vendre, louer et conseiller vos clients.",
  duration: "14h",
  chapters: 7,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Techniques de vente immobilière",
    "Communication client personnalisée",
    "Négociation et closing immobilier",
    "Marketing digital immobilier"
  ],
  category: "Communication"
},
{
  id: 58,
  title: "Formation : Financement en immobilier",
  description: "Explorez toutes les solutions de financement immobilier pour accompagner efficacement vos projets d'investissement.",
  duration: "19h",
  chapters: 8,
  level: "Intermédiaire à Avancé",
  image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Montages financiers complexes",
    "Investissement locatif et défiscalisation",
    "Financements alternatifs et crowdfunding",
    "Optimisation fiscale immobilière"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 59,
  title: "Formation : Expertise Immobilière",
  description: "Devenez expert en évaluation immobilière et maîtrisez toutes les méthodes d'expertise pour estimer précisément la valeur des biens.",
  duration: "46h",
  chapters: 15,
  level: "Avancé",
  image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Méthodes d'évaluation immobilière",
    "Analyse de marché et comparables",
    "Expertise technique des bâtiments",
    "Rédaction de rapports d'expertise"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 60,
  title: "Formation : IAS Niveau 1",
  description: "Initiez-vous aux Normes Internationales d'Information Financière (IAS/IFRS) pour maîtriser les standards comptables internationaux.",
  duration: "20h",
  chapters: 8,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Principes fondamentaux IAS/IFRS",
    "États financiers selon les normes internationales",
    "Conversion et consolidation",
    "Mise en pratique des normes"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 61,
  title: "Formation : IOBSP",
  description: "Préparez-vous au statut d'Intermédiaire en Opérations de Banque et Services de Paiement pour exercer légalement dans le secteur financier.",
  duration: "13h",
  chapters: 6,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Réglementation IOBSP et obligations",
    "Produits bancaires et assurance",
    "Déontologie et protection du consommateur",
    "Procédures d'immatriculation ORIAS"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 62,
  title: "Formation : Langue des signes française A.2",
  description: "Perfectionnez votre maîtrise de la langue des signes française avec le niveau A2 pour une communication plus fluide et naturelle.",
  duration: "28h",
  chapters: 10,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Vocabulaire étendu et expressions courantes",
    "Grammaire LSF approfondie",
    "Conversations thématiques",
    "Culture et communauté sourde"
  ],
  category: "Communication"
},
{
  id: 63,
  title: "Formation : CAP Esthétique Cosmétique Parfumerie - Pôle 1",
  description: "Préparez le CAP Esthétique - Pôle 1 : Techniques esthétiques du visage, du décolleté et des mains pour devenir professionnel de l'esthétique.",
  duration: "35h",
  chapters: 12,
  level: "Débutant",
  image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Techniques de soins du visage",
    "Épilation et modelages",
    "Protocoles d'hygiène et sécurité",
    "Anatomie et physiologie de la peau"
  ],
  category: "Bien-être et performance"
},
{
  id: 64,
  title: "Formation : CAP Esthétique Cosmétique Parfumerie - Pôle 2",
  description: "Préparez le CAP Esthétique - Pôle 2 : Techniques esthétiques des pieds et des jambes pour compléter votre formation professionnelle.",
  duration: "25h",
  chapters: 8,
  level: "Débutant",
  image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Soins des pieds et pédicure",
    "Épilation des jambes",
    "Techniques de massage des membres inférieurs",
    "Pathologies et contre-indications"
  ],
  category: "Bien-être et performance"
},
{
  id: 65,
  title: "Formation : CAP Esthétique Cosmétique Parfumerie - Pôle 3",
  description: "Préparez le CAP Esthétique - Pôle 3 : Conduite d'un institut de beauté et relation clientèle pour gérer un établissement esthétique.",
  duration: "30h",
  chapters: 10,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/3738391/pexels-photo-3738391.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Gestion d'un institut de beauté",
    "Accueil et conseil clientèle",
    "Vente de produits et services",
    "Organisation et planification"
  ],
  category: "Bien-être et performance"
},
{
  id: 66,
  title: "Formation : CAP Esthétique Cosmétique Parfumerie - Pôle 4",
  description: "Préparez le CAP Esthétique - Pôle 4 : Sciences appliquées et technologie des appareils pour maîtriser les aspects techniques du métier.",
  duration: "25h",
  chapters: 8,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/4153351/pexels-photo-4153351.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Biologie appliquée à l'esthétique",
    "Cosmétologie et produits",
    "Technologie des appareils",
    "Réglementation et sécurité"
  ],
  category: "Bien-être et performance"
},
{
  id: 67,
  title: "Formation : CAP Esthétique Cosmétique Parfumerie - Pôle 5",
  description: "Préparez le CAP Esthétique - Pôle 5 : Arts appliqués à la profession pour développer votre créativité et sens esthétique professionnel.",
  duration: "20h",
  chapters: 6,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Histoire de l'art et des styles",
    "Couleurs et harmonies",
    "Design et aménagement d'espace",
    "Créativité appliquée à l'esthétique"
  ],
  category: "Bien-être et performance"
},
{
  id: 68,
  title: "Formation 010 : Rachat de crédits immobilier",
  description: "Maîtrisez les techniques de rachat de crédits immobiliers pour optimiser les finances de vos clients et réduire leurs mensualités.",
  duration: "12h",
  chapters: 6,
  level: "Intermédiaire",
  image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Analyse de la situation financière",
    "Techniques de rachat et regroupement",
    "Négociation avec les établissements",
    "Optimisation du plan de financement"
  ],
  category: "La boîte à outils de l'entrepreneur"
},
{
  id: 69,
  title: "Formation : Vidéos et photos au Drone",
  description: "Apprenez à capturer des images et vidéos aériennes professionnelles avec un drone pour vos projets créatifs et commerciaux.",
  duration: "15h",
  chapters: 7,
  level: "Débutant à Intermédiaire",
  image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
  highlights: [
    "Pilotage de drone et réglementation",
    "Techniques de prise de vue aérienne",
    "Composition et cadrage en hauteur",
    "Post-production et montage vidéo"
  ],
  category: "Communication"
}
];