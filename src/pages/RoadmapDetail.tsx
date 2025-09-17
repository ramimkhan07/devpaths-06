import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Bookmark, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Circle, CheckCircle, Users, Clock, BookOpen } from 'lucide-react';
import { PdfDownloadButton } from '@/components/PdfDownloadButton';
import { ResourceCard } from '@/components/ResourceCard';
import { getResourcesByTopic, platformLogos } from '@/data/resourcesDatabase';

const RoadmapDetail = () => {
  const { id } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userProgress, setUserProgress] = useState(60);
  const [resourceFilter, setResourceFilter] = useState('all');

  const roadmapData = {
    'frontend': {
      title: 'Frontend Development Roadmap',
      description: 'A complete guide to becoming a Frontend Developer in 2024. Covers HTML, CSS, JavaScript, React, and more!',
      estimatedTime: '6-9 months',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 'html-css',
          title: 'HTML & CSS Fundamentals',
          description: 'Master the building blocks of the web: structuring content with HTML and styling with CSS.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 12
        },
        {
          id: 'javascript',
          title: 'JavaScript Essentials',
          description: 'Learn the fundamentals of JavaScript to add interactivity and dynamic behavior to your websites.',
          difficulty: 'Beginner',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'react',
          title: 'React: Building Modern UIs',
          description: 'Dive into React, the most popular JavaScript library for building user interfaces, and create reusable components.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 25
        },
        {
          id: 'state-management',
          title: 'State Management with Redux',
          description: 'Manage application state efficiently using Redux, a predictable state container for JavaScript apps.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'testing-react',
          title: 'Testing React Components',
          description: 'Ensure the reliability of your React applications by writing unit and integration tests with Jest and React Testing Library.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        },
        {
          id: 'nextjs',
          title: 'Next.js: Production-Ready Framework',
          description: 'Build fullstack React applications with Next.js, a framework for server-side rendering and static site generation.',
          difficulty: 'Advanced',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'graphql',
          title: 'GraphQL: API Development',
          description: 'Learn GraphQL, a query language for your API, and build efficient and flexible data fetching layers.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'deployment',
          title: 'Deployment & DevOps',
          description: 'Deploy and maintain your frontend applications using modern DevOps practices and tools.',
          difficulty: 'Advanced',
          estimatedTime: '1-2 weeks',
          resources: 8
        }
      ],
      completionRate: '78%',
      learners: '850K',
      rating: 4.7,
      reviews: 9240,
      lastUpdated: 'January 2024',
      category: 'Web Development',
      skillsGained: [
        'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Next.js', 'GraphQL', 'Testing', 'Deployment'
      ],
      relatedRoadmaps: [
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '120 hours',
        exercisesDone: '25 of 50',
        quizScore: '85%'
      }
    },
    'backend': {
      title: 'Backend Development Roadmap',
      description: 'Your guide to becoming a Backend Developer in 2024. Covers Node.js, Python, Databases, and more!',
      estimatedTime: '9-12 months',
      difficulty: 'Intermediate',
      topics: [
        {
          id: 'nodejs',
          title: 'Node.js & Express',
          description: 'Build server-side applications with Node.js and the Express framework.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 20
        },
        {
          id: 'python',
          title: 'Python & Django',
          description: 'Develop robust backend systems with Python and the Django web framework.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'databases',
          title: 'Databases & SQL',
          description: 'Master relational databases and SQL for efficient data storage and retrieval.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'nosql',
          title: 'NoSQL Databases',
          description: 'Explore NoSQL databases like MongoDB for flexible and scalable data storage solutions.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'api-design',
          title: 'API Design & REST',
          description: 'Design and implement RESTful APIs for seamless communication between frontend and backend systems.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'authentication',
          title: 'Authentication & Security',
          description: 'Secure your backend applications with robust authentication and authorization mechanisms.',
          difficulty: 'Advanced',
          estimatedTime: '2-3 weeks',
          resources: 14
        },
        {
          id: 'testing-backend',
          title: 'Testing Backend Systems',
          description: 'Write comprehensive unit and integration tests for your backend applications.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 10
        },
        {
          id: 'deployment',
          title: 'Deployment & DevOps',
          description: 'Deploy and manage your backend applications using modern DevOps practices and tools.',
          difficulty: 'Advanced',
          estimatedTime: '1-2 weeks',
          resources: 8
        }
      ],
      completionRate: '65%',
      learners: '620K',
      rating: 4.6,
      reviews: 6890,
      lastUpdated: 'January 2024',
      category: 'Web Development',
      skillsGained: [
        'Node.js', 'Python', 'SQL', 'NoSQL', 'API Design', 'REST', 'Security', 'Testing', 'Deployment'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '150 hours',
        exercisesDone: '30 of 60',
        quizScore: '90%'
      }
    },
    'devops': {
      title: 'DevOps Roadmap',
      description: 'Your path to becoming a DevOps Engineer in 2024. Covers CI/CD, Automation, Cloud, and more!',
      estimatedTime: '12-18 months',
      difficulty: 'Advanced',
      topics: [
        {
          id: 'linux',
          title: 'Linux Fundamentals',
          description: 'Master the Linux command line and system administration basics.',
          difficulty: 'Beginner',
          estimatedTime: '2-3 weeks',
          resources: 15
        },
        {
          id: 'networking',
          title: 'Networking Basics',
          description: 'Understand networking concepts and protocols for building scalable infrastructure.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 18
        },
        {
          id: 'cloud-computing',
          title: 'Cloud Computing Platforms',
          description: 'Learn cloud computing with AWS, Azure, and Google Cloud Platform.',
          difficulty: 'Intermediate',
          estimatedTime: '4-6 weeks',
          resources: 25
        },
        {
          id: 'cicd',
          title: 'CI/CD Pipelines',
          description: 'Implement Continuous Integration and Continuous Deployment pipelines with Jenkins and GitLab CI.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'automation',
          title: 'Automation Tools',
          description: 'Automate infrastructure management with Ansible, Terraform, and Chef.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 22
        },
        {
          id: 'containerization',
          title: 'Containerization with Docker',
          description: 'Containerize applications with Docker for consistent deployment across environments.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'orchestration',
          title: 'Orchestration with Kubernetes',
          description: 'Orchestrate container deployments with Kubernetes for high availability and scalability.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 24
        },
        {
          id: 'monitoring',
          title: 'Monitoring & Logging',
          description: 'Monitor application performance and system health with Prometheus, Grafana, and ELK stack.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 15
        }
      ],
      completionRate: '55%',
      learners: '480K',
      rating: 4.5,
      reviews: 5120,
      lastUpdated: 'January 2024',
      category: 'DevOps',
      skillsGained: [
        'Linux', 'Networking', 'Cloud Computing', 'CI/CD', 'Automation', 'Docker', 'Kubernetes', 'Monitoring', 'Logging'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'fullstack', title: 'Fullstack Development Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '200 hours',
        exercisesDone: '40 of 80',
        quizScore: '75%'
      }
    },
    'fullstack': {
      title: 'Fullstack Development Roadmap',
      description: 'The ultimate guide to becoming a Fullstack Developer in 2024. Combines Frontend, Backend, and DevOps skills!',
      estimatedTime: '18-24 months',
      difficulty: 'Advanced',
      topics: [
        {
          id: 'frontend',
          title: 'Frontend Development',
          description: 'Master frontend technologies including HTML, CSS, JavaScript, and React.',
          difficulty: 'Intermediate',
          estimatedTime: '6-9 months',
          resources: 30
        },
        {
          id: 'backend',
          title: 'Backend Development',
          description: 'Build robust backend systems with Node.js, Python, and databases.',
          difficulty: 'Intermediate',
          estimatedTime: '9-12 months',
          resources: 35
        },
        {
          id: 'devops',
          title: 'DevOps Practices',
          description: 'Implement DevOps practices for continuous integration, deployment, and monitoring.',
          difficulty: 'Advanced',
          estimatedTime: '12-18 months',
          resources: 40
        },
        {
          id: 'databases',
          title: 'Database Management',
          description: 'Manage relational and NoSQL databases for efficient data storage and retrieval.',
          difficulty: 'Intermediate',
          estimatedTime: '3-4 weeks',
          resources: 20
        },
        {
          id: 'api-design',
          title: 'API Design & Development',
          description: 'Design and develop RESTful and GraphQL APIs for seamless communication.',
          difficulty: 'Intermediate',
          estimatedTime: '2-3 weeks',
          resources: 18
        },
        {
          id: 'cloud-architecture',
          title: 'Cloud Architecture',
          description: 'Design scalable and resilient cloud architectures with AWS, Azure, and GCP.',
          difficulty: 'Advanced',
          estimatedTime: '4-6 weeks',
          resources: 25
        },
        {
          id: 'security',
          title: 'Security Best Practices',
          description: 'Implement security best practices for protecting your applications and data.',
          difficulty: 'Advanced',
          estimatedTime: '2-3 weeks',
          resources: 16
        },
        {
          id: 'testing',
          title: 'Testing & Quality Assurance',
          description: 'Ensure the quality of your applications with comprehensive testing strategies.',
          difficulty: 'Intermediate',
          estimatedTime: '1-2 weeks',
          resources: 12
        }
      ],
      completionRate: '45%',
      learners: '320K',
      rating: 4.4,
      reviews: 3850,
      lastUpdated: 'January 2024',
      category: 'Web Development',
      skillsGained: [
        'Frontend', 'Backend', 'DevOps', 'Databases', 'API Design', 'Cloud Architecture', 'Security', 'Testing'
      ],
      relatedRoadmaps: [
        { id: 'frontend', title: 'Frontend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'backend', title: 'Backend Development Roadmap', difficulty: 'Intermediate' },
        { id: 'devops', title: 'DevOps Roadmap', difficulty: 'Advanced' }
      ],
      stats: {
        timeSpent: '250 hours',
        exercisesDone: '50 of 100',
        quizScore: '80%'
      }
    }
  };

  const roadmap = roadmapData[id as keyof typeof roadmapData] || roadmapData['frontend'];

  // Add PDF data preparation
  const preparePdfData = () => {
    return {
      title: roadmap.title,
      description: roadmap.description,
      topics: roadmap.topics.map(topic => ({
        id: topic.id,
        title: topic.title,
        description: topic.description,
        difficulty: topic.difficulty,
        estimatedTime: topic.estimatedTime,
        resources: getResourcesByTopic(topic.id).slice(0, 5).map(resource => ({
          title: resource.title,
          url: resource.url,
          type: resource.type
        }))
      }))
    };
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-secondary)]">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Roadmaps
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <PdfDownloadButton roadmapData={preparePdfData()} />
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Share className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-slate-400 hover:text-yellow-400"
              >
                {isBookmarked ? 
                  <Star className="w-4 h-4 fill-current text-yellow-400" /> : 
                  <Bookmark className="w-4 h-4" />
                }
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Roadmap Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{roadmap.title}</h1>
          <h2 className="text-xl text-slate-300 mb-4">{roadmap.description}</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Clock className="w-3 h-3 mr-1" />
              {roadmap.estimatedTime}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <BookOpen className="w-3 h-3 mr-1" />
              {roadmap.topics.reduce((acc, topic) => acc + topic.resources, 0)} resources
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Users className="w-3 h-3 mr-1" />
              {roadmap.learners} learners
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              <Star className="w-3 h-3 mr-1" />
              {roadmap.rating} ({roadmap.reviews} reviews)
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {roadmap.skillsGained.slice(0, 6).map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300">
                {skill}
              </Badge>
            ))}
            {roadmap.skillsGained.length > 6 && (
              <Badge variant="secondary" className="bg-slate-700/50 text-slate-300">
                +{roadmap.skillsGained.length - 6} more
              </Badge>
            )}
          </div>
        </div>

        {/* Enhanced Tabs with Resources */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Learning Path
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              All Resources
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Progress
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="space-y-6">
            {/* Roadmap Visualization */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Roadmap Overview</CardTitle>
                <CardDescription className="text-slate-400">
                  Follow this path to achieve your goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmap.topics.map((topic, index) => (
                    <div key={topic.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg text-blue-400">{index + 1}.</span>
                        <div>
                          <h3 className="text-white font-medium">{topic.title}</h3>
                          <p className="text-slate-400 text-sm">{topic.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        <Clock className="w-3 h-3 mr-1" />
                        {topic.estimatedTime}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Learning Resources</h2>
                <p className="text-slate-400 mb-6">Curated resources from top platforms and educators</p>
              </div>

              {/* Resource Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant={resourceFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('all')}
                  className="border-slate-600"
                >
                  All Resources
                </Button>
                <Button
                  variant={resourceFilter === 'free' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('free')}
                  className="border-slate-600"
                >
                  Free Only
                </Button>
                <Button
                  variant={resourceFilter === 'video' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('video')}
                  className="border-slate-600"
                >
                  Videos
                </Button>
                <Button
                  variant={resourceFilter === 'course' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('course')}
                  className="border-slate-600"
                >
                  Courses
                </Button>
                <Button
                  variant={resourceFilter === 'practice' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setResourceFilter('practice')}
                  className="border-slate-600"
                >
                  Practice
                </Button>
              </div>

              {/* Platform Showcase */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Featured Platforms</CardTitle>
                  <CardDescription className="text-slate-400">
                    Learn from the best educational platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {Object.entries(platformLogos).slice(0, 12).map(([platform, emoji]) => (
                      <div key={platform} className="flex flex-col items-center p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors">
                        <span className="text-2xl mb-1">{emoji}</span>
                        <span className="text-xs text-slate-400 text-center">{platform}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Resources Grid */}
              <div className="grid gap-6">
                {roadmap.topics.map((topic) => {
                  const topicResources = getResourcesByTopic(topic.id);
                  const filteredResources = topicResources.filter(resource => {
                    if (resourceFilter === 'all') return true;
                    if (resourceFilter === 'free') return resource.free;
                    return resource.type === resourceFilter;
                  });

                  if (filteredResources.length === 0) return null;

                  return (
                    <div key={topic.id} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                        <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300">
                          {filteredResources.length} resources
                        </Badge>
                      </div>
                      <div className="grid gap-4">
                        {filteredResources.slice(0, 3).map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                        {filteredResources.length > 3 && (
                          <div className="text-center">
                            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                              View {filteredResources.length - 3} more resources
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Completion</span>
                      <span className="text-white">{userProgress}%</span>
                    </div>
                    <Progress value={userProgress} className="h-2" />
                  </div>
                  <Separator className="bg-slate-700" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Time Spent</span>
                      <span className="text-white">{roadmap.stats.timeSpent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Exercises Done</span>
                      <span className="text-white">{roadmap.stats.exercisesDone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Quiz Score</span>
                      <span className="text-white">{roadmap.stats.quizScore}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Community Discussion</CardTitle>
                <CardDescription className="text-slate-400">
                  Connect with other learners and share your progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">User123</h4>
                      <p className="text-slate-400 text-sm">Just finished the HTML & CSS section. On to JavaScript!</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">DevStudent</h4>
                      <p className="text-slate-400 text-sm">Anyone have tips for mastering React hooks?</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">CodeNinja</h4>
                      <p className="text-slate-400 text-sm">I found this awesome resource for learning Next.js: [link]</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RoadmapDetail;
