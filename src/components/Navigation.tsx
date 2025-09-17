import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Menu, X, Home, Map, BookOpen, Brain, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className = "" }: NavigationProps) => {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/roadmaps', label: 'Roadmaps', icon: Map },
    { path: '/topics', label: 'Topics', icon: BookOpen },
    { path: '/quiz', label: 'Quiz & Interview', icon: Brain },
  ];

  return (
    <nav className={`hidden md:flex space-x-6 ${className}`}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-medium transition-colors ${
            location.pathname === item.path
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
  showNav?: boolean;
}

export const Header = ({ children, showNav = true }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.user_metadata?.avatar_url} alt={user?.email || ''} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.email?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">{user?.user_metadata?.full_name || user?.email}</p>
            <p className="w-[200px] truncate text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <Link to="/admin">
          <DropdownMenuItem className="cursor-pointer">
            <Shield className="mr-2 h-4 w-4" />
            Admin Panel
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--gradient-primary)] rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">DevPath</span>
            </Link>
            {showNav && <Navigation />}
          </div>
          
          {children || (
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {user ? (
                <UserMenu />
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="gradient">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
              
              {/* Mobile menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <Link to="/" className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[var(--gradient-primary)] rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">D</span>
                      </div>
                      <span className="text-xl font-bold text-foreground">DevPath</span>
                    </Link>
                    
                    <div className="flex flex-col space-y-3 pt-4">
                      {[
                        { path: '/', label: 'Home', icon: Home },
                        { path: '/roadmaps', label: 'Roadmaps', icon: Map },
                        { path: '/topics', label: 'Topics', icon: BookOpen },
                        { path: '/quiz', label: 'Quiz & Interview', icon: Brain },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icon className="h-5 w-5" />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                    
                    {user ? (
                      <div className="pt-4 border-t">
                        <div className="flex items-center space-x-2 mb-4">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.user_metadata?.avatar_url} alt={user?.email || ''} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {user?.email?.charAt(0).toUpperCase() || 'U'}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{user?.user_metadata?.full_name || user?.email}</p>
                            <p className="text-xs text-muted-foreground">{user?.email}</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start" 
                          onClick={handleSignOut}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Sign out
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-2 pt-4 border-t">
                        <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full">
                            Sign In
                          </Button>
                        </Link>
                        <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button variant="gradient" className="w-full">
                            Get Started
                          </Button>
                        </Link>
                      </div>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};