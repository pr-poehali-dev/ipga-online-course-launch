import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

const ProductCard = ({ image, title, description, price, oldPrice, badge }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {badge}
          </div>
        )}
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">{price}</span>
          {oldPrice && (
            <span className="text-lg text-muted-foreground line-through">{oldPrice}</span>
          )}
        </div>
        <div className="flex gap-3 pt-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            В корзину
          </Button>
          <Button variant="outline" size="icon" className="border-border hover:border-primary">
            <Icon name="Heart" size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
