
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Loader2 } from 'lucide-react';
import { generateRoadmapPDF, PDFRoadmapData } from '@/utils/pdfGenerator';
import { useToast } from '@/hooks/use-toast';

interface PdfDownloadButtonProps {
  roadmapData: PDFRoadmapData;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
}

export const PdfDownloadButton = ({ roadmapData, variant = 'outline', size = 'sm' }: PdfDownloadButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generateRoadmapPDF(roadmapData);
      toast({
        title: "PDF Generated",
        description: "Your roadmap PDF is ready for download/print",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className="gap-2"
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {isGenerating ? 'Generating...' : 'Download PDF'}
    </Button>
  );
};
