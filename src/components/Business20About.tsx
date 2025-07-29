import React from 'react';
import { Users, Heart, Target, Rocket, CheckCircle } from 'lucide-react';

const Business20About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users className="h-4 w-4" />
              <span>Qui suis-je ?</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Derrière BUSINESS 2.0,
              <span className="text-blue-500 block">un parcours simple</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une mission claire : rendre l'entrepreneuriat accessible à tous
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
                    Derrière BUSINESS 2.0, un parcours simple.
                    <span className="text-blue-500 block">Une mission claire.</span>
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
                      <strong className="text-blue-600">Alors j'ai créé BUSINESS 2.0</strong> : un programme 100 % orienté action, pour apprendre à entreprendre et en vivre.
                    </p>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-800 font-semibold text-center">
                        Chez BUSINESS 2.0 :<br />
                        <span className="text-blue-600">Apprends - Entreprends - Réussis</span>
                      </p>
                      
                      <div className="pt-4">
                        <button
                          onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                        >
                          <Rocket className="h-5 w-5" />
                          <span>Rejoindre BUSINESS 2.0</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:p-16 flex items-center justify-center bg-white">
                <img
                  src="/cyprien-speaking.jpeg"
                  alt="Cyprien Sesboüé, fondateur de BUSINESS 2.0"
                  className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-12 pt-2 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Personal Story */}
          <div className="my-20">
            <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-700 bg-white rounded-2xl p-8 shadow-lg">
              <p>
                Comme beaucoup d'enfants issus de familles modestes, j'avais des rêves.
                Mais autour de moi, personne ne m'encourageait à les poursuivre.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <p className="text-xl font-semibold mb-4 text-red-800">À 15 ans, j'ai eu le déclic :</p>
                <p className="mb-4">
                  🏎️ Je suis tombé nez à nez avec une Ferrari rouge.
                </p>
                <p className="mb-4">
                  Quand j'ai vu le conducteur, je me suis dit :
                </p>
                <p className="text-2xl font-bold text-center text-red-800">
                  "Pourquoi lui ? Et pourquoi pas moi ?"
                </p>
              </div>
              
              <p>
                Deux ans plus tard, j'ai quitté la maison familiale avec une seule idée en tête :
                <strong className="text-blue-600"> transformer mes rêves en réalité.</strong>
              </p>
              
              <p>
                Après plusieurs échecs et tentatives, c'est à 21 ans que je réalise mon premier million d'euros, grâce au marketing digital.
              </p>
              
              <p>
                Deux ans plus tard, je décide de transmettre ce que j'ai appris et d'accompagner d'autres personnes à lancer leur propre business en ligne.
                Des milliers de personnes ont pu changer leur vie.
              </p>
              
              <p className="text-xl font-semibold text-gray-900">
                Mais il manquait encore quelque chose.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Le vrai problème ? L'injustice devant l'accès à l'entrepreneuriat.</h4>
              <p className="text-gray-700 mb-4">
                Tout le monde n'a pas les moyens de se faire accompagner.
              </p>
              <p className="text-gray-700">
                Et comment savoir, dès le départ, si on a l'âme d'un entrepreneur ?
                Celle qui va vraiment nous motiver à aller jusqu'au bout ?
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">C'est pour ça que j'ai créé BUSINESS 2.0 :</h4>
              <p className="text-blue-700 mb-4">
                Un programme qui fait sauter les barrières à l'entrepreneuriat.
              </p>
              <p className="text-blue-700 mb-4">
                Pour 499€, tu accèdes à un accompagnement business complet.
              </p>
              <p className="text-blue-700">
                Tu apprends ce qui fonctionne vraiment… et tu te lances.
              </p>
            </div>
            
            <div className="text-center space-y-6 bg-blue-500 rounded-2xl p-8 text-white">
              <h4 className="text-3xl font-bold">BUSINESS 2.0, c'est la clé.</h4>
              <p className="text-xl">
                Celle qui te permet d'ouvrir les bonnes portes,
                et de rencontrer enfin ton "toi entrepreneur".
              </p>
              <p className="text-xl">
                Plus personne ne pourra me dire qu'entreprendre est impossible.
              </p>
              <p className="text-xl font-semibold">
                Avec BUSINESS 2.0, l'impossible devient possible.
              </p>
            </div>
            
            <div className="text-center space-y-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-xl font-semibold text-gray-900">Alors…</p>
              <p className="text-lg">
                Investis dans un programme qui peut changer ta vie.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                Accompagnement personnalisé • Support inclus
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
            <div className="text-center space-y-6 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibilité</h3>
                <p className="text-gray-600">Rendre l'entrepreneuriat accessible à tous, sans barrière financière</p>
              </div>
            </div>

            <div className="text-center space-y-6 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Action</h3>
                <p className="text-gray-600">Un accompagnement 100% orienté pratique pour des résultats concrets</p>
              </div>
            </div>

            <div className="text-center space-y-6 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
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
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Prêt à rejoindre l'aventure ?
            </h3>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-6">Ce que tu reçois :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">10h de contenu business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">Accès à vie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">1 coaching / mois</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">Support business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">Outils prêts à l'emploi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-white">Communauté d'entrepreneurs</span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Rejoignez les entrepreneurs qui ont déjà transformé leur vie grâce à Business 2.0
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => window.open('https://easyforma.fr/inscription', '_blank')}
                className="bg-yellow-400 text-blue-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
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

export default Business20About;