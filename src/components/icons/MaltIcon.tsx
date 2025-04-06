
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
      <path d="M8.75 6.96L6.96 8.75L15.25 17.04L17.04 15.25L8.75 6.96Z" />
      <path d="M17.04 8.75L15.25 6.96L6.96 15.25L8.75 17.04L17.04 8.75Z" />
      <path d="M10.53 5.17L5.17 10.53L7.89 13.25L13.25 7.89L10.53 5.17Z" />
      <path d="M18.83 13.47L13.47 18.83L10.75 16.11L16.11 10.75L18.83 13.47Z" />
    </svg>
  );
};

export default MaltIcon;
