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
    <header className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 glass border-b border-gray-700 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'backdrop-blur-md bg-gray-900/95 max-w-sm rounded-b-2xl border-x border-gray-600/50' 
        : 'backdrop-blur-sm bg-gray-900/80 max-w-7xl rounded-none border-x-0'
    }`}>
      <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
        isScrolled ? 'px-3' : ''
      }`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'space-x-1' : 'space-x-2'
          }`}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className={`font-bold text-white transition-all duration-500 ease-in-out ${
              isScrolled ? 'text-lg' : 'text-xl'
            }`}>SavantAI</span>
          </Link>

          {/* Desktop Navigation - Hidden when scrolled */}
          <nav className={`hidden md:flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'opacity-0 scale-0 w-0 overflow-hidden' : 'opacity-100 scale-100 space-x-8'
          }`}>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          </nav>

          {/* Desktop CTA Buttons - Hidden when scrolled */}
          <div className={`hidden md:flex items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'opacity-0 scale-0 w-0 overflow-hidden' : 'opacity-100 scale-100 space-x-4'
          }`}>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              Watch Demo
            </button>
            <Link 
              to="/demo-call"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
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