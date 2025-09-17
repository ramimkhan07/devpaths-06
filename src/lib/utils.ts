import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to format duration
export function formatDuration(duration: string): string {
  return duration.replace(/(\d+)\s*(hour|hr|h)/gi, '$1h')
    .replace(/(\d+)\s*(minute|min|m)/gi, '$1m')
    .replace(/(\d+)\s*(second|sec|s)/gi, '$1s');
}

// Utility function to get difficulty color
export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'text-success';
    case 'intermediate':
      return 'text-warning';
    case 'advanced':
      return 'text-destructive';
    default:
      return 'text-muted-foreground';
  }
}

// Utility function to truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}
