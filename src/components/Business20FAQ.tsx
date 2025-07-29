import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Business20FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // FAQ Data for Business 2.0
  const faqData = [
    {
      question: "C'est quoi exactement le programme BUSINESS 2.0 ?",
      answer: "BUSINESS 2.0 est l'étape suivante logique après avoir suivi une ou plusieurs formations sur EASY FORMA. C'est un accompagnement exclusif conçu pour t'aider à transformer concrètement ce que tu as appris en source de revenus."
    },
    {
      question: "Pourquoi ce programme n'est-il pas inclus dans l'abonnement ?",
      answer: "L'abonnement EASY FORMA te donne un accès illimité aux compétences. BUSINESS 2.0, lui, est un accompagnement business personnalisé, avec du coaching, des stratégies concrètes et des outils prêts à l'emploi. Il est réservé à celles et ceux qui souhaitent passer à l'action sérieusement."
    },
    {
      question: "Est-ce que je dois avoir terminé toutes les formations pour postuler ?",
      answer: "Non, mais avoir validé au moins une formation à 100 % est nécessaire pour accéder à BUSINESS 2.0. L'objectif est que tu aies déjà acquis une première compétence que nous pourrons ensuite transformer ensemble en offre monétisable."
    },
    {
      question: "Qu'est-ce que je vais recevoir concrètement ?",
      answer: "Tu accèdes à 10 heures de contenu business exclusif, 1 coaching individuel / mois avec un expert, des plans d'action concrets pour vendre tes services, une méthode éprouvée pour décrocher tes premiers 5000€ de chiffres d'affaire, des outils & scripts prêts à l'emploi."
    },
    {
      question: "Comment rejoindre BUSINESS 2.0 ?",
      answer: "Clique sur 'Accéder à BUSINESS 2.0'. Tu pourras remplir une courte candidature. Si tu es sélectionné, tu recevras toutes les infos pour rejoindre le programme et débloquer ton potentiel business."
    },
    {
      question: "Combien de temps dure l'accompagnement ?",
      answer: "L'accès au contenu est à vie, et tu bénéficies d'un coaching mensuel jusqu'à ce que tu atteignes tes objectifs de chiffre d'affaires. En moyenne, nos membres atteignent leurs premiers 5000€ en 3-6 mois."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Questions fréquentes</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Les questions qu'on nous pose
              <span className="text-blue-500 block">souvent</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Retrouvez les réponses aux questions les plus fréquemment posées sur Business 2.0
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {activeFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-8 pb-6 border-t border-blue-100 bg-blue-50">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              D'autres questions ?
            </h3>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter 
              pour toute question supplémentaire.
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => window.open('mailto:service.easyforma@gmail.com', '_blank')}
                className="bg-yellow-400 text-blue-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business20FAQ;