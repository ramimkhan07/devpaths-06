import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, ChevronUp, Code2, Lightbulb, CheckCircle, Play } from 'lucide-react';
import { Exercise } from '@/data/quizData';

interface ExerciseCardProps {
  exercise: Exercise;
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

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
            <Code2 className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">{exercise.title}</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={getDifficultyColor(exercise.difficulty)}>
              {exercise.difficulty}
            </Badge>
            <Badge variant="outline">
              {exercise.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {exercise.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {exercise.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span className="flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>{isExpanded ? 'Hide' : 'Show'} Details</span>
              </span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 animate-fade-in">
            <Tabs defaultValue="hints" className="mt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hints" className="text-xs">Hints</TabsTrigger>
                <TabsTrigger value="tests" className="text-xs">Test Cases</TabsTrigger>
                <TabsTrigger value="solution" className="text-xs">Solution</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hints" className="space-y-3">
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Hints</span>
                  </h4>
                  <div className="space-y-2">
                    {exercise.hints.map((hint, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <span className="text-primary font-medium mt-0.5">{index + 1}.</span>
                        <span>{hint}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tests" className="space-y-3">
                <div className="p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Test Cases</span>
                  </h4>
                  <div className="space-y-3">
                    {exercise.testCases.map((testCase, index) => (
                      <div key={index} className="bg-background/50 p-3 rounded border">
                        <div className="text-sm">
                          <div className="font-medium text-primary mb-1">Input:</div>
                          <code className="text-xs bg-muted px-2 py-1 rounded">{testCase.input}</code>
                        </div>
                        <div className="text-sm mt-2">
                          <div className="font-medium text-primary mb-1">Expected Output:</div>
                          <code className="text-xs bg-muted px-2 py-1 rounded">{testCase.output}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="solution" className="space-y-3">
                {exercise.solution ? (
                  <div className="p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-primary flex items-center space-x-2">
                        <Code2 className="w-4 h-4" />
                        <span>Solution</span>
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowSolution(!showSolution)}
                      >
                        {showSolution ? 'Hide' : 'Reveal'}
                      </Button>
                    </div>
                    {showSolution && (
                      <pre className="text-xs bg-background/50 p-3 rounded overflow-auto animate-fade-in">
                        <code>{exercise.solution}</code>
                      </pre>
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-muted/30 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      Try solving this exercise on your own! The solution will be revealed after you attempt it.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CollapsibleContent>
        </Collapsible>
        
        <div className="text-xs text-muted-foreground pt-2 border-t">
          Source: {exercise.source}
        </div>
      </CardContent>
    </Card>
  );
};