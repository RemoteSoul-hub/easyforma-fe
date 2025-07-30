import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, Cookie, Mail, AlertTriangle } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Politique de Confidentialité | Easy Forma</title>
        <meta name="description" content="Politique de confidentialité d'Easy Forma : protection des données personnelles, cookies, droits RGPD et utilisation des informations." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Lock className="h-4 w-4" />
              <span>Protection des données</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Votre vie privée est importante pour nous. Découvrez comment nous protégeons vos données personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-full">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Introduction</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Easy Forma s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité 
                explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles 
                lorsque vous utilisez notre site web et nos services.
              </p>
              <p>
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
              <p className="text-sm text-blue-600">
                <strong>Dernière mise à jour :</strong> Juillet 2025
              </p>
            </div>
          </div>

          {/* Données collectées */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-full">
                <Database className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Données que nous collectons</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations que vous nous fournissez :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Nom et prénom lors de l'inscription</li>
                  <li>• Adresse email</li>
                  <li>• Informations de paiement (traitées par Stripe)</li>
                  <li>• Messages envoyés via nos formulaires de contact</li>
                  <li>• Préférences de formation et objectifs professionnels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations collectées automatiquement :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Adresse IP et données de géolocalisation</li>
                  <li>• Type de navigateur et système d'exploitation</li>
                  <li>• Pages visitées et temps passé sur le site</li>
                  <li>• Données d'utilisation des formations</li>
                  <li>• Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Utilisation des données */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-full">
                <Eye className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Comment nous utilisons vos données</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Nous utilisons vos informations pour :</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• Fournir et améliorer nos services de formation</li>
                <li>• Traiter vos paiements et gérer votre abonnement</li>
                <li>• Vous envoyer des communications importantes sur votre compte</li>
                <li>• Personnaliser votre expérience d'apprentissage</li>
                <li>• Analyser l'utilisation du site pour l'améliorer</li>
                <li>• Répondre à vos questions et demandes de support</li>
                <li>• Vous informer de nouvelles formations (avec votre consentement)</li>
                <li>• Respecter nos obligations légales</li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-full">
                <Cookie className="h-6 w-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Cookies et technologies similaires</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Types de cookies utilisés :</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900">Cookies essentiels</h4>
                    <p className="text-sm text-gray-600">Nécessaires au fonctionnement du site (connexion, panier, sécurité)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900">Cookies analytiques</h4>
                    <p className="text-sm text-gray-600">Google Analytics pour comprendre l'utilisation du site</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900">Cookies marketing</h4>
                    <p className="text-sm text-gray-600">Facebook Pixel et autres outils publicitaires (avec votre consentement)</p>
                  </div>
                </div>
              </div>
              
              <p>
                Vous pouvez gérer vos préférences de cookies via la bannière qui apparaît lors de votre première visite 
                ou en modifiant les paramètres de votre navigateur.
              </p>
            </div>
          </div>

          {/* Partage des données */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Partage de vos données</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Nous ne vendons jamais vos données personnelles.</strong></p>
              <p>Nous pouvons partager vos informations uniquement dans les cas suivants :</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Prestataires de services :</strong> Stripe (paiements), services d'emailing, hébergement</li>
                <li>• <strong>Obligations légales :</strong> Si requis par la loi ou une autorité compétente</li>
                <li>• <strong>Protection des droits :</strong> Pour protéger nos droits, notre sécurité ou celle d'autrui</li>
                <li>• <strong>Avec votre consentement :</strong> Dans tout autre cas, avec votre autorisation explicite</li>
              </ul>
            </div>
          </div>

          {/* Vos droits RGPD */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-full">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Vos droits (RGPD)</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900">Droit d'accès</h4>
                  <p className="text-sm text-gray-600">Connaître les données que nous détenons sur vous</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900">Droit de rectification</h4>
                  <p className="text-sm text-gray-600">Corriger des informations inexactes</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900">Droit à l'effacement</h4>
                  <p className="text-sm text-gray-600">Demander la suppression de vos données</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900">Droit à la portabilité</h4>
                  <p className="text-sm text-gray-600">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900">Droit d'opposition</h4>
                  <p className="text-sm text-gray-600">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900">Droit de limitation</h4>
                  <p className="text-sm text-gray-600">Limiter le traitement de vos données</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-100 rounded-full">
                <Lock className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Sécurité des données</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles :
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Chiffrement SSL/TLS pour toutes les transmissions</li>
                <li>• Stockage sécurisé sur des serveurs protégés</li>
                <li>• Accès limité aux données par le personnel autorisé</li>
                <li>• Surveillance continue des systèmes</li>
                <li>• Sauvegardes régulières et plan de récupération</li>
              </ul>
              <p>
                Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée. 
                Nous ne pouvons garantir une sécurité absolue.
              </p>
            </div>
          </div>

          {/* Conservation */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conservation des données</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>Nous conservons vos données personnelles :</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Données de compte :</strong> Pendant la durée de votre abonnement + 3 ans</li>
                <li>• <strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                <li>• <strong>Données marketing :</strong> 3 ans après le dernier contact</li>
                <li>• <strong>Cookies :</strong> Selon les durées définies dans notre politique cookies</li>
              </ul>
              <p>
                Passé ces délais, vos données sont automatiquement supprimées ou anonymisées.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-full">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Nous contacter</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                contactez-nous :
              </p>
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <p><strong>Email :</strong> <a href="mailto:service.easyforma@gmail.com" className="text-orange-600 hover:text-orange-700">service.easyforma@gmail.com</a></p>
                <p><strong>Objet :</strong> "Protection des données personnelles"</p>
                <p><strong>Délai de réponse :</strong> 30 jours maximum</p>
              </div>
              <p className="text-sm text-gray-600">
                Si vous n'êtes pas satisfait de notre réponse, vous pouvez saisir la CNIL : 
                <a href="https://www.cnil.fr" className="text-orange-600 hover:text-orange-700 ml-1">www.cnil.fr</a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;