import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, CheckCircle, Play, Star, Bookmark, Share2, ThumbsUp, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface InteractiveFeaturesProps {
  resourceId: string;
  title: string;
  initialBookmarked?: boolean;
  initialLiked?: boolean;
  initialProgress?: number;
}

export const InteractiveFeatures = ({ 
  resourceId, 
  title, 
  initialBookmarked = false,
  initialLiked = false,
  initialProgress = 0
}: InteractiveFeaturesProps) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [progress, setProgress] = useState(initialProgress);
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 500) + 100);
  const [isCompleted, setIsCompleted] = useState(progress >= 100);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks',
      {
        description: isBookmarked ? 
          'You can find this in your saved items' :
          'Item saved to your bookmarks'
      }
    );
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    toast.success(isLiked ? 'Like removed' : 'Thanks for the feedback!');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this resource: ${title}`,
          url: window.location.href
        });
        toast.success('Shared successfully!');
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleStartLearning = () => {
    if (progress === 0) {
      setProgress(15);
      toast.success('Started learning! Your progress has been saved.');
    } else {
      setProgress(Math.min(progress + 25, 100));
      if (progress + 25 >= 100) {
        setIsCompleted(true);
        toast.success('🎉 Congratulations! You completed this resource!');
      } else {
        toast.success('Progress updated!');
      }
    }
  };

  const handleMarkComplete = () => {
    setProgress(100);
    setIsCompleted(true);
    toast.success('🎉 Marked as complete! Great job!');
  };

  return (
    <Card className="bg-card/30 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-white">Learning Progress</span>
          <Badge variant={isCompleted ? "default" : "secondary"}>
            {isCompleted ? 'Completed' : 'In Progress'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="gradient"
              onClick={handleStartLearning}
              disabled={isCompleted}
              className="flex-1"
            >
              <Play className="w-4 h-4 mr-2" />
              {progress === 0 ? 'Start Learning' : 'Continue'}
            </Button>
            {!isCompleted && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={handleMarkComplete}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark Complete
              </Button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`transition-all ${
                isLiked ? 'text-red-500 hover:text-red-600' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              {likesCount}
            </Button>
            
            <Button
              variant="ghost" 
              size="sm"
              onClick={handleBookmark}
              className={`transition-all ${
                isBookmarked ? 'text-yellow-500 hover:text-yellow-600' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? 'fill-current' : ''}`} />
              {isBookmarked ? 'Saved' : 'Save'}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="text-slate-400 hover:text-white"
          >
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>

        {/* Achievement Badge */}
        {isCompleted && (
          <div className="bg-gradient-to-r from-success/20 to-primary/20 p-4 rounded-lg border border-success/30 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div>
                <h4 className="font-semibold text-success">Achievement Unlocked!</h4>
                <p className="text-sm text-slate-300">You completed "{title}"</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};