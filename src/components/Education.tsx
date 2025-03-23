
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
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGEocpg4HZZZQ/company-logo_400_400/company-logo_400_400/0/1708685471698/university_of_passau_logo?e=1748476800&v=beta&t=L04UnhTHvlIc2P3BhlN2kJVH1W2L4HCpripbb8ZhvGE",
      location: "Passau, Bavaria, Germany",
      period: "Oct 2023 - Expected 2026",
      description: "Focusing on advanced topics in software engineering, cloud computing, and artificial intelligence."
    },
    {
      id: "nuces",
      degree: "Bachelor of Science in Computer Science",
      institution: "National University of Computer and Emerging Sciences",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGdFV3S_Aelww/company-logo_400_400/company-logo_400_400/0/1631304359411?e=1748476800&v=beta&t=sAQTIxwRxwuGygyvHNi7LeOpe3JBc1WyyqIajZm5I8E",
      location: "Islamabad, Pakistan",
      period: "Sep 2017 - Jul 2021",
      description: "Graduated with distinction, earning a place on the Dean's Honour List for academic excellence in Spring 2021 and Fall 2020."
    }
  ];

  const certifications = [
    {
      id: "aws-cert",
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services (AWS)",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_400_400/company-logo_400_400/0/1738855736997/amazon_web_services_logo?e=1748476800&v=beta&t=nMhI3xoeH31zEGr4rPg_YDP5F58h5aXwhc3-9go9Cl0",
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
                  className="animated-border bg-card p-6 md:p-8 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="md:w-24 shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white p-2 shadow-sm">
                        <img 
                          src={item.logo} 
                          alt={`${item.institution} logo`} 
                          className="w-full h-full object-contain"
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
                      
                      <div className="inline-flex items-center text-sm text-white mb-4 bg-[#426EF0] px-3 py-2 rounded-md">
                        <MapPin size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                      
                      <p className="text-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6 opacity-0 animate-fade-in animate-delay-200">
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id}
                  className="animated-border bg-card p-6 opacity-0 animate-fade-in animate-delay-300"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 shadow-sm shrink-0">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.organization} logo`} 
                        className="w-full h-full object-contain"
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
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1 shadow-sm shrink-0">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D560BAQEf_NHzN2yVQg/company-logo_400_400/company-logo_400_400/0/1723593046388/udemy_logo?e=1748476800&v=beta&t=kKVrvqHAyC_QFDzaPG4LDuA02ELdvtGkYd3t5rqTPRE" 
                      alt="Udemy logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Online Courses</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Continuously upgrading skills through online platforms focusing on cloud technologies, 
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
