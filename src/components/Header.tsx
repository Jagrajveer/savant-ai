import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
      isScrolled 
        ? 'glass border-b border-gray-700 backdrop-blur-xl bg-gray-900/80' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-white transition-all duration-300 group-hover:text-blue-400">
              SavantAI
            </span>
          </Link>

          {/* Desktop Navigation with staggered animation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '#features', label: 'Features' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#about', label: 'About' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group animate-fade-in-down"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons with animation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 animate-fade-in-down" style={{ animationDelay: '300ms' }}>
              Watch Demo
            </button>
            <Link 
              to="/demo-call"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-down relative overflow-hidden group"
              style={{ animationDelay: '400ms' }}
            >
              <span className="relative z-10">Book Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden text-white transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden transition-all duration-400 ease-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 py-4 border-t border-gray-700' 
            : 'max-h-0 opacity-0 py-0'
        }`}>
          <nav className="flex flex-col space-y-4">
            {[
              { href: '#features', label: 'Features' },
              { href: '#how-it-works', label: 'How It Works' },
              { href: '#about', label: 'About' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 ${
                  isMenuOpen ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              className={`text-blue-400 hover:text-blue-300 transition-all duration-300 text-left hover:translate-x-2 ${
                isMenuOpen ? 'animate-slide-in-left' : ''
              }`}
              style={{ animationDelay: '300ms' }}
            >
              Watch Demo
            </button>
            <Link 
              to="/demo-call"
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center hover:scale-105 ${
                isMenuOpen ? 'animate-slide-in-left' : ''
              }`}
              style={{ animationDelay: '400ms' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Strategy Call
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;