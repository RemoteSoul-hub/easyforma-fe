import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, User, Building, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@easyforma.fr',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: 'Lun-Ven 9h-18h',
      subtitle: 'Support 7j/7'
    }
  ];

  const faqs = [
    {
      question: 'Comment fonctionne l\'abonnement ?',
      answer: 'Pour 99€/mois, vous avez accès à toutes nos formations sans limitation. Vous pouvez annuler à tout moment.'
    },
    {
      question: 'Les certificats sont-ils reconnus ?',
      answer: 'Oui, nos certificats sont reconnus par les entreprises et peuvent être ajoutés à votre profil LinkedIn.'
    },
    {
      question: 'Puis-je suivre plusieurs formations en même temps ?',
      answer: 'Absolument ! Votre abonnement vous donne accès illimité à tout notre catalogue de formations.'
    },
    {
      question: 'Y a-t-il un support pédagogique ?',
      answer: 'Oui, nos formateurs sont disponibles pour répondre à vos questions et vous accompagner.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <MessageSquare className="h-4 w-4" />
              <span>Nous contacter</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Parlons de votre
              <span className="text-orange-500 block">projet de formation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre équipe est là pour vous accompagner dans votre parcours de formation. 
              N'hésitez pas à nous contacter pour toute question.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-600">
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                  </p>
                </div>

                          <a
              href="https://calendly.com/cyprien-appel-strategique/30min?month=2025-07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Réserver un appel</span>
            </a>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 text-orange-600 mx-auto" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Notre bureau</h3>
                      <p className="text-gray-600">123 Avenue des Champs-Élysées</p>
                      <p className="text-gray-600">75008 Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Besoin d'une réponse rapide ?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-200" />
                    <span>Réponse par email sous 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-200" />
                    <span>Support téléphonique 9h-18h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-200" />
                    <span>Chat en direct disponible</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-orange-400">
                  <p className="text-orange-100 text-sm">
                    Vous préférez nous appeler directement ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;