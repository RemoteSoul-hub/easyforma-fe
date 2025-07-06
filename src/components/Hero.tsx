import React from 'react';
import { ArrowRight, Star, Users, Award, Zap, BookOpen, Infinity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                <Infinity className="h-4 w-4" />
                <span>Accès illimité pour 29€/mois</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Toutes nos
                <span className="text-orange-500 block">formations</span>
                <span className="text-gray-700">pour 29€/mois</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Un seul abonnement pour accéder à l'intégralité de notre catalogue 
                de formations professionnelles. Apprenez à votre rythme, sans limite.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">29€</div>
                  <div className="text-orange-100">par mois</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">+100 formations</div>
                  <div className="text-orange-100">accès illimité</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-sm text-gray-600">Apprenants</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Certifié</div>
                  <div className="text-sm text-gray-600">100% en ligne</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const formationsSection = document.getElementById('formations');
                  if (formationsSection) {
                    formationsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => {
                  const formationsSection = document.getElementById('formations');
                  if (formationsSection) {
                    formationsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 text-center"
              >
                Voir les formations
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Formation professionnelle Easy Forma"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">+100</div>
                    <div className="text-sm text-gray-600">Formations</div>
                  </div>
                </div>
              </div>
              {/* Price floating card */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">29€</div>
                  <div className="text-xs text-orange-100">par mois</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-orange-100 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-orange-200 rounded-full opacity-40 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;