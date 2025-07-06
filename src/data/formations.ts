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
    category: "Bien-être et performance"
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
    category: "Bien-être et performance"
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
    category: "Bien-être et performance"
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
    category: "Bien-être et performance"
  },
  {
    id: 6,
    title: "Formation : Bureautique",
    description: "Maîtrisez les outils bureautiques essentiels pour optimiser votre productivité et votre efficacité professionnelle au quotidien.",
    duration: "21h",
    chapters: 10,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Maîtrise complète des outils Office",
      "Optimisation de la productivité",
      "Automatisation des tâches répétitives",
      "Collaboration et partage de documents"
    ],
    category: "Bureaucratique"
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
    category: "Bureaucratique"
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
    category: "Communication"
  },
  {
    id: 14,
    title: "Formation : Canva",
    description: "Créez des visuels professionnels facilement avec Canva. Maîtrisez tous les outils pour concevoir des designs impactants sans compétences techniques.",
    duration: "26h",
    chapters: 12,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Design graphique accessible",
      "Templates et personnalisation",
      "Création de contenus multi-formats",
      "Collaboration et partage d'équipe"
    ],
    category: "Communication"
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
  },
  {
    id: 18,
    title: "Formation : Management (Manitude)",
    description: "Développez vos compétences managériales avec la méthode Manitude pour diriger efficacement vos équipes et créer un environnement de travail performant.",
    duration: "19h",
    chapters: 8,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Leadership et motivation d'équipe",
      "Communication managériale efficace",
      "Gestion des performances",
      "Développement des collaborateurs"
    ],
    category: "Management et vente"
  },
  {
    id: 19,
    title: "Formation : Techniques de vente - Omnicanal RS5068",
    description: "Maîtrisez les techniques de vente modernes et l'approche omnicanale pour maximiser vos performances commerciales sur tous les canaux.",
    duration: "9h",
    chapters: 6,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Techniques de vente avancées",
      "Stratégie omnicanale",
      "Négociation et closing",
      "Relation client digitale"
    ],
    category: "Management et vente"
  },
  {
    id: 20,
    title: "Formation : Gestion de projet",
    description: "Apprenez à planifier, organiser et mener à bien vos projets avec les méthodologies et outils de gestion de projet les plus efficaces.",
    duration: "15h",
    chapters: 7,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Méthodologies de gestion de projet",
      "Planification et suivi",
      "Gestion des équipes projet",
      "Outils collaboratifs modernes"
    ],
    category: "Management et vente"
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
    id: 16,
    title: "Formation : Création d'entreprise",
    description: "Apprenez toutes les étapes pour créer votre entreprise avec succès, de l'idée à la mise en œuvre, en passant par les démarches administratives.",
    duration: "6h",
    chapters: 5,
    level: "Débutant",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Validation d'idée et étude de marché",
      "Choix du statut juridique optimal",
      "Business plan et prévisionnel financier",
      "Démarches administratives complètes"
    ],
    category: "La boîte à outils de l'entrepreneur",
    detailedDescription: "Formation complète pour transformer votre idée en entreprise viable. Apprenez méthodiquement toutes les étapes de la création d'entreprise avec les conseils d'experts.",
    objectives: [
      "Valider votre idée d'entreprise",
      "Choisir le statut juridique adapté",
      "Élaborer un business plan solide",
      "Réaliser toutes les démarches administratives",
      "Lancer votre activité en toute sérénité"
    ],
    prerequisites: [
      "Avoir une idée d'entreprise ou un projet",
      "Motivation entrepreneuriale",
      "Aucune connaissance préalable requise"
    ],
    program: [
      {
        title: "Validation de l'idée",
        content: [
          "Analyse de l'idée et du marché",
          "Étude de la concurrence",
          "Validation auprès des clients potentiels",
          "Définition de la proposition de valeur"
        ]
      },
      {
        title: "Aspects juridiques",
        content: [
          "Choix du statut juridique",
          "Protection de l'idée et de la marque",
          "Rédaction des statuts",
          "Assurances et responsabilités"
        ]
      },
      {
        title: "Business plan",
        content: [
          "Structure du business plan",
          "Prévisionnel financier",
          "Plan de financement",
          "Stratégie commerciale"
        ]
      },
      {
        title: "Démarches administratives",
        content: [
          "Immatriculation de l'entreprise",
          "Ouverture de compte bancaire",
          "Déclarations fiscales et sociales",
          "Mise en conformité"
        ]
      },
      {
        title: "Lancement et développement",
        content: [
          "Stratégie de lancement",
          "Premiers clients et ventes",
          "Gestion administrative courante",
          "Développement et croissance"
        ]
      }
    ],
    instructor: {
      name: "Pierre Entrepreneur",
      bio: "Consultant en création d'entreprise et ancien dirigeant de startup. 15 ans d'expérience dans l'accompagnement d'entrepreneurs.",
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 17,
    title: "Formation : Document unique obligatoire en entreprise",
    description: "Maîtrisez la création et la gestion du Document Unique d'Évaluation des Risques Professionnels (DUERP) pour assurer la sécurité en entreprise.",
    duration: "24h30",
    chapters: 4,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Obligations légales et réglementaires",
      "Méthodologie d'évaluation des risques",
      "Rédaction et mise à jour du DUERP",
      "Plan d'actions préventives"
    ],
    category: "La boîte à outils de l'entrepreneur"
  },
  {
    id: 23,
    title: "Formation : SketchUp",
    description: "Maîtrisez SketchUp pour créer des modèles 3D professionnels, des plans architecturaux et des visualisations pour vos projets créatifs et techniques.",
    duration: "19h",
    chapters: 9,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Modélisation 3D professionnelle",
      "Plans et coupes techniques",
      "Rendu et visualisation",
      "Extensions et plugins utiles"
    ],
    category: "Communication"
  }
];