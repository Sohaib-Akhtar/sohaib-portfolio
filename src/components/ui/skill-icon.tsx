import React from 'react';

interface SkillIconProps {
  name: string;
  devicon?: string;
  icon?: string;
  color?: string;
  isArchitectural?: boolean;
  size?: number;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  devicon,
  icon,
  color,
  isArchitectural = false,
  size = 48,
  className = ""
}) => {
  if (isArchitectural && icon) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ fontSize: `${size}px` }}
        title={name}
      >
        <span role="img" aria-label={name}>
          {icon}
        </span>
      </div>
    );
  }

  if (devicon) {
    const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devicon}.svg`;
    
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        title={name}
      >
        <img
          src={iconUrl}
          alt={name}
          width={size}
          height={size}
          style={{
            filter: color && !isArchitectural ? 'none' : undefined,
          }}
          onError={(e) => {
            console.warn(`Failed to load devicon for ${name}:`, iconUrl);
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
          className="transition-transform duration-200 hover:scale-110"
        />
        <div 
          className="hidden items-center justify-center w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold text-xs"
          style={{
            width: size,
            height: size,
            fontSize: `${Math.max(8, size / 6)}px`
          }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: `${Math.max(8, size / 6)}px`
      }}
      title={name}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};