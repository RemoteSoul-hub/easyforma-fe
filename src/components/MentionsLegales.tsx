import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building, Mail, Phone, Globe, Shield, User } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mentions Légales | Easy Forma</title>
        <meta name="description" content="Mentions légales d'Easy Forma : informations sur l'éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Informations légales</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Informations légales concernant le site Easy Forma
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Éditeur du site */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Building className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Éditeur du site</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>Raison sociale :</strong> Easy Forma</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>Dirigeant :</strong> Cyprien Sesboüé</p>
                <p><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                <p><strong>Email :</strong> service.easyforma@gmail.com</p>
                <p><strong>SIRET :</strong> [À compléter]</p>
                <p><strong>TVA Intracommunautaire :</strong> [À compléter]</p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Globe className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Hébergement</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-orange-600 hover:text-orange-700">vercel.com</a></p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Propriété intellectuelle</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques et logos figurant sur le site sont déposés par Easy Forma ou éventuellement par ses partenaires. 
                  Toute reproduction totale ou partielle de ces marques ou de ces logos effectuée à partir des éléments du site 
                  sans l'autorisation expresse d'Easy Forma est donc prohibée.
                </p>
              </div>
            </div>

            {/* Données personnelles */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-full">
                  <User className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Données personnelles</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
                  <a href="mailto:service.easyforma@gmail.com" className="text-orange-600 hover:text-orange-700 ml-1">
                    service.easyforma@gmail.com
                  </a>
                </p>
                <p>
                  Pour plus d'informations sur le traitement de vos données personnelles, 
                  consultez notre <a href="/politique-confidentialite" className="text-orange-600 hover:text-orange-700">Politique de confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation de responsabilité</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Easy Forma s'efforce de fournir sur le site des informations aussi précises que possible. 
                  Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, 
                  qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. 
                  Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. 
                  Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Droit applicable et attribution de juridiction</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Tout litige en relation avec l'utilisation du site easyforma.fr est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Dernière mise à jour :</strong> Janvier 2025
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;