import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { Formation } from '../data/formations';

interface FormationCardProps {
  formation: Formation;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => {
  const getLevelColor = (level: string) => {
    if (level.includes('Débutant')) return 'bg-green-100 text-green-700 border-green-200';
    if (level.includes('Intermédiaire')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (level.includes('Avancé')) return 'bg-red-100 text-red-700 border-red-200';
    return 'bg-orange-100 text-orange-700 border-orange-200';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Développement': 'bg-orange-500',
      'Marketing': 'bg-orange-600',
      'Design': 'bg-orange-400',
      'Data Science': 'bg-orange-700',
      'Management': 'bg-orange-500',
      'Sécurité': 'bg-orange-600',
    };
    return colors[category as keyof typeof colors] || 'bg-orange-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-orange-100">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={formation.image}
          alt={formation.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(formation.category)} shadow-lg`}>
          {formation.category}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <CheckCircle className="h-3 w-3 text-green-500" />
            <span className="text-xs font-semibold text-gray-700">Incluse</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
            {formation.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {formation.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="p-1 bg-orange-100 rounded-full">
              <Clock className="h-3 w-3 text-orange-500" />
            </div>
            <span className="font-medium">{formation.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="p-1 bg-orange-100 rounded-full">
              <BookOpen className="h-3 w-3 text-orange-500" />
            </div>
            <span className="font-medium">{formation.chapters} chapitres</span>
          </div>
        </div>

        {/* Level Badge */}
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-4 w-4 text-gray-400" />
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(formation.level)}`}>
            {formation.level}
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-900">Points clés :</h4>
          <ul className="space-y-2">
            {formation.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-orange-100">
          <Link 
            to={`/formation/${formation.id}`}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center space-x-2 group/btn"
          >
            <span>Voir la formation</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;