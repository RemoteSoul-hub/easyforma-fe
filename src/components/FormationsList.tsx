import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Search, Infinity, CheckCircle, ArrowRight, Users, Target, Zap, Rocket, ChevronDown, ChevronUp, Play, Star, Calendar, Mail, TrendingUp, Briefcase } from 'lucide-react';

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
      answer: "Non, aucun prérequis ! Toutes nos formations sont conçues pour les débutants. Tu pars de zéro, et tu progresses étape par étape jusqu'à pouvoir vendre tes compétences.."
    },
    {
      question: " Est-ce que les formations sont vraiment accessibles à vie?",
      answer: "Oui, à vie. Une fois que tu as accès à une formation, tu peux la suivre à ton rythme, autant de fois que tu veux, sans limite de temps."
    },
    {
      question: "Est-ce que je peux vivre de mes compétences après une formation EASY FORMA ?",
      answer: "C'est justement l'objectif. Chaque formation inclut une partie 'Business 2.0' qui t'apprend à monétiser ce que tu viens d'apprendre et à trouver tes premiers clients en ligne.."
    },
    {
      question: "Combien de temps faut-il pour suivre une formation ?",
      answer: "Entre 7 et 21 jours selon la thématique. Nos formations sont condensées, pratiques et orientées résultats. Tu avances à ton rythme, même en parallèle d'un job ou de tes études."
    },
    {
      question: "Et si j'ai une question ou un blocage ?",
      answer: "Tu n'es jamais seul. Tu peux poser toutes tes questions dans la communauté privée ou contacter notre support 24h / 24 et 7 j / 7.."
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
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg">
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

        <div className="text-center space-y-6 my-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <Infinity className="h-4 w-4" />
            <span>Accès illimité pour 29€/mois</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-orange-500 block">Notre mission ?</span>
          </h2>
          <video width="50%" height="240" className="mx-auto" controls ></video>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un seul prix, un accès total. Explorez l'intégralité de notre catalogue 
            de formations professionnelles sans restriction.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-3xl mx-auto border border-orange-100">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Infinity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Prêt à débuter votre parcours ?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rejoignez des milliers d'apprenants qui développent leurs compétences 
                avec Easy Forma. Un seul abonnement, des possibilités infinies.
              </p>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Accès immédiat et à vie à toutes les formations</span>
                </div>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">+ de 1000h de contenu sur des thématiques ultra variées</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Une communauté de + de 5000 entrepreneurs</span>
                </div>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Un accompagnement business</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  S'abonner maintenant - 29€/mois
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200">
                  Essai gratuit 7 jours
                </button>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
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

          {/* Roadmap Section */}
          <div className="my-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                <span>Votre parcours d'apprentissage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Que se passe-t-il une 
                <span className="text-orange-500 block">Fois inscrit?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez votre parcours d'apprentissage étape par étape, de l'inscription à la mise en pratique de vos nouvelles compétences.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden md:block"></div>

                {roadmapSteps.map((step, index) => (
                  <div key={step.id} className="relative mb-8 last:mb-0">
                    {/* Step Indicator */}
                    <div className="flex items-start">
                      <div className="relative z-10 mr-6">
                        <div className={`w-16 h-16 rounded-full ${getStatusColor(step.status)} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div 
                        className={`flex-1 bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border border-orange-100 ${
                          activeStep === index ? 'ring-2 ring-orange-500 transform scale-105' : ''
                        }`}
                        onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            step.status === 'completed' ? 'bg-green-100 text-green-800' :
                            step.status === 'in-progress' ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {step.status === 'completed' ? 'TERMINÉ' : 
                             step.status === 'in-progress' ? 'EN COURS' : 'À VENIR'}
                          </span>
                          
                        </div>

                        {/* Expanded Details */}
                        {activeStep === index && (
                          <div className="mt-6 border-t border-orange-100 pt-4 animate-in slide-in-from-top-2 duration-300">
                            <h4 className="font-semibold text-gray-800 mb-3">Détails de cette étape :</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business 2.0 Section */}
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

          {/* Dimanche Business Section */}
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
      </div>
    </section>
  );
};

export default FormationsList;