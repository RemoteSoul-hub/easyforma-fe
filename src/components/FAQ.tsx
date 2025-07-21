import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  // FAQ Data
  const faqData = [
    {
      question: "Est-ce que je dois avoir un diplôme ou des compétences avant de me lancer ?",
      answer: "Non, aucun prérequis ! Toutes nos formations sont conçues pour les débutants. Tu pars de zéro, et tu progresses étape par étape jusqu'à pouvoir vendre tes compétences."
    },
    {
      question: " Est-ce que les formations sont vraiment accessibles à vie?",
      answer: "Oui, à vie. Une fois que tu as accès à une formation, tu peux la suivre à ton rythme, autant de fois que tu veux, sans limite de temps."
    },
    {
      question: "Est-ce que je peux vivre de mes compétences après une formation EASY FORMA ?",
      answer: "Oui, dès que tu as complété 100 % d'une formation, tu peux candidater à notre programme exclusif BUSINESS 2.0. Ce programme t'enseigne concrètement comment monétiser les compétences que tu viens d'acquérir."
    },
    {
      question: "Combien de temps faut-il pour suivre une formation ?",
      answer: "Entre 7 et 21 jours selon la thématique. Nos formations sont condensées, pratiques et orientées résultats. Tu avances à ton rythme, même en parallèle d'un job ou de tes études."
    },
    {
      question: "Et si j'ai une question ou un blocage ?",
      answer: "Tu n'est jamais seul(e), tu peux poser toutes les questions en contactant notre support pédagogique disponible 24h/24 et 7j/7."
    },
    {
      question: "Est-ce que je peux obtenir un certificat de réussite ?",
      answer: "Oui, dès que tu as complété 100 % d'une formation, une attestation de réalisation est automatiquement générée et envoyée directement dans ta boîte mail."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Questions fréquentes</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Les questions qu'on nous pose
              <span className="text-orange-500 block">souvent</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Retrouvez les réponses aux questions les plus fréquemment posées sur Easy Forma
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {activeFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-8 pb-6 border-t border-orange-100 bg-orange-50">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              D'autres questions ?
            </h3>
            
            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter 
              pour toute question supplémentaire.
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => window.open('mailto:service.easyforma@gmail.com', '_blank')}
                className="bg-white text-orange-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-200 shadow-lg hover:shadow-xl"
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

export default FAQ;