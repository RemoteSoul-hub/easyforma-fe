import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Search, Infinity, CheckCircle, ArrowRight, Users, Target, Zap, Rocket, ChevronDown, ChevronUp, Play, Star, Calendar, Mail, TrendingUp, Briefcase, Crown, DollarSign, Handshake, Heart, Globe } from 'lucide-react';

const FormationsList = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('populaires');
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const toggleStep = (stepId: number) => {
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
                </div>
              </div>
              
              <div className="p-12 lg:p-16 flex items-start justify-center bg-white">
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
          
          {/* CTA Section - Full Width */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-12 mt-8 shadow-lg border border-orange-200">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                <h4 className="text-2xl font-bold text-orange-800 mb-6">C'est pour ça que j'ai créé EASY FORMA :</h4>
                <div className="space-y-4 text-lg">
                  <p className="text-orange-700">
                    Une plateforme qui fait sauter les barrières à l'apprentissage.
                  </p>
                  <p className="text-orange-700">
                    Pour 29€/mois, tu accèdes à plus de 100 formations professionnalisantes.
                  </p>
                  <p className="text-orange-700">
                    Tu choisis celle qui te correspond vraiment… et tu te lances.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">EASY FORMA, c'est la clé.</h4>
                <div className="space-y-4 text-lg">
                  <p>
                    Celle qui te permet d'ouvrir les bonnes portes,
                    et de rencontrer enfin ton "toi successfull".
                  </p>
                  <p>
                    Plus personne ne pourra me dire qu'entreprendre est impossible.
                  </p>
                  <p className="font-semibold text-xl">
                    Avec EASY FORMA, l'impossible devient possible.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-sm">
                <div className="space-y-6">
                  <p className="text-2xl font-semibold text-gray-900">Alors…</p>
                  <p className="text-lg text-gray-700">
                    Troque ton abonnement Netflix contre une plateforme qui peut changer ta vie.
                  </p>
                  <p className="text-orange-600 font-semibold">
                    Annulation à tout moment • Support inclus
                  </p>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                    >
                      <Rocket className="h-6 w-6" />
                      <span>Rejoindre EASY FORMA</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default FormationsList;