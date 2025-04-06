
import React from 'react';

const LinkTreeIcon = ({ className, size = 24, color = "currentColor" }: { 
  className?: string; 
  size?: number; 
  color?: string;
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11v9" />
      <path d="M8 11v9" />
      <path d="M16 11v9" />
    </svg>
  );
};

export default LinkTreeIcon;
