
import React from 'react';
import { Link } from 'lucide-react';

const LinkTreeIcon = ({ className, size = 24, color = "currentColor" }: { 
  className?: string; 
  size?: number; 
  color?: string;
}) => {
  // Utiliser l'icône Link de Lucide React au lieu d'une image
  return <Link size={size} className={className} color={color} />;
};

export default LinkTreeIcon;
