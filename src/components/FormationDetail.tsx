import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, CheckCircle, Target, Users, Award, Star, Play, User } from 'lucide-react';
import { formations } from '../data/formations';

const FormationDetail = () => {
  const { id } = useParams();
  const formation = formations.find(f => f.id === parseInt(id || '0'));

  if (!formation) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Link to="/" className="text-orange-600 hover:text-orange-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Bien-être et performance': 'from-green-500 to-green-600',
      'Bureaucratique': 'from-blue-500 to-blue-600',
      'Communication': 'from-orange-500 to-orange-600',
      'La boîte à outils de l\'entrepreneur': 'from-purple-500 to-purple-600',
      'Management et vente': 'from-red-500 to-red-600',
    };
    return colors[category as keyof typeof colors] || 'from-orange-500 to-orange-600';
  };

  // Generate default program if not provided in your data
  const defaultProgram = [
    {
      title: "Module 1 : Fondamentaux",
      content: [
        "Introduction aux concepts de base",
        "Présentation des outils essentiels",
        "Première approche pratique",
        "Exercices d'application"
      ]
    },
    {
      title: "Module 2 : Techniques avancées",
      content: [
        "Approfondissement des compétences",
        "Méthodes professionnelles",
        "Cas d'usage concrets",
        "Optimisation des processus"
      ]
    },
    {
      title: "Module 3 : Mise en pratique",
      content: [
        "Projets réels",
        "Application des acquis",
        "Résolution de problèmes",
        "Perfectionnement technique"
      ]
    },
    {
      title: "Module 4 : Professionnalisation",
      content: [
        "Standards de l'industrie",
        "Bonnes pratiques",
        "Certification des compétences",
        "Préparation à l'emploi"
      ]
    }
  ];

  const program = formation.program || defaultProgram;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux formations</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getCategoryColor(formation.category)} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  <BookOpen className="h-4 w-4" />
                  <span>{formation.category}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {formation.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {formation.detailedDescription || formation.description}
                </p>
              </div>

              {/* Formation Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{formation.duration}</div>
                    <div className="text-sm text-gray-600">Durée totale</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{formation.chapters}</div>
                    <div className="text-sm text-gray-600">Chapitres</div>
                  </div>
                </div>
              </div>

              {/* Level Badge */}
              {/* <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-orange-200">
                <Award className="h-4 w-4 text-orange-500" />
                <span className="text-gray-700 font-medium">Niveau : {formation.level}</span>
              </div> */}
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Incluse</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-orange-100 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-orange-200 rounded-full opacity-40 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Points clés de la formation</h2>
            <p className="text-gray-600">Ce que vous allez apprendre et maîtriser</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formation.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                <div className="p-2 bg-orange-500 rounded-full flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Point clé {index + 1}</h3>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4" />
              <span>Programme détaillé</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modules de formation</h2>
            <p className="text-gray-600">Un parcours structuré pour une montée en compétences progressive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(formation.category)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {module.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section (if available) */}
      {formation.objectives && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Objectifs pédagogiques</h2>
              <p className="text-gray-600">À la fin de cette formation, vous serez capable de :</p>
            </div>
            
            <div className="space-y-4">
              {formation.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="p-1 bg-green-500 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-800">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prerequisites Section (if available) */}
      {formation.prerequisites && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Prérequis</h2>
              <p className="text-gray-600">Ce dont vous avez besoin pour suivre cette formation :</p>
            </div>
            
            <div className="space-y-4">
              {formation.prerequisites.map((prerequisite, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="p-1 bg-blue-500 rounded-full flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-800">{prerequisite}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instructor Section (if available) */}
      {formation.instructor && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Votre formateur</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-start space-x-6">
                <img
                  src={formation.instructor.avatar}
                  alt={formation.instructor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{formation.instructor.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{formation.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
              <Play className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Prêt à commencer cette formation ?
            </h3>
            
            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
              Rejoignez Easy Forma dès maintenant et accédez à cette formation ainsi qu'à 
              toutes nos autres formations professionnelles.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold">29€</div>
                <div className="text-orange-200 text-sm">par mois</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Accès à toutes les formations</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Support pédagogique inclus</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Certificat de réussite</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => window.open('https://buy.stripe.com/7sY7sM7MW2Lf8UPeBM4Rq01', '_blank')}
                className="bg-white text-orange-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                S'abonner maintenant
              </button>
              <p className="text-orange-200 text-sm mt-4">
                Annulation possible à tout moment • Support inclus
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationDetail;