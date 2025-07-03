import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectReferenceCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  imageAlt?: string;
}

const ProjectReferenceCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  imageAlt 
}: ProjectReferenceCardProps) => {
  return (
    <Card className="bg-black/20 border-white/10 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt || title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
            >
              #{tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectReferenceCard;