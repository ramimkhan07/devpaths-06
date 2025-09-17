
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Clock, Star, Users, ChevronRight, Code, Database, Globe, Smartphone, Shield, Palette, BarChart, Zap, Cpu, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Topics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'frontend', name: 'Frontend Development', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', name: 'Backend Development', icon: Database, color: 'from-green-500 to-emerald-500' },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { id: 'devops', name: 'DevOps & Cloud', icon: Cloud, color: 'from-orange-500 to-red-500' },
    { id: 'data-science', name: 'Data Science', icon: BarChart, color: 'from-indigo-500 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 'ui-ux', name: 'UI/UX Design', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Cpu, color: 'from-violet-500 to-purple-500' },
    { id: 'game-dev', name: 'Game Development', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Code, color: 'from-cyan-500 to-blue-500' },
    { id: 'testing', name: 'Testing & QA', icon: Shield, color: 'from-teal-500 to-green-500' },
    { id: 'algorithms', name: 'Algorithms & DS', icon: Cpu, color: 'from-purple-500 to-indigo-500' }
  ];

  const topics = [
    {
      id: 'react-basics',
      title: 'React Fundamentals',
      description: 'Master the building blocks of modern React development',
      category: 'frontend',
      difficulty: 'Intermediate',
      estimatedTime: '3-4 weeks',
      learners: '1.2M',
      rating: 4.8,
      prerequisites: ['JavaScript', 'HTML/CSS'],
      skills: ['Components', 'Props', 'State', 'JSX', 'Hooks'],
      popularity: 98
    },
    {
      id: 'javascript-advanced',
      title: 'Advanced JavaScript',
      description: 'Deep dive into ES6+, async programming, and design patterns',
      category: 'frontend',
      difficulty: 'Advanced',
      estimatedTime: '4-6 weeks',
      learners: '890K',
      rating: 4.9,
      prerequisites: ['JavaScript Basics'],
      skills: ['ES6+', 'Promises', 'Async/Await', 'Closures', 'Prototypes'],
      popularity: 95
    },
    {
      id: 'nodejs-backend',
      title: 'Node.js Backend Development',
      description: 'Build scalable server-side applications with Node.js',
      category: 'backend',
      difficulty: 'Intermediate',
      estimatedTime: '5-7 weeks',
      learners: '760K',
      rating: 4.7,
      prerequisites: ['JavaScript', 'HTTP Basics'],
      skills: ['Express.js', 'APIs', 'Database Integration', 'Authentication'],
      popularity: 92
    },
    {
      id: 'python-fundamentals',
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced programming concepts',
      category: 'backend',
      difficulty: 'Beginner',
      estimatedTime: '4-5 weeks',
      learners: '2.1M',
      rating: 4.8,
      prerequisites: ['None'],
      skills: ['Python Syntax', 'Data Structures', 'OOP', 'Libraries'],
      popularity: 97
    },
    {
      id: 'react-native',
      title: 'React Native Development',
      description: 'Build cross-platform mobile apps with React Native',
      category: 'mobile',
      difficulty: 'Intermediate',
      estimatedTime: '6-8 weeks',
      learners: '540K',
      rating: 4.6,
      prerequisites: ['React', 'JavaScript'],
      skills: ['Mobile UI', 'Navigation', 'Native Modules', 'Publishing'],
      popularity: 88
    },
    {
      id: 'docker-kubernetes',
      title: 'Docker & Kubernetes',
      description: 'Containerization and orchestration for modern applications',
      category: 'devops',
      difficulty: 'Advanced',
      estimatedTime: '5-7 weeks',
      learners: '420K',
      rating: 4.7,
      prerequisites: ['Linux', 'Command Line'],
      skills: ['Containerization', 'Orchestration', 'CI/CD', 'Monitoring'],
      popularity: 89
    },
    {
      id: 'data-analysis-python',
      title: 'Data Analysis with Python',
      description: 'Analyze and visualize data using Python and popular libraries',
      category: 'data-science',
      difficulty: 'Intermediate',
      estimatedTime: '6-8 weeks',
      learners: '680K',
      rating: 4.8,
      prerequisites: ['Python Basics', 'Statistics'],
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning'],
      popularity: 91
    },
    {
      id: 'ethical-hacking',
      title: 'Ethical Hacking Fundamentals',
      description: 'Learn cybersecurity and ethical hacking techniques',
      category: 'cybersecurity',
      difficulty: 'Advanced',
      estimatedTime: '8-10 weeks',
      learners: '320K',
      rating: 4.9,
      prerequisites: ['Networking', 'Linux', 'Programming'],
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Tools'],
      popularity: 85
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design Principles',
      description: 'Master user interface and user experience design',
      category: 'ui-ux',
      difficulty: 'Beginner',
      estimatedTime: '4-6 weeks',
      learners: '920K',
      rating: 4.7,
      prerequisites: ['Design Thinking'],
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      popularity: 93
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning with Python',
      description: 'Build intelligent systems using machine learning algorithms',
      category: 'ai-ml',
      difficulty: 'Advanced',
      estimatedTime: '10-12 weeks',
      learners: '580K',
      rating: 4.8,
      prerequisites: ['Python', 'Mathematics', 'Statistics'],
      skills: ['Scikit-learn', 'TensorFlow', 'Deep Learning', 'Neural Networks'],
      popularity: 94
    },
    {
      id: 'typescript',
      title: 'TypeScript Development',
      description: 'Strongly typed JavaScript for large-scale applications',
      category: 'frontend',
      difficulty: 'Intermediate',
      estimatedTime: '3-4 weeks',
      learners: '850K',
      rating: 4.8,
      prerequisites: ['JavaScript'],
      skills: ['Type System', 'Interfaces', 'Generics', 'Decorators'],
      popularity: 91
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Computing',
      description: 'Master Amazon Web Services for cloud deployment',
      category: 'devops',
      difficulty: 'Intermediate',
      estimatedTime: '6-8 weeks',
      learners: '720K',
      rating: 4.7,
      prerequisites: ['Linux', 'Networking'],
      skills: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
      popularity: 89
    },
    {
      id: 'flutter-development',
      title: 'Flutter Cross-Platform Development',
      description: 'Build mobile apps for iOS and Android with Flutter',
      category: 'mobile',
      difficulty: 'Intermediate',
      estimatedTime: '5-7 weeks',
      learners: '620K',
      rating: 4.6,
      prerequisites: ['Dart', 'OOP'],
      skills: ['Widgets', 'State Management', 'Navigation', 'APIs'],
      popularity: 87
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain & Smart Contracts',
      description: 'Build decentralized applications and smart contracts',
      category: 'blockchain',
      difficulty: 'Advanced',
      estimatedTime: '8-10 weeks',
      learners: '340K',
      rating: 4.5,
      prerequisites: ['JavaScript', 'Cryptography'],
      skills: ['Solidity', 'Web3.js', 'Ethereum', 'DeFi'],
      popularity: 83
    },
    {
      id: 'unity-game-dev',
      title: 'Unity Game Development',
      description: 'Create 2D and 3D games with Unity engine',
      category: 'game-dev',
      difficulty: 'Intermediate',
      estimatedTime: '7-9 weeks',
      learners: '480K',
      rating: 4.7,
      prerequisites: ['C#', 'Basic Programming'],
      skills: ['Unity Engine', 'Game Physics', 'Animation', 'UI'],
      popularity: 86
    },
    {
      id: 'automated-testing',
      title: 'Automated Testing',
      description: 'Master testing frameworks and methodologies',
      category: 'testing',
      difficulty: 'Intermediate',
      estimatedTime: '4-6 weeks',
      learners: '390K',
      rating: 4.8,
      prerequisites: ['Programming Basics'],
      skills: ['Jest', 'Cypress', 'Selenium', 'TDD'],
      popularity: 84
    },
    {
      id: 'algorithms-data-structures',
      title: 'Algorithms & Data Structures',
      description: 'Essential computer science fundamentals',
      category: 'algorithms',
      difficulty: 'Intermediate',
      estimatedTime: '8-12 weeks',
      learners: '1.1M',
      rating: 4.9,
      prerequisites: ['Programming Basics'],
      skills: ['Arrays', 'Trees', 'Graphs', 'Sorting', 'Searching'],
      popularity: 96
    },
    {
      id: 'golang-backend',
      title: 'Go Backend Development',
      description: 'Build high-performance backend services with Go',
      category: 'backend',
      difficulty: 'Intermediate',
      estimatedTime: '5-7 weeks',
      learners: '320K',
      rating: 4.7,
      prerequisites: ['Programming Basics'],
      skills: ['Go Syntax', 'Goroutines', 'Channels', 'Web Servers'],
      popularity: 85
    },
    {
      id: 'rust-programming',
      title: 'Rust Systems Programming',
      description: 'Memory-safe systems programming with Rust',
      category: 'backend',
      difficulty: 'Advanced',
      estimatedTime: '6-9 weeks',
      learners: '280K',
      rating: 4.8,
      prerequisites: ['Programming Concepts'],
      skills: ['Ownership', 'Borrowing', 'Concurrency', 'WebAssembly'],
      popularity: 82
    },
    {
      id: 'figma-design',
      title: 'Figma Design Mastery',
      description: 'Professional UI/UX design with Figma',
      category: 'ui-ux',
      difficulty: 'Beginner',
      estimatedTime: '3-5 weeks',
      learners: '680K',
      rating: 4.6,
      prerequisites: ['Design Basics'],
      skills: ['Prototyping', 'Components', 'Auto Layout', 'Design Systems'],
      popularity: 88
    },
    {
      id: 'swift-ios',
      title: 'Swift iOS Development',
      description: 'Build native iOS applications with Swift',
      category: 'mobile',
      difficulty: 'Intermediate',
      estimatedTime: '6-8 weeks',
      learners: '440K',
      rating: 4.7,
      prerequisites: ['Programming Basics'],
      skills: ['Swift', 'UIKit', 'SwiftUI', 'Core Data'],
      popularity: 84
    },
    {
      id: 'angular-framework',
      title: 'Angular Framework',
      description: 'Build enterprise web applications with Angular',
      category: 'frontend',
      difficulty: 'Intermediate',
      estimatedTime: '5-7 weeks',
      learners: '520K',
      rating: 4.5,
      prerequisites: ['TypeScript', 'JavaScript'],
      skills: ['Components', 'Services', 'Routing', 'RxJS'],
      popularity: 81
    },
    {
      id: 'vue-framework',
      title: 'Vue.js Framework',
      description: 'Progressive JavaScript framework for UI development',
      category: 'frontend',
      difficulty: 'Beginner',
      estimatedTime: '4-6 weeks',
      learners: '420K',
      rating: 4.6,
      prerequisites: ['JavaScript', 'HTML/CSS'],
      skills: ['Vue Components', 'Vuex', 'Vue Router', 'Composition API'],
      popularity: 83
    },
    {
      id: 'tensorflow-deep-learning',
      title: 'Deep Learning with TensorFlow',
      description: 'Advanced neural networks and deep learning',
      category: 'ai-ml',
      difficulty: 'Advanced',
      estimatedTime: '12-16 weeks',
      learners: '380K',
      rating: 4.8,
      prerequisites: ['Python', 'Machine Learning', 'Mathematics'],
      skills: ['Neural Networks', 'CNNs', 'RNNs', 'Computer Vision'],
      popularity: 90
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Advanced cybersecurity and ethical hacking',
      category: 'cybersecurity',
      difficulty: 'Advanced',
      estimatedTime: '10-14 weeks',
      learners: '240K',
      rating: 4.9,
      prerequisites: ['Networking', 'Linux', 'Security Basics'],
      skills: ['Metasploit', 'Burp Suite', 'Nmap', 'Social Engineering'],
      popularity: 87
    }
  ];

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || topic.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Code;
  };

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
              <Link to="/roadmaps" className="text-slate-300 hover:text-white transition-colors">Roadmaps</Link>
              <Link to="/topics" className="text-white font-medium">Topics</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Topics</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Dive deep into individual topics and technologies. Master the skills that matter most in your development journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{topics.length} Topics</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>5M+ Learners</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>4.8 Average Rating</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search topics, technologies, or skills..."
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
                  <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full md:w-48 bg-slate-800/50 border-slate-700 text-white">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`h-auto p-4 flex flex-col items-center space-y-2 border border-slate-700/50 hover:bg-slate-800/50 ${
                    selectedCategory === category.id ? 'bg-slate-800/50 border-slate-600' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white text-center">{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Topics' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-slate-400">{filteredTopics.length} topics found</span>
          </div>
          
          <div className="grid gap-6">
            {filteredTopics.map(topic => {
              const Icon = getCategoryIcon(topic.category);
              return (
                <Link key={topic.id} to={`/topics/${topic.id}`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-8 h-8 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                              <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 text-xs">
                                {topic.popularity}% Popular
                              </Badge>
                            </div>
                            <p className="text-slate-300 mb-4 leading-relaxed">{topic.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className={getDifficultyColor(topic.difficulty)}>
                                {topic.difficulty}
                              </Badge>
                              <Badge variant="outline" className="border-slate-600 text-slate-300">
                                <Clock className="w-3 h-3 mr-1" />
                                {topic.estimatedTime}
                              </Badge>
                              <Badge variant="outline" className="border-slate-600 text-slate-300">
                                <Users className="w-3 h-3 mr-1" />
                                {topic.learners}
                              </Badge>
                              <Badge variant="outline" className="border-slate-600 text-slate-300">
                                <Star className="w-3 h-3 mr-1" />
                                {topic.rating}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-4">
                              {topic.skills.slice(0, 5).map(skill => (
                                <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {topic.skills.length > 5 && (
                                <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                  +{topic.skills.length - 5}
                                </Badge>
                              )}
                            </div>
                            
                            {topic.prerequisites.length > 0 && (
                              <div className="text-sm text-slate-400">
                                <span className="font-medium">Prerequisites: </span>
                                {topic.prerequisites.join(', ')}
                              </div>
                            )}
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

export default Topics;
