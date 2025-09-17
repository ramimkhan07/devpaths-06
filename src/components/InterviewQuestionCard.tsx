import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, MessageSquare, HelpCircle, BookOpen } from 'lucide-react';
import { InterviewQuestion } from '@/data/quizData';

interface InterviewQuestionCardProps {
  question: InterviewQuestion;
}

export const InterviewQuestionCard = ({ question }: InterviewQuestionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-success/10 text-success border-success/20';
      case 'Medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Hard':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 flex-1">
            <MessageSquare className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Interview Question</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
            <Badge variant="outline">
              {question.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-lg font-medium leading-relaxed">
          {question.question}
        </div>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>{isOpen ? 'Hide' : 'Show'} Answer</span>
              </span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 animate-fade-in">
            <div className="mt-4 p-4 bg-accent/50 rounded-lg">
              <h4 className="font-semibold text-primary mb-3 flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Answer</span>
              </h4>
              <p className="leading-relaxed whitespace-pre-line">{question.answer}</p>
            </div>
            
            {question.followUpQuestions && question.followUpQuestions.length > 0 && (
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFollowUp(!showFollowUp)}
                  className="text-primary hover:text-primary/80"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {showFollowUp ? 'Hide' : 'Show'} Follow-up Questions
                </Button>
                
                {showFollowUp && (
                  <div className="pl-4 space-y-2 animate-fade-in">
                    {question.followUpQuestions.map((followUp, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-primary font-medium mt-0.5">{index + 1}.</span>
                        <span className="text-muted-foreground">{followUp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {question.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-xs text-muted-foreground pt-2 border-t">
          Source: {question.source}
        </div>
      </CardContent>
    </Card>
  );
};