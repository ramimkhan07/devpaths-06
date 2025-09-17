
import { useState } from 'react';
import { ExternalLink, PlayCircle, FileText, Video, Link2, BookOpen, Download, Bookmark, Star, Clock, Award, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ResourceViewer } from '@/components/ResourceViewer';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'documentation' | 'course' | 'tutorial' | 'book' | 'podcast' | 'interactive' | 'practice' | 'tool';
  platform: string;
  difficulty?: string;
  duration?: string;
  rating?: number;
  free?: boolean;
  author?: string;
  views?: string;
  tags: string[];
}

interface ResourceCardProps {
  resource: Resource;
  className?: string;
  showPlatform?: boolean;
  compact?: boolean;
}

export const ResourceCard = ({ resource, className = "", showPlatform = true, compact = false }: ResourceCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerResource, setViewerResource] = useState<Resource | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="w-4 h-4" />;
      case 'article':
        return <FileText className="w-4 h-4" />;
      case 'documentation':
        return <BookOpen className="w-4 h-4" />;
      case 'course':
        return <Video className="w-4 h-4" />;
      case 'tutorial':
        return <PlayCircle className="w-4 h-4" />;
      case 'book':
        return <BookOpen className="w-4 h-4" />;
      case 'podcast':
        return <PlayCircle className="w-4 h-4" />;
      case 'interactive':
        return <Zap className="w-4 h-4" />;
      case 'practice':
        return <Award className="w-4 h-4" />;
      case 'tool':
        return <Zap className="w-4 h-4" />;
      default:
        return <Link2 className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'article':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'documentation':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'course':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'tutorial':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'book':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'podcast':
        return 'bg-pink-500/10 text-pink-500 border-pink-500/20';
      case 'interactive':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'practice':
        return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20';
      case 'tool':
        return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks'
    );
  };

  const handleVisit = () => {
    setIsVisited(true);
    
    // Check if the URL is likely to work in an iframe
    const isEmbeddable = checkIfEmbeddable(resource.url);
    
    if (isEmbeddable) {
      setViewerResource(resource);
      setIsViewerOpen(true);
      toast.success('Opening resource in app');
    } else {
      // Open directly in new tab for better compatibility
      window.open(resource.url, '_blank', 'noopener,noreferrer');
      toast.success('Opening resource in new tab');
    }
  };

  const checkIfEmbeddable = (url: string): boolean => {
    // List of domains that typically allow iframe embedding
    const embeddableDomains = [
      'youtube.com',
      'youtu.be',
      'codepen.io',
      'codesandbox.io',
      'jsfiddle.net',
      'replit.com',
      'stackblitz.com',
      'developer.mozilla.org',
      'w3schools.com',
      'freecodecamp.org'
    ];
    
    try {
      const domain = new URL(url).hostname.toLowerCase();
      return embeddableDomains.some(embeddableDomain => 
        domain.includes(embeddableDomain)
      );
    } catch {
      return false;
    }
  };

  if (compact) {
    return (
      <>
        <div className={`flex items-center justify-between p-3 bg-card/30 rounded-lg border border-border/50 hover:bg-card/50 transition-all hover:scale-105 cursor-pointer ${isVisited ? 'opacity-75' : ''} ${className}`} onClick={handleVisit}>
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
              {getTypeIcon(resource.type)}
            </div>
            <div>
              <h4 className="font-medium text-white text-sm">{resource.title}</h4>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                {showPlatform && <span>{resource.platform}</span>}
                {resource.difficulty && (
                  <Badge className={getDifficultyColor(resource.difficulty)} variant="secondary">
                    {resource.difficulty}
                  </Badge>
                )}
                {resource.free && (
                  <Badge className="bg-success/10 text-success text-xs">
                    Free
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
        
        <ResourceViewer
          resource={viewerResource}
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Card 
        className={`bg-card/30 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer ${isVisited ? 'opacity-80' : ''} ${className}`}
        onClick={handleVisit}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={getTypeColor(resource.type)}>
                {getTypeIcon(resource.type)}
                <span className="ml-1 capitalize">{resource.type}</span>
              </Badge>
              {resource.free && (
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  Free
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className={`transition-all p-1 ${
                isBookmarked ? 'text-yellow-500 hover:text-yellow-600' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
          </div>
          
          <CardTitle className="text-lg text-white group-hover:text-primary transition-colors line-clamp-2">
            {resource.title}
          </CardTitle>
          {resource.author && (
            <p className="text-slate-400 text-sm">by {resource.author}</p>
          )}
          <CardDescription className="text-slate-300 line-clamp-2">
            {resource.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm text-slate-400">
            {showPlatform && <span className="font-medium">{resource.platform}</span>}
            <div className="flex items-center space-x-2">
              {resource.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span>{resource.rating}</span>
                </div>
              )}
              {resource.views && (
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{resource.views}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {resource.difficulty && (
              <Badge className={getDifficultyColor(resource.difficulty)}>
                {resource.difficulty}
              </Badge>
            )}
            {resource.duration && (
              <Badge variant="outline" className="bg-muted/10 text-muted-foreground border-muted/20">
                <Clock className="w-3 h-3 mr-1" />
                {resource.duration}
              </Badge>
            )}
            {resource.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted/20 text-slate-300 text-xs">
                {tag}
              </Badge>
            ))}
            {resource.tags.length > 3 && (
              <Badge variant="secondary" className="bg-muted/20 text-slate-300 text-xs">
                +{resource.tags.length - 3}
              </Badge>
            )}
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleVisit();
            }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {isVisited ? 'Open Again' : 'Open Resource'}
          </Button>
        </CardContent>
      </Card>

      <ResourceViewer
        resource={viewerResource}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
};
