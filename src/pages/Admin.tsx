import { useState } from 'react';
import { Header } from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Users, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Database, 
  Monitor, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  UserPlus,
  FileText,
  Server,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

const Admin = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock admin stats
  const stats = [
    {
      title: 'Total Users',
      value: '2,547',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Learners',
      value: '1,832',
      change: '+8%',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      title: 'Learning Paths',
      value: '47',
      change: '+3',
      icon: BookOpen,
      color: 'text-purple-600'
    },
    {
      title: 'Completion Rate',
      value: '89%',
      change: '+5%',
      icon: CheckCircle,
      color: 'text-emerald-600'
    }
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Completed React Fundamentals', time: '2 hours ago', type: 'completion' },
    { id: 2, user: 'Jane Smith', action: 'Started Full Stack Development', time: '4 hours ago', type: 'enrollment' },
    { id: 3, user: 'Mike Johnson', action: 'Uploaded new resource', time: '6 hours ago', type: 'content' },
    { id: 4, user: 'Sarah Wilson', action: 'Completed JavaScript Advanced', time: '8 hours ago', type: 'completion' },
    { id: 5, user: 'Tom Brown', action: 'Left feedback on Python course', time: '1 day ago', type: 'feedback' }
  ];

  const systemHealth = [
    { service: 'Database', status: 'healthy', uptime: '99.9%' },
    { service: 'API Server', status: 'healthy', uptime: '99.8%' },
    { service: 'CDN', status: 'warning', uptime: '98.5%' },
    { service: 'Auth Service', status: 'healthy', uptime: '99.9%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'completion': return CheckCircle;
      case 'enrollment': return UserPlus;
      case 'content': return FileText;
      case 'feedback': return MessageSquare;
      default: return Activity;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {user && (
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Shield className="w-3 h-3 mr-1" />
              Admin
            </Badge>
          )}
        </div>
      </Header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your learning platform and monitor system performance
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className={theme === 'dark' ? 'border-yellow-400 text-yellow-400' : 'border-blue-600 text-blue-600'}>
                <Monitor className="w-3 h-3 mr-1" />
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-success">
                        <TrendingUp className="w-3 h-3 inline mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-accent/20`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Admin Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest user activities and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => {
                      const Icon = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10">
                          <Icon className="w-4 h-4 text-primary" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">{activity.user}</p>
                            <p className="text-sm text-muted-foreground">{activity.action}</p>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {activity.time}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    System Health
                  </CardTitle>
                  <CardDescription>Monitor system services and uptime</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemHealth.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/10">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            service.status === 'healthy' ? 'bg-green-500' : 
                            service.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="font-medium text-foreground">{service.service}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getStatusColor(service.status)}>
                            {service.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{service.uptime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage users, roles, and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">User Management</h3>
                    <p className="text-muted-foreground mb-4">Advanced user management features coming soon</p>
                    <Button variant="outline">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add New User
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage learning paths, topics, and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Content Management</h3>
                    <p className="text-muted-foreground mb-4">Create and manage learning content</p>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Add New Content
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>View detailed analytics and generate reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center h-64">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Dashboard</h3>
                    <p className="text-muted-foreground mb-4">Detailed analytics and reporting tools</p>
                    <Button variant="outline">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Theme Settings */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Theme Settings
                  </CardTitle>
                  <CardDescription>Customize the appearance and theme</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Current Theme</h4>
                      <p className="text-sm text-muted-foreground">
                        {theme === 'dark' ? 'Dark mode is enabled' : 'Light mode is enabled'}
                      </p>
                    </div>
                    <ThemeToggle />
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Theme Preview</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-primary text-primary-foreground text-center text-sm">
                        Primary Color
                      </div>
                      <div className="p-3 rounded-lg bg-secondary text-secondary-foreground text-center text-sm">
                        Secondary Color
                      </div>
                      <div className="p-3 rounded-lg bg-accent text-accent-foreground text-center text-sm">
                        Accent Color
                      </div>
                      <div className="p-3 rounded-lg bg-muted text-muted-foreground text-center text-sm">
                        Muted Color
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* General Settings */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    General Settings
                  </CardTitle>
                  <CardDescription>Platform configuration and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">Platform Status</h4>
                        <p className="text-sm text-muted-foreground">All systems operational</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Online
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">Maintenance Mode</h4>
                        <p className="text-sm text-muted-foreground">Temporarily disable public access</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="w-3 h-3 mr-1" />
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">Backup Status</h4>
                        <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Database className="w-3 h-3 mr-1" />
                        Backup Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;