import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filters: Array<{
    id: string;
    label: string;
    count?: number;
  }>;
}

export const FilterTabs = ({ activeFilter, onFilterChange, filters }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.id)}
          className={`transition-all duration-200 ${
            activeFilter === filter.id 
              ? 'scale-105 shadow-glow' 
              : 'hover:scale-105'
          }`}
        >
          {filter.label}
          {filter.count !== undefined && (
            <Badge variant="secondary" className="ml-2">
              {filter.count}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
};