
import React from 'react';

const MaltIcon = ({ className, size = 24, color = "currentColor" }: { 
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
      <path d="M20 20L14.5 14.5M13.5 13.5L11 11M10 10L4 4M20 4L16 8M15 9L13.5 10.5M11.5 12.5L4 20" />
    </svg>
  );
};

export default MaltIcon;
