import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './ui/dark-mode';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Common glass style for both states
  const glassStyle = "bg-white/[0.08] backdrop-blur-[6.7px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]";

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? `py-3 ${glassStyle}` 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-2xl font-display font-semibold inline-block rounded-md p-2 relative"
            style={{
              background: "linear-gradient(to right, #0f172a, #0f172a) padding-box, linear-gradient(to right, #6366f1, #ec4899) border-box",
              border: "2px solid transparent",
              borderRadius: "0.375rem",
              WebkitBackgroundClip: "padding-box, border-box",
              backgroundClip: "padding-box, border-box"
            }}
          >
            <span className="text-white">Sohaib Akhtar</span>
          </a>

          {/* Desktop Navigation with Dark Mode Toggle at the end */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1 mr-4">
              <a href="#about" className="nav-item">About</a>
              <a href="#experience" className="nav-item">Experience</a>
              <a href="#education" className="nav-item">Education</a>
              <a href="#skills" className="nav-item">Skills</a>
              <a href="#projects" className="nav-item">Projects</a>
              <a href="#contact" className="nav-item">Contact</a>
            </nav>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu with Dark Mode Toggle before menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              className="flex items-center justify-center w-10 h-10 rounded-md text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Separated from header */}
      {isMenuOpen && (
        <div 
          className={`md:hidden fixed left-0 right-0 z-50 ${
            isScrolled ? glassStyle : "bg-white/[0.08] backdrop-blur-[6.7px] shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          } transition-all duration-300`}
          style={{
            top: headerRef.current ? headerRef.current.offsetHeight + 'px' : '0px',
            marginTop: '0'
          }}
        >
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
    </>
  );
};

export default Header;