import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  viewUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tags, thumbnail, viewUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-slate-200">
      <CardContent className="p-0">
        {/* Thumbnail */}
        <div className="aspect-video relative overflow-hidden bg-slate-100">
          <img 
            src={thumbnail} 
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
        </div>

        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-black text-slate-900 mb-3 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
              size="sm"
            >
              <ExternalLink size={16} className="mr-2" />
              View Project
            </Button>
            {githubUrl && (
              <Button 
                variant="outline"
                size="sm"
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <Github size={16} />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}