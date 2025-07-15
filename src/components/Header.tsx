import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Phone, Mail, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              EASY FORMA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Accueil
            </Link>
            <a href="/#formations" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Formations
            </a>
            <Link to="/easy-forma-plus" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Droit de revente
            </Link>
            <Link to="/qui-suis-je" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Qui suis-je ?
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              FAQ
            </Link>
          </nav>

          {/* Calendly Link */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="https://calendly.com/cyprien-appel-strategique/30min?month=2025-07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              <div className="p-1 bg-orange-100 rounded-full">
                <Calendar className="h-4 w-4 text-orange-500" />
              </div>
              <span>Réserver un appel</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-orange-50">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <a
                href="/#formations" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Formations
              </a>
              <Link
                to="/easy-forma-plus"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Droit de revente
              </Link>
              <Link
                to="/qui-suis-je"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Qui suis-je ?
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-3 py-2 border-t border-orange-200 mt-2">
                <a 
                  href="https://calendly.com/cyprien-appel-strategique/30min?month=2025-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <span>Réserver un appel</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;