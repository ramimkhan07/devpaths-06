import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Clock, Users } from 'lucide-react';

interface FeatureHighlightProps {
  title: string;
  description: string;
  features: string[];
  stats?: {
    rating?: number;
    users?: string;
    duration?: string;
  };
  onExplore?: () => void;
}

export const FeatureHighlight = ({ 
  title, 
  description, 
  features, 
  stats,
  onExplore 
}: FeatureHighlightProps) => {
  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      <CardHeader>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {stats && (
          <div className="flex flex-wrap gap-2">
            {stats.rating && (
              <Badge variant="secondary" className="gap-1">
                <Star className="w-3 h-3 fill-current text-yellow-500" />
                {stats.rating}
              </Badge>
            )}
            {stats.users && (
              <Badge variant="secondary" className="gap-1">
                <Users className="w-3 h-3" />
                {stats.users}
              </Badge>
            )}
            {stats.duration && (
              <Badge variant="secondary" className="gap-1">
                <Clock className="w-3 h-3" />
                {stats.duration}
              </Badge>
            )}
          </div>
        )}

        {onExplore && (
          <Button onClick={onExplore} className="w-full" variant="gradient">
            Explore Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};