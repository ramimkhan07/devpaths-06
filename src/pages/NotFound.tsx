import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, BookOpen, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--gradient-secondary)] flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-32 h-1 bg-[var(--gradient-primary)] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-[var(--shadow-lg)]">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Let's get you back on track with your learning journey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button size="lg" className="bg-[var(--gradient-primary)] hover:opacity-90">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/roadmaps">
                <Button size="lg" variant="outline" className="border-border text-muted-foreground hover:bg-accent">
                  <Target className="w-5 h-5 mr-2" />
                  Browse Roadmaps
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="border-t border-border/50 pt-6">
              <p className="text-sm text-muted-foreground mb-4">Or explore these popular sections:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link to="/topics">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Topics
                  </Button>
                </Link>
                <Link to="/roadmaps/frontend">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Frontend Development
                  </Button>
                </Link>
                <Link to="/roadmaps/backend">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Backend Development
                  </Button>
                </Link>
                <Link to="/topics/react-basics">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    React Basics
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Need help? Contact our support team or check our documentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;