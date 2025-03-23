
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-display font-semibold text-gradient">
          Sohaib Akhtar
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#about" className="nav-item">About</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#education" className="nav-item">Education</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <a href="#about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="nav-item" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#education" className="nav-item" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#skills" className="nav-item" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-item" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
