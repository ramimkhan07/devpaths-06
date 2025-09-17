import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Star, Clock, CheckCircle, TrendingUp, Award, Target, Zap, Code, Database, Globe, Smartphone, Shield, Palette, BarChart, Cpu, Cloud, ChevronRight, Play, ExternalLink, Github, Twitter, Linkedin, Mail, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Header } from '@/components/Navigation';
import { ProgressCard } from '@/components/ProgressCard';
import { StatsGrid } from '@/components/StatsGrid';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';

const Index = () => {
  const [activeTab, setActiveTab] = useState('roadmaps');
  const { user } = useAuth();
  const { enrollments, getRoadmapOverallProgress, getTotalTimeSpent, getCompletedItemsCount, enrollInRoadmap } = useProgress();

  const featuredRoadmaps = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Master HTML, CSS, JavaScript, React, and modern frontend tools',
      topics: 12,
      duration: '6-8 months',
      learners: '2.5M',
      difficulty: 'Beginner to Advanced',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      trending: true
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Learn server-side programming, databases, and APIs',
      topics: 15,
      duration: '7-9 months',
      learners: '1.8M',
      difficulty: 'Intermediate',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      trending: false
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Complete web development from frontend to backend',
      topics: 20,
      duration: '10-12 months',
      learners: '1.2M',
      difficulty: 'Comprehensive',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      trending: true
    },
    {
      id: 'data-scientist',
      title: 'Data Science',
      description: 'Analytics, machine learning, and data visualization',
      topics: 18,
      duration: '9-12 months',
      learners: '1.1M',
      difficulty: 'Advanced',
      icon: BarChart,
      color: 'from-teal-500 to-blue-500',
      trending: true
    }
  ];

  const featuredTopics = [
    {
      id: 'react-basics',
      title: 'React Fundamentals',
      description: 'Master the building blocks of modern React development',
      difficulty: 'Intermediate',
      duration: '3-4 weeks',
      learners: '1.2M',
      rating: 4.8,
      icon: '⚛️'
    },
    {
      id: 'javascript-advanced',
      title: 'Advanced JavaScript',
      description: 'Deep dive into ES6+, async programming, and design patterns',
      difficulty: 'Advanced',
      duration: '4-6 weeks',
      learners: '890K',
      rating: 4.9,
      icon: '⚡'
    },
    {
      id: 'python-fundamentals',
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced programming concepts',
      difficulty: 'Beginner',
      duration: '4-5 weeks',
      learners: '2.1M',
      rating: 4.8,
      icon: '🐍'
    },
    {
      id: 'nodejs-backend',
      title: 'Node.js Backend',
      description: 'Build scalable server-side applications with Node.js',
      difficulty: 'Intermediate',
      duration: '5-7 weeks',
      learners: '760K',
      rating: 4.7,
      icon: '🟢'
    }
  ];

  const stats = [
    { label: 'Learning Paths', value: '50+', icon: Target },
    { label: 'Active Learners', value: '2.5M+', icon: Users },
    { label: 'Topics Covered', value: '500+', icon: BookOpen },
    { label: 'Success Rate', value: '89%', icon: Award }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-secondary)]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6">
            Your Journey to
            <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent"> Tech Mastery</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Structured learning paths, comprehensive resources, and hands-on projects to transform you from beginner to professional developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/roadmaps">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                <Target className="w-5 h-5 mr-2" />
                Explore Roadmaps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/topics">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Topics
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[var(--gradient-accent)]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Progress Section - Only shown when logged in */}
      {user && (
        <section className="py-16 px-4 bg-card/20">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome back, {user.user_metadata?.full_name || user.email?.split('@')[0]}! 
              </h2>
              <p className="text-muted-foreground text-lg">
                Continue your learning journey and track your progress
              </p>
            </div>

            {/* User Stats */}
            <StatsGrid 
              stats={[
                {
                  label: 'Time Spent',
                  value: `${Math.round(getTotalTimeSpent() / 60)}h`,
                  icon: Clock,
                  color: 'bg-blue-500',
                  trend: '+12%'
                },
                {
                  label: 'Completed',
                  value: `${getCompletedItemsCount()}`,
                  icon: CheckCircle,
                  color: 'bg-green-500',
                  trend: '+5 this week'
                },
                {
                  label: 'Enrolled',
                  value: `${enrollments.length}`,
                  icon: BookOpen,
                  color: 'bg-purple-500'
                },
                {
                  label: 'Streak',
                  value: '7 days',
                  icon: Zap,
                  color: 'bg-orange-500',
                  trend: 'Keep it up!'
                }
              ]}
              className="mb-8"
            />

            {/* Progress Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrollments.slice(0, 3).map((enrollment) => {
                const roadmap = featuredRoadmaps.find(r => r.id === enrollment.roadmap_id);
                if (!roadmap) return null;
                
                const progress = getRoadmapOverallProgress(enrollment.roadmap_id);
                
                return (
                  <ProgressCard
                    key={enrollment.id}
                    title={roadmap.title}
                    progress={progress}
                    totalItems={roadmap.topics}
                    completedItems={Math.round(roadmap.topics * progress / 100)}
                    timeSpent="12h 30m"
                    streak={7}
                    onContinue={() => window.location.href = `/roadmaps/${roadmap.id}`}
                  />
                );
              })}
              
              {enrollments.length === 0 && (
                <Card className="bg-card/50 border-border/50 col-span-full">
                  <CardContent className="p-8 text-center">
                    <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Start Your First Learning Path</h3>
                    <p className="text-muted-foreground mb-4">
                      Choose from our curated roadmaps and begin your journey to tech mastery.
                    </p>
                    <Link to="/roadmaps">
                      <Button variant="gradient">
                        Browse Roadmaps
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Start Your Journey
                </h2>
                <p className="text-slate-400 text-lg">
                  Choose from curated learning paths or dive into specific topics
                </p>
              </div>
              <TabsList className="bg-slate-800/50 border border-slate-700 mt-4 md:mt-0">
                <TabsTrigger value="roadmaps" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                  Roadmaps
                </TabsTrigger>
                <TabsTrigger value="topics" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                  Topics
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="roadmaps" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {featuredRoadmaps.map((roadmap) => {
                  const Icon = roadmap.icon;
                  return (
                  <Link key={roadmap.id} to={`/roadmaps/${roadmap.id}`}>
                    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] group relative">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${roadmap.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            {roadmap.trending && (
                              <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            {user && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  enrollInRoadmap(roadmap.id);
                                }}
                              >
                                {enrollments.some(e => e.roadmap_id === roadmap.id) ? 'Enrolled' : 'Enroll'}
                              </Button>
                            )}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{roadmap.title}</h3>
                        <p className="text-slate-400 mb-4">{roadmap.description}</p>
                        
                        {/* Progress bar for enrolled users */}
                        {user && enrollments.some(e => e.roadmap_id === roadmap.id) && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-slate-300 mb-1">
                              <span>Progress</span>
                              <span>{getRoadmapOverallProgress(roadmap.id)}%</span>
                            </div>
                            <Progress value={getRoadmapOverallProgress(roadmap.id)} className="h-2" />
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            <BookOpen className="w-3 h-3 mr-1" />
                            {roadmap.topics} Topics
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            <Clock className="w-3 h-3 mr-1" />
                            {roadmap.duration}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            <Users className="w-3 h-3 mr-1" />
                            {roadmap.learners}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">{roadmap.difficulty}</span>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  );
                })}
              </div>
              <div className="text-center">
                <Link to="/roadmaps">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    View All Roadmaps
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="topics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {featuredTopics.map((topic) => (
                  <Link key={topic.id} to={`/topics/${topic.id}`}>
                    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-2xl">
                            {topic.icon}
                          </div>
                          <div className="flex items-center space-x-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm">{topic.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                        <p className="text-slate-400 mb-4">{topic.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getDifficultyColor(topic.difficulty)}>
                            {topic.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            <Clock className="w-3 h-3 mr-1" />
                            {topic.duration}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            <Users className="w-3 h-3 mr-1" />
                            {topic.learners}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Interactive Learning</span>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link to="/topics">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    View All Topics
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose DevPath?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive learning platform designed for developers at every stage of their journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Structured Learning Paths',
                description: 'Follow industry-validated roadmaps designed by experts to guide your learning journey from beginner to professional.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Hands-on Projects',
                description: 'Build real-world projects and gain practical experience while learning. Every concept is reinforced with practice.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'Join millions of learners worldwide. Get help, share knowledge, and grow together in our vibrant community.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Join millions of developers who have transformed their careers with our comprehensive learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roadmaps">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/80 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </div>
              <p className="text-slate-400 mb-4">
                Your comprehensive guide to becoming a professional developer.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Learning Paths</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/roadmaps/frontend" className="hover:text-white transition-colors">Frontend Development</Link></li>
                <li><Link to="/roadmaps/backend" className="hover:text-white transition-colors">Backend Development</Link></li>
                <li><Link to="/roadmaps/fullstack" className="hover:text-white transition-colors">Full Stack Development</Link></li>
                <li><Link to="/roadmaps/data-scientist" className="hover:text-white transition-colors">Data Science</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/topics" className="hover:text-white transition-colors">All Topics</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Practice Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coding Challenges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interview Prep</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800/50 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevPath. All rights reserved. Built with ❤️ for developers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
