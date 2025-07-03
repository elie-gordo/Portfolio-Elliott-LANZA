import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectReferenceCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  imageAlt?: string;
  githubLink?: string;
}

const ProjectReferenceCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  imageAlt,
  githubLink 
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
        <div className="text-gray-300 leading-relaxed">
          {description.split('\n').map((line, index) => {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const parts = line.split(urlRegex);
            
            return (
              <p key={index} className={index > 0 ? "mt-2" : ""}>
                {parts.map((part, partIndex) => {
                  if (urlRegex.test(part)) {
                    return (
                      <a 
                        key={partIndex}
                        href={part} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        {part}
                      </a>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
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
        {githubLink && (
          <div className="mt-4">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              🔗{githubLink}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectReferenceCard;