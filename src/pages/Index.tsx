
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollObserver from '../components/ScrollObserver';

const Index = () => {
  // Initialize scroll behavior and handle section animations
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const anchorListeners = new Map();
    
    // Smooth scroll behavior for anchor links
    anchors.forEach(anchor => {
      const clickHandler = function(e: Event) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      };
      
      anchor.addEventListener('click', clickHandler);
      anchorListeners.set(anchor, clickHandler);
    });
    
    // Intersection Observer for scroll animations  
    const sections = document.querySelectorAll('section');
    const isMobile = window.innerWidth < 768;
    
    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '50px' : '0px',
      threshold: isMobile ? 0.05 : 0.1
    };
    
    let rafId: number;
    const sectionObserver = new IntersectionObserver((entries) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });
    }, observerOptions);
    
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
    
    return () => {
      // Clean up anchor link listeners
      anchorListeners.forEach((handler, anchor) => {
        anchor.removeEventListener('click', handler);
      });
      anchorListeners.clear();
      
      // Clean up animation frame
      if (rafId) cancelAnimationFrame(rafId);
      
      // Clean up intersection observer
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <Hero />
          
          <ScrollObserver>
            <About />
          </ScrollObserver>
          
          <ScrollObserver>
            <Experience />
          </ScrollObserver>
          
          <ScrollObserver>
            <Education />
          </ScrollObserver>
          
          <ScrollObserver>
            <Skills />
          </ScrollObserver>
          
          <ScrollObserver>
            <Projects />
          </ScrollObserver>
          
          <ScrollObserver>
            <Contact />
          </ScrollObserver>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
