import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Maximize2, Minimize2, RefreshCw, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { toast } from 'sonner';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'tutorial' | 'documentation' | 'book' | 'podcast' | 'interactive' | 'tool' | 'practice';
  platform: string;
  difficulty?: string;
  duration?: string;
  rating?: number;
  free?: boolean;
  author?: string;
  views?: string;
  tags: string[];
}

interface ResourceViewerProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResourceViewer: React.FC<ResourceViewerProps> = ({ resource, isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset states when resource changes
  useEffect(() => {
    if (resource) {
      setHasError(false);
      setIsLoading(true);
      setIframeKey(prev => prev + 1);
      
      // Set a timeout to detect if iframe never loads
      const timeout = setTimeout(() => {
        if (isLoading) {
          setHasError(true);
          setIsLoading(false);
          toast.error('Resource took too long to load. Try opening in a new tab.');
        }
      }, 10000); // 10 second timeout

      return () => clearTimeout(timeout);
    }
  }, [resource, isLoading]);

  const handleRefresh = () => {
    setHasError(false);
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
    toast.success('Resource refreshed');
  };

  const handleOpenExternal = () => {
    if (resource) {
      const newWindow = window.open(resource.url, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        toast.error('Please allow popups for this site or copy the URL manually');
        // Fallback: copy URL to clipboard
        navigator.clipboard?.writeText(resource.url).then(() => {
          toast.success('URL copied to clipboard');
        });
      } else {
        toast.success('Opened in new tab');
      }
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!resource) return null;

  const dialogContentClass = isFullscreen 
    ? "fixed inset-0 z-50 w-screen h-screen max-w-none translate-x-0 translate-y-0 rounded-none border-0 p-0" 
    : "fixed left-[50%] top-[50%] z-50 grid w-[95vw] max-w-7xl h-[90vh] translate-x-[-50%] translate-y-[-50%] gap-0 border bg-background shadow-lg duration-200 rounded-lg p-0";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={dialogContentClass}>
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b bg-muted/30">
          <div className="flex-1 min-w-0">
            <DialogTitle className="text-lg font-semibold truncate pr-4">
              {resource.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Resource viewer for {resource.title} from {resource.platform}
            </DialogDescription>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                {resource.platform}
              </span>
              {resource.type && (
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs">
                  {resource.type}
                </span>
              )}
              {resource.difficulty && (
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-accent/50 text-accent-foreground text-xs">
                  {resource.difficulty}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              className="h-8 w-8 p-0"
              title="Refresh"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 w-8 p-0"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleOpenExternal}
              className="h-8 w-8 p-0"
              title="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            
            {!isFullscreen && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
                title="Close"
              >
                ×
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="flex-1 relative bg-white">
          {!hasError ? (
            <iframe
              key={iframeKey}
              src={resource.url}
              className="w-full h-full border-0"
              title={resource.title}
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation allow-popups-to-escape-sandbox"
              referrerPolicy="strict-origin-when-cross-origin"
              onError={() => {
                setHasError(true);
                setIsLoading(false);
                toast.error('Resource cannot be embedded. Opening in new tab instead.');
              }}
              onLoad={(e) => {
                const iframe = e.target as HTMLIFrameElement;
                
                try {
                  // Check if iframe content is accessible
                  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                  if (!iframeDoc || iframeDoc.location.href === 'about:blank') {
                    throw new Error('Cannot access iframe content');
                  }
                  
                  setIsLoading(false);
                  setHasError(false);
                } catch (error) {
                  // Iframe is blocked, show error state
                  setHasError(true);
                  setIsLoading(false);
                }
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center gap-4 max-w-md text-center p-6">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cannot Embed Resource</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This resource cannot be displayed in our viewer due to security restrictions. You can still access it by opening it in a new tab.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleOpenExternal}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </Button>
                  <Button variant="outline" onClick={handleRefresh}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Loading overlay */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="text-sm text-muted-foreground">Loading resource...</p>
                <p className="text-xs text-muted-foreground max-w-sm text-center">
                  If this takes too long, the resource may not support embedding.
                </p>
                <Button variant="outline" size="sm" onClick={handleOpenExternal}>
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Open in New Tab Instead
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom toolbar for fullscreen mode */}
        {isFullscreen && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg p-2 flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              className="h-8 px-3 text-xs"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Refresh
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleOpenExternal}
              className="h-8 px-3 text-xs"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Open External
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 px-3 text-xs"
            >
              <Minimize2 className="h-3 w-3 mr-1" />
              Exit Fullscreen
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 px-3 text-xs"
            >
              Close
            </Button>
          </div>
        )}

        {/* Error fallback - shows when iframe fails to load */}
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300" id="error-fallback" style={{ display: 'none' }}>
          <div className="flex flex-col items-center gap-4 max-w-md text-center p-6">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-destructive" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cannot Embed Resource</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This resource cannot be displayed in our viewer due to security restrictions. You can still access it by opening it in a new tab.
              </p>
            </div>
            <Button onClick={handleOpenExternal} className="pointer-events-auto">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};