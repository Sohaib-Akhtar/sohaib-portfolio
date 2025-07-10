
import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-accent to-transparent opacity-50 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className={`md:col-span-7 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 md:mb-6 mt-8 leading-tight animate-delay-300">
            Building <span className="text-gradient">exceptional</span> software experiences
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-delay-500">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Get in touch
            </a>
            <a 
              href="#experience" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors duration-200"
            >
              View my work
            </a>
            <a 
              href="https://drive.google.com/file/d/1Yx2K7m4NRNVegVJxSA1kHSqy2XbJZprN/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              View CV
            </a>
          </div>
          
          <div className="flex items-center gap-6 animate-delay-500">
            <a 
              href="https://github.com/sohaib-akhtar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/connoisseur1/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sohaib.akhtar.dev@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className={`md:col-span-5 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-white/50 shadow-xl max-w-md mx-auto">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQH-ASWhf9tmHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680690301243?e=1748476800&v=beta&t=gxd-bb2UuDjuZhAfG9MXn-iW4hvL-iQtPDggMk_jPiQ" 
                alt="Sohaib Akhtar" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -z-10 inset-0 rounded-full bg-primary/20 blur-xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
