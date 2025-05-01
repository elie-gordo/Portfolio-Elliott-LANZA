
import React from 'react';

const LinkTreeIcon = ({ className, size = 24, color = "currentColor" }: { 
  className?: string; 
  size?: number; 
  color?: string;
}) => {
  return (
    <svg 
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M13.5 21V16.5H17.5L10.5 3V7.5H6.5L13.5 21Z" 
        fill={color} 
        stroke="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkTreeIcon;
