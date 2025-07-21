import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  Infinity,
  Star,
  Briefcase,
  Zap,
  Heart,
  Globe,
  MessageSquare,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Business20 = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const objectives = [
    "Construire une image de marque forte et cohérente",
    "Élaborer des offres commerciales claires et attractives", 
    "Mettre en place une stratégie d'acquisition efficace",
    "Maîtriser les fondamentaux de la vente et devenir un expert dans l'art de convaincre",
    "Développer une stratégie de pérennisation et de croissance durable pour ton activité"
  ];

  const features = [
    {
      icon: <Play className="h-6 w-6" />,
      title: "Une formation en ligne",
      description: "Accès complet à notre plateforme d'apprentissage"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "10h de contenu business",
      description: "Contenu premium condensé et actionnable"
    },
    {
      icon: <Infinity className="h-6 w-6" />,
      title: "Un accès à vie",
      description: "Revisitez le contenu autant de fois que nécessaire"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "1 séance de coaching / mois",
      description: "1 séance de coaching / mois offert"
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Stratégie claire",
      description: "Définissez votre positionnement et vos objectifs business"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Croissance durable",
      description: "Construisez un business model pérenne et scalable"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Acquisition clients",
      description: "Maîtrisez les techniques pour attirer et convertir"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expertise vente",
      description: "Devenez un expert dans l'art de convaincre"
    }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center space-x-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium">
                <Briefcase className="h-4 w-4" />
                <span>Inclus gratuitement</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                BUSINESS <span className="text-yellow-400">2.0</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                10 heures de contenu business intensif, accompagnées d'une séance mensuelle de coaching avec un expert en stratégie.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-yellow-400/20 rounded-full">
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Candidature obligatoire</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                >
                  <Zap className="h-5 w-5" />
                  <span>Déposer ma candidature</span>
                </Link>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/rSzi8E_-SjM"
                    title="Présentation Business 2.0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-blue-100 text-center text-sm">
                  Découvrez comment Business 2.0 va transformer votre approche entrepreneuriale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="h-4 w-4" />
              <span>Objectifs de la formation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ce que vous allez
              <span className="text-blue-600 block">apprendre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Business 2.0 vous donne toutes les clés pour construire et développer 
              une activité entrepreneuriale solide et pérenne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Objectif {index + 1}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{objective}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Business 2.0 Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              BUSINESS 2.0
              <span className="text-blue-600 block">c'est quoi exactement ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-6 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
                  {React.cloneElement(feature.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pourquoi BUSINESS 2.0 est
              <span className="text-blue-600 block">l'accompagnement qu'il te faut ?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une approche complète et moderne pour développer votre activité entrepreneuriale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-blue-100 rounded-2xl flex-shrink-0">
                    {React.cloneElement(benefit.icon, { className: "h-8 w-8 text-blue-600" })}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Extracts Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Play className="h-4 w-4" />
            <span>Aperçu du contenu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Extraits de la
            <span className="text-blue-600 block">formation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez un aperçu du contenu exclusif de Business 2.0 avec ces extraits de formation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vidéo 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Y6lnGO-m_x0"
                title="L'histoire de mon 1er client"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">L'histoire de mon 1er client</h3>
            <p className="text-gray-600 text-sm">Comment j'ai décroché mon premier client sans maîtriser le service... Une histoire vraie avec ses galères et ses leçons.</p>
          </div>
          
          {/* Vidéo 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Kdw2jsphkWg"
                title="Pourquoi l'école est une perte de temps"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pourquoi l'école est une perte de temps</h3>
            <p className="text-gray-600 text-sm">Apprendre une compétence monétisable vs. faire des études : le vrai calcul et le coût d'opportunité.</p>
          </div>
          
          {/* Vidéo 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fvHW19_q_oA"
                title="Ma technique secrète de closing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ma technique secrète de closing</h3>
            <p className="text-gray-600 text-sm">La stratégie que personne ne t'enseigne : vendre la transformation, pas le produit. Plus d'émotion, plus de ventes.</p>
          </div>
        </div>
      </div>
    </section>
      {/* Coaching Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 text-white">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    <Users className="h-4 w-4" />
                    <span>Accompagnement personnalisé</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    1 séance de coaching / mois
                    <span className="text-blue-200 block">incluses</span>
                  </h3>
                  
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Bénéficiez d'une séance d'accompagnement de 30 minutes tous les mois 
                    avec un business coach expert pour personnaliser votre stratégie.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-200" />
                      <span className="text-blue-100">Analyse personnalisée de votre projet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-200" />
                      <span className="text-blue-100">Stratégie adaptée à votre secteur</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-200" />
                      <span className="text-blue-100">Suivi et ajustements en temps réel</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-4xl font-bold mb-2">1 × 30min</div>
                    <div className="text-blue-200">Session mensuelle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Questions fréquentes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Questions sur
              <span className="text-blue-600 block">BUSINESS 2.0</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === 0 ? null : 0)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">1. C'est quoi exactement le programme BUSINESS 2.0 ?</h3>
                {activeFAQ === 0 ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 0 && (
                <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    BUSINESS 2.0 est l'étape suivante logique après avoir suivi une ou plusieurs formations sur EASY FORMA. C'est 
                    un accompagnement exclusif conçu pour t'aider à transformer concrètement ce que tu as appris en source de revenus.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === 1 ? null : 1)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">2. Pourquoi ce programme n'est-il pas inclus dans l'abonnement ?</h3>
                {activeFAQ === 1 ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 1 && (
                <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    L'abonnement EASY FORMA te donne un accès illimité aux compétences. BUSINESS 2.0, lui, est un 
                    accompagnement business personnalisé, avec du coaching, des stratégies concrètes et des outils prêts à l'emploi. Il est 
                    réservé à celles et ceux qui souhaitent passer à l'action sérieusement. Il s'agit d'un accompagnement à forte valeur 
                    ajoutée, uniquement accessible aux abonnés.
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === 2 ? null : 2)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">3. Est-ce que je dois avoir terminé toutes les formations pour postuler ?</h3>
                {activeFAQ === 2 ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 2 && (
                <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    Non, mais avoir validé au moins une formation à 100 % est nécessaire pour accéder à BUSINESS 2.0. L'objectif 
                    est que tu aies déjà acquis une première compétence que nous pourrons ensuite transformer ensemble en offre 
                    monétisable.
                  </p>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === 3 ? null : 3)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">4. Qu'est-ce que je vais recevoir concrètement ?</h3>
                {activeFAQ === 3 ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 3 && (
                <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50">
                  <p className="text-gray-700 leading-relaxed pt-4 mb-4">Tu accèdes à :</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">10 heures de contenu business exclusif</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">1 coaching individuel / mois avec un expert</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Des plans d'action concrets pour vendre tes services</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Une méthode éprouvée pour décrocher tes premiers 5000€ de chiffres d'affaire.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Des outils & scripts prêts à l'emploi</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
              <button
                onClick={() => setActiveFAQ(activeFAQ === 4 ? null : 4)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">5. Comment rejoindre BUSINESS 2.0 ?</h3>
                {activeFAQ === 4 ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 4 && (
                <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    Clique sur "Accéder à BUSINESS 2.0". Tu pourras remplir une courte candidature. 
                    Si tu es sélectionné, tu recevras toutes les infos pour rejoindre le programme et débloquer ton potentiel business.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto">
              <Briefcase className="h-10 w-10 text-blue-900" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Prêt à lancer votre
              <span className="text-yellow-400 block">business ?</span>
            </h3>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Rejoignez Easy Forma dès maintenant et accédez immédiatement à Business 2.0 
              ainsi qu'à toutes nos formations professionnelles.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">29€</div>
                  <div className="text-blue-200 text-sm">par mois</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">+100</div>
                  <div className="text-blue-200 text-sm">formations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">∞</div>
                  <div className="text-blue-200 text-sm">accès illimité</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span className="text-blue-100">Business 2.0 inclus gratuitement</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span className="text-blue-100">1 séance de coaching / mois incluse</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span className="text-blue-100">Accès à vie au contenu</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <Link
                to="/"
                className="bg-yellow-400 text-blue-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              >
                <Zap className="h-6 w-6" />
                <span>Démarrer EASY FORMA</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business20;