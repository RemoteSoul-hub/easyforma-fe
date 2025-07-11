import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Search, Infinity, CheckCircle, ArrowRight, Users, Target, Zap, Rocket, ChevronDown, ChevronUp, Play, Star, Calendar, Mail, TrendingUp, Briefcase, Crown, DollarSign, Handshake, Heart, Globe } from 'lucide-react';

const FormationsList = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('populaires');
  const [activeStep, setActiveStep] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Formations populaires (les 6 premières)
  const popularFormations = formations.slice(0, 6);
  
  const categories = ['populaires', 'all', ...Array.from(new Set(formations.map(f => f.category)))];
  
  const filteredFormations = selectedCategory === 'populaires'
    ? popularFormations
    : selectedCategory === 'all' 
      ? formations 
      : formations.filter(f => f.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    const labels = {
      'populaires': 'Les populaires',
      'all': 'Toutes les formations',
      'Bien-être et performance': 'Bien-être et performance',
      'Bureaucratique': 'Bureaucratique',
      'Communication': 'Communication',
      'La boîte à outils de l\'entrepreneur': 'Boîte à outils entrepreneur',
      'Management et vente': 'Management et vente',
    };
    return labels[category as keyof typeof labels] || category;
  };

  // FAQ Data
  const faqData = [
    {
      question: "Est-ce que je dois avoir un diplôme ou des compétences avant de me lancer ?",
      answer: "Non, aucun prérequis ! Toutes nos formations sont conçues pour les débutants. Tu pars de zéro, et tu progresses étape par étape jusqu'à pouvoir vendre tes compétences."
    },
    {
      question: " Est-ce que les formations sont vraiment accessibles à vie?",
      answer: "Oui, à vie. Une fois que tu as accès à une formation, tu peux la suivre à ton rythme, autant de fois que tu veux, sans limite de temps."
    },
    {
      question: "Est-ce que je peux vivre de mes compétences après une formation EASY FORMA ?",
      answer: "C'est justement l'objectif. Chaque formation inclut une partie 'Business 2.0' qui t'apprend à monétiser ce que tu viens d'apprendre et à trouver tes premiers clients en ligne."
    },
    {
      question: "Combien de temps faut-il pour suivre une formation ?",
      answer: "Entre 7 et 21 jours selon la thématique. Nos formations sont condensées, pratiques et orientées résultats. Tu avances à ton rythme, même en parallèle d'un job ou de tes études."
    },
    {
      question: "Et si j'ai une question ou un blocage ?",
      answer: "Tu n'es jamais seul. Tu peux poser toutes tes questions dans la communauté privée ou contacter notre support 24h / 24 et 7 j / 7."
    }
  ];

  // Roadmap steps
  const roadmapSteps = [
    {
      id: 1,
      title: "Etape 1",
      description: "Tu reçois un accès illimité à l'ensemble des formations du catalogue EASY FORMA",
      icon: <Target className="w-6 h-6" />,
      status: "completed",
      details: [
        "Création de compte en 2 minutes",
        "Accès immédiat au catalogue complet",
        "Configuration de votre profil",
        "Premier tour de la plateforme"
      ]
    },
    {
      id: 2,
      title: "Etape 2",
      description: "Tu débloques également la formation BUSINESS 2.0, pour apprendre à vendre tes compétences et lancer ton activité.",
      icon: <Users className="w-6 h-6" />,
      status: "in-progress",
      details: [
        "Navigation dans le catalogue",
        "Filtrage par catégorie et niveau",
        "Lecture des descriptions détaillées",
        "Sélection de votre première formation"
      ]
    },
    {
      id: 3,
      title: "Etape 3",
      description: "Tu rejoins une communauté active de plus de 5 000 freelances et indépendants.",
      icon: <Zap className="w-6 h-6" />,
      status: "upcoming",
      details: [
        "Visionnage des vidéos de formation",
        "Exercices pratiques et quiz",
        "Suivi de votre progression",
        "Support pédagogique en continu"
      ]
    },
    {
      id: 4,
      title: "Etape 4",
      description: "Tu choisis la compétence que tu veux apprendre et tu te formes à ton rythme.",
      icon: <CheckCircle className="w-6 h-6" />,
      status: "upcoming",
      details: [
        "Quiz d'évaluation finale",
        "Projets pratiques à réaliser",
        "Correction personnalisée",
        "Obtention du certificat"
      ]
    },
    {
      id: 5,
      title: "Etape 5",
      description: "Et dans 15 jours, on fait un point ensemble au téléphone pour t'aider à avancer et répondre à tes questions.",
      icon: <Rocket className="w-6 h-6" />,
      status: "upcoming",
      details: [
        "Application concrète des compétences",
        "Accompagnement post-formation",
        "Communauté d'entraide",
        "Évolution continue de vos compétences"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-orange-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <section id="formations" className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <Infinity className="h-4 w-4" />
            <span>Accès illimité pour 29€/mois</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Toutes nos formations
            <span className="text-orange-500 block">incluses dans l'abonnement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un seul prix, un accès total. Explorez l'intégralité de notre catalogue 
            de formations professionnelles sans restriction.
          </p>
        </div>

        {/* Pricing Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 mb-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold mb-2">29€</div>
              <div className="text-orange-100">par mois</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="h-6 w-6" />
                <span className="text-xl font-semibold">Accès illimité</span>
              </div>
              <div className="text-orange-100">à toutes les formations</div>
              <div className="text-orange-200 text-sm mt-2">+ Des nouvelles formations chaque mois</div>
            </div>
            <div className="text-center md:text-right">
              <button 
                onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg"
              >
                Commencer maintenant
              </button>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 mr-4">
            <div className="p-1 bg-orange-100 rounded-full">
              <Filter className="h-4 w-4 text-orange-500" />
            </div>
            <span className="text-sm font-medium">Filtrer par catégorie :</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-orange-200 hover:border-orange-300'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <p className="text-gray-700 font-medium">
              {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} disponible{filteredFormations.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFormations.map((formation) => (
            <FormationCard key={formation.id} formation={formation} />
          ))}
        </div>

        {/* Qui suis-je Section */}
        <div className="my-20">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 bg-gray-50">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Users className="h-4 w-4" />
                    <span>Qui suis-je ?</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Derrière EASY FORMA, un parcours simple.
                    <span className="text-orange-500 block">Une mission claire.</span>
                  </h3>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Moi, c'est Cyprien Sesboüé, j'ai 24 ans</strong>, et en réalité :
                      je ne viens pas du monde académique… je viens du terrain.
                    </p>
                    
                    <p>
                      J'ai vu trop de gens galérer avec des formations trop théoriques, sans jamais atteindre cette fameuse liberté financière.
                    </p>
                    
                    <p>
                      <strong className="text-orange-600">Alors j'ai créé EASY FORMA</strong> : une plateforme 100 % orientée action, pour apprendre une compétence et en vivre.
                    </p>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-800 font-semibold text-center">
                        Chez EASY FORMA :<br />
                        <span className="text-orange-600">forme-toi → deviens expert → gagne de l'argent.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:p-16 flex items-center justify-center bg-white">
                <img
                  src="/cyprien-casual.jpg"
                  alt="Cyprien Sesboüé, fondateur d'EASY FORMA"
                  className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Histoire personnelle */}
        <div className="my-20">
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700 bg-white rounded-2xl p-8 shadow-lg">
            <p>
              Comme beaucoup d'enfants issus de familles modestes, j'avais des rêves.
              Mais autour de moi, personne ne m'encourageait à les poursuivre.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <p className="text-xl font-semibold mb-4 text-red-800">À 15 ans, j'ai eu le déclic :</p>
              <p className="mb-4">
                🏎️ Je suis tombé nez à nez avec une Ferrari rouge.
              </p>
              <p className="mb-4">
                Quand j'ai vu le conducteur, je me suis dit :
              </p>
              <p className="text-2xl font-bold text-center text-red-800">
                "Pourquoi lui ? Et pourquoi pas moi ?"
              </p>
            </div>
            
            <p>
              Deux ans plus tard, j'ai quitté la maison familiale avec une seule idée en tête :
              <strong className="text-orange-600"> transformer mes rêves en réalité.</strong>
            </p>
            
            <p>
              Après plusieurs échecs et tentatives, c'est à 21 ans que je réalise mon premier million d'euros, grâce au marketing digital.
            </p>
            
            <p>
              Deux ans plus tard, je décide de transmettre ce que j'ai appris et d'accompagner d'autres personnes à lancer leur propre business en ligne.
              Des milliers de personnes ont pu changer leur vie.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              Mais il manquait encore quelque chose.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Le vrai problème ? L'injustice devant l'accès à la connaissance.</h4>
              <p className="text-gray-700 mb-4">
                Tout le monde n'a pas 2 000€ pour se former.
              </p>
              <p className="text-gray-700">
                Et comment savoir, dès le départ, si la compétence qu'on choisit est la bonne ?
                Celle qui va vraiment te motiver à aller jusqu'au bout ?
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <h4 className="text-2xl font-bold text-orange-800 mb-4">C'est pour ça que j'ai créé EASY FORMA :</h4>
              <p className="text-orange-700 mb-4">
                Une plateforme qui fait sauter les barrières à l'apprentissage.
              </p>
              <p className="text-orange-700 mb-4">
                Pour 29€/mois, tu accèdes à plus de 100 formations professionnalisantes.
              </p>
              <p className="text-orange-700">
                Tu choisis celle qui te correspond vraiment… et tu lances ton activité en ligne.
              </p>
            </div>
            
            <div className="text-center space-y-6 bg-orange-500 rounded-2xl p-8 text-white">
              <h4 className="text-3xl font-bold">EASY FORMA, c'est la clé.</h4>
              <p className="text-xl">
                Celle qui te permet d'ouvrir les bonnes portes,
                et de rencontrer enfin ton "toi successfull".
              </p>
              <p className="text-xl">
                Plus personne ne pourra dire qu'entreprendre est impossible.
              </p>
              <p className="text-xl font-semibold">
                Avec EASY FORMA, l'impossible devient possible.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-xl font-semibold text-gray-900">Alors…</p>
              <p className="text-lg">
                Troque ton abonnement Netflix contre une plateforme qui peut changer ta vie.
              </p>
              <p className="text-lg font-semibold text-orange-600">
                Rejoins-nous et construis ton avenir grâce à Internet.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Notre mission */}
        <div className="text-center space-y-6 my-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <Infinity className="h-4 w-4" />
            <span>Notre mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-orange-500 block">Notre mission ?</span>
          </h2>
          <video width="50%" height="240" className="mx-auto" controls></video>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rendre la formation professionnelle accessible à tous, partout et à tout moment. 
            Nous croyons que chacun mérite d'avoir accès aux meilleures formations pour développer ses compétences.
          </p>
        </div>

        {/* 2. Que se passe-t-il après s'être inscrit */}
        <div className="my-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Votre parcours d'apprentissage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Que se passe-t-il une 
              <span className="text-orange-500 block">fois inscrit?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez votre parcours d'apprentissage étape par étape, de l'inscription à la mise en pratique de vos nouvelles compétences.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {roadmapSteps.map((step, index) => (
                <div key={step.id} className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      {React.cloneElement(step.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Business 2.0 Section */}
        <div className="my-20">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative px-8 py-16 md:px-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <Briefcase className="h-4 w-4" />
                  <span>Formation Exclusive</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  BUSINESS <span className="text-yellow-400">2.0</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Apprends à monétiser tes compétences et à lancer ton activité de freelance
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <TrendingUp className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Stratégies de pricing</h3>
                    <p className="text-blue-100 text-sm">Fixe tes tarifs comme un pro et valorise ton expertise</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <Users className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Acquisition clients</h3>
                    <p className="text-blue-100 text-sm">Trouve et fidélise tes premiers clients rapidement</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <Rocket className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Scaling business</h3>
                    <p className="text-blue-100 text-sm">Développe et automatise ton activité pour plus de liberté</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/business-20"
                    className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <Play className="h-5 w-5" />
                    <span>Découvrir Business 2.0</span>
                  </Link>
                  <div className="flex items-center space-x-2 text-blue-200">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm">Inclus dans l'abonnement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. FAQ Section */}
        <div className="text-center space-y-6 mb-16 mt-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="h-4 w-4" />
            <span>Questions fréquentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-orange-500 block">Les questions qu'on nous pose souvent.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Retrouvez les réponses aux questions les plus fréquemment posées sur Easy Forma
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {activeFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-orange-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === index && (
                <div className="px-8 pb-6 border-t border-orange-100 bg-orange-50">
                  <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5. Section Partenaire EASY FORMA + */}
        <div className="my-20">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative px-8 py-16 md:px-16">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                <div className="inline-flex items-center space-x-2 bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <Crown className="h-4 w-4" />
                  <span>Programme Partenaire Exclusif</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Deviens mon partenaire en rejoignant <span className="text-yellow-400">EASY FORMA +</span>
                </h2>
                
                <div className="space-y-6 text-lg leading-relaxed mb-8">
                  <p>
                    Tu percevras un <strong className="text-yellow-400">droit de revente</strong> te permettant d'acheter la totalité du catalogue EASY FORMA en une seule fois, au prix unique de <strong className="text-yellow-400">1 500€</strong>. Cet achat te permettra de posséder l'écosystème EASY FORMA et de pouvoir le revendre à la personne de ton choix.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="mb-4">
                      En 2025, les académies de closing proposent des formations individuelles à des prix de <strong className="text-red-400">2 000€</strong>.
                    </p>
                    <p className="text-yellow-300 font-semibold">
                      Imagine pouvoir proposer à ton client :
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm">Un accès immédiat et à vie à toutes les formations d'EASY FORMA</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm">Plus de 1 000 heures de contenu sur des thématiques ultra variées</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm">Une communauté de + de 5 000 entrepreneurs</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm">Un accompagnement business</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 rounded-2xl p-6 border border-green-400/30">
                    <p className="text-green-300 text-xl font-bold mb-2">
                      Pour seulement 1 500€.
                    </p>
                    <p className="text-green-200">
                      Tu obtiens une commission de <strong>50%</strong> sur chacune de tes ventes, soit <strong>750€</strong> virés en moins de 24h sur ton compte bancaire.
                    </p>
                  </div>
                  
                  <p className="text-xl font-semibold text-yellow-300">
                    EASY FORMA révolutionne le marché du closing avec une véritable offre irrésistible et un paiement de tes commissions en moins de 24h.
                  </p>
                  
                  <p className="text-2xl font-bold text-yellow-400">
                    Obtenir ta liberté financière en ligne n'a jamais été aussi simple.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/easy-forma-plus"
                    className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <Crown className="h-5 w-5" />
                    <span>Découvrir EASY FORMA +</span>
                  </Link>
                  <div className="flex items-center space-x-2 text-purple-200">
                    <DollarSign className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm">750€ de commission par vente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. CTA Section avec les deux profils */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-5xl mx-auto border border-orange-100">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900">
                Obtenir ta liberté financière n'a jamais été aussi simple
              </h3>
              
              <div className="text-center space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">
                  🚀 Deux profils, deux chemins. À toi de choisir.
                </h4>
              </div>

              {/* Deux options côte à côte */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {/* EASY FORMA */}
                <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-orange-600">
                      ✅ EASY FORMA est fait pour toi si...
                    </h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux apprendre une compétence concrète et l'utiliser pour gagner ta vie</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux te lancer en freelance ou créer ton activité en ligne</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu cherches une formation accessible, actionnable et sans perte de temps</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux avancer à ton rythme, sans pression</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux rejoindre une communauté dynamique et être accompagné</span>
                      </li>
                    </ul>
                    
                    <div className="bg-orange-100 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-orange-600 mb-2">💸 29€/mois – sans engagement</div>
                      <div className="text-orange-700 mb-2">📚 +100 formations | +1000h de contenu | accompagnement business</div>
                      <div className="text-orange-700 font-semibold">🎯 Ton objectif : apprendre et monétiser ton savoir-faire</div>
                    </div>
                    
                    <button 
                      onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg"
                    >
                      DÉCOUVRIR EASY FORMA
                    </button>
                  </div>
                </div>

                {/* EASY FORMA + */}
                <div className="bg-purple-50 p-8 rounded-2xl border-2 border-purple-200 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      PROGRAMME PARTENAIRE
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-purple-600">
                      🔥 EASY FORMA + est fait pour toi si...
                    </h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu ne veux pas te former, mais tu veux gagner de l'argent maintenant</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux un business prêt à l'emploi, sans créer de produit ni site</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux pouvoir revendre EASY FORMA et encaisser 750€ de commission par vente</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux un modèle simple, duplicable et rentable</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux une licence exclusive, des outils fournis, et du coaching</span>
                      </li>
                    </ul>
                    
                    <div className="bg-purple-100 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">💰 1 500€ (paiement unique)</div>
                      <div className="text-purple-700 mb-2">🔑 Tu possèdes l'écosystème EASY FORMA + les droits de revente</div>
                      <div className="text-purple-700 font-semibold">🚀 Ton objectif : revendre, encaisser, scaler</div>
                    </div>
                    
                    <Link
                      to="/easy-forma-plus"
                      className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg text-center"
                    >
                      DÉCOUVRIR EASY FORMA +
                    </Link>
                  </div>
                </div>
              </div>

              {/* Résumé - Style tableau comme l'image */}
              <div className="bg-gray-50 p-8 rounded-2xl mt-8 border border-gray-200">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <Target className="h-6 w-6 text-orange-500" />
                  <h4 className="text-2xl font-bold text-gray-900">Résumons simplement :</h4>
                </div>
                
                {/* En-têtes du tableau */}
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div className="text-xl font-semibold text-gray-700 pb-4 border-b border-gray-300 text-center">
                    Ton profil
                  </div>
                  <div className="text-xl font-semibold text-gray-700 pb-4 border-b border-gray-300 text-center">
                    L'offre faite pour toi
                  </div>
                </div>
                
                {/* Lignes du tableau */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-8 items-center py-4 border-b border-gray-200">
                    <div className="text-gray-800 text-lg text-center">
                      Tu veux apprendre un métier →
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-800 font-semibold text-lg">EASY FORMA</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 items-center py-4">
                    <div className="text-gray-800 text-lg text-center">
                      Tu veux un business clé en main →
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-800 font-semibold text-lg">EASY FORMA +</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Sunday Business Section */}
          <div className="my-20">
            <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative px-8 py-16 md:px-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                  <div className="inline-flex items-center space-x-2 bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
                    <Calendar className="h-4 w-4" />
                    <span>Newsletter Hebdomadaire</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    SUNDAY <span className="text-pink-400">BUSINESS</span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                    Chaque dimanche, découvre une idée de business clé en main pour générer tes premiers revenus
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4 text-pink-300">Ce que tu reçois :</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
                            <span>Une idée business détaillée chaque semaine</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
                            <span>Plan d'action étape par étape</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
                            <span>Outils et ressources nécessaires</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
                            <span>Estimation des revenus potentiels</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-400/30">
                        <div className="text-center">
                          <Mail className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                          <div className="text-3xl font-bold text-pink-300 mb-2">+100</div>
                          <div className="text-purple-200">Idées business partagées</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-gray-500 text-white px-8 py-4 rounded-xl font-bold cursor-not-allowed opacity-75 flex items-center space-x-2" disabled>
                      <Mail className="h-5 w-5" />
                      <span>Prochainement</span>
                    </button>
                    <div className="flex items-center space-x-2 text-purple-200">
                      <CheckCircle className="h-5 w-5 text-pink-400" />
                      <span className="text-sm">Bientôt disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </section>
  );
};

export default FormationsList;