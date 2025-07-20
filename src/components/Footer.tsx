import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Heart, Instagram, Video } from 'lucide-react';

const Footer = () => {
interface TikTokIconProps {
  className?: string;
}

const TikTokIcon: React.FC<TikTokIconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z"/>
  </svg>
);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-xl">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                EASY FORMA
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
EASY FORMA, c’est toutes les formations professionnalisantes réunies sur une seule plateforme, à prix cassé. Forme-toi, deviens expert, et gagne de l’argent avec ce que tu apprends.
            </p>
<div className="flex space-x-4">
  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
    <Facebook className="h-5 w-5" />
  </a>
  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
    <Linkedin className="h-5 w-5" />
  </a>
  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
    <Instagram className="h-5 w-5" />
  </a>
  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
    <TikTokIcon className="h-5 w-5" />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-400">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#formations" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Nos formations</span>
                </a>
              </li>
              <li>
                <Link to="/qui-suis-je" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Qui suis-je ?</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-500/20 rounded-full">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-gray-400">service.easyforma@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2025 Easy Forma. Tous droits réservés.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Designed by</span>
              <Heart className="h-3 w-3 text-orange-500" />
              <span>MonoPixels</span>
            </span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;