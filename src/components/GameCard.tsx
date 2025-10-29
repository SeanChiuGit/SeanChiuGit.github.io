import { ExternalLink, Play } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface GameCardProps {
  title: string;
  description: string;
  tags: string[];
  iconImage: string;
  screenshots: string[];
  playUrl?: string;
}

export function GameCard({ title, description, tags, iconImage, screenshots, playUrl }: GameCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-slate-200">
      <CardContent className="p-0">
        {/* Main Screenshot */}
        <div className="aspect-video relative overflow-hidden bg-slate-100">
          <img 
            src={screenshots[0]} 
            alt={`${title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
        </div>

        <div className="p-6">
          {/* Title and Icon */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
              <img 
                src={iconImage} 
                alt={`${title} icon`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>

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

          {/* Additional Screenshots */}
          {screenshots.length > 1 && (
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {screenshots.slice(1).map((screenshot, index) => (
                <div key={index} className="flex-shrink-0 w-20 h-12 rounded overflow-hidden bg-slate-100">
                  <img 
                    src={screenshot} 
                    alt={`${title} screenshot ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Play Button */}
          {playUrl && (
            <a href={playUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
                size="sm"
              >
                <Play size={16} className="mr-2" />
                Play Game
              </Button>
            </a>
          )}

        </div>
      </CardContent>
    </Card>
  );
}