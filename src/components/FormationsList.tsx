import React, { useState } from 'react';
import { formations } from '../data/formations';
import FormationCard from './FormationCard';
import { Filter, Search, Infinity, CheckCircle } from 'lucide-react';

const FormationsList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(formations.map(f => f.category)))];
  
  const filteredFormations = selectedCategory === 'all' 
    ? formations 
    : formations.filter(f => f.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    const labels = {
      'all': 'Toutes les formations',
      'Développement': 'Développement',
      'Marketing': 'Marketing',
      'Design': 'Design',
      'Data Science': 'Data Science',
      'Management': 'Management',
      'Sécurité': 'Sécurité',
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <section id="formations" className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            <Infinity className="h-4 w-4" />
            <span>Accès illimité pour 99€/mois</span>
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
              <div className="text-4xl font-bold mb-2">99€</div>
              <div className="text-orange-100">par mois</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="h-6 w-6" />
                <span className="text-xl font-semibold">Accès illimité</span>
              </div>
              <div className="text-orange-100">à toutes les formations</div>
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
                  <span className="text-gray-700">Accès immédiat à toutes les formations</span>
                </div>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Certificats de réussite</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Support pédagogique inclus</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  S'abonner maintenant - 99€/mois
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200">
                  Essai gratuit 7 jours
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsList;