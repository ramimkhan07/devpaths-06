import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Navigation } from '@/components/Navigation';
import { SearchInput } from '@/components/SearchInput';
import { FilterTabs } from '@/components/FilterTabs';
import { QuizCard } from '@/components/QuizCard';
import { InterviewQuestionCard } from '@/components/InterviewQuestionCard';
import { ExerciseCard } from '@/components/ExerciseCard';
import { Trophy, Brain, Code2, Target, Clock, Award, Star, BookOpen } from 'lucide-react';
import { quizQuestions, interviewQuestions, codingExercises, categories, difficulties, sources } from '@/data/quizData';
import { toast } from 'sonner';

export default function Quiz() {
  const [activeTab, setActiveTab] = useState('quiz');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All');
  
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizStats, setQuizStats] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
    timeSpent: 0
  });

  const filteredQuizQuestions = quizQuestions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    const matchesSource = selectedSource === 'All' || q.source === selectedSource;
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesSource;
  });

  const filteredInterviewQuestions = interviewQuestions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    const matchesSource = selectedSource === 'All' || q.source === selectedSource;
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesSource;
  });

  const filteredExercises = codingExercises.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         e.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || e.difficulty === selectedDifficulty;
    const matchesSource = selectedSource === 'All' || e.source === selectedSource;
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesSource;
  });

  const startQuiz = () => {
    setIsQuizMode(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCompletedQuestions(0);
    setQuizStats({ totalQuestions: filteredQuizQuestions.length, correctAnswers: 0, timeSpent: 0 });
    toast.success('Quiz started! Good luck! 🎯');
  };

  const handleQuestionComplete = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
      setQuizStats(prev => ({ ...prev, correctAnswers: prev.correctAnswers + 1 }));
      toast.success('Correct! 🎉');
    } else {
      toast.error('Incorrect, but keep going! 💪');
    }
    
    setCompletedQuestions(prev => prev + 1);
    
    if (currentQuestionIndex < filteredQuizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsQuizMode(false);
        const percentage = Math.round((score / filteredQuizQuestions.length) * 100);
        toast.success(`Quiz completed! Score: ${score}/${filteredQuizQuestions.length} (${percentage}%)`);
      }, 2000);
    }
  };

  const categoryFilters = categories.map(cat => ({
    id: cat,
    label: cat,
    count: cat === 'All' ? undefined : quizQuestions.filter(q => q.category === cat).length
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Quiz & Interview Hub
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge, practice coding, and prepare for interviews with curated content from top platforms
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{quizQuestions.length}</div>
                <div className="text-sm text-muted-foreground">Quiz Questions</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <BookOpen className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold">{interviewQuestions.length}</div>
                <div className="text-sm text-muted-foreground">Interview Questions</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Code2 className="w-8 h-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold">{codingExercises.length}</div>
                <div className="text-sm text-muted-foreground">Coding Exercises</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-destructive mx-auto mb-2" />
                <div className="text-2xl font-bold">{score}</div>
                <div className="text-sm text-muted-foreground">Your Score</div>
              </CardContent>
            </Card>
          </div>

          {/* Quiz Mode */}
          {isQuizMode && (
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span>Quiz Mode Active</span>
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setIsQuizMode(false)}>
                    Exit Quiz
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Question {currentQuestionIndex + 1} of {filteredQuizQuestions.length}</span>
                    <span>Score: {score}/{completedQuestions}</span>
                  </div>
                  <Progress value={(currentQuestionIndex / filteredQuizQuestions.length) * 100} className="h-2" />
                </div>
              </CardHeader>
              <CardContent>
                {filteredQuizQuestions[currentQuestionIndex] && (
                  <QuizCard
                    question={filteredQuizQuestions[currentQuestionIndex]}
                    onComplete={handleQuestionComplete}
                    timeLimit={30}
                  />
                )}
              </CardContent>
            </Card>
          )}

          {/* Filters */}
          {!isQuizMode && (
            <div className="space-y-4">
              <SearchInput
                onSearch={setSearchQuery}
                placeholder="Search questions, topics, or categories..."
                className="max-w-md mx-auto"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Category</h3>
                  <FilterTabs
                    activeFilter={selectedCategory}
                    onFilterChange={setSelectedCategory}
                    filters={categoryFilters}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Difficulty</h3>
                  <FilterTabs
                    activeFilter={selectedDifficulty}
                    onFilterChange={setSelectedDifficulty}
                    filters={difficulties.map(d => ({ id: d, label: d }))}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Source</h3>
                  <FilterTabs
                    activeFilter={selectedSource}
                    onFilterChange={setSelectedSource}
                    filters={sources.map(s => ({ id: s, label: s }))}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          {!isQuizMode && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="quiz" className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>Quiz Questions</span>
                </TabsTrigger>
                <TabsTrigger value="interview" className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Interview Q&A</span>
                </TabsTrigger>
                <TabsTrigger value="exercises" className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4" />
                  <span>Coding Exercises</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="quiz" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Quiz Questions</h2>
                  <Button onClick={startQuiz} variant="gradient" disabled={filteredQuizQuestions.length === 0}>
                    <Trophy className="w-4 h-4 mr-2" />
                    Start Quiz Mode
                  </Button>
                </div>
                
                <div className="grid gap-6">
                  {filteredQuizQuestions.map((question) => (
                    <QuizCard
                      key={question.id}
                      question={question}
                      onComplete={() => {}}
                      showAnswer={true}
                    />
                  ))}
                  
                  {filteredQuizQuestions.length === 0 && (
                    <div className="text-center py-12">
                      <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-muted-foreground">No questions found</h3>
                      <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="interview" className="space-y-6">
                <h2 className="text-2xl font-bold">Interview Questions & Answers</h2>
                
                <div className="grid gap-6">
                  {filteredInterviewQuestions.map((question) => (
                    <InterviewQuestionCard key={question.id} question={question} />
                  ))}
                  
                  {filteredInterviewQuestions.length === 0 && (
                    <div className="text-center py-12">
                      <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-muted-foreground">No interview questions found</h3>
                      <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="exercises" className="space-y-6">
                <h2 className="text-2xl font-bold">Coding Exercises</h2>
                
                <div className="grid gap-6">
                  {filteredExercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                  ))}
                  
                  {filteredExercises.length === 0 && (
                    <div className="text-center py-12">
                      <Code2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-muted-foreground">No exercises found</h3>
                      <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
    </div>
  );
}