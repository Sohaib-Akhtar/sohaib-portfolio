
import React from 'react';
import { Code, Cloud, Server, Globe, Award, Check } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={20} />, name: "Software Development" },
    { icon: <Cloud size={20} />, name: "Cloud Computing" },
    { icon: <Server size={20} />, name: "DataOps" },
    { icon: <Globe size={20} />, name: "API Development" },
  ];

  const languages = [
    { name: "English", proficiency: "Full Professional" },
    { name: "German", proficiency: "Elementary" },
  ];
  
  const glassStyle = "bg-white/[0.08] backdrop-blur-[6.7px] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[16px]";
  
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">About Me</h2>
          <p className="section-subtitle opacity-0 animate-fade-in animate-delay-100">
            Code Artist or Code Scientist? Meet Sohaib.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-left animate-delay-200">
            <p className="text-lg leading-relaxed">
              I'm Sohaib, who loves crafting complex frontends and scalable backends in professional settings. I like to use 
              the end user needs and requirements, to solve something beyond what's expected. 
            </p>
            <p className="text-lg leading-relaxed">
              When not coding professionally, I'm developing AI applications, tackling thought-provoking challenges, 
              or collaborating on creative projects that bridge technology and real-world problems.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Languages</h3>
              <div className="space-y-2">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={18} className="text-primary mr-2" />
                    <span className="font-medium">{language.name}:</span>
                    <span className="ml-2 text-muted-foreground">{language.proficiency} Proficiency</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 opacity-0 animate-fade-in-right animate-delay-300">
            
            <div className={`p-6 ${glassStyle}`}>
              <h3 className="text-xl font-semibold mb-4">Notable Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award size={20} className="text-primary mt-1 mr-3 shrink-0" />
                  <span>AWS Certified</span>
                </li>
                <li className="flex items-start">
                  <Award size={20} className="text-primary mt-1 mr-3 shrink-0" />
                  <span>Working with big clients like Siemens, Heroal GmBH etc</span>
                </li>
                <li className="flex items-start">
                  <Award size={20} className="text-primary mt-1 mr-3 shrink-0" />
                  <span>Employee of the Quarter Award at Teradata</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
