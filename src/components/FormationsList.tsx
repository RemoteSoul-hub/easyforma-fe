import React from 'react';
import { Star, Users, Clock, Award, TrendingUp, Target } from 'lucide-react';

const FormationsList: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Formations Premium
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Découvrez nos programmes de formation conçus pour transformer votre approche du business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formation 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Business Mastery</h3>
                <p className="text-purple-200">Formation complète</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-purple-100">
                <Clock className="w-5 h-5 mr-3" />
                <span>12 semaines intensives</span>
              </div>
              <div className="flex items-center text-purple-100">
                <Users className="w-5 h-5 mr-3" />
                <span>Groupe limité à 20 personnes</span>
              </div>
              <div className="flex items-center text-purple-100">
                <Award className="w-5 h-5 mr-3" />
                <span>Certification incluse</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Ce que vous apprendrez :</h4>
              <ul className="space-y-2 text-purple-100">
                <li>• Stratégies de croissance avancées</li>
                <li>• Optimisation des revenus</li>
                <li>• Leadership et management</li>
                <li>• Marketing digital performant</li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-white">2,497€</span>
                <span className="text-purple-200 ml-2 line-through">3,497€</span>
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                S'inscrire
              </button>
            </div>
          </div>

          {/* Formation 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Digital Empire</h3>
                <p className="text-purple-200">Formation avancée</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-purple-100">
                <Clock className="w-5 h-5 mr-3" />
                <span>16 semaines complètes</span>
              </div>
              <div className="flex items-center text-purple-100">
                <Users className="w-5 h-5 mr-3" />
                <span>Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center text-purple-100">
                <Award className="w-5 h-5 mr-3" />
                <span>Garantie résultats</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Programme exclusif :</h4>
              <ul className="space-y-2 text-purple-100">
                <li>• Création d'empire digital</li>
                <li>• Automatisation complète</li>
                <li>• Scaling international</li>
                <li>• Investissements stratégiques</li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-white">4,997€</span>
                <span className="text-purple-200 ml-2 line-through">7,997€</span>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Réserver
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-white ml-3 text-lg font-semibold">4.9/5 (2,847 avis)</span>
            </div>
            
            <blockquote className="text-xl text-purple-100 italic mb-6">
              "Ces formations ont complètement transformé ma vision du business. 
              En 6 mois, j'ai multiplié mon chiffre d'affaires par 5."
            </blockquote>
            
            <cite className="text-purple-200 font-semibold">
              - Marie L., Entrepreneure
            </cite>
          </div>
        </div>

        <div className="text-center mt-12 pt-8">
          <p className="text-xl text-purple-100 font-semibold">
            En bref : tu peux revendre ce que tu viens d'acheter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormationsList;