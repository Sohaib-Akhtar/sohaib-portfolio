
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-display font-semibold text-gradient mb-2">
              Sohaib Akhtar
            </div>
            <p className="text-muted-foreground">
              Software Engineer • Cloud Enthusiast • Problem Solver
            </p>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp 
                size={20} 
                className="transition-transform duration-300 group-hover:-translate-y-1" 
              />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sohaib Akhtar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-1 flex items-center justify-center">
            Built with <Heart size={14} className="text-primary mx-1" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
