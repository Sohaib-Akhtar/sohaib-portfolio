
import React, { useEffect, useRef } from 'react';

interface ScrollObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({ 
  children, 
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animatedElements = ref.current?.querySelectorAll('.opacity-0.animate-fade-in, .opacity-0.animate-fade-in-left, .opacity-0.animate-fade-in-right, .opacity-0.animate-scale-in');
          
          if (animatedElements) {
            animatedElements.forEach(element => {
              element.classList.remove('opacity-0');
            });
          }
          
          // Unobserve after animation is triggered
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);
  
  return <div ref={ref}>{children}</div>;
};

export default ScrollObserver;
