
import React from 'react';

const LinkTreeIcon = ({ className, size = 24, color = "currentColor" }: { 
  className?: string; 
  size?: number; 
  color?: string;
}) => {
  return (
    <img 
      src="https://img.icons8.com/?size=100&id=SAuKSoGPfNAW&format=png&color=000000" 
      width={size} 
      height={size} 
      className={className}
      alt="Linktree"
      style={{
        filter: "brightness(0) invert(1)",
      }}
    />
  );
};

export default LinkTreeIcon;
