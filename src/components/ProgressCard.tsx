import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProgressCardProps {
  title: string;
  progress: number;
  totalItems: number;
  completedItems: number;
  timeSpent?: string;
  streak?: number;
  onContinue?: () => void;
}

export const ProgressCard = ({ 
  title, 
  progress, 
  totalItems, 
  completedItems, 
  timeSpent, 
  streak,
  onContinue 
}: ProgressCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {Math.round(progress)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{completedItems} of {totalItems} completed</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {isExpanded && (
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {timeSpent && (
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>{timeSpent}</span>
              </div>
            )}
            {streak && (
              <div className="flex items-center space-x-2 text-sm">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>{streak} day streak</span>
              </div>
            )}
            <div className="flex items-center space-x-2 text-sm">
              <Target className="w-4 h-4 text-success" />
              <span>{Math.round((completedItems / totalItems) * 100)}% complete</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{completedItems} done</span>
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          <Button 
            size="sm" 
            onClick={onContinue}
            className="flex-1"
            variant="gradient"
          >
            Continue Learning
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};