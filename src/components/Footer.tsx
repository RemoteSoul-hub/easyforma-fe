import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              Leader de la formation professionnelle digitale, nous accompagnons 
              les professionnels vers l'excellence depuis plus de 10 ans avec simplicité et efficacité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-orange-400 hover:bg-gray-700 transition-all duration-200">
                <Twitter className="h-5 w-5" />
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
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>À propos</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Témoignages</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-400">Catégories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Développement</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Marketing Digital</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Design UX/UI</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>Data Science</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-orange-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-500/20 rounded-full">
                  <Phone className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-gray-400">01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-500/20 rounded-full">
                  <Mail className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-gray-400">service.easyforma@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-orange-500/20 rounded-full mt-0.5">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <span className="text-gray-400">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2024 Easy Forma. Tous droits réservés.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Fait avec</span>
              <Heart className="h-3 w-3 text-orange-500" />
              <span>à Paris</span>
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