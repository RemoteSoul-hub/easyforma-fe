import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formations } from '../data/formations';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  BarChart3, 
  CheckCircle, 
  User,
  Target,
  AlertCircle,
  PlayCircle,
  Award
} from 'lucide-react';

const FormationDetail = () => {
  const { id } = useParams();
  const formation = formations.find(f => f.id === parseInt(id || '0'));

  if (!formation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Link 
            to="/" 
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    if (level.includes('Débutant')) return 'bg-green-100 text-green-700 border-green-200';
    if (level.includes('Intermédiaire')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (level.includes('Avancé')) return 'bg-red-100 text-red-700 border-red-200';
    return 'bg-orange-100 text-orange-700 border-orange-200';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Bien-être et performance': 'bg-green-500',
      'Bureaucratique': 'bg-blue-500',
      'Communication': 'bg-orange-500',
      'La boîte à outils de l\'entrepreneur': 'bg-purple-500',
      'Management et vente': 'bg-red-500',
    };
    return colors[category as keyof typeof colors] || 'bg-orange-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour aux formations</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(formation.category)}`}>
                  {formation.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(formation.level)} bg-white`}>
                  {formation.level}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {formation.title}
              </h1>
              
              <p className="text-xl text-orange-100 leading-relaxed">
                {formation.detailedDescription}
              </p>

              <div className="flex flex-wrap gap-6 text-orange-100">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{formation.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{formation.chapters} chapitres</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>{formation.level}</span>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg flex items-center space-x-2">
                  <PlayCircle className="h-5 w-5" />
                  <span>Commencer la formation</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={formation.image}
                alt={formation.title}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Objectives */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Objectifs de la formation</h2>
              </div>
              <ul className="space-y-3">
                {formation.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Program */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Programme détaillé</h2>
              </div>
              <div className="space-y-6">
                {formation.program.map((module, index) => (
                  <div key={index} className="border border-orange-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Module {index + 1}: {module.title}
                    </h3>
                    <ul className="space-y-2">
                      {module.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Prérequis</h2>
              </div>
              <ul className="space-y-3">
                {formation.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold">29€</div>
                <div className="text-orange-100">par mois</div>
                <div className="border-t border-orange-400 pt-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Accès à toutes les formations</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Certificat de réussite</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Support pédagogique</span>
                  </div>
                </div>
                <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200">
                  S'abonner maintenant
                </button>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <User className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Votre formateur</h3>
              </div>
              <div className="text-center space-y-4">
                <img
                  src={formation.instructor.avatar}
                  alt={formation.instructor.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{formation.instructor.name}</h4>
                  <p className="text-gray-600 text-sm mt-2">{formation.instructor.bio}</p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Points clés</h3>
              </div>
              <ul className="space-y-3">
                {formation.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetail;