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
    category: "Bureaucratique"
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
    category: "Bureaucratique"
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
    category: "Bureaucratique"
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
    category: "Bureaucratique"
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
    duration: "4h30",
    chapters: 4,
category: "Management et vente"
    level: "Intermédiaire",
          "Validation du niveau A1"
        ]
      }
    ],
    instructor: {
      name: "Pierre Signant",
      bio: "Formateur LSF certifié niveau A1-C2 avec 12 ans d'expérience. Expert en pédagogie LSF et évaluateur certifié pour les niveaux du CECR.",
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
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
    category: "Communication",
    detailedDescription: "Formation complète SketchUp pour apprendre la modélisation 3D de A à Z. Créez des modèles professionnels, des plans techniques et des rendus visuels impressionnants pour vos projets.",
    objectives: [
      "Maîtriser l'interface et les outils SketchUp",
      "Créer des modèles 3D précis et détaillés",
      "Produire des plans et coupes techniques",
      "Réaliser des rendus et visualisations",
      "Utiliser les extensions pour optimiser le workflow"
    ],
    prerequisites: [
  category: "Communication"
];