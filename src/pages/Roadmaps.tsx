
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, Star, Users, ChevronRight, Code, Database, Globe, Smartphone, Shield, Palette, BarChart, Zap, Cpu, Cloud, TrendingUp, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const Roadmaps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const roadmaps = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      subtitle: 'Modern Web Development Path',
      description: 'Master HTML, CSS, JavaScript, React, and modern frontend tools to build amazing user interfaces',
      category: 'Web Development',
      level: 'Beginner to Advanced',
      duration: '6-8 months',
      topics: 12,
      learners: '2.5M',
      rating: 4.9,
      completionRate: 78,
      difficulty: 'Progressive',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Git'],
      projects: 8,
      popularity: 98,
      trending: true
    },
    {
      id: 'backend',
      title: 'Backend Development',
      subtitle: 'Server-Side Programming Path',
      description: 'Learn server-side programming, databases, APIs, and deployment to build robust backend systems',
      category: 'Web Development',
      level: 'Intermediate to Advanced',
      duration: '7-9 months',
      topics: 15,
      learners: '1.8M',
      rating: 4.8,
      completionRate: 72,
      difficulty: 'Intermediate',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Docker'],
      projects: 10,
      popularity: 95,
      trending: false
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      subtitle: 'Complete Web Development Journey',
      description: 'Comprehensive path covering both frontend and backend development for complete web applications',
      category: 'Web Development',
      level: 'Beginner to Expert',
      duration: '10-12 months',
      topics: 20,
      learners: '1.2M',
      rating: 4.9,
      completionRate: 65,
      difficulty: 'Comprehensive',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Design', 'DevOps'],
      projects: 15,
      popularity: 97,
      trending: true
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      subtitle: 'iOS & Android Development',
      description: 'Build cross-platform mobile applications using React Native, Flutter, or native technologies',
      category: 'Mobile Development',
      level: 'Intermediate',
      duration: '8-10 months',
      topics: 14,
      learners: '940K',
      rating: 4.7,
      completionRate: 68,
      difficulty: 'Intermediate',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI/UX', 'App Store Deployment'],
      projects: 12,
      popularity: 89,
      trending: true
    },
    {
      id: 'devops',
      title: 'DevOps Engineer',
      subtitle: 'Infrastructure & Automation',
      description: 'Master containerization, CI/CD, cloud platforms, and infrastructure automation',
      category: 'DevOps & Cloud',
      level: 'Advanced',
      duration: '6-8 months',
      topics: 16,
      learners: '670K',
      rating: 4.8,
      completionRate: 61,
      difficulty: 'Advanced',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Monitoring'],
      projects: 8,
      popularity: 91,
      trending: true
    },
    {
      id: 'data-scientist',
      title: 'Data Science',
      subtitle: 'Analytics & Machine Learning',
      description: 'Learn data analysis, visualization, statistics, and machine learning to extract insights from data',
      category: 'Data Science',
      level: 'Intermediate to Advanced',
      duration: '9-12 months',
      topics: 18,
      learners: '1.1M',
      rating: 4.8,
      completionRate: 58,
      difficulty: 'Advanced',
      icon: BarChart,
      color: 'from-teal-500 to-blue-500',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'SQL'],
      projects: 10,
      popularity: 93,
      trending: true
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Specialist',
      subtitle: 'Security & Ethical Hacking',
      description: 'Protect systems and data by learning cybersecurity principles, ethical hacking, and security tools',
      category: 'Cybersecurity',
      level: 'Advanced',
      duration: '8-10 months',
      topics: 14,
      learners: '520K',
      rating: 4.9,
      completionRate: 71,
      difficulty: 'Advanced',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: ['Network Security', 'Penetration Testing', 'Cryptography', 'Incident Response', 'Security Tools'],
      projects: 6,
      popularity: 87,
      trending: false
    },
    {
      id: 'ai-ml-engineer',
      title: 'AI/ML Engineer',
      subtitle: 'Artificial Intelligence & Machine Learning',
      description: 'Build intelligent systems using machine learning, deep learning, and AI technologies',
      category: 'AI & Machine Learning',
      level: 'Advanced',
      duration: '10-14 months',
      topics: 22,
      learners: '780K',
      rating: 4.8,
      completionRate: 54,
      difficulty: 'Expert',
      icon: Cpu,
      color: 'from-violet-500 to-purple-500',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision'],
      projects: 12,
      popularity: 94,
      trending: true
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      subtitle: 'User Interface & Experience Design',
      description: 'Design beautiful and intuitive user interfaces with focus on user experience and usability',
      category: 'Design',
      level: 'Beginner to Advanced',
      duration: '5-7 months',
      topics: 11,
      learners: '1.3M',
      rating: 4.7,
      completionRate: 81,
      difficulty: 'Progressive',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Usability Testing'],
      projects: 14,
      popularity: 92,
      trending: false
    }
  ];

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         roadmap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         roadmap.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || roadmap.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || roadmap.level.includes(selectedLevel);
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const categories = [...new Set(roadmaps.map(r => r.category))];

  return (
    <div className="min-h-screen bg-[var(--gradient-secondary)]">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link to="/roadmaps" className="text-white font-medium">Roadmaps</Link>
              <Link to="/topics" className="text-slate-300 hover:text-white transition-colors">Topics</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Career <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Roadmaps</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Structured learning paths designed by industry experts to guide your journey from beginner to professional.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <Target className="w-4 h-4" />
              <span>{roadmaps.length} Career Paths</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>8M+ Learners</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4" />
              <span>Industry Validated</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search roadmaps, technologies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-slate-800/50 border-slate-700 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48 bg-slate-800/50 border-slate-700 text-white">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Roadmaps Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Roadmaps' : selectedCategory}
            </h2>
            <span className="text-slate-400">{filteredRoadmaps.length} roadmaps found</span>
          </div>
          
          <div className="grid gap-6">
            {filteredRoadmaps.map(roadmap => {
              const Icon = roadmap.icon;
              return (
                <Link key={roadmap.id} to={`/roadmaps/${roadmap.id}`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.01]">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`w-16 h-16 bg-gradient-to-r ${roadmap.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-semibold text-white">{roadmap.title}</h3>
                              {roadmap.trending && (
                                <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 text-xs">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs">
                                {roadmap.popularity}% Popular
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-sm mb-2">{roadmap.subtitle}</p>
                            <p className="text-slate-300 mb-4 leading-relaxed">{roadmap.description}</p>
                            
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
                              <Badge variant="outline" className="border-slate-600 text-slate-300">
                                <Star className="w-3 h-3 mr-1" />
                                {roadmap.rating}
                              </Badge>
                            </div>
                            
                            <div className="mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-slate-400">Completion Rate</span>
                                <span className="text-sm text-slate-300">{roadmap.completionRate}%</span>
                              </div>
                              <Progress value={roadmap.completionRate} className="h-2" />
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-4">
                              {roadmap.skills.slice(0, 6).map(skill => (
                                <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {roadmap.skills.length > 6 && (
                                <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                  +{roadmap.skills.length - 6}
                                </Badge>
                              )}
                            </div>
                            
                            <div className="text-sm text-slate-400">
                              <span className="font-medium">Level: </span>
                              {roadmap.level} • {roadmap.projects} Projects
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-slate-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
