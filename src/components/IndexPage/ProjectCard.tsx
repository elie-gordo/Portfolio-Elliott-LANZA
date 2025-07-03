
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  route: string;
}

const ProjectCard = ({ index, title, description, category, imageUrl, route }: ProjectCardProps) => {
  const tags = category.split(' ').filter(tag => tag.startsWith('#'));
  
  return (
    <Card className="project-card h-full flex flex-col border-none shadow-md overflow-hidden bg-gradient-to-br from-black/60 to-black/40">
      <div className="w-full">
        <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-black/60 to-black/40">
          <img 
            src={imageUrl}
            alt={title} 
            className="object-cover w-full h-full rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
          />
        </AspectRatio>
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge key={i} className="bg-black/20 text-gray-300 hover:bg-black/30 border-0">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={route} className="w-full">
          <Button variant="outline" className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
            Voir les projets
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
