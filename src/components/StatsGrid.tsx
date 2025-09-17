import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Clock, 
  Award, 
  Target, 
  Zap,
  TrendingUp,
  Star
} from 'lucide-react';

interface StatItem {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
  color: string;
  trend?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

export const StatsGrid = ({ stats, className = "" }: StatsGridProps) => {
  const iconComponents = {
    Users,
    BookOpen,
    Clock,
    Award,
    Target,
    Zap,
    TrendingUp,
    Star
  };

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        
        return (
          <Card 
            key={index}
            className="bg-card/30 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-4 text-center">
              <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mb-2">
                {stat.label}
              </div>
              {stat.trend && (
                <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                  {stat.trend}
                </Badge>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};