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
  detailedDescription: string;
  objectives: string[];
  prerequisites: string[];
  program: {
    title: string;
    content: string[];
  }[];
  instructor: {
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
    category: "Bien-être et performance",
    detailedDescription: "Cette formation complète vous permettra de maîtriser l'art de la prise de parole en public, de surmonter vos appréhensions et de devenir un orateur confiant et persuasif.",
    objectives: [
      "Surmonter la peur de parler en public",
      "Structurer efficacement vos présentations",
      "Maîtriser votre langage corporel",
      "Captiver et engager votre audience",
      "Gérer les questions et interactions"
    ],
    prerequisites: [
      "Aucun prérequis spécifique",
      "Motivation pour améliorer ses compétences",
      "Accès à un ordinateur ou smartphone"
    ],
    program: [
      {
        title: "Fondamentaux de la prise de parole",
        content: [
          "Comprendre les mécanismes du trac",
          "Techniques de relaxation et respiration",
          "Préparation mentale et physique",
          "Exercices pratiques de confiance"
        ]
      },
      {
        title: "Structure et contenu",
        content: [
          "Architecture d'un discours efficace",
          "Techniques de storytelling",
          "Utilisation des supports visuels",
          "Adaptation au public cible"
        ]
      },
      {
        title: "Performance et présence",
        content: [
          "Langage corporel et gestuelle",
          "Modulation de la voix",
          "Gestion de l'espace scénique",
          "Interaction avec l'audience"
        ]
      }
    ],
    instructor: {
      name: "Marie Eloquence",
      bio: "Coach en communication et formatrice en prise de parole avec 12 ans d'expérience. Ancienne journaliste et conférencière internationale.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 2,
    title: "Formation : Qualité de vie au travail",
    description: "Améliorez votre bien-être professionnel en apprenant à créer un environnement de travail sain, équilibré et épanouissant.",
    duration: "13h",
    chapters: 6,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Équilibre vie pro/vie perso",
      "Prévention du burn-out",
      "Aménagement de l'espace de travail",
      "Relations interpersonnelles saines"
    ],
    category: "Bien-être et performance",
    detailedDescription: "Découvrez les clés pour améliorer votre qualité de vie au travail, prévenir l'épuisement professionnel et créer un environnement propice à votre épanouissement.",
    objectives: [
      "Identifier les facteurs de bien-être au travail",
      "Mettre en place un équilibre vie pro/perso",
      "Prévenir et gérer le stress professionnel",
      "Améliorer les relations avec les collègues",
      "Optimiser son environnement de travail"
    ],
    prerequisites: [
      "Être en activité professionnelle",
      "Volonté d'améliorer son bien-être",
      "Ouverture au changement"
    ],
    program: [
      {
        title: "Diagnostic de la QVT",
        content: [
          "Évaluation de votre situation actuelle",
          "Identification des sources de stress",
          "Analyse de l'environnement de travail",
          "Définition d'objectifs personnalisés"
        ]
      },
      {
        title: "Stratégies d'amélioration",
        content: [
          "Techniques de gestion du stress",
          "Organisation et priorisation",
          "Communication assertive",
          "Création de routines bien-être"
        ]
      }
    ],
    instructor: {
      name: "Dr. Sophie Wellness",
      bio: "Psychologue du travail et experte en qualité de vie professionnelle. 15 ans d'expérience en accompagnement d'entreprises et de particuliers.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 3,
    title: "Formation : Gestes et postures au travail",
    description: "Prévenez les troubles musculo-squelettiques et adoptez les bonnes postures pour préserver votre santé physique au travail.",
    duration: "9h",
    chapters: 5,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Prévention des TMS",
      "Ergonomie du poste de travail",
      "Exercices d'étirement et renforcement",
      "Postures correctes selon l'activité"
    ],
    category: "Bien-être et performance",
    detailedDescription: "Formation pratique pour apprendre les gestes et postures adaptés à votre environnement de travail, prévenir les douleurs et maintenir votre capital santé.",
    objectives: [
      "Comprendre les risques liés aux mauvaises postures",
      "Adopter les bonnes postures de travail",
      "Aménager ergonomiquement son poste",
      "Pratiquer des exercices préventifs",
      "Développer de bonnes habitudes posturales"
    ],
    prerequisites: [
      "Aucun prérequis médical",
      "Volonté de préserver sa santé",
      "Espace pour pratiquer les exercices"
    ],
    program: [
      {
        title: "Anatomie et risques",
        content: [
          "Comprendre le système musculo-squelettique",
          "Identifier les facteurs de risque",
          "Reconnaître les signaux d'alerte",
          "Conséquences des mauvaises postures"
        ]
      },
      {
        title: "Postures et ergonomie",
        content: [
          "Postures de travail sur écran",
          "Aménagement du poste de travail",
          "Techniques de manutention",
          "Alternance position assise/debout"
        ]
      },
      {
        title: "Exercices préventifs",
        content: [
          "Étirements au bureau",
          "Renforcement musculaire",
          "Exercices de relaxation",
          "Programme d'échauffement"
        ]
      }
    ],
    instructor: {
      name: "Julien Ergo",
      bio: "Kinésithérapeute et ergonome, spécialisé dans la prévention des TMS en entreprise. 10 ans d'expérience en formation et conseil.",
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 4,
    title: "Formation : Gestion des conflits",
    description: "Apprenez à identifier, prévenir et résoudre les conflits professionnels pour maintenir un climat de travail serein et productif.",
    duration: "10h30",
    chapters: 6,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Identification des sources de conflit",
      "Techniques de médiation",
      "Communication non-violente",
      "Négociation et résolution"
    ],
    category: "Bien-être et performance",
    detailedDescription: "Développez vos compétences en gestion des conflits pour transformer les tensions en opportunités de collaboration et maintenir des relations professionnelles harmonieuses.",
    objectives: [
      "Comprendre les mécanismes du conflit",
      "Identifier les signaux précurseurs",
      "Maîtriser les techniques de médiation",
      "Pratiquer la communication non-violente",
      "Transformer les conflits en solutions"
    ],
    prerequisites: [
      "Expérience en environnement professionnel",
      "Ouverture à la remise en question",
      "Volonté d'améliorer ses relations"
    ],
    program: [
      {
        title: "Comprendre les conflits",
        content: [
          "Types et sources de conflits",
          "Escalade et désescalade",
          "Rôles et positions dans le conflit",
          "Impact sur l'équipe et l'organisation"
        ]
      },
      {
        title: "Outils de résolution",
        content: [
          "Techniques d'écoute active",
          "Communication non-violente",
          "Médiation et négociation",
          "Recherche de solutions gagnant-gagnant"
        ]
      },
      {
        title: "Prévention et suivi",
        content: [
          "Création d'un climat de confiance",
          "Mise en place de processus préventifs",
          "Suivi post-conflit",
          "Développement de la résilience"
        ]
      }
    ],
    instructor: {
      name: "Claire Médiation",
      bio: "Médiatrice professionnelle et formatrice en gestion des conflits. 12 ans d'expérience en entreprise et certification en communication non-violente.",
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 5,
    title: "Formation : Gestion du stress",
    description: "Maîtrisez les techniques de gestion du stress pour améliorer votre performance, votre bien-être et votre qualité de vie professionnelle.",
    duration: "12h",
    chapters: 7,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Identification des sources de stress",
      "Techniques de relaxation",
      "Gestion émotionnelle",
      "Stratégies de coping"
    ],
    category: "Bien-être et performance",
    detailedDescription: "Formation complète pour comprendre, prévenir et gérer le stress professionnel grâce à des outils pratiques et des techniques éprouvées.",
    objectives: [
      "Comprendre les mécanismes du stress",
      "Identifier vos facteurs de stress personnels",
      "Maîtriser des techniques de relaxation",
      "Développer votre intelligence émotionnelle",
      "Créer votre plan de gestion du stress"
    ],
    prerequisites: [
      "Aucun prérequis spécifique",
      "Volonté de changement",
      "Engagement dans la pratique"
    ],
    program: [
      {
        title: "Comprendre le stress",
        content: [
          "Physiologie et psychologie du stress",
          "Stress positif vs stress négatif",
          "Identification de vos déclencheurs",
          "Auto-évaluation de votre niveau de stress"
        ]
      },
      {
        title: "Techniques de gestion",
        content: [
          "Respiration et relaxation",
          "Méditation et pleine conscience",
          "Gestion du temps et priorités",
          "Techniques cognitives"
        ]
      },
      {
        title: "Stratégies long terme",
        content: [
          "Hygiène de vie et stress",
          "Réseau de soutien",
          "Prévention et anticipation",
          "Plan d'action personnalisé"
        ]
      }
    ],
    instructor: {
      name: "Dr. Paul Sérénité",
      bio: "Psychologue clinicien spécialisé dans la gestion du stress et l'accompagnement professionnel. Formateur certifié en mindfulness et relaxation.",
      avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 6,
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
    category: "Bureaucratique",
    detailedDescription: "Formation complète Excel pour passer de débutant à expert. Apprenez à exploiter toute la puissance d'Excel pour l'analyse de données, l'automatisation et la création de tableaux de bord professionnels.",
    objectives: [
      "Maîtriser toutes les fonctions Excel essentielles",
      "Créer des tableaux croisés dynamiques complexes",
      "Automatiser vos tâches avec les macros VBA",
      "Analyser et visualiser des données efficacement",
      "Développer des tableaux de bord interactifs"
    ],
    prerequisites: [
      "Connaissances de base d'Excel recommandées",
      "Accès à Microsoft Excel",
      "Logique mathématique de base"
    ],
    program: [
      {
        title: "Excel Fondamentaux",
        content: [
          "Interface et navigation",
          "Saisie et mise en forme",
          "Formules de base",
          "Gestion des feuilles et classeurs"
        ]
      },
      {
        title: "Fonctions Avancées",
        content: [
          "Fonctions logiques et conditionnelles",
          "Fonctions de recherche (VLOOKUP, INDEX/MATCH)",
          "Fonctions de date et texte",
          "Fonctions statistiques et mathématiques"
        ]
      },
      {
        title: "Analyse de Données",
        content: [
          "Tableaux croisés dynamiques",
          "Graphiques avancés",
          "Filtres et tris complexes",
          "Outils d'analyse de données"
        ]
      },
      {
        title: "Automatisation VBA",
        content: [
          "Introduction à VBA",
          "Enregistrement de macros",
          "Programmation VBA de base",
          "Création d'interfaces utilisateur"
        ]
      }
    ],
    instructor: {
      name: "Marie Tableur",
      bio: "Formatrice Excel certifiée Microsoft avec 12 ans d'expérience. Spécialisée dans l'analyse de données et l'automatisation pour les entreprises.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 7,
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
    category: "Bureaucratique",
    detailedDescription: "Formation exhaustive pour devenir expert Word. Apprenez à créer des documents professionnels, automatiser vos tâches et collaborer efficacement avec les outils avancés de traitement de texte.",
    objectives: [
      "Maîtriser toutes les fonctionnalités de Word",
      "Créer des documents professionnels complexes",
      "Utiliser les styles et modèles efficacement",
      "Automatiser avec le publipostage",
      "Collaborer et réviser des documents en équipe"
    ],
    prerequisites: [
      "Connaissances de base de Word",
      "Accès à Microsoft Word",
      "Compétences rédactionnelles de base"
    ],
    program: [
      {
        title: "Word Fondamentaux",
        content: [
          "Interface et outils de base",
          "Saisie et correction de texte",
          "Mise en forme des caractères et paragraphes",
          "Insertion d'objets et d'images"
        ]
      },
      {
        title: "Mise en Page Avancée",
        content: [
          "Styles et hiérarchisation",
          "En-têtes et pieds de page",
          "Tables des matières automatiques",
          "Sections et colonnes"
        ]
      },
      {
        title: "Documents Complexes",
        content: [
          "Tableaux avancés",
          "Formulaires et champs",
          "Références croisées",
          "Index et bibliographie"
        ]
      },
      {
        title: "Automatisation et Collaboration",
        content: [
          "Modèles personnalisés",
          "Publipostage avancé",
          "Suivi des modifications",
          "Commentaires et révisions"
        ]
      }
    ],
    instructor: {
      name: "Sophie Rédaction",
      bio: "Experte Word et formatrice en bureautique depuis 10 ans. Spécialisée dans la création de documents complexes et la formation en entreprise.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 8,
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
    category: "Bureaucratique",
    detailedDescription: "Apprenez à créer des présentations PowerPoint qui marquent les esprits. De la conception graphique aux techniques de présentation, devenez un expert de la communication visuelle.",
    objectives: [
      "Créer des présentations visuellement attractives",
      "Maîtriser les animations et transitions",
      "Intégrer efficacement du contenu multimédia",
      "Structurer vos présentations pour l'impact",
      "Présenter avec confiance et professionnalisme"
    ],
    prerequisites: [
      "Connaissances de base de PowerPoint",
      "Accès à Microsoft PowerPoint",
      "Sens esthétique et créativité"
    ],
    program: [
      {
        title: "PowerPoint Essentiels",
        content: [
          "Interface et outils de base",
          "Création et gestion des diapositives",
          "Mise en forme du texte et des objets",
          "Thèmes et modèles"
        ]
      },
      {
        title: "Design et Graphisme",
        content: [
          "Principes de design visuel",
          "Couleurs et typographie",
          "Images et icônes",
          "Mise en page professionnelle"
        ]
      },
      {
        title: "Animations et Interactivité",
        content: [
          "Animations d'objets",
          "Transitions entre diapositives",
          "Déclencheurs et chronologie",
          "Présentations interactives"
        ]
      },
      {
        title: "Contenu Multimédia",
        content: [
          "Intégration vidéo et audio",
          "Graphiques et tableaux",
          "Liens et navigation",
          "Export et partage"
        ]
      },
      {
        title: "Techniques de Présentation",
        content: [
          "Préparation et répétition",
          "Mode présentateur",
          "Gestion du stress",
          "Interaction avec l'audience"
        ]
      }
    ],
    instructor: {
      name: "Thomas Présentation",
      bio: "Designer et formateur PowerPoint avec 8 ans d'expérience. Expert en communication visuelle et techniques de présentation pour les entreprises.",
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 9,
    title: "Formation : Initiation informatique sous Mac",
    description: "Découvrez l'univers Mac et maîtrisez macOS pour optimiser votre productivité sur les ordinateurs Apple.",
    duration: "4h",
    chapters: 4,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Navigation et interface macOS",
      "Applications natives essentielles",
      "Gestion des fichiers et dossiers",
      "Personnalisation et optimisation"
    ],
    category: "Bureaucratique",
    detailedDescription: "Formation d'initiation complète pour les nouveaux utilisateurs Mac. Apprenez à naviguer dans macOS, utiliser les applications natives et optimiser votre expérience utilisateur.",
    objectives: [
      "Maîtriser l'interface et la navigation macOS",
      "Utiliser efficacement les applications natives",
      "Gérer vos fichiers et dossiers",
      "Personnaliser votre environnement de travail",
      "Optimiser les performances de votre Mac"
    ],
    prerequisites: [
      "Aucune expérience Mac requise",
      "Accès à un ordinateur Mac",
      "Curiosité pour l'écosystème Apple"
    ],
    program: [
      {
        title: "Découverte de macOS",
        content: [
          "Interface et bureau",
          "Dock et barre de menus",
          "Finder et navigation",
          "Spotlight et recherche"
        ]
      },
      {
        title: "Applications Essentielles",
        content: [
          "Safari et navigation web",
          "Mail et communication",
          "Calendrier et contacts",
          "Notes et rappels"
        ]
      },
      {
        title: "Gestion des Fichiers",
        content: [
          "Organisation des dossiers",
          "iCloud et synchronisation",
          "Sauvegarde Time Machine",
          "Partage et permissions"
        ]
      },
      {
        title: "Personnalisation et Optimisation",
        content: [
          "Préférences système",
          "Raccourcis clavier",
          "Maintenance et nettoyage",
          "Sécurité et confidentialité"
        ]
      }
    ],
    instructor: {
      name: "Alex MacExpert",
      bio: "Formateur Apple certifié avec 6 ans d'expérience. Spécialisé dans l'accompagnement des nouveaux utilisateurs Mac et l'optimisation de l'écosystème Apple.",
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 10,
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
    category: "Bureaucratique",
    detailedDescription: "Transformez WhatsApp en outil professionnel puissant. Apprenez à configurer WhatsApp Business, automatiser vos communications et développer votre relation client via cette plateforme incontournable.",
    objectives: [
      "Configurer et optimiser WhatsApp Business",
      "Automatiser vos réponses et communications",
      "Créer un catalogue produits attractif",
      "Développer une stratégie de communication efficace",
      "Mesurer et analyser vos performances"
    ],
    prerequisites: [
      "Utilisation basique de WhatsApp",
      "Smartphone ou ordinateur",
      "Activité commerciale ou projet professionnel"
    ],
    program: [
      {
        title: "Configuration WhatsApp Business",
        content: [
          "Installation et paramétrage",
          "Profil professionnel optimisé",
          "Informations commerciales",
        "Horaires et disponibilité"
        ]
      },
      {
        title: "Automatisation et Outils",
        content: [
          "Messages de bienvenue",
          "Réponses automatiques",
          "Messages d'absence",
          "Raccourcis et modèles"
        ]
      },
      {
        title: "Catalogue et Vente",
        content: [
          "Création du catalogue produits",
          "Photos et descriptions optimisées",
          "Gestion des commandes",
          "Processus de vente"
        ]
      },
      {
        title: "Stratégie et Performance",
        content: [
          "Stratégies de communication",
          "Fidélisation client",
          "Statistiques et analyses",
          "Bonnes pratiques et conformité"
        ]
      }
    ],
    instructor: {
      name: "Sarah Digital",
      bio: "Consultante en marketing digital et experte WhatsApp Business. 5 ans d'expérience dans l'accompagnement des TPE/PME pour leur digitalisation.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 11,
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
    category: "Communication",
    detailedDescription: "Maîtrisez Adobe Premiere Pro, le logiciel de montage vidéo de référence utilisé par les professionnels du cinéma et de la télévision. Créez des vidéos percutantes pour tous vos projets.",
    objectives: [
      "Maîtriser le workflow de montage vidéo",
      "Réaliser des montages dynamiques et fluides",
      "Appliquer des effets visuels et sonores",
      "Étalonner et corriger vos images",
      "Exporter dans les formats appropriés"
    ],
    prerequisites: [
      "Connaissances de base en informatique",
      "Accès à Adobe Premiere Pro",
      "Matériel vidéo pour s'exercer"
    ],
    program: [
      {
        title: "Prise en main",
        content: [
          "Interface et workspace",
          "Import et organisation des médias",
          "Timeline et séquences",
          "Outils de montage de base"
        ]
      },
      {
        title: "Montage avancé",
        content: [
          "Techniques de montage",
          "Transitions et effets",
          "Titrage et graphiques",
          "Synchronisation audio/vidéo"
        ]
      },
      {
        title: "Post-production",
        content: [
          "Étalonnage colorimétrique",
          "Mixage audio",
          "Effets visuels",
          "Export et diffusion"
        ]
      }
    ],
    instructor: {
      name: "Maxime Vidéo",
      bio: "Monteur vidéo professionnel et formateur Adobe certifié. 8 ans d'expérience en production audiovisuelle et post-production.",
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 13,
    title: "Formation : After Effects",
    description: "Créez des animations et effets visuels spectaculaires avec Adobe After Effects pour donner vie à vos projets créatifs.",
    duration: "10h",
    chapters: 7,
    level: "Intermédiaire à Avancé",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Animation 2D et motion design",
      "Effets visuels cinématographiques",
      "Compositing et incrustation",
      "Animation de texte et logos"
    ],
    category: "Communication",
    detailedDescription: "Plongez dans l'univers du motion design et des effets visuels avec Adobe After Effects. Créez des animations professionnelles et des effets spectaculaires pour vos vidéos.",
    objectives: [
      "Maîtriser les principes de l'animation",
      "Créer des effets visuels professionnels",
      "Réaliser du compositing avancé",
      "Animer textes, logos et graphiques",
      "Intégrer After Effects dans un workflow vidéo"
    ],
    prerequisites: [
      "Connaissances de base en vidéo",
      "Accès à Adobe After Effects",
      "Notions de Premiere Pro recommandées"
    ],
    program: [
      {
        title: "Fondamentaux",
        content: [
          "Interface et concepts de base",
          "Compositions et calques",
          "Propriétés et keyframes",
          "Prévisualisation et rendu"
        ]
      },
      {
        title: "Animation",
        content: [
          "Principes de l'animation",
          "Courbes de vitesse",
          "Animation de texte",
          "Rigging et parentage"
        ]
      },
      {
        title: "Effets et compositing",
        content: [
          "Effets visuels",
          "Masques et rotoscoping",
          "Tracking et stabilisation",
          "Compositing multicouches"
        ]
      },
      {
        title: "Motion design avancé",
        content: [
          "Animation de logos",
          "Particules et simulations",
          "Expressions et scripts",
          "Workflow et optimisation"
        ]
      }
    ],
    instructor: {
      name: "Emma Motion",
      bio: "Motion designer et formatrice After Effects avec 12 ans d'expérience. Spécialisée dans les effets visuels et l'animation pour la publicité.",
      avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 14,
    title: "Formation : Canva - Pack Complet",
    description: "Maîtrisez Canva de A à Z pour créer facilement tous vos visuels professionnels sans compétences techniques en design.",
    duration: "26h",
    chapters: 12,
    level: "Débutant à Avancé",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Création de visuels pour tous supports",
      "Design de publications réseaux sociaux",
      "Présentations et documents professionnels",
      "Branding et identité visuelle"
    ],
    category: "Communication",
    detailedDescription: "Formation exhaustive pour devenir expert Canva. Apprenez à créer tous types de visuels professionnels facilement, des réseaux sociaux aux supports de communication d'entreprise.",
    objectives: [
      "Maîtriser toutes les fonctionnalités de Canva",
      "Créer une identité visuelle cohérente",
      "Produire du contenu pour les réseaux sociaux",
      "Concevoir des supports de communication",
      "Optimiser votre workflow créatif"
    ],
    prerequisites: [
      "Aucune compétence en design requise",
      "Compte Canva (gratuit ou Pro)",
      "Créativité et motivation"
    ],
    program: [
      {
        title: "Prise en main Canva",
        content: [
          "Interface et navigation",
          "Types de designs et formats",
          "Bibliothèque d'éléments",
          "Gestion des projets"
        ]
      },
      {
        title: "Design fondamental",
        content: [
          "Principes de design",
          "Couleurs et typographie",
          "Composition et mise en page",
          "Utilisation des templates"
        ]
      },
      {
        title: "Réseaux sociaux",
        content: [
          "Posts Instagram et Facebook",
          "Stories et formats verticaux",
          "LinkedIn et Twitter",
          "Planification de contenu"
        ]
      },
      {
        title: "Communication d'entreprise",
        content: [
          "Présentations professionnelles",
          "Flyers et brochures",
          "Cartes de visite",
          "Supports événementiels"
        ]
      },
      {
        title: "Branding et identité",
        content: [
          "Création de logos",
          "Charte graphique",
          "Kit de marque",
          "Cohérence visuelle"
        ]
      },
      {
        title: "Fonctionnalités avancées",
        content: [
          "Animations et vidéos",
          "Collaboration en équipe",
          "Brand Hub et assets",
          "Automatisation et intégrations"
        ]
      }
    ],
    instructor: {
      name: "Sophie Design",
      bio: "Designer graphique et formatrice Canva certifiée. 7 ans d'expérience en communication visuelle et marketing digital.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 15,
    title: "Formation : Marketing e-commerce et réseaux sociaux",
    description: "Développez votre activité e-commerce grâce aux stratégies marketing digital et à la puissance des réseaux sociaux.",
    duration: "18h",
    chapters: 9,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Stratégies e-commerce performantes",
      "Marketing des réseaux sociaux",
      "Publicité Facebook et Instagram Ads",
      "Conversion et fidélisation client"
    ],
    category: "Communication",
    detailedDescription: "Apprenez à développer et promouvoir votre e-commerce grâce aux techniques de marketing digital les plus efficaces. Maîtrisez les réseaux sociaux pour booster vos ventes.",
    objectives: [
      "Élaborer une stratégie e-commerce complète",
      "Maîtriser le marketing des réseaux sociaux",
      "Créer des campagnes publicitaires rentables",
      "Optimiser le taux de conversion",
      "Fidéliser et développer sa clientèle"
    ],
    prerequisites: [
      "Notions de base en marketing",
      "Projet e-commerce existant ou en cours",
      "Accès aux réseaux sociaux professionnels"
    ],
    program: [
      {
        title: "Stratégie e-commerce",
        content: [
          "Analyse de marché et concurrence",
          "Positionnement et proposition de valeur",
          "Parcours client et UX",
          "KPIs et métriques essentielles"
        ]
      },
      {
        title: "Marketing des réseaux sociaux",
        content: [
          "Stratégie de contenu",
          "Community management",
          "Influence et partenariats",
          "Engagement et interaction"
        ]
      },
      {
        title: "Publicité payante",
        content: [
          "Facebook et Instagram Ads",
          "Google Ads pour e-commerce",
          "Retargeting et remarketing",
          "Optimisation des campagnes"
        ]
      },
      {
        title: "Conversion et fidélisation",
        content: [
          "Optimisation du tunnel de vente",
          "Email marketing automatisé",
          "Programme de fidélité",
          "Service client et avis"
        ]
      }
    ],
    instructor: {
      name: "Thomas Commerce",
      bio: "Expert e-commerce et marketing digital avec 10 ans d'expérience. Consultant pour des marques internationales et formateur certifié Google Ads.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  }
];