import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Infinity, CheckCircle, ArrowRight } from 'lucide-react';

const FormationsSection = () => {
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
    <section id="formations" className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Formations Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <Infinity className="h-4 w-4" />
            <span>Accès illimité pour 29€/mois</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            +100 formations
            <span className="text-orange-500 block">professionnalisantes</span>
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
                onClick={() => window.open('https://buy.stripe.com/7sY7sM7MW2Lf8UPeBM4Rq01', '_blank')}
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg"
              >
                S'abonner maintenant
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

        {/* Link to full catalog */}
        <div className="text-center mb-16">
          <Link
            to="/formations"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg border border-orange-200"
          >
            <span>Voir toutes les formations</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;