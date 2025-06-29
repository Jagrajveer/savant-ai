import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glass border-b border-gray-700 transition-all duration-500 ease-in-out ${
      isScrolled ? 'backdrop-blur-md bg-gray-900/95' : 'backdrop-blur-sm bg-gray-900/80'
    }`}>
      {/* Wrapper div that handles the horizontal shrinking */}
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out transform ${
        isScrolled ? 'max-w-5xl scale-x-75' : 'max-w-7xl scale-x-100'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? 'h-12 py-1' : 'h-16 py-2'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transition-all duration-500 ease-in-out ${
              isScrolled ? 'w-6 h-6' : 'w-8 h-8'
            }`}>
              <span className={`text-white font-bold transition-all duration-500 ease-in-out ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>S</span>
            </div>
            <span className={`font-bold text-white transition-all duration-500 ease-in-out ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>SavantAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`text-gray-300 hover:text-white transition-all duration-500 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}>Features</a>
            <a href="#how-it-works" className={`text-gray-300 hover:text-white transition-all duration-500 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}>How It Works</a>
            <a href="#about" className={`text-gray-300 hover:text-white transition-all duration-500 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}>About</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`text-blue-400 hover:text-blue-300 transition-all duration-500 ${
              isScrolled ? 'text-sm px-3 py-1.5' : 'text-base px-4 py-2'
            }`}>
              Watch Demo
            </button>
            <Link 
              to="/demo-call"
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-500 hover:scale-105 ${
                isScrolled ? 'text-sm px-3 py-1.5' : 'text-base px-4 py-2'
              }`}
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-left">
                Watch Demo
              </button>
              <Link 
                to="/demo-call"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
              >
                Book Strategy Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;