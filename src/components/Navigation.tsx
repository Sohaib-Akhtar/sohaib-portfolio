import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Folder, 
  Mail,
  Home
} from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/constants';

const Navigation = () => {
  const getIcon = (title: string) => {
    const iconMap = {
      "Home": <Home className="h-full w-full" />,
      "About": <User className="h-full w-full" />,
      "Experience": <Briefcase className="h-full w-full" />,
      "Education": <GraduationCap className="h-full w-full" />,
      "Skills": <Code className="h-full w-full" />,
      "Projects": <Folder className="h-full w-full" />,
      "Contact": <Mail className="h-full w-full" />,
    };
    return iconMap[title as keyof typeof iconMap];
  };

  const navItems = NAVIGATION_ITEMS.map(item => ({
    ...item,
    icon: getIcon(item.title)
  }));

  return (
    <div className="fixed bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 z-40">
      <FloatingDock
        items={navItems}
        desktopClassName="bg-white/20 backdrop-blur-md border border-white/10"
        mobileClassName="bg-white/20 backdrop-blur-md border border-white/10"
      />
    </div>
  );
};

export default Navigation;