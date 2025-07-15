import React from 'react';
import { Users, Heart, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>Qui suis-je ?</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Derrière EASY FORMA,
              <span className="text-orange-500 block">un parcours simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une mission claire : rendre la formation professionnelle accessible à tous
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 bg-gray-50">
                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Derrière EASY FORMA, un parcours simple.
                    <span className="text-orange-500 block">Une mission claire.</span>
                  </h3>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Moi, c'est Cyprien Sesboüé, j'ai 24 ans</strong>, et en réalité :
                      je ne viens pas du monde académique… je viens du terrain.
                    </p>
                    
                    <p>
                      J'ai vu trop de gens galérer avec des formations trop théoriques, sans jamais atteindre cette fameuse liberté financière.
                    </p>
                    
                    <p>
                      <strong className="text-orange-600">Alors j'ai créé EASY FORMA</strong> : une plateforme 100 % orientée action, pour apprendre une compétence et en vivre.
                    </p>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-800 font-semibold text-center">
                        Chez EASY FORMA :<br />
                        <span className="text-orange-600">forme-toi → deviens expert → gagne de l'argent.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:p-16 flex items-center justify-center bg-white">
                <img
                  src="/b9023d92-8fbb-4147-9740-62b9dcad84fd.jpg"
                  alt="Cyprien Sesboüé, fondateur d'EASY FORMA"
                  className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Le vrai problème ? L'injustice devant l'accès à la connaissance.</h4>
              <p className="text-gray-700 mb-4">
                Tout le monde n'a pas 2 000€ pour se former.
              </p>
              <p className="text-gray-700">
                Et comment savoir, dès le départ, si la compétence qu'on choisit est la bonne ?
                Celle qui va vraiment te motiver à aller jusqu'au bout ?
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <h4 className="text-2xl font-bold text-orange-800 mb-4">C'est pour ça que j'ai créé EASY FORMA :</h4>
              <p className="text-orange-700 mb-4">
                Une plateforme qui fait sauter les barrières à l'apprentissage.
              </p>
              <p className="text-orange-700 mb-4">
                Pour 29€/mois, tu accèdes à plus de 100 formations professionnalisantes.
              </p>
              <p className="text-orange-700">
                Tu choisis celle qui te correspond vraiment… et tu lances ton activité en ligne.
              </p>
            </div>
            
            <div className="text-center space-y-6 bg-orange-500 rounded-2xl p-8 text-white">
              <h4 className="text-3xl font-bold">EASY FORMA, c'est la clé.</h4>
              <p className="text-xl">
                Celle qui te permet d'ouvrir les bonnes portes,
                et de rencontrer enfin ton "toi successfull".
              </p>
              <p className="text-xl">
                Plus personne ne pourra dire qu'entreprendre est impossible.
              </p>
              <p className="text-xl font-semibold">
                Avec EASY FORMA, l'impossible devient possible.
              </p>
            </div>
            
            <div className="text-center space-y-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-xl font-semibold text-gray-900">Alors…</p>
              <p className="text-lg">
                Troque ton abonnement Netflix contre une plateforme qui peut changer ta vie.
              </p>
              <p className="text-lg font-semibold text-orange-600">
                Annulation à tout moment • Support inclus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600">Ce qui guide notre mission au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 p-8 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibilité</h3>
                <p className="text-gray-600">Rendre la formation professionnelle accessible à tous, sans barrière financière</p>
              </div>
            </div>

            <div className="text-center space-y-6 p-8 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Action</h3>
                <p className="text-gray-600">Des formations 100% orientées pratique pour des résultats concrets</p>
              </div>
            </div>

            <div className="text-center space-y-6 p-8 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accompagnement</h3>
                <p className="text-gray-600">Un support personnalisé pour vous accompagner vers le succès</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Prêt à rejoindre l'aventure ?
            </h3>
            
            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
              Rejoignez les milliers d'apprenants qui ont déjà transformé leur vie 
              grâce à Easy Forma.
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
      </section>
    </div>
  );
};

export default About;