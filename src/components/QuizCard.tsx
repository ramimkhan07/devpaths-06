import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Brain, Clock, Award } from 'lucide-react';
import { Question } from '@/data/quizData';

interface QuizCardProps {
  question: Question;
  onComplete: (correct: boolean) => void;
  showAnswer?: boolean;
  timeLimit?: number;
}

export const QuizCard = ({ question, onComplete, showAnswer = false, timeLimit = 30 }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

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

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const isCorrect = answerIndex === question.correctAnswer;
    
    setTimeout(() => {
      onComplete(isCorrect);
    }, 1500);
  };

  const getOptionClass = (index: number) => {
    if (!isAnswered) {
      return 'hover:bg-accent hover:text-accent-foreground cursor-pointer border-border';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-success/20 border-success text-success-foreground';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'bg-destructive/20 border-destructive text-destructive-foreground';
    }
    
    return 'bg-muted border-border text-muted-foreground';
  };

  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Quiz Question</CardTitle>
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
        
        {timeLimit > 0 && !isAnswered && (
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <Progress value={(timeLeft / timeLimit) * 100} className="flex-1 h-2" />
            <span className="text-sm text-muted-foreground">{timeLeft}s</span>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-lg font-medium leading-relaxed">
          {question.question}
        </div>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${getOptionClass(index)}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{option}</span>
                {isAnswered && index === question.correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-success" />
                )}
                {isAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                  <XCircle className="w-5 h-5 text-destructive" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {isAnswered && (
          <div className="mt-6 p-4 bg-accent/50 rounded-lg animate-fade-in">
            <div className="flex items-start space-x-2">
              <Award className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Explanation</h4>
                <p className="text-sm leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}
        
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