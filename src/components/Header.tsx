
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

  const glassStyle = "bg-white/[0.08] backdrop-blur-[6.7px] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]";
  const mobileMenuStyle = "md:hidden fixed top-[calc(var(--header-height))] left-0 right-0 bg-gray-800/90 backdrop-blur-[6.7px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)] animate-slide-down";

  // Dynamically update CSS variable for header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [isScrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `py-3 ${glassStyle}` 
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
        <div className={mobileMenuStyle}>
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
