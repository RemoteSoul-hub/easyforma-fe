import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, CreditCard, RefreshCw, AlertCircle, Scale, Clock, Shield } from 'lucide-react';

const CGV = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Conditions Générales de Vente | Easy Forma</title>
        <meta name="description" content="Conditions générales de vente d'Easy Forma : abonnement, paiement, annulation, accès aux formations et modalités contractuelles." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <FileText className="h-4 w-4" />
              <span>Conditions contractuelles</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conditions régissant l'utilisation des services Easy Forma
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Préambule */}
          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-full">
                <FileText className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Préambule</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
                Easy Forma et ses clients dans le cadre de la vente de formations en ligne et services associés.
              </p>
              <p>
                En souscrivant à nos services, vous acceptez sans réserve les présentes conditions générales de vente.
              </p>
              <p className="text-sm text-green-600">
                <strong>Date d'entrée en vigueur :</strong> Janvier 2025
              </p>
            </div>
          </div>

          {/* Article 1 - Objet */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 1 - Objet</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Easy Forma propose un service d'accès à des formations professionnelles en ligne sous forme d'abonnement mensuel.
              </p>
              <p><strong>Les services comprennent :</strong></p>
              <ul className="space-y-2 ml-4">
                <li>• Accès illimité à plus de 100 formations professionnelles</li>
                <li>• Support pédagogique 24h/24, 7j/7</li>
                <li>• Certificats de réussite</li>
                <li>• 1 séance de coaching téléphonique par mois</li>
                <li>• Accès à la communauté d'apprenants</li>
                <li>• Nouvelles formations ajoutées régulièrement</li>
              </ul>
            </div>
          </div>

          {/* Article 2 - Prix et paiement */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Article 2 - Prix et paiement</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tarification :</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p><strong>Abonnement Easy Forma :</strong> 29€ TTC par mois</p>
                  <p><strong>Programme Business 2.0 :</strong> 499€ TTC (paiement unique)</p>
                  <p><strong>Programme Easy Forma+ :</strong> 1500€ TTC (paiement unique)</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Modalités de paiement :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Paiement par carte bancaire via Stripe (sécurisé)</li>
                  <li>• Prélèvement automatique mensuel pour l'abonnement</li>
                  <li>• Facturation le même jour chaque mois</li>
                  <li>• Aucun engagement de durée minimale</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Évolution des prix :</h3>
                <p>
                  Easy Forma se réserve le droit de modifier ses tarifs. Toute modification sera communiquée 
                  30 jours avant son application. Les clients pourront résilier leur abonnement sans frais 
                  s'ils n'acceptent pas la nouvelle tarification.
                </p>
              </div>
            </div>
          </div>

          {/* Article 3 - Accès aux services */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-full">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Article 3 - Accès aux services</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Activation du compte :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Accès immédiat après validation du paiement</li>
                  <li>• Création automatique des identifiants de connexion</li>
                  <li>• Email de confirmation envoyé dans les 5 minutes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Durée d'accès :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Abonnement mensuel :</strong> Accès maintenu tant que l'abonnement est actif</li>
                  <li>• <strong>Programmes Business 2.0 et Easy Forma+ :</strong> Accès à vie</li>
                  <li>• Possibilité de télécharger les ressources pour usage personnel</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Obligations du client :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Fournir des informations exactes lors de l'inscription</li>
                  <li>• Maintenir la confidentialité de ses identifiants</li>
                  <li>• Ne pas partager son accès avec des tiers</li>
                  <li>• Utiliser les contenus uniquement à des fins personnelles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 4 - Résiliation */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-100 rounded-full">
                <RefreshCw className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Article 4 - Résiliation et remboursement</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Résiliation par le client :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Résiliation possible à tout moment sans préavis</li>
                  <li>• Annulation via l'espace client ou par email</li>
                  <li>• Accès maintenu jusqu'à la fin de la période payée</li>
                  <li>• Aucuns frais de résiliation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Droit de rétractation :</h3>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p>
                    <strong>Abonnement mensuel :</strong> 14 jours de droit de rétractation à compter de la souscription. 
                    Remboursement intégral si aucune formation n'a été commencée.
                  </p>
                  <p className="mt-2">
                    <strong>Programmes Business 2.0 et Easy Forma+ :</strong> 14 jours de droit de rétractation. 
                    Remboursement intégral si moins de 20% du contenu a été consulté.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Résiliation par Easy Forma :</h3>
                <p>
                  Easy Forma peut résilier un compte en cas de non-respect des conditions d'utilisation, 
                  de non-paiement ou d'usage frauduleux. Un préavis de 15 jours sera accordé sauf cas de fraude avérée.
                </p>
              </div>
            </div>
          </div>

          {/* Article 5 - Propriété intellectuelle */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-full">
                <Shield className="h-6 w-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Article 5 - Propriété intellectuelle</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Tous les contenus présents sur la plateforme Easy Forma (textes, images, vidéos, audio, logiciels) 
                sont protégés par le droit d'auteur et appartiennent à Easy Forma ou à ses partenaires.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Droits accordés au client :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Droit d'usage personnel et non commercial</li>
                  <li>• Possibilité de téléchargement pour consultation hors ligne</li>
                  <li>• Droit de prendre des notes et créer des résumés personnels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Interdictions :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Reproduction, distribution ou revente des contenus</li>
                  <li>• Partage des accès avec des tiers</li>
                  <li>• Modification ou altération des contenus</li>
                  <li>• Utilisation à des fins commerciales sans autorisation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 6 - Responsabilité */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-full">
                <AlertCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Article 6 - Limitation de responsabilité</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsabilité d'Easy Forma :</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Fourniture des contenus de formation conformes aux descriptions</li>
                  <li>• Maintien de la disponibilité de la plateforme (objectif 99% du temps)</li>
                  <li>• Protection des données selon les standards de sécurité</li>
                  <li>• Support technique et pédagogique</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitations :</h3>
                <p>
                  Easy Forma ne peut être tenu responsable des dommages indirects, de la perte de données, 
                  ou des interruptions de service dues à des causes externes (pannes internet, maintenance, etc.).
                </p>
                <p>
                  Les formations proposées sont à visée éducative. Easy Forma ne garantit pas l'obtention 
                  d'un emploi ou de revenus spécifiques suite à la formation.
                </p>
              </div>
            </div>
          </div>

          {/* Article 7 - Support client */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 7 - Support client</h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Modalités de support :</h3>
                <ul className="space-y-2">
                  <li>• <strong>Email :</strong> service.easyforma@gmail.com</li>
                  <li>• <strong>Délai de réponse :</strong> 24h maximum en jours ouvrés</li>
                  <li>• <strong>Coaching mensuel :</strong> Inclus dans l'abonnement</li>
                  <li>• <strong>Horaires :</strong> Support disponible 24h/24, 7j/7</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Article 8 - Données personnelles */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 8 - Protection des données</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Le traitement de vos données personnelles est régi par notre 
                <a href="/politique-confidentialite" className="text-orange-600 hover:text-orange-700 mx-1">
                  Politique de confidentialité
                </a>
                qui fait partie intégrante des présentes CGV.
              </p>
              <p>
                Conformément au RGPD, vous disposez de droits sur vos données personnelles 
                (accès, rectification, suppression, portabilité, opposition).
              </p>
            </div>
          </div>

          {/* Article 9 - Modifications */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Article 9 - Modification des CGV</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Easy Forma se réserve le droit de modifier les présentes CGV à tout moment. 
                Les modifications seront communiquées par email 30 jours avant leur entrée en vigueur.
              </p>
              <p>
                La poursuite de l'utilisation des services après notification vaut acceptation des nouvelles conditions. 
                En cas de désaccord, le client peut résilier son abonnement sans frais.
              </p>
            </div>
          </div>

          {/* Article 10 - Droit applicable */}
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-full">
                <Scale className="h-6 w-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 m-0">Article 10 - Droit applicable et litiges</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, 
                une solution amiable sera recherchée avant toute action judiciaire.
              </p>
              <p>
                À défaut d'accord amiable, les tribunaux de Paris seront seuls compétents, 
                même en cas de pluralité de défendeurs ou d'appel en garantie.
              </p>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p><strong>Médiation :</strong></p>
                <p className="text-sm">
                  Conformément à l'article L.616-1 du Code de la consommation, nous proposons un dispositif de médiation de la consommation. 
                  L'entité de médiation retenue est : CNPM - MEDIATION DE LA CONSOMMATION. 
                  En cas de litige, vous pouvez déposer votre réclamation sur son site : 
                  <a href="https://cnpm-mediation-consommation.eu" className="text-green-600 hover:text-green-700 ml-1">
                    cnpm-mediation-consommation.eu
                  </a>
                </p>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Dernière mise à jour :</strong> Janvier 2025
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CGV;