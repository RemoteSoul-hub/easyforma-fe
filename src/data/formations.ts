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
    title: "Développement Web Full Stack",
    description: "Maîtrisez les technologies modernes du développement web, de React à Node.js en passant par les bases de données.",
    duration: "6 mois",
    chapters: 12,
    level: "Débutant à Intermédiaire",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "HTML, CSS, JavaScript moderne",
      "React et écosystème frontend",
      "Node.js et APIs REST",
      "Bases de données SQL/NoSQL"
    ],
    category: "Développement",
    detailedDescription: "Cette formation complète vous permettra de maîtriser l'ensemble des technologies nécessaires pour devenir développeur web full stack. Vous apprendrez à créer des applications web modernes, performantes et sécurisées, de la conception à la mise en production.",
    objectives: [
      "Maîtriser les langages HTML, CSS et JavaScript",
      "Développer des interfaces utilisateur avec React",
      "Créer des APIs REST avec Node.js",
      "Gérer des bases de données relationnelles et NoSQL",
      "Déployer des applications web en production"
    ],
    prerequisites: [
      "Connaissances de base en informatique",
      "Motivation pour apprendre la programmation",
      "Ordinateur avec connexion internet"
    ],
    program: [
      {
        title: "Fondamentaux du Web",
        content: [
          "Introduction au développement web",
          "HTML5 et sémantique",
          "CSS3 et responsive design",
          "JavaScript ES6+"
        ]
      },
      {
        title: "Frontend avec React",
        content: [
          "Introduction à React",
          "Composants et JSX",
          "State et props",
          "Hooks et gestion d'état"
        ]
      },
      {
        title: "Backend avec Node.js",
        content: [
          "Introduction à Node.js",
          "Express.js et routing",
          "APIs REST",
          "Authentification et sécurité"
        ]
      },
      {
        title: "Bases de données",
        content: [
          "SQL et PostgreSQL",
          "MongoDB et NoSQL",
          "ORMs et ODMs",
          "Optimisation des requêtes"
        ]
      }
    ],
    instructor: {
      name: "Marie Dubois",
      bio: "Développeuse full stack avec 8 ans d'expérience, Marie a travaillé pour des startups et grandes entreprises. Elle est passionnée par l'enseignement et la transmission de connaissances.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 2,
    title: "Marketing Digital & Réseaux Sociaux",
    description: "Développez votre expertise en marketing digital et apprenez à créer des campagnes performantes sur tous les canaux.",
    duration: "4 mois",
    chapters: 8,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Stratégie marketing digital",
      "Gestion des réseaux sociaux",
      "Publicité en ligne (Google Ads, Facebook)",
      "Analytics et mesure de performance"
    ],
    category: "Marketing",
    detailedDescription: "Devenez expert en marketing digital grâce à cette formation complète qui couvre tous les aspects du marketing en ligne. Apprenez à créer des stratégies efficaces, gérer des campagnes publicitaires et analyser les performances.",
    objectives: [
      "Élaborer une stratégie marketing digital complète",
      "Maîtriser les principaux réseaux sociaux",
      "Créer et optimiser des campagnes publicitaires",
      "Analyser les données et mesurer le ROI",
      "Développer une présence en ligne forte"
    ],
    prerequisites: [
      "Connaissances de base d'internet",
      "Intérêt pour le marketing et la communication",
      "Accès aux réseaux sociaux"
    ],
    program: [
      {
        title: "Stratégie Marketing Digital",
        content: [
          "Fondamentaux du marketing digital",
          "Définition des personas",
          "Stratégie de contenu",
          "Planification des campagnes"
        ]
      },
      {
        title: "Réseaux Sociaux",
        content: [
          "Facebook et Instagram Marketing",
          "LinkedIn pour les professionnels",
          "Twitter et engagement",
          "TikTok et nouvelles plateformes"
        ]
      },
      {
        title: "Publicité en Ligne",
        content: [
          "Google Ads et SEA",
          "Facebook Ads Manager",
          "Optimisation des campagnes",
          "Budget et enchères"
        ]
      },
      {
        title: "Analytics et Performance",
        content: [
          "Google Analytics",
          "Mesure du ROI",
          "Reporting et KPIs",
          "Optimisation continue"
        ]
      }
    ],
    instructor: {
      name: "Thomas Martin",
      bio: "Expert en marketing digital avec plus de 10 ans d'expérience, Thomas a accompagné de nombreuses entreprises dans leur transformation digitale.",
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 3,
    title: "Design UX/UI",
    description: "Créez des expériences utilisateur exceptionnelles et maîtrisez les outils de design moderne.",
    duration: "5 mois",
    chapters: 10,
    level: "Débutant",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Principes de design UX/UI",
      "Figma et outils de prototypage",
      "Recherche utilisateur",
      "Design systems et composants"
    ],
    category: "Design",
    detailedDescription: "Apprenez à concevoir des interfaces utilisateur intuitives et esthétiques. Cette formation vous donnera toutes les clés pour devenir un designer UX/UI compétent et créatif.",
    objectives: [
      "Maîtriser les principes du design UX/UI",
      "Utiliser Figma et les outils de design",
      "Conduire des recherches utilisateur",
      "Créer des prototypes interactifs",
      "Développer des design systems"
    ],
    prerequisites: [
      "Sens artistique et créativité",
      "Intérêt pour l'expérience utilisateur",
      "Ordinateur capable de faire tourner Figma"
    ],
    program: [
      {
        title: "Fondamentaux UX",
        content: [
          "Principes de l'expérience utilisateur",
          "Psychologie cognitive",
          "Méthodes de recherche utilisateur",
          "Personas et user journey"
        ]
      },
      {
        title: "Design d'Interface",
        content: [
          "Principes du design visuel",
          "Typographie et couleurs",
          "Composition et hiérarchie",
          "Responsive design"
        ]
      },
      {
        title: "Outils et Prototypage",
        content: [
          "Maîtrise de Figma",
          "Wireframing et maquettage",
          "Prototypage interactif",
          "Tests utilisateur"
        ]
      },
      {
        title: "Design Systems",
        content: [
          "Création de design systems",
          "Composants réutilisables",
          "Documentation design",
          "Collaboration avec les développeurs"
        ]
      }
    ],
    instructor: {
      name: "Sophie Leroy",
      bio: "Designer UX/UI senior avec 7 ans d'expérience dans des agences digitales et startups. Sophie est reconnue pour son approche centrée utilisateur.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 4,
    title: "Data Science & Intelligence Artificielle",
    description: "Explorez le monde de la data science et de l'IA avec Python, machine learning et analyse de données.",
    duration: "8 mois",
    chapters: 16,
    level: "Intermédiaire",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Python pour la data science",
      "Machine Learning et Deep Learning",
      "Analyse et visualisation de données",
      "Projets pratiques avec datasets réels"
    ],
    category: "Data Science",
    detailedDescription: "Plongez dans l'univers passionnant de la data science et de l'intelligence artificielle. Apprenez à extraire des insights précieux des données et à créer des modèles prédictifs.",
    objectives: [
      "Maîtriser Python pour la data science",
      "Comprendre les algorithmes de machine learning",
      "Analyser et visualiser des données complexes",
      "Créer des modèles prédictifs",
      "Déployer des solutions IA en production"
    ],
    prerequisites: [
      "Connaissances de base en mathématiques",
      "Notions de programmation (recommandé)",
      "Curiosité pour l'analyse de données"
    ],
    program: [
      {
        title: "Python et Outils",
        content: [
          "Python pour la data science",
          "NumPy et Pandas",
          "Jupyter Notebooks",
          "Environnements de développement"
        ]
      },
      {
        title: "Analyse de Données",
        content: [
          "Exploration de données",
          "Nettoyage et préparation",
          "Statistiques descriptives",
          "Visualisation avec Matplotlib/Seaborn"
        ]
      },
      {
        title: "Machine Learning",
        content: [
          "Algorithmes supervisés",
          "Algorithmes non supervisés",
          "Évaluation de modèles",
          "Scikit-learn et frameworks"
        ]
      },
      {
        title: "Deep Learning et IA",
        content: [
          "Réseaux de neurones",
          "TensorFlow et Keras",
          "Vision par ordinateur",
          "Traitement du langage naturel"
        ]
      }
    ],
    instructor: {
      name: "Dr. Pierre Rousseau",
      bio: "Data scientist avec un doctorat en informatique, Pierre a 12 ans d'expérience dans la recherche et l'industrie. Il a publié de nombreux articles scientifiques.",
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 5,
    title: "Gestion de Projet Agile",
    description: "Maîtrisez les méthodologies agiles et devenez un chef de projet performant dans l'environnement digital.",
    duration: "3 mois",
    chapters: 6,
    level: "Tous niveaux",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Méthodologies Scrum et Kanban",
      "Outils de gestion de projet",
      "Leadership et communication",
      "Certification préparation"
    ],
    category: "Management",
    detailedDescription: "Devenez un chef de projet agile efficace grâce à cette formation pratique qui couvre toutes les méthodologies et outils modernes de gestion de projet.",
    objectives: [
      "Maîtriser les méthodologies agiles",
      "Utiliser les outils de gestion de projet",
      "Développer ses compétences en leadership",
      "Gérer des équipes multidisciplinaires",
      "Préparer les certifications Scrum"
    ],
    prerequisites: [
      "Expérience professionnelle recommandée",
      "Intérêt pour la gestion d'équipe",
      "Capacités de communication"
    ],
    program: [
      {
        title: "Fondamentaux Agile",
        content: [
          "Manifeste agile",
          "Principes et valeurs",
          "Comparaison avec les méthodes traditionnelles",
          "Contextes d'application"
        ]
      },
      {
        title: "Scrum Framework",
        content: [
          "Rôles Scrum",
          "Événements Scrum",
          "Artefacts Scrum",
          "Sprint et planification"
        ]
      },
      {
        title: "Outils et Pratiques",
        content: [
          "Jira et outils agiles",
          "Kanban et visualisation",
          "Estimation et vélocité",
          "Métriques et amélioration continue"
        ]
      },
      {
        title: "Leadership Agile",
        content: [
          "Servant leadership",
          "Facilitation d'équipe",
          "Gestion des conflits",
          "Coaching agile"
        ]
      }
    ],
    instructor: {
      name: "Laurent Moreau",
      bio: "Scrum Master certifié et coach agile avec 15 ans d'expérience. Laurent a accompagné de nombreuses entreprises dans leur transformation agile.",
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  },
  {
    id: 6,
    title: "Cybersécurité & Sécurité Informatique",
    description: "Protégez les systèmes d'information et maîtrisez les enjeux de sécurité dans le monde numérique.",
    duration: "7 mois",
    chapters: 14,
    level: "Intermédiaire à Avancé",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: [
      "Analyse des vulnérabilités",
      "Sécurité des réseaux",
      "Cryptographie et chiffrement",
      "Tests de pénétration éthique"
    ],
    category: "Sécurité",
    detailedDescription: "Devenez expert en cybersécurité grâce à cette formation complète qui couvre tous les aspects de la sécurité informatique moderne, des fondamentaux aux techniques avancées.",
    objectives: [
      "Comprendre les menaces cybersécurité",
      "Sécuriser les infrastructures réseau",
      "Maîtriser la cryptographie",
      "Effectuer des tests de pénétration",
      "Mettre en place des politiques de sécurité"
    ],
    prerequisites: [
      "Connaissances en informatique et réseaux",
      "Bases de la programmation",
      "Compréhension des systèmes d'exploitation"
    ],
    program: [
      {
        title: "Fondamentaux Sécurité",
        content: [
          "Principes de la cybersécurité",
          "Types de menaces et attaques",
          "Cadres de sécurité (ISO 27001, NIST)",
          "Gestion des risques"
        ]
      },
      {
        title: "Sécurité Réseau",
        content: [
          "Sécurisation des infrastructures",
          "Firewalls et IDS/IPS",
          "VPN et chiffrement réseau",
          "Monitoring et détection"
        ]
      },
      {
        title: "Cryptographie",
        content: [
          "Algorithmes de chiffrement",
          "Signatures numériques",
          "PKI et certificats",
          "Implémentation sécurisée"
        ]
      },
      {
        title: "Tests de Pénétration",
        content: [
          "Méthodologies de pentest",
          "Outils d'audit sécurité",
          "Exploitation de vulnérabilités",
          "Reporting et recommandations"
        ]
      }
    ],
    instructor: {
      name: "Alexandre Durand",
      bio: "Expert en cybersécurité avec 10 ans d'expérience, Alexandre est consultant en sécurité informatique et formateur certifié CISSP.",
      avatar: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  }
];