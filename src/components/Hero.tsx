
import { useState, useEffect, Suspense, lazy } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useIsMobile } from '@/hooks/use-mobile';
import { PERSONAL_INFO, HERO_CONTENT, SOCIAL_LINKS } from '@/constants';

// Dynamic import for heavy SparklesCore component
const SparklesCore = lazy(() => 
  import('@/components/ui/sparkles').then(module => ({ default: module.SparklesCore }))
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section 
        id="hero" 
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-accent to-transparent opacity-50 -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          {isMobile ? (
            <div className="flex flex-col items-center space-y-4">
              <div className={`py-4 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-full border-4 border-white/50 shadow-xl max-w-[140px] mx-auto">
                    <img 
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -z-10 inset-0 rounded-full bg-primary/20 blur-xl animate-float" />
                </div>
              </div>
              
              <div className={`text-center py-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="mb-6 animate-delay-300 h-24 flex items-center justify-center">
                  <TypewriterEffect 
                    words={HERO_CONTENT.typewriterWords}
                    className="text-3xl font-display font-bold leading-tight"
                    cursorClassName="gradient-cursor"
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mb-8 py-4 animate-delay-500">
                  <HoverBorderGradient
                    as="a"
                    containerClassName="rounded-lg"
                    className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-medium"
                    duration={1}
                    href={HERO_CONTENT.buttons.contact.href}
                  >
                    {HERO_CONTENT.buttons.contact.text}
                  </HoverBorderGradient>
                  <HoverBorderGradient
                    as="a"
                    containerClassName="rounded-lg"
                    className="bg-background/80 text-foreground px-4 py-2 text-sm font-medium border-0"
                    duration={1}
                    href={HERO_CONTENT.buttons.work.href}
                  >
                    {HERO_CONTENT.buttons.work.text}
                  </HoverBorderGradient>
                  <HoverBorderGradient
                    as="a"
                    containerClassName="rounded-lg"
                    className="bg-background/80 text-foreground px-4 py-2 text-sm font-medium border-0"
                    duration={1}
                    href={HERO_CONTENT.buttons.cv.href}
                    target={HERO_CONTENT.buttons.cv.target}
                    rel={HERO_CONTENT.buttons.cv.rel}
                  >
                    {HERO_CONTENT.buttons.cv.text}
                  </HoverBorderGradient>
                </div>
                
                <div className="flex items-center justify-center gap-6 animate-delay-500">
                  {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label={link.ariaLabel}
                    >
                      {link.name === "GitHub" && <Github size={18} />}
                      {link.name === "LinkedIn" && <Linkedin size={18} />}
                      {link.name === "Email" && <Mail size={18} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className={`md:col-span-7 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="mb-6 md:mb-8 mt-8 animate-delay-300 h-32 md:h-48 flex items-center">
                  <TypewriterEffect 
                    words={HERO_CONTENT.typewriterWords}
                    className="text-4xl md:text-6xl font-display font-bold leading-tight"
                    cursorClassName="gradient-cursor"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4 mb-10 animate-delay-500">
                  <HoverBorderGradient
                    as="a"
                    containerClassName="rounded-lg"
                    className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 font-medium"
                    duration={1}
                    href={HERO_CONTENT.buttons.contact.href}
                  >
                    {HERO_CONTENT.buttons.contact.text}
                  </HoverBorderGradient>
                  <HoverBorderGradient
                    as="a"
                    containerClassName="rounded-lg"
                    className="bg-background/80 text-foreground px-6 py-3 font-medium border-0"
                    duration={1}
                    href={HERO_CONTENT.buttons.work.href}
                  >
                    {HERO_CONTENT.buttons.work.text}
                  </HoverBorderGradient>
                  <HoverBorderGradient
                    as="a"
                    containerClassName="rounded-lg"
                    className="bg-background/80 text-foreground px-6 py-3 font-medium border-0"
                    duration={1}
                    href={HERO_CONTENT.buttons.cv.href}
                    target={HERO_CONTENT.buttons.cv.target}
                    rel={HERO_CONTENT.buttons.cv.rel}
                  >
                    {HERO_CONTENT.buttons.cv.text}
                  </HoverBorderGradient>
                </div>
                
                <div className="flex items-center gap-6 animate-delay-500">
                  {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label={link.ariaLabel}
                    >
                      {link.name === "GitHub" && <Github size={20} />}
                      {link.name === "LinkedIn" && <Linkedin size={20} />}
                      {link.name === "Email" && <Mail size={20} />}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className={`md:col-span-5 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-full border-4 border-white/50 shadow-xl max-w-[180px] md:max-w-sm mx-auto">
                    <img 
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -z-10 inset-0 rounded-full bg-primary/20 blur-xl animate-float" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <div className="w-full h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
        
        <Suspense fallback={<div className="w-full h-full opacity-0" />}>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={isMobile ? 200 : 800}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </Suspense>
        
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </>
  );
};

export default Hero;
