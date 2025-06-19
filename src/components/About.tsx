import React from 'react';
import { BookOpen, Users, Award, Target, CheckCircle, Star, TrendingUp, Globe, Heart, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Apprenants formés' },
    { icon: BookOpen, value: '50+', label: 'Formations disponibles' },
    { icon: Award, value: '4.9/5', label: 'Note de satisfaction' },
    { icon: TrendingUp, value: '95%', label: 'Taux de réussite' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence pédagogique',
      description: 'Nos formations sont conçues par des experts reconnus dans leur domaine, garantissant un contenu de qualité supérieure.'
    },
    {
      icon: Zap,
      title: 'Innovation continue',
      description: 'Nous intégrons les dernières technologies et méthodologies pour offrir une expérience d\'apprentissage moderne.'
    },
    {
      icon: Heart,
      title: 'Accompagnement personnalisé',
      description: 'Chaque apprenant bénéficie d\'un suivi individualisé pour maximiser ses chances de réussite.'
    },
    {
      icon: Globe,
      title: 'Accessibilité universelle',
      description: 'Nos formations sont accessibles 24h/24, 7j/7, depuis n\'importe quel appareil connecté.'
    }
  ];

  const team = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Pédagogique',
      bio: 'Experte en ingénierie pédagogique avec 15 ans d\'expérience dans la formation professionnelle.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Thomas Martin',
      role: 'Directeur Technique',
      bio: 'Spécialiste des technologies éducatives et de l\'innovation dans l\'apprentissage digital.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sophie Leroy',
      role: 'Responsable Qualité',
      bio: 'Garante de l\'excellence de nos formations et de la satisfaction de nos apprenants.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              <span>Notre histoire</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              À propos d'
              <span className="text-orange-500 block">Easy Forma</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Depuis plus de 10 ans, nous révolutionnons la formation professionnelle 
              en rendant l'apprentissage accessible, efficace et passionnant pour tous.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Notre mission
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed">
                Démocratiser l'accès à la formation professionnelle de qualité 
                en proposant un modèle d'abonnement unique qui donne accès à 
                l'ensemble de notre catalogue de formations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-200" />
                  <span className="text-orange-100">Formation accessible à tous</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-200" />
                  <span className="text-orange-100">Contenu mis à jour régulièrement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-200" />
                  <span className="text-orange-100">Accompagnement personnalisé</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Notre équipe Easy Forma"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre approche pédagogique et notre engagement 
              envers nos apprenants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl flex-shrink-0">
                    <value.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Notre équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés qui mettent leur expertise au service 
              de votre réussite professionnelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-orange-600 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-orange-100">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Rejoignez l'aventure Easy Forma
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Découvrez pourquoi des milliers d'apprenants nous font confiance 
                pour développer leurs compétences professionnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Commencer maintenant
                </button>
                <a
                  href="#contact"
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;