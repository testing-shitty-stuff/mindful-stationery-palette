import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Heart } from "lucide-react";

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
  // Mock data for demonstration - in real app, this would come from props or API
  const mockData = {
    price: 500,
    originalPrice: 750,
    soldCount: Math.floor(Math.random() * 150) + 50,
    rating: (4.2 + Math.random() * 0.6).toFixed(1),
    reviewCount: Math.floor(Math.random() * 40) + 15,
    isPopular: Math.random() > 0.6
  };

  return (
    <Card 
      className={`
        group cursor-pointer transition-all duration-300 ease-out overflow-hidden relative
        border-2 bg-gradient-to-br from-card to-card/80 shadow-soft hover:shadow-warm hover:-translate-y-2
        ${colorStyles[color]}
        ${isSelected ? 'scale-105 shadow-warm ring-2 ring-primary/20' : ''}
      `}
      onClick={onClick}
    >
      {/* Popular Badge */}
      {mockData.isPopular && (
        <Badge className={`absolute top-3 right-3 z-10 ${colorAccents[color]} text-white text-xs px-2 py-1`}>
          Popular
        </Badge>
      )}
      
      {/* Liked Badge */}
      <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
      </div>

      <div className="relative">
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${colorAccents[color]} shadow-sm`} />
        
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={image} 
            alt={`${color} stationery bundle`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-5 space-y-3">
          {/* Title and Description */}
          <div>
            <h3 className="font-semibold text-xl capitalize text-foreground mb-1 group-hover:text-primary transition-colors">
              {color} Bundle
            </h3>
            <p className="text-sm text-muted-foreground">Curated stationery collection</p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-foreground">{mockData.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({mockData.reviewCount} reviews)</span>
          </div>

          {/* Sales Count */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{mockData.soldCount}+ sold</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">₹{mockData.price}</span>
              <span className="text-sm text-muted-foreground line-through">₹{mockData.originalPrice}</span>
            </div>
            <Badge variant="secondary" className="text-xs font-medium bg-green-100 text-green-700 hover:bg-green-100">
              33% OFF
            </Badge>
          </div>

          {/* Stock Indicator */}
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 bg-muted rounded-full h-1.5">
              <div className={`h-full rounded-full ${colorAccents[color]} transition-all duration-300`} style={{width: '70%'}} />
            </div>
            <span className="text-xs text-muted-foreground">In Stock</span>
          </div>
        </div>
      </div>
    </Card>
  );
};