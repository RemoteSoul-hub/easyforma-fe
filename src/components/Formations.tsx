import React, { useState } from 'react';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Infinity, CheckCircle, Rocket } from 'lucide-react';

const Formations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('populaires');

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <Infinity className="h-4 w-4" />
              <span>Accès illimité pour 29€/mois</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              +100 formations
              <span className="text-orange-500 block">professionnalisantes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un seul prix, un accès total. Explorez l'intégralité de notre catalogue 
              de formations professionnelles sans restriction.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto border border-orange-100">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Prêt à commencer votre
                  <span className="text-orange-500 block">parcours de formation ?</span>
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Rejoignez les milliers d'apprenants qui ont déjà transformé leur vie 
                  grâce à Easy Forma.
                </p>
                
                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">29€</div>
                      <div className="text-gray-600 text-sm">par mois</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">+100</div>
                      <div className="text-gray-600 text-sm">formations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">∞</div>
                      <div className="text-gray-600 text-sm">accès illimité</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Accès à toutes les formations</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Support pédagogique inclus</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Certificats de réussite</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Annulation à tout moment</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8">
                  <button
                    onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                  >
                    <Rocket className="h-6 w-6" />
                    <span>Rejoindre EASY FORMA</span>
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    Accès immédiat • Support inclus • Annulation à tout moment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;