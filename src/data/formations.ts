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
  }
];