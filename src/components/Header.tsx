import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Phone, Mail } from 'lucide-react';

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
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="p-1 bg-orange-100 rounded-full">
                <Phone className="h-4 w-4 text-orange-500" />
              </div>
              <span>01 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="p-1 bg-orange-100 rounded-full">
                <Mail className="h-4 w-4 text-orange-500" />
              </div>
              <span>contact@easyforma.fr</span>
            </div>
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
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-white rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2 border-t border-orange-200 mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>contact@easyforma.fr</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;