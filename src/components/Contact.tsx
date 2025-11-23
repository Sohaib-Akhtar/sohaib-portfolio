
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  
  return (
    <section id="contact" className="section py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 opacity-0 animate-fade-in">Get In Touch</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-in animate-delay-100">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="opacity-0 animate-fade-in animate-delay-200 max-w-md">
            <div className="animated-border bg-card p-4 md:p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:sohaib.akhtar.dev@gmail.com" 
                      className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      sohaib.akhtar.dev@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Location</h4>
                    <p className="text-xs md:text-base text-muted-foreground">
                      Munich, Bavaria, Germany
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/connoisseur1/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      linkedin.com/in/connoisseur1
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Github size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/sohaib-akhtar" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/sohaib-akhtar
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-2">Response Time</h4>
                <p className="text-xs md:text-base text-muted-foreground">
                  I typically respond within 24-48 hours. For urgent matters, reach out on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
