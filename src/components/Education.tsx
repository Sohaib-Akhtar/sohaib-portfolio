
import React from 'react';
import { Calendar, MapPin, GraduationCap, ExternalLink } from 'lucide-react';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  logo: string;
  location: string;
  period: string;
  description: string;
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: "passau",
      degree: "Master of Science in Computer Science",
      institution: "Universität Passau",
      logo: "/lovable-uploads/deab21ed-77ec-440b-83dc-e4a5b3e3740a.png",
      location: "Passau, Bavaria, Germany",
      period: "April 2024 - Expected 2026",
      description: "Focusing on advanced topics in software engineering, data warehousing, and AI."
    },
    {
      id: "nuces",
      degree: "Bachelor of Science in Computer Science",
      institution: "National University of Computer and Emerging Sciences",
      logo: "/lovable-uploads/1e62b7dc-9cc6-48cd-a45c-06ea6eb18d10.png",
      location: "Islamabad, Pakistan",
      period: "Sep 2017 - Jul 2021",
      description: "Earned a place on the Dean's Honour List for academic excellence in Spring 2021 and Fall 2020."
    }
  ];

  const certifications = [
    {
      id: "aws-cert",
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services (AWS)",
      logo: "/lovable-uploads/ba7f529b-ef20-40f5-9003-1ae60b1d27fc.png",
      date: "June 2022"
    }
  ];
  
  return (
    <section id="education" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Education & Certifications</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-semibold mb-6 opacity-0 animate-fade-in animate-delay-200">
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {educationItems.map((item, index) => (
              <div 
                key={item.id}
                className="animated-border bg-card p-3 md:p-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6 glass-effect text-white">
                    <div className="md:w-24 shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 via-purple-500/35 to-pink-500/35" />
                        <img 
                          src={item.logo} 
                          alt={`${item.institution} logo`} 
                          className="w-full h-full object-contain relative z-10 bg-white rounded-lg p-1"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{item.degree}</h4>
                          <div className="font-medium mt-1">{item.institution}</div>
                        </div>
                        
                        <div className="mt-2 md:mt-0 flex items-center text-sm">
                          <Calendar size={16} className="mr-1" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center text-xs mb-4 bg-[white] text-black px-3 py-2 rounded-md">
                        <MapPin size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                      
                      <p className="text-foreground text-white">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6 opacity-0 animate-fade-in animate-delay-200 text-white">
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="animated-border bg-card p-6 opacity-0 animate-fade-in animate-delay-300 text-white"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative shadow-sm shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 via-purple-500/35 to-pink-500/35" />
                      <img 
                        src={cert.logo} 
                        alt={`${cert.organization} logo`} 
                        className="w-full h-full object-contain relative z-10 bg-white rounded-lg p-1"
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                      <div className="text-sm mt-1">
                        {cert.organization} • {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 opacity-0 animate-fade-in animate-delay-400">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Continuous Learning
              </h3>
              
              <div className="animated-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative shadow-sm shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 via-purple-500/35 to-pink-500/35" />
                    <img 
                      src="/lovable-uploads/b543c420-bf0d-4019-9802-6d40ec2e4b69.png" 
                      alt="Udemy logo" 
                      className="w-full h-full object-contain relative z-10 bg-white rounded-lg p-1"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Online Courses</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Continuously upgrading skills through online platforms focusing on AI technologies, 
                      design patterns, and advanced programming concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
