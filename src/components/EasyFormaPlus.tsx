import React, { useState } from 'react';
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
  DollarSign,
  Handshake,
  Rocket,
  Shield,
  Crown,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const EasyFormaPlus = () => {
   const [activeFAQ, setActiveFAQ] = useState(null);
     const faqData = [
    {
      question: "1. Qu'est-ce que EASY FORMA + exactement ?",
      answer: "EASY FORMA + est une offre exclusive qui te donne le droit de revente de l'ensemble de la plateforme EASY FORMA. En achetant cette licence à 1500€ (paiement unique), tu deviens partenaire officiel et tu peux revendre EASY FORMA+ à ton tour… en gagnant 750€ de commission par vente."
    },
    {
      question: "2. Est-ce que je dois me former avant de revendre ?",
      answer: "Non, ce n'est pas obligatoire. EASY FORMA + est une opportunité clé en main. Tu reçois une formation en ligne exclusive CLOSERS et une séance de coaching / mois jusqu'à tes 3 premières ventes"
    },
    {
      question: "3. Est-ce que je peux rejoindre EASY FORMA + gratuitement ?",
      answer: "Non. En rejoignant EASY FORMA +, tu deviens propriétaire d'une licence de revente de l'écosystème EASY FORMA. Cet accès exclusif représente une réelle valeur et est proposé au tarif unique de 1 500 € (paiement unique, sans abonnement)."
    },
    {
      question: "4. Comment fonctionne le système de commission ?",
      answer: "À chaque fois que tu vends EASY FORMA + à 1500€, tu gagnes automatiquement 750€, versés en moins de 24h sur ton compte bancaire. Tu n'as aucune gestion technique à faire : on s'occupe de tout, tu n'as qu'à vendre."
    },
    {
      question: "5. Que se passe-t-il si mon prospect préfère prendre l'abonnement à 29€/mois ?",
      answer: "L'abonnement à 29€/mois est destiné à ceux qui veulent se former. EASY FORMA +, c'est pour ceux qui veulent gagner de l'argent immédiatement avec un business déjà prêt. Les deux offres ne répondent pas aux mêmes besoins, c'est à toi de bien positionner la valeur que tu proposes (Thématique traitée dans la formation CLOSERS)."
    },
    {
      question: "6. Combien de ventes dois-je faire pour rentabiliser mon investissement ?",
      answer: "Seulement 2 ventes. Chaque vente te rapporte 750€, donc dès la 2e vente, ton investissement est déjà remboursé — et les suivantes sont 100% de bénéfice."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Commission de 50%",
      description: "750€ de commission sur chaque vente"
    },
    {
      icon: <Infinity className="h-8 w-8" />,
      title: "Accès à vie",
      description: "Possédez l'écosystème EASY FORMA et revendez-le à qui vous voulez"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Accompagnement CLOSERS",
      description: "Formation et accompagnement exclusifs offerts pour réussir toutes vos ventes"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Paiement rapide",
      description: "Commissions versées en moins de 24h sur votre compte"
    }
  ];

  const comparison = [
    {
      feature: "Accès immédiat et à vie à toutes les formations",
      included: true
    },
    {
      feature: "Plus de 1 000 heures de contenu sur des thématiques ultra variées",
      included: true
    },
    {
      feature: "Une communauté d'entrepreneurs dynamique",
      included: true
    },
    {
      feature: "Un business clé en main",
      included: true
    },
    {
      feature: "Obtenir sa 1ère vente dans les 7 prochains jours",
      included: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center space-x-2 bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Crown className="h-4 w-4" />
                <span>Programme Partenaire Exclusif</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                EASY FORMA<span className="text-yellow-400">+</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                Deviens mon partenaire et révolutionne le marché du closing avec une offre irrésistible
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-yellow-400/20 rounded-full">
                    <DollarSign className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1 500€</div>
                    <div className="text-purple-200">Investissement unique</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">750€</div>
                    <div className="text-purple-200">Commission par vente</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
                  <Handshake className="h-5 w-5" />
                  <span>Devenir partenaire</span>
                </button>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/39mEkOco50w"
                    title="Présentation EASY FORMA+"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-purple-100 text-center text-sm">
                  Découvrez comment devenir partenaire et générer des revenus récurrents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Deviens mon partenaire en rejoignant
              <span className="text-purple-600 block">EASY FORMA+</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              Tu percevras un <strong className="text-purple-600">droit de revente</strong> te permettant d'acheter la totalité du catalogue EASY FORMA en une seule fois, au prix unique de <strong className="text-purple-600">1 500€</strong>. Cet achat te permettra de posséder l'écosystème EASY FORMA et de pouvoir le revendre à la personne de ton choix.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contexte du marché</h3>
              <p className="mb-4">
                En 2025, les académies de closing proposent des formations individuelles à des prix de <strong className="text-red-600">2 000€</strong>.
              </p>
              <p className="text-purple-600 font-semibold">
                Imagine pouvoir proposer à ton client :
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ce que tu peux offrir pour seulement 1 500€ :</h3>
              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg">{item.feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Tes revenus</h3>
              <p className="text-green-700 text-lg">
                Tu obtiens une commission de <strong className="text-green-800">50%</strong> sur chacune de tes ventes, soit <strong className="text-green-800">750€</strong> virés en moins de 24h sur ton compte bancaire.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Révolution du marché</h3>
              <p className="text-yellow-700 text-lg">
                EASY FORMA révolutionne le marché du closing avec une véritable offre irrésistible et un paiement de tes commissions en moins de 24h.
              </p>
              <p className="text-yellow-700 text-lg mt-4 font-semibold">
                Obtenir ta liberté financière en ligne n'a jamais été aussi simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section avec les deux profils */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-5xl mx-auto border border-orange-100">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">
                  Tu souhaites apprendre ou entreprendre ?
                </h3>
              
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
                        Tu veux devenir expert dans le domaine de ton choix →
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-800 font-semibold text-lg">EASY FORMA</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 items-center py-4">
                      <div className="text-gray-800 text-lg text-center">
                        Tu veux un business clé en main et encaisser de l'argent maintenant →
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pourquoi choisir
              <span className="text-purple-600 block">EASY FORMA+ ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-purple-100 rounded-2xl flex-shrink-0">
                    {React.cloneElement(benefit.icon, { className: "h-8 w-8 text-purple-600" })}
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

      {/* Section CLOSERS */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="h-4 w-4" />
              <span>Formation Exclusive</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              CLOSERS : OBTIENS TA PREMIÈRE VENTE
              <span className="text-blue-600 block">EN - DE 7 JOURS</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ce que tu reçois :</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">15H de contenu sur les réseaux sociaux, le setting et le closing.</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Un plan d'action personnalisé pour réaliser ta 1ère vente en - de 7 jours</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Un Business coach attitré.</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">1 coaching / mois jusqu'à résultat</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Un support partenaire 24h/24, 7J/7</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Une communauté d'entrepreneurs dynamique</span>
                </div>
              </div>

              {/* Vidéo YouTube */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Extrait de la formation CLOSERS :</h4>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fvHW19_q_oA"
                    title="Extrait formation CLOSERS"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Nous rejoindre
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">        
          {/* FAQ Section */}
    <div className="mt-20">
      <div className="text-center space-y-6 mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Questions fréquentes sur
          <span className="text-yellow-400 block">EASY FORMA+</span>
        </h3>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200"
            >
              <h4 className="text-lg font-semibold text-white pr-4">{faq.question}</h4>
              {activeFAQ === index ? (
                <ChevronUp className="h-5 w-5 text-yellow-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-yellow-400 flex-shrink-0" />
              )}
            </button>
            {activeFAQ === index && (
              <div className="px-8 pb-6 border-t border-white/10">
                <p className="text-purple-100 leading-relaxed pt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Questions fréquentes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Questions sur
              <span className="text-purple-600 block">EASY FORMA+</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">1. Qu'est-ce que EASY FORMA + exactement ?</h3>
                {activeFAQ === 0 ? (
                  <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 0 && (
                <div className="px-8 pb-6 border-t border-purple-100 bg-purple-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    EASY FORMA + est une offre exclusive qui te donne le droit de revente de l'ensemble de la plateforme EASY FORMA. En achetant cette licence à 1500€ (paiement unique), tu deviens partenaire officiel et tu peux revendre EASY FORMA+ à ton tour… en gagnant 750€ de commission par vente.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">2. Est-ce que je dois me former avant de revendre ?</h3>
                {activeFAQ === 1 ? (
                  <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 1 && (
                <div className="px-8 pb-6 border-t border-purple-100 bg-purple-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    Non, ce n'est pas obligatoire. EASY FORMA + est une opportunité clé en main. Tu reçois une formation en ligne exclusive CLOSERS et une séance de coaching / mois jusqu'à tes 3 premières ventes
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">3. Est-ce que je peux rejoindre EASY FORMA + gratuitement ?</h3>
                {activeFAQ === 2 ? (
                  <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 2 && (
                <div className="px-8 pb-6 border-t border-purple-100 bg-purple-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    Non. En rejoignant EASY FORMA +, tu deviens propriétaire d'une licence de revente de l'écosystème EASY FORMA. Cet accès exclusif représente une réelle valeur et est proposé au tarif unique de 1 500 € (paiement unique, sans abonnement).
                  </p>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">4. Comment fonctionne le système de commission ?</h3>
                {activeFAQ === 3 ? (
                  <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 3 && (
                <div className="px-8 pb-6 border-t border-purple-100 bg-purple-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    À chaque fois que tu vends EASY FORMA + à 1500€, tu gagnes automatiquement 750€, versés en moins de 24h sur ton compte bancaire. Tu n'as aucune gestion technique à faire : on s'occupe de tout, tu n'as qu'à vendre.
                  </p>
                </div>
              )}
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">5. Que se passe-t-il si mon prospect préfère prendre l'abonnement à 29€/mois ?</h3>
                {activeFAQ === 4 ? (
                  <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 4 && (
                <div className="px-8 pb-6 border-t border-purple-100 bg-purple-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    L'abonnement à 29€/mois est destiné à ceux qui veulent se former. EASY FORMA +, c'est pour ceux qui veulent gagner de l'argent immédiatement avec un business déjà prêt. Les deux offres ne répondent pas aux mêmes besoins, c'est à toi de bien positionner la valeur que tu proposes (Thématique traitée dans la formation CLOSERS).
                  </p>
                </div>
              )}
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">6. Combien de ventes dois-je faire pour rentabiliser mon investissement ?</h3>
                {activeFAQ === 5 ? (
                  <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0" />
                )}
              </button>
              {activeFAQ === 5 && (
                <div className="px-8 pb-6 border-t border-purple-100 bg-purple-50">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    Seulement 2 ventes. Chaque vente te rapporte 750€, donc dès la 2e vente, ton investissement est déjà remboursé — et les suivantes sont 100% de bénéfice.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <Rocket className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Prêt à devenir
              <span className="text-purple-600 block">partenaire ?</span>
            </h3>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Rejoignez le programme EASY FORMA+ dès maintenant et commencez à générer 
              des revenus récurrents avec notre écosystème de formation.
            </p>
            
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1 500€</div>
                  <div className="text-gray-600 text-sm">Investissement unique</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">750€</div>
                  <div className="text-gray-600 text-sm">par vente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24h</div>
                  <div className="text-gray-600 text-sm">paiement rapide</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Droit de revente complet</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Commission de 50% garantie</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Paiement en moins de 24h</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Accompagnement CLOSERS</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3">
                <Crown className="h-6 w-6" />
                <span>Rejoindre EASY FORMA+</span>
              </button>
              <p className="text-gray-500 text-sm mt-4">
                Commission immédiate • Support inclus • Accompagnement personnalisé
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EasyFormaPlus;