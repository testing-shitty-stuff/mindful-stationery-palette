import { Card } from "@/components/ui/card";

interface BundleCardProps {
  color: 'green' | 'black' | 'red' | 'yellow' | 'blue' | 'violet';
  image: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const colorStyles = {
  green: 'border-bundle-green hover:shadow-[0_8px_30px_-12px_hsl(var(--bundle-green)/0.3)]',
  black: 'border-bundle-black hover:shadow-[0_8px_30px_-12px_hsl(var(--bundle-black)/0.3)]',
  red: 'border-bundle-red hover:shadow-[0_8px_30px_-12px_hsl(var(--bundle-red)/0.3)]',
  yellow: 'border-bundle-yellow hover:shadow-[0_8px_30px_-12px_hsl(var(--bundle-yellow)/0.3)]',
  blue: 'border-bundle-blue hover:shadow-[0_8px_30px_-12px_hsl(var(--bundle-blue)/0.3)]',
  violet: 'border-bundle-violet hover:shadow-[0_8px_30px_-12px_hsl(var(--bundle-violet)/0.3)]',
};

const colorAccents = {
  green: 'bg-bundle-green',
  black: 'bg-bundle-black',
  red: 'bg-bundle-red',
  yellow: 'bg-bundle-yellow',
  blue: 'bg-bundle-blue',
  violet: 'bg-bundle-violet',
};

export const BundleCard = ({ color, image, isSelected, onClick }: BundleCardProps) => {
  return (
    <Card 
      className={`
        group cursor-pointer transition-all duration-300 ease-out overflow-hidden
        border-2 bg-card shadow-soft hover:shadow-warm hover:-translate-y-1
        ${colorStyles[color]}
        ${isSelected ? 'scale-105 shadow-warm' : ''}
      `}
      onClick={onClick}
    >
      <div className="relative">
        <div className={`absolute top-0 left-0 right-0 h-1 ${colorAccents[color]}`} />
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={`${color} stationery bundle`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg capitalize text-foreground mb-1">{color}</h3>
          <p className="text-sm text-muted-foreground">Curated stationery bundle</p>
        </div>
      </div>
    </Card>
  );
};