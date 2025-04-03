
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const ProjectCard = ({ index, title, description, category, imageUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="w-full">
        <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-black/60 to-black/40">
          <img 
            src={imageUrl}
            alt={title} 
            className="object-cover w-full h-full rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
          />
        </AspectRatio>
      </div>
      <div className="p-6">
        <Badge className="mb-3 bg-black/20 text-gray-300 hover:bg-black/30 border-0">
          {category}
        </Badge>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
