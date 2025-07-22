import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Search, Infinity, CheckCircle, ArrowRight, Users, Target, Zap, Rocket, ChevronDown, ChevronUp, Play, Star, Calendar, Mail, TrendingUp, Briefcase, Crown, DollarSign, Handshake, Heart, Globe } from 'lucide-react';

const FormationsList = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('populaires');
  const [activeStep, setActiveStep] = useState(0);
  const toggleStep = (stepId:number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // Formations populaires spécifiques
  const popularFormations = formations.filter(f => 
    [24, 25, 26, 27, 28, 29].includes(f.id)
  );
  
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
      answer: "Oui, dès que tu as complété 100 % d'une formation, tu peux candidater à notre programme exclusif BUSINESS 2.0. Ce programme t'enseigne concrètement comment monétiser les compétences que tu viens d'acquérir."
    },
    {
      question: "Combien de temps faut-il pour suivre une formation ?",
      answer: "Entre 7 et 21 jours selon la thématique. Nos formations sont condensées, pratiques et orientées résultats. Tu avances à ton rythme, même en parallèle d'un job ou de tes études."
    },
    {
      question: "Et si j'ai une question ou un blocage ?",
      answer: "Tu n'est jamais seul(e), tu peux poser toutes les questions en contactant notre support pédagogique disponible 24h/24 et 7j/7."
    },
    {
      question: "Est-ce que je peux obtenir un certificat de réussite ?",
      answer: "Oui, dès que tu as complété 100 % d'une formation, une attestation de réalisation est automatiquement générée et envoyée directement dans ta boîte mail."
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
    id: 3,
    title: "Etape 3",
    description: "Et tout les mois, on fait un point ensemble au téléphone pour t'aider à avancer et répondre à tes questions.",
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
        {/* Qui suis-je Section */}
        <div className="my-20">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
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
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="text-md font-bold text-gray-800 mb-3">Le vrai problème ? L'injustice devant l'accès à la connaissance.</h4>
                      <p className="text-gray-700 mb-3">
                        Tout le monde n'a pas 2 000€ pour se former.
                      </p>
                      <p className="text-gray-700">
                        Et comment savoir, dès le départ, si la compétence qu'on choisit est la bonne ?
                        Celle qui va vraiment te motiver à aller jusqu'au bout ?
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h4 className="text-md font-bold text-orange-800 mb-3">C'est pour ça que j'ai créé EASY FORMA :</h4>
                      <p className="text-orange-700 mb-3">
                        Une plateforme qui fait sauter les barrières à l'apprentissage.
                      </p>
                      <p className="text-orange-700 mb-3">
                        Pour 29€/mois, tu accèdes à plus de 100 formations professionnalisantes.
                      </p>
                      <p className="text-orange-700">
                        Tu choisis celle qui te correspond vraiment… et tu te lances.
                      </p>
                    </div>
                    
                    <div className="text-center space-y-4 bg-orange-500 rounded-xl p-6 text-white">
                      <h4 className="text-lg font-bold">EASY FORMA, c'est la clé.</h4>
                      <p className="text-base">
                        Celle qui te permet d'ouvrir les bonnes portes,
                        et de rencontrer enfin ton "toi successfull".
                      </p>
                      <p className="text-base">
                        Plus personne ne pourra me dire qu'entreprendre est impossible.
                      </p>
                      <p className="text-base font-semibold">
                        Avec EASY FORMA, l'impossible devient possible.
                      </p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <p className="text-lg font-semibold text-gray-900">Alors…</p>
                      <p className="text-gray-700">
                        Troque ton abonnement Netflix contre une plateforme qui peut changer ta vie.
                      </p>
                      <p className="text-orange-600 font-semibold">
                        Annulation à tout moment • Support inclus
                      </p>
                      
                      <div className="pt-6">
                        <button 
                          onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                        >
                          <Rocket className="h-5 w-5" />
                          <span>Rejoindre EASY FORMA</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <p className="text-lg font-semibold text-gray-900">Alors…</p>
                      <p className="text-gray-700">
                        Troque ton abonnement Netflix contre une plateforme qui peut changer ta vie.
                      </p>
                      <p className="text-orange-600 font-semibold">
                        Annulation à tout moment • Support inclus
                      </p>
                      
                      <div className="pt-6">
                        <button 
                          onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                        >
                          <Rocket className="h-5 w-5" />
                          <span>Rejoindre EASY FORMA</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:p-16 flex items-center justify-center bg-white">
                <div>
                  <img
                    src="/cyprien-speaking.jpeg"
                    alt="Cyprien Sesboüé, fondateur d'EASY FORMA"
                    className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* 1. Notre mission */}
        {/* <div className="text-center space-y-6 my-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <Infinity className="h-4 w-4" />
            <span>Notre mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-orange-500 block">Notre mission ?</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xFqeh_DtIGU"
                title="Notre mission - Easy Forma"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rendre la formation professionnelle accessible à tous, partout et à tout moment. 
            Nous croyons que chacun mérite d'avoir accès aux meilleures formations pour développer ses compétences.
          </p>
        </div> */}

        {/* 2. FAQ Section */}
        <div id="faq" className="text-center space-y-6 mb-16 mt-16">
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

        {/* 3. Que se passe-t-il après s'être inscrit */}
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

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200"></div>
          
          <div className="space-y-4">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Point sur la ligne */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Contenu */}
                <div className="ml-16">
                  <div 
                    className={`bg-white rounded-2xl shadow-lg border transition-all duration-300 cursor-pointer overflow-hidden ${
                      activeStep === step.id 
                        ? 'border-orange-300 shadow-xl' 
                        : 'border-gray-200 hover:border-orange-200 hover:shadow-xl'
                    }`}
                    onClick={() => toggleStep(step.id)}
                  >
                    {/* Header de l'étape */}
                    <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                          {React.cloneElement(step.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                              {step.title}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-1">{step.description}</p>
                        </div>
                      </div>
                      <div className="text-orange-500">
                        {activeStep === step.id ? 
                          <ChevronUp className="w-6 h-6" /> : 
                          <ChevronDown className="w-6 h-6" />
                        }
                      </div>
                    </div>

                    {/* Contenu détaillé (accordéon) */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      activeStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Ce qui vous attend :</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA après la roadmap */}
      <div className="text-center mt-12">
        <button 
          onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
        >
          <Rocket className="h-6 w-6" />
          <span>Rejoindre EASY FORMA</span>
        </button>
      </div>
    </div>

        {/* CTA after roadmap */}
        <div className="my-20">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl py-16 px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  Prêt à rejoindre l'aventure ?
                </h3>
                
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
                  Rejoignez les milliers d'apprenants qui ont déjà transformé leur vie grâce à Easy Forma.
                </p>
                
                <div className="pt-4">
                  <button
                    onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                    className="bg-white text-orange-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Commencer maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMMENTED OUT SECTIONS FOR LATER USE */}
        {/* 
        // Section Partenaire EASY FORMA +
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
                      <p className="text-sm">Une communauté d'entrepreneurs dynamique</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                      <p className="text-sm">Un business clé en mains</p>
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
                    onClick={() => window.scrollTo(0, 0)}
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

        // CTA Section avec les deux profils
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-5xl mx-auto border border-orange-100">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900">
                Tu souhaites apprendre ou entreprendre ?
              </h3>
            

              // Deux options côte à côte
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                // EASY FORMA
                <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-orange-600">
                      ✅ EASY FORMA est fait pour toi si...
                    </h4>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux apprendre une ou plusieurs compétences des domaines particuliers.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu cherches une formation accessible actionnable sans perte de temps.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux avancer à ton rythme sans pression.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux avoir un point pédagogique tout les mois avec un coach expert et support disponible 24/7.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tu as pour projet de lancer ton propre business</span>
                      </li>
                    </ul>
                    
                    <div className="bg-orange-100 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-orange-600 mb-2">💸 29€/mois – sans engagement</div>
                      <div className="text-orange-700 mb-2">📚 +100 formations | +1000h de contenu | Support pédagogique</div>
                      <div className="text-orange-700 font-semibold">🎯 Ton objectif : Devenir expert dans le domaine de ton choix</div>
                    </div>
                    
                    <button 
                      onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg"
                    >
                      DÉCOUVRIR EASY FORMA
                    </button>
                  </div>
                </div>

                // EASY FORMA +
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
                        <span>Tu veux apprendre la vente et gagner de l'argent dans les 7 prochains jours</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux un business prêt à l'emploi, sans créer de produit ni site</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux pouvoir revendre cette opportunité et encaisser 750€ de commissions par ventes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux un modèle simple, duplicable et rentable</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>Tu veux une licence de revente, des outils fournis et du coaching</span>
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

              // Résumé - Style tableau comme l'image
              <div className="bg-gray-50 p-8 rounded-2xl mt-8 border border-gray-200">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <Target className="h-6 w-6 text-orange-500" />
                  <h4 className="text-2xl font-bold text-gray-900">Résumons simplement :</h4>
                </div>
                
                // En-têtes du tableau
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div className="text-xl font-semibold text-gray-700 pb-4 border-b border-gray-300 text-center">
                    Ton profil
                  </div>
                  <div className="text-xl font-semibold text-gray-700 pb-4 border-b border-gray-300 text-center">
                    L'offre faite pour toi
                  </div>
                </div>
                
                // Lignes du tableau
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-8 items-center py-4 border-b border-gray-200">
                    <div className="text-gray-800 text-lg text-center">
                      Tu veux apprendre un métier et créer ton agence →
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

        // Sunday Business Section
        <div className="my-20">
          <div className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative px-8 py-16 md:px-16">
              // Background Pattern
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
        */}

        </div>
    </section>
  );
};

export default FormationsList;