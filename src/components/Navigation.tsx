import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import { 
  IconUser, 
  IconBriefcase, 
  IconSchool, 
  IconCode, 
  IconFolder, 
  IconMail,
  IconHome
} from '@tabler/icons-react';
import { NAVIGATION_ITEMS } from '@/constants';

const Navigation = () => {
  const getIcon = (title: string) => {
    const iconMap = {
      "Home": <IconHome className="h-full w-full" />,
      "About": <IconUser className="h-full w-full" />,
      "Experience": <IconBriefcase className="h-full w-full" />,
      "Education": <IconSchool className="h-full w-full" />,
      "Skills": <IconCode className="h-full w-full" />,
      "Projects": <IconFolder className="h-full w-full" />,
      "Contact": <IconMail className="h-full w-full" />,
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