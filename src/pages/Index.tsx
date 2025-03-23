
import React, { useEffect } from 'react';
import Header from '../components/Header';
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
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
