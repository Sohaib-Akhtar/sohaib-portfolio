
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Linkedin, Github, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Get In Touch</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* <div className="opacity-0 animate-fade-in-left animate-delay-200">
            <div className="animated-border bg-card p-6 md:p-8 rounded-xl">
              <h3 className="text-2xl font-display font-semibold mb-6 flex items-center">
                <MessageSquare size={24} className="text-primary mr-2" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Sending message...</>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div> */}
          
          <div className="opacity-0 animate-fade-in-right animate-delay-300">
            <div className="animated-border bg-card p-6 md:p-8 rounded-xl">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <a 
                      href="sohaib.akhtar.dev@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sohaib.akhtar.dev@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Munich, Bavaria, Germany
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Linkedin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/sohaibakhtar" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      https://www.linkedin.com/in/connoisseur1/
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Github size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">GitHub</h4>
                    <a 
                      href="https://github.com/sohaib-akhtar" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/sohaib-akhtar
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-medium mb-4">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond to inquiries within 24-48 hours. For urgent matters, 
                  please reach out on my Linkedin.
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
